/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import CashFlowSummary from './CashFlowSummary';
import SpendingBreakdown from './SpendingBreakdown';

const SpendingDashboard: React.FC = () => {
  return (
    <div className="flex flex-col rounded-none max-w-[519px]">
      <CashFlowSummary />
      <div className="shrink-0 mt-5 w-full h-px border border-solid border-white border-opacity-10 max-md:mr-1" />
      <SpendingBreakdown />
    </div>
  );
};

export default SpendingDashboard;