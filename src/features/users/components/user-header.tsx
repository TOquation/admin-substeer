"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon, Share } from "lucide-react";
import Link from "next/link";
import UserFilters from "./user-filters";

interface UserHeaderProps {
  title: string;
  subtitle: string;
  onStatusChange: (
    status: "All" | "Active" | "Inactive" | "Pending" | "Suspended"
  ) => void;
  onSortChange: (sort: "Oldest" | "Newest") => void;
}

const UserHeader = ({
  title,
  subtitle,
  onStatusChange,
  onSortChange,
}: UserHeaderProps) => {
  return (
    <div>
      <div className="flex justify-between items-center pr-4">
        <div className="flex-shrink-0 px-4 py-4 bg-white">
          <h1 className="text-base font-medium">{title}</h1>
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

        <div className="flex gap-4 items-center">
          <UserFilters
            onStatusChange={onStatusChange}
            onSortChange={onSortChange}
          />

          <div className="flex justify-center items-center border border-gray-400 rounded-full px-2 py-1.5 gap-2 cursor-pointer ml-6">
            <span>
              <Share className="w-3 h-3" />
            </span>
            <span className="text-xs">Export</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
