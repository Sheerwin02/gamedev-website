import React, { useEffect, useState } from "react";
import RecruitmentItem from "./RecruitmentItem";
import { useRouter } from "next/navigation";
import RecruitmentDetailsPopup from "./RecruitmentDetailsPopUp";

interface Recruitment {
  id: number;
  position: string;
  description: string;
  requirements: string;
  postedDate: string;
}

const RecruitmentList: React.FC = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[] | undefined>(
    []
  );
  const [selectedRecruitment, setSelectedRecruitment] =
    useState<Recruitment | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/recruitment")
        .then((response) => response.json())
        .then((data) => setRecruitments(data))
        .catch((error) => console.error("Error fetching data:", error));
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
      {recruitments?.map((recruitment) => (
        <div
          key={recruitment.id}
          className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 shadow-md hover:shadow-xl border border-gray-600 text-white"
          onClick={() => openDetailsPopup(recruitment)}
        >
          <RecruitmentItem recruitment={recruitment} />
        </div>
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
