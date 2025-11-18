import { DollarSign } from "lucide-react";
import { AnalyticCardProps } from "./types";

export const analyticCard: AnalyticCardProps[] = [
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
    title: "Active Subscruption",
    amount: 12671,
    rate: "+1.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
  {
    id: 3,
    title: "Total Users",
    amount: 156,
    rate: "+5.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
  {
    id: 4,
    title: "Churn Rate",
    amount: " 8%",
    rate: "-6.01%",

    duration: "from last month",
    amountIcon: DollarSign,
  },
];
