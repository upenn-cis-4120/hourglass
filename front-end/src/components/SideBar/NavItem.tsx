/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface NavItemProps {
  icon: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <div className="flex gap-2.5 my-2.5 ml-5 whitespace-nowrap">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-start aspect-square w-[18px]" />
      <div data-layername={label.toLowerCase()}>{label}</div>
    </div>
  );
};

export default NavItem;