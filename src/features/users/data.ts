import {
  Calendar1,
  Medal,
  Share,
  User2,
  Wallet,
  WalletMinimal,
} from "lucide-react";
import { TableFilterProps, UserProfileProps } from "./types";

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
