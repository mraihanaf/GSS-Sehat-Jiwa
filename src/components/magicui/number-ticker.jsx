"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className
}) {
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { 
    once: false, 
    margin: "0px 0px -10% 0px"
  });

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
      motionValue.set(direction === "down" ? value : 0);
    }
  }, [isInView, motionValue, direction, value]);

  useEffect(() => {
    if (shouldAnimate) {
      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [shouldAnimate, motionValue, delay, value, direction]);

  useEffect(() =>
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Number(latest.toFixed(0)));
      }
    }), [springValue]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        className
      )}
      ref={ref}
    />
  );
}