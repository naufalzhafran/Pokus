"use client";

import React, { useState, useEffect } from "react";
import {
  MinusIcon,
  PlayIcon,
  PlusIcon,
  ReloadIcon,
  StopIcon,
} from "@radix-ui/react-icons";

import { Button } from "./ui/button";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      document.title = `[${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}] - Pokus`;
    } else {
      document.title = `Pokus - Simple & Light Pomodoro Timer`;
    }
  }, [isRunning, minutes, seconds]);

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const handleStartStop = () => setIsRunning((prev) => !prev);
  const handleReset = () => {
    setMinutes(25);
    setSeconds(0);
  };

  const handlePlus = () => setMinutes((prev) => (prev < 99 ? prev + 1 : prev));
  const handleMin = () => setMinutes((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-fit h-fit">
        <div
          className={`transition-opacity duration-100 flex justify-center mb-4 gap-2 ${isRunning ? "opacity-0" : ""
            }`}
        >
          <Button onClick={handlePlus}>
            <PlusIcon />
          </Button>
          <Button onClick={handleReset}>
            <ReloadIcon />
          </Button>
          <Button onClick={handleMin}>
            <MinusIcon />
          </Button>
        </div>

        <div
          className={`transition font-semibold flex flex-col ${isRunning ? "-translate-y-8  text-[9rem] leading-none" : "text-9xl"
            }`}
        >
          <span className="text-center">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-center">
            {String(seconds).padStart(2, "0")}
          </span>
        </div>

        <div className="flex justify-center mt-4">
          <Button size="lg" className="" onClick={handleStartStop}>
            {isRunning ? <StopIcon width="2rem" height="2rem" /> : <PlayIcon />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
