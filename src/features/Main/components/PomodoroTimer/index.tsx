"use client";

import { SVGButton } from "@/shared/components";
import usePomodoroTimer from "./usePomodoroTimer";
import { addZeroPadding } from "@/shared/functions/format";

const PomodoroTimer = () => {
  const {
    isRunning,
    minuteValue,
    secondValue,
    manipulateTimerValue,
    startTimer,
    resetTimer,
    pauseTimer,
  } = usePomodoroTimer();

  return (
    <div>
      <p className="text-center text-8xl text-bold">
        {addZeroPadding(minuteValue)}:{addZeroPadding(secondValue)}
      </p>
      <div className="flex justify-center gap-8 mt-4">
        <SVGButton
          icon={isRunning ? "pause-circle" : "play-circle"}
          onClick={() => (isRunning ? pauseTimer() : startTimer())}
        />
        <SVGButton icon="stop-circle" onClick={() => resetTimer()} />
        <SVGButton
          icon="plus-circle"
          onClick={() => manipulateTimerValue("add")}
          disabled={isRunning}
        />
        <SVGButton
          icon="minus-circle"
          onClick={() => manipulateTimerValue("substract")}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};

export default PomodoroTimer;
