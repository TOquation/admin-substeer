"use client";

import React from "react";
import { marketCard, marketStatus } from "../data";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import { useDualSidebar } from "@/contexts/dual-sidebar-context";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const MarketCard = () => {
  const { leftOpen, rightOpen } = useDualSidebar();
  const router = useRouter();
  const handleMarketCard = (category: string) => {
    router.push(`/marketplace/bundle-details?category=${category}`);
  };
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-4",
        !rightOpen || !leftOpen
          ? " md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4"
          : "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      )}
    >
      {marketCard.map((market) => {
        return (
          <div
            onClick={() => handleMarketCard(market.category)}
            key={market.id}
            className="flex flex-col rounded-xl relative overflow-hidden   text-white cursor-pointer"
          >
            <div className="bg-[url('/market-card.svg')] bg-cover bg-no-repeat w-full bg-left z-10 h-full absolute inset-0" />
            {/* Image section */}

            <div className="relative z-20 text-gray-800 flex flex-col p-4 justify-between h-full">
              {/* Menu icon */}
              <div className="flex justify-end pt-3">
                <MoreVertical
                  onClick={(e) => e.stopPropagation()}
                  className="w-5 h-5 text-gray-700 cursor-pointer "
                />
              </div>
              {/* Title + Category */}
              <div className="pt-2">
                <span className="inline-block text-xs px-2 py-0.5 bg-gray-200/80 rounded-md font-fredoka text-gray-700 font-medium mb-1">
                  {market.title}
                </span>
                <h4 className="text-sm font-semibold leading-tight font-inter">
                  {market.category}
                </h4>
              </div>
            </div>

            {/* Info section */}
            <div className=" px-4 pb-2 space-y-2 relative z-20">
              {/* Price and status */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-0.5 font-fredoka">
                    Price:
                  </p>
                  <h3 className="text-sm font-semibold text-gray-800 font-inter">
                    {market.amount}
                  </h3>
                </div>

                {/* Status */}
                <div className="flex items-center gap-1">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      marketStatus(market.status).bg
                    }`}
                  ></div>
                  <span
                    className={`text-xs font-medium capitalize font-fredoka ${
                      marketStatus(market.status).text
                    }`}
                  >
                    {market.status}
                  </span>
                </div>
              </div>

              {/* Partner/source + icons */}
              <div className="flex justify-between items-end pb-2">
                <div className="text-xs text-gray-500 leading-tight">
                  <p className="font-normal font-fredoka">Partner/Source:</p>
                  <p className="flex items-center gap-1 font-fredoka">
                    {market.partners.map((label, index) => {
                      return (
                        <span key={label.label}>
                          {index === market.partners.length - 1 ? (
                            label.label
                          ) : (
                            <span>{label.label},</span>
                          )}
                        </span>
                      );
                    })}
                  </p>
                </div>

                <div className="flex items-center gap-0.5">
                  {market.partners.map((url, index) => {
                    return (
                      <div key={url.label}>
                        <Image
                          key={index}
                          src={url.url}
                          alt={`logo_${index + 1}`}
                          height={12}
                          width={12}
                          className="rounded-sm object-contain"
                          unoptimized
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketCard;
