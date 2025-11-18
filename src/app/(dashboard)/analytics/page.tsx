import AnalyticCard from "@/features/analytics/components/analytic-card";
import AnalyticHeader from "@/features/analytics/components/analytic-header";
import SubscriptionBreakdown from "@/features/analytics/components/subscription-breakdown";
import SubscriptionChart from "@/features/analytics/components/user-growth-chart";
import TrafficByLocation from "@/features/analytics/components/traffic-chart";
import UserSubscriptionChart from "@/features/analytics/components/user-revenue-chart";
import React from "react";
import MarketCard from "@/features/analytics/components/market-card";
import AnalyticPerformanceCard from "@/features/analytics/components/analytic-performance";
import BundleTable from "@/features/analytics/components/bundle-table";

const Analytics = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden font-fredoka">
      <AnalyticHeader />

      <div className="flex-1 overflow-y-auto flex flex-col mt-4 gap-3 pr-2">
        <AnalyticCard className="" />
        {/* <div className="xl:flex-row flex max-h-full flex-col min-h-0 xl:items-stretch gap-3 ">
          <SubscriptionChart className="bg-[#F9FAFB]" />
          <UserSubscriptionChart title="Revenue Trend" />
        </div>

        <div className="flex xl:flex-row min-h-full flex-col gap-3">
          <SubscriptionBreakdown />
          <TrafficByLocation />
        </div>

        <div className="p-5 bg-gray-50 rounded-3xl ">
          <h3 className="text-lg font-medium mb-3">Top Bundles</h3>
          <div className="flex gap-3 mb-3 xl:min-h-fit">
            <MarketCard className=" w-[28%] bg-gray-400/30 h-[24.7rem] rounded-xl" />

            <div className="flex flex-1 h-[18rem] flex-col gap-3">
              <AnalyticPerformanceCard className="" />
              <UserSubscriptionChart className="" title="Sales Growth" />
            </div>
          </div>
          <div className="mt-6">
            <BundleTable />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Analytics;
