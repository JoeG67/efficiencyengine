"use client";
import { useStore } from "@/store/useStore";

export default function HomePage() {
  const tasks = useStore((state) => state.tasks);
  const assets = useStore((state) => state.assets);

  return (
    <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-4">
      <section className="bg-white p-4 rounded shadow-xl">
        <h2 className="2xl:text-lg xl:text-base lg:text-sm sm:text-xs font-bold font-sans">
          Tasks
        </h2>
        {tasks.length > 0 ? (
          <ul className="list-decimal pl-4">
            {tasks.slice(0, 3).map((t) => (
              <li key={t.id}>{t.title}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks yet</p>
        )}
      </section>
      <section className="bg-white p-4 rounded shadow-xl">
        <h2 className="2xl:text-lg xl:text-base lg:text-sm sm:text-xs font-bold font-sans">
          Assets
        </h2>
        {assets.length > 0 ? (
          <>
            <ul className="list-decimal pl-4">
              {assets.slice(0, 3).map((a) => (
                <li key={a.id}>{a.title}</li>
              ))}
            </ul>
            <a href="/assets"> See More</a>
          </>
        ) : (
          <p className="text-gray-500">No assets yet</p>
        )}
      </section>
    </main>
  );
}
