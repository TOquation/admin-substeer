"use client";

import React, { useState } from "react";
import UsersDataTable from "@/features/users/components/user-data-table";
import UserHeader from "@/features/users/components/user-header";

const Subscriber = () => {
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Active" | "Inactive" | "Pending" | "Suspended"
  >("All");
  const [sortOrder, setSortOrder] = useState<"Oldest" | "Newest">("Newest");

  return (
    <div className="flex flex-col h-full">
      {/* Fixed header section - non-scrollable */}
      <UserHeader
        title="Subscribers"
        subtitle="Subscribers"
        onStatusChange={setFilterStatus}
        onSortChange={setSortOrder}
      />

      {/* Scrollable table section */}
      <div className="flex-1 overflow-auto p-4 pt-0">
        <UsersDataTable
          userType="subscriber"
          filterStatus={filterStatus}
          sortOrder={sortOrder}
        />
      </div>
    </div>
  );
};

export default Subscriber;
