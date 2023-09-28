import React from "react";
import { NumberBox } from "./NumberBox";

interface TimeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: TimeProps) => {
  const daysValue = String(days).padStart(2, "0");
  const hoursValue = String(hours).padStart(2, "0");
  const minutesValue = String(minutes).padStart(2, "0");
  const secondsValue = String(seconds).padStart(2, "0");

  const daysFlip = Number(days) > 0;
  const hoursFlip = Number(hours) > 0;
  const minutesFlip = Number(minutes) > 0;
  const secondsFlip = Number(seconds) > 0;

  return (
    <div className="mt-2 md:mt-20 rounded-xl">
      <div className="grid grid-cols-2 gap-4 py-6 px-10 md:flex md:items-center md:justify-between md:mt-2 rounded-xl md:px-6 md:py-8">
        <NumberBox num={daysValue} unit="Days" flip={daysFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={hoursValue} unit="Hours" flip={hoursFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={minutesValue} unit="Minutes" flip={minutesFlip} />
        <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50">
          :
        </span>
        <NumberBox num={secondsValue} unit="Seconds" flip={secondsFlip} />
      </div>
    </div>
  );
};
