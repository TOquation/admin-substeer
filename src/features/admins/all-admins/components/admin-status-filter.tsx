"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import { useState } from "react";

interface AdminStatusFilterProps {
  onFilterChange: (filters: {
    status?: "Active" | "Suspended" | "All";
  }) => void;
}

const AdminStatusFilter = ({ onFilterChange }: AdminStatusFilterProps) => {
  const [open, setOpen] = useState(false);

  const handleStatusSelect = (status: "Active" | "Suspended" | "All") => {
    onFilterChange({ status });
    setOpen(false);
  };

  const statusOptions = [
    { value: "All", label: "All", color: "text-neutral-600" },
    { value: "Active", label: "Active", color: "text-green-600" },
    { value: "Suspended", label: "Suspended", color: "text-orange-400" },
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
      <PopoverContent className="w-48 p-2" align="end">
        <div className="space-y-1">
          {statusOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => handleStatusSelect(option.value)}
              className="flex items-center gap-3 cursor-pointer p-2 rounded-md hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                {option.value !== "All" && (
                  <span
                    className={`h-2 w-2 rounded-full ${
                      option.value === "Active"
                        ? "bg-green-600"
                        : "bg-orange-400"
                    }`}
                  />
                )}
                <span className={`text-sm ${option.color}`}>
                  {option.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AdminStatusFilter;
