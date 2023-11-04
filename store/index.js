import { project as data } from "@/data";
import { create } from "zustand";

export const useStoreProject = create((set) => ({
  projects: data,
}));
