"use client";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Plus, SlashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ComponentType } from "react";
import MarketFilters from "./market-filters";

const MarketHeader = ({
  title,
  subtitle,
  Icon,
  breadcrums,
  onCategoryChange,
  onStatusChange,
  onSortChange,
  categories,
}: {
  title: string;
  subtitle: string;
  Icon?: ComponentType<{ className: string; strokeWidth: number }>;
  breadcrums?: string;
  onCategoryChange?: (category: string) => void;
  onStatusChange?: (status: "All" | "Active" | "Pending" | "Draft") => void;
  onSortChange?: (sort: "Oldest" | "Newest") => void;
  categories?: string[];
}) => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const handleAddNew = () => {
    router.push("/marketplace/new-bundle");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {Icon && (title === "Bundle Details" || title === "Add new Bundle") ? (
          <div className="flex items-center space-x-2">
            <div
              onClick={handleBack}
              className="p-1 border border-gray-700 rounded-full cursor-pointer"
            >
              <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-950 font-semibold">{title}</span>
              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/marketplace">marketplace</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-indigo-600 font-semibold">
                        {breadcrums}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        ) : (
          title === "Market Place" && (
            <div className="flex flex-col">
              <span className="text-gray-950 font-semibold">{title}</span>
              <span className="text-sm">{subtitle}</span>
            </div>
          )
        )}
      </div>

      {!Icon && title === "Market Place" ? (
        <div className="gap-12 flex items-center">
          {onCategoryChange && onStatusChange && onSortChange && categories && (
            <MarketFilters
              onCategoryChange={onCategoryChange}
              onStatusChange={onStatusChange}
              onSortChange={onSortChange}
              categories={categories}
            />
          )}

          {/* cta */}
          <div
            onClick={handleAddNew}
            className="px-3 py-1.5 bg-black text-[#04FB43] hover:text-black hover:bg-[#04FB43] rounded-full flex gap-2 items-center cursor-pointer transition-all duration-300 ease-in-out"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Bundle</span>
          </div>
        </div>
      ) : Icon && title === "Bundle Details" ? (
        ""
      ) : (
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="rounded-full px-4 py-1 hover:bg-[#04FB43] transition-all duration-300 ease-in-out cursor-pointer"
          >
            Save for Draft
          </Button>
          <Button className="rounded-full px-4 py-1 text-[#04FB43] hover:bg-[#04FB43] hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
            Submit for Review
          </Button>
        </div>
      )}
    </div>
  );
};

export default MarketHeader;
