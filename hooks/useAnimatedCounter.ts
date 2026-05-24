"use client";

import { useEffect, useState } from "react";

export function useAnimatedCounter(
  end: number,
  duration = 2000,
  startOnView = true,
  isInView = true
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView && startOnView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView, startOnView]);

  return count;
}
