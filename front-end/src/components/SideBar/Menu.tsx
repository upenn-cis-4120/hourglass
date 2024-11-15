/**
 * This code was generated by Builder.io.
 */
"use client"
import React, { useState } from 'react';
import NavItem from './NavItem';
import Link from 'next/link';

const navItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/feec44ee2cc148b4546f68bcf7b5b4d16ed5bee3f2ac22031cb27fbbfa514e36?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", label: "Dashboard", link: "/dashboard" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e459dee4a94b88e9eb0e24f6f5c1414e71c7dae810c369d85c6c91f351170ed?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", label: "Account", link: "/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c746a0fa75c3d4bbcdc93a3e75758220fa2f65c48443ed0c00a632ad37e81b2?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", label: "Goals", link: "/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/efbdc659f6e81d270707c476f97c749ed5fec8415fd39ea648a07333a9e77bbb?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", label: "Investing", link: "/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/976b06a91d2b0cf88f8180ba99d96468022ce32a11c992a0b3723850f9d5e26c?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", label: "Progress Tracker", link: "/" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b49e055f63ebff4abea669a6b03818ad64d740bc5b46907fceca64e0e700b532?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", label: "Learning Center", link: "/learning" },
];

const Menu: React.FC<{ handleAdvisorClick: any }> = ({ handleAdvisorClick }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <nav className="flex flex-col items-start px-2.5 w-full h-full text-base text-white position: relative">
      {navItems.map((item, index) => (
        <div
          key = {index}
          onClick={() => setActiveItem(index)}
          className={`flex items-center w-full px-4 rounded-md cursor-pointer ${activeItem === index ? 'bg-gradient-to-r from-gradients-green-start to-gradients-green-end' : ''
            }`}
        >
          <Link href={item.link} key={index}>
            <NavItem icon={item.icon} label={item.label} />
          </Link>
        </div>
      ))}
      <div data-layername="aiFinancialAdvisor"
        className="self-stretch px-5 pt-3 pb-6 mt-10 rounded-md 
      bg-gradient-to-r from-gradients-orange-start
       to-gradients-orange-end cursor-pointer"
        onClick={handleAdvisorClick}
      >
        AI Financial Advisor
      </div>
      <div className="shrink-0 self-stretch mt-2.5 h-px border border-solid border-white border-opacity-10" />
      <div className="flex gap-5 justify-between self-stretch mx-2.5 mt-2.5 text-sm">
        <div data-layername="settings">Settings</div>
        <div data-layername="signOut" className="text-right">Sign Out</div>
      </div>
    </nav>
  );
};

export default Menu;