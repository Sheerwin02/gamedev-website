import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface Recruitment {
  id: number;
  position: string;
  description: string;
  requirement: string;
  postedDate: string;
}

interface Props {
  recruitment: Recruitment;
  onItemClicked: (recruitment: Recruitment) => void;
}

const RecruitmentItem: React.FC<Props> = ({ recruitment, onItemClicked }) => {
  if (!recruitment || !recruitment.position) {
    return null;
  }

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the click event from reaching the parent div
    setIsSaved((prev) => !prev);
    // Optionally, you can add logic to save the state to your backend
  };

  return (
    <div
      className="rounded-lg bg-white border border-gray-300 shadow-md p-4 my-4 transition-transform transform hover:scale-105 cursor-pointer hover:shadow-xl"
      onClick={() => onItemClicked(recruitment)}
    >
      <div className="flex justify-between items-center ">
        <h3 className="text-lg font-semibold text-indigo-600 mx-auto">
          {recruitment.position}
        </h3>
        {/* <button
          className={`text-${isSaved ? "pink" : "gray"}-500 hover:text-${
            isSaved ? "pink" : "gray"
          }-600 transition-colors transform hover:scale-110`}
          onClick={handleSaveToggle}
        >
          {isSaved ? <FaHeart /> : <FaRegHeart />}
        </button> */}
      </div>
      {/* <p className="text-gray-700 mb-2">{recruitment.description}</p> */}
      <div className="flex justify-between items-center">
        {/* <p className="text-gray-700 mb-2">{recruitment.requirement}</p> */}
        {/* <p className="text-gray-500">Posted Date: {recruitment.postedDate}</p> */}
      </div>
    </div>
  );
};

export default RecruitmentItem;
