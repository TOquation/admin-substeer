"use client";

import { Calendar, Grid2X2, Medal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MarketFiltersProps {
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: "All" | "Active" | "Pending" | "Draft") => void;
  onSortChange: (sort: "Oldest" | "Newest") => void;
  categories: string[];
}

const MarketFilters = ({
  onCategoryChange,
  onStatusChange,
  onSortChange,
  categories,
}: MarketFiltersProps) => {
  const statusOptions = ["All", "Active", "Pending", "Draft"] as const;
  const sortOptions = ["Oldest", "Newest"] as const;

  return (
    <div className="flex items-center gap-4">
      {/* Category Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 cursor-pointer border border-gray-400 rounded-full items-center py-1.5 px-2.5 text-gray-500 hover:bg-gray-50 transition-colors">
            <Grid2X2 className="w-4 h-4" />
            <span className="text-sm text-gray-500">Category</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onCategoryChange("All")}
          >
            All Categories
          </DropdownMenuItem>
          {categories.map((category) => (
            <DropdownMenuItem
              key={category}
              className="cursor-pointer"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Status Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 cursor-pointer border border-gray-400 rounded-full items-center py-1.5 px-2.5 text-gray-500 hover:bg-gray-50 transition-colors">
            <Medal className="w-4 h-4" />
            <span className="text-sm text-gray-500">Status</span>
            <ChevronDown className="w-4 h-4" />
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
          <div className="flex gap-2 cursor-pointer border border-gray-400 rounded-full items-center py-1.5 px-2.5 text-gray-500 hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-sm text-gray-500">Date</span>
            <ChevronDown className="w-4 h-4" />
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
    </div>
  );
};

export default MarketFilters;
