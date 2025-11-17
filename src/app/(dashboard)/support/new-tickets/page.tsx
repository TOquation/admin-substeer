import NewItems from "@/features/support/components/new-ticket";
import SupportHeader from "@/features/support/components/support-header";
import React from "react";

const NewTickets = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <SupportHeader />
      <div className="py-3">
        <NewItems />
      </div>
    </div>
  );
};

export default NewTickets;
