import * as React from "react";
import { SectionProps } from "./types";

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col text-white">
      <div className="self-start text-xl leading-none">{title}</div>
      <div className="mt-6">{children}</div>
    </div>
  );
};
