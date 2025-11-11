"use client";

import MarketHeader from "@/features/marketplace/components/marketplace-header";
import { marketCard } from "@/features/marketplace/data";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React from "react";

const BundleDetail = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const selectedItems = marketCard.find(
    (market) => market.category === categoryId
  );
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)]  flex flex-col overflow-hidden">
      <div className="pb-3">
        <MarketHeader
          title="Bundle Details"
          subtitle=""
          Icon={ArrowLeft}
          breadcrums={selectedItems?.category || ""}
        />
      </div>

      <div className="overflow-y-auto flex-1">
        {/* banner */}
        <div className="relative h-30">
          <div className="bg-[url('/market-card.svg')] bg-cover bg-no-repeat w-full bg-center z-10 h-full absolute inset-0" />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BundleDetail;
