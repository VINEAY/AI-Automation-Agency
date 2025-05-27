"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronLeft,
  CalendarDays,
  Building,
  UserCheck,
  Clock,
  ArrowRight,
  Quote,
  ExternalLink
} from "lucide-react";
import { CaseStudy } from "@/lib/constants/portfolio-data";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";
import InteractiveButton from "@/components/animations/InteractiveButton";

// Add complementary images for each case study
const caseStudyImages = {
  1: [
    "https://cdn.pixabay.com/photo/2018/03/15/16/11/background-3228704_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/05/28/14/38/ux-788002_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/05/04/10/30/team-3373638_1280.jpg",
  ],
  2: [
    "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/10/18/10/30/banner-2864150_1280.jpg",
  ],
  3: [
    "https://cdn.pixabay.com/photo/2018/03/01/09/33/business-3190209_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/11/39/computer-1869236_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg",
  ],
  4: [
    "https://cdn.pixabay.com/photo/2016/11/09/15/27/dna-1811955_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/06/06/16/02/technology-4256272_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg",
  ],
  5: [
    "https://cdn.pixabay.com/photo/2021/09/09/00/26/control-panel-6608601_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/10/16/11/industry-4092583_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/25/11/43/bitcoin-2679692_1280.jpg",
  ],
  6: [
    "https://cdn.pixabay.com/photo/2020/06/07/02/17/logistics-5269481_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/10/24/11/15/truck-2884155_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg",
  ],
};

// Additional implementation details for each case study
const caseStudyDetails = {
  1: {
    approach: "Our approach combined historical sales data analysis with external factors like seasonal trends, local events, and weather patterns using advanced machine learning algorithms.",
    implementation: "We implemented a three-phase rollout: data integration and cleansing, algorithm training and testing, and deployment with real-time monitoring.",
    challenges: [
      "Integrating disparate data sources across 500+ locations",
      "Developing algorithms that adjusted for seasonal fluctuations and regional differences",
      "Training store managers on using the new AI-powered forecasting tool"
    ],
    keyFeatures: [
      "Real-time inventory monitoring and alerts",
      "Predictive demand forecasting with 92% accuracy",
      "Automated reordering suggestions based on lead times",
      "Custom dashboards for regional managers"
    ]
  },
  2: {
    approach: "We applied computer vision and natural language processing technologies to automatically extract, validate, and process information from loan applications and supporting documents.",
    implementation: "The implementation included document classification, data extraction, validation against existing systems, and workflow integration.",
    challenges: [
      "Processing diverse document types with varying formats and quality",
      "Ensuring data extraction accuracy for compliance purposes",
      "Integrating with legacy banking systems",
      "Training the system to recognize handwritten information"
    ],
    keyFeatures: [
      "Multi-format document recognition and processing",
      "Intelligent data extraction with validation rules",
      "Automated compliance checks against regulatory requirements",
      "Real-time processing status dashboard"
    ]
  },
  3: {
    approach: "We designed a conversational AI system with deep understanding of telecommunications services, products, and common customer issues.",
    implementation: "The implementation involved intent recognition training, knowledge base development, dialog flow design, and seamless human handoff protocols.",
    challenges: [
      "Building a system that understood technical telecom terminology",
      "Developing conversation flows that could handle complex troubleshooting",
      "Ensuring seamless transition to human agents when needed",
      "Training the AI to recognize customer sentiment and respond appropriately"
    ],
    keyFeatures: [
      "Natural language understanding with telecom-specific training",
      "Contextual awareness to maintain conversation history",
      "Integrated troubleshooting workflows for common issues",
      "Sentiment analysis for prioritizing escalations"
    ]
  },
  4: {
    approach: "Our approach involved developing a machine learning model that analyzed over 200 variables from patient records to identify early warning signs of health deterioration.",
    implementation: "The implementation included secure data integration, model training and validation, clinical workflow integration, and continuous learning systems.",
    challenges: [
      "Ensuring compliance with healthcare privacy regulations",
      "Integrating data from disparate electronic health record systems",
      "Developing models that provided explainable predictions for clinicians",
      "Creating alerts that avoided alarm fatigue"
    ],
    keyFeatures: [
      "Risk stratification for patient populations",
      "Early warning system for individual patients",
      "Clinical decision support with intervention recommendations",
      "Outcomes tracking for continuous improvement"
    ]
  },
  5: {
    approach: "We developed a computer vision system that could detect defects invisible to the human eye by monitoring the assembly process in real-time.",
    implementation: "The implementation included camera installation at critical inspection points, edge computing for real-time analysis, and integration with manufacturing execution systems.",
    challenges: [
      "Detecting microscopic defects at production line speeds",
      "Training the system to recognize new defect types",
      "Processing high-resolution images with minimal latency",
      "Integrating with existing manufacturing systems"
    ],
    keyFeatures: [
      "Multi-camera inspection system with 360° coverage",
      "Deep learning models trained on defect libraries",
      "Real-time feedback to production equipment",
      "Defect tracking and trend analysis dashboard"
    ]
  },
  6: {
    approach: "We built a comprehensive AI-powered supply chain optimization platform that incorporated real-time data feeds and dynamic routing algorithms.",
    implementation: "The implementation involved developing a centralized data platform, building predictive models, creating optimization algorithms, and deploying mobile tracking applications.",
    challenges: [
      "Processing data from thousands of moving vehicles in real-time",
      "Accounting for complex constraints like customs procedures and local regulations",
      "Developing algorithms that could quickly re-route in response to disruptions",
      "Creating an intuitive interface for logistics planners"
    ],
    keyFeatures: [
      "Real-time fleet tracking and management",
      "Dynamic route optimization with multi-factor constraints",
      "Predictive delay monitoring and proactive rerouting",
      "Supply chain visualization with bottleneck detection"
    ]
  }
};

