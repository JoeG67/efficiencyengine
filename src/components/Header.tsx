"use client";
import { Menu, ChevronDown, Search } from "lucide-react";
import { useStore } from "@/store/useStore";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function Header({ onToggle }: { onToggle: () => void }) {
  const tasks = useStore((state) => state.tasks);
  const assets = useStore((state) => state.assets);
  const users = useStore((state) => state.users);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const taskMatches = tasks
      .filter((t) => t.title.toLowerCase().includes(q))
      .map((t) => ({ type: "Task", label: t.title, href: `/tasks/` }));

    const assetMatches = assets
      .filter((a) => a.title.toLowerCase().includes(q))
      .map((a) => ({ type: "Asset", label: a.title, href: `/assets/` }));

    const userMatches = users
      .filter((u) => u.name.toLowerCase().includes(q))
      .map((u) => ({ type: "User", label: u.name, href: `/users/` }));

    return [...taskMatches, ...assetMatches, ...userMatches];
  }, [query, tasks, assets, users]);

  return (
    <header className="bg-white text-black p-4 flex items-center justify-between transition-all duration-300 relative">
      <button className="p-2" onClick={onToggle}>
        <Menu className="text-black hover:text-[#B8B6B6]" size={24} />
      </button>
      <div className="relative">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-gray-300 rounded-l-lg px-3 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button className="bg-gray-200 border border-l-0 border-gray-300 rounded-r-lg px-3 flex items-center justify-center hover:bg-gray-300">
            <Search className="text-black" size={20} />
          </button>
        </div>

        {query && results.length > 0 && (
          <ul className="absolute top-full left-0 mt-1 w-64 bg-white border rounded shadow-lg z-50">
            {results.map((r, i) => (
              <li
                key={i}
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
              >
                <Link
                  href={r.href}
                  className="block px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <span className="font-semibold">{r.type}:</span> {r.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-gray-100"
        >
          <span className="font-semibold">Summary</span>
          <ChevronDown size={16} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 text-sm">
            <div className="flex justify-between">
              <span>Tasks:</span>
              <span className="font-bold">{tasks.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Assets:</span>
              <span className="font-bold">{assets.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Users:</span>
              <span className="font-bold">{users.length}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
