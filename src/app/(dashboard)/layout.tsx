"use client";

import { useState } from "react";
import Header from "@/components/layout/header";

import RightSidebar from "@/components/layout/right-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import LeftSidebar from "@/components/layout/app-sidebar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <SidebarProvider className="" open={leftOpen} onOpenChange={setLeftOpen}>
        <LeftSidebar />
      </SidebarProvider>

      {/* Main content */}
      <main className="w-full">
        <Header
          onToggleLeft={() => setLeftOpen(!leftOpen)}
          onToggleRight={() => setRightOpen(!rightOpen)}
        />
        <div className="overflow-y-auto max-h-[calc(100vh-1rem)]">
          {children}
        </div>
      </main>

      <SidebarProvider open={rightOpen} onOpenChange={setRightOpen}>
        <RightSidebar />
      </SidebarProvider>
    </div>
  );
}
