import React from "react";

interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-36 h-36 relative animate-pulse-slow">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-current text-purple-400 opacity-50"
          cx="40"
          cy="40"
          r="36"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          className="stroke-current text-pink-500 transition-all duration-500 ease-in-out"
          cx="40"
          cy="40"
          r="36"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-pink-500 text-3xl font-semibold animate-float">
          {progress}%
        </div>
        <div className="text-purple-500 text-sm font-semibold mt-2 animate-fade-in">
          Progressing
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
