import { useAnimate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { interpolateColor } from "../utils/colorInterpolation";

export function useColorTransition(colors: string[], duration: number = 3) {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const progress = useMotionValue(0);

  useEffect(() => {
    const animateColors = async () => {
      await animate(progress, 1, { duration, ease: "linear" });
      progress.set(0);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    animateColors();
  }, [currentIndex, colors, animate, duration, progress]);

  const interpolatedColor = useTransform(progress, (latest) => {
    const currentColor = colors[currentIndex];
    const nextColor = colors[(currentIndex + 1) % colors.length];
    return interpolateColor(currentColor, nextColor, latest);
  });

  return { scope, backgroundColor: interpolatedColor };
}
