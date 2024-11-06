/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const DebtSection: React.FC = () => {
  return (
    <section>
      <div data-layername="debts" className="relative mt-5 ml-3 text-base font-bold text-white">
        Debts
      </div>
      <div className="flex relative gap-9 items-start self-end mt-2">
        <div className="flex gap-2 text-white whitespace-nowrap">
          <div data-layername="50000" className="text-4xl font-light basis-auto">
            $50,000
          </div>
          <div data-layername="left" className="self-start mt-3 text-base">
            left
          </div>
        </div>
        <div className="flex gap-1.5 mt-3.5 text-base font-bold text-right text-emerald-600">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad199e4e1bebefa4eccce8b40f831fa53ee574dfb672e9e633aec971a2d3d68?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e" alt="" className="object-contain shrink-0 aspect-[0.68] w-[15px]" />
          <div data-layername="20">
            {" "}
            <span className="text-stone-300">20%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DebtSection;