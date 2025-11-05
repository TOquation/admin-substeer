import React from "react";
import UsersDataTable from "@/features/users/components/user-data-table";
import UserHeader from "@/features/users/components/user-header";

const Subscriber = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed header section - non-scrollable */}
      <UserHeader title="Subscriber" subtitle="Subscriber" />

      {/* Scrollable table section */}
      <div className="flex-1 overflow-auto p-4 pt-0 ">
        <UsersDataTable />
      </div>
    </div>
  );
};

export default Subscriber;
