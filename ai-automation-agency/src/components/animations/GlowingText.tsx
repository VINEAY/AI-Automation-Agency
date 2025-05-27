"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  delay?: number;
}

export default function GlowingText({
  text,
  className,
  textClassName,
  delay = 0,
}: GlowingTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        className={cn(
          "inline-block relative gradient-text bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-400 to-purple-700",
          textClassName
        )}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{
              textShadow:
                "0 0 10px rgba(138, 43, 226, 0.5), 0 0 20px rgba(138, 43, 226, 0.3)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
}
