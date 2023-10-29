import React from "react";
import RoadMapMonth from "./RoadMapMonth";
import ProgressBar from "./ProgressBar";
import BackToTopButton from "./BackToTopButton";

// Import the JSON data
import roadmapData from "./resources/roadmapData.json";
import { RoadmapData } from "./RoadMapData";

const RoadMapSection: React.FC = () => {
  const typedRoadmapData: RoadmapData = roadmapData; // Cast the JSON data to the defined interface

  return (
    <div className="flex-1 p-4 overflow-y-auto relative">
      {/* Position the ProgressBar at the top right corner */}
      <div className="absolute top-0 right-0 m-4">
        <ProgressBar progress={5} />
      </div>

      <div className="w-full max-w-screen-xl">
        {Object.keys(typedRoadmapData).map((year) => (
          <div key={year}>
            <h1 className="text-2xl font-semibold mb-2">{`Year ${year}`}</h1>
            {Object.keys(typedRoadmapData[year]).map((month) => (
              <RoadMapMonth
                key={month}
                year={parseInt(year, 10)}
                month={month}
                data={typedRoadmapData[year][month]}
              />
            ))}
          </div>
        ))}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default RoadMapSection;
