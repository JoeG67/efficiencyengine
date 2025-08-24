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
  const [price, setPrice] = useState(0);

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
      price,
      status,
      createdAt: new Date().toISOString(),
    };

    onSave(newAsset);
  };

return (
  <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium">Asset Name</label>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Asset Category</label>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
        required
      />
    </div>

    <div className="col-span-2">
      <label className="block text-sm font-medium">Asset Description</label>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Asset Quantity</label>
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) =>
          setQuantity(e.target.value === "" ? 0 : Number(e.target.value))
        }
        className="w-full p-2 rounded border border-gray-200"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium">Price per Asset (RM)</label>
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value === "" ? 0 : Number(e.target.value))
        }
        className="w-full p-2 rounded border border-gray-200"
        required
      />
    </div>

    <div className="col-span-2">
      <label className="block text-sm font-medium">Asset Status</label>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as AssetStatus)}
        className="w-full p-2 rounded border border-gray-200"
      >
        {ASSET_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
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
