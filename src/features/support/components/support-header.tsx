"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import SupportFilters from "./support-filters";

type HeaderVariant = "ticket-detail" | "tickets-list" | "conversations-list";

interface SupportHeaderProps {
  variant?: HeaderVariant;
  title?: string;
  subtitle?: string;
  count?: number;
  showFilters?: boolean;
  onPriorityChange?: (priority: "All" | "High" | "Medium" | "Low") => void;
  onStatusChange?: (
    status: "All" | "Open" | "In-Progress" | "Resolved" | "Closed"
  ) => void;
  onFilterChange?: (filter: "All" | "Read" | "Unread") => void;
  onDateChange?: (date: "Oldest" | "Newest") => void;
}

const SupportHeader = ({
  variant = "tickets-list",
  title,
  subtitle,
  count,
  showFilters = true,
  onPriorityChange = () => {},
  onStatusChange = () => {},
  onFilterChange = () => {},
  onDateChange = () => {},
}: SupportHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

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
        };

      case "conversations-list":
        return {
          title: title || "All conversation",
          subtitle:
            subtitle || "Here is where you help people who need you the most",
          count: count !== undefined ? count : 99,
        };

      default:
        return { title: "", subtitle: "" };
    }
  };

  const content = getDefaultContent();
  const displayTitle = title || content.title;
  const displaySubtitle = subtitle || content.subtitle;
  const displayCount = count !== undefined ? count : content.count;

  // Ticket Detail Header (with back button)
  if (variant === "ticket-detail") {
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={handleBack}
          className="flex items-center justify-center p-2 rounded-full border border-gray-400 cursor-pointer hover:bg-gray-50 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
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

      {showFilters && (
        <SupportFilters
          onPriorityChange={onPriorityChange}
          onStatusChange={onStatusChange}
          onFilterChange={onFilterChange}
          onDateChange={onDateChange}
        />
      )}
    </div>
  );
};

export default SupportHeader;
