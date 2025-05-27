"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import GlowingText from "@/components/animations/GlowingText";
import InteractiveButton from "@/components/animations/InteractiveButton";
import FloatingImage from "@/components/animations/FloatingImages";

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="hero relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-black z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-black to-black z-0" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-violet-600/20 to-purple-600/20 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-[80px] animate-pulse-slower" />

      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg px-4 py-2 rounded-full text-sm text-violet-300 border border-violet-700/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Next Generation AI Automation
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <GlowingText
              text="Transform Your Business with"
              textClassName="mb-2 block"
            />
            <GlowingText
              text="AI-Powered Automation"
              delay={0.5}
              textClassName="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-600"
            />
          </h1>

          <motion.p
            className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Unlock limitless possibilities with our cutting-edge AI solutions. Streamline operations, boost productivity, and drive innovation with intelligent automation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <InteractiveButton size="lg" variant="default" className="font-medium">
              Get Started Free
            </InteractiveButton>
            <InteractiveButton size="lg" variant="outline" className="font-medium">
              Book a Demo
            </InteractiveButton>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">99%</h3>
              <p className="text-sm text-gray-400">Accuracy Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">10x</h3>
              <p className="text-sm text-gray-400">Faster Processing</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">24/7</h3>
              <p className="text-sm text-gray-400">Availability</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 relative w-full max-w-xl h-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <FloatingImage
            src="/images/ai-robot.png"
            alt="AI Robot Assistant"
            width={300}
            height={300}
            className="absolute top-0 right-0 z-30 rounded-2xl"
          />
          <FloatingImage
            src="/images/data-visualization.png"
            alt="AI Data Visualization"
            width={280}
            height={280}
            className="absolute bottom-0 left-0 z-20 rounded-2xl"
            delay={0.2}
          />
          <FloatingImage
            src="/images/digital-brain.png"
            alt="Digital AI Brain"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl"
            delay={0.4}
          />
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  );
}
