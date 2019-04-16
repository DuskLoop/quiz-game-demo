import React, { useState, useEffect } from "react";

export const useTimer = () => {
  const [timeMs, setTimeMs] = useState(0);
  const [counting, setCounting] = useState(false);

  const start = () => {
    setCounting(true);
  };

  const pause = () => {
    setCounting(false);
  };

  const stop = () => {
    setCounting(false);
    setTimeMs(0);
  };

  let intervalId: NodeJS.Timeout;
  useEffect(() => {
    intervalId = setInterval(() => {
      if (counting) {
        setTimeMs(timeMs + 100);
      }
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [counting, timeMs]);

  return { timeMs, start, pause, stop };
};
