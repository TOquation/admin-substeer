"use client";

import Image from "next/image";
import React from "react";
import { userProfileData } from "../data";
import { Mail, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDualSidebar } from "@/contexts/dual-sidebar-context";

const UserProfile = () => {
  const { leftOpen } = useDualSidebar();
  return (
    <div className=" py-8 flex flex-col gap-7 border-t-2 border-gray-200">
      {/* user image */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/images/user-img.svg"
          alt="user image"
          height={100}
          width={100}
          className="rounded-md object-cover"
        />
        <h3 className="text-[15px] font-medium text-gray-800">Danya Garcia</h3>
        <p className="text-[12px] text-green-700 bg-green-100 rounded-md px-3 py-[2px] font-medium">
          Active
        </p>
      </div>

      {/* top stats */}
      <div className="flex justify-between items-center gap-8 pt-2 pb-5 border-b border-gray-200">
        {userProfileData.map((profile) => (
          <div
            key={profile.title}
            className="flex items-center gap-2 min-w-[120px] justify-center"
          >
            <div
              className={cn(
                "bg-[#D9FBE5] p-2.5  rounded-md flex items-center justify-center",
                leftOpen ? "xl:p-1" : "xl:p-3"
              )}
            >
              <profile.icon className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex flex-col leading-tight pr-2">
              <p className="text-[15px] font-semibold text-gray-800">
                {profile.title === "monthly spent"
                  ? `$${profile.amount}`
                  : profile.amount}
              </p>
              <p
                className={cn(
                  "text-[13px] text-gray-500 capitalize",
                  leftOpen
                    ? "whitespace-break-spaces text-xs"
                    : "whitespace-nowrap"
                )}
              >
                {profile.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* user info */}
      <div className="grid gap-3 text-sm text-gray-600 pr-2">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Username:</span>
          <span className="text-gray-800">@Dnaya</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-gray-800">Ddaya21@gmail.com</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Role:</span>
          <span className="text-gray-800">Designer</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Tax ID:</span>
          <span className="text-gray-800">7727563778</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Phone:</span>
          <span className="text-gray-800">+7 (916) 162–0600</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Country:</span>
          <span className="text-gray-800">Moscow</span>
        </div>
      </div>

      {/* user cta */}
      <div className="flex items-center justify-center gap-6 w-full pt-3 pr-2">
        {/* Mail Button */}
        <button className="flex flex-1 items-center justify-center gap-2 bg-black text-[#00FF66] px-5 py-3 rounded-full hover:bg-gray-900 transition">
          <Mail className="w-4 h-4" />
          <span className="text-sm font-medium">Mail User</span>
        </button>

        {/* Dots Button */}
        <button className="bg-black text-[#00FF66] p-3 rounded-full hover:bg-gray-900 transition">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
