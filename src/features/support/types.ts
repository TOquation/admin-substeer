// types.ts
export interface TicketType {
  title: string;
  duration: string;
  user: string;
  msgId: string;
  email: string;
  content: string[];
  attachments: {
    id: string;
    preview: string;
    size: string;
  }[];
}
