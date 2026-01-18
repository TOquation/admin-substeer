"use client";

import Image from "next/image";
import React from "react";
import { mockUsers, StatusStyles, userProfileData } from "../data";
import { Mail, MoreVertical } from "lucide-react";
import { useSearchParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const user = mockUsers.find((a) => a.id === id);

  if (!user) {
    return <p className="text-center py-10">User not found.</p>;
  }

  return (
    <div className="py-8 flex flex-col gap-7 border-t-2 border-gray-200">
      {/* user image */}
      <div className={`flex flex-col items-center gap-2`}>
        <div className={`rounded-xl  bg-black/80`}>
          <Image
            src={user.imgUrl || "/images/user-img.svg"}
            alt={`${user.name}'s image`}
            height={100}
            width={100}
            className="rounded-md object-cover"
            unoptimized
          />
        </div>
        <h3 className="text-[15px] font-medium text-gray-800">{user.name}</h3>
        <p
          className={`text-[12px] ${StatusStyles(
            user.status
          )} rounded-md px-3 py-[2px] font-medium`}
        >
          {user.status}
        </p>
      </div>

      {/* top stats */}
      <div className="flex justify-between items-center gap-8 pt-2 pb-5 border-b border-gray-200">
        {userProfileData.map((profile) => (
          <div
            key={profile.title}
            className="flex items-center gap-2 min-w-[120px] justify-center"
          >
            <div className="bg-[#D9FBE5] p-2.5 rounded-md flex items-center justify-center">
              <profile.icon className="w-5 h-5 text-gray-700" />
            </div>
            <div className="flex flex-col leading-tight pr-2">
              <p className="text-[15px] font-semibold text-gray-800">
                {profile.title === "monthly spent"
                  ? `$${profile.amount}`
                  : user.subscriptions}
              </p>
              <p className="text-[13px] text-gray-500 capitalize">
                {profile.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* user info */}
      <div className="grid gap-3 text-sm text-gray-600 pr-2">
        {[
          { label: "Username", value: `@${user.name}` },
          { label: "Email", value: user.email },
          { label: "Role", value: user.role },
          { label: "TaxId", value: user.taxId },
          { label: "Phone", value: user.phone },
          { label: "Country", value: user.country },
        ].map((info) => (
          <div key={info.label} className="flex justify-between">
            <span className="font-normal text-gray-800/90">{info.label}:</span>
            <span className="text-gray-800/70">{info.value}</span>
          </div>
        ))}
      </div>

      {/* user cta */}
      <div className="flex items-center justify-center gap-6 w-full pt-3 pr-2">
        <button className="flex flex-1 items-center justify-center gap-2 bg-black text-[#00FF66] px-5 py-3 cursor-pointer rounded-full hover:bg-[#04FB43] hover:text-black transition">
          <Mail className="w-4 h-4" />
          <span className="text-sm font-medium">Mail User</span>
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="bg-black text-[#00FF66] cursor-pointer p-3 rounded-full hover:bg-[#04FB43] hover:text-black  transition">
              <MoreVertical className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem
              className="text-[#FE9B0E] focus:text-[#FE9B0E] cursor-pointer"
              onClick={() => {
                console.log("Suspend user:", user.id);
              }}
            >
              Suspend User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserProfile;
