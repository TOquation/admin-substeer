import React from "react";
import { NewTicketsProps } from "../types";
import { ChevronDown } from "lucide-react";
import { getPriorityColor } from "../data";

interface selectedIdProps {
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

interface TicketDropdown {
  title: string;
  key: keyof NewTicketsProps;
  isPriority?: boolean;
}

const ticketDropdown: TicketDropdown[] = [
  { title: "status", key: "status" },
  { title: "assigned to:", key: "assignedTo" },
  { title: "priority", key: "priority", isPriority: true },
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

const TicketSideBar = ({ selectedId }: selectedIdProps) => {
  return (
    <div className="p-3 rounded-lg space-y-3">
      <div>
        {contact.map((section, idx) => (
          <div key={idx} className="rounded-md bg-white p-3 space-y-2">
            {/* Section Title */}
            <h1 className="font-semibold text-sm">{section.mainTitle}</h1>

            <div className="space-y-2">
              {section.details.map((detail, index) => (
                <div key={index} className="flex flex-col">
                  {/* Static label */}
                  <p className="text-xs text-gray-500">{detail.title}</p>

                  {/* Dynamic data from selectedId */}
                  <span className="text-sm font-medium">
                    {String(selectedId[detail.key])}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        {sla.map((sla, index) => {
          return (
            <div key={index} className="rounded-md bg-white p-3 space-y-2">
              <h3 className="font-semibold text-sm">{sla.mainTitle}</h3>
              <div className="space-y-2">
                {sla.details.map((detail, index) => {
                  return (
                    <div key={index} className="">
                      <p className="text-sm text-gray-400">
                        {detail.subTitle}{" "}
                        <span className="text-xs text-slate-900 ml-1.5">
                          {detail.isEdit && "Edit"}
                        </span>
                      </p>
                      <div className="flex items-center gap-1 text-xs">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"></div>
                        <span className="text-cyan-400">{detail.date}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-3 space-y-2 rounded-md text-sm">
        {ticketDropdown.map((option, index) => {
          return (
            <div key={index}>
              <h3 className="text-xs text-gray-500">{option.title}</h3>
              <div className="flex items-center font-medium text-slate-900 justify-between">
                {option.isPriority ? (
                  <div className="flex items-center gap-1">
                    <div
                      className={`h-2.5 w-2.5 rounded-xs ${
                        getPriorityColor(selectedId.priority).dot
                      }`}
                    ></div>
                    <span>{String(selectedId[option.key])}</span>
                  </div>
                ) : (
                  <span>{String(selectedId[option.key])}</span>
                )}

                <span>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketSideBar;
