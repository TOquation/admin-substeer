import { CircleAlert } from "lucide-react";
import React from "react";

interface RecentActivity {
  id: number;
  duration: string;
  subtitle: string;
}

const recentActivity: RecentActivity[] = [
  {
    id: 1,
    duration: "2 min ago",
    subtitle: "Latest logs from Stripe integration",
  },
  {
    id: 2,
    duration: "15 min ago",
    subtitle: "Webhook received: invoice.paid",
  },
  {
    id: 3,
    duration: "1 hour ago",
    subtitle: "Customer subscription updated",
  },
];

const Log = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">Recent Activity</h3>
        <p className="text-gray-700 font-normal">
          Latest logs from Stripe integration
        </p>
      </div>

      <div className="space-y-8">
        {recentActivity.map((recent) => {
          return (
            <div key={recent.id} className="flex space-x-2 items-start">
              <CircleAlert className="w-4 h-4 text-green-600" />
              <div className="flex flex-col">
                <div className="flex text-xs space-x-2 space-y-2 items-start">
                  <p className="bg-green-200 text-green-600 border-[1.5px] py-[-1px] border-green-600 px-1 rounded-[4px]">
                    info
                  </p>
                  <p className="text-gray-500">{recent.duration}</p>
                </div>
                <p className="text-gray-600">{recent.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Log;
