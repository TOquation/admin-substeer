"use client";

import { Button } from "@/components/ui/button";
import MarketHeader from "@/features/marketplace/components/marketplace-header";
import PerformanceCard from "@/features/marketplace/components/performance-card";
import { SalesGrowth } from "@/features/marketplace/components/sales-growth-chart";
import { marketCard, marketStatus } from "@/features/marketplace/data";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Home,
  Mail,
  MoreVertical,
  Wallet,
  WalletMinimal,
} from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { ComponentType } from "react";

interface services {
  id: number;
  title: string;
  subtitle: string;
}

interface ProductProps {
  id: number;
  label: string;
  url?: string;
  services: services[];
}

interface ActivityLogProps {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  status: "Edited" | "Published" | "Done";
}

const activityLog: ActivityLogProps[] = [
  {
    id: 1,
    title: "Edited",
    subtitle: "Edited by Admin A on Oct 10",
    duration: "12 min ago",
    status: "Edited",
  },
  {
    id: 2,
    title: "Published",
    subtitle: "Published to Marketplace — Oct 8",
    duration: "12 min ago",
    status: "Published",
  },
  {
    id: 3,
    title: "Published",
    subtitle: "Published to Marketplace — Oct 8",
    duration: "12 min ago",
    status: "Done",
  },
];

const products: ProductProps[] = [
  {
    id: 1,
    label: "Notion",
    url: "https://cdn.simpleicons.org/Notion",
    services: [
      {
        id: 1,
        title: "plan:",
        subtitle: "Pro Plan",
      },
      { id: 2, title: "price:", subtitle: "$8/mo" },
      { id: 3, title: "Note:", subtitle: "Workspace + Docs" },
    ],
  },
  {
    id: 2,
    label: "Slack",
    url: "https://cdn.simpleicons.org/Slack",
    services: [
      { id: 1, title: "plan:", subtitle: "Pro Plan" },
      { id: 2, title: "price:", subtitle: "$8/mo" },
      { id: 3, title: "Note:", subtitle: "Collaboration" },
    ],
  },
  {
    id: 3,
    label: "Google space",
    url: "https://cdn.simpleicons.org/Slack",
    services: [
      {
        id: 1,
        title: "plan:",
        subtitle: "Pro Plan",
      },
      { id: 2, title: "price:", subtitle: "$8/mo" },
      { id: 3, title: "Note:", subtitle: "Email, Drive, Docs" },
    ],
  },
];

const logStatusColor = (color: string) => {
  switch (color) {
    case "Editehd":
      return "bg-red-400";
    case "Published":
      return "bg-indigo-400";
    default:
      return "bg-green-400";
  }
};

