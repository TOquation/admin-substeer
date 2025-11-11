import {
  Calendar,
  ChevronDown,
  Grid2X2,
  Home,
  Lock,
  Medal,
  Plus,
} from "lucide-react";
import React from "react";

const MarketHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="flex flex-col">
        <span className="text-gray-950 font-semibold">Market Place</span>
        <span className="text-gray-500 text-sm">Manage Market bundle</span>
      </h1>

      {/* filters */}
      <div className="gap-12 flex items-center">
        <div className="flex items-center gap-4">
          {[
            { id: 1, title: "Category", icon: Grid2X2 },
            { id: 2, title: "Status", icon: Medal },
            { id: 3, title: "Date", icon: Calendar },
          ].map((filter) => {
            const Icon = filter.icon;
            return (
              <div
                key={filter.id}
                className="flex gap-2 border border-gray-400 rounded-full items-center py-1.5 px-2.5 text-gray-500"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm text-gray-500">{filter.title}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            );
          })}
        </div>

        {/* cta */}
        <div className="px-3 py-1.5 bg-black text-green-500 rounded-full flex gap-2 items-center cursor-pointer">
          <Plus className="w-5 h-5" />
          <span>Add New Bundle</span>
        </div>
      </div>
    </div>
  );
};

export default MarketHeader;
