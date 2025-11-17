import { NewTicketsProps } from "./types";

export const newTickets: NewTicketsProps[] = [
  {
    id: 1,
    title: "New email template creation",
    duration: "2 hrs ago",
    user: "Leks",
    msgId: "MSG-00123",
    email: "leks@hotmail.com",
    assignedTo: "Mark Probert",
    content: [
      "Rem illo quasi. Veritatis recusandae enim ratione eos distinctio. Amet consectetur asperiores 😂 sit qui itaque. Illo est dolorum doloribus vitae eligendi optio maiores explicabo.",
      "Consequatur ad ipsam sed quos fugiat in unde est. Dolorum totam nemo nesciunt cum laboriosam nulla. Alias voluptatius alias voluptatem fugiat repudiandae alias eius praesentium. Reiciendis illo atque non. Aut labore explicabo. Modi quaerat distinctio eaque harum possimus omnis.",
    ],
    attachments: [
      {
        id: "a6de7279-3216-44...",
        preview: "/doc-1.svg",
        size: "12 KB",
      },
      {
        id: "-44b6-826f-7cd51...",
        preview: "/doc-2.svg",
        size: "14 KB",
      },
      {
        id: "16-44b6-826f-7cd...",
        preview: "/doc-3.svg",
        size: "8 KB",
      },
    ],
    status: "Closed",
    priority: "Low",
  },
  {
    id: 2,
    title: "Account access problem",
    duration: "3 hrs ago",
    user: "Mezie",
    msgId: "MSG-00124",
    email: "mezie.tech@gmail.com",
    assignedTo: "Mark Probert",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
    attachments: [],
    status: "Resolved",
    priority: "High",
  },
  {
    id: 3,
    title: "Feature request for dashboard",
    duration: "5 hrs ago",
    user: "Leks",
    msgId: "MSG-00125",
    email: "leks.dev@outlook.com",
    assignedTo: "Mark Probert",
    content: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    attachments: [
      {
        id: "fe234-5678-90ab...",
        preview: "/doc-3.svg",
        size: "20 KB",
      },
    ],
    status: "In-Progress",
    priority: "Medium",
  },
  {
    id: 4,
    title: "Billing inquiry",
    duration: "1 day ago",
    user: "Mezie",
    msgId: "MSG-00126",
    email: "mezie.business@yahoo.com",
    assignedTo: "Mark Probert",
    content: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
    attachments: [
      {
        id: "xyz-1234-abcd...",
        preview: "/doc-1.svg",
        size: "15 KB",
      },
      {
        id: "klm-5678-efgh...",
        preview: "/doc-2.svg",
        size: "18 KB",
      },
    ],
    status: "Open",
    priority: "Low",
  },
];

// priority color
export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return {
        dot: "bg-red-600",
        text: "text-red-600",
      };
    case "Low":
      return {
        dot: "bg-blue-400",
        text: "text-blue-400",
      };
    case "Medium":
      return {
        dot: "bg-yellow-500",
        text: "text-yellow-500",
      };

    default:
      return { dot: "bg-gray-300", text: "text-gray-400" };
  }
};
