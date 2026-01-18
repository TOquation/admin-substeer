"use client";
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
  children?: React.ReactNode;
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
  children,
}: DynamicHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-3">
        {showBack && (
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border border-gray-400 cursor-pointer hover:bg-transparent"
            onClick={onBack}
          >
            <ArrowLeft className="!w-6 !h-6" size={60} />
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
          <Button
            variant="outline"
            className="rounded-full gap-2 font-normal shadow-none border-gray-400 cursor-pointer text-neutral-600"
          >
            <Filter size={18} />
            Filter
          </Button>
        )}

        {showExport && (
          <Button
            variant="outline"
            className="rounded-full gap-2 font-normal shadow-none cursor-pointer border-gray-400 text-neutral-600"
          >
            <Upload size={18} />
            Export
          </Button>
        )}

        {children}

        {actionLabel && (
          <Button
            className="bg-black text-[#04FB43] hover:bg-[#04FB43] hover:text-black rounded-full cursor-pointer px-4 shadow-none"
            onClick={onAction}
          >
            <span>
              <Plus className="w-6 h-6" />
            </span>
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DynamicHeader;
