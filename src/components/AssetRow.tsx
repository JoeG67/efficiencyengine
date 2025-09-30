"use client";

import { Pencil, Trash } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { Asset } from "@/store/useStore";

export default function AssetRow({
  asset,
  onEdit,
  onDelete,
}: {
  asset: Asset;
  onEdit: (a: Asset) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <tr key={asset.id} className="hover:bg-gray-50">
      <td className="p-2 border font-semibold">{asset.id}</td>
      <td className="p-2 border font-semibold">{asset.title}</td>
      <td className="p-2 border text-sm text-gray-700">{asset.category}</td>
      <td className="p-2 border text-sm text-gray-700">{asset.description}</td>
      <td className="p-2 border text-sm text-right text-gray-700">
        {asset.quantity}
      </td>
      <td className="p-2 border text-sm text-right text-gray-700">
        {asset.price}
      </td>
      <td className="p-2 border text-center">
        <StatusBadge status={asset.status} />
      </td>
      <td className="p-2 border text-center">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit(asset)}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition"
            title="Edit Asset"
            aria-label="Edit Asset"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(asset.id)}
            className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 hover:scale-105 transition"
            title="Delete Asset"
            aria-label="Delete Asset"
          >
            <Trash size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}
