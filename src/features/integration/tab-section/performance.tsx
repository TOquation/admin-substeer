import React from "react";
import UptimeTrendChart from "../chart/uptime-chart";
import LatencyDistribution from "../chart/latency-dist-chart";

interface PerformanceProps {
  title: string;
  subtitle: string;
}

const performanceData: PerformanceProps[] = [
  {
    title: "Avg Latency",
    subtitle: "145ms",
  },
  {
    title: "Success Rate",
    subtitle: "99.9%",
  },
  {
    title: "Error Rate",
    subtitle: "8%",
  },
];

const Performance = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {performanceData.map((performance) => {
          return (
            <div
              className="bg-white p-4 rounded-lg flex flex-col gap-2 text-sm"
              key={performance.title}
            >
              <h3 className="text-xs">{performance.title}</h3>
              <p
                className={`font-bold text-base ${
                  performance.subtitle.includes("ms")
                    ? "text-black"
                    : performance.title.includes("Success")
                    ? "text-green-700"
                    : "text-red-700"
                }`}
              >
                {performance.subtitle}
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <UptimeTrendChart />
      </div>

      <div>
        <LatencyDistribution />
      </div>
    </div>
  );
};

export default Performance;
