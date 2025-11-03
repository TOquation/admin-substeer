"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface DualSidebarContextType {
  leftOpen: boolean;
  rightOpen: boolean;
  setLeftOpen: (open: boolean) => void;
  setRightOpen: (open: boolean) => void;
  toggleLeft: () => void;
  toggleRight: () => void;
  toggleBoth: () => void;
}

const DualSidebarContext = createContext<DualSidebarContextType | undefined>(
  undefined
);

export function DualSidebarProvider({ children }: { children: ReactNode }) {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  const toggleLeft = () => setLeftOpen(!leftOpen);
  const toggleRight = () => setRightOpen(!rightOpen);
  const toggleBoth = () => {
    setLeftOpen(!leftOpen);
    setRightOpen(!rightOpen);
  };

  return (
    <DualSidebarContext.Provider
      value={{
        leftOpen,
        rightOpen,
        setLeftOpen,
        setRightOpen,
        toggleLeft,
        toggleRight,
        toggleBoth,
      }}
    >
      {children}
    </DualSidebarContext.Provider>
  );
}

export function useDualSidebar() {
  const context = useContext(DualSidebarContext);
  if (!context) {
    throw new Error("useDualSidebar must be used within DualSidebarProvider");
  }
  return context;
}
