"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ChevronRight, ExternalLink, Building, Users, Clock, TrendingUp } from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";
import InteractiveButton from "@/components/animations/InteractiveButton";
import { portfolioCases, categories, CaseStudy } from "@/lib/constants/portfolio-data";

export default function PortfolioPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Ensure animations run after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [portfolioRef, portfolioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!mounted) {
    return null;
  }

  const filteredCases = selectedCategory === "all"
    ? portfolioCases
    : portfolioCases.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <GlowingText
                  text="Our AI Success Stories"
                  textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
                />
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Explore our portfolio of successful AI implementations across industries.
                Each case study demonstrates how our solutions solve real business challenges
                and deliver measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section
        ref={statsRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Building className="h-8 w-8 text-violet-400" />, stat: "50+", label: "Enterprises Served" },
              { icon: <Users className="h-8 w-8 text-violet-400" />, stat: "500K+", label: "Users Impacted" },
              { icon: <Clock className="h-8 w-8 text-violet-400" />, stat: "250K+", label: "Hours Saved" },
              { icon: <TrendingUp className="h-8 w-8 text-violet-400" />, stat: "$75M+", label: "Client ROI Generated" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-violet-900/20 to-indigo-900/20 backdrop-blur-sm p-8 rounded-lg border border-violet-800/20">
                  {item.icon}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mt-4">{item.stat}</h3>
                  <p className="text-gray-400 text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio filter section */}
      <section
        ref={portfolioRef}
        className="relative py-20 bg-gradient-to-b from-black to-black overflow-hidden"
      >
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />
        <div className="absolute -bottom-1/2 left-0 w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[100px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Case Studies
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Browse our portfolio by solution category
            </p>
          </motion.div>

          <div className="flex justify-center mb-12 overflow-x-auto py-2">
            <div className="inline-flex bg-black border border-violet-900/20 rounded-lg p-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                    selectedCategory === category.id
                    ? "bg-violet-900/30 text-white"
                    : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
              >
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden">
        <div className="absolute -top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help you achieve similar results for your business.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <InteractiveButton size="lg" variant="default">
                  Contact Us
                </InteractiveButton>
              </Link>
              <Link href="/services">
                <InteractiveButton size="lg" variant="outline">
                  Explore Services
                </InteractiveButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedGradientBorder
      className="bg-black/80 backdrop-blur-sm rounded-lg h-full"
      borderWidth={1}
      glowOpacity={0.4}
      glowRadius={10}
      hoverEffect={true}
    >
      <Card className="h-full bg-transparent border-none flex flex-col">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out"
              style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex justify-between items-center">
                <span className="px-2 py-1 bg-violet-900/70 rounded-md text-xs text-white">
                  {caseStudy.industry}
                </span>
                <span className="px-2 py-1 bg-black/50 rounded-md text-xs text-gray-300">
                  {caseStudy.duration}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent
          className="flex-grow flex flex-col p-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
          <p className="text-violet-400 text-sm mb-4">{caseStudy.client}</p>

          <div className="mb-4 flex-grow">
            <div className="space-y-1 text-sm mb-2">
              <p className="text-gray-300 line-clamp-3">{caseStudy.challenge}</p>
            </div>

            <h4 className="text-white font-medium mt-4 mb-2">Key Results:</h4>
            <ul className="space-y-1 text-sm">
              {caseStudy.results.slice(0, 2).map((result: string, index: number) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <span className="text-violet-400 font-bold">•</span> {result}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="border-t border-violet-900/20 p-6 pt-4">
          <Link
            href={`/portfolio/${caseStudy.id}`}
            className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors text-sm"
          >
            View Full Case Study
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </CardFooter>
      </Card>
    </AnimatedGradientBorder>
  );
}
