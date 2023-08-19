"use client";

import { useInterval } from "@/shared/hooks";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const usePomodoroTimer = () => {
  const [secondValue, setSecondValue] = useState(0);
  const [minuteValue, setMinuteValue] = useState(25);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timerTarget, setTimerTarget] = useState("");

  const MAX_TIMER = 60;

  const manipulateTimerValue = (type: "add" | "substract") => {
    if (type === "add" && minuteValue !== MAX_TIMER) {
      setMinuteValue((prevMinuteValue) => prevMinuteValue + 1);
    } else if (type === "substract" && minuteValue !== 0) {
      setMinuteValue((prevMinuteValue) => prevMinuteValue - 1);
    }
  };

  const timerIntervalCallback = () => {
    let currentTick = dayjs(timerTarget).diff(dayjs(), "second");
    if (currentTick > 0) {
      const minutes = Math.floor(currentTick / 60);
      const seconds = currentTick - minutes * 60;
      setMinuteValue(minutes);
      setSecondValue(seconds);
    } else {
      setIsRunning(false);
    }
  };

  useInterval(
    () => {
      timerIntervalCallback();
    },
    isRunning ? 1000 : null
  );

  const startTimer = () => {
    const timerTargetObject = dayjs()
      .add(minuteValue, "minute")
      .add(secondValue + 1, "second");
    setTimerTarget(timerTargetObject.format());
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondValue(0);
    setMinuteValue(25);
  };

  return {
    minuteValue,
    secondValue,
    isRunning,
    pauseTimer,
    startTimer,
    resetTimer,
    manipulateTimerValue,
  };
};

export default usePomodoroTimer;
