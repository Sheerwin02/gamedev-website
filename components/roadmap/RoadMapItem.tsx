import React, { useState } from "react";

interface RoadMapItemProps {
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  imageUrl: string;
  isExpanded: boolean;
  onClick: () => void;
}

const RoadMapItem: React.FC<RoadMapItemProps> = ({
  title,
  description,
  difficulty,
  duration,
  imageUrl,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      className={`mb-6 p-4 rounded-lg border border-purple-300 overflow-hidden transition-transform transform mx-auto cursor-pointer focus:outline-none ${
        isExpanded ? "shadow-lg scale-105" : ""
      }`}
      style={{
        maxWidth: "600px",
        transition: "all 0.3s",
      }}
      onClick={onClick}
      tabIndex={0}
    >
      <div
        className={`relative mb-4 flex justify-center items-center ${
          isExpanded ? "aspect-w-16 aspect-h-9" : ""
        }`}
      >
        {isExpanded && (
          <img
            src={imageUrl}
            alt={title}
            className="object-cover rounded-lg shadow-lg"
          />
        )}
      </div>
      <div className="text-xl font-semibold mb-3 text-purple-900">{title}</div>
      {isExpanded && (
        <div>
          <p className="text-gray-600 mb-3 text-lg">{description}</p>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <p>
              <span className="font-semibold text-blue-500">Difficulty:</span>{" "}
              {difficulty}
            </p>
            <p>
              <span className="font-semibold text-blue-500">Duration:</span>{" "}
              {duration}
            </p>
          </div>
          {/* Add more information here */}
        </div>
      )}
    </div>
  );
};

export default RoadMapItem;
