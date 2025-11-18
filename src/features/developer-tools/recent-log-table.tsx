"use client";

import { Copy } from "lucide-react";

type Log = {
  id: string;
  service: string;
  endpoint: string;
  status: "Success" | "Error" | "Pending";
  code: number;
  time: string;
  duration: string;
};

const logs: Log[] = [
  {
    id: "log_892a3f1b",
    service: "API",
    endpoint: "/v1/subscriptions/create",
    status: "Success",
    code: 200,
    time: "10:45:23",
    duration: "142ms",
  },
  {
    id: "log_892a3f1b",
    service: "Webhook",
    endpoint: "/v1/subscriptions/create",
    status: "Success",
    code: 200,
    time: "10:45:23",
    duration: "142ms",
  },
  {
    id: "log_892a3f1b",
    service: "Integration",
    endpoint: "/v1/subscriptions/create",
    status: "Error",
    code: 200,
    time: "10:45:23",
    duration: "142ms",
  },
  {
    id: "log_892a3f1b",
    service: "API",
    endpoint: "/v1/subscriptions/create",
    status: "Pending",
    code: 200,
    time: "10:45:23",
    duration: "142ms",
  },
];

export default function RecentLogsTable() {
  const getStatusColor = (status: Log["status"]) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-700";
      case "Error":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="w-full p-4 rounded-xl bg-gray-50">
      <h2 className="text-lg font-medium text-gray-900 mb-2">Recent Logs</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* HEADER WITH TOP BORDER */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-6 font-medium text-sm text-gray-500">
                ID
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Service
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Endpoint
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Status
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Code
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Time
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Duration
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-500 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Action
              </th>
            </tr>
          </thead>

          {/* BODY WITH BORDERS */}
          <tbody>
            {logs.map((log, index) => (
              <tr key={`${log.id}-${index}`} className="border border-gray-200">
                <td className="py-4 px-6 text-gray-600 text-base">{log.id}</td>

                <td className="py-4 px-6 text-gray-900 text-base">
                  {log.service}
                </td>

                <td className="py-4 px-6 text-gray-600 text-base">
                  {log.endpoint}
                </td>

                <td className="py-4 px-6">
                  <span
                    className={`inline-flex px-3 py-1 rounded-sm text-sm font-medium ${getStatusColor(
                      log.status
                    )}`}
                  >
                    {log.status}
                  </span>
                </td>

                <td className="py-4 px-6 text-gray-900 text-base">
                  {log.code}
                </td>

                <td className="py-4 px-6 text-gray-900 text-base">
                  {log.time}
                </td>

                <td className="py-4 px-6 text-gray-900 text-base">
                  {log.duration}
                </td>

                <td className="py-4 px-6">
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => navigator.clipboard.writeText(log.id)}
                  >
                    <Copy
                      className="w-5 h-5 text-black cursor-pointer"
                      strokeWidth={2}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
