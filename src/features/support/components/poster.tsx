// poster.tsx
import { ChevronDown, Reply } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { TicketType } from "../types";
import { CreateTicketDialog } from "./create-ticket-dialog";

interface PosterProps {
  selected: null | TicketType;
}

const getInitials = (name: string) => name.charAt(0).toUpperCase();

const Poster = ({ selected }: PosterProps) => {
  const [isCreateTicketOpen, setIsCreateTicketOpen] = useState(false);

  const handleCreateTicket = (ticket: {
    name: string;
    assignTo: string;
    priority: string;
  }) => {
    console.log("Creating ticket:", ticket);
    // Handle ticket creation logic here
  };

  if (!selected) {
    return (
      <div className="text-sm p-2 py-16 grid place-content-center space-y-6">
        <div>
          <Image
            src="/support-banner.svg"
            alt="banner"
            height={180}
            width={180}
          />
        </div>

        <div className="text-center font-fredoka relative">
          <h2 className="font-medium text-xl">Hey Elita!</h2>
          <p className="text-sm">Time to help the people who need us most</p>

          <div className="flex gap-2 items-center absolute -left-6 top-20">
            <Image src="/line-curve.svg" alt="curve" height={42} width={42} />
            <Image src="/conversat.svg" alt="text" height={200} width={200} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-full flex flex-col font-fredoka overflow-hidden">
        <div className="p-4 pb-2 space-y-4">
          <h2 className="text-lg font-normal">{selected.title}</h2>

          <div className="flex gap-2">
            <div className="place-content-center grid text-green-400 font-semibold bg-black rounded-sm h-10 w-10 text-xl">
              {getInitials(selected.user)}
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-base">{selected.user}</h3>
                <p className="text-sm font-normal">{selected.msgId}</p>
              </div>
              <p className="text-sm text-gray-500">{selected.email}</p>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto">
          {/* Content Section - Scrollable */}
          <div className="flex-1 pt-0 p-4 space-y-4">
            {/* Message Content */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              {selected.content.map((paragraph, index) => (
                <p className={`${index === 1 ? "indent-8" : ""}`} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Attachments */}
            {selected.attachments.length > 0 && (
              <div className="space-y-3 pt-4">
                <div className="grid grid-cols-3 gap-4">
                  {selected.attachments.map((attachment, index) => (
                    <div key={index} className="">
                      <div className="overflow-hidden">
                        {/* Placeholder for attachment preview */}

                        <Image
                          src={attachment.preview}
                          alt="preview"
                          height={120}
                          width={100}
                          className="object-cover w-full"
                        />
                      </div>
                      <div className="text-[0.62rem]">
                        <p className="text-gray-600 truncate">
                          {attachment.id}
                        </p>
                        <a
                          href={attachment.preview}
                          download={`${attachment.id}.svg`}
                          className="text-indigo-600 font-medium cursor-pointer hover:underline"
                        >
                          Download ({attachment.size})
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 pt-2 space-y-4">
            <button className="flex items-center justify-end gap-2 text-indigo-600 font-medium ml-auto cursor-pointer text-xs hover:text-indigo-700">
              <Reply className="h-4 w-4" />
              Reply message
            </button>

            <div className="flex gap-3">
              <button className="flex-1 px-2 py-1.5 border-1 text-sm border-black w-full rounded-full cursor-pointer font-medium hover:bg-gray-50 transition-colors">
                <span>Mark as Read</span>
              </button>
              <button
                onClick={() => setIsCreateTicketOpen(true)}
                className="flex-1 px-2 py-1.5 flex items-center justify-center font-medium text-[#04FB43] cursor-pointer text-sm bg-black rounded-full hover:bg-[#04FB43] hover:text-black transition-colors"
              >
                Create Ticket
                <span>
                  <ChevronDown className="w-5 h-5 pl-2 inline-block" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Ticket Dialog */}
      <CreateTicketDialog
        open={isCreateTicketOpen}
        onOpenChange={setIsCreateTicketOpen}
        onCreateTicket={handleCreateTicket}
      />
    </>
  );
};

export default Poster;
