import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface UptimeData {
  day: number;
  uptime: number;
  status: "up" | "down";
}

const UptimeTrendChart: React.FC = () => {
  // Generate 30 days of sample data
  const generateData = (): UptimeData[] => {
    const data: UptimeData[] = [];
    const downtimeDays = [7, 21, 28]; // Days with downtime

    for (let i = 1; i <= 30; i++) {
      const isDown = downtimeDays.includes(i);
      data.push({
        day: i,
        uptime: isDown ? Math.random() * 40 + 50 : Math.random() * 30 + 70,
        status: isDown ? "down" : "up",
      });
    }

    return data;
  };

  const data = generateData();

  return (
    <div className="">
      <h1 className="mb-2 font-semibold text-base">
        Uptime Trend (Last 30 Days)
      </h1>
      <div className="w-full bg-white rounded-lg pb-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 10, left: -20 }}
          >
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              domain={[0, 100]}
            />
            <Bar dataKey="uptime" radius={[4, 4, 0, 0]} maxBarSize={24}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.status === "up" ? "#10b981" : "#ef4444"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="flex items-center justify-center gap-6 my-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5  rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Downtime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UptimeTrendChart;
