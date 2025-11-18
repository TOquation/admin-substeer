import {
  Activity,
  Clock4,
  Home,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  Zap,
} from "lucide-react";
import React, { ComponentType } from "react";

interface DashboardCardProps {
  title: string;
  icon: ComponentType<{ className: string }>;
  amount: string;
  trend: string;
  duration: string;
}

const dashboardCard: DashboardCardProps[] = [
  {
    title: "System Uptime",
    icon: Activity,
    amount: "65%",
    trend: "+11.01%",
    duration: "from last week",
  },
  {
    title: "System Uptime",
    icon: Clock4,
    amount: "671ms",
    trend: "+11.01%",
    duration: "from last week",
  },
  {
    title: "API Calls (24h)",
    icon: Zap,
    amount: "12.6K",
    trend: "+11.01%",
    duration: "from last week",
  },
  {
    title: "API Calls (24h)",
    icon: TriangleAlert,
    amount: "12.6%",
    trend: "-11.01%",
    duration: "from last week",
  },
];

const DeveloperCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:grid-cols-4">
      {dashboardCard.map((dashCard, index) => {
        return (
          <div
            key={index}
            className="p-4 rounded-xl space-y-2 bg-gray-50 text-sm"
          >
            <div className="flex items-center justify-between">
              <h3>{dashCard.title}</h3>
              <dashCard.icon className="h-5 w-5" />
            </div>
            <p className="font-normal tracking-wider text-[1.4rem]">
              {dashCard.amount}
            </p>

            <div className="flex items-center gap-1">
              <p className="flex items-center text-[0.8rem] gap-1">
                <span
                  className={`${
                    dashCard.trend.startsWith("-")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {dashCard.trend}
                </span>
                <span
                  className={`${
                    dashCard.trend.startsWith("-")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {dashCard.trend.startsWith("-") ? (
                    <TrendingDown className="w-3 h-3" />
                  ) : (
                    <TrendingUp className="w-3 h-3" />
                  )}
                </span>
              </p>
              <span
                className={`${
                  dashCard.trend.startsWith("-")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {dashCard.duration}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeveloperCard;
