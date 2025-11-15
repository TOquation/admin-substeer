"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronLeft, Lightbulb, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type HeaderVariant = "ticket-detail" | "tickets-list" | "conversations-list";

interface FilterButton {
  label: string;
  icon?: React.ReactNode;
  options?: string[];
}

interface SupportHeaderProps {
  variant?: HeaderVariant;
  title?: string;
  subtitle?: string;
  count?: number;
  filters?: FilterButton[];
  onBack?: () => void;
}

const SupportHeader = ({
  variant = "tickets-list",
  title,
  subtitle,
  count,
  filters = [],
  onBack,
}: SupportHeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Default content based on variant
  const getDefaultContent = () => {
    switch (variant) {
      case "ticket-detail":
        return {
          title: title || "Tickets #03435",
          subtitle:
            subtitle || "Here is where you help people who need you the most",
        };
      case "tickets-list":
        return {
          title: title || "All Tickets",
          subtitle: subtitle || "help people who need you the most",
          count: count !== undefined ? count : 9,
          filters:
            filters.length > 0
              ? filters
              : [
                  { label: "Priority", options: ["High", "Medium", "Low"] },
                  { label: "Filter", options: ["Open", "Closed", "Pending"] },
                  {
                    label: "Status",
                    icon: <Lightbulb className="w-4 h-4" />,
                    options: ["New", "In Progress", "Resolved"],
                  },
                  {
                    label: "Date",
                    icon: <Calendar className="w-4 h-4" />,
                    options: ["Today", "This Week", "This Month"],
                  },
                ],
        };
      case "conversations-list":
        return {
          title: title || "All conversation",
          subtitle:
            subtitle || "Here is where you help people who need you the most",
          count: count !== undefined ? count : 99,
          filters:
            filters.length > 0
              ? filters
              : [
                  {
                    label: "Status",
                    icon: <Lightbulb className="w-4 h-4" />,
                    options: ["Active", "Archived", "Waiting"],
                  },
                  {
                    label: "Date",
                    icon: <Calendar className="w-4 h-4" />,
                    options: ["Today", "This Week", "This Month"],
                  },
                ],
        };
      default:
        return { title: "", subtitle: "" };
    }
  };

  const content = getDefaultContent();
  const displayTitle = title || content.title;
  const displaySubtitle = subtitle || content.subtitle;
  const displayCount = count !== undefined ? count : content.count;
  const displayFilters = filters.length > 0 ? filters : content.filters || [];

  // Ticket Detail Header (with back button)
  if (variant === "ticket-detail") {
    return (
      <div className="flex items-center gap-4 p-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            {displayTitle}
          </h1>
          <p className="text-sm text-gray-500">{displaySubtitle}</p>
        </div>
      </div>
    );
  }

  // List Headers (with filters)
  return (
    <div className="items-center flex pb-2 justify-between font-fredoka">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-gray-900">
            {displayTitle}
          </h1>
          {displayCount !== undefined && displayCount > 0 && (
            <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white text-xs font-semibold rounded-full">
              {displayCount > 9 ? "9+" : displayCount}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">{displaySubtitle}</p>
      </div>

      {displayFilters.length > 0 && (
        <div className="flex items-center gap-3 font-fredoka">
          {displayFilters.map((filter, index) => (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-4 py-2 border shadow-none border-gray-300  rounded-full bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700">
                  {filter.icon}
                  <span>{filter.label}</span>
                  {filter.options && (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </DropdownMenuTrigger>

              {filter.options && (
                <DropdownMenuContent align="start" className="w-48 rounded-lg">
                  {filter.options.map((option, optIndex) => (
                    <DropdownMenuItem
                      key={optIndex}
                      className="cursor-pointer"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupportHeader;
