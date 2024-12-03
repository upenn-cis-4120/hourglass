import * as React from "react";
import { ChartBarProps } from "./types";

export const ChartBar: React.FC<ChartBarProps> = ({
  height,
  opacity = "1",
}) => (
  <div
    className={`flex shrink-0 w-5 bg-lime-300 ${
      opacity === "0.3" ? "bg-opacity-30" : ""
    } ${height}`}
    role="presentation"
    aria-hidden="true"
  />
);
