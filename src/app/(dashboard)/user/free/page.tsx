import React from "react";
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import UsersDataTable from "@/features/users/components/user-data-table";

const Frees = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Fixed header section - non-scrollable */}
      <div className="flex-shrink-0 px-4 py-4  bg-white">
        <h1 className="text-base font-bold mb-2">Free Users</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/users">Users</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Free</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Scrollable table section */}
      <div className="flex-1 overflow-auto p-4 pt-0 ">
        <UsersDataTable />
      </div>
    </div>
  );
};

export default Frees;