const BundleDetail = () => {
  const searchParams = useSearchParams();
  const categoryId = Number(searchParams.get("id"));
  const selectedItems = marketCard.find((market) => market.id === categoryId);
  return (
    <div className="p-4 h-[calc(100vh-4.5rem)] flex flex-col overflow-hidden">
      <div className="pb-3">
        <MarketHeader
          title="Bundle Details"
          subtitle=""
          Icon={ArrowLeft}
          breadcrums={selectedItems?.category || ""}
        />
      </div>

      <div className="overflow-y-auto flex-1 space-y-6">
        {/* banner */}
        <div className="relative h-30">
          <div
            style={{
              backgroundImage: `url(${selectedItems?.bannerUrl})`,
            }}
            className="bg-cover bg-no-repeat w-full bg-center z-10 h-full absolute inset-0 rounded-lg"
          />
          {/* Overlay gradient + subtle blur */}
          <div className="absolute inset-0 bg-gradient-to-t z-20 from-white/60 via-white/40 to-transparent" />

          {/* banner content */}
          <div className="absolute  bottom-6 px-6 w-full flex items-center justify-between z-40">
            {/* left-side */}
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <span className="inline-block text-xs px-2 py-0.5 bg-gray-200/80 rounded-md font-fredoka text-gray-700 font-medium">
                  {selectedItems?.title}
                </span>
                {/* Status */}
                <div className="flex items-center gap-1">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      marketStatus(selectedItems?.status || "").bg
                    }`}
                  ></div>
                  <span
                    className={`text-xs font-medium capitalize font-fredoka ${
                      marketStatus(selectedItems?.status || "").text
                    }`}
                  >
                    {selectedItems?.status}
                  </span>
                </div>
              </div>
              <h4 className="text-sm font-semibold leading-tight font-inter">
                {selectedItems?.category}
              </h4>
            </div>

            {/* right-side */}
            <div className="flex items-center  gap-6">
              <button className="flex  items-center justify-center gap-2 bg-black text-[#00FF66] px-4 py-2.5 cursor-pointer rounded-full hover:bg-gray-900 transition">
                <Mail className="w-4 h-4" />
                <span className="text-xs font-medium">Edit</span>
              </button>

              <button className="bg-black text-[#00FF66] cursor-pointer p-2.5 rounded-full hover:bg-gray-900 transition">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 space-y-6">
          {/* description + price */}
          <section className="flex justify-between">
            <h3 className="flex-1/2">
              <span className="block text-sm text-gray-500 font-medium mb-0.5 font-fredoka">
                Price:
              </span>
              <span className="text-sm font-semibold text-gray-800 font-inter">
                {selectedItems?.amount}
              </span>
            </h3>
            <div className="">
              <h3 className="text-sm text-gray-500 font-medium mb-0.5 font-fredoka">
                Discription:
              </h3>
              <p className="text-sm font-normal text-gray-800 font-fredoka">
                Veritatis quos consequatur molestiae rerum. Et ut iusto commodi.
                Explicabo et aut nobis minima quam laborum et sint. Itaque
                soluta mollitia velit deleniti soluta.
              </p>
            </div>
          </section>

          {/* product / services & activity log  */}
          <section className="">
            <Separator className="h-0.5 bg-gray-400" />
            <div className="my-4 flex gap-6">
              <div className="w-[60%]">
                <h2 className="font-fredoka text-lg mb-4">
                  Product / Services
                </h2>

                <div className="flex flex-col gap-4 w-full overflow-y-auto max-h-56">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="grid grid-cols-6 items-center text-black pb-2 gap-4"
                    >
                      {/* Column 1: Product icon + name */}
                      <div className="flex  flex-col gap-1 col-span-2">
                        <Image
                          src={product.url || "/marketplace.jpg"}
                          alt={product.label}
                          width={16}
                          height={16}
                          unoptimized
                          className="rounded-sm"
                        />
                        <h2 className="text-sm">{product.label}</h2>
                      </div>

                      {/* Column 2: Plan */}
                      <div className="flex flex-col text-sm">
                        <h3>plan:</h3>
                        <p className=" ">{product.services[0].subtitle}</p>
                      </div>

                      {/* Column 3: Price */}
                      <div className="flex flex-col  text-sm">
                        <h3>price:</h3>
                        <p className="">{product.services[1].subtitle}</p>
                      </div>

                      {/* Column 4: Note */}
                      <div className="flex col-span-2 flex-col text-sm">
                        <h3>Note:</h3>
                        <p className="">{product.services[2].subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className=" w-[1.4px] bg-gray-400 self-stretch" />

              <div className="flex-1">
                <h2 className="font-fredoka text-lg mb-4">Activity log</h2>
                <div className="flex flex-col gap-4 overflow-y-auto max-h-56">
                  {/* timeline */}
                  {activityLog.map((activity) => {
                    return (
                      <div key={activity.id} className="flex flex-col gap-1">
                        <div className="flex items-center justify-between w-full text-sm">
                          {/* status indicator + title*/}
                          <div className="flex gap-1 items-center">
                            <div
                              className={`h-2 w-2 rounded-full ${logStatusColor(
                                activity.status
                              )}`}
                            ></div>

                            <h3 className="">{activity.title}</h3>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {activity.duration}
                          </p>
                        </div>

                        <div className="pl-[3.5px] flex gap-2">
                          <div className=" h-6 w-[1px] bg-gray-400"></div>
                          <h3 className="text-xs">{activity.subtitle}</h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Separator className="h-0.5 bg-gray-400" />
          </section>

          <section>
            <PerformanceCard />
            <SalesGrowth />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BundleDetail;
