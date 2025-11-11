import MarketCard from "@/features/marketplace/components/market-place-card";
import MarketHeader from "@/features/marketplace/components/marketplace-header";
import { marketCard } from "@/features/marketplace/data";
import React from "react";

const MarketPlace = () => {
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] overflow-hidden flex flex-col">
      <div className="pt-1 pb-5">
        <MarketHeader title="Market Place" subtitle="Manage Market bundle" />
      </div>

      <div className="flex-1 overflow-y-auto pt-4 pb-6">
        <MarketCard />
      </div>
    </div>
  );
};

export default MarketPlace;
