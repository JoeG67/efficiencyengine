"use client";
import { useStore } from "@/store/useStore";

export default function PricingPage() {
  const assets = useStore((state) => state.assets);

  const totalValue = assets.reduce((sum, a) => sum + a.price * a.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pricing Overview</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Asset ID</th>
            <th className="p-2 border">Asset Name</th>
            <th className="p-2 border">Asset Quantity</th>
            <th className="p-2 border">Price Per Asset</th>
            <th className="p-2 border">Total Value</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => (
            <tr key={a.id} className="hover:bg-gray-50">
              <td className="p-2 border font-semibold">{a.id}</td>
              <td className="p-2 border font-semibold">{a.title}</td>
              <td className="p-2 border text-sm text-gray-700">{a.quantity}</td>
              <td className="p-2 border text-sm text-gray-700">RM{a.price}</td>
              <td className="p-2 border font-medium">
                RM{a.price * a.quantity}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 font-semibold">
            <td colSpan={4} className="p-2 border text-right">
              Grand Total
            </td>
            <td className="p-2 border">RM{totalValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
