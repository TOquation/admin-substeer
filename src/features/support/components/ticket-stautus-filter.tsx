"use client";

import { ChevronDown, Lightbulb, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TicketStatusFilterProps {
  onStatusChange: (status: "All" | "Read" | "Unread") => void;
  onSortChange: (sort: "Oldest" | "Newest") => void;
}

const TicketStatusFilter = ({
  onStatusChange,
  onSortChange,
}: TicketStatusFilterProps) => {
  const statusOptions = ["All", "Read", "Unread"] as const;
  const sortOptions = ["Oldest", "Newest"] as const;

  return (
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

      {/* Sort Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 border shadow-none border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700">
            <Calendar className="w-4 h-4" />
            <span>Date</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-48 rounded-lg">
          {sortOptions.map((option) => (
            <DropdownMenuItem
              key={option}
              className="cursor-pointer"
              onClick={() => onSortChange(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TicketStatusFilter;
