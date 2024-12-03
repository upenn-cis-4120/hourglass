"use client";
import React, { useEffect, useState, useRef } from "react";
import useBudgetStore from "./BudgetStore";

const CashFlowSummary: React.FC = () => {
  const budgetData = useBudgetStore((state) => state.budgetData);
  const [highlightedFields, setHighlightedFields] = useState<Set<string>>(new Set());
  const prevBudgetData = useRef(budgetData); // Store previous values

  useEffect(() => {
    const newHighlights = new Set<string>();

    // Compare current budgetData with previous budgetData
    if (budgetData.currentCashFlow !== prevBudgetData.current.currentCashFlow) {
      newHighlights.add("currentCashFlow");
    }
    if (budgetData.remainingBudget !== prevBudgetData.current.remainingBudget) {
      newHighlights.add("remainingBudget");
    }
    if (budgetData.spent !== prevBudgetData.current.spent) {
      newHighlights.add("spent");
    }
    if (budgetData.earned !== prevBudgetData.current.earned) {
      newHighlights.add("earned");
    }

    if (newHighlights.size > 0) {
      setHighlightedFields(newHighlights);

      // Remove highlights after 2-3 seconds
      const timeout = setTimeout(() => {
        setHighlightedFields((prev) => {
          const updated = new Set(prev);
          newHighlights.forEach((field) => updated.delete(field));
          return updated;
        });
      }, 3000);

      return () => clearTimeout(timeout);
    }

    // Update previous budgetData to the current value
    prevBudgetData.current = budgetData;
  }, [budgetData]);

  return (
    <div className="flex justify-between items-start max-md:flex-col font-light mt-2 max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-start w-6/12 max-md:w-full max-md:ml-0">
        <div className="flex flex-col max-md:mt-10">
          <div
            className={`text-base font-normal text-white ${
              highlightedFields.has("currentCashFlow") ? "fade-highlight" : ""
            }`}
          >
            Current{" "}
            <span className="underline relative group">
              Cash Flow
              <div
                className="absolute bottom-full left-1/2 transform -translate-x-1/5 translate-y-[100px] bg-white text-black text-sm rounded shadow-lg px-4 py-2 
                w-[180px] whitespace-normal break-words opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
              >
                <p className="font-extralight text-[13px]">
                  <span className="font-normal">Definition:</span> The amount of money earned minus the amount of money spent.
                </p>
                {/* Arrow */}
                <div className="absolute bottom-full left-1/5 transform -translate-x-1/2 translate-y-[6px] w-3 h-2 bg-white rotate-45 shadow-sm"></div>
              </div>
            </span>
            : ${budgetData.currentCashFlow}
          </div>

          <div
            className={`text-base text-white ${
              highlightedFields.has("remainingBudget") ? "fade-highlight" : ""
            }`}
          >
            You have ${budgetData.remainingBudget} left to spend this <br /> month to meet your saving goal.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-6/12 ml-2 max-md:w-full max-md:ml-0">
        <div className="flex flex-col items-end max-md:mt-10">
          <div
            className={`self-start text-base font-bold text-right text-lime-300 ${
              highlightedFields.has("spent") ? "fade-highlight" : ""
            }`}
          >
            ${budgetData.spent} spent
          </div>
          <div className="flex justify-start items-center self-stretch mt-2 w-full">
            <div className="flex-1 h-5 rounded-full bg-white bg-opacity-20">
              <div
                className={`h-full bg-lime-300 rounded-full ${
                  highlightedFields.has("spent") || highlightedFields.has("earned") ? "animate-pulse" : ""
                }`}
                style={{
                  width: `${Math.min((budgetData.spent / budgetData.earned) * 100, 100)}%`,
                }}
              />
            </div>
          </div>
          <div
            className={`self-end text-base font-bold text-right text-white text-opacity-70 ${
              highlightedFields.has("earned") ? "fade-highlight" : ""
            }`}
          >
            ${budgetData.earned} earned
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlowSummary;
