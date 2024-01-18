import { useState, useEffect } from 'react';

import CountdownType from '@/types/Countdown';

const CountdownTimer = ({ initialSeconds, isSecondOnly }: CountdownType) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      return;
    }

    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1); // Fix the decrement operation
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);

  // Format the remaining time (e.g., “00:05:10” for 5 minutes and 10 seconds)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = (timeInSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((timeInSeconds % 1) * 1000)
      .toString()
      .padStart(3, '0');

    return `${minutes}:${remainingSeconds}.${milliseconds}`;
  };

  const formatTimeSecondOnly = (timeInSeconds: number) => {
    // Specify the type of timeInSeconds
    const seconds = timeInSeconds.toString().padStart(2); // Fix the quotation marks
    return `${seconds}`;
  };

  return (
    <>
      {isSecondOnly ? (
        <p className="flex items-center justify-center mx-auto text-7xl">
          {formatTimeSecondOnly(seconds)}
        </p>
      ) : (
        <p>{formatTime(seconds)}</p>
      )}
    </>
  );
};

export default CountdownTimer;
