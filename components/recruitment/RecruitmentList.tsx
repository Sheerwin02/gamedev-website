import React, { useState } from "react";
import RecruitmentItem from "./RecruitmentItem";

export interface Recruitment {
  id: number;
  position: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

interface Props {
  recruitments: Recruitment[] | undefined; // Make the array nullable
}

const RecruitmentList: React.FC<Props> = ({ recruitments }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  // Check if recruitments is defined before mapping over it
  return (
    <div>
      {recruitments?.map((recruitment) => (
        <RecruitmentItem
          key={recruitment.id}
          recruitment={recruitment}
          isSelected={recruitment.id === selectedId}
          onItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};

export default RecruitmentList;
