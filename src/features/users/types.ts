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

//timeline user activity
export interface ActivityTimelineProps {
  bgColor: string;
  title: string;
  subtitleTop: string;
  subtitleBottom: string;
  duration: string;
  src?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Inactive" | "Pending" | "Suspended";
  subscriptions: number;
  joinedDate: string;
  lastActive: string;
  imgUrl?: string;
  role?: string;
  country?: string;
  taxId?: string;
  phone?: string;
}
