"use client";

import React from "react";
import { TrendingDown, TrendingUp, Wallet, WalletMinimal } from "lucide-react";
import { cn } from "@/lib/utils";

interface PerformanceProps {
  id: number;
  amount: number;
  icon: React.ComponentType<{ className: string }>;
  duration: string;
  title: string;
  trends: string;
}

const PerformanceCard = ({ className = "" }: { className?: string }) => {
  const performance: PerformanceProps[] = [
    {
      id: 1,
      amount: 8400000,
      icon: Wallet,
      duration: "3 months",
      title: "Revenue",
      trends: "+3% than last month",
    },
    {
      id: 2,
      amount: 400,
      icon: WalletMinimal,
      duration: "3 months",
      title: "Purchases",
      trends: "-2% than last month",
    },
  ];

  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {performance.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "py-6 px-2 rounded-2xl flex gap-3 items-center",
              index % 2 === 0 ? "bg-green-200" : "bg-green-300"
            )}
          >
            <div
              className={`${
                index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
              } rounded-full p-2 w-fit`}
            >
              <item.icon className="w-6 h-6 text-white" />
            </div>

            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  {item.title === "Revenue"
                    ? item.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      })
                    : item.amount}
                </h2>
                <p className="text-gray-600 text-sm">{item.duration}</p>
              </div>

              <div className="flex items-center justify-between">
                <h4 className="text-sm text-gray-700">{item.title}</h4>

                <div className="text-xs">
                  {item.trends.includes("+") ? (
                    <div className="text-green-900 flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.trends}</span>
                    </div>
                  ) : (
                    <div className="text-red-900 flex items-center gap-0.5">
                      <TrendingDown className="w-3 h-3" />
                      <span>{item.trends}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceCard;
