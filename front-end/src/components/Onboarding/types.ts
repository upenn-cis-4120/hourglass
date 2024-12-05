export interface ProgressBarProps {
  progress: number;
}

export interface ActionCardProps {
  title: string;
  icon?: string;
  onClick?: () => void;
}

export interface SectionProps {
  title: string;
  children: React.ReactNode;
}
