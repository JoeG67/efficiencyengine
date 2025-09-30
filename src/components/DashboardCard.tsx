"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  color: string;
  count?: number | string;
  children: ReactNode;
  icon: ReactNode;
  href: string;
}

export default function DashboardCard({
  title,
  color,
  count,
  children,
  icon,
  href,
}: DashboardCardProps) {
  return (
    <Link
      href={href}
      className="bg-white p-4 rounded-lg shadow-xl flex items-center justify-between hover:shadow-2xl transition group"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 text-left px-3">
        <h2
          className="font-bold font-sans 2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-xs"
          style={{ color }}
        >
          {title} {count !== undefined && `(${count})`}
        </h2>
        <div className="mt-1 text-sm space-y-1" style={{ color }}>
          {children}
        </div>
      </div>
      <div className="flex-shrink-0 text-right">
        <span className="transition group-hover:opacity-70" style={{ color }}>
          ➝
        </span>
      </div>
    </Link>
  );
}
