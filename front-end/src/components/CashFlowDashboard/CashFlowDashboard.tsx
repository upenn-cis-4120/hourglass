/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import SpendingCategory from './SpendingCategory';
import BudgetProgress from './BudgetProgress';

export interface CashFlowDashboardProps {
  currentCashFlow: number;
  remainingBudget: number;
  spentAmount: number;
  earnedAmount: number;
}

const BudgetData : CashFlowDashboardProps = {
  currentCashFlow: 4000,
  remainingBudget: 3300,
  spentAmount: 2500,
  earnedAmount: 6500,
}

const CashFlowDashboard: React.FC<{}> = ({}) => {
  const spendingCategories = [
    { emoji: '🛍️', name: 'Shopping', borderColor: 'border-fuchsia-500' },
    { emoji: '✈️', name: 'Travel', borderColor: 'border-blue-400' },
    { emoji: '🍴', name: 'Eating out', borderColor: 'border-stone-300' },
    { emoji: '🍎', name: 'Groceries', borderColor: 'border-red-500' }
  ];

  const budgetProgressData = [
    { color: 'bg-fuchsia-500', remaining: 100, total: 200 },
    { color: 'bg-blue-400', remaining: 200, total: 1000 },
    { color: 'bg-stone-300', remaining: 50, total: 200 },
    { color: 'bg-red-500', remaining: 100, total: 200 }
  ];

  return (
    <main className="flex flex-col rounded-none max-w-[519px]">
      <header className="flex flex-row z-10 gap-8 max-md:mr-1">
        <div className="flex flex-col flex-wrap w-1/2 flex-1 self-start text-base text-white">
          <h1 className="self-start font-bold">
            Current Cash Flow: ${BudgetData.currentCashFlow}
          </h1>
          <p className="mt-2 font-light">
            You have ${BudgetData.remainingBudget} left to spend <br/> this month to meet your saving goal.
          </p>
        </div>
        <div className="flex flex-col flex-1">
          <p className="self-start ml-5 text-base font-bold text-right text-lime-300 max-md:ml-2.5">
            ${BudgetData.spentAmount} spent
          </p>
          <div className="flex flex-col justify-center items-start py-px mt-3 rounded-3xl bg-white bg-opacity-20 max-md:pr-5">
            <div className="flex shrink-0 bg-lime-300 rounded-3xl h-[17px] w-[111px]" />
          </div>
          <p className="self-end mt-1.5 text-base font-bold text-right text-white text-opacity-70">
            ${BudgetData.earnedAmount} earned
          </p>
        </div>
      </header>
      <hr className="shrink-0 mt-5 w-full h-px border border-solid border-white border-opacity-10 max-md:mr-1" />
      <section className="mt-5">
  <h2 className="self-start text-base font-bold text-white">
    Spending breakdown
  </h2>
  <div className="mt-5 w-full max-md:max-w-full">
    {/* Wrapping container for each row */}
    <div className="flex flex-col gap-5 max-md:flex-col">
      {/* Pair each SpendingCategory with corresponding BudgetProgress */}
      {spendingCategories.map((category, index) => (
        <div key={index} className="flex flex-row items-center gap-5">
          {/* SpendingCategory component */}
          <SpendingCategory
            emoji={category.emoji}
            name={category.name}
            borderColor={category.borderColor}
          />
          
          {/* BudgetProgress component */}
          {budgetProgressData[index] && (
            <BudgetProgress
              color={budgetProgressData[index].color}
              remaining={budgetProgressData[index].remaining}
              total={budgetProgressData[index].total}
            />
          )}
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
};

export default CashFlowDashboard;