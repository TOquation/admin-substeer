"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import { useState } from "react";

interface ReviewFiltersProps {
  onFilterChange: (filters: { dateFrom?: string; dateTo?: string }) => void;
}

const ReviewFilters = ({ onFilterChange }: ReviewFiltersProps) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [open, setOpen] = useState(false);

  const handleApply = () => {
    onFilterChange({ dateFrom, dateTo });
    setOpen(false);
  };

  const handleClear = () => {
    setDateFrom("");
    setDateTo("");
    onFilterChange({});
  };

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
      <PopoverContent className="w-72 p-4" align="end">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-neutral-600 mb-2 block">
              Submitted From
            </label>
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-neutral-600 mb-2 block">
              Submitted To
            </label>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1 rounded-full"
              onClick={handleClear}
            >
              Clear
            </Button>
            <Button
              className="flex-1 bg-neutral-800 text-green-400 rounded-full hover:bg-black/90"
              onClick={handleApply}
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ReviewFilters;
