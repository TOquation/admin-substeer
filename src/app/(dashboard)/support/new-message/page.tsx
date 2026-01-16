"use client";

import React, { useState } from "react";
import Poster from "@/features/support/components/poster";
import NewMessageHeader from "@/features/support/components/new-message-header";
import TicketItems from "@/features/support/components/ticket-item";
import { TicketType } from "@/features/support/types";

const NewMessage = () => {
  const [selected, setSelected] = useState<TicketType | null>(null);
  const [filterStatus, setFilterStatus] = useState<"All" | "Read" | "Unread">(
    "All"
  );
  const [sortDate, setSortDate] = useState<"Oldest" | "Newest">("Newest");

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <NewMessageHeader
        title="All conversation"
        subtitle="Here is where you help people who need you the most"
        count={99}
        onStatusChange={setFilterStatus}
        onDateChange={setSortDate}
      />

      <div className="flex-1 flex items-stretch gap-4">
        <div className="w-[60%]">
          <TicketItems
            onSelect={setSelected}
            filterStatus={filterStatus}
            sortDate={sortDate}
          />
        </div>

        <div className="flex-1 bg-gray-50 max-h-[calc(97vh-8rem)]">
          <Poster selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
