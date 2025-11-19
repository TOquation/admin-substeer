// types.ts
export interface TicketType {
  title: string;
  duration: string;
  user: string;
  msgId: string;
  email: string;
  assignedTo?: string;
  content: string[];
  attachments: {
    id: string;
    preview: string;
    size: string;
  }[];
}

export interface NewTicketsProps extends TicketType {
  id: number;
  status: "Open" | "In-Progress" | "Resolved" | "Closed";
  priority: "High" | "Low" | "Medium";
}
