"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

type Bundle = {
  id: number;
  name: string;
  category: string;
  subscribers: number;
  revenue: string;
  trend: number;
};

const bundles: Bundle[] = [
  {
    id: 1,
    name: "Influencer Suit",
    category: "Creativity",
    subscribers: 345,
    revenue: "$3,450",
    trend: 11.01,
  },
  {
    id: 2,
    name: "Influencer Suit",
    category: "Creativity",
    subscribers: 345,
    revenue: "$3,450",
    trend: 11.01,
  },
  {
    id: 3,
    name: "Influencer Suit",
    category: "Creativity",
    subscribers: 345,
    revenue: "$3,450",
    trend: 11.01,
  },
  {
    id: 4,
    name: "Influencer Suit",
    category: "Creativity",
    subscribers: 345,
    revenue: "$3,450",
    trend: 11.01,
  },
  {
    id: 5,
    name: "Influencer Suit",
    category: "Creativity",
    subscribers: 345,
    revenue: "$3,450",
    trend: 11.01,
  },
  {
    id: 6,
    name: "Influencer Suit",
    category: "Creativity",
    subscribers: 345,
    revenue: "$3,450",
    trend: 11.01,
  },
];

export default function BundleTable() {
  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* HEADER WITH TOP BORDER */}
          <thead>
            <tr className="border-t border-b border-gray-200 ">
              <th className="py-4 px-6 font-medium text-sm text-gray-900">
                Bundle Name
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-900 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Subscribers
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-900 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Revenue
              </th>
              <th className="py-4 px-6 font-medium text-sm text-gray-900 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-6 bg-gray-300"></div>
                Trend
              </th>
            </tr>
          </thead>

          {/* BODY WITH BORDERS */}
          <tbody>
            {bundles.map((item) => {
              const isPositive = item.trend > 0;

              return (
                <tr key={item.id} className="border border-gray-200">
                  <td className="py-3 px-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium text-gray-900 text-sm">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.category}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-6 text-gray-900 text-base">
                    {item.subscribers}
                  </td>

                  <td className="py-4 px-6 text-gray-900 text-base">
                    {item.revenue}
                  </td>

                  <td className="py-4 px-6">
                    <div
                      className={`flex items-center gap-1 font-normal text-base ${
                        isPositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isPositive ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <TrendingDown className="w-5 h-5" />
                      )}
                      {isPositive ? "+" : ""}
                      {item.trend}%
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
