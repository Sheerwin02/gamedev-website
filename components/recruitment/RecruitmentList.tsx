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
    useState<Recruitment | null>(null); // State to manage selected recruitment
  const router = useRouter();

  useEffect(() => {
    // Check if we're on the client side before using the router
    if (typeof window !== "undefined") {
      // Fetch data from your API
      fetch("/api/recruitment") // Updated URL to match the file path
        .then((response) => response.json())
        .then((data) => setRecruitments(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, []); // The empty dependency array ensures this effect runs only once on component mount.

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
          className="bg-white rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 shadow-md hover:shadow-xl border border-gray-300"
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
