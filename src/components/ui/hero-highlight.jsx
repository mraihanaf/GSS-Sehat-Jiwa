"use client";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Highlight = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        backgroundSize: "100% 100%",
        color: "rgb(255, 255, 255)", // White text
        transition: { duration: 2, ease: "linear" }
      });
    } else {
      controls.start({
        backgroundSize: "0% 100%",
        color: "inherit", // Original text color
        transition: { duration: 0 }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{
        backgroundSize: "0% 100%",
        color: "inherit",
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-red-400 to-red-500`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};