"use client";

import { useState } from "react";
import { User, userRole } from "@/store/useStore";
import { v4 as uuidv4 } from "uuid";

type UserFormProps = {
  onSave: (user: User) => void;
  onCancel: () => void;
};

export default function UserForm({ onSave, onCancel }: UserFormProps) {
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
      className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          User Name
        </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          User Role
        </label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as userRole)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        >
          {USER_ROLES.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-1 md:col-span-2 flex gap-3">
        <button
          type="submit"
          className="flex-1 px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          Save
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
