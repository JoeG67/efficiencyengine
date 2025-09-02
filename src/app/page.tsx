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
      <section className="bg-blue-600 p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <ListTodo
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            Tasks
          </h2>
          <p className="text-white text-sm">
            Total: {tasks.length} | To Do:{" "}
            {tasks.filter((t) => t.status === "To Do").length} | In Progress:{" "}
            {tasks.filter((t) => t.status === "In-Progress").length} | Done:{" "}
            {tasks.filter((t) => t.status === "Done").length}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>

      <section className="bg-red-600 p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Boxes
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            Assets
          </h2>
          <p className="text-white text-sm">
            Total: {assets.length} | Available:{" "}
            {assets.filter((a) => a.status === "Available").length} | In Use:{" "}
            {assets.filter((a) => a.status === "In Use").length} | Review:{" "}
            {assets.filter((a) => a.status === "Review").length}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/assets"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>

      <section className="bg-[#00A15D] p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <DollarSign
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            Asset Value
          </h2>
          <p className="text-white text-sm">
            Total: RM{totalAssetValue.toLocaleString()}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/pricing"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>

      <section className="bg-purple-600 p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Users
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            Users
          </h2>
          <p className="text-white text-sm">Total: {users.length}</p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/users"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>

      <section className="bg-yellow-500 p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <PieChart
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            Task Status Breakdown
          </h2>
          <p className="text-white text-sm">
            To Do: {tasks.filter((t) => t.status === "To Do").length}, In
            Progress: {tasks.filter((t) => t.status === "In-Progress").length},
            Done: {tasks.filter((t) => t.status === "Done").length}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>

      <section className="bg-orange-600 p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Logs
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            User Task Distribution
          </h2>
          <p className="text-white text-sm">
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
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>

      <section className="bg-[#009688] p-4 rounded-lg shadow-xl flex items-center justify-between">
        <div className="flex-shrink-0">
          <Calendar
            className="2xl:w-14 2xl:h-14 xl:w-12 xl:h-12 lg:w-10 lg:h-10 sm:w-8 sm:h-8 sm:block hidden"
            color="#FFFFFF"
          />
        </div>
        <div className="text-left">
          <h2 className="2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[8px] font-bold font-sans text-white">
            Upcoming Deadlines
          </h2>
          <p className="text-white text-sm">
            {tasks
              .sort(
                (a, b) =>
                  new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
              )
              .slice(0, 3)
              .map((t) => `${t.title}: ${t.endDate}`)
              .join(", ")}
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/tasks"
            className="text-white underline hover:text-gray-200 transition 2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm text-xs"
          >
            <MoveRight
              className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 w-4 h-4"
              color="#FFFFFF"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
