import React from "react";
import { Recruitment } from "./RecruitmentList";

interface Props {
  recruitment: Recruitment;
  isSelected: boolean;
  onItemClick: (id: number) => void;
}

const RecruitmentItem: React.FC<Props> = ({
  recruitment,
  isSelected,
  onItemClick,
}) => {
  const { id, position, description, requirements, postedDate } = recruitment;

  return (
    <div
      className={`p-4 border border-gray-300 rounded-lg mb-4 cursor-pointer hover:shadow-md ${
        isSelected ? "bg-blue-100" : ""
      }`}
      onClick={() => onItemClick(id)}
    >
      <h2 className="text-xl font-semibold text-blue-500">{position}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-gray-700 mt-2">
        <span className="font-semibold">Requirements:</span>{" "}
        {requirements.join(", ")}
      </p>
      <p className="text-gray-500 mt-2">Posted: {postedDate}</p>
    </div>
  );
};

export default RecruitmentItem;
