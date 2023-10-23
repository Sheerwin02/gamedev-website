import React from "react";
import RecruitmentList from "../../../components/recruitment/RecruitmentList";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Recruitments: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen text-white">
      <div className="py-12 text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">Join Our Team</h1>
        <p className="text-xl mb-8">Discover Exciting Career Opportunities</p>
      </div>

      {/* Parallax section */}
      <ParallaxProvider>
        <Parallax speed={-5}>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center text-white mt-12">
            <h2 className="text-3xl font-semibold text-blue-500 mb-4">
              Current Openings
            </h2>
            <RecruitmentList />
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default Recruitments;
