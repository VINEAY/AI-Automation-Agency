"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "default" | "primary" | "outline" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  className,
  strength = 50,
  onClick,
  disabled = false,
  variant = "default",
  size = "default",
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || disabled) return;

    let bounds: DOMRect;

    const handleMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = button.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const buttonX = bounds.left + bounds.width / 2;
      const buttonY = bounds.top + bounds.height / 2;

      const deltaX = mouseX - buttonX;
      const deltaY = mouseY - buttonY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = Math.max(bounds.width, bounds.height);

      if (distance < maxDistance * 1.5) {
        gsap.to(button, {
          x: deltaX * strength / 1000,
          y: deltaY * strength / 1000,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (button) {
        button.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [strength, disabled]);

  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-violet-600 hover:bg-violet-700 text-white";
      case "outline":
        return "border border-violet-500 text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/30";
      case "secondary":
        return "bg-violet-100 hover:bg-violet-200 text-violet-900 dark:bg-violet-900/30 dark:hover:bg-violet-900/50 dark:text-violet-100";
      case "ghost":
        return "hover:bg-violet-100 hover:text-violet-900 dark:hover:bg-violet-900/30 dark:hover:text-violet-100";
      default:
        return "bg-violet-600 hover:bg-violet-700 text-white";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "text-sm px-3 py-1.5 rounded-md";
      case "lg":
        return "text-lg px-6 py-3 rounded-xl";
      default:
        return "text-base px-4 py-2 rounded-lg";
    }
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        getVariantClass(),
        getSizeClass(),
        className
      )}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
