import React from "react";
import RecruitmentList from "../components/recruitment/RecruitmentList";
import { headerHeight } from "../components/header/Header";

const Recruitments: React.FC = () => {
  return (
    <div
      id="recruitment"
      className="text-white flex flex-col items-left justify-center p-4 md:p-10 lg:p-12"
      style={{ scrollMarginTop: headerHeight + "px" }}
    >
      <div className="text-left mb-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-500 mb-4 p-2">
          Join Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 p-2">
          Are you excited to see where this journey will lead us as we work
          together on an all-new project? We are having ongoing projects in game
          development, web development, mobile application and AI development.
          Our main focus will be visualizing our goals through projects together
          as a team by supporting each other and enhance our skills from it
          while also having fun and enjoying the process.
        </p>
      </div>

      <div className="p-8 rounded-lg shadow-xl text-center text-white w-full">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">
          Discover Your Next Adventure with Hana Studio
        </h2>
        <RecruitmentList />
      </div>
    </div>
  );
};

export default Recruitments;
