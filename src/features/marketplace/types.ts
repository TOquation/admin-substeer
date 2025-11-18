export interface MarketPartner {
  label: string;
  url: string;
}

export interface MarketCardProps {
  id: number;
  title: string;
  category: string;
  amount: string;
  status: "Active" | "Pending" | "Draft";
  partners: MarketPartner[];
  bannerUrl?: string;
}
