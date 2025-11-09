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
  User,
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

//mock table data
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Alice Petrova",
    email: "alice.petrova@designhub.ru",
    status: "Active",
    subscriptions: 3,
    joinedDate: "Mar. 12, 2023",
    lastActive: "1min ago",
    role: "Designer",
    taxId: "7727563778",
    phone: "+7 (916) 162–0600",
    country: "Russia",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=ffdfbf",
  },
  {
    id: "2",
    name: "Andy Berg",
    email: "andy.berg@productwave.uk",
    status: "Inactive",
    subscriptions: 4,
    joinedDate: "Jun. 27, 2022",
    lastActive: "1mon ago",
    role: "Product Manager",
    taxId: "8825639021",
    phone: "+44 (742) 553–2145",
    country: "United Kingdom",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=f2f2f2",
  },
  {
    id: "3",
    name: "Jessica Miller",
    email: "jess.miller@frontendlabs.io",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Jan. 8, 2024",
    lastActive: "4d ago",
    role: "Frontend Developer",
    taxId: "9056734102",
    phone: "+1 (202) 845–6219",
    country: "United States",
    imgUrl: "https://api.dicebear.com/9.x/adventurer/svg?size=32",
  },
  {
    id: "4",
    name: "Lucas Moreau",
    email: "lucas.moreau@uxstudio.fr",
    status: "Pending",
    subscriptions: 4,
    joinedDate: "Oct. 5, 2021",
    lastActive: "10d ago",
    role: "UI/UX Researcher",
    taxId: "7645098312",
    phone: "+33 (6) 128–96450",
    country: "France",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?seed=Destiny&flip=true",
  },
  {
    id: "5",
    name: "Klara Hoffmann",
    email: "klara.hoffmann@byteflow.de",
    status: "Suspended",
    subscriptions: 4,
    joinedDate: "Feb. 19, 2023",
    lastActive: "3mon ago",
    role: "Backend Engineer",
    taxId: "6512034789",
    phone: "+49 (170) 342–8800",
    country: "Germany",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=e3f2fd",
  },
  {
    id: "6",
    name: "Giovanni Rossi",
    email: "giovanni.rossi@datanova.it",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 30, 2022",
    lastActive: "1w ago",
    role: "Data Analyst",
    taxId: "8124906733",
    phone: "+39 (347) 887–4421",
    country: "Italy",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=fdebd0",
  },
  {
    id: "7",
    name: "Aiko Tanaka",
    email: "aiko.tanaka@marketnext.jp",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Apr. 23, 2024",
    lastActive: "4h ago",
    role: "Marketing Lead",
    taxId: "9045312780",
    phone: "+81 (70) 5555–2241",
    country: "Japan",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=fff3e0",
  },
  {
    id: "8",
    name: "Diego Santos",
    email: "diego.santos@qaworks.es",
    status: "Pending",
    subscriptions: 4,
    joinedDate: "Nov. 14, 2020",
    lastActive: "2mon ago",
    role: "QA Tester",
    taxId: "7756429183",
    phone: "+34 (622) 781–409",
    country: "Spain",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=fce4ec",
  },
  {
    id: "9",
    name: "Noah Carter",
    email: "noah.carter@sysguard.ca",
    status: "Suspended",
    subscriptions: 4,
    joinedDate: "Jul. 6, 2023",
    lastActive: "3h ago",
    role: "System Administrator",
    taxId: "8193054772",
    phone: "+1 (416) 921–6723",
    country: "Canada",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=e8f5e9",
  },
  {
    id: "10",
    name: "Sophie Williams",
    email: "sophie.williams@peoplefirst.au",
    status: "Inactive",
    subscriptions: 4,
    joinedDate: "Dec. 31, 2021",
    lastActive: "4mon ago",
    role: "HR Specialist",
    taxId: "6731048892",
    phone: "+61 (405) 199–842",
    country: "Australia",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=f9fbe7",
  },
  {
    id: "11",
    name: "Aaron Lim",
    email: "aaron.lim@finorbit.sg",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    role: "Finance Officer",
    taxId: "7289105643",
    phone: "+65 (901) 445–772",
    country: "Singapore",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=f3e5f5",
  },
  {
    id: "12",
    name: "Maria Oliveira",
    email: "maria.oliveira@techport.pt",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    role: "Support Engineer",
    taxId: "9176542231",
    phone: "+351 (91) 902–3764",
    country: "Portugal",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=ede7f6",
  },
  {
    id: "13",
    name: "Erik Lindström",
    email: "erik.lindstrom@projectline.se",
    status: "Pending",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    role: "Project Manager",
    taxId: "8347215906",
    phone: "+46 (72) 663–8455",
    country: "Sweden",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=d1d4f9",
  },
  {
    id: "14",
    name: "Priya Mehta",
    email: "priya.mehta@opsconnect.in",
    status: "Active",
    subscriptions: 4,
    joinedDate: "Aug. 10, 2024",
    lastActive: "15min ago",
    role: "Operations Lead",
    taxId: "9054673812",
    phone: "+91 (989) 229–0012",
    country: "India",
    imgUrl:
      "https://api.dicebear.com/9.x/adventurer/svg?backgroundColor=ffdfbf",
  },
];

export const StatusStyles = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Inactive":
      return "bg-gray-100 text-gray-700";
    case "Pending":
      return "bg-blue-100 text-blue-700";
    case "Suspended":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-green-100 text-green-700";
  }
};
