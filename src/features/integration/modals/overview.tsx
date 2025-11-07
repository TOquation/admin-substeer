"use client";

import React from "react";
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
import OverviewContent from "../tab-section/overview-content";
import Performance from "../tab-section/performance";
import Log from "../tab-section/log";
import Settings from "../tab-section/settings";
import Credentials from "../tab-section/credentials";

const Overview: React.FC<OverviewProps> = ({
  open,
  setOpen,
  selectedIntegration,
}) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        className="max-w-[400px] sm:max-w-lg w-full p-0 bg-gray-100 flex flex-col h-screen overflow-hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-full min-h-0">
          <SheetHeader className="py-6 px-4 pb-0 flex-shrink-0">
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

              <div className="w-full px-2">
                <div className="overflow-x-auto  scrollbar-thin scrollbar-thumb-gray-300  scrollbar-track-transparent max-w-[calc(100%-0.5rem)] ">
                  <TabsList className="flex gap-2 border-none shadow-none">
                    {tabsData.map((trigger) => (
                      <TabsTrigger
                        key={trigger.id}
                        value={trigger.title}
                        className="text-sm whitespace-nowrap focus-visible:ring-0 focus-visible:outline-none focus-visible:border-0 bg-transparent data-[state=active]:shadow-none data-[state=active]:border-none cursor-pointer data-[state=active]:bg-transparent text-gray-500"
                      >
                        {trigger.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
              </div>
              <Separator className="w-full flex-shrink-0" />

              <div className="flex-1 min-h-0 overflow-y-auto px-4 pt-4 pb-6 scrollbar-thin">
                {tabsData.map((tabContent, i) => (
                  <TabsContent
                    key={tabContent.id}
                    value={tabContent.title}
                    className="space-y-4 text-sm"
                  >
                    {tabContent.title === "performance" ? (
                      <Performance />
                    ) : tabContent.title === "logs" ? (
                      <Log />
                    ) : tabContent.title === "credentials" ? (
                      <Credentials />
                    ) : tabContent.title === "settings" ? (
                      <Settings />
                    ) : (
                      <OverviewContent />
                    )}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Overview;
