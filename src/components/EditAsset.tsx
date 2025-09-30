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
      price,
      status,
    };

    onSave(updatedAsset);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Asset Name
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
          Asset Category
        </label>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Asset Description
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
          Asset Quantity
        </label>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value === "" ? 0 : Number(e.target.value))
          }
          className="w-full p-3 rounded-lg border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Price per Asset (RM)
        </label>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value === "" ? 0 : Number(e.target.value))
          }
          className="w-full p-3 rounded-lg border border-gray-300 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          required
        />
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col">
        <label className="block text-base font-medium text-gray-700 mb-1">
          Asset Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as AssetStatus)}
          className="w-full p-3 rounded-lg border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        >
          {ASSET_STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
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
