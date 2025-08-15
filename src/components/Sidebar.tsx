"use client";
import { FolderClosed, Check, LayoutDashboard } from "lucide-react";
import Link from "next/link";
export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`bg-[#313a46] border-r transition-all duration-300 ease-in-out flex flex-col ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-center p-6">
                {isOpen && <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm font-bold text-white font-sans">EFFICIENCY ENGINE</h2>}

        {!isOpen && <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-white font-bold">EE</h2>}
      </div>

      <nav className="flex flex-col gap-2 p-4 text-white font-sans 2xl:text-lg xl:text-base lg:text-sm sm:text-xs">
        <Link href="/" className="hover:bg-gray-400 p-2 rounded flex items-center gap-2">
          <LayoutDashboard size={20} /> {isOpen && "Dashboard"}
        </Link>
        <Link href="/tasks" className="hover:bg-gray-400 p-2 rounded flex items-center gap-2">
          <Check size={20} /> {isOpen && "Tasks"}
        </Link>
        <Link href="/assets" className="hover:bg-gray-400 p-2 rounded flex items-center gap-2">
          <FolderClosed size={20} /> {isOpen && "Asset Management"}
        </Link>
      </nav>
    </aside>
  );
}
