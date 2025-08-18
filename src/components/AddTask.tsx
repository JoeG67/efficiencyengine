"use client";

import { useState } from "react";
import { Task } from "@/store/useStore";
import { TaskStatus } from "@/store/useStore";
import { v4 as uuidv4 } from "uuid";

type TaskFormProps = {
  onSave: (task: Task) => void;
  onCancel: () => void;
};

export default function TaskForm({ onSave, onCancel }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");

  const TASK_STATUSES: TaskStatus[] = ["todo", "in-progress", "done"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status,
      createdAt: new Date().toISOString(),
    };

    onSave(newTask);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 bg-gray-200 rounded space-y-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded border"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus)}
        className="w-full p-2 rounded border"
      >
        {TASK_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s === "todo"
              ? "Todo"
              : s === "in-progress"
              ? "In Progress"
              : "Done"}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
