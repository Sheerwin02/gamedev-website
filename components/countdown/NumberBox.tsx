import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-32 h-32 text-2xl md:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-[#8E93DC] w-full h-full"></div>

        <div
          className={`border-4 rounded-lg w-32 h-32 absolute top-0 left-0 ${
            flip ? "animate-pulse border-red-700" : "border-transparent"
          }`}
        ></div>

        <div className="text-5xl absolute text-[#cd1a49] z-10 font-bold font-redhat md:text-7xl font-mono ">
          {num}
        </div>

        <div className=" rounded-b-lg rounded-t-lg bg-[#242f48] w-full h-full"></div>

        <div
          className={`border-4 border-blue-700 border-b-0 absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${
            flip
              ? " animate-pulse border-blue 700 bg-[#5eb8c4]"
              : "border-transparent"
          }`}
        ></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1b3f66]"></div>
        <div className="absolute -left-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1b3f66]"></div>
      </div>
      <p className="text-lg mt-3 font-semibold text-[#cd1a49] md:text-2xl ">
        {unit}
      </p>
    </div>
  );
};
