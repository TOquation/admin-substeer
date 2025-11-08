import { Factory } from "lucide-react";
import { ComponentType } from "react";
import ActivityTimeline from "./activity-timeline";
import Image from "next/image";

export default function SubscriptionManager() {
  interface SubscriptionProps {
    id: number;
    name: string;
    plan: string;
    src: string;
    logoColor: string;
    amount: number;
    nextPayment: string;
    usage: number;
    usageColor: string;
  }

  const subscriptions: SubscriptionProps[] = [
    {
      id: 1,
      name: "Netflix",
      plan: "Premium family",
      src: "https://cdn.simpleicons.org/netflix",
      logoColor: "bg-red-600",
      amount: 345,
      nextPayment: "Mar. 12, 2023",
      usage: 92,
      usageColor: "bg-green-500",
    },
    {
      id: 2,
      name: "Netflix",
      plan: "Free plan",
      src: "https://cdn.simpleicons.org/netflix",
      logoColor: "bg-red-600",
      amount: 345,
      nextPayment: "Mar. 12, 2023",
      usage: 18,
      usageColor: "bg-red-500",
    },
    {
      id: 3,
      name: "Libra",
      plan: "Enterprise",
      src: "https://cdn.simpleicons.org/Netflix",
      logoColor: "bg-teal-600",
      amount: 345,
      nextPayment: "Mar. 12, 2023",
      usage: 62,
      usageColor: "bg-purple-500",
    },
    {
      id: 4,
      name: "Libra",
      plan: "Premium starter",
      src: "https://cdn.simpleicons.org/nike",
      logoColor: "bg-teal-600",
      amount: 345,
      nextPayment: "Paused",
      usage: 8,
      usageColor: "bg-red-500",
    },
    {
      id: 5,
      name: "Nike",
      plan: "Free",
      src: "https://cdn.simpleicons.org/nike",
      logoColor: "bg-black",
      amount: 345,
      nextPayment: "Mar. 12, 2023",
      usage: 92,
      usageColor: "bg-green-500",
    },
    {
      id: 6,
      name: "Nike",
      plan: "Premium",
      src: "https://cdn.simpleicons.org/nike",
      logoColor: "bg-black",
      amount: 345,
      nextPayment: "Mar. 12, 2023",
      usage: 88,
      usageColor: "bg-green-500",
    },
  ];

  return (
    <div className=" w-full xl:pb-8">
      <div className="flex flex-col space-y-12 pr-4">
        <div className="bg-white overflow-hidden">
          <div className="p-4 border-t-2 border-gray-200">
            <h1 className="text-[1.2rem] font-semibold text-gray-900">
              Subscriptions
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-3 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                    Accounts
                  </th>
                  <th className="text-left py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                    Amount
                  </th>
                  <th className="text-left py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                    Next payment
                  </th>
                  <th className="text-left py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
                    USAGE
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub, index) => (
                  <tr
                    key={sub.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index === subscriptions.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="py-3 px-3 sm:py-4 sm:px-4">
                      <div className="flex items-center gap-2 sm:gap-3 ">
                        <div className="w-8 h-8  rounded flex items-center justify-center flex-shrink-0">
                          <Image
                            height={32}
                            width={32}
                            alt="logo"
                            src={`${sub.src}`}
                            className="h-6 w-6 sm:h-7 sm:w-7 text-red-600"
                            unoptimized
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">
                            {sub.name}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                            {sub.plan}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base whitespace-nowrap">
                        ${sub.amount}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                        per monthly
                      </div>
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4">
                      <div
                        className={`text-xs sm:text-sm whitespace-nowrap text-gray-600}`}
                      >
                        {sub.nextPayment}
                      </div>
                    </td>
                    <td className="py-3 px-2 sm:py-4 sm:px-4">
                      <div className="flex flex-col gap-1 sm:gap-3">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                          {sub.usage}%
                        </div>
                        <div className="w-20 sm:w-24 lg:w-32">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${sub.usageColor} rounded-full transition-all`}
                              style={{ width: `${sub.usage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ActivityTimeline />
      </div>
    </div>
  );
}
