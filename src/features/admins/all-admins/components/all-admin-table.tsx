import Image from "next/image";
import React, { ComponentType, useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronLeft, Lock, OctagonAlert, OctagonX, X } from "lucide-react";
import { PermissionList } from "./permissions";
import { AdminTableProps } from "../../types";
import { adminDataTable } from "../../data";

// interface AdminTableProps {
//   id: number;
//   imgSrc: string;
//   name: string;
//   role: string;
//   email: string;
//   status: "Active" | "Suspended";

//   // OPTIONAL FIELDS ADDED BASED ON YOUR UI
//   phoneNumber?: string;
//   username?: string;
//   employeeId?: string;
//   region?: string;
//   departments?: string[];
//   location?: string;
//   timeZone?: string;
//   language?: string;
// }

interface AdminCtaProps {
  id: number;
  icon: ComponentType<{ className: string }>;
  title: string;
  bg: string;
}

const adminCta: AdminCtaProps[] = [
  {
    id: 1,
    icon: OctagonAlert,
    title: "Blacklist User",
    bg: "bg-neutral-800",
  },
  {
    id: 2,
    icon: OctagonAlert,
    title: "Suspend Account",
    bg: "bg-orange-400",
  },
  {
    id: 3,
    icon: OctagonX,
    title: "Remove User",
    bg: "bg-red-700",
  },
];

// const adminDataTable: AdminTableProps[] = [
//   {
//     id: 93890,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "Director",
//     email: "VonRueden@gmail.com",
//     status: "Active",

//     phoneNumber: "+234 7061548319",
//     username: "nadine",
//     employeeId: "Colab12345",
//     region: "Nigeria Lagos",
//     departments: ["Visual Designer", "Interaction Designer"],
//     location: "Africa/Lagos",
//     timeZone: "11:50PM GMT+4",
//     language: "English",
//   },
//   {
//     id: 93891,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "CEO",
//     email: "VonRueden@gmail.com",
//     status: "Suspended",
//   },
//   {
//     id: 93892,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "4 Permission",
//     email: "VonRueden@gmail.com",
//     status: "Suspended",
//   },
//   {
//     id: 93893,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "IT",
//     email: "VonRueden@gmail.com",
//     status: "Suspended",
//   },
//   {
//     id: 93894,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "Support",
//     email: "VonRueden@gmail.com",
//     status: "Active",
//   },
//   {
//     id: 93895,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "Support",
//     email: "VonRueden@gmail.com",
//     status: "Suspended",
//   },
//   {
//     id: 93896,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "Marketing",
//     email: "VonRueden@gmail.com",
//     status: "Suspended",
//   },
//   {
//     id: 93897,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "Marketing",
//     email: "VonRueden@gmail.com",
//     status: "Active",
//   },
//   {
//     id: 93898,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "CEO",
//     email: "VonRueden@gmail.com",
//     status: "Active",
//   },
//   {
//     id: 93899,
//     imgSrc: "/images/activity-2.png",
//     name: "Nadine Bradtke",
//     role: "Director",
//     email: "VonRueden@gmail.com",
//     status: "Suspended",
//   },
// ];

const StatusBadge = ({
  status,
  className,
  size,
}: {
  status: "Active" | "Suspended";
  className: string;
  size: string;
}) => {
  const isActive = status === "Active";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        className={`${size} rounded-full ${
          isActive ? "bg-green-600" : "bg-orange-400"
        }`}
      />
      <span className={isActive ? "text-green-600" : "text-orange-400"}>
        {status}
      </span>
    </div>
  );
};

const AllAdminTable = () => {
  const [selectedAdmin, setSelectedAdmin] = useState<AdminTableProps | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [screen, setScreen] = useState<"admin" | "permission">("admin");

  const handleAdminInfo = (adminInfo: AdminTableProps) => {
    setSelectedAdmin(adminInfo);
    setIsOpen(true);
  };

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-100 ">
              <th className="py-4 whitespace-nowrap pr-4 text-left text-sm font-medium text-neutral-400">
                S/N
              </th>
              <th className="py-4 whitespace-nowrap px-4 text-left text-sm font-medium text-neutral-400">
                NAME
              </th>
              <th className="py-4 whitespace-nowrap lg:px-4 pl-6 text-left text-sm font-medium text-neutral-400">
                ROLE / PERMISSION
              </th>
              <th className="py-4 whitespace-nowrap px-4 text-left text-sm font-medium text-neutral-400">
                EMAIL
              </th>
              <th className="py-4 whitespace-nowrap px-4 text-left text-sm font-medium text-neutral-400"></th>
            </tr>
          </thead>
          <tbody>
            {adminDataTable.map((admin) => (
              <tr
                onClick={() => handleAdminInfo(admin)}
                key={admin.id}
                className="border-b border-gray-200 bg-zinc-50 cursor-pointer transition-colors"
              >
                <td className="py-4 pr-4 pl-2 text-sm text-gray-500">
                  #{admin.id}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={admin.imgSrc}
                      alt={`${admin.name}'s avatar`}
                      height={24}
                      width={24}
                      className="rounded-lg object-cover"
                    />
                    <span className="text-sm whitespace-nowrap text-gray-700">
                      {admin.name}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm whitespace-nowrap lg:px-4 pl-6 text-gray-500">
                  {admin.role}
                </td>
                <td className="py-4 px-4 text-sm whitespace-nowrap text-gray-500">
                  {admin.email}
                </td>
                <td className="py-4 px-4 text-sm whitespace-nowrap">
                  <StatusBadge
                    className=""
                    size="h-2.5 w-2.5"
                    status={admin.status}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          onPointerDownOutside={(e) => e.preventDefault()}
          className="sm:max-w-2xl font-fredoka  bg-zinc-50 [&>button]:hidden"
        >
          <SheetHeader className="pb-0">
            <SheetTitle className="flex items-center mb-2 justify-between">
              {screen === "admin" ? (
                <span className="text-neutral-800 text-sm font-medium">
                  #{selectedAdmin?.id}
                </span>
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => setScreen("admin")}
                    className="border-[1.5px] border-neutral-800 p-1 cursor-pointer rounded-full"
                  >
                    <ChevronLeft className="w-4 h-4  border-neutral-800 " />
                  </div>
                  <span className="font-medium">Permission</span>
                </div>
              )}

              {screen === "admin" && (
                <span className="text-neutral-800 text-sm font-medium">
                  <X
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer w-7 h-7 rounded-sm text-neutral-800 focus:border-[1.5px] p-1 border-neutral-800 duration-300 ease-in-out"
                  />
                </span>
              )}
            </SheetTitle>

            <div className="flex gap-2 p-4  items-center w-full bg-green-50 rounded-lg justify-between">
              <div className="flex gap-2 items-center">
                <div className="relative">
                  <Image
                    src={selectedAdmin?.imgSrc || ""}
                    alt="admin image"
                    width={52}
                    height={52}
                    className="rounded-full object-cover"
                  />

                  <Image
                    src={
                      selectedAdmin?.status === "Active"
                        ? "/images/active.svg"
                        : "/images/suspend.svg"
                    }
                    alt="status icon"
                    width={28}
                    height={28}
                    className="absolute -bottom-1 -right-1.5"
                  />
                </div>

                <div>
                  <h3 className="text-cyan-600 text-base font-semibold">
                    {selectedAdmin?.name}
                  </h3>
                  <p className="text-sm text-neutral-700">
                    {selectedAdmin?.role}
                  </p>
                </div>
              </div>

              <div>
                <StatusBadge
                  size="h-2 w-2"
                  className="text-sm font-medium"
                  status={selectedAdmin?.status || "Active"}
                />
              </div>
            </div>
          </SheetHeader>
          {screen === "admin" && (
            <div className="overflow-y-auto">
              <div>
                <h1 className="text-sm font-medium mb-3 ml-8 text-neutral-500">
                  Contact
                </h1>
                {/* MAIN 2-COLUMN GRID */}
                <div className="grid grid-cols-2 gap-10 bg-white rounded-lg pl-2 p-4 pr-0 mx-4">
                  {/* LEFT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Email */}
                    <div className="grid grid-cols-[80px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium">Email</p>
                      <span className="text-neutral-500 ">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.email}
                      </p>
                    </div>

                    {/* Username */}
                    <div className="grid grid-cols-[80px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium ">Username</p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.name}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Phone Number */}
                    <div className="grid grid-cols-[100px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium">
                        Phone Number
                      </p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.phoneNumber}
                      </p>
                    </div>

                    {/* Employee ID */}
                    <div className="grid grid-cols-[100px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium">
                        Employee ID
                      </p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.employeeId}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-sm font-medium my-4 ml-8 text-neutral-500">
                  Work Location
                </h1>
                <div className="grid grid-cols-2 gap-10 bg-white rounded-lg pl-2 p-4 pr-0 mx-4">
                  {/* LEFT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Region */}
                    <div className="grid grid-cols-[80px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium ">Region</p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.region}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Departments */}
                    <div className="grid grid-cols-[100px_16px_1fr] items-start text-sm">
                      <p className="text-neutral-500 font-medium ">
                        Departments
                      </p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.departments?.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-sm font-medium mb-3 ml-8 text-neutral-500">
                  Geo-Location
                </h1>
                <div className="grid grid-cols-2 gap-10 bg-white rounded-lg pl-2 p-4 pr-0 mx-4">
                  {/* LEFT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Location */}
                    <div className="grid grid-cols-[80px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium ">Location</p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.region}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Time Zone */}
                    <div className="grid grid-cols-[100px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium ">Time Zone</p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700 font-normal">
                        {selectedAdmin?.timeZone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-sm font-medium mb-3 ml-8 text-neutral-500">
                  Additional Information
                </h1>
                <div className="grid grid-cols-2 gap-10 bg-white rounded-lg pl-2 p-4 pr-0 mx-4">
                  {/* LEFT COLUMN */}
                  <div className="flex flex-col gap-4">
                    {/* Language */}
                    <div className="grid grid-cols-[80px_16px_1fr] items-center text-sm">
                      <p className="text-neutral-500 font-medium ">Language</p>
                      <span className="text-neutral-500">:</span>
                      <p className="text-neutral-700">
                        {selectedAdmin?.language}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pb-24 mt-40">
                <div className="pl-6">
                  <h1 className="text-neutral-500 text-sm font-medium mb-2 ml-2">
                    Permission
                  </h1>
                  <Button
                    onClick={() => setScreen("permission")}
                    variant="ghost"
                    className="cursor-pointer  ring-0 focus:ring-0 border-cyan-600 border-[2px] focus:outline-none"
                  >
                    <Lock className="w-4 h-4 text-cyan-600" />
                    <span className="text-xs text-cyan-600">
                      View and Edit Permission
                    </span>
                  </Button>
                </div>

                <div className="flex gap-4 justify-end px-4 mt-12">
                  {adminCta.map((cta) => {
                    return (
                      <Button
                        key={cta.id}
                        className={`flex gap-3 cursor-pointer items-center text-zinc-100  ${cta.bg}`}
                      >
                        {" "}
                        <cta.icon className="w-4 h-4" />
                        <span className="text-xs text-zinc-100">
                          {cta.title}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {screen === "permission" && (
            <div className="px-6 overflow-y-auto">
              <PermissionList />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AllAdminTable;
