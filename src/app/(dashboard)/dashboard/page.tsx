import { Button } from "@/components/ui/button";
import CostBreakDown from "@/features/dasboard/components/cost-breakdown";
import DashboardCard from "@/features/dasboard/components/dashboard-card";
import SubscriptionChart from "@/features/dasboard/components/activity-chart";
import TrafficByLocation from "@/features/dasboard/components/traffic-chart";
import TotalUserChart from "@/features/dasboard/components/total-user-chart";
import { ChevronDown } from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] overflow-hidden flex flex-col font-fredoka">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-medium text-lg">Overview</h2>
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

      <div className="mt-4  overflow-y-auto  grid grid-cols-1 xl:grid-col-6 gap-6 xl:gap-4 w-full ">
        <DashboardCard className="col-span-6" />
        <div className="flex xl:h-[60vh] flex-col xl:flex-row col-span-6 gap-6 xl:gap-4 ">
          <CostBreakDown />
          <SubscriptionChart className="" />
        </div>

        <div className="flex xl:h-[80vh]  flex-col xl:flex-row col-span-6 xl:gap-4 gap-6 justify-between h-full items-stretch">
          <TotalUserChart className="xl:w-[60%] " />
          <TrafficByLocation className="xl:w-[40%]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
