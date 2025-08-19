"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { Task } from "@/store/useStore";
import TaskForm from "@/components/AddTask";
import EditTaskForm from "@/components/EditTask";
import { Pencil, Trash, CirclePlus } from "lucide-react";

export default function Tasks() {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);
    const updateTask = useStore((state) => state.updateTask);

  const deleteTask = useStore((state) => state.deleteTask);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

return (
    <div>
      <div className="p-6">
        <div className="flex justify-between pb-2">
          <h1 className="text-2xl font-bold">Tasks</h1>{" "}
          <button
            className="border-green-500 border-2 rounded-sm bg-green-500 text-white px-3 py-1"
            onClick={() => {
              setEditingTask(null); 
              setShowForm(true);
            }}
          >
            <CirclePlus size={16} />
          </button>
        </div>

        {/* Add Task Form */}
        {showForm && !editingTask && (
          <TaskForm
            onSave={(task) => {
              addTask(task);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}

        {/* Edit Task Form */}
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

        <section className="bg-white p-4 rounded shadow-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border-b">ID</th>
                <th className="p-2 border-b">Title</th>
                <th className="p-2 border-b">Description</th>
                <th className="p-2 border-b">Status</th>
                <th className="p-2 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50">
                  <td className="p-2 border-b font-semibold">{t.id}</td>
                  <td className="p-2 border-b font-semibold">{t.title}</td>
                  <td className="p-2 border-b text-sm text-gray-700">
                    {t.description}
                  </td>
                  <td className="p-2 border-b">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium
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
                  <td className="p-2 border-b text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setEditingTask(t)}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => deleteTask(t.id)}
                        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
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