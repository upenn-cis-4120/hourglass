import * as React from "react";
import { StockData } from "./types";
import { StockItem } from "./StockItem";

interface StockListProps {
  stocks: StockData[];
}

export const StockList: React.FC<StockListProps> = ({ stocks }) => (
  <>
    <div className="self-start mt-1.5 text-base font-bold text-lime-300">
      Featured Stocks
    </div>
    <div className="flex flex-col gap-2 mt-1 text-white">
      {stocks.map((stock, index) => (
        <StockItem key={index} stock={stock} />
      ))}
    </div>
  </>
);
