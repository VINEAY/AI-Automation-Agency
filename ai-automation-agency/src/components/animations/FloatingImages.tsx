"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
}

export default function FloatingImage({
  src,
  alt,
  width = 400,
  height = 400,
  className,
  delay = 0,
  x = 0,
  y = 0,
  rotationIntensity = 10,
  floatIntensity = 30,
}: FloatingImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -rotationIntensity;
    const rotateY = (mouseX / (rect.width / 2)) * rotationIntensity;

    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, [rotationIntensity]);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }, []);

  useEffect(() => {
    const currentRef = containerRef.current;

    document.addEventListener("mousemove", handleMouseMove);
    currentRef?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      currentRef?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative transition-transform duration-500 ease-out shadow-2xl rounded-2xl overflow-hidden",
        className
      )}
      initial={{ opacity: 0, x, y }}
      animate={{
        opacity: 1,
        x,
        y,
        transition: {
          delay,
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(138, 43, 226, 0.5)",
        transition: { duration: 0.3 },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 via-transparent to-purple-900/40 z-10"></div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
      />
    </motion.div>
  );
}

export function FloatingImagesGroup({ children }: { children: React.ReactNode }) {
  return <div className="relative w-full h-full">{children}</div>;
}
