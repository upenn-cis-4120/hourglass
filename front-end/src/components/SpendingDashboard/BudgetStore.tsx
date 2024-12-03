// store/budgetStore.ts
import { create } from 'zustand';

interface BudgetData {
  currentCashFlow: number;
  remainingBudget: number;
  spent: number;
  earned: number;
  shopping: { left: number, budget: number };
  travel: { left: number, budget: number };
  eatingout: { left: number, budget: number };
  groceries: { left: number, budget: number };
}

interface BudgetStore {
  budgetData: BudgetData;
  updateBudgetData: (newData: Partial<BudgetData>) => void;
}

const useBudgetStore = create<BudgetStore>((set) => ({
  budgetData: {
    currentCashFlow: 5000,
    remainingBudget: 2000,
    spent: 1500,
    earned: 3000,
    shopping: { left: 100, budget: 200 },
    travel: { left: 200, budget: 1000 },
    eatingout: { left: 50, budget: 200 },
    groceries: { left: 100, budget: 200 }
  },
  updateBudgetData: (newData) =>
    set((state) => ({
      budgetData: {
        ...state.budgetData,
        ...newData,
      },
    })),
}));

export default useBudgetStore;
