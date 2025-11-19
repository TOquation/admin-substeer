"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart2 } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

// --- Generate smooth wave data with multiple intersections ---
const generateWaveData = (points = 48) => {
  const data = [];
  for (let i = 0; i < points; i++) {
    const x = i / points;

    // This Month - oscillates around Last Month with crossovers
    const thisMonth =
      Math.sin(x * Math.PI * 4) * 15000 +
      Math.sin(x * Math.PI * 7 + 0.5) * 8000 +
      Math.cos(x * Math.PI * 3) * 10000 +
      50000 +
      x * 30000; // Strong upward trend

    // Last Month - different frequency for natural intersections
    const lastMonth =
      Math.sin(x * Math.PI * 3.5 + 0.8) * 14000 +
      Math.cos(x * Math.PI * 5.5) * 9000 +
      Math.sin(x * Math.PI * 2) * 7000 +
      48000 +
      x * 12000; // Moderate upward trend

    data.push({
      week: `Wk ${i + 1}`,
      thisMonth: Math.max(5000, Math.round(thisMonth)),
      lastMonth: Math.max(5000, Math.round(lastMonth)),
    });
  }
  return data;
};

const chartData = generateWaveData(48);

const chartConfig = {
  thisMonth: {
    label: "This Month",
    color: "#00FF66",
  },
  lastMonth: {
    label: "Last Month",
    color: "#0000FF",
  },
} satisfies ChartConfig;

export function SalesGrowth() {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader className="pb-2 px-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <span className="border-[1.5px] border-gray-900 rounded-[5px]">
              <BarChart2 className="h-4 w-4" />
            </span>
            <span>Sales Growth</span>
          </CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#00FF66]" />
              <span className="text-muted-foreground">This Month</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[#0000FF]" />
              <span className="text-muted-foreground">Last Month</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0">
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart
              data={chartData}
              margin={{ top: 20, right: -40, left: -15, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF66" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#00FF66" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0000FF" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#0000FF" stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* Horizontal grid lines */}
              <CartesianGrid
                strokeDasharray="0"
                strokeWidth={1}
                vertical={false}
                horizontal={true}
                opacity={1}
                stroke="#e5e7eb"
              />

              {/* X-Axis */}
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                interval="preserveStartEnd"
                minTickGap={80}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              {/* LAST MONTH curve */}
              <Area
                type="natural"
                dataKey="lastMonth"
                stroke="#0000FF"
                strokeWidth={3}
                fill="url(#colorLastMonth)"
                fillOpacity={1}
                animationDuration={2000}
              />

              {/* THIS MONTH curve */}
              <Area
                type="natural"
                dataKey="thisMonth"
                stroke="#00FF66"
                strokeWidth={3}
                fill="url(#colorThisMonth)"
                fillOpacity={1}
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
