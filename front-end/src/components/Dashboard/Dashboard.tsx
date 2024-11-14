/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { DashboardCard } from './DashboardCard';
import { DashboardRow } from './DashboardRow';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  const topRowCards = [
    { title: "This Month's Budgeting", width: "w-[56%]" },
    { title: "Investments", width: "w-[44%]" }
  ];

  const middleRowCards = [
    { title: "Savings Track & Forecast", width: "w-full" }
  ];

  const bottomRowCards = [
    { title: "Recurring Payments", width: "w-[33%]" },
    { title: "Transactions", width: "w-[33%]" },
    { title: "Accounts", width: "w-[33%]" },
    { title: "Projections", width: "w-[33%]" },
    { title: "Upcoming Bills", width: "w-[33%]" },
    { title: "What You Have Learned So Far", width: "w-[33%]" }
  ];

  return (
    
    <main data-layername="desktop11" className="flex flex-col px-16 py-16 bg-[#212529] max-md:px-5">
      <div style={{ transform: "scale(0.9)", transformOrigin: "top" }}>
      <header className="z-8 self-start mt-0 text-3xl font-bold text-white">
        Dashboard
      </header>
      <DashboardRow cards={topRowCards} />
      <DashboardRow cards={middleRowCards} />
      <DashboardRow cards={bottomRowCards.slice(0, 3)} />
      <DashboardRow cards={bottomRowCards.slice(3)} />
      </div>
    </main>
  );
};