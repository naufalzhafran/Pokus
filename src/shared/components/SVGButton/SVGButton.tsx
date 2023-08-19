"use client";

import { ComponentPropsWithoutRef } from "react";
import { useHover } from "../../hooks";
import {
  PlayCircle,
  StopCircle,
  PlusCircle,
  MinusCircle,
  PauseCircle,
} from "../../icons";

type SVGButtonPropsType = ComponentPropsWithoutRef<"button"> & { icon: string };

const SVGButton = ({ children, icon, ...props }: SVGButtonPropsType) => {
  const { ref, isHover } = useHover();

  const renderIcon = () => {
    switch (icon) {
      case "play-circle":
        return (
          <PlayCircle
            className="w-10 h-10"
            type={isHover ? "solid" : "outline"}
          />
        );
      case "pause-circle":
        return (
          <PauseCircle
            className="w-10 h-10"
            type={isHover ? "solid" : "outline"}
          />
        );
      case "stop-circle":
        return (
          <StopCircle
            className="w-10 h-10"
            type={isHover ? "solid" : "outline"}
          />
        );
      case "plus-circle":
        return (
          <PlusCircle
            className="w-10 h-10"
            type={isHover ? "solid" : "outline"}
          />
        );
      case "minus-circle":
        return (
          <MinusCircle
            className="w-10 h-10"
            type={isHover ? "solid" : "outline"}
          />
        );

      default:
        return (
          <PlayCircle
            className="w-10 h-10"
            type={isHover ? "solid" : "outline"}
          />
        );
    }
  };

  return (
    <button {...props} ref={ref}>
      {renderIcon()}
    </button>
  );
};

export default SVGButton;
