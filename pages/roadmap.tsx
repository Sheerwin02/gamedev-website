import React from "react";
import RoadMapSection from "../components/roadmap/RoadMapSection";
import Header from "../components/header/Header";

const RoadMap: React.FC = () => {
  return (
    <>
      <Header activeItemIndex={1} />
      <div className=" text-white bg-black min-h-screen font-fantasy">
        <div className="p-4  text-white text-center">
          <h1 className="text-4xl font-extrabold tracking-wider mb-4">
            Hana Studio Roadmap
          </h1>
          <p className="text-lg italic">
            The legacy of Hana Studio starts here.
          </p>
        </div>
        <div className="flex justify-center">
          <RoadMapSection />
        </div>
      </div>
    </>
  );
};

export default RoadMap;
