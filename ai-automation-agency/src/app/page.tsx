"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import HomepageSections from "@/components/sections/HomepageSections";

// ScrollDownIndicator component
function ScrollDownIndicator() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 20]);

  return (
    <motion.div
      ref={scrollRef}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      style={{ opacity, y }}
    >
      <motion.div
        className="flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <p className="text-sm text-violet-400 mb-2 font-medium">Scroll Down</p>
        <div className="w-8 h-12 border-2 border-violet-400/50 rounded-full flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-violet-400 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // This ensures any client-side only code runs after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow">
        {/* Full page scrolling experience */}
        <ScrollDownIndicator />

        {/* Main hero section */}
        <HeroSection />

        {/* Showcase sections from different pages */}
        <HomepageSections />

        {/* Core home page sections */}
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
}
