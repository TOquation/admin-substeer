"use client";

import React from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  Wallet,
  WalletMinimal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PerformanceProps {
  id: number;
  amount: number;
  icon: React.ComponentType<{ className: string }>;
  duration: string;
  title: string;
  trends: string;
}

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
    trends: "+3% than last month",
  },
  {
    id: 3,
    amount: 5400000,
    icon: Wallet,
    duration: "3 months",
    title: "Sales",
    trends: "+5% than last month",
  },
  {
    id: 4,
    amount: 320,
    icon: WalletMinimal,
    duration: "3 months",
    title: "Orders",
    trends: "-2% than last month",
  },
  {
    id: 5,
    amount: 320,
    icon: WalletMinimal,
    duration: "3 months",
    title: "Revenue",
    trends: "-2% than last month",
  },
  {
    id: 6,
    amount: 320,
    icon: WalletMinimal,
    duration: "3 months",
    title: "Orders",
    trends: "-2% than last month",
  },
];

const PerformanceCard = () => {
  return (
    <div>
      <h2 className="text-lg font-fredoka mb-6">Performance insight</h2>

      <Carousel
        className="w-full"
        opts={{
          align: "start", // ensures first slide starts flush
          loop: false, // disable looping to prevent half-cuts
        }}
      >
        {/* Header controls */}
        <div className="flex justify-between items-center">
          <CarouselPrevious className="relative left-1 translate-y-0 border border-gray-400 p-1 rounded-lg hover:bg-gray-100">
            <ChevronLeft className="w-6 h-6 text-gray-400" />
          </CarouselPrevious>

          <Button
            variant="ghost"
            className="flex items-center justify-between border border-gray-400"
          >
            <span className="font-normal text-gray-700">Month</span>
            <ChevronDown className="text-gray-400" />
          </Button>

          <CarouselNext className="relative translate-y-0 border right-1 border-gray-400 p-1 rounded-lg hover:bg-gray-100">
            <ChevronRight className="w-6 h-6 text-gray-400" />
          </CarouselNext>
        </div>

        {/* Carousel items */}
        <CarouselContent className="mt-6 flex ml-0">
          {performance.map((item, index) => {
            return (
              <CarouselItem
                key={item.id}
                className="basis-full w-full  sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 pl-2"
              >
                <div
                  className={cn(
                    "py-6 px-4 rounded-2xl flex gap-3 items-center h-full",
                    index % 2 === 0 ? "bg-green-200" : "bg-green-300"
                  )}
                >
                  <div
                    className={` ${
                      index % 2 === 0 ? "bg-blue-500" : "bg-orange-500"
                    } rounded-full p-2 w-fit`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex  flex-col flex-1">
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
                      <p className=" text-gray-600 text-sm">{item.duration}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <h4 className="text-sm text-gray-700">{item.title}</h4>
                      <div className=" text-gray-500 text-xs">
                        {item.trends.includes("+") ? (
                          <div className="text-green-900 flex items-center gap-0.5">
                            <span>
                              {" "}
                              <TrendingUp className="w-3 h-3" />
                            </span>
                            <span> {item.trends}</span>
                          </div>
                        ) : (
                          <div className="text-red-900 flex items-center gap-0.5">
                            <span>
                              <TrendingDown className="w-3 h-3" />
                            </span>
                            <span> {item.trends}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PerformanceCard;
