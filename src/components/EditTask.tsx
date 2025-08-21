"use client";

import { useState } from "react";
import { Task, TaskStatus } from "@/store/useStore";

type EditTaskFormProps = {
  task: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
};

export default function EditTaskForm({ task, onSave, onCancel }: EditTaskFormProps) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState<TaskStatus>(task.status);

  const TASK_STATUSES: TaskStatus[] = ["To Do", "In-Progress", "Done"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask: Task = {
      ...task, 
      title,
      description,
      status,
    };

    onSave(updatedTask);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 bg-white space-y-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
        className="w-full p-2 rounded border border-gray-200"
      >
        {TASK_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s === "To Do"
              ? "Todo"
              : s === "In-Progress"
              ? "In Progress"
              : "Done"}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
