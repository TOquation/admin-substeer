// ticket-item.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { TicketType } from "../types";

interface TicketItemsProps {
  onSelect: (ticket: TicketType) => void;
}

const getInitials = (name: string) => name.charAt(0).toUpperCase();

const initialTickets: TicketType[] = [
  {
    title: "New email template creation",
    duration: "2 hrs ago",
    user: "Leks",
    msgId: "MSG-00123",
    email: "leks@hotmail.com",
    content: [
      "Rem illo quasi. Veritatis recusandae enim ratione eos distinctio. Amet consectetur asperiores 😂 sit qui itaque. Illo est dolorum doloribus vitae eligendi optio maiores explicabo.",
      "Consequatur ad ipsam sed quos fugiat in unde est. Dolorum totam nemo nesciunt cum laboriosam nulla. Alias voluptatius alias voluptatem fugiat repudiandae alias eius praesentium. Reiciendis illo atque non. Aut labore explicabo. Modi quaerat distinctio eaque harum possimus omnis.",
    ],
    attachments: [
      {
        id: "a6de7279-3216-44...",
        preview: "/doc-1.svg",
        size: "12 KB",
      },
      {
        id: "-44b6-826f-7cd51...",
        preview: "/doc-2.svg",
        size: "14 KB",
      },
      {
        id: "16-44b6-826f-7cd...",
        preview: "/doc-3.svg",
        size: "8 KB",
      },
    ],
  },
  {
    title: "Account access problem",
    duration: "3 hrs ago",
    user: "Mezie",
    msgId: "MSG-00124",
    email: "mezie.tech@gmail.com",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    attachments: [],
  },
  {
    title: "Feature request for dashboard",
    duration: "5 hrs ago",
    user: "Leks",
    msgId: "MSG-00125",
    email: "leks.dev@outlook.com",
    content: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    attachments: [
      {
        id: "fe234-5678-90ab...",
        preview: "/doc-3.svg",
        size: "20 KB",
      },
    ],
  },
  {
    title: "Billing inquiry",
    duration: "1 day ago",
    user: "Mezie",
    msgId: "MSG-00126",
    email: "mezie.business@yahoo.com",
    content: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    attachments: [
      {
        id: "xyz-1234-abcd...",
        preview: "/doc-1.svg",
        size: "15 KB",
      },
      {
        id: "klm-5678-efgh...",
        preview: "/doc-2.svg",
        size: "18 KB",
      },
    ],
  },
];

const TicketItems = ({ onSelect }: TicketItemsProps) => {
  const [masterChecked, setMasterChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(initialTickets.length).fill(false)
  );

  const handleMasterToggle = (checked: boolean) => {
    setMasterChecked(checked);
    setCheckedItems(Array(initialTickets.length).fill(checked));
  };

  const handleItemToggle = (index: number, checked: boolean) => {
    const updated = [...checkedItems];
    updated[index] = checked;
    setCheckedItems(updated);

    if (!checked) {
      setMasterChecked(false);
    } else {
      const allChecked = updated.every((x) => x === true);
      setMasterChecked(allChecked);
    }
  };

  return (
    <div className="py-4 font-fredoka">
      {/* Header */}
      <div className="flex px-4 justify-between items-center text-base text-gray-400 mb-4">
        <Checkbox
          className="border-gray-500 cursor-pointer"
          checked={masterChecked}
          onCheckedChange={(checked: boolean) => handleMasterToggle(checked)}
        />

        <div className="flex-1 flex text-sm justify-between ml-4">
          <h3>Title</h3>
          <p>Status</p>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4 overflow-y-auto pb-12 max-h-[calc(90vh-8.5rem)]">
        {initialTickets.map((ticket, index) => (
          <div
            key={index}
            onClick={() => onSelect(ticket)}
            className="flex bg-gray-50 py-4 border-l-black border-l-6 rounded-l-sm pl-2.5 pr-4 justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center flex-1 gap-3">
              <Checkbox
                className="border-gray-500 cursor-pointer"
                checked={checkedItems[index]}
                onCheckedChange={(checked: boolean) =>
                  handleItemToggle(index, checked)
                }
                onClick={(e) => e.stopPropagation()}
              />

              <div className="flex items-center flex-1 gap-6">
                <div className="place-content-center grid text-green-400 font-semibold bg-black rounded-sm h-10 w-10 text-lg">
                  {getInitials(ticket.user)}
                </div>

                <div className="flex flex-col flex-1">
                  <h2 className="space-x-4 text-sm">
                    <span className="text-indigo-600 font-semibold">
                      {ticket.title}
                    </span>
                    <span className="text-gray-400">{ticket.msgId}</span>
                  </h2>

                  <div className="flex items-center space-x-6 text-xs text-gray-400">
                    <p className="inline-flex items-center space-x-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>{ticket.user}</span>
                    </p>

                    <div className="h-[0.35rem] w-[0.35rem] rounded-full bg-gray-400" />

                    <p>{ticket.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-red-600 text-sm">New</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketItems;
