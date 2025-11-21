"use client";

import AllAdminTable from "@/features/admins/all-admins/components/all-admin-table";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import React from "react";

const page = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="All Admin"
        subtitle="Manage admins"
        showFilter
        showExport
        actionLabel="Add Admin"
        onAction={() => console.log("Add Admin clicked")}
      />

      <div className="flex-1 overflow-y-auto">
        <AllAdminTable />
      </div>
    </div>
  );
};

export default page;
