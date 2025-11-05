import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronDown, SlashIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { tableFilter } from "../data";

const UserHeader: React.FC<{ title: string; subtitle: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center pr-4">
        <div className="flex-shrink-0 px-4 py-4 bg-white">
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

        <div className="flex gap-4 items-center">
          {tableFilter.map((filter, index) => {
            return (
              <div
                key={filter.id}
                className={`flex justify-center items-center border border-gray-400 rounded-full px-2 py-1.5 gap-2 cursor-pointer ${
                  index === tableFilter.length - 1 ? "ml-6" : ""
                }`}
              >
                <span>
                  <filter.icon className="w-3 h-3" />
                </span>
                <span className="text-xs">{filter.title}</span>
                <span>
                  {filter.title === "Export" ? (
                    ""
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
