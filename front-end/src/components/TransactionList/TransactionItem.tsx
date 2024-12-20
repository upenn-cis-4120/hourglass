/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { TransactionData } from './types';

const TransactionItem: React.FC<TransactionData> = ({
  name,
  category,
  amount,
  emoji,
  categoryColor
}) => {
  return (
    // <article className="flex gap-5 justify-between w-full whitespace-nowrap mt-2.5 first:mt-0">
    <div className="flex gap-2 flex-row w-full whitespace-nowrap mt-2 first:mt-0">
      <div className="flex gap-10 items-center whitespace-nowrap" style={{ minWidth: '220px' }}>
        <h3 className="text-md font-light text-white w-32 truncate">{name}</h3> {/* Fixed width */}
        <div className="flex gap-1 font-light items-center">
          <span
            className={`px-1 pt-1 w-5 h-5 text-[0.5rem] text-black rounded-3xl border-${categoryColor} border-solid bg-stone-900 border-[0.5px]`}
          >
            {emoji}
          </span>
          <span className={`text-[0.75rem] text-${categoryColor} w-16 truncate`}>{category}</span> {/* Fixed width */}
        </div>
      </div>
      <div className="text-base font-light text-right text-white whitespace-nowrap w-24"> {/* Fixed width */}
        <span>${amount.toFixed(2)}</span>
      </div>
    </div>
    // </article>
  );
};

export default TransactionItem;