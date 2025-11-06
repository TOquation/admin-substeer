"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface OverviewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Overview: React.FC<OverviewProps> = ({ open, setOpen }) => {
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          className="max-w-[400px] sm:max-w-lg w-full"
          onPointerDownOutside={(e) => e.preventDefault()}
          onInteractOutside={(e) => e.preventDefault()}
        >
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
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
