"use client";

import MarketCard from "@/features/marketplace/components/market-place-card";
import MarketHeader from "@/features/marketplace/components/marketplace-header";
import React, { useState, useMemo } from "react";
import { marketCard } from "@/features/marketplace/data";

const MarketPlace = () => {
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Active" | "Pending" | "Draft"
  >("All");
  const [sortOrder, setSortOrder] = useState<"Oldest" | "Newest">("Newest");

  // Extract unique categories from marketCard data
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(marketCard.map((item) => item.category))
    );
    return uniqueCategories.sort();
  }, []);

  // Filter and sort the market cards
  const filteredAndSortedCards = useMemo(() => {
    let filtered = [...marketCard];

    // Apply category filter
    if (filterCategory !== "All") {
      filtered = filtered.filter((card) => card.category === filterCategory);
    }

    // Apply status filter
    if (filterStatus !== "All") {
      filtered = filtered.filter((card) => card.status === filterStatus);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      // Assuming cards have a date field or using ID as a proxy
      const compareValue = sortOrder === "Newest" ? -1 : 1;
      return (a.id - b.id) * compareValue;
    });

    return filtered;
  }, [filterCategory, filterStatus, sortOrder]);

  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] overflow-hidden flex flex-col">
      <div className="pt-1 pb-5">
        <MarketHeader
          title="Market Place"
          subtitle="Manage Market bundle"
          onCategoryChange={setFilterCategory}
          onStatusChange={setFilterStatus}
          onSortChange={setSortOrder}
          categories={categories}
        />
      </div>

      <div className="flex-1 overflow-y-auto pt-4 pb-6">
        <MarketCard filteredCards={filteredAndSortedCards} />
      </div>
    </div>
  );
};

export default MarketPlace;
