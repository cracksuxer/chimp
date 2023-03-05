import { useState, useEffect } from "react";

interface TimerProps {
  resetTimer: boolean;
  handleResetTimerComplete: () => void;
}

const Timer: React.FC<TimerProps> = ({
  resetTimer,
  handleResetTimerComplete,
}) => {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMilliseconds((milliseconds) => milliseconds + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor(time % 1000);

    return {
      minutes: minutes.toString(),
      seconds: seconds.toString().padStart(2, "0"),
      milliseconds: milliseconds.toString().padStart(3, "0"),
    };
  };

  useEffect(() => {
    if (resetTimer) {
      setMilliseconds(0);
      handleResetTimerComplete();
    }
  }, [resetTimer, handleResetTimerComplete]);

  return (
    <div className="bg-white w-44 ml-auto">
      <p className="font-digits font-semibold text-2xl">
        {formatTime(milliseconds).minutes} : {formatTime(milliseconds).seconds}{" "}
        : {formatTime(milliseconds).milliseconds}
      </p>
    </div>
  );
};

export default Timer;
