/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import SpendingCategory from './SpendingCategory';

interface SpendingData {
  emoji: string;
  category: string;
  borderColor: string;
  amount: number;
  budget: number;
  color: string;
}

const spendingData: SpendingData[] = [
  { emoji: '🛍️', category: 'Shopping', borderColor: 'border-fuchsia-500', amount: 100, budget: 200, color: 'bg-fuchsia-500' },
  { emoji: '✈️', category: 'Travel', borderColor: 'border-blue-400', amount: 200, budget: 1000, color: 'bg-blue-400' },
  { emoji: '🍴', category: 'Eating out', borderColor: 'border-stone-300', amount: 50, budget: 200, color: 'bg-stone-300' },
  { emoji: '🍎', category: 'Groceries', borderColor: 'border-red-500', amount: 100, budget: 200, color: 'bg-red-500' },
];

const SpendingBreakdown: React.FC = () => {
  return (
    <>
      <div className="self-start mt-5 text-base font-bold text-white">
        Spending breakdown
      </div>
      <div className="mt-5 w-full max-md:max-w-full">
        {spendingData.map((item, index) => (
          <SpendingCategory key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SpendingBreakdown;