/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import MonthCard, { MonthCardProps } from './MonthCard';

const monthData : MonthCardProps[] = [
  { name: "July", amount: 450, isPredicted: false, isCurrentMonth: false },
  { name: "August", amount: 480, isPredicted: false, isCurrentMonth: false },
  { name: "September", amount: 450, isPredicted: false, isCurrentMonth: false },
  { name: "October", amount: 0, isPredicted: false, isCurrentMonth: true },
  { name: "November", amount: 450, isPredicted: true, isCurrentMonth: false },
  { name: "December", amount: 450, isPredicted: true, isCurrentMonth: false },
  { name: "January", amount: 450, isPredicted: true, isCurrentMonth: false },
]

const SavingsGoal: React.FC<{}> = () => {
  return (
    <section className="flex flex-col rounded-md">
      <h2 className="z-8 self-start mt-0 text-base font-light text-white max-md:max-w-full">
        You have not met your savings goal in the last 3 months. <br/> 
        Our system forecasts no change in the next 3 months unless you make a conscious change today.
      </h2>
      <div className="flex flex-wrap gap-5 mt-2 mb-3 text-sm leading-4 text-center text-white text-opacity-80">
        {monthData.map((month, index) => (
          <MonthCard
            key={index}
            name={month.name}
            amount={month.amount}
            isPredicted={month.isPredicted}
            isCurrentMonth={month.isCurrentMonth}
          />
        ))}
      </div>
    </section>
  );
};

export default SavingsGoal;