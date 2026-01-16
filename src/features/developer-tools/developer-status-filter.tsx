"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";

interface DeveloperStatusFilterProps {
  onFilterChange: (status: "All" | "Success" | "Error" | "Pending") => void;
}

const DeveloperStatusFilter = ({
  onFilterChange,
}: DeveloperStatusFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleStatusSelect = (
    status: "All" | "Success" | "Error" | "Pending"
  ) => {
    onFilterChange(status);
    setOpen(false);
  };

  const statusOptions = [
    { value: "All", label: "All", color: "text-gray-700" },
    { value: "Success", label: "Success", color: "text-green-700" },
    { value: "Error", label: "Error", color: "text-red-700" },
    { value: "Pending", label: "Pending", color: "text-yellow-700" },
  ] as const;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex gap-1.5 border-[1.5px] items-center px-3 py-[0.35rem] border-gray-400 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
          <span>
            <Filter className="w-4 h-4" />
          </span>
          <span>Filter</span>
          <span>
            <ChevronDown className="h-4 w-4" />
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-44 p-2" align="end">
        <div className="space-y-1">
          {statusOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleStatusSelect(option.value)}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-neutral-50 transition-colors"
            >
              <span className={`text-sm ${option.color} font-medium`}>
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DeveloperStatusFilter;
