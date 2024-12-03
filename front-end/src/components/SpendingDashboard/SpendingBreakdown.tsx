import React, { useEffect, useState } from "react";
import SpendingCategory from "./SpendingCategory";
import useBudgetStore from "./BudgetStore";

const SpendingBreakdown: React.FC = () => {
  const budgetData = useBudgetStore((state) => state.budgetData);

  // Track fields that have changed
  const [highlightedFields, setHighlightedFields] = useState<Set<string>>(new Set());

  useEffect(() => {
    const newHighlights = new Set<string>();

    (Object.entries(budgetData) as [keyof typeof budgetData, any][]).forEach(([key, value]) => {
      if (typeof value === "object" && "left" in value && "budget" in value) {
        if (value.left !== value.left || value.budget !== value.budget) {
          newHighlights.add(key);
        }
      }
    });

    if (newHighlights.size > 0) {
      setHighlightedFields(newHighlights);

      // Clear highlights after 2-3 seconds
      const timeout = setTimeout(() => {
        setHighlightedFields(new Set());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [budgetData]);

  const spendingData = [
    {
      emoji: "🛍️",
      category: "Shopping",
      borderColor: "border-fuchsia-500",
      amount: budgetData.shopping.left,
      budget: budgetData.shopping.budget,
      color: "bg-fuchsia-500",
    },
    {
      emoji: "✈️",
      category: "Travel",
      borderColor: "border-blue-400",
      amount: budgetData.travel.left,
      budget: budgetData.travel.budget,
      color: "bg-blue-400",
    },
    {
      emoji: "🍴",
      category: "Eating out",
      borderColor: "border-stone-300",
      amount: budgetData.eatingout.left,
      budget: budgetData.eatingout.budget,
      color: "bg-stone-300",
    },
    {
      emoji: "🍎",
      category: "Groceries",
      borderColor: "border-red-500",
      amount: budgetData.groceries.left,
      budget: budgetData.groceries.budget,
      color: "bg-red-500",
    },
  ];

  return (
    <>
      <div className="self-start mt-3 text-base font-bold text-white">
        Spending breakdown
      </div>
      <div className="w-full max-md:max-w-full">
        {spendingData.map((item, index) => (
          <SpendingCategory
            key={index}
            {...item}
            isHighlighted={highlightedFields.has(item.category.toLowerCase())}
          />
        ))}
      </div>
    </>
  );
};

export default SpendingBreakdown;
