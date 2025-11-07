"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";
import { Plus, SlashIcon } from "lucide-react";
import Link from "next/link";

const IntegrationHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={cn("flex  bg-white items-center gap-3")}>
      <div className="flex justify-between items-center w-full pr-4">
        <div className="flex-shrink-0 px-4 pt-4 pb-0">
          <h1 className="text-base font-bold">{title}</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/user/free"
                    className="text-gray-500 hover:text-[#2100FF] transition-colors"
                  >
                    Users
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="text-gray-400 w-3 h-3" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#2100FF] font-medium">
                  {subtitle}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex items-center gap-1 cursor-pointer py-2 mt-4 px-4 rounded-full text-green-400 bg-black">
          <Plus className="w-5 h-5" />
          <span className="text-[0.9rem]">Add Integration</span>
        </div>
      </div>
    </div>
  );
};

export default IntegrationHeader;
