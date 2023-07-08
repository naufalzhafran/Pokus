import Image from "next/image";

import SVGButton from "@/shared/components/SVGButton";
import PlayCircle from "@/shared/icons/PlayCircle";

const PomodoroTimer = () => {
  return (
    <div>
      <p className="text-center text-8xl text-bold">25:00</p>
      <div className="flex justify-center gap-8 mt-4">
        <SVGButton icon="play-circle" />
        <SVGButton icon="stop-circle" />
        <SVGButton icon="plus-circle" />
        <SVGButton icon="minus-circle" />
      </div>
    </div>
  );
};

export default PomodoroTimer;
