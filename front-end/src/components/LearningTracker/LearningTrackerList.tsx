/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import LearningTrackerItem from './LearningTrackerItem';

interface EducationItem {
  iconSrc: string;
  title: string;
}

const educationItems: EducationItem[] = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83444729-468f-4bc1-9cde-3ff9356b2712?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", title: "Investing 101" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9e148ba-de3d-4a61-a8ad-263c18f2a862?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", title: "Savings 101" },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3213cedb-eb42-454f-b05b-27e712a52e56?placeholderIfAbsent=true&apiKey=271c6a8a64c7449c91e4662f85acfb4e", title: "Setting Goals" },
];

const LearningTrackerList: React.FC = () => {
  return (
    <nav className="flex flex-col text-base text-white max-w-[137px] mt-10">
      {educationItems.map((item, index) => (
        <div key={index} className={index > 0 ? "mt-2.5" : ""}>
          <LearningTrackerItem iconSrc={item.iconSrc} title={item.title} />
        </div>
      ))}
    </nav>
  );
};

export default LearningTrackerList;