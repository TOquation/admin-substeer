"use client";

import AllAdminTable from "@/features/admins/all-admins/components/all-admin-table";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="Roles"
        subtitle="Manage roles or create roles"
        showFilter
        showExport
        showBack
        actionLabel="Add Admin"
        onAction={() => router.push(`/admins/add-admin`)}
        onBack={() => router.back()}
      />

      <div className="flex-1 overflow-y-auto">
        <AllAdminTable />
      </div>
    </div>
  );
};

export default page;
