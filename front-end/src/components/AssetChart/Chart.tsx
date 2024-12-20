/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface ChartProps {
  imageSrc: string;
}

const Chart: React.FC<ChartProps> = ({ imageSrc }) => {
  return (
    <img 
      src={imageSrc} 
      alt="Asset chart visualization" 
      className="object-contain self-start w-full stroke-[3px] stroke-lime-300" 
      loading="lazy"
    />
  );
};

export default Chart;