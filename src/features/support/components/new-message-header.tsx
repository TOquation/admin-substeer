"use client";

import React from "react";
import { Lightbulb, Calendar, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NewMessageHeaderProps {
  title?: string;
  subtitle?: string;
  count?: number;
  onStatusChange: (status: "All" | "Read" | "Unread") => void;
  onDateChange: (date: "Oldest" | "Newest") => void;
}

const NewMessageHeader = ({
  title = "All conversation",
  subtitle = "Here is where you help people who need you the most",
  count = 99,
  onStatusChange,
  onDateChange,
}: NewMessageHeaderProps) => {
  const statusOptions = ["All", "Read", "Unread"] as const;
  const dateOptions = ["Oldest", "Newest"] as const;

  return (
    <div className="items-center flex pb-2 justify-between font-fredoka">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-gray-900">{title}</h1>

          {count > 0 && (
            <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-semibold rounded-full">
              {count > 9 ? "9+" : count}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3 font-fredoka">
        {/* Status Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 border shadow-none border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700">
              <Lightbulb className="w-4 h-4" />
              <span>Status</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 rounded-lg">
            {statusOptions.map((option) => (
              <DropdownMenuItem
                key={option}
                className="cursor-pointer"
                onClick={() => onStatusChange(option)}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Date Sort */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 border shadow-none border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700">
              <Calendar className="w-4 h-4" />
              <span>Date</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48 rounded-lg">
            {dateOptions.map((option) => (
              <DropdownMenuItem
                key={option}
                className="cursor-pointer"
                onClick={() => onDateChange(option)}
              >
                {option}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NewMessageHeader;
