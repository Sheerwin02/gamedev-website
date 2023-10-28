import React from "react";
import RoadMapMonth from "./RoadMapMonth";
import ProgressBar from "./ProgressBar";
import BackToTopButton from "./BackToTopButton";

const RoadMapSection: React.FC = () => {
  // Define data for January and February
  const januaryData = [
    {
      title: "Task 1 (January)",
      description: "Description for Task 1 in January",
      difficulty: "Easy",
      duration: "2 hours",
      imageUrl: "https://s1.zerochan.net/Reisalin.Stout.600.2727514.jpg",
    },
    {
      title: "Task 2 (January)",
      description: "Description for Task 2 in January",
      difficulty: "Hard",
      duration: "4 hours",
      imageUrl:
        "https://www.destructoid.com/wp-content/uploads/2023/01/AtelierRyza3_Art_011823.jpg",
    },
    // Add more items for January if needed
  ];

  const februaryData = [
    {
      title: "Task 1 (February)",
      description: "Description for Task 1 in February",
      difficulty: "Medium",
      duration: "3 hours",
      imageUrl:
        "https://th.bing.com/th/id/OIP.8xhFudlzBtxqwP6JsqKpEgHaKZ?pid=ImgDet&rs=1",
    },
    {
      title: "Task 2 (February)",
      description: "Description for Task 2 in February",
      difficulty: "Hard",
      duration: "5 hours",
      imageUrl: "https://i.redd.it/r0k5w1kinbua1.png",
    },
    // Add more items for February if needed
  ];

  return (
    <div className="flex-1 p-4 overflow-y-auto relative">
      {/* Position the ProgressBar at the top right corner */}
      <div className="absolute top-0 right-0 m-4">
        <ProgressBar progress={10} />
      </div>

      <div className="w-full max-w-screen-xl">
        <RoadMapMonth month="January" data={januaryData} />
        <RoadMapMonth month="February" data={februaryData} />
        {/* Add more months as needed */}
      </div>

      <BackToTopButton />
    </div>
  );
};

export default RoadMapSection;
