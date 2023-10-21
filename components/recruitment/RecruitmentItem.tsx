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
    <div className="rounded-lg bg-white border border-gray-200 shadow-md p-4 my-4 cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold mb-2 text-blue-600">
        {recruitment.position}
      </h3>
      <p className="text-gray-700 mb-2">{recruitment.description}</p>
      <p className="text-gray-700 mb-2">{recruitment.requirements}</p>
      <p className="text-gray-500">Posted Date: {recruitment.postedDate}</p>
    </div>
  );
};

export default RecruitmentItem;
