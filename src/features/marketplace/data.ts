import { MarketCardProps } from "./types";

export const marketCard: MarketCardProps[] = [
  {
    id: 1,
    title: "work",
    category: "Education",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/banner-1.jpg",
  },
  {
    id: 2,
    title: "work",
    category: "Movies 'n Chill",
    amount: "$4,900/month",
    status: "Pending",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/banner-2.jpg",
  },
  {
    id: 3,
    title: "work",
    category: "Productivity Suite",
    amount: "$4,900/month",
    status: "Draft",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/banner-1.jpg",
  },
  {
    id: 4,
    title: "work",
    category: "Entertainment",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/marketplace.jpg",
  },
  {
    id: 5,
    title: "work",
    category: "Productivity Suite",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/banner-2.jpg",
  },
  {
    id: 6,
    title: "work",
    category: "Productivity Suite",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/marketplace.jpg",
  },
  {
    id: 7,
    title: "work",
    category: "Productivity Suite",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/marketplace.jpg",
  },
  {
    id: 8,
    title: "work",
    category: "Productivity Suite",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/banner-1.jpg",
  },
  {
    id: 9,
    title: "work",
    category: "Productivity Suite",
    amount: "$4,900/month",
    status: "Active",
    partners: [
      { label: "spotify", url: "https://cdn.simpleicons.org/spotify" },
      { label: "netflix", url: "https://cdn.simpleicons.org/netflix" },
      { label: "dropbox", url: "https://cdn.simpleicons.org/dropbox" },
    ],
    bannerUrl: "/banner-2.jpg",
  },
];

export const marketStatus = (status: string) => {
  switch (status) {
    case "Active":
      return {
        text: "text-green-500",
        bg: "bg-green-500",
      };
    case "Pending":
      return {
        text: "text-yellow-600",
        bg: "bg-yellow-600",
      };
    case "Draft":
      return {
        text: "text-gray-500",
        bg: "bg-gray-500",
      };
    default:
      return {
        text: "text-gray-500",
        bg: "bg-gray-500",
      };
  }
};
