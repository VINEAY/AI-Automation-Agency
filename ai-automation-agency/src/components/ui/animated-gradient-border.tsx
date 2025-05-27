"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  animationDuration?: number;
  borderWidth?: number;
  glowOpacity?: number;
  glowRadius?: number;
  hoverEffect?: boolean;
  gradientColors?: string[];
}

export default function AnimatedGradientBorder({
  children,
  className,
  containerClassName,
  borderClassName,
  animationDuration = 8,
  borderWidth = 1,
  glowOpacity = 0.5,
  glowRadius = 15,
  hoverEffect = true,
  gradientColors = ["#8B5CF6", "#D946EF", "#8B5CF6"],
}: AnimatedGradientBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative rounded-lg",
        containerClassName
      )}
      ref={containerRef}
    >
      {/* Animated gradient border */}
      <motion.div
        className={cn(
          "absolute -inset-[1px] rounded-lg z-0 opacity-70",
          borderClassName,
          hoverEffect && "group-hover:opacity-100"
        )}
        initial={{ opacity: hoverEffect ? 0.4 : 0.7 }}
        animate={{
          background: [
            `linear-gradient(0deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
            `linear-gradient(90deg, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[0]})`,
            `linear-gradient(180deg, ${gradientColors[2]}, ${gradientColors[0]}, ${gradientColors[1]})`,
            `linear-gradient(270deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
          ],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        style={{
          filter: `blur(${glowRadius}px)`,
          opacity: glowOpacity,
        }}
      />

      {/* Border container */}
      <motion.div
        className={cn(
          "absolute -inset-[1px] rounded-lg z-0 overflow-hidden",
          borderClassName,
          hoverEffect && "group-hover:opacity-100"
        )}
        initial={{ opacity: hoverEffect ? 0.7 : 1 }}
        animate={{
          background: [
            `linear-gradient(0deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
            `linear-gradient(90deg, ${gradientColors[1]}, ${gradientColors[2]}, ${gradientColors[0]})`,
            `linear-gradient(180deg, ${gradientColors[2]}, ${gradientColors[0]}, ${gradientColors[1]})`,
            `linear-gradient(270deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
          ],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      {/* Inner content */}
      <div
        className={cn(
          "relative z-10 rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
