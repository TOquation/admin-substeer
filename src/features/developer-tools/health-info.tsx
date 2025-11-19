import React from "react";
import { Activity, TrendingUp } from "lucide-react";

type IntegrationStatus = {
  name: string;
  uptime: number;
  status: "Success" | "Healthy";
  statusColor: "green" | "orange";
  requests: number;
  requestTrend: "up" | "down";
  avgLatency: number;
};

const integrations: IntegrationStatus[] = [
  {
    name: "Strip",
    uptime: 99.98,
    status: "Success",
    statusColor: "green",
    requests: 24.5,
    requestTrend: "up",
    avgLatency: 89,
  },
  {
    name: "Mailgun",
    uptime: 99.98,
    status: "Healthy",
    statusColor: "green",
    requests: 24.5,
    requestTrend: "up",
    avgLatency: 89,
  },
  {
    name: "Twilio",
    uptime: 30.65,
    status: "Success",
    statusColor: "orange",
    requests: 24.5,
    requestTrend: "up",
    avgLatency: 89,
  },
  {
    name: "Slack",
    uptime: 99.98,
    status: "Healthy",
    statusColor: "green",
    requests: 24.5,
    requestTrend: "up",
    avgLatency: 89,
  },
];

const IntegrationHealth = () => {
  return (
    <div className="w-full p-4 bg-gray-50">
      <h2 className="text-xl font-medium text-gray-900 mb-2">
        Integration Health
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {integration.name}
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium ${
                    integration.statusColor === "green"
                      ? "bg-green-600 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  {integration.status}
                </span>
              </div>

              <div className="text-right">
                <div className="text-lg font-medium  text-gray-900">
                  {integration.uptime}%
                </div>
                <div className="text-sm text-gray-500 mt-1">Uptime</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  integration.statusColor === "green"
                    ? "bg-green-600"
                    : "bg-orange-500"
                }`}
                style={{ width: `${integration.uptime}%` }}
              ></div>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 mb-1">Requests (24)</div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-medium text-gray-900">
                    {integration.requests}k
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">Avg Latency</div>
                <div className="text-base font-normal text-gray-900">
                  {integration.avgLatency}ms
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationHealth;
