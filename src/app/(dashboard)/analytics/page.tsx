import AnalyticCard from "@/features/analytics/components/analytic-card";
import AnalyticHeader from "@/features/analytics/components/analytic-header";
import SubscriptionBreakdown from "@/features/analytics/components/subscription-breakdown";
import TrafficByLocation from "@/features/analytics/components/traffic-chart";
import React from "react";
import MarketCard from "@/features/analytics/components/market-card";
import AnalyticPerformanceCard from "@/features/analytics/components/analytic-performance";
import BundleTable from "@/features/analytics/components/bundle-table";
import SalesGrowthChart from "@/features/analytics/components/sales-growth-chart";
import GrowthChart from "@/features/analytics/components/growth-chart";
import RevenueChart from "@/features/analytics/components/revenue-chart";

const Analytics = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden font-fredoka bg-white">
      <AnalyticHeader />

      <div className="overflow-y-auto grid grid-cols-1  mt-4 gap-3 pr-2">
        <AnalyticCard className="" />

        <div className="flex gap-3 xl:h-[60vh] flex-col xl:flex-row">
          <GrowthChart className="bg-gray-50" />
          <RevenueChart className="bg-gray-50" />
        </div>

        <div className="flex xl:flex-row xl:h-[80vh] flex-col gap-3">
          <SubscriptionBreakdown />
          <TrafficByLocation />
        </div>

        <div className="p-5 bg-gray-50 rounded-3xl ">
          <h3 className="text-lg font-medium mb-3">Top Bundles</h3>
          <div className="flex gap-3 pb-4 flex-col xl:flex-row ">
            <MarketCard className=" w-full xl:w-[28%] bg-gray-400/30 xl:h-[20rem] rounded-xl" />

            <div className="flex flex-1 min-h-full flex-col gap-3">
              <AnalyticPerformanceCard className="" />
              <SalesGrowthChart />
            </div>
          </div>
          <div className="mt-6">
            <BundleTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
