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

const data = [
  { month: "Jan", thisYear: 8000, lastYear: 6000 },
  { month: "Feb", thisYear: 15000, lastYear: 18000 },
  { month: "Mar", thisYear: 22000, lastYear: 16000 },
  { month: "Apr", thisYear: 27000, lastYear: 31000 },
  { month: "May", thisYear: 18000, lastYear: 24000 },
  { month: "Jun", thisYear: 32000, lastYear: 21000 },
  { month: "Jul", thisYear: 20000, lastYear: 28000 },
  { month: "Aug", thisYear: 34000, lastYear: 19000 },
  { month: "Sep", thisYear: 25000, lastYear: 30000 },
  { month: "Oct", thisYear: 30000, lastYear: 27000 },
  { month: "Nov", thisYear: 23000, lastYear: 31000 },
  { month: "Dec", thisYear: 35000, lastYear: 26000 },
];

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

const UserSubscriptionChart: React.FC<{ className: string }> = ({
  className,
}) => {
  const [targetMonth, setTargetMonth] = useState("Jun");
  const [activeMonth, setActiveMonth] = useState("Jun");

  const activeData = data.find((d) => d.month === activeMonth);

  useEffect(() => {
    const animation = setTimeout(() => setActiveMonth(targetMonth), 150);
    return () => clearTimeout(animation);
  }, [targetMonth]);

  const formatMonthLabel = (month: string) => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      return month.charAt(0);
    }
    return month;
  };

  const handleChartClick = (state: any) => {
    if (state?.activeLabel) {
      setTargetMonth(state.activeLabel);
    }
  };

  return (
    <div
      className={`w-full h-[360px] rounded-2xl bg-[#F9FAFB] p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Total Users</h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#111827]" />
            This year
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#6B7280]" />
            Last year
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          onClick={handleChartClick}
          margin={{ top: 20, right: 0, left: -30, bottom: 30 }}
        >
          {/* ✅ Shadow filter under thisYear line */}
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="160%" height="400%">
              <feDropShadow
                dx="0"
                dy="40"
                stdDeviation="25"
                floodColor="#22c55e"
                floodOpacity="0.25"
              />
            </filter>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
            tickFormatter={formatMonthLabel}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 40000]}
            ticks={[0, 10000, 20000, 30000, 40000]}
            tickFormatter={(val) => `${val / 1000}K`}
            tick={{ fill: "#9CA3AF", fontSize: 13 }}
          />

          {/* ✅ Lines */}
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
            strokeWidth={2.5}
            dot={false}
            opacity={0.9}
            filter="url(#shadow)" // 👈 shadow applied here
          />

          {/* ✅ Vertical line indicator */}
          <ReferenceLine
            x={activeMonth}
            stroke="#111827"
            strokeWidth={1}
            ifOverflow="extendDomain"
          />

          {/* ✅ Circle indicator */}
          {activeData && (
            <ReferenceDot
              x={activeData.month}
              y={activeData.thisYear}
              r={4.3}
              fill="#fff"
              stroke="#111827"
              strokeWidth={2}
              isFront
            />
          )}

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "transparent" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserSubscriptionChart;
