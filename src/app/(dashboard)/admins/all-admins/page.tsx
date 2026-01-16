"use client";

import AllAdminTable from "@/features/admins/all-admins/components/all-admin-table";
import AdminStatusFilter from "@/features/admins/all-admins/components/admin-status-filter";
import DynamicHeader from "@/features/admins/shared/dynamic-header";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { adminDataTable } from "@/features/admins/data";

const Page = () => {
  const router = useRouter();
  const [filters, setFilters] = useState<{
    status?: "Active" | "Suspended" | "All";
  }>({ status: "All" });

  const filteredAdmins = useMemo(() => {
    if (!filters.status || filters.status === "All") {
      return adminDataTable;
    }

    return adminDataTable.filter((admin) => admin.status === filters.status);
  }, [filters]);

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <DynamicHeader
        title="All Admin"
        subtitle="Manage admins"
        showExport
        actionLabel="Add Admin"
        onAction={() => router.push(`/admins/add-admin`)}
      >
        <AdminStatusFilter onFilterChange={setFilters} />
      </DynamicHeader>

      <div className="flex-1 overflow-y-auto mt-6">
        {filteredAdmins.length === 0 ? (
          <div className="text-center py-8 text-neutral-500">
            No admins found with status: {filters.status}
          </div>
        ) : (
          <AllAdminTable admins={filteredAdmins} />
        )}
      </div>
    </div>
  );
};

export default Page;
