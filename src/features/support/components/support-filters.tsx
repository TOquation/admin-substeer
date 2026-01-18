"use client";

import {
  Calendar,
  Lightbulb,
  Filter,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SupportFiltersProps {
  onPriorityChange: (priority: "All" | "High" | "Medium" | "Low") => void;
  onStatusChange: (
    status: "All" | "Open" | "In-Progress" | "Resolved" | "Closed"
  ) => void;
  onFilterChange: (filter: "All" | "Read" | "Unread") => void;
  onDateChange: (date: "Oldest" | "Newest") => void;
}

const SupportFilters = ({
  onPriorityChange,
  onStatusChange,
  onFilterChange,
  onDateChange,
}: SupportFiltersProps) => {
  const priorityOptions = ["All", "High", "Medium", "Low"] as const;
  const statusOptions = [
    "All",
    "Open",
    "In-Progress",
    "Resolved",
    "Closed",
  ] as const;
  const filterOptions = ["All", "Read", "Unread"] as const;
  const dateOptions = ["Oldest", "Newest"] as const;

  return (
    <div className="flex items-center gap-3 font-fredoka">
      {/* Priority Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 border shadow-none border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700">
            <TrendingUp className="w-4 h-4" />
            <span>Priority</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 rounded-lg">
          {priorityOptions.map((option) => (
            <DropdownMenuItem
              key={option}
              className="cursor-pointer"
              onClick={() => onPriorityChange(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Filter (Read/Unread) */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center gap-2 px-4 py-2 border shadow-none border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48 rounded-lg">
          {filterOptions.map((option) => (
            <DropdownMenuItem
              key={option}
              className="cursor-pointer"
              onClick={() => onFilterChange(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

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
  );
};

export default SupportFilters;
