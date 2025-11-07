export interface IntegrationCardProps {
  id: number;
  bgColor: string;
  title: string;
  titleColor: string;
  subtitle: number | string;
  submain?: number;
  subscript?: number;
}

// integration table props
export interface IntegralProps {
  id: number;
  service: string;
  icon: string;
  iconBg: string;
  type: string;
  status: "Success" | "Failed" | "Warning";
  latency: string;
  errors: number;
  uptime: string;
}

export interface IntegrationProps {
  setOpen: (open: boolean) => void;
  setSelectedIntegration: (integration: IntegralProps) => void;
}

export interface OverviewProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedIntegration: IntegralProps | null;
}
