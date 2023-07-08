"use client";

import { ComponentPropsWithoutRef } from "react";
import useHover from "../hooks/useHover";
import PlayCircle from "../icons/PlayCircle";
import StopCircle from "../icons/StopCircle";
import PlusCircle from "../icons/PlusCircle";
import MinusCircle from "../icons/MinusCircle";

const SVGButton = ({
  children,
  icon,
  ...props
}: ComponentPropsWithoutRef<"button"> & { icon: string }) => {
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
