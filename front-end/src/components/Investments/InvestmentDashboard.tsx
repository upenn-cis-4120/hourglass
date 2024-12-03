import * as React from "react";
import { StockData } from "./types";
import { PortfolioSummary } from "./PortfolioSummary";
import { InvestmentChart } from "./InvestmentChart";
import { TimelineLabels } from "./TimelineLabels";
import { StockList } from "./StockList";
import BarChart from "./BarChart";

const stockData: StockData[] = [
  { name: "TESLA", amount: 50300, percentage: 8.3, trend: "up" },
  { name: "META", amount: 30200, percentage: 1.5, trend: "down" },
  { name: "Apple", amount: 10000, percentage: 8.3, trend: "up" },
];

const timelineLabels = ["-1yr", "-6m", "-1m", "Today", "+1m", "+6m", "+1yr"];

export const InvestmentDashboard: React.FC = () => {
  return (
    <div className="flex flex-col rounded-none max-w-[461px]">
      {/* <div className="flex flex-col px-5 pt-4 pb-7 w-full rounded-2xl border border-solid shadow-lg bg-zinc-800 border-white border-opacity-30"> */}
        <div>
          <div className="flex gap-2 max-md:flex-col">
            <PortfolioSummary totalAmount={315000} percentageChange={8.3} />
            <div className="flex flex-col ml-2 w-[71%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full">
                {/* <InvestmentChart />
                <TimelineLabels labels={timelineLabels} /> */}
                <BarChart/>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 max-w-full h-px border border-solid border-white border-opacity-10 w-[421px]" />
        <StockList stocks={stockData} />
      {/* </div> */}
    </div>
  );
};

export default InvestmentDashboard;