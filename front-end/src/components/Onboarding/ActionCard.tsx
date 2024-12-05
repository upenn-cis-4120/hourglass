import * as React from "react";
import { ActionCardProps } from "./types";

export const ActionCard: React.FC<ActionCardProps> = ({
  title,
  icon,
  onClick,
}) => {
  return (
    <div
      className="flex gap-5 justify-between px-5 py-2.5 text-base font-bold rounded-md border-2 border-red-500 border-solid cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="self-start">{title}</div>
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 aspect-square w-[25px]"
        />
      )}
    </div>
  );
};
