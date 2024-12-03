export interface StockData {
  name: string;
  amount: number;
  percentage: number;
  trend: "up" | "down";
}

export interface ChartBarProps {
  height: string;
  opacity?: string;
}

export interface PortfolioSummaryProps {
  totalAmount: number;
  percentageChange: number;
}

export interface TimelineLabelsProps {
  labels: string[];
}
