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
