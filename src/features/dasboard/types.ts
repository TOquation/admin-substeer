import { ComponentType } from "react";

export interface DashboardCardProps {
  id: number;
  title: string;
  amount: number;
  amountIcon: ComponentType<{ className: string; strokeWidth: number }>;
  rate: string;

  duration: string;
}
