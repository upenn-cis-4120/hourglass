/**
 * This code was generated by Builder.io.
 */
import React from 'react';

export interface MonthCardProps {
  name: string;
  amount: number;
  isPredicted: boolean;
  isCurrentMonth: boolean;
}

const MonthCard: React.FC<MonthCardProps> = ({ name, amount, isPredicted, isCurrentMonth }) => {
  const baseClasses = "px-5 py-7 rounded-md max-md:px-5";
  const colorClasses = isCurrentMonth
    ? "bg-lime-300 text-stone-900"
    : isPredicted
    ? "text-lime-300 bg-white bg-opacity-10"
    : "bg-white bg-opacity-10 text-white";

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      <span className={`font-bold ${isCurrentMonth ? 'text-stone-900' : 'text-white'}`}>{name}</span>
      <br />
      {isCurrentMonth ? (
        "This month"
      ) : (
        <span className={isPredicted ? 'text-lime-300' : 'text-white'}>
          {isPredicted ? `$${amount} predicted` : `Saved $${amount}`}
        </span>
      )}
    </div>
  );
};

export default MonthCard;