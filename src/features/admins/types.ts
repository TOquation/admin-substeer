export interface AdminTableProps {
  id: number;
  imgSrc: string;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Suspended";
  phoneNumber?: string;
  username?: string;
  employeeId?: string;
  region?: string;
  departments?: string[];
  location?: string;
  timeZone?: string;
  language?: string;
}
