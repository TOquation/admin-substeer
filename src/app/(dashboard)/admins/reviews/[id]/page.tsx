"use client";

import { reviewCard } from "@/features/admins/data";
import AdminDeatails from "@/features/admins/review/components/admin-detail";
import AdminPanel from "@/features/admins/review/components/admin-panel";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type View = "Personal data" | "Job Information";

const ProfileReview = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const { id } = React.use(params);
  const adminId = Number(id);
  const adminData = reviewCard.find((card) => card.id === adminId);
  const [view, setView] = useState<View>("Personal data");

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="Review"
        subtitle="Manage invited admins"
        showFilter
        showExport
        showBack
        actionLabel="Add Admin"
        onAction={() => router.push(`/admins/add-admin`)}
        onBack={() => router.back()}
      />

      <div className="flex flex-1 gap-3 mt-5">
        <div className="w-[28%] overflow-y-auto h-[calc(100vh-10rem)]">
          <AdminPanel
            title={adminData?.name || ""}
            imgSrc={adminData?.imgSrc || ""}
          />
        </div>

        <div className="flex-1 flex flex-col h-[calc(100vh-10rem)] bg-zinc-50 rounded-xl p-4">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setView("Personal data")}
              className={cn(
                "cursor-pointer rounded-full text-[0.9rem] px-4 py-1",
                view === "Personal data"
                  ? "bg-neutral-800 text-green-400"
                  : "bg-green-50 font-[300]"
              )}
            >
              Personal data
            </button>
            <button
              onClick={() => setView("Job Information")}
              className={cn(
                "cursor-pointer  rounded-full text-[0.9rem] px-4 py-1",
                view === "Job Information"
                  ? "bg-neutral-800 text-green-400"
                  : "bg-green-50 font-[300]"
              )}
            >
              Job Information
            </button>
          </div>

          <div className="overflow-y-auto flex-1 w-full">
            <AdminDeatails view={view} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReview;
