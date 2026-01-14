export interface ReviewCardProps {
  id: number;
  imgSrc: string;
  name: string;
  email: string;
  submittedOn: string;
}

export interface adminPanelProps {
  title: string;
  subtitle: string;
}

// personal data

export interface personalDataProps {
  title: string;
  subtitle: string;
}

export type contactProps = personalDataProps;
export type jobInfoProps = personalDataProps;

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
