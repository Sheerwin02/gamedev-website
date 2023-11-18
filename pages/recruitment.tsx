import React from "react";
import RecruitmentList from "../components/recruitment/RecruitmentList";

const Recruitments: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-500 mb-2">
          Join Us and Unleash Your Potential
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Explore exciting opportunities and embark on a journey of creativity
          and innovation.
        </p>
      </div>

      <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center text-white w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-semibold text-blue-500 mb-6">
          Discover Your Next Adventure
        </h2>
        <RecruitmentList />
      </div>
    </div>
  );
};

export default Recruitments;
