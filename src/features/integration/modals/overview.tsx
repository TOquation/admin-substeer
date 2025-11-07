"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { OverviewProps } from "../types";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { tabsData } from "../data";

const Overview: React.FC<OverviewProps> = ({
  open,
  setOpen,
  selectedIntegration,
}) => {
  const [tab, setTab] = useState("overview");

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* make sure the sheet itself allows height grow + scroll */}
      <SheetContent
        className="max-w-[400px] sm:max-w-lg w-full p-0 flex flex-col h-screen overflow-hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-full min-h-0">
          {/* Fixed Header */}
          <SheetHeader className="p-6 pb-0 flex-shrink-0">
            <SheetTitle className="flex gap-2 items-center">
              {selectedIntegration && (
                <div className="w-full">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={selectedIntegration.icon}
                      alt="logo"
                      width={24}
                      height={24}
                      unoptimized
                    />
                    <div>
                      <h2 className="text-base">
                        {selectedIntegration.service}
                      </h2>
                      <p className="text-xs text-gray-500 font-normal">
                        {selectedIntegration.type}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SheetTitle>
          </SheetHeader>

          {selectedIntegration && (
            <Tabs
              defaultValue="overview"
              className="flex flex-col mt-[1.5rem] gap-1 flex-1 min-h-0"
            >
              <Separator className="w-full flex-shrink-0" />

              {/* Tabs header scrolls horizontally on small screens */}
              <div className="px-6 flex-shrink-0">
                <TabsList
                  className="
                    bg-white flex gap-2 items-center 
                    overflow-x-auto whitespace-nowrap scrollbar-thin
                    sm:flex-wrap sm:overflow-x-visible
                  "
                >
                  {tabsData.map((trigger) => (
                    <TabsTrigger
                      key={trigger.id}
                      value={trigger.title}
                      className="
                        text-sm whitespace-nowrap
                        focus-visible:ring-0 
                        focus-visible:outline-none 
                        focus-visible:border-0 
                        bg-transparent 
                        data-[state=active]:shadow-none 
                        data-[state=active]:border-none 
                        cursor-pointer
                      "
                    >
                      {trigger.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <Separator className="w-full flex-shrink-0" />

              {/* Scrollable content area */}
              <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6 scrollbar-thin">
                <TabsContent value="overview" className="space-y-4">
                  {/* Long content — will now fully scroll */}
                  {Array.from({ length: 50 }).map((_, i) => (
                    <p key={i}>
                      Line {i + 1}: Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quisquam, molestiae.
                    </p>
                  ))}
                </TabsContent>

                <TabsContent value="password"></TabsContent>
              </div>
            </Tabs>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Overview;
