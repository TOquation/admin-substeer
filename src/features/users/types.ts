import { ComponentType } from "react";

export interface TableFilterProps {
  id: number;
  icon: ComponentType<{ className: string }>;
  title: string;
}

// user-profile
export interface UserProfileProps {
  icon: ComponentType<{ className: string }>;
  amount: number;
  title: string;
}
