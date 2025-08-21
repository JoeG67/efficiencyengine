"use client";
import { Menu } from "lucide-react";
import { Inter } from "next/font/google";
export default function Header({
  onToggle,
}: {
  onToggle: () => void;
}) {
  return (
    <header className="bg-white text-black p-4 flex items-center justify-between transition-all duration-300">
              <button
        className="p-2"
        onClick={onToggle}
      >
        <Menu className="text-black hover:text-[#B8B6B6]" size={24} />
      </button>
            <h1 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm font-bold font-sans">Search Bar</h1>

      <h1 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm font-bold font-sans">Shortcut</h1>

    </header>
  );
}
