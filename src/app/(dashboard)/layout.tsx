"use client";

import Header from "@/components/layout/header";
import RightSidebar from "@/components/layout/right-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import LeftSidebar from "@/components/layout/app-sidebar";
import {
  DualSidebarProvider,
  useDualSidebar,
} from "@/contexts/dual-sidebar-context";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const {
    leftOpen,
    rightOpen,
    setLeftOpen,
    setRightOpen,
    toggleLeft,
    toggleRight,
  } = useDualSidebar();

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Sidebar Provider */}
      <SidebarProvider open={leftOpen} onOpenChange={setLeftOpen}>
        <LeftSidebar />
      </SidebarProvider>

      {/* Main content area - grows to fill space between sidebars */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header onToggleLeft={toggleLeft} onToggleRight={toggleRight} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>

      {/* Right Sidebar Provider */}
      <SidebarProvider open={rightOpen} onOpenChange={setRightOpen}>
        <RightSidebar />
      </SidebarProvider>
    </div>
  );
}

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DualSidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </DualSidebarProvider>
  );
}
