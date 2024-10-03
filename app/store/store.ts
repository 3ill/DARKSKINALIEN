import { create } from "zustand";
import { IMenuToggled } from "@/app/store/interface/store.interface";

export const useMobileMenuStore = create<IMenuToggled>((set) => ({
  isToggled: false,
  setToggled: () => {
    set((state) => ({ isToggled: !state.isToggled }));
  },
}));