// Similar case studies for recommendations
const similarCaseStudies = {
  1: [2, 5], // Retail inventory optimization -> Financial automation, Manufacturing
  2: [1, 6], // Financial automation -> Retail, Supply chain
  3: [4, 6], // Customer service AI -> Healthcare analytics, Supply chain
  4: [3, 5], // Healthcare analytics -> Customer service AI, Manufacturing
  5: [1, 4], // Manufacturing -> Retail, Healthcare
  6: [2, 5]  // Supply chain -> Financial, Manufacturing
};

interface PortfolioDetailProps {
  caseStudy: CaseStudy;
}

export default function PortfolioDetail({ caseStudy }: PortfolioDetailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [relatedRef, relatedInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!mounted) {
    return null;
  }

  // Access additional details and images using the case study ID
  const details = caseStudyDetails[caseStudy.id as keyof typeof caseStudyDetails];
  const images = caseStudyImages[caseStudy.id as keyof typeof caseStudyImages] || [];
  const similarIds = similarCaseStudies[caseStudy.id as keyof typeof similarCaseStudies] || [];

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative py-16 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Portfolio
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/10 backdrop-blur-sm p-2 rounded-md inline-block mb-4">
                <span className="text-violet-400">{caseStudy.industry}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {caseStudy.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-violet-400" />
                  <span>{caseStudy.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-violet-400" />
                  <span>{caseStudy.duration}</span>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6">
                {caseStudy.challenge}
              </p>

              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-violet-900/20 hover:bg-violet-900/30 rounded-full text-sm text-gray-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <AnimatedGradientBorder
                className="bg-black/70 backdrop-blur-sm rounded-lg overflow-hidden"
                borderWidth={1}
                glowOpacity={0.4}
                glowRadius={15}
              >
                <div className="aspect-video w-full relative">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview section */}
      <section
        ref={overviewRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={overviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
                Project Overview
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
                  <p className="text-gray-300 mb-6">{caseStudy.challenge}</p>

                  <h3 className="text-xl font-semibold text-white mb-4">The Solution</h3>
                  <p className="text-gray-300">{caseStudy.solution}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
                  <ul className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-900/30 flex items-center justify-center">
                          <Check className="h-3 w-3 text-violet-400" />
                        </div>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach and Implementation section */}
      <section
        ref={approachRef}
        className="relative py-16 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
                Our Approach
              </h2>

              <p className="text-gray-300 mb-8">{details.approach}</p>

              <h3 className="text-xl font-semibold text-white mb-4">Implementation Strategy</h3>
              <p className="text-gray-300 mb-8">{details.implementation}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Challenges</h3>
                  <ul className="space-y-4">
                    {details.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-900/30 flex items-center justify-center">
                          <Check className="h-3 w-3 text-violet-400" />
                        </div>
                        <span className="text-gray-300">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Solution Features</h3>
                  <ul className="space-y-4">
                    {details.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-violet-900/30 flex items-center justify-center">
                          <Check className="h-3 w-3 text-violet-400" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results visualization section */}
      <section
        ref={resultsRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
                Impact & Results
              </h2>

              <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
                Our solution delivered measurable improvements across multiple key performance indicators.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.map((result, index) => {
                  // Extract percentage or numbers from the result
                  const match = result.match(/(\d+(?:\.\d+)?)%|(\$\d+(?:\.\d+)?[MK])/);
                  const value = match ? match[0] : "";
                  const text = result.replace(value, "").trim();

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={resultsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm p-6 rounded-lg border border-violet-800/20"
                    >
                      <div className="text-3xl font-bold text-violet-400 mb-2">{value}</div>
                      <p className="text-gray-300 text-sm">{text}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image gallery section */}
      <section
        ref={galleryRef}
        className="relative py-16 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600 text-center">
                Project Gallery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={galleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <AnimatedGradientBorder
                      className="bg-black/70 backdrop-blur-sm rounded-lg overflow-hidden"
                      borderWidth={1}
                      glowOpacity={0.3}
                      glowRadius={10}
                      hoverEffect={true}
                    >
                      <div className="aspect-video w-full relative">
                        <Image
                          src={image}
                          alt={`${caseStudy.title} - Image ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </AnimatedGradientBorder>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section
        ref={testimonialsRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <AnimatedGradientBorder
                className="bg-black/70 backdrop-blur-sm p-10 rounded-lg"
                borderWidth={1}
                glowOpacity={0.4}
                glowRadius={15}
              >
                <div className="text-center mb-8">
                  <Quote className="h-12 w-12 mx-auto text-violet-400 opacity-50" />
                </div>

                <p className="text-xl text-gray-300 italic mb-8 text-center">
                  "{caseStudy.testimonial.quote}"
                </p>

                <div className="flex flex-col items-center">
                  <p className="font-semibold text-white mb-1">{caseStudy.testimonial.author}</p>
                  <p className="text-violet-400 text-sm">{caseStudy.testimonial.title}, {caseStudy.client}</p>
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-16 bg-gradient-to-b from-black to-black overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready for Similar Results?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how our {caseStudy.category} solutions can help your organization achieve similar outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <InteractiveButton variant="default" size="lg">
                    Contact Us
                  </InteractiveButton>
                </Link>
                <Link href={`/services#${caseStudy.category}`}>
                  <InteractiveButton variant="outline" size="lg">
                    Explore This Service
                  </InteractiveButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
