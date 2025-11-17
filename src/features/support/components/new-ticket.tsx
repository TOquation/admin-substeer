// ticket-item.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronDown,
  MessageSquare,
  MoreHorizontal,
  Pin,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import { NewTicketsProps, TicketType } from "../types";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { getPriorityColor, newTickets } from "../data";

const getNews = (name: string) => name.charAt(0).toUpperCase();

const getStatusColor = (status: string) => {
  switch (status) {
    case "Closed":
      return {
        dot: "bg-gray-800",
        text: "text-gray-800",
      };
    case "Open":
      return {
        dot: "bg-red-600",
        text: "text-red-600",
      };
    case "In-Progress":
      return {
        dot: "bg-yellow-500",
        text: "text-yellow-500",
      };
    case "Resolved":
      return {
        dot: "bg-green-700",
        text: "text-green-700",
      };

    default:
      return {
        dot: "bg-gray-500",
        text: "text-gray-500",
      };
  }
};

const NewItems = () => {
  const router = useRouter();
  const handleTicket = (id: number) => {
    router.push(`/support/new-tickets/ticket-details?id=${id}`);
  };

  return (
    <div className="py-4 font-fredoka">
      {/* List */}
      <div className="space-y-4 overflow-y-auto pb-12 max-h-[calc(90vh-8.5rem)]">
        {newTickets.map((ticket, index) => (
          <div
            key={index}
            onClick={() => handleTicket(ticket.id)}
            className="flex flex-col bg-gray-50 pt-4 border-l-black border-l-6 rounded-l-sm  cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center flex-1 gap-3 pl-2.5 pr-4 ">
              <Checkbox
                className="border-gray-500 cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="flex items-center flex-1 gap-6">
                <div className="place-content-center grid text-green-400 font-semibold bg-black rounded-sm h-10 w-10 text-lg">
                  {getNews(ticket.user)}
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
            <Separator className="h-1.5 bg-gray-300 mt-3" />
            <div className="pl-2.5 pr-4 grid grid-cols-6 ">
              {/* column-1 */}
              <div className="text-sm py-3 relative">
                <div className="flex flex-col absolute left-8">
                  <span className="text-xs text-gray-500">Status</span>
                  <div className="flex items-center gap-1">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        getStatusColor(ticket.status).dot
                      }`}
                    ></div>
                    <span className={`${getStatusColor(ticket.status).text}`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>
                <Separator
                  orientation="vertical"
                  className="w-1 h-full bg-gray-300 absolute top-0 bottom-0 right-0"
                />
              </div>

              {/* column 2 */}
              <div className="text-sm flex justify-center w-full relative">
                <div className="flex flex-col py-3">
                  <span className="text-xs text-gray-500">Assigned to:</span>
                  <p className="flex gap-1 items-center">
                    <span>{ticket.assignedTo}</span>
                    <span>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </p>
                  <Separator
                    orientation="vertical"
                    className="w-1 h-full bg-gray-300 absolute top-0 bottom-0 right-0"
                  />
                </div>
              </div>

              {/* column-3 */}
              <div className="text-sm flex justify-center w-full relative">
                <div className="flex flex-col py-3">
                  <span className="text-xs text-gray-500">Priority:</span>
                  <div className={`flex items-center `}>
                    <div
                      className={`h-2.5 w-2.5 rounded-xs ${
                        getPriorityColor(ticket.priority).dot
                      }`}
                    ></div>
                    <span
                      className={`ml-1.5 ${
                        getPriorityColor(ticket.priority).text
                      }`}
                    >
                      {ticket.priority}
                    </span>
                    <span>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="w-1 h-full bg-gray-300 absolute top-0 bottom-0 right-0"
                  />
                </div>
              </div>

              {/* column-4 */}
              <div className="text-sm flex justify-center w-full relative">
                <div className="flex flex-col py-3">
                  <span className="text-xs text-gray-500">Category</span>
                  <div className="flex gap-1 items-center">
                    <span>Sales</span>
                    <span>
                      <ChevronDown className="w-4 h-4 text-gray-900" />
                    </span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="w-1 h-full bg-gray-300 absolute top-0 bottom-0 right-0"
                  />
                </div>
              </div>

              {/* column-5 */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="text-sm grid grid-cols-3 col-span-2 relative w-full h-full"
              >
                {/* Star + separator */}
                <div className="relative flex items-center justify-center w-full h-full">
                  <Star className="w-5 h-5" />
                  <Separator
                    orientation="vertical"
                    className="absolute top-0 bottom-0 right-0 bg-gray-300 w-[1px]"
                  />
                </div>

                {/* Pin + separator */}
                <div className="relative flex items-center justify-center w-full h-full">
                  <Pin className="w-5 h-5" />
                  <Separator
                    orientation="vertical"
                    className="absolute top-0 bottom-0 right-0 bg-gray-300 w-[1px]"
                  />
                </div>

                {/* More */}
                <div className="flex items-center justify-center w-full h-full">
                  <div className="border-[1.5px] p-0.5 border-gray-900 rounded-full">
                    <MoreHorizontal className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewItems;
