"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { User } from "@/store/useStore";
import AddUser from "@/components/AddUser";
import EditUser from "@/components/EditUser";
import { Pencil, Trash, CirclePlus } from "lucide-react";

export default function Assets() {
  const users = useStore((state) => state.users);
  const tasks = useStore((state) => state.tasks);

  const addUser = useStore((state) => state.addUser);
  const updateUser = useStore((state) => state.updateUser);

  const deleteUser = useStore((state) => state.deleteUser);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between pb-2">
          <h1 className="text-2xl font-bold">Users</h1>{" "}
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

        <section className="bg-white p-4 rounded shadow-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Tasks</th>
                <th className="p-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => {
                const assignedCount = tasks.filter(
                  (t) => t.assignee?.id === u.id
                ).length;
                return (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="p-2 border font-semibold">{u.id}</td>
                    <td className="p-2 border font-semibold">{u.name}</td>
                    <td className="p-2 border text-sm text-gray-700">
                      {u.role}
                    </td>
                    <td className="p-2 border text-sm text-gray-700">
                      {assignedCount}
                    </td>
                    <td className="p-2 border text-center">
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
