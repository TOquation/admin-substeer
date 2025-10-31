import { DollarSign, Home, TrendingDown, TrendingUp } from "lucide-react";
import { DashboardCardProps } from "./types";

export const dashboardCard: DashboardCardProps[] = [
  {
    id: 1,
    title: "Revenue",
    amount: 7265,
    rate: "+3%",

    duration: "4 months",
    amountIcon: DollarSign,
  },
  {
    id: 2,
    title: "Total Users",
    amount: 12671,
    rate: "+3%",

    duration: "4 months",
    amountIcon: DollarSign,
  },
  {
    id: 3,
    title: "New Users",
    amount: 156,
    rate: "+3%",

    duration: "4 months",
    amountIcon: DollarSign,
  },
  {
    id: 4,
    title: "Active Bundles",
    amount: 318,
    rate: "-3%",

    duration: "4 months",
    amountIcon: DollarSign,
  },
];
