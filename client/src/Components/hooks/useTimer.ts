import React, { useState, useEffect } from "react";
import { useInterval } from "./useInterval";
import { useReducer } from "react";

interface IState {
  timeMs: number;
  delay: number | null;
}

type Action =
  | { type: "tick" }
  | { type: "stop" }
  | { type: "start"; delay: number }
  | { type: "pause" };

const reducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case "tick":
      return { ...state, timeMs: state.timeMs + (state.delay || 0) };
    case "stop":
      return { timeMs: 0, delay: null };
    case "start":
      return { ...state, delay: action.delay };
    case "pause":
      return { ...state, delay: null };
    default:
      throw new Error();
  }
};

export const useTimer = (delay: number) => {
  const [state, dispatch] = useReducer(reducer, { timeMs: 0, delay });

  const start = () => {
    dispatch({ type: "start", delay });
  };

  const pause = () => {
    dispatch({ type: "pause" });
  };

  const stop = () => {
    dispatch({ type: "stop" });
  };

  useInterval(() => {
    dispatch({ type: "tick" });
  }, state.delay);

  return { timeMs: state.timeMs, start, pause, stop };
};
