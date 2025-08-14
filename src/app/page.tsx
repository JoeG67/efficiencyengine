"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useStore } from "@/store/useStore";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const tasks = useStore((state) => state.tasks);
  const assets = useStore((state) => state.assets);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen}  />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          sidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        <Header onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
 {/* <section className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Tasks</h2>
            {tasks.length > 0 ? (
              <ul className="list-disc pl-5">
                {tasks.slice(0, 3).map((t) => (
                  <li key={t.id}>{t.title}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No tasks yet</p>
            )}
          </section>

          <section className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Assets</h2>
            {assets.length > 0 ? (
              <ul className="list-disc pl-5">
                {assets.slice(0, 3).map((a) => (
                  <li key={a.id}>{a.title}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No assets yet</p>
            )}
          </section> */}
        </main>
      </div>
    </div>
  );
}
