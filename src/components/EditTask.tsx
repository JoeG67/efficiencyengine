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
  <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white space-y-4">
    <div className="flex flex-col">
      <label className="block text-sm font-medium">Task Name</label>
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
      <label className="block text-sm font-medium">Task Description</label>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium">Start Date</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="w-full p-2 border rounded border-gray-200"
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium">End Date</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="w-full p-2 border rounded border-gray-200"
      />
    </div>

    <div className="flex flex-col">
      <label className="block text-sm font-medium">Assignee</label>
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
      <label className="block text-sm font-medium">Status</label>
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
