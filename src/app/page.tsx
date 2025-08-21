"use client";
import { useStore } from "@/store/useStore";
import { ListTodo, MoveRight, Boxes } from "lucide-react";

export default function HomePage() {
  const tasks = useStore((state) => state.tasks);
  const assets = useStore((state) => state.assets);

  return (
    <main className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-4 gap-4">
      <section className="bg-[#00A15D] p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <ListTodo className="2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-12 lg:h-12 sm:w-10 sm:h-10 sm:block hidden" color="#FFFFFF" />
        </div>

        <div className="text-left">
          <h2 className="2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-[8px] font-bold font-sans text-white">
            {tasks.length} tasks
          </h2>
        </div>

        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 w-4 h-4" color="#FFFFFF" />
          </a>
        </div>
      </section>

      <section className="bg-red-600 p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Boxes className="2xl:w-20 2xl:h-20 xl:w-16 xl:h-16 lg:w-12 lg:h-12 sm:w-10 sm:h-10 sm:block hidden" color="#FFFFFF" />
        </div>

        <div className="text-left">
          <h2 className="2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-[8px] font-bold font-sans text-white">
            {assets.length} assets
          </h2>
        </div>

        <div className="flex-shrink-0">
          <a
            href="/assets"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 w-4 h-4" color="#FFFFFF" />
          </a>
        </div>
      </section>
    </main>
  );
}
