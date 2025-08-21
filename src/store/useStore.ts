"use client";     

import { create } from "zustand";
import { persist } from "zustand/middleware";

// 1. Item types

export type TaskStatus = "To Do" | "In-Progress" | "Done";
export type AssetStatus = "Available" | "In Use" | "Review";
export type userRole = "Admin" | "Manager" | "Employee" | "Viewer"; 
export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assetId?: string;
  createdAt: string;
};

export type Asset = {
  id: string;
  title: string;
  category: string;
  description: string;
  quantity: number;
  price: number;
  status: AssetStatus;
  createdAt: string;
};
export type User = {
  id: string;
  name: string;
  role: userRole;
};

// 2. Shape of store

type StoreState = {
  tasks: Task[];
  assets: Asset[];

  addTask: (task: Task) => void;
  updateTask: (id: string, updated: Partial<Task>) => void;

  deleteTask: (id: string) => void;

  addAsset: (task: Asset) => void;
  updateAsset: (id: string, updated: Partial<Asset>) => void;
  deleteAsset: (id: string) => void;
};

// 3. Store state

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      tasks: [],
      assets: [],

      // Task actions
      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      updateTask: (id, updated) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, ...updated } : t
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
        })),

      // Asset actions
      addAsset: (asset) =>
        set((state) => ({
          assets: [...state.assets, asset],
        })),

      updateAsset: (id, updated) =>
        set((state) => ({
          assets: state.assets.map((a) =>
            a.id === id ? { ...a, ...updated } : a
          ),
        })),

      deleteAsset: (id) =>
        set((state) => ({
          assets: state.assets.filter((a) => a.id !== id),
        })),
    }),
    {
      name: "efficiency-engine-store", 
    }
  )
);