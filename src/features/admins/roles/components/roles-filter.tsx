"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import { useState } from "react";

interface RolesFilterProps {
  onFilterChange: (filters: {
    sortBy: "name" | "date" | "rolesCount" | "adminsCount";
  }) => void;
}

const RolesFilter = ({ onFilterChange }: RolesFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleFilterSelect = (
    sortBy: "name" | "date" | "rolesCount" | "adminsCount"
  ) => {
    onFilterChange({ sortBy });
    setOpen(false);
  };

  const filterOptions = [
    { value: "name", label: "Name (A-Z)" },
    { value: "date", label: "Date Created" },
    { value: "rolesCount", label: "Roles Count" },
    { value: "adminsCount", label: "Admins Count" },
  ] as const;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full gap-2 font-normal shadow-none border-gray-400 cursor-pointer text-neutral-600"
        >
          <Filter size={18} />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end">
        <div className="space-y-1">
          {filterOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleFilterSelect(option.value)}
              className="flex items-center gap-3 cursor-pointer p-2.5 rounded-md hover:bg-neutral-50 transition-colors"
            >
              <span className="text-sm text-neutral-700">{option.label}</span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RolesFilter;
