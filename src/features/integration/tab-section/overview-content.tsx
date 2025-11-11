import React from "react";
import { IntegralProps } from "../types";
import { getStatusStyles } from "../data";

interface OverviewStatusProps {
  selectedIntegration: IntegralProps;
}

interface QuickStatsProps {
  info: string;
  details: string | number;
}

const OverviewContent: React.FC<OverviewStatusProps> = ({
  selectedIntegration,
}) => {
  const overviewStatus = [
    {
      id: 1,
      title: "Status",
      subtitle: selectedIntegration.status,
      bgColor: getStatusStyles(selectedIntegration.status),
    },
    {
      id: 2,
      title: "Uptime",
      subtitle: selectedIntegration.uptime,
    },
    {
      id: 3,
      title: "Latency",
      subtitle: selectedIntegration.latency,
    },
    {
      id: 4,
      title: "Total API Calls",
      subtitle: 12345,
    },
  ];

  const quickStats: QuickStatsProps[] = [
    {
      info: "Last sync",
      details: "2 minutes ago",
    },
    {
      info: "Error Count",
      details: selectedIntegration.errors,
    },
    {
      info: "Success Rate",
      details: selectedIntegration.uptime,
    },
  ];

  return (
    <div className="flex flex-col gap-6 pb-6 lg:pb-10">
      <div className="grid grid-cols-2 gap-6 rounded-xl py-6 bg-white px-4">
        {overviewStatus.map((status, index) => (
          <div key={status.id} className="flex flex-col gap-1">
            <span className="text-gray-600">{status.title}</span>
            <div className="text-sm font-fahkwang font-semibold">
              {status.subtitle.toLocaleString().includes("%") ? (
                <span>{status.subtitle}</span>
              ) : status.subtitle.toLocaleString().includes("ms") ? (
                <span>{status.subtitle}</span>
              ) : status.bgColor ? (
                <span
                  className={`${status.bgColor} w-fit rounded-md px-3 py-0.5`}
                >
                  {status.subtitle}
                </span>
              ) : (
                <span>{status.subtitle.toLocaleString()}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-sm font-semibold">
        <h3>Quick Stats</h3>
        <div>
          {quickStats.map((stats) => (
            <div
              key={stats.info}
              className="bg-white flex justify-between items-center mt-4 rounded-sm py-3 px-4"
            >
              <span className="font-normal text-gray-800">{stats.info}</span>
              <span
                className={`${
                  stats.info.includes("Error") && selectedIntegration.errors > 0
                    ? "text-red-600"
                    : "text-gray-800"
                }`}
              >
                {" "}
                {stats.details}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Description</h3>
        <p>
          Monitor and manage your Stripe integration. This connection
          handles payments operations with real-time sync and webhook support.
        </p>
      </div>
    </div>
  );
};

export default OverviewContent;
