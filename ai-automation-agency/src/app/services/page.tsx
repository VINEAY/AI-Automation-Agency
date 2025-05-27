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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Sparkles, BarChart3, Bot, Brain, Database, Workflow, Code } from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";
import InteractiveButton from "@/components/animations/InteractiveButton";

// Service categories data
const serviceCategories = [
  {
    id: "analytics",
    title: "AI-Powered Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    description: "Transform raw data into actionable insights with our advanced AI analytics solutions.",
    benefits: [
      "Predictive analytics for forecasting trends",
      "Anomaly detection to identify unusual patterns",
      "Automated reporting and visualization",
      "Customer behavior analysis",
      "Real-time monitoring dashboards"
    ],
    image: "https://cdn.pixabay.com/photo/2018/01/28/10/59/internet-3113279_1280.jpg",
    casestudy: {
      client: "Global Retail Chain",
      challenge: "Struggling to predict inventory needs across 500+ locations",
      solution: "Implemented predictive analytics system using historical data and external factors",
      results: "Reduced inventory costs by 23% while decreasing stockouts by 35%"
    }
  },
  {
    id: "automation",
    title: "Intelligent Process Automation",
    icon: <Workflow className="h-6 w-6" />,
    description: "Streamline operations and eliminate manual tasks with intelligent process automation.",
    benefits: [
      "Automated document processing and data extraction",
      "Workflow optimization and automation",
      "Robotic process automation (RPA)",
      "Business process intelligence",
      "Custom automation solutions"
    ],
    image: "https://cdn.pixabay.com/photo/2021/11/04/06/27/artificial-intelligence-6767502_1280.jpg",
    casestudy: {
      client: "Fortune 100 Financial Institution",
      challenge: "Manual document processing taking 12+ hours per application",
      solution: "Deployed intelligent document processing system with ML-based data extraction",
      results: "Processing time reduced to 10 minutes with 99.2% accuracy"
    }
  },
  {
    id: "chatbots",
    title: "Conversational AI",
    icon: <Bot className="h-6 w-6" />,
    description: "Engage customers 24/7 with intelligent AI-driven chatbots and virtual assistants.",
    benefits: [
      "Natural language understanding and processing",
      "Contextual awareness and memory",
      "Multi-channel deployment (web, mobile, messaging)",
      "Sentiment analysis and empathetic responses",
      "Seamless human handoff protocols"
    ],
    image: "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274_1280.jpg",
    casestudy: {
      client: "Leading Telecom Provider",
      challenge: "Customer support team overwhelmed with 15,000+ daily inquiries",
      solution: "Implemented advanced conversational AI with industry-specific training",
      results: "70% of inquiries handled by AI, 92% customer satisfaction score"
    }
  },
  {
    id: "ml",
    title: "Machine Learning Implementation",
    icon: <Brain className="h-6 w-6" />,
    description: "Leverage predictive modeling and pattern recognition to drive business growth.",
    benefits: [
      "Custom machine learning model development",
      "Model training and optimization",
      "Computer vision solutions",
      "Natural language processing",
      "Reinforcement learning systems"
    ],
    image: "https://cdn.pixabay.com/photo/2019/04/16/13/57/ai-4131847_1280.jpg",
    casestudy: {
      client: "Healthcare Network",
      challenge: "Needed early detection system for high-risk patients",
      solution: "Developed ML model analyzing 200+ variables from patient records",
      results: "Early intervention increased by 45%, reducing critical care costs by $4.2M"
    }
  },
  {
    id: "infrastructure",
    title: "AI Infrastructure Setup",
    icon: <Database className="h-6 w-6" />,
    description: "Build robust AI infrastructure tailored to your specific business requirements.",
    benefits: [
      "Scalable AI infrastructure architecture",
      "Cloud-based AI deployment",
      "Edge AI implementation",
      "Data pipeline development",
      "Infrastructure security and compliance"
    ],
    image: "https://cdn.pixabay.com/photo/2015/09/09/21/12/monitor-933392_1280.jpg",
    casestudy: {
      client: "Manufacturing Enterprise",
      challenge: "Legacy systems unable to support modern AI applications",
      solution: "Designed hybrid cloud/edge AI infrastructure with real-time processing",
      results: "40% reduction in downtime, 28% improvement in quality control"
    }
  },
  {
    id: "custom",
    title: "Custom AI Development",
    icon: <Code className="h-6 w-6" />,
    description: "Create bespoke AI solutions designed to address your unique business challenges.",
    benefits: [
      "End-to-end custom AI solution development",
      "Legacy system integration",
      "Specialized algorithm development",
      "AI solution optimization",
      "Continuous improvement and support"
    ],
    image: "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
    casestudy: {
      client: "International Logistics Company",
      challenge: "Complex routing optimization across global supply chain",
      solution: "Custom AI solution incorporating multiple constraints and real-time variables",
      results: "15% reduction in fuel costs, 22% improvement in delivery time accuracy"
    }
  }
];

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("analytics");

  // Ensure animations run after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Hero section */}
      <section
        ref={heroRef}
        className="relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <GlowingText
                  text="AI Solutions That"
                  textClassName="block mb-2"
                />
                <GlowingText
                  text="Transform Business"
                  delay={0.3}
                  textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
                />
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Our comprehensive suite of AI and automation services help businesses streamline operations,
                gain actionable insights, and create exceptional customer experiences. Each solution is
                tailor-made to address your specific challenges and goals.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <InteractiveButton size="lg" variant="default">
                  Explore Services
                </InteractiveButton>
                <InteractiveButton size="lg" variant="outline">
                  Schedule Consultation
                </InteractiveButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services section with tabs */}
      <section
        ref={servicesRef}
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[120px] animate-pulse-slower" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From data analytics to custom AI development, we offer end-to-end solutions that drive real business impact.
            </p>
          </motion.div>

          <Tabs
            defaultValue="analytics"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList className="bg-black/40 border border-violet-900/20 p-1 overflow-x-auto max-w-full flex-wrap">
                {serviceCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-violet-900/30 data-[state=active]:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-violet-400">{category.icon}</span>
                      <span className="hidden sm:inline">{category.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((service) => (
              <TabsContent key={service.id} value={service.id} className="outline-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-white mb-4">Key Benefits</h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-violet-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-300">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        Learn more about {service.title}
                        <motion.span
                          className="ml-1"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>

                    <div>
                      <AnimatedGradientBorder
                        className="bg-black/70 backdrop-blur-sm p-6 rounded-lg"
                        glowOpacity={0.4}
                        glowRadius={15}
                      >
                        <div className="aspect-video w-full relative overflow-hidden rounded-lg mb-6">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="border-t border-violet-800/30 pt-6">
                          <h4 className="flex items-center text-lg font-semibold text-white mb-4">
                            <Sparkles className="h-5 w-5 text-violet-400 mr-2" />
                            Case Study: {service.casestudy.client}
                          </h4>

                          <div className="space-y-2 text-sm">
                            <p className="text-gray-400">
                              <span className="text-violet-400 font-medium">Challenge:</span> {service.casestudy.challenge}
                            </p>
                            <p className="text-gray-400">
                              <span className="text-violet-400 font-medium">Solution:</span> {service.casestudy.solution}
                            </p>
                            <p className="text-gray-400">
                              <span className="text-violet-400 font-medium">Results:</span> {service.casestudy.results}
                            </p>
                          </div>
                        </div>
                      </AnimatedGradientBorder>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to action section */}
      <section
        ref={ctaRef}
        className="relative py-20 bg-gradient-to-b from-black to-violet-950/20 overflow-hidden"
      >
        <div className="absolute -bottom-1/2 right-0 w-[800px] h-[800px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a consultation with our AI experts to explore how our services can help you achieve your business goals.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <InteractiveButton size="lg" variant="default">
                Get Started Now
              </InteractiveButton>
              <Link href="/contact">
                <InteractiveButton size="lg" variant="outline">
                  Contact Us
                </InteractiveButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
