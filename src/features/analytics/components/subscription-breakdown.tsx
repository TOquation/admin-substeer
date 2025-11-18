"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Premium account", value: 42.1, color: "#4ADE80" },
  { name: "Basic account", value: 10.0, color: "#4AD000" },
  { name: "Free account", value: 22.8, color: "#93C5FD" },
  { name: "Other", value: 25.1, color: "#86EFAC" },
];

const SubscriptionBreakdown: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col rounded-2xl h-full bg-[#F9FAFB] p-6 w-full ${className}`}
    >
      <h2 className="mb-6 text-lg font-medium text-gray-900">
        Subscription Breakdown
      </h2>

      {/* Chart */}
      <div className="w-full flex justify-center items-center h-full">
        <div className="xl:min-w-[200px] w-[200px] 2xl:w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                className=""
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="50%"
                outerRadius="85%"
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
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
      <div className="mt-4 w-full flex flex-col space-y-4">
        {chartData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between text-sm w-full"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-700">{item.name}</span>
            </div>
            <span className="font-medium text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionBreakdown;
