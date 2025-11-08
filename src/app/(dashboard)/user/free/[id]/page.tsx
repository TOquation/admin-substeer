"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowLeft, SlashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import UserProfile from "@/features/users/components/user-profile";
import SubscriptionManager from "@/features/users/components/subscription";

const Profile = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="px-4 h-[calc(100vh-5rem)] w-full flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 py-4 w-full">
        <div
          onClick={handleBack}
          className="p-1.5 rounded-full border border-gray-300 cursor-pointer bg-gray-50"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </div>

        <div className="flex-shrink-0">
          <h1 className="text-base font-bold">Free Users</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="#"
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
                <BreadcrumbLink asChild>
                  <Link
                    href="/user/free"
                    className="text-gray-500 hover:text-[#2100FF] transition-colors"
                  >
                    Free
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <SlashIcon className="text-gray-400 w-3 h-3" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/user/profile"
                    className="text-[#2100FF] font-medium"
                  >
                    Profile
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className=" flex-1 flex overflow-y-auto flex-col xl:flex-row gap-4 xl:gap-6 xl:overflow-hidden pb-8 xl:pb-0">
        <div className="xl:overflow-y-auto xl:shrink-0">
          <UserProfile />
        </div>

        <div className="xl:overflow-y-auto w-full">
          <SubscriptionManager />
        </div>
      </div>
    </div>
  );
};

export default Profile;
