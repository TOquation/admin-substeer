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
    <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
      <p className="mb-1 text-sm font-medium text-gray-600">{label}</p>
      {thisYearPoint && (
        <p className="text-lg font-bold text-gray-900">
          {thisYearPoint.value?.toLocaleString()}
        </p>
      )}
    </div>
  );
};

// --------------------------------------
// Main Chart Component
// --------------------------------------
const SubscriptionChart: React.FC = () => {
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
  const handleChartClick = (state: { activeLabel?: string } | null) => {
    if (state?.activeLabel) {
      setTargetMonth(state.activeLabel);
    }
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">User Growth</h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-500"></div>
            <span className="text-gray-600">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <span className="text-gray-600">Active Users</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          onClick={handleChartClick}
        >
          {/* Vertical indicator */}
          <ReferenceLine
            x={activeMonth}
            stroke="#10B981"
            strokeWidth={2}
            strokeDasharray="0"
          />

          {/* Green dot */}
          {activeData && (
            <ReferenceDot
              x={activeMonth}
              y={activeData.thisYear}
              r={6}
              fill="#10B981"
              stroke="#fff"
              strokeWidth={2}
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
            tickFormatter={formatMonthLabel}
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={false}
          />

          {/* Y-Axis */}
          <YAxis
            tickFormatter={(val) => `${val / 1000}K`}
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
          />

          {/* Lines */}
          <Line
            type="monotone"
            dataKey="lastYear"
            stroke="#D1D5DB"
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          <Line
            type="monotone"
            dataKey="thisYear"
            stroke="#10B981"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#10B981",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriptionChart;
