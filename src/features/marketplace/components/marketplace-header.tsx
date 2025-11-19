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
import {
  Calendar,
  ChevronDown,
  Grid2X2,
  Medal,
  Plus,
  SlashIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ComponentType } from "react";

const MarketHeader = ({
  title,
  subtitle,
  Icon,
  breadcrums,
}: {
  title: string;
  subtitle: string;
  Icon?: ComponentType<{ className: string; strokeWidth: number }>;
  breadcrums?: string;
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
          <div className="flex items-center gap-4">
            {[
              { id: 1, title: "Category", icon: Grid2X2 },
              { id: 2, title: "Status", icon: Medal },
              { id: 3, title: "Date", icon: Calendar },
            ].map((filter) => {
              const Icon = filter.icon;
              return (
                <div
                  key={filter.id}
                  className="flex gap-2 cursor-pointer border border-gray-400 rounded-full items-center py-1.5 px-2.5 text-gray-500"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm text-gray-500">{filter.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              );
            })}
          </div>

          {/* cta */}
          <div
            onClick={handleAddNew}
            className="px-3 py-1.5 bg-black text-green-500 hover:text-black hover:bg-green-500 rounded-full flex gap-2 items-center cursor-pointer transition-all duration-300 ease-in-out"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Bundle</span>
          </div>
        </div>
      ) : Icon && title === "Bundle Details" ? (
        ""
      ) : (
        <div className=" flex items-center space-x-4">
          <Button
            variant="ghost"
            className="rounded-full px-4 py-1 hover:bg-green-400 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Save for Draft
          </Button>
          <Button className="rounded-full px-4 py-1 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
            Submit for Review
          </Button>
        </div>
      )}
    </div>
  );
};

export default MarketHeader;
