import React from "react";
import RecruitmentList from "../components/recruitment/RecruitmentList";

const Recruitments: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white flex flex-col items-left justify-center p-4 md:p-10 lg:p-12">
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

      <div className="p-8 rounded-lg shadow-xl text-center text-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">
          Discover Your Next Adventure with Hana Studio
        </h2>
        <RecruitmentList />
      </div>
    </div>
  );
};

export default Recruitments;
