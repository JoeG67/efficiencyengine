"use client";

import { useState } from "react";
import { Asset, AssetStatus } from "@/store/useStore";

type EditAssetFormProps = {
  asset: Asset;
  onSave: (asset: Asset) => void;
  onCancel: () => void;
};

export default function EditAssetForm({
  asset,
  onSave,
  onCancel,
}: EditAssetFormProps) {
  const [title, setTitle] = useState(asset.title);
  const [description, setDescription] = useState(asset.description);
  const [category, setCategory] = useState(asset.category);
  const [quantity, setQuantity] = useState(asset.quantity);
  const [price, setPrice] = useState(asset.price);

  const [status, setStatus] = useState<AssetStatus>(asset.status);

  const ASSET_STATUSES: AssetStatus[] = ["Available", "In Use", "Review"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedAsset: Asset = {
      ...asset,
      title,
      category,
      description,
      quantity,
      status,
    };

    onSave(updatedAsset);
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
        className="w-full p-2 rounded border border-gray-200 "
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 rounded border border-gray-200"
      />
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
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as AssetStatus)}
        className="w-full p-2 rounded border border-gray-200"
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
