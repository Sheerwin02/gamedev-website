import React from "react";
import RoadMapSection from "../../../../components/roadmap/RoadMapSection";

const RoadMap: React.FC = () => {
  return (
    <div className=" text-white min-h-screen font-fantasy">
      <div className="p-4  text-white text-center">
        <h1 className="text-4xl font-extrabold tracking-wider mb-4">
          Hana Studio Roadmap
        </h1>
        <p className="text-lg italic">The legacy of Hana Studio starts here.</p>
      </div>
      <div className="flex justify-center">
        <RoadMapSection />
      </div>
    </div>
  );
};

export default RoadMap;
