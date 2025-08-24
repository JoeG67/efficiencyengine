"use client";

import { useState } from "react";
import { useStore, Task, TaskStatus, User } from "@/store/useStore";
import { v4 as uuidv4 } from "uuid";

type TaskFormProps = {
  onSave: (task: Task) => void;
  onCancel: () => void;
};

export default function TaskForm({ onSave, onCancel }: TaskFormProps) {
  const users = useStore((state) => state.users); // get users list
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [assignee, setAssignee] = useState<User | null>(null);
  const [status, setStatus] = useState<TaskStatus>("To Do");

  const TASK_STATUSES: TaskStatus[] = ["To Do", "In-Progress", "Done"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      startDate,
      endDate,
      assignee,
      status,
      createdAt: new Date().toISOString(),
    };

    onSave(newTask);
  };

return (
  <form onSubmit={handleSubmit} className="mb-4 p-4 grid grid-cols-2 gap-4 bg-white">
    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Task Name</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
        required
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Task Description</label>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-2 border rounded border-gray-200"
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full p-2 border rounded border-gray-200"
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium mb-1">Assignee</label>
      <select
        value={assignee?.id ?? ""}
        onChange={(e) => {
          const user = users.find((u) => u.id === e.target.value) || null;
          setAssignee(user);
        }}
        className="w-full p-2 rounded border border-gray-200"
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
      <label className="block text-sm font-medium mb-1">Status</label>
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
    </div>

    <div className="col-span-2 flex gap-2">
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
      >
        Save
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
