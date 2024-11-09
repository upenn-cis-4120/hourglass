/**
 * This code was generated by Builder.io.
 */
import React from 'react';

const CashFlowSummary: React.FC = () => {
  return (
    <div className="flex justify-between items-start max-md:flex-col font-light mt-3
    max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-start w-6/12 max-md:w-full max-md:ml-0">
        <div className="flex flex-col max-md:mt-10">
          <div className="text-base font-bold text-white">Current Cash Flow: $4000</div>
          <div className="mt-2 text-base text-white">
            You have $3300 left to spend this <br/> month to meet your saving goal.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col items-end max-md:mt-10">
          <div className="self-start text-base font-bold text-right text-lime-300">
            $2500 spent
          </div>
          <div className="flex justify-start items-center self-stretch mt-3 w-full">
            <div className="flex-1 h-5 rounded-full bg-white bg-opacity-20">
              <div className="w-2/5 h-full bg-lime-300 rounded-full" />
            </div>
          </div>
          <div className="self-end mt-1.5 text-base font-bold text-right text-white text-opacity-70">
            $6500 earned
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashFlowSummary;