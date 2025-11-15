"use client";

import Poster from "@/features/support/components/poster";
import SupportHeader from "@/features/support/components/support-header";
import TicketItems from "@/features/support/components/ticket-item";
import { TicketType } from "@/features/support/types";
import React, { useState } from "react";

const NewMessage = () => {
  const [selected, setSelected] = useState<TicketType | null>(null);

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <SupportHeader variant="conversations-list" />

      <div className="flex-1 flex items-stretch gap-4">
        <div className="w-[60%]">
          <TicketItems onSelect={setSelected} />
        </div>

        <div className="flex-1 bg-gray-50 max-h-[calc(97vh-8rem)]">
          <Poster selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default NewMessage;
