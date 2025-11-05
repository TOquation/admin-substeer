import {
  Calendar1,
  Home,
  Medal,
  Share,
  Wallet,
  WalletMinimal,
} from "lucide-react";
import {
  ActivityTimelineProps,
  TableFilterProps,
  UserProfileProps,
} from "./types";

export const tableFilter: TableFilterProps[] = [
  {
    id: 1,
    icon: Medal,
    title: "Status",
  },
  {
    id: 2,
    icon: Calendar1,
    title: "Date",
  },
  {
    id: 3,
    icon: Share,
    title: "Export",
  },
];

// user profile data

export const userProfileData: UserProfileProps[] = [
  {
    icon: WalletMinimal,
    amount: 12,
    title: "subscriptions",
  },
  {
    icon: Wallet,
    amount: 345,
    title: "monthly spent",
  },
];

//timeline user activity
export const activity: ActivityTimelineProps[] = [
  {
    bgColor: "bg-red-400",
    title: "Netflix",
    src: "https://cdn.simpleicons.org/netflix",
    subtitleTop: "Netflix",
    subtitleBottom: "user added a Netflix preimum family account @10:15am",
    duration: "12 min ago",
  },
  {
    bgColor: "bg-indigo-400",
    title: "2FA enabled",
    src: "https://cdn.simpleicons.org/google",
    subtitleTop: "Google Aunthenticator",
    subtitleBottom: "user enable 2FA @10:15am",
    duration: "45 min ago",
  },
  {
    bgColor: "bg-yellow-400",
    title: "Profile Updated",
    subtitleTop: "Change profile picture",
    subtitleBottom: "User edited his profile @10:24pm",
    duration: "2 day ago",
    src: "/images/user-img.svg",
  },
  {
    bgColor: "bg-blue-400",
    title: "Market Place Interaction",
    subtitleTop: "",
    subtitleBottom: "User purchased Productivity Bundle - @10:15 am",
    duration: "5 day ago",
  },
];
