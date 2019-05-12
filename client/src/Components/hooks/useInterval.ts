import React, { useEffect, useRef } from "react";

type callbackType = () => void;

export const useInterval = (callback: callbackType, delay: number | null) => {
  const savedCallback = useRef<callbackType | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current!();
    };
    if (delay != null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
