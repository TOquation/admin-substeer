// integration data card

import Integration from "@/app/(dashboard)/integration/page";
import { IntegralProps, IntegrationCardProps, TabsProps } from "./types";
import { TabsContentProps } from "@radix-ui/react-tabs";

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

// Integration table data
export const integrations: IntegralProps[] = [
  {
    id: 1,
    service: "Stripe",
    icon: "https://cdn.simpleicons.org/slack",
    iconBg: "bg-blue-600",
    type: "Payment",
    status: "Success",
    latency: "250ms",
    errors: 0,
    uptime: "99.9%",
  },
  {
    id: 2,
    service: "Slack",
    icon: "https://cdn.simpleicons.org/slack",
    iconBg: "",
    type: "Bank link",
    status: "Success",
    latency: "310ms",
    errors: 3,
    uptime: "99.9%",
  },
  {
    id: 3,
    service: "Google",
    icon: "https://cdn.simpleicons.org/google",
    iconBg: "",
    type: "Subscription",
    status: "Failed",
    latency: "420ms",
    errors: 45,
    uptime: "99.9%",
  },
  {
    id: 4,
    service: "AWS",
    icon: "https://cdn.simpleicons.org/google",
    iconBg: "bg-gray-900",
    type: "AI Assist",
    status: "Warning",
    latency: "200",
    errors: 10,
    uptime: "99.9%",
  },
  {
    id: 5,
    service: "AWS",
    icon: "https://cdn.simpleicons.org/google",
    iconBg: "bg-gray-900",
    type: "AI Assist",
    status: "Warning",
    latency: "200",
    errors: 10,
    uptime: "99.9%",
  },
  {
    id: 6,
    service: "AWS",
    icon: "https://cdn.simpleicons.org/slack",
    iconBg: "bg-gray-900",
    type: "AI Assist",
    status: "Warning",
    latency: "200",
    errors: 10,
    uptime: "99.9%",
  },
];

//tabs data

export const tabsData: TabsProps[] = [
  {
    id: 1,
    title: "overview",
  },
  {
    id: 2,
    title: "credentials",
  },
  {
    id: 3,
    title: "performance",
  },
  {
    id: 4,
    title: "logs",
  },
  {
    id: 5,
    title: "settings",
  },
];
