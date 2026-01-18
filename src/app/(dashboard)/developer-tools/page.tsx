"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DeveloperCard from "@/features/developer-tools/developer-card";
import DeveloperHeader from "@/features/developer-tools/developer-header";
import IntegrationHealth from "@/features/developer-tools/health-info";
import RecentLogsTable from "@/features/developer-tools/recent-log-table";
import { ChevronDown, Send } from "lucide-react";
import React, { useState } from "react";

const DeveloperTool = () => {
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Success" | "Error" | "Pending"
  >("All");

  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-hidden gap-4 flex flex-col p-4">
      <DeveloperHeader onFilterChange={setFilterStatus} />
      <div className="flex-1 overflow-y-auto">
        <div className="mb-4">
          <DeveloperCard />
        </div>
        <div className="bg-gray-50 p-4 mb-4 rounded-xl text-sm">
          <h3 className="font-medium mb-0.5">API Console</h3>
          <p className="text-gray-500 mb-3">
            Test your API endpoints directly from the dashboard
          </p>
          <div className="flex gap-4 items-center mb-4">
            <div className="flex items-center justify-between border-[1.5px] border-gray-400 rounded-full w-28 py-2 px-3">
              <span className="text-lg text-gray-400">Get</span>
              <ChevronDown className="w-6 h-6 text-gray-500" />
            </div>
            <div className="flex-1 border-[1.5px] border-gray-400 rounded-full py-1">
              <Input
                className="focus-visible:ring-0 shadow-none focus:border-none border-none"
                placeholder="https://api.substeer.com/v1/users/7f8d9e0a"
              />
            </div>

            <Button className="py-6 rounded-2xl w-28 flex gap-2 text-[#04FB43] bg-black hover:bg-[#04FB43] hover:text-black text-sm cursor-pointer">
              <span>Send</span>
              <Send />
            </Button>
          </div>
        </div>

        <div className="mb-4 bg-gray-50 rounded-xl text-sm">
          <RecentLogsTable filterStatus={filterStatus} />
        </div>

        <div>
          <IntegrationHealth />
        </div>
      </div>
    </div>
  );
};

export default DeveloperTool;
