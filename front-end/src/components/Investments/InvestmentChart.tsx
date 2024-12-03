import * as React from "react";
import { ChartBar } from "./ChartBar";

export const InvestmentChart: React.FC = () => (
  <div className="flex">
    <div className="flex flex-auto self-end mt-16 mr-0">
      <div className="flex self-end mt-7 mr-0">
        <div className="shrink-0 self-end mt-20 mr-0 h-px border border-solid border-white border-opacity-10" />
        <ChartBar height="h-[73px]" opacity="0.3" />
      </div>
      <ChartBar height="h-[101px]" opacity="0.3" />
    </div>
    <div className="flex gap-2.5 items-end">
      <ChartBar height="h-[31px]" opacity="0.3" />
      <ChartBar height="h-[52px]" opacity="0.3" />
      <div className="flex gap-px self-stretch">
        <div className="shrink-0 self-end mt-9 w-px border border-white border-dashed h-[130px]" />
        <div className="flex flex-col items-start w-full">
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0bf2bb6328eb711075fcea635c735d6cf83339833ed91df4df0cbee9a248e81?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
            alt=""
            className="object-contain self-end aspect-[1.12] w-[27px]"
          /> */}
          <div className="mt-2.5 text-xs text-white">Projection</div>
          <div className="flex gap-5 mt-2">
            <div className="flex flex-col">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5b05744a2a8c3edc3371e277119b67200535fd5624ede9b16adc831de4409c?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
                alt=""
                className="object-contain w-16 aspect-[1.56]"
              />
              <div className="flex gap-5 self-start">
                <ChartBar height="h-[73px]" />
                <ChartBar height="h-[73px]" opacity="0.3" />
              </div>
            </div>
            <ChartBar height="h-[101px]" opacity="0.3" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
