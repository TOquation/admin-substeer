"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Send } from "lucide-react";

interface SuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onContinue?: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
  icon?: React.ReactNode;
}

export function SuccessDialog({
  open,
  onOpenChange,
  onContinue,
  title = "Invitation Sent",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim placerat nunc laoreet sit. Tempus",
  buttonText = "Continue",
  icon,
}: SuccessDialogProps) {
  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] font-fredoka [&>button]:hidden">
        <div className="absolute right-4 top-4 z-50">
          <button
            onClick={handleClose}
            className="rounded-md border-2 border-neutral-300 p-1.5 hover:bg-neutral-100 transition-colors"
          >
            <X className="w-4 h-4 text-neutral-700" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center py-8 px-6 space-y-6">
          <div className="relative">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              {icon || <Send className="w-10 h-10 text-neutral-800" />}
            </div>
          </div>

          <div className="text-center space-y-3">
            <DialogTitle className="text-neutral-800 text-xl font-semibold">
              {title}
            </DialogTitle>
            <DialogDescription className="text-neutral-600 text-sm leading-relaxed max-w-sm">
              {description}
            </DialogDescription>
          </div>

          <Button
            onClick={handleContinue}
            className="rounded-lg px-12 py-6 bg-neutral-900 text-[#31FC65] hover:bg-neutral-800 font-medium"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
