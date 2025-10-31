import SingleUserPage from "@/app/users/[username]/page";
import { Button } from "@/components/ui/button";
import DashboardCard from "@/features/dasboard/components/dashboard-card";
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
      <div className="mt-4">
        <DashboardCard />
      </div>
    </div>
  );
};

export default Dashboard;
