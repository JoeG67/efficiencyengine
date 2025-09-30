"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { User } from "@/store/useStore";
import AddUser from "@/components/AddUser";
import EditUser from "@/components/EditUser";
import { Pencil, Trash, CirclePlus, ChevronDown } from "lucide-react";

export default function UsersPage() {
  const users = useStore((state) => state.users);
  const tasks = useStore((state) => state.tasks);

  const addUser = useStore((state) => state.addUser);
  const updateUser = useStore((state) => state.updateUser);
  const deleteUser = useStore((state) => state.deleteUser);

  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between pb-4 items-center">
          <div className="flex items-center gap-2 relative">
            <h1 className="text-2xl font-bold">Users</h1>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center px-2 py-1 rounded hover:bg-gray-100 transition"
            >
              <ChevronDown size={18} />
            </button>
            {open && (
              <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-3 text-sm z-50">
                <p>
                  <span className="text-green-600 font-semibold">Green</span>:
                  Add
                </p>
                <p>
                  <span className="text-blue-600 font-semibold">Blue</span>:
                  Edit
                </p>
                <p>
                  <span className="text-red-600 font-semibold">Red</span>:
                  Delete
                </p>
              </div>
            )}
          </div>
          <button
            className="border-green-500 border-2 rounded-sm bg-green-500 text-white px-3 py-1"
            onClick={() => {
              setEditingUser(null);
              setShowForm(true);
            }}
          >
            <CirclePlus size={16} />
          </button>
        </div>
        {showForm && !editingUser && (
          <AddUser
            onSave={(user) => {
              addUser(user);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}
        {editingUser && (
          <EditUser
            user={editingUser}
            onSave={(updated) => {
              updateUser(updated.id, updated);
              setEditingUser(null);
            }}
            onCancel={() => setEditingUser(null)}
          />
        )}
        <section className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 text-left text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Assigned Tasks</th>
                <th className="px-4 py-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => {
                const assignedCount = tasks.filter(
                  (t) => t.assignee?.id === u.id
                ).length;
                return (
                  <tr
                    key={u.id}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-4 py-3 border font-semibold">{u.id}</td>
                    <td className="px-4 py-3 border font-semibold">{u.name}</td>
                    <td className="px-4 py-3 border text-gray-700">{u.role}</td>
                    <td className="px-4 py-3 border text-gray-700">
                      {assignedCount}
                    </td>
                    <td className="px-4 py-3 border text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => setEditingUser(u)}
                          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => deleteUser(u.id)}
                          className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
