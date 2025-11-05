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
