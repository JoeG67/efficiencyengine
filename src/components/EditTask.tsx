"use client";

import { useState } from "react";
import { Task, TaskStatus, User } from "@/store/useStore";
import { useStore } from "@/store/useStore";

type EditTaskFormProps = {
  task: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
};

export default function EditTaskForm({
  task,
  onSave,
  onCancel,
}: EditTaskFormProps) {
  const users = useStore((state) => state.users);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [startDate, setStartDate] = useState(task.startDate);
  const [endDate, setEndDate] = useState(task.endDate);
  const [status, setStatus] = useState<TaskStatus>(task.status);
  const [assignee, setAssignee] = useState<User | null>(task.assignee ?? null);

  const TASK_STATUSES: TaskStatus[] = ["To Do", "In-Progress", "Done"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedTask: Task = {
      ...task,
      title,
      description,
      startDate,
      endDate,
      status,
      assignee,
    };

    onSave(updatedTask);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Task Name
        </label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Task Description
        </label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          End Date
        </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Assignee
        </label>
        <select
          value={assignee?.id ?? ""}
          onChange={(e) => {
            const user = users.find((u) => u.id === e.target.value) || null;
            setAssignee(user);
          }}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        >
          <option value="">Unassigned</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name} ({u.role})
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
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
      </div>
      <div className="col-span-1 md:col-span-2 flex gap-3">
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
