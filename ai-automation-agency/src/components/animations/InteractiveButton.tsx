"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function InteractiveButton({
  children,
  onClick,
  className,
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
}: InteractiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Generate particles on hover
  const particles = Array.from({ length: 15 }).map((_, i) => {
    const angle = (i / 15) * Math.PI * 2;
    const x = Math.cos(angle) * 50;
    const y = Math.sin(angle) * 50;
    const duration = 0.6 + Math.random() * 0.3;
    const size = 5 + Math.random() * 5;

    return { id: i, x, y, duration, size };
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowParticles(false);
  };

  const handleClick = () => {
    if (onClick && !disabled) {
      setShowParticles(true);
      onClick();

      // Reset particles after animation
      setTimeout(() => {
        setShowParticles(false);
      }, 1000);
    }
  };

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden py-3 px-6 rounded-lg font-medium",
        variant === "default" && "bg-violet-600 text-white hover:bg-violet-700",
        variant === "destructive" && "bg-red-600 text-white hover:bg-red-700",
        variant === "outline" && "border border-violet-500 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/30",
        variant === "secondary" && "bg-violet-100 text-violet-900 hover:bg-violet-200 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 dark:text-violet-100",
        variant === "ghost" && "hover:bg-violet-100 hover:text-violet-900 dark:hover:bg-violet-900/30 dark:hover:text-violet-100",
        variant === "link" && "text-violet-600 underline-offset-4 hover:underline",
        size === "default" && "h-10 text-sm",
        size === "sm" && "h-8 text-xs px-3",
        size === "lg" && "h-12 text-base px-8",
        size === "icon" && "h-10 w-10 p-0",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      type={type}
    >
      {/* Ripple effect */}
      {isHovered && (
        <motion.div
          className="absolute rounded-full bg-white/20 pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
          initial={{ width: 0, height: 0, x: 0, y: 0 }}
          animate={{
            width: 150,
            height: 150,
            x: -75,
            y: -75
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Particles on click */}
      <AnimatePresence>
        {showParticles && (
          <>
            {particles.map((particle) => (
              <motion.span
                key={particle.id}
                className="absolute rounded-full bg-white pointer-events-none"
                style={{
                  left: mousePosition.x,
                  top: mousePosition.y,
                  width: particle.size,
                  height: particle.size,
                }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: 0
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: particle.duration,
                  ease: "easeOut"
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      {children}
    </motion.button>
  );
}
