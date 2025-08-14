"use client";
import { FolderClosed, Check, LayoutDashboard } from "lucide-react";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`bg-[#313a46] border-r transition-all duration-300 ease-in-out flex flex-col ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-center p-6">
        {/* Optional logo or icon when collapsed */}
                {isOpen && <h2 className="text-xl text-white font-bold font-sans">EFFICIENCY ENGINE</h2>}

        {!isOpen && <h2 className="text-xl text-white font-bold">EE</h2>}
      </div>

      <nav className="flex flex-col gap-2 p-4 text-white font-sans">
        <a href="#" className="hover:bg-gray-400 p-2 rounded flex items-center gap-2">
          <LayoutDashboard size={20} /> {isOpen && "Dashboard"}
        </a>
        <a href="#" className="hover:bg-gray-400 p-2 rounded flex items-center gap-2">
          <Check size={20} /> {isOpen && "Tasks"}
        </a>
        <a href="#" className="hover:bg-gray-400 p-2 rounded flex items-center gap-2">
          <FolderClosed size={20} /> {isOpen && "Asset Management"}
        </a>
      </nav>
    </aside>
  );
}
