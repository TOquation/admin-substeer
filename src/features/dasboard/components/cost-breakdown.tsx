"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Hosting", short: "Host.", value: 18, color: "#93C5FD" },
  { name: "API Fees", short: "API", value: 30, color: "#5EEAD4" },
  { name: "Support", short: "Supp.", value: 22, color: "#000000" },
  { name: "Marketing", short: "Mkt.", value: 31, color: "#60A5FA" },
  { name: "Development", short: "Dev.", value: 25, color: "#4ADE80" },
];

const CostBreakDown: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1200);
  const [shortLabels, setShortLabels] = useState(false);

  // Resize observer tracks actual chart container width (not window)
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Decide when to use short labels based on available width
  useEffect(() => {
    // threshold ~550px → tight space for text labels
    setShortLabels(containerWidth < 550);
  }, [containerWidth]);

  const formattedData = data.map((item) => ({
    ...item,
    label: shortLabels ? item.short : item.name,
  }));

  return (
    <div
      ref={containerRef}
      className={`w-full rounded-2xl bg-[#F9F9FA] p-6 ${className}`}
    >
      {/* Header */}
      <h2 className="mb-6 text-lg font-bold text-gray-800">Cost Breakdown</h2>

      {/* Chart */}
      <div className="h-[240px] sm:h-[280px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={formattedData}
            margin={{ top: 10, right: 10, left: -30, bottom: 20 }}
            barCategoryGap="20%"
          >
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
                fontWeight: 400,
                textAnchor: "middle",
              }}
            />

            <YAxis
              tickFormatter={(value) => `${value}K`}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
                fontWeight: 400,
              }}
              domain={[0, 35]}
              ticks={[0, 10, 20, 30]}
            />
            <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={36}>
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CostBreakDown;
