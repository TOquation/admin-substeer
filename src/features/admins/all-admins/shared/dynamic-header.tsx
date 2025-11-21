"use client";

import React from "react";
import { ArrowLeft, Filter, Plus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DynamicHeaderProps {
  title: string;
  subtitle: string;
  showBack?: boolean;
  showFilter?: boolean;
  showExport?: boolean;
  actionLabel?: string;
  onBack?: () => void;
  onAction?: () => void;
}

const DynamicHeader = ({
  title,
  subtitle,
  showBack = false,
  showFilter = false,
  showExport = false,
  actionLabel,
  onBack,
  onAction,
}: DynamicHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        {showBack && (
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={onBack}
          >
            <ArrowLeft size={20} />
          </Button>
        )}

        <div>
          <h1 className="text-lg font-medium">{title}</h1>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {showFilter && (
          <Button variant="outline" className="rounded-full gap-2">
            <Filter size={18} />
            Filter
          </Button>
        )}

        {showExport && (
          <Button variant="outline" className="rounded-full gap-2">
            <Upload size={18} />
            Export
          </Button>
        )}

        {actionLabel && (
          <Button
            className="bg-black text-white rounded-full px-6 hover:bg-black/90"
            onClick={onAction}
          >
            <span>
              <Plus className="w-4 h-4" />
            </span>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DynamicHeader;
