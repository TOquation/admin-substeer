"use client";

import { Calendar, BookOpen, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MessageFiltersProps {
  onStatusChange: (status: "All" | "Read" | "Unread") => void;
  onSortChange: (sort: "Oldest" | "Newest") => void;
}

const MessageFilters = ({
  onStatusChange,
  onSortChange,
}: MessageFiltersProps) => {
  const statusOptions = ["All", "Read", "Unread"] as const;
  const sortOptions = ["Oldest", "Newest"] as const;

  return (
    <>
      {/* Status Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-center items-center border border-gray-400 rounded-full px-2 py-1.5 gap-2 cursor-pointer">
            <span>
              <BookOpen className="w-3 h-3" />
            </span>
            <span className="text-xs">Status</span>
            <span>
              <ChevronDown className="h-3 w-3" />
            </span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-40">
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
          <div className="flex justify-center items-center border border-gray-400 rounded-full px-2 py-1.5 gap-2 cursor-pointer">
            <span>
              <Calendar className="w-3 h-3" />
            </span>
            <span className="text-xs">Date</span>
            <span>
              <ChevronDown className="h-3 w-3" />
            </span>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-40">
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
    </>
  );
};

export default MessageFilters;
