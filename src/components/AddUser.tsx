"use client";

import { useState } from "react";
import { User, userRole} from "@/store/useStore";
import { v4 as uuidv4 } from "uuid";

type UserFormProps = {
  onSave: (user: User) => void;
  onCancel: () => void;
};

export default function TaskForm({ onSave, onCancel }: UserFormProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState<userRole>("Employee");

  const USER_ROLES: userRole[] = ["Admin", "Manager", "Employee", "Viewer"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

const newUser: User = {
      id: uuidv4(),
      name,
      role,
      assignedTasks: [],
    };

    onSave(newUser);
  };

return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 bg-white space-y-2"
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
        required
      />

      <select
        value={role}
        onChange={(e) => setRole(e.target.value as userRole)}
        className="w-full p-2 rounded border border-gray-200"
      >
        {USER_ROLES.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <div className="flex gap-2">
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
