import Poster from "@/features/support/components/poster";
import SupportHeader from "@/features/support/components/support-header";
import TicketItems from "@/features/support/components/ticket-item";
import Practice from "@/features/support/components/ticket-item";
import React from "react";

const NewMessage = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <SupportHeader variant="conversations-list" />
      <div className="flex-1 flex items-stretch gap-4">
        <div className="w-[60%]">
          <TicketItems />
        </div>
        <div className="flex-1 bg-gray-50 max-h-[calc(97vh-8rem)]">
          <Poster />
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
