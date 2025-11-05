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
import { cn } from "@/lib/utils";
import { useDualSidebar } from "@/contexts/dual-sidebar-context";
import ActivityTimeline from "@/features/users/components/activity-timeline";

const Profile = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const { leftOpen } = useDualSidebar();

  return (
    <div className="px-4">
      <div
        className={cn(
          "flex fixed left-0 px-4 right-0 top-[4rem] bg-white items-center gap-3",
          leftOpen ? "xl:left-[16rem]" : "xl:left-[3rem]"
        )}
      >
        <div
          onClick={handleBack}
          className="p-1.5 rounded-full border border-gray-300 cursor-pointer bg-gray-50"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </div>

        <div className="flex-shrink-0 py-4">
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

      <div className="flex flex-col gap-4 xl:flex-row w-full">
        <div
          className={cn(
            "xl:overflow-y-hidden",
            leftOpen ? "xl:w-[38%]" : "xl:w-[28%]"
          )}
        >
          <div className="xl:overflow-auto  xl:max-h-[calc(90vh-1rem)] pb-8 pt-12">
            <UserProfile />
          </div>
        </div>

        <div
          className={cn(
            "xl:overflow-y-hidden",
            leftOpen ? "xl:w-[62%]" : "xl:w-[72%]"
          )}
        >
          <div className="overflow-auto xl:max-h-[calc(90vh-1rem)] pb-8">
            <SubscriptionManager />
            <ActivityTimeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
