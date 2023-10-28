import React from "react";
import RoadMapSection from "../../../../components/roadmap/RoadMapSection";

const RoadMap: React.FC = () => {
  return (
    <div className=" text-white min-h-screen font-fantasy">
      <div className="p-4  text-white text-center">
        <h1 className="text-4xl font-extrabold tracking-wider mb-4">Roadmap</h1>
        <p className="text-lg italic">
          Embark on a special journey with Hana Studio
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl text-gray-500 mt-4">2024</h2>
      </div>

      <div className="flex justify-center">
        <RoadMapSection />
      </div>
    </div>
  );
};

export default RoadMap;
