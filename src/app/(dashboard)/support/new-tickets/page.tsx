"use client";

import React, { useState } from "react";
import NewItems from "@/features/support/components/new-ticket";
import SupportHeader from "@/features/support/components/support-header";

const NewTickets = () => {
  const [filterPriority, setFilterPriority] = useState<
    "All" | "High" | "Medium" | "Low"
  >("All");
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Open" | "In-Progress" | "Resolved" | "Closed"
  >("All");
  const [filterRead, setFilterRead] = useState<"All" | "Read" | "Unread">(
    "All"
  );
  const [sortDate, setSortDate] = useState<"Oldest" | "Newest">("Newest");

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <SupportHeader
        variant="tickets-list"
        title="All Tickets"
        count={9}
        onPriorityChange={setFilterPriority}
        onStatusChange={setFilterStatus}
        onFilterChange={setFilterRead}
        onDateChange={setSortDate}
      />
      <div className="py-3">
        <NewItems
          filterPriority={filterPriority}
          filterStatus={filterStatus}
          filterRead={filterRead}
          sortDate={sortDate}
        />
      </div>
    </div>
  );
};

export default NewTickets;
