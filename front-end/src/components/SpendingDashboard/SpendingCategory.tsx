import React from "react";

interface SpendingCategoryProps {
  emoji: string;
  category: string;
  borderColor: string;
  amount: number;
  budget: number;
  color: string;
  isHighlighted?: boolean; // Highlight prop
}

const SpendingCategory: React.FC<SpendingCategoryProps> = ({
  emoji,
  category,
  borderColor,
  amount,
  budget,
  color,
  isHighlighted = false,
}) => {
  const filledCircles = Math.max(0, Math.floor((amount / budget) * 8)); // Ensure non-negative
  const emptyCircles = Math.max(0, 8 - filledCircles); // Ensure non-negative

  return (
    <div
      className={`flex items-center justify-between mt-2.5 whitespace-nowrap max-md:mr-1.5 ${
        isHighlighted ? "fadeHighlight" : ""
      }`}
    >
      <div className="flex items-center gap-2.5 w-[20%]">
        <div
          className={`px-2 text-base font-bold text-black rounded-3xl ${borderColor} border-solid bg-stone-900 border-[0.5px] h-[30px] w-[30px] flex items-center justify-center`}
        >
          {emoji}
        </div>
        <div className="text-sm text-white">{category}</div>
      </div>
      <div className="flex items-center gap-2">
        {emptyCircles > 0 &&
          [...Array(emptyCircles)].map((_, index) => (
            <div
              key={`empty-${index}`}
              className="flex shrink-0 w-4 h-4 rounded-full bg-white bg-opacity-10"
            />
          ))}
        {filledCircles > 0 &&
          [...Array(filledCircles)].map((_, index) => (
            <div
              key={`filled-${index}`}
              className={`flex shrink-0 w-4 h-4 ${color} rounded-full`}
            />
          ))}
      </div>
      <div className="text-sm text-white w-[155px] text-right">
        ${amount} left in ${budget} budget
      </div>
    </div>
  );
};

export default SpendingCategory;
