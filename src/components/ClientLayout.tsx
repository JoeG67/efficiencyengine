"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F0F5FA]">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1">
        <Header onToggle={() => setIsSidebarOpen((prev) => !prev)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
