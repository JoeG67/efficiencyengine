"use client";
import { useStore } from "@/store/useStore";
import { useState } from "react";
import { Asset } from "@/store/useStore";
import AssetForm from "@/components/AddAsset";
import EditAssetForm from "@/components/EditAsset";
import { Pencil, Trash, CirclePlus, ChevronDown} from "lucide-react";

export default function Assets() {
  const assets = useStore((state) => state.assets);
  const addAsset = useStore((state) => state.addAsset);
  const updateAsset = useStore((state) => state.updateAsset);

  const deleteAsset = useStore((state) => state.deleteAsset);
  const [showForm, setShowForm] = useState(false);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between pb-2">
<div className="flex items-center gap-2 relative">
  <h1 className="text-2xl font-bold">Assets</h1>
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center px-2 py-1 rounded hover:bg-gray-100"
  >
    <ChevronDown size={18} />
  </button>

  {open && (
    <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-lg p-3 text-sm z-50">
      <p>
        <span className="text-green-600 font-semibold">Green</span>: Add
      </p>
      <p>
        <span className="text-blue-600 font-semibold">Blue</span>: Edit
      </p>
      <p>
        <span className="text-red-600 font-semibold">Red</span>: Delete
      </p>
    </div>
  )}
</div>          <button
            className="border-green-500 border-2 rounded-sm bg-green-500 text-white px-3 py-1"
            onClick={() => {
              setEditingAsset(null);
              setShowForm(true);
            }}
          >
            <CirclePlus size={16} />
          </button>
        </div>

        {showForm && !editingAsset && (
          <AssetForm
            onSave={(asset) => {
              addAsset(asset);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        )}

        {editingAsset && (
          <EditAssetForm
            asset={editingAsset}
            onSave={(updated) => {
              updateAsset(updated.id, updated);
              setEditingAsset(null);
            }}
            onCancel={() => setEditingAsset(null)}
          />
        )}

        <section className="bg-white p-4 rounded shadow-2xl mb-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Asset ID</th>
                <th className="p-2 border">Asset Name</th>
                <th className="p-2 border">Asset Category</th>
                <th className="p-2 border">Asset Description</th>
                <th className="p-2 border">Asset Quantity</th>
                <th className="p-2 border">Price per Asset (RM)</th>

                <th className="p-2 border">Asset Status</th>
                <th className="p-2 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a) => (
                <tr key={a.id} className="hover:bg-gray-50">
                  <td className="p-2 border font-semibold">{a.id}</td>
                  <td className="p-2 border font-semibold">{a.title}</td>
                  <td className="p-2 border text-sm text-gray-700">
                    {a.category}
                  </td>
                  <td className="p-2 border text-sm text-gray-700">
                    {a.description}
                  </td>
                  <td className="p-2 border text-sm text-gray-700">
                    {a.quantity}
                  </td>
                  <td className="p-2 border text-sm text-gray-700">
                    {a.price}
                  </td>
                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium
                        ${
                          a.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : a.status === "In Use"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-200 text-gray-700"
                        }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="p-2 border text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setEditingAsset(a)}
                        className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => deleteAsset(a.id)}
                        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
