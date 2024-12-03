import * as React from "react";
import { TimelineLabelsProps } from "./types";

export const TimelineLabels: React.FC<TimelineLabelsProps> = ({ labels }) => (
  <div className="flex gap-3 text-xs leading-none text-center text-white whitespace-nowrap">
    {labels.map((label, index) => (
      <div key={index} className={index === 0 ? "grow" : ""}>
        {label}
      </div>
    ))}
  </div>
);
