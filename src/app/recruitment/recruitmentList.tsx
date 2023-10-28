import React from "react";
import RecruitmentList from "../../../components/recruitment/RecruitmentList";

const Recruitments: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between p-24">
        RecruitmentList Health Test
      </div>
      <RecruitmentList />
    </div>
  );
};

export default Recruitments;
