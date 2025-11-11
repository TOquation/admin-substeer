"use client";

import MarketHeader from "@/features/marketplace/components/marketplace-header";
import { ArrowLeft } from "lucide-react";
import React from "react";

const NewBundle = () => {
  return (
    <div className="p-4">
      <MarketHeader
        title="Add new Bundle"
        breadcrums="Add new Bundle"
        subtitle=""
        Icon={ArrowLeft}
      />
    </div>
  );
};

export default NewBundle;
