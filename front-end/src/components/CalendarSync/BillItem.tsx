import React from 'react';
import { BillItemProps } from './types';

export const BillItem: React.FC<BillItemProps> = ({ name, amount, dueDate }) => {
  return (
    <div className="flex justify-between w-full text-white">
      <span>{name}</span>
      <span>
        ${amount} / <span className="font-bold text-lime-300">{dueDate}</span>
      </span>
    </div>
  );
};