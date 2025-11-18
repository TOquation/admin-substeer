"use client";

import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import type { TooltipProps } from "recharts";

// --------------------------------------
// Chart Data
// --------------------------------------
const data = [
  { month: "Jan", thisYear: 4000, lastYear: 8000 },
  { month: "Feb", thisYear: 12000, lastYear: 11000 },
  { month: "Mar", thisYear: 18000, lastYear: 16000 },
  { month: "Apr", thisYear: 13000, lastYear: 20000 },
  { month: "May", thisYear: 16000, lastYear: 15000 },
  { month: "Jun", thisYear: 21000, lastYear: 12000 },
  { month: "Jul", thisYear: 18000, lastYear: 20000 },
  { month: "Aug", thisYear: 23000, lastYear: 19000 },
  { month: "Sep", thisYear: 25000, lastYear: 22000 },
  { month: "Oct", thisYear: 27000, lastYear: 26000 },
  { month: "Nov", thisYear: 29000, lastYear: 30000 },
  { month: "Dec", thisYear: 31000, lastYear: 33000 },
];

// --------------------------------------
// Tooltip Component
// --------------------------------------
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null;
  const thisYearPoint = payload.find((p) => p.dataKey === "thisYear");

  return (
    <div className="bg-white rounded-lg shadow-md px-3 py-1.5">
      <div className="text-xs text-gray-500">{label}</div>
      {thisYearPoint && (
        <div className="text-xs font-semibold text-gray-900">
          {thisYearPoint.value?.toLocaleString()}
        </div>
      )}
    </div>
  );
};

// --------------------------------------
// Main Chart Component
// --------------------------------------
const SubscriptionChart: React.FC<{ className: string }> = ({ className }) => {
  const [targetMonth, setTargetMonth] = useState("Jun");
  const [activeMonth, setActiveMonth] = useState("Jun");

  const activeData = data.find((d) => d.month === activeMonth);

  // Smooth animation for vertical indicator
  useEffect(() => {
    const animation = setTimeout(() => setActiveMonth(targetMonth), 150);
    return () => clearTimeout(animation);
  }, [targetMonth]);

  // Responsive X-axis labels
  const formatMonthLabel = (month: string) => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return month.charAt(0);
    }
    return month;
  };

  // Handle chart click
  const handleChartClick = (state: any) => {
    if (state?.activeLabel) {
      setTargetMonth(state.activeLabel);
    }
  };

  return (
    <div className="w-full h-[420px] rounded-2xl bg-[#F9FAFB] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Subscription Activity
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#4B5563]" />
            This year
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#93C5FD]" />
            Last year
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          onClick={handleChartClick}
          margin={{ top: 20, right: 0, left: -30, bottom: 30 }}
        >
          {/* Thinner vertical indicator */}
          <ReferenceLine
            x={activeMonth}
            stroke="#00FF66"
            strokeWidth={1}
            ifOverflow="extendDomain"
          />

          {/* Green circle indicator */}
          {activeData && (
            <ReferenceDot
              x={activeData.month}
              y={activeData.thisYear}
              r={4.3}
              fill="#fff"
              stroke="#00FF66"
              strokeWidth={2}
              isFront
            />
          )}

          {/* Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "transparent" }}
          />

          {/* X-Axis */}
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
            tickFormatter={formatMonthLabel}
          />

          {/* Y-Axis with fixed ticks */}
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 30000]}
            ticks={[0, 10000, 20000, 30000]} // fixed tick values
            tickFormatter={(val) => `${val / 1000}K`}
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
          />

          {/* Lines */}
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#6B7280"
            strokeWidth={1.8}
            dot={false}
            strokeDasharray="5 5"
            opacity={0.4}
          />
          <Line
            type="monotone"
            dataKey="thisYear"
            stroke="#111827"
            strokeWidth={2}
            dot={false}
            opacity={0.6}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionChart;
