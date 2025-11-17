"use client";

import SupportHeader from "@/features/support/components/support-header";
import TicketSidebar from "@/features/support/components/ticket-sidebar";
import { newTickets } from "@/features/support/data";
import { NewTicketsProps } from "@/features/support/types";
import { MoreVerticalIcon, Reply } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const NewTicketInfo = () => {
  const searchParams = useSearchParams();
  const searchId = Number(searchParams.get("id"));
  const SelectedId = newTickets.find(
    (tickets: NewTicketsProps) => tickets.id === searchId
  );

  if (!SelectedId) {
    throw new Error("Ticket not found");
  }

  const getInitials = (name: string) => name.charAt(0).toUpperCase();

  return (
    <div className="h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden font-fredoka p-3">
      <SupportHeader variant="ticket-detail" />

      <div className="flex gap-3 my-4">
        <div className="lg:w-[65%] overflow-y-auto max-h-[calc(90vh-5.5rem)] pb-8 pr-2">
          {/* title */}
          <div className="flex justify-between items-center">
            <h2>{SelectedId.title}</h2>
            <MoreVerticalIcon className="w-5 h-5" />
          </div>

          {/* name + email */}
          <div className="flex items-center gap-2 mt-4">
            <div className="text-green-400 font-semibold bg-black rounded-sm h-10 w-10 flex items-center justify-center text-lg">
              {getInitials(SelectedId.user)}
            </div>

            <div className="flex-1 text-sm">
              <div className="flex justify-between items-center">
                <span>{SelectedId.user}</span>
                <span>{SelectedId.msgId}</span>
              </div>
              <p className="text-gray-400">{SelectedId.email}</p>
            </div>
          </div>

          {/* content */}
          <div className="overflow-y-auto">
            <div className="flex-1 pt-0 space-y-4">
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                {SelectedId.content.map((paragraph, index) => (
                  <p className={`${index === 1 ? "indent-4" : ""}`} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Attachments */}
              {SelectedId.attachments.length > 0 && (
                <div className="">
                  <div className=" flex gap-4">
                    {SelectedId.attachments.map((attachment, index) => (
                      <div key={index}>
                        <div className="overflow-hidden">
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
          </div>

          {/* reply */}
          <div className="flex items-center text-sm gap-3 my-4 bg-gray-100 p-2">
            <span>
              <Reply className="h-5 w-5 text-indigo-600" />
            </span>
            <div className=" flex-1 flex justify-between items-center">
              <span>{SelectedId.user}</span>
              <span className="text-gray-400">{SelectedId.email}</span>
            </div>
          </div>

          {/* content-2 */}
          <div className="overflow-y-auto">
            <div className="flex-1 pt-0 space-y-4">
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                {SelectedId.content.map((paragraph, index) => (
                  <p className={`${index === 1 ? "indent-4" : ""}`} key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end pr-2 text-sm text-indigo-600">
            <p className="flex items-center gap-1">
              <span>
                <Reply className="w-5 h-5" />
              </span>
              <span>Reply Message</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg flex-1 flex flex-col h-[calc(75vh-1rem)] overflow-hidden">
          <div className="overflow-y-auto flex-1">
            <TicketSidebar selectedId={SelectedId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicketInfo;
