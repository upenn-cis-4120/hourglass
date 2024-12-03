import * as React from "react";
import { PortfolioSummaryProps } from "./types";

export const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({
  totalAmount,
  percentageChange,
}) => (
  <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col font-bold text-white">
      {/* <h1 className="text-xl">Investments</h1> */}
      <div className="self-start mt-5 text-base text-lime-300">
        <span className="underline relative group">Portfolio
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/5 translate-y-[180px] bg-white text-black text-sm rounded shadow-lg px-4 py-2 
              w-[280px] whitespace-normal break-words opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            <p className="font-extralight text-[13px]">
              <span className='font-normal'>Definition:</span> A portfolio is a collection of financial investments such as stocks, bonds, mutual funds, real estate, and other assets, held by an individual or institution. Portfolios are designed to meet specific investment goals while balancing risk and return.
            </p>
            {/* Arrow */}
            <div className="absolute bottom-full left-1/5 transform -translate-x-1/2 translate-y-[6px] w-3 h-2 bg-white rotate-45 shadow-sm"></div>
          </div>
        </span>
      </div>
      <div className="mt-2.5 text-2xl font-light">
        ${totalAmount.toLocaleString()}
      </div>
      <div className="self-start mt-2 text-sm font-light text-lime-300">
        ↑{percentageChange}%
      </div>
      <div className="mt-12 text-sm font-sans font-thin">We invest for you!</div>
    </div>
  </div>
);
