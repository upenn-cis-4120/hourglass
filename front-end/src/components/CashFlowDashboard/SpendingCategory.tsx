/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface SpendingCategoryProps {
  emoji: string;
  name: string;
  borderColor: string;
}

const SpendingCategory: React.FC<SpendingCategoryProps> = ({ emoji, name, borderColor }) => {
  return (
    <div className="flex gap-2.5 mt-2.5 whitespace-nowrap max-md:mr-1.5">
      <div className={`px-2 text-base font-bold text-black rounded-3xl ${borderColor} border-solid bg-stone-900 border-[0.5px] h-[30px] w-[30px]`}>
        {emoji}
      </div>
      <div className="self-start text-sm text-white">
        {name}
      </div>
    </div>
  );
};

export default SpendingCategory;