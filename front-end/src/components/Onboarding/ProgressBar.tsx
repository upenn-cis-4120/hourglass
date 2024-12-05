import * as React from "react";
import { ProgressBarProps } from "./types";

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="flex gap-2.5 self-end max-w-full w-[357px]">
      <div className="flex flex-col justify-center items-start self-start py-px rounded-3xl bg-white bg-opacity-20">
        <div
          className="flex shrink-0 h-3.5 bg-lime-300 rounded-3xl"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="grow shrink text-base font-bold text-lime-300 w-[85px]">
        {progress}% complete
      </div>
    </div>
  );
};
