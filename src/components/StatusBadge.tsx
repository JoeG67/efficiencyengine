"use client";

export default function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Available: "bg-green-100 text-green-700",
    "In Use": "bg-yellow-100 text-yellow-700",
    default: "bg-gray-200 text-gray-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        colors[status] ?? colors.default
      }`}
    >
      {status}
    </span>
  );
}
