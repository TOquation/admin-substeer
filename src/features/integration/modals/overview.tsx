"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { OverviewProps } from "../types";
import Image from "next/image";

const Overview: React.FC<OverviewProps> = ({
  open,
  setOpen,
  selectedIntegration,
}) => {
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          className="max-w-[400px] sm:max-w-lg w-full"
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <SheetHeader>
            <SheetTitle className="flex gap-2 items-center">
              {selectedIntegration && (
                <Image
                  src={selectedIntegration.icon}
                  alt="logo"
                  width={20}
                  height={20}
                  unoptimized
                />
              )}
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>

          <div className="p-4">
            <Button onClick={() => setOpen(false)}>Confirm & Close</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Overview;
