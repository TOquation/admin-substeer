"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "United States", value: 52.1, color: "#111827" },
  { name: "Canada", value: 22.8, color: "#60A5FA" },
  { name: "Mexico", value: 13.9, color: "#86EFAC" },
  { name: "Other", value: 11.2, color: "#93C5FD" },
];

const TrafficByLocation: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col rounded-2xl h-full bg-[#F9FAFB] p-6 w-full ${className}`}
    >
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Traffic by Location
      </h2>

      {/* Chart */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[220px] h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="45%"
                outerRadius="80%"
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
      </div>

      {/* Legend */}
      <div className="mt-6 w-full flex flex-col space-y-3">
        {chartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm w-full"
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
  );
};

export default TrafficByLocation;
