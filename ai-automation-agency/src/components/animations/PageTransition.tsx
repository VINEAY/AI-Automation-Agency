"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  // Only animate after the first mount to prevent transition on initial page load
  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  // Variants for page transitions
  const pageVariants = {
    initial: {
      opacity: 0,
      y: isFirstMount ? 0 : 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// More advanced transition with overlay effect
export function AdvancedPageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Page content */}
        <motion.div
          key={pathname}
          initial={isFirstMount ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Overlay animation */}
      <AnimatePresence mode="wait">
        {!isFirstMount && (
          <motion.div
            key={`overlay-${pathname}`}
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: [0, 1, 1, 0],
              originX: ["0%", "0%", "100%", "100%"],
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.4, 0.6, 1]
            }}
            className="fixed inset-0 z-[9999] bg-violet-600/90 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
}
