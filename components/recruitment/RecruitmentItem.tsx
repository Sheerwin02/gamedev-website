import React from "react";

interface Recruitment {
  id: number;
  position: string;
  description: string;
  requirements: string;
  postedDate: string;
}

interface Props {
  recruitment: Recruitment;
}

const RecruitmentItem: React.FC<Props> = ({ recruitment }) => {
  return (
    <div className="rounded-lg bg-gray-800 border border-gray-600 shadow-md p-4 my-4 cursor-pointer hover:bg-gray-700 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 text-blue-400">
        {recruitment.position}
      </h3>
      <p className="text-gray-300 mb-2">{recruitment.description}</p>
      <p className="text-gray-300 mb-2">{recruitment.requirements}</p>
      <p className="text-gray-400">Posted Date: {recruitment.postedDate}</p>
    </div>
  );
};

export default RecruitmentItem;
