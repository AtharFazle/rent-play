import { useState, useEffect, FC } from 'react';
// import Countdown from 'react-countdown';

import CountdownType from '@/types/Countdown';
import Countdown from 'react-countdown';

type Props = {
  toggleGameOver?: () => void;
  isGameStart?: boolean;
};

const CountdownTimer: FC<CountdownType & Props> = ({
  initialSeconds,
  isSecondOnly,
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [start,setStart] = useState(false)

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) {
      setStart((prevStart) => {
        if (!prevStart) {
          return true;
        }
        return prevStart;
      });// Update start state when countdown reaches 0
      return;
    }
    // Set up the timer
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1); // Fix the decrement operation
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, [seconds]);



  // Format the remaining time (e.g., “00:05:673” for 5 seconds and 673 milliseconds)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, '0');
    const milliseconds = Math.floor((timeInSeconds % 1) * 1000)
      .toString()
      .padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const countdownStartGame = (timeInSeconds: number) => {
    // Specify the type of timeInSeconds
    const seconds = timeInSeconds.toString().padStart(2);
    return `${seconds}`;
  };

  console.log(start)

  return (
    <>
      {isSecondOnly ? (
        <div
          className={`${seconds ? 'absolute' : 'hidden'} top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50`}
        >
          <div className="bg-black/70 w-screen h-screen" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <p className="flex items-center justify-center mx-auto text-7xl text-white">
              {countdownStartGame(seconds)}
            </p>
          </div>
        </div>
      ) : (
        <p className="flex items-center justify-center mx-auto text-7xl">
          {formatTime(seconds)}
        </p>
      )}
    </>
  );
};

export default CountdownTimer;
