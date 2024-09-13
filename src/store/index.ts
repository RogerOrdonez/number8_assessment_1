import { Store } from "@/shared/types";
import { create } from "zustand";

export const useStore = create<Store>()(
  (
    set: (partial: Partial<Store> | ((state: Store) => Partial<Store>)) => void
  ) => ({
    favorites: [],
    setFavorites: (value) => set({ favorites: value }),
  })
);
