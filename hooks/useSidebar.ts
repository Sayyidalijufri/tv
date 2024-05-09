import { create } from "zustand";

type SidebarProps = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: (isLargeOpen: boolean, isSmallOpen: boolean) => void;
  close: () => void;
};

function isScreenSmall() {
  return window.innerWidth < 1024;
}

export const useSidebar = create<SidebarProps>((set) => ({
  isLargeOpen: true,
  isSmallOpen: false,
  toggle: (isLargeOpen, isSmallOpen) => {
    if (isScreenSmall()) {
      set({ isSmallOpen: !isSmallOpen });
    } else {
      set({ isLargeOpen: !isLargeOpen });
    }
  },
  close: () => {
    if (isScreenSmall()) {
      set({ isSmallOpen: false });
    } else {
      set({ isLargeOpen: false });
    }
  },
}));
