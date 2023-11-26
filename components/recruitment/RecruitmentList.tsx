import React, { useEffect, useState } from "react";
import RecruitmentItem from "./RecruitmentItem";
import RecruitmentDetailsPopup from "./RecruitmentDetailsPopUp";

interface Recruitment {
  id: number;
  position: string;
  description: string;
  requirements: string;
  postedDate: string;
}

const RecruitmentList: React.FC = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[]>([]);
  const [selectedRecruitment, setSelectedRecruitment] =
    useState<Recruitment | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/recruitment");
        const data = await response.json();
        setRecruitments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typeof window !== "undefined") {
      fetchData();
    }
  }, []);

  const openDetailsPopup = (recruitment: Recruitment) => {
    setSelectedRecruitment(recruitment);
  };

  const closeDetailsPopup = () => {
    setSelectedRecruitment(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recruitments.map((recruitment) => (
        <RecruitmentItem
          key={recruitment.id}
          recruitment={recruitment}
          onItemClicked={openDetailsPopup}
        />
      ))}
      {selectedRecruitment && (
        <RecruitmentDetailsPopup
          recruitment={selectedRecruitment}
          onClose={closeDetailsPopup}
        />
      )}
    </div>
  );
};

export default RecruitmentList;
