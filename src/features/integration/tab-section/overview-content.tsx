import React from "react";

interface OverviewStatusProps {
  id: number;
  title: string;
  subtitle: string | number;
  bgColor?: string;
  textColor?: string;
}

interface QuickStatsProps {
  info: string;
  details: string | number;
}

const quickStats: QuickStatsProps[] = [
  {
    info: "Last sync",
    details: "2 minutes ago",
  },
  {
    info: "Error Count",
    details: 0,
  },
  {
    info: "Success Rate",
    details: "99.9%",
  },
];

const overviewStatus: OverviewStatusProps[] = [
  {
    id: 1,
    title: "Status",
    subtitle: "Success",
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
  {
    id: 2,
    title: "Uptime",
    subtitle: "99.9%",
  },
  {
    id: 3,
    title: "Status",
    subtitle: "145ms",
  },
  {
    id: 4,
    title: "Total API Calls",
    subtitle: 12345,
  },
];

const OverviewContent = () => {
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
              ) : status.bgColor && status.textColor ? (
                <span
                  className={`${status.bgColor} ${status.textColor} w-fit rounded-md px-3 py-0.5`}
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
              <span>{stats.details}</span>
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
