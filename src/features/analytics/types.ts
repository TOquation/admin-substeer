import { ComponentType } from "react";

export interface AnalyticCardProps {
  id: number;
  title: string;
  amount: number | string;
  amountIcon: ComponentType<{ className: string; strokeWidth: number }>;
  rate: string;
  duration: string;
}
