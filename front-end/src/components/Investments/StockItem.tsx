import * as React from "react";
import { StockData } from "./types";

export const StockItem: React.FC<{ stock: StockData }> = ({ stock }) => (
  <div className="flex justify-between">
    <div className="text-base">{stock.name}</div>
    <div className="text-sm text-right">
      ${stock.amount.toLocaleString()} (
      <span
        className={stock.trend === "up" ? "text-lime-300" : "text-red-500"}
        aria-label={`${stock.trend === "up" ? "up" : "down"} ${
          stock.percentage
        }%`}
      >
        {stock.trend === "up" ? "↑" : "↓"}
        {stock.percentage}%
      </span>
      )
    </div>
  </div>
);
