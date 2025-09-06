"use client";
import { useStore } from "@/store/useStore";
import {
  ListTodo,
  MoveRight,
  Boxes,
  DollarSign,
  Users,
  Calendar,
  PieChart,
  Logs,
} from "lucide-react";

export default function HomePage() {
  const tasks = useStore((state) => state.tasks);
  const assets = useStore((state) => state.assets);
  const users = useStore((state) => state.users);
  const totalAssetValue = assets.reduce(
    (sum, a) => sum + a.price * a.quantity,
    0
  );

  return (
    <main className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 sm:grid-cols-4 gap-4">
      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <ListTodo
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#2563EB"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#2563EB]">
            Tasks ({tasks.length})
          </h2>
          <p className="text-[#2563EB] text-sm">
            To Do: {tasks.filter((t) => t.status === "To Do").length} | In
            Progress: {tasks.filter((t) => t.status === "In-Progress").length} |
            Done: {tasks.filter((t) => t.status === "Done").length}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-[#2563EB] underline hover:text-[#2563EB] transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#2563EB"
            />
          </a>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Boxes
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#DC2626"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#DC2626]">
            Assets ({assets.length})
          </h2>
          <p className="text-[#DC2626] text-sm">
            Available: {assets.filter((a) => a.status === "Available").length} |
            In Use: {assets.filter((a) => a.status === "In Use").length} |
            Review: {assets.filter((a) => a.status === "Review").length}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/assets"
            className="text-[#DC2626] underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#DC2626"
            />
          </a>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <DollarSign
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#00A15D"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#00A15D]">
            Asset Values
          </h2>
          <p className="text-[#00A15D] text-sm">
            Total: RM{totalAssetValue.toLocaleString()}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/pricing"
            className="text-[#00A15D] underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="##00A15D"
            />
          </a>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Users
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#9333EA"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#9333EA]">
            Users
          </h2>
          <p className="text-[#9333EA] text-sm">Total: {users.length}</p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/users"
            className="text-[#9333EA] underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#9333EA"
            />
          </a>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <PieChart
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#CA8A04"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#CA8A04]">
            Task Status
          </h2>
          <p className="text-[#CA8A04] text-sm">
            To Do: {tasks.filter((t) => t.status === "To Do").length}, In
            Progress: {tasks.filter((t) => t.status === "In-Progress").length},
            Done: {tasks.filter((t) => t.status === "Done").length}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-[#CA8A04] underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#CA8A04"
            />
          </a>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Logs
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#EA580C"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#EA580C]">
            Task Distribution
          </h2>
          <p className="text-[#EA580C] text-sm">
            {users
              .map(
                (u) =>
                  `${u.name}: ${
                    tasks.filter((t) => t.assignee?.id === u.id).length
                  }`
              )
              .join(", ")}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/users"
            className="text-[#EA580C] underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#EA580C"
            />
          </a>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Calendar
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#009688"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-[#009688]">
            Deadlines
          </h2>
          <ul className="text-[#009688] text-sm space-y-1">
            {tasks
              .sort(
                (a, b) =>
                  new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
              )
              .slice(0, 3)
              .map((t) => (
                <li key={t.id}>
                  <span className="font-medium">{t.title}</span>: {t.endDate}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-[#009688] underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#009688"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
