import { Button } from "@/components/ui/button";
import CostBreakDown from "@/features/dasboard/components/cost-breakdown";
import DashboardCard from "@/features/dasboard/components/dashboard-card";
import SubscriptionChart from "@/features/dasboard/components/subscription-chart";
import TrafficByLocation from "@/features/dasboard/components/traffic-chart";
import UserSubscriptionChart from "@/features/dasboard/components/user-sub-chart";
import { ChevronDown } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-lg">Overview</h2>
          <h4 className="font-medium text-gray-400 text-sm">
            Here is what is happening with Substeer
          </h4>
        </div>
        <Button className="flex justify-between items-center" variant="ghost">
          Today{" "}
          <span>
            <ChevronDown className="text-gray-400" />
          </span>
        </Button>
      </div>

      {/* cards */}
      <div className="mt-4 grid grid-cols-1 xl:grid-col-6 gap-6 xl:gap-4 w-full items-stretch">
        <DashboardCard className="col-span-6" />
        <div className="flex flex-col xl:flex-row col-span-6 gap-6 xl:gap-4 justify-between items-stretch">
          <CostBreakDown />
          <SubscriptionChart className="" />
        </div>

        <div className="flex flex-col xl:flex-row col-span-6 xl:gap-4 gap-6 justify-between h-full items-stretch">
          <UserSubscriptionChart className="xl:w-[60%]" />
          <TrafficByLocation className="xl:w-[40%]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
