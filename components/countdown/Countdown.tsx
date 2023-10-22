// TODO: Move to components/Countdown.tsx
import React, { useEffect, useState } from "react";
import { TimerContainer } from "./TimerContainer";

const Countdown = () => {
  // TODO: Sheerwin - Change to expected launch date
  const targetLaunchDate = new Date("2024-01-01T00:00:00");

  // Calculate the remaining time until the target launch
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeRemaining = targetLaunchDate.getTime() - currentTime.getTime();

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <TimerContainer
        days={timeRemaining.days}
        hours={timeRemaining.hours}
        minutes={timeRemaining.minutes}
        seconds={timeRemaining.seconds}
      />
    </div>
  );
};

export default Countdown;
