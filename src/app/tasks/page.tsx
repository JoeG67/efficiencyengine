"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { Task } from "@/store/useStore";
import TaskForm from "@/components/AddTask";
import EditTaskForm from "@/components/EditTask";
import { Pencil, Trash, CirclePlus, ChevronDown } from "lucide-react";

export default function Tasks() {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
  const updateTask = useStore((state) => state.updateTask);
  const deleteTask = useStore((state) => state.deleteTask);

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [open, setOpen] = useState(false);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between pb-4 items-center">
          <div className="flex items-center gap-2 relative">
            <h1 className="text-2xl font-bold">Tasks</h1>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center px-2 py-1 rounded hover:bg-gray-100"
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
            className="flex items-center gap-1 border-2 border-green-500 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
            onClick={() => {
              setEditingTask(null);
              setShowForm(true);
            }}
          >
            <CirclePlus size={18} />{" "}
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
        {showForm && !editingTask && (
          <TaskForm
            onSave={(task) => {
              addTask(task);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}
        {editingTask && (
          <EditTaskForm
            task={editingTask}
            onSave={(updated) => {
              updateTask(updated.id, updated);
              setEditingTask(null);
            }}
            onCancel={() => setEditingTask(null)}
          />
        )}
        <section className="bg-white p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-xs uppercase tracking-wider text-gray-600">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Start</th>
                <th className="px-4 py-2 border">End</th>
                <th className="px-4 py-2 border">Assignee</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t, i) => (
                <tr
                  key={t.id}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-3 border font-semibold">{t.id}</td>
                  <td className="px-4 py-3 border font-semibold">{t.title}</td>
                  <td className="px-4 py-3 border text-sm text-gray-700">
                    {t.description}
                  </td>
                  <td className="px-4 py-3 border text-sm text-gray-700">
                    {formatDate(t.startDate)}
                  </td>
                  <td className="px-4 py-3 border text-sm text-gray-700">
                    {formatDate(t.endDate)}
                  </td>
                  <td className="px-4 py-3 border text-sm text-gray-700">
                    {t.assignee ? t.assignee.name : "Unassigned"}
                  </td>
                  <td className="px-4 py-3 border">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          t.status === "Done"
                            ? "bg-green-100 text-green-700"
                            : t.status === "In-Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      {t.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setEditingTask(t)}
                        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        title="Edit Task"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => deleteTask(t.id)}
                        className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        title="Delete Task"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
