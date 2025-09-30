"use client";
import { useMemo } from "react";
import { useStore } from "@/store/useStore";
import {
  ListTodo,
  Boxes,
  DollarSign,
  Users,
  Calendar,
  PieChart,
  Logs,
} from "lucide-react";
import DashboardCard from "@/components/DashboardCard";

export default function HomePage() {
  const tasks = useStore((state) => state.tasks);
  const assets = useStore((state) => state.assets);
  const users = useStore((state) => state.users);

  const totalAssetValue = assets.reduce(
    (sum, a) => sum + a.price * a.quantity,
    0
  );

  const nearestTasks = useMemo(
    () =>
      [...tasks]
        .sort(
          (a, b) =>
            new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
        )
        .slice(0, 3),
    [tasks]
  );

  return (
    <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <DashboardCard
        title="Tasks"
        count={tasks.length}
        color="#2563EB"
        href="/tasks"
        icon={<ListTodo color="#2563EB" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <p>
          To Do: {tasks.filter((t) => t.status === "To Do").length} | In
          Progress: {tasks.filter((t) => t.status === "In-Progress").length} |
          Done: {tasks.filter((t) => t.status === "Done").length}
        </p>
      </DashboardCard>

      <DashboardCard
        title="Assets"
        count={assets.length}
        color="#DC2626"
        href="/assets"
        icon={<Boxes color="#DC2626" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <p>
          Available: {assets.filter((a) => a.status === "Available").length} |
          In Use: {assets.filter((a) => a.status === "In Use").length} | Review:{" "}
          {assets.filter((a) => a.status === "Review").length}
        </p>
      </DashboardCard>

      <DashboardCard
        title="Asset Value"
        color="#00A15D"
        href="/pricing"
        icon={<DollarSign color="#00A15D" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <p>Total: RM{totalAssetValue.toLocaleString()}</p>
      </DashboardCard>

      <DashboardCard
        title="Registered Users"
        color="#9333EA"
        count={users.length}
        href="/users"
        icon={<Users color="#9333EA" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <p>Total: {users.length}</p>
      </DashboardCard>

      <DashboardCard
        title="Task Status"
        color="#CA8A04"
        href="/tasks"
        icon={<PieChart color="#CA8A04" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <p>
          To Do: {tasks.filter((t) => t.status === "To Do").length}, In
          Progress: {tasks.filter((t) => t.status === "In-Progress").length},
          Done: {tasks.filter((t) => t.status === "Done").length}
        </p>
      </DashboardCard>

      <DashboardCard
        title="Task Distribution"
        color="#EA580C"
        href="/users"
        icon={<Logs color="#EA580C" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {u.name}: {tasks.filter((t) => t.assignee?.id === u.id).length}
            </li>
          ))}
        </ul>
      </DashboardCard>

      <DashboardCard
        title="Task Deadlines"
        color="#009688"
        href="/tasks"
        icon={<Calendar color="#009688" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12" />}
      >
        <ul>
          {nearestTasks.map((t) => (
            <li key={t.id}>
              <span className="font-medium">{t.title}</span>: {t.endDate}
            </li>
          ))}
        </ul>
      </DashboardCard>
    </main>
  );
}
