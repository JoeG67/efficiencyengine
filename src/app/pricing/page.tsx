"use client";
import { useStore } from "@/store/useStore";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PricingPage() {
  const assets = useStore((state) => state.assets);
  const [open, setOpen] = useState(false);
  const totalValue = assets.reduce((sum, a) => sum + a.price * a.quantity, 0);

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between pb-4 items-center">
          <div className="flex items-center gap-2 relative">
            <h1 className="text-2xl font-bold">Pricing Overview</h1>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center px-2 py-1 rounded hover:bg-gray-100 transition"
            >
              <ChevronDown size={18} />
            </button>

            {open && (
              <div className="absolute left-0 top-full mt-2 w-72 bg-white shadow-lg rounded-lg p-3 text-sm z-50">
                <p>
                  <span className="font-semibold">Total Value</span>: Asset
                  Quantity × Price Per Asset
                </p>
              </div>
            )}
          </div>
        </div>
        <section className="bg-white p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
          <table className="w-full border-collapse rounded-lg overflow-hidden text-sm">
            <thead className="bg-gray-100 text-left text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Quantity</th>
                <th className="px-4 py-2 border">Price Per Asset (RM)</th>
                <th className="px-4 py-2 border">Total Value (RM)</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a, i) => (
                <tr
                  key={a.id}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-4 py-3 border font-semibold">{a.id}</td>
                  <td className="px-4 py-3 border font-semibold">{a.title}</td>
                  <td className="px-4 py-3 border text-gray-700">
                    {a.quantity}
                  </td>
                  <td className="px-4 py-3 border text-gray-700">
                    RM{a.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 border font-medium">
                    RM{(a.price * a.quantity).toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold">
                <td colSpan={4} className="px-4 py-3 border text-right">
                  Grand Total
                </td>
                <td className="px-4 py-3 border">
                  RM{totalValue.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
