"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Cpu,
  BarChart3,
  Cog,
  Bot,
  Brain,
  Workflow,
  Braces,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
  borderClass: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "Transform raw data into actionable insights with our advanced AI analytics solutions.",
    icon: <BarChart3 className="h-12 w-12" />,
    bgClass: "from-blue-500/10 to-violet-600/5",
    borderClass: "border-blue-500/20",
  },
  {
    id: 2,
    title: "Intelligent Process Automation",
    description: "Streamline operations and eliminate manual tasks with intelligent process automation.",
    icon: <Workflow className="h-12 w-12" />,
    bgClass: "from-purple-500/10 to-pink-600/5",
    borderClass: "border-purple-500/20",
  },
  {
    id: 3,
    title: "Conversational AI",
    description: "Engage customers 24/7 with intelligent AI-driven chatbots and virtual assistants.",
    icon: <Bot className="h-12 w-12" />,
    bgClass: "from-teal-500/10 to-green-600/5",
    borderClass: "border-teal-500/20",
  },
  {
    id: 4,
    title: "Machine Learning Implementation",
    description: "Leverage predictive modeling and pattern recognition to drive business growth.",
    icon: <Brain className="h-12 w-12" />,
    bgClass: "from-orange-500/10 to-red-600/5",
    borderClass: "border-orange-500/20",
  },
  {
    id: 5,
    title: "AI Infrastructure Setup",
    description: "Build robust AI infrastructure tailored to your specific business requirements.",
    icon: <Cpu className="h-12 w-12" />,
    bgClass: "from-indigo-500/10 to-blue-600/5",
    borderClass: "border-indigo-500/20",
  },
  {
    id: 6,
    title: "Custom AI Development",
    description: "Create bespoke AI solutions designed to address your unique business challenges.",
    icon: <Braces className="h-12 w-12" />,
    bgClass: "from-pink-500/10 to-rose-600/5",
    borderClass: "border-pink-500/20",
  },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-black via-black to-violet-950/10 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-violet-900/5 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[100px] animate-pulse-slower" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
            Our AI Automation Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Leverage the power of artificial intelligence to transform your business operations and gain a competitive edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              inView={inView}
              isActive={activeCard === service.id}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  inView: boolean;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ServiceCard({
  service,
  index,
  inView,
  isActive,
  onMouseEnter,
  onMouseLeave
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: "easeOut"
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Card className={cn(
        "relative overflow-hidden h-full border transition-all duration-300 bg-gradient-to-br",
        service.bgClass,
        service.borderClass,
        isActive ? "shadow-lg shadow-violet-500/10 scale-[1.02]" : "shadow-md"
      )}>
        {/* Glowing edge effect on hover */}
        {isActive && (
          <motion.div
            className="absolute inset-0 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-700/10" />

            {/* Moving particles */}
            <motion.div
              className="absolute top-0 left-0 w-2 h-2 rounded-full bg-violet-400/60 blur-[2px]"
              animate={{
                x: ["0%", "100%", "100%", "0%", "0%"],
                y: ["0%", "0%", "100%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute top-0 right-0 w-2 h-2 rounded-full bg-indigo-400/60 blur-[2px]"
              animate={{
                x: ["0%", "0%", "-100%", "-100%", "0%"],
                y: ["0%", "100%", "100%", "0%", "0%"],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                delay: 1,
              }}
            />
          </motion.div>
        )}

        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-900/30 to-indigo-900/10 text-white">
              {service.icon}
            </div>
            <Sparkles className={cn(
              "w-6 h-6 text-violet-300 transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-0"
            )} />
          </div>
          <CardTitle className="text-xl mt-4 font-bold text-white">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-gray-300 text-base">
            {service.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <div className={cn(
            "flex items-center text-violet-400 transition-all duration-300 text-sm font-medium",
            isActive ? "translate-x-2" : ""
          )}>
            Learn more
            <motion.span
              initial={{ x: 0 }}
              animate={isActive ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-1"
            >
              →
            </motion.span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
