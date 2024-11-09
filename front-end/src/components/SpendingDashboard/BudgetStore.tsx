// store/budgetStore.ts
import {create} from 'zustand';

interface BudgetData {
  currentCashFlow: number;
  remainingBudget: number;
  spent: number;
  earned: number;
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
