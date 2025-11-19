import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import React from "react";
interface headerTitle {
  title: string;
  subtitle: string;
  className: string;
  isIcon?: boolean;
}

const DynamicHeader = ({ title, subtitle, className, isIcon }: headerTitle) => {
  return (
    <div className={`${className} flex justify-between items-center`}>
      <div className="flex gap-3">
        {isIcon && <Lock className="text-neutral-600 h-6 w-6" />}
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      {isIcon && (
        <Button
          className="text-green-400 rounded-lg px-4 py-3 cursor-pointer"
          size="lg"
        >
          Save Changes
        </Button>
      )}
    </div>
  );
};

export default DynamicHeader;
