"use client";

import React from "react";
import { intCard } from "../data";
import { cn } from "@/lib/utils";
import { useDualSidebar } from "@/contexts/dual-sidebar-context";

const IntegrationCard = () => {
  const { leftOpen, rightOpen } = useDualSidebar();
  return (
    <div className="px-4">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 items-center",
          leftOpen && !rightOpen
            ? "md:grid-cols-2"
            : rightOpen && !leftOpen
            ? "md:grid-cols-2"
            : leftOpen && rightOpen
            ? "md:grid-cols-1"
            : "md:grid-cols-2"
        )}
      >
        {intCard.map((integrate) => {
          return (
            <div
              key={integrate.id}
              className={`rounded-2xl px-6 py-3 space-y-1 ${integrate.bgColor} w-full`}
            >
              <h3 className={`text-sm ${integrate.titleColor} font-semibold`}>
                {integrate.title}
              </h3>

              {integrate.subtitle.toString().includes("/") ? (
                <p className="tracking-widest">
                  <span className="font-semibold text-2xl">
                    {integrate.submain}
                  </span>

                  <span className="text-sm text-gray-400">
                    {"/"}
                    {integrate.subscript}
                  </span>
                </p>
              ) : integrate.subtitle.toLocaleString().length > 3 ? (
                <p className="font-semibold text-2xl tracking-wide">
                  {integrate.subtitle.toLocaleString()}
                </p>
              ) : (
                <p className="font-semibold text-2xl tracking-widest">
                  {integrate.subtitle}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntegrationCard;
