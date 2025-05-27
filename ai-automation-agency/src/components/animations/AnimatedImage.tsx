"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  animation?: "float" | "bounce" | "pulse" | "rotate" | "zoom" | "reveal" | "slide" | "3d";
  animationDelay?: number;
  speed?: "slow" | "medium" | "fast";
  hoverEffect?: boolean;
  priority?: boolean;
  quality?: number;
  fillContainer?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none";
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
}

export default function AnimatedImage({
  src,
  alt,
  width = 500,
  height = 500,
  className = "",
  containerClassName = "",
  animation = "float",
  animationDelay = 0,
  speed = "medium",
  hoverEffect = true,
  priority = false,
  quality = 85,
  fillContainer = false,
  objectFit = "cover",
  onMouseEnter,
  onMouseLeave,
  onClick,
}: AnimatedImageProps) {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth loading transition
  const [isLoaded, setIsLoaded] = useState(false);

  // For 3D animation
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Duration based on speed
  const getDuration = () => {
    switch (speed) {
      case "slow": return { duration: 3 };
      case "fast": return { duration: 1 };
      default: return { duration: 2 };
    }
  };

  // Animation variants
  const getAnimationProps = () => {
    switch (animation) {
      case "float":
        return {
          animate: {
            y: [0, -15, 0],
            transition: {
              ...getDuration(),
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: animationDelay,
            },
          },
        };
      case "bounce":
        return {
          animate: {
            y: [0, -10, 0],
            transition: {
              ...getDuration(),
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
              delay: animationDelay,
            },
          },
        };
      case "pulse":
        return {
          animate: {
            scale: [1, 1.03, 1],
            transition: {
              ...getDuration(),
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: animationDelay,
            },
          },
        };
      case "rotate":
        return {
          animate: {
            rotate: [0, 5, 0, -5, 0],
            transition: {
              ...getDuration(),
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: animationDelay,
            },
          },
        };
      case "zoom":
        return {
          initial: { scale: 0.9, opacity: 0 },
          animate: {
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: animationDelay,
            },
          },
        };
      case "reveal":
        return {
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: animationDelay,
            },
          },
        };
      case "slide":
        return {
          initial: { x: -50, opacity: 0 },
          animate: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: animationDelay,
            },
          },
        };
      case "3d":
        return {
          // 3d effect is handled via mousemove listener
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              duration: 0.8,
              delay: animationDelay,
            },
          },
          style: {
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          },
        };
      default:
        return {
          initial: {},
          animate: {},
        };
    }
  };

  // Handle 3D animation
  useEffect(() => {
    if (animation !== "3d" || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      setRotateX((mouseY / (rect.height / 2)) * -10);
      setRotateY((mouseX / (rect.width / 2)) * 10);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    containerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [animation, containerRef]);

  // Base hover effect
  const hoverVariants = hoverEffect
    ? {
        whileHover: {
          scale: 1.05,
          transition: { duration: 0.3 },
        },
      }
    : {};

  const imageContainerClasses = cn(
    "overflow-hidden",
    animation === "3d" ? "transition-transform duration-200" : "",
    containerClassName
  );

  const imageClasses = cn(
    "transition-all duration-500",
    isLoaded ? "opacity-100" : "opacity-0",
    className
  );

  return (
    <motion.div
      ref={containerRef}
      className={imageContainerClasses}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...getAnimationProps()}
      {...hoverVariants}
    >
      {fillContainer ? (
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            quality={quality}
            priority={priority}
            className={cn(imageClasses, `object-${objectFit}`)}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={quality}
          priority={priority}
          className={imageClasses}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </motion.div>
  );
}
