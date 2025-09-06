"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

return (
  <div className="flex min-h-screen bg-[#F0F5FA] overflow-y-hidden">
    <Sidebar isOpen={isSidebarOpen} />
    <div className="flex-1 flex flex-col">
      <Header onToggle={() => setIsSidebarOpen((prev) => !prev)} />
      <main className="flex-1 p-4 overflow-y-auto">{children}</main>
      <Footer />
    </div>
  </div>
);

}
