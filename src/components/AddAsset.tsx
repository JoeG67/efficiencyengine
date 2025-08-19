"use client";

import { useState } from "react";
import { Asset } from "@/store/useStore";
import { AssetStatus } from "@/store/useStore";
import { v4 as uuidv4 } from "uuid";

type AssetFormProps = {
  onSave: (asset: Asset) => void;
  onCancel: () => void;
};

export default function AssetForm({ onSave, onCancel }: AssetFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [status, setStatus] = useState<AssetStatus>("Available");

  const ASSET_STATUSES: AssetStatus[] = ["Available", "In Use", "Review"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newAsset: Asset = {
      id: uuidv4(),
      title,
      category,
      description,
      quantity,
      status,
      createdAt: new Date().toISOString(),
    };

    onSave(newAsset);
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
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 rounded border"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border"
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value === "" ? 0 : Number(e.target.value))
        }
        className="w-full p-2 rounded border"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as AssetStatus)}
        className="w-full p-2 rounded border"
      >
        {ASSET_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s === "Available"
              ? "Available"
              : s === "In Use"
              ? "In Use"
              : "Review"}
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
