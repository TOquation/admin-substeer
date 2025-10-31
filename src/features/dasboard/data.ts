import { DollarSign, Home, TrendingDown, TrendingUp } from "lucide-react";
import { DashboardCardProps } from "./types";

export const dashboardCard: DashboardCardProps[] = [
  {
    id: 1,
    title: "Revenue",
    amount: 7265,
    rate: "+4.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
  {
    id: 2,
    title: "Total Users",
    amount: 12671,
    rate: "+1.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
  {
    id: 3,
    title: "New Users",
    amount: 156,
    rate: "+5.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
  {
    id: 4,
    title: "Active Bundles",
    amount: 318,
    rate: "-6.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
];
