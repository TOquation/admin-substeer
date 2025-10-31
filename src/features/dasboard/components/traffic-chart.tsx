"use client";

import { useCustomSidebar } from "@/contexts/sidebar-context";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "United States", value: 52.1, color: "#111827" },
  { name: "Canada", value: 22.8, color: "#60A5FA" },
  { name: "Mexico", value: 13.9, color: "#86EFAC" },
  { name: "Other", value: 11.2, color: "#93C5FD" },
];

export default function TrafficByLocation({
  className,
}: {
  className: string;
}) {
  const { leftOpen, rightOpen } = useCustomSidebar();
  const [isTablet, setIsTablet] = useState(false);

  // Detect tablet viewport
  useEffect(() => {
    const checkTablet = () => {
      const w = window.innerWidth;
      setIsTablet(w >= 768 && w < 1024);
    };
    checkTablet();
    window.addEventListener("resize", checkTablet);
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  // flex rule
  const flexDirection =
    isTablet && (!leftOpen || !rightOpen)
      ? "flex-col"
      : isTablet
      ? "flex-row"
      : "flex-col";

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col rounded-2xl p-6 bg-[#F9FAFB]",
        className
      )}
    >
      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Traffic by Location
      </h2>

      {/* Flex logic applied here only */}
      <div
        className={cn(
          "items-center justify-center lg:items-center lg:justify-between",
          flexDirection
        )}
      >
        {/* Pie Chart */}
        <div className="relative h-[220px] w-[220px] sm:h-[240px] sm:w-[240px] lg:h-[260px] lg:w-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="45%"
                outerRadius="90%"
                paddingAngle={3}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                cornerRadius={8}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div
          className={cn(
            "mt-6 w-full max-w-[200px] space-y-3 lg:mt-0 lg:ml-10",
            flexDirection === "flex-row" ? "md:mt-0 md:ml-10" : ""
          )}
        >
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-gray-900">{item.name}</span>
              </div>
              <span className="font-semibold text-gray-900">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
