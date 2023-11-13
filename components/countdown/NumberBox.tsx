import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex flex-col items-center mt-4 px-2 transition-transform transform hover:scale-105">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-32 h-32 text-2xl md:text-4xl mt-4 hover:shadow-lg hover:border-2 hover:border-[#cd1a49] hover:border-solid hover:border-opacity-50 hover:rounded-3xl">
        <div className="rounded-t-full bg-[#292a2d] w-full h-full"></div>

        <div
          className={`border-4 rounded-full w-32 h-32 absolute top-0 left-0 transition-transform ${
            flip ? "animate-pulse border-red-700" : "border-transparent"
          }`}
        ></div>

        <div className="text-5xl absolute text-[#61DAFB] z-10 font-bold font-redhat md:text-7xl font-mono ">
          {num}
        </div>

        <div className="rounded-b-full bg-[#1c1c1f] w-full h-full"></div>

        <div
          className={`border-4 border-[#61DAFB] border-b-0 absolute w-full h-1/2 top-0 rounded-t-full z-5 transition-transform ${
            flip
              ? "animate-pulse border-[#61DAFB] bg-[#5eb8c4]"
              : "border-transparent"
          }`}
        ></div>
        {/* Two Small Dots */}
        <div className="absolute -right-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#61DAFB]"></div>
        <div className="absolute -left-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#61DAFB]"></div>
      </div>
      <p className="text-lg mt-3 font-semibold text-[#61DAFB] md:text-2xl">
        {unit}
      </p>
    </div>
  );
};
