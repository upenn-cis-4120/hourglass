/**
 * This code was generated by Builder.io.
 */
"use client"
import React, { useState } from 'react';
import Menu from './Menu';
import AssetSection from './AssetSection';
import DebtSection from './DebtSection';
import FinancialAdvisor from '../FinancialAdvisor/FinancialAdvisor';

const SideBar: React.FC = () => {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);

  const handleAdvisorClick = () => {
    setChatBoxVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col pb-9 shadow-lg bg-zinc-800 max-sm:self-stretch h-screen w-1/5 relative">
      <main className="flex flex-col items-start pt-3 pl-2.5 pb-2 w-full aspect-[0.674] max-w-[258px]">
        <div className="flex flex-row items-center justify-center gap-x-4">
          <img loading="lazy" src="hourglass_logo.svg" className="h-32 w-32" alt="Hourglass Logo" />
          <div className="flex flex-col items-start">
            <p className="text-sm leading-6 text-white">Welcome to your</p>
            <h1 className="text-2xl font-bold text-white">Hourglass</h1>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13b0b4dd95ede84e1f6490ebcd1d03a046cab352fc9d08a2b3e338ba42615694?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <AssetSection />
        <DebtSection />
        </main>
      <Menu handleAdvisorClick={handleAdvisorClick} />
      <FinancialAdvisor visible={isChatBoxVisible} handleCloseAdvisor={handleAdvisorClick} />
    </div>
  );
  
};

export default SideBar;