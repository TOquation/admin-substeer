import Image from "next/image";
import React from "react";

interface AdminTableProps {
  id: number;
  imgSrc: string;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Suspended";
}

const adminDataTable: AdminTableProps[] = [
  {
    id: 93890,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "Director",
    email: "VonRueden@gmail.com",
    status: "Active",
  },
  {
    id: 93891,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "CEO",
    email: "VonRueden@gmail.com",
    status: "Suspended",
  },
  {
    id: 93892,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "4 Permission",
    email: "VonRueden@gmail.com",
    status: "Suspended",
  },
  {
    id: 93893,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "IT",
    email: "VonRueden@gmail.com",
    status: "Suspended",
  },
  {
    id: 93894,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "Support",
    email: "VonRueden@gmail.com",
    status: "Active",
  },
  {
    id: 93895,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "Support",
    email: "VonRueden@gmail.com",
    status: "Suspended",
  },
  {
    id: 93896,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "Marketing",
    email: "VonRueden@gmail.com",
    status: "Suspended",
  },
  {
    id: 93897,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "Marketing",
    email: "VonRueden@gmail.com",
    status: "Active",
  },
  {
    id: 93898,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "CEO",
    email: "VonRueden@gmail.com",
    status: "Active",
  },
  {
    id: 93899,
    imgSrc: "/images/activity-2.png",
    name: "Nadine Bradtke",
    role: "Director",
    email: "VonRueden@gmail.com",
    status: "Suspended",
  },
];

const StatusBadge = ({ status }: { status: "Active" | "Suspended" }) => {
  const isActive = status === "Active";
  return (
    <div className="flex items-center gap-2">
      <span
        className={`h-2.5 w-2.5 rounded-full ${
          isActive ? "bg-green-600" : "bg-orange-400"
        }`}
      />
      <span className={isActive ? "text-green-600" : "text-orange-400"}>
        {status === "Suspended" ? "Susppended" : status}
      </span>
    </div>
  );
};

const AllAdminTable = () => {
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
                key={admin.id}
                className="border-b border-gray-200 bg-zinc-50 !mb-24 cursor-pointer transition-colors"
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
                    <span className="text-sm whitespace-nowrap  text-gray-700">
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
                  <StatusBadge status={admin.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdminTable;
