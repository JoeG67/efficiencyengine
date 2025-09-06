"use client";
import {
  FolderClosed,
  ListChecks,
  LayoutDashboard,
  Users,
  Gem,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const currentPath = usePathname();
  return (
    <aside
      className={`bg-[#15283c] border-r min-h-screen transition-all duration-300 ease-in-out flex flex-col ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-center p-6">
        {isOpen && (
          <Link
            className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm font-bold text-white font-sans"
            href="/"
          >
            EFFICIENCY ENGINE
          </Link>
        )}

        {!isOpen && (
          <Link
            className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-white font-bold"
            href="/"
          >
            EE
          </Link>
        )}
      </div>

      <nav className="flex flex-col gap-2 p-4 text-white font-sans 2xl:text-lg xl:text-base lg:text-sm sm:text-xs">
        <Link
          href="/"
          className={
            currentPath === "/"
              ? "bg-zinc-400 p-2 rounded flex items-center gap-2"
              : "hover:bg-zinc-600 p-2 rounded flex items-center gap-2"
          }
        >
          <LayoutDashboard size={20} color="#ff9800" /> {isOpen && "Dashboard"}
        </Link>
        <Link
          href="/tasks"
          className={
            currentPath === "/tasks"
              ? "bg-zinc-400 p-2 rounded flex items-center gap-2"
              : "hover:bg-zinc-600 p-2 rounded flex items-center gap-2"
          }
        >
          <ListChecks size={20} color="#2563EB"/> {isOpen && "Tasks"}
        </Link>
        <Link
          href="/assets"
          className={
            currentPath === "/assets"
              ? "bg-zinc-400 p-2 rounded flex items-center gap-2"
              : "hover:bg-zinc-600 p-2 rounded flex items-center gap-2"
          }
        >
          <FolderClosed size={20} color="#DC2626" /> {isOpen && "Asset Management"}
        </Link>
        <Link
          href="/users"
          className={
            currentPath === "/users"
              ? "bg-zinc-400 p-2 rounded flex items-center gap-2"
              : "hover:bg-zinc-600 p-2 rounded flex items-center gap-2"
          }
        >
          <Users size={20} color="#9333EA" /> {isOpen && "User Management"}
        </Link>
        <Link
          href="/pricing"
          className={
            currentPath === "/pricing"
              ? "bg-zinc-400 p-2 rounded flex items-center gap-2"
              : "hover:bg-zinc-600 p-2 rounded flex items-center gap-2"
          }
        >
          <Gem size={20} color="#00A15D" /> {isOpen && "Pricing"}
        </Link>
      </nav>
    </aside>
  );
}
