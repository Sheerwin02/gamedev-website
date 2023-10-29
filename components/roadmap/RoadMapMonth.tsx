import React, { useState } from "react";
import RoadMapItem from "./RoadMapItem";

interface RoadMapMonthProps {
  year: number;
  month: string;
  data: Array<{
    title: string;
    description: string;
    status: string;
    duration: string;
    imageUrl: string;
  }>;
}

const RoadMapMonth: React.FC<RoadMapMonthProps> = ({ year, month, data }) => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null
  );

  const handleItemClick = (index: number) => {
    if (expandedItemIndex === index) {
      setExpandedItemIndex(null); // Collapse the item if it's already expanded
    } else {
      setExpandedItemIndex(index); // Expand the clicked item
    }
  };

  return (
    <div className="relative group">
      {/* Vertical line */}
      <div className="border-l-4 border-gray-500 absolute h-full left-4"></div>

      <div className="ml-8 py-4 relative">
        <h2 className="text-2xl font-semibold mb-4 z-10 relative text-gray-900 group-hover:text-blue-500 transition-colors flex items-center">
          <svg
            className="w-4 h-4 mr-2 fill-current text-gray-500 group-hover:text-blue-500 transition-colors"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          {month} {year}
        </h2>

        {data.map((item, index) => (
          <RoadMapItem
            key={index}
            title={item.title}
            description={item.description}
            status={item.status}
            duration={item.duration}
            imageUrl={item.imageUrl}
            isExpanded={expandedItemIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadMapMonth;
