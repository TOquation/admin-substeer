"use client";

import React, { useState } from "react";
import { NewTicketsProps } from "../types";
import { ChevronDown } from "lucide-react";
import { getPriorityColor } from "../data";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface TicketSideBarProps {
  selectedId: NewTicketsProps;
}

interface Contact {
  mainTitle: string;
  details: {
    title: string;
    key: keyof NewTicketsProps;
  }[];
}

interface Sla {
  mainTitle: string;
  details: {
    subTitle: string;
    date: string;
    isEdit?: boolean;
  }[];
}

type DropdownKeys = "status" | "priority" | "assignedTo";

interface TicketDropdown {
  title: string;
  key: DropdownKeys;
  isPriority?: boolean;
}

const ticketDropdown: TicketDropdown[] = [
  { title: "Status", key: "status" },
  { title: "Assigned To", key: "assignedTo" },
  { title: "Priority", key: "priority", isPriority: true },
];

const contact: Contact[] = [
  {
    mainTitle: "Contact",
    details: [
      { title: "Name", key: "user" },
      { title: "Email", key: "email" },
    ],
  },
];

const sla: Sla[] = [
  {
    mainTitle: "SLA",
    details: [
      { subTitle: "First Response Due", date: "by Wed, 03 Jul 2019, 10:00 AM" },
      {
        subTitle: "Resolution Due",
        date: "by Wed, 03 Jul 2019, 10:00 AM",
        isEdit: true,
      },
    ],
  },
];

const statusOptions = ["Open", "In-Progress", "Resolved", "Closed"];
const priorityOptions = ["Low", "Medium", "High"];
const assignedOptions = ["Mark Probert", "Admin", "Unassigned"];

const TicketSideBar = ({ selectedId }: TicketSideBarProps) => {
  const [localData, setLocalData] = useState(selectedId);

  const updateField = (key: DropdownKeys, value: string) => {
    setLocalData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getOptions = (key: DropdownKeys) => {
    if (key === "status") return statusOptions;
    if (key === "priority") return priorityOptions;
    if (key === "assignedTo") return assignedOptions;
    return [];
  };

  return (
    <div className="p-3 rounded-lg space-y-3">
      {/* CONTACT SECTION */}
      {contact.map((section, idx) => (
        <div key={idx} className="rounded-md bg-white p-3 space-y-2">
          <h1 className="font-semibold text-sm">{section.mainTitle}</h1>

          {section.details.map((detail, i) => (
            <div key={i} className="flex flex-col">
              <p className="text-xs text-gray-500">{detail.title}</p>
              <span className="text-sm font-medium">
                {String(localData[detail.key])}
              </span>
            </div>
          ))}
        </div>
      ))}

      {/* SLA SECTION */}
      {sla.map((section, idx) => (
        <div key={idx} className="rounded-md bg-white p-3 space-y-2">
          <h3 className="font-semibold text-sm">{section.mainTitle}</h3>

          {section.details.map((detail, i) => (
            <div key={i}>
              <p className="text-sm text-gray-400">
                {detail.subTitle}{" "}
                {detail.isEdit && (
                  <span className="text-xs text-slate-900 ml-1.5">Edit</span>
                )}
              </p>
              <div className="flex items-center gap-1 text-xs">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                <span className="text-cyan-400">{detail.date}</span>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* DROPDOWN SECTION */}
      <div className="bg-white p-3 space-y-2 rounded-md text-sm">
        {ticketDropdown.map((option, idx) => {
          const dropdownItems = getOptions(option.key);

          return (
            <div key={idx}>
              <h3 className="text-xs text-gray-500">{option.title}</h3>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center justify-between font-medium text-slate-900 cursor-pointer">
                    {option.isPriority ? (
                      <div className="flex items-center gap-1">
                        <div
                          className={`h-2.5 w-2.5 rounded-xs ${
                            getPriorityColor(localData.priority).dot
                          }`}
                        ></div>
                        <span>{localData[option.key]}</span>
                      </div>
                    ) : (
                      <span>{localData[option.key]}</span>
                    )}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-40">
                  {dropdownItems.map((item, i) => (
                    <DropdownMenuItem
                      key={i}
                      onClick={() => updateField(option.key, item)}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketSideBar;
