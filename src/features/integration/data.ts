// integration data card

import { IntegrationCardProps } from "./types";

export const intCard: IntegrationCardProps[] = [
  {
    id: 1,
    bgColor: "bg-green-50",
    title: "Active Integration",
    titleColor: "text-green-600",
    subtitle: "4/6",
    submain: 4,
    subscript: 6,
  },
  {
    id: 2,
    bgColor: "bg-red-50",
    title: "Failed",
    titleColor: "text-red-600",
    subtitle: 1,
  },
  {
    id: 3,
    bgColor: "bg-indigo-50",
    title: "Avg Uptime",
    titleColor: "text-indigo-600",
    subtitle: "8%",
  },
  {
    id: 4,
    bgColor: "bg-gray-50",
    title: "Total Api Calls",
    titleColor: "text-gray-800",
    subtitle: 61864,
  },
];
