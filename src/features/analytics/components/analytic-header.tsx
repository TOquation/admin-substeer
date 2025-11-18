import { Calendar, ChevronDown, Filter, Share } from "lucide-react";
import React, { ComponentType } from "react";

interface AnalyticFiltersProps {
  icon: ComponentType<{ className: string }>;
  title: string;
  isChevronDown?: boolean;
}

const analyticFilter: AnalyticFiltersProps[] = [
  {
    icon: Calendar,
    title: "sep 24, 2025 - Oct 24, 2025",
    isChevronDown: false,
  },
  {
    icon: Filter,
    title: "Filter",
    isChevronDown: true,
  },
  {
    icon: Share,
    title: "Export",
    isChevronDown: false,
  },
];

const AnalyticHeader = () => {
  return (
    <div className="flex justify-between items-center text-sm">
      <div className="flex flex-col">
        <h3 className="text-lg font-medium">Analytics</h3>
        <p className="text-sm text-gray-500">See how Substeer is doing </p>
      </div>
      <div className="flex items-center gap-4">
        {analyticFilter.map((filter, index) => {
          return (
            <div
              className="flex gap-1.5 border-[1.5px] items-center px-3 py-[0.35rem] border-gray-400 rounded-full"
              key={index}
            >
              <span>
                <filter.icon className="w-4 h-4" />
              </span>
              <span>{filter.title}</span>
              {filter.isChevronDown && (
                <span className="">
                  <ChevronDown className="h-4 w-4" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyticHeader;
