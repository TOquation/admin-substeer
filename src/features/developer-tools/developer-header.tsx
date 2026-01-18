import { Share } from "lucide-react";
import React from "react";
import DeveloperStatusFilter from "./developer-status-filter";

interface DeveloperHeaderProps {
  onFilterChange: (status: "All" | "Success" | "Error" | "Pending") => void;
}

const DeveloperHeader = ({ onFilterChange }: DeveloperHeaderProps) => {
  return (
    <div className="flex justify-between items-center text-sm">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Analytics</h3>
        <p className="text-sm text-gray-500">See how Substeer is doing </p>
      </div>
      <div className="flex items-center gap-4">
        <DeveloperStatusFilter onFilterChange={onFilterChange} />

        <div className="flex gap-1.5 border-[1.5px] items-center px-3 py-[0.35rem] border-gray-400 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
          <span>
            <Share className="w-4 h-4" />
          </span>
          <span>Export</span>
        </div>
      </div>
    </div>
  );
};

export default DeveloperHeader;
