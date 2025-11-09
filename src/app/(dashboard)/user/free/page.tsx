import React from "react";
import UsersDataTable from "@/features/users/components/user-data-table";
import UserHeader from "@/features/users/components/user-header";

const Frees = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-5rem)] overflow-hidden">
      {/* Fixed header section - non-scrollable */}
      <UserHeader title="Free Users" subtitle="Free" />

      {/* Scrollable table section */}
      <div className="flex-1 overflow-auto p-4 pt-0 ">
        <UsersDataTable />
      </div>
    </div>
  );
};

export default Frees;
