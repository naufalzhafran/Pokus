'use client'

import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef<any>(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, []);

  return {ref, isHover: value};
};

export default useHover;
