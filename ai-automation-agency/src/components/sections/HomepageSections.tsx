"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import {
  ChevronsDown,
  ArrowRight,
  Star,
  Shield,
  Cpu,
  BarChart,
  Bot,
  BrainCircuit,
  Lightbulb,
  RefreshCw,
  Clock,
  Code,
  Users,
  Zap
} from "lucide-react";
import AnimatedImage from "@/components/animations/AnimatedImage";
import { cn } from "@/lib/utils";
import InteractiveButton from "@/components/animations/InteractiveButton";
import GlowingText from "@/components/animations/GlowingText";

export default function HomepageSections() {
  return (
    <>
      <PortfolioShowcase />
      <FeaturesShowcase />
      <AboutShowcase />
      <BlogShowcase />
      <CTASection />
    </>
  );
}

// Portfolio showcase
function PortfolioShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const portfolioItems = [
    {
      id: 1,
      title: "Retail Inventory Optimization",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1470&auto=format&fit=crop",
      description: "AI-powered inventory forecasting system with 99% accuracy",
    },
    {
      id: 2,
      title: "Financial Document Processing",
      category: "Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      description: "Reduced processing time from 12 hours to 10 minutes",
    },
    {
      id: 3,
      title: "Customer Support AI Assistant",
      category: "Chatbots",
      image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1470&auto=format&fit=crop",
      description: "Improved customer satisfaction from 78% to 92%",
    },
  ];

  return (
    <section
      ref={ref}
      className="portfolio-section py-24 bg-gradient-to-b from-black to-violet-950/5 relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-900/5 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Our Recent Work
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful AI implementations across industries
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: index * 0.2 }
                }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-violet-900/10 to-black backdrop-blur-sm rounded-xl overflow-hidden border border-violet-800/20"
            >
              <Link href={`/portfolio/${item.id}`}>
                <div className="h-48 relative">
                  <AnimatedImage
                    src={item.image}
                    alt={item.title}
                    fillContainer
                    animation="3d"
                    speed="slow"
                    containerClassName="h-full"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <span className="px-2 py-1 bg-violet-900/70 rounded-md text-xs text-white">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-violet-400 text-sm font-medium">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/portfolio">
            <InteractiveButton variant="outline">
              View All Case Studies
            </InteractiveButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Features showcase
function FeaturesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const features = [
    {
      icon: <BrainCircuit className="h-8 w-8 text-violet-400" />,
      title: "AI-Powered Analytics",
      description: "Transform raw data into actionable insights with our advanced machine learning algorithms."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-violet-400" />,
      title: "Intelligent Automation",
      description: "Streamline repetitive tasks and processes with our smart automation solutions."
    },
    {
      icon: <Bot className="h-8 w-8 text-violet-400" />,
      title: "Conversational AI",
      description: "Create natural, engaging conversations between your business and customers."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-violet-400" />,
      title: "Machine Learning",
      description: "Implement predictive models that learn and improve with each interaction."
    },
    {
      icon: <Cpu className="h-8 w-8 text-violet-400" />,
      title: "AI Infrastructure",
      description: "Build scalable, robust foundations for your AI initiatives."
    },
    {
      icon: <Code className="h-8 w-8 text-violet-400" />,
      title: "Custom AI Development",
      description: "Tailored solutions designed to address your unique business challenges."
    }
  ];

  return (
    <section
      ref={ref}
      className="services-section py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Our Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to propel your business forward
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-br from-violet-900/10 to-black/50 backdrop-blur-sm p-8 rounded-xl border border-violet-800/20 hover:border-violet-600/30 transition-colors"
            >
              <div className="p-3 bg-violet-900/20 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <InteractiveButton variant="default">
              Explore All Services
            </InteractiveButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

// About showcase
function AboutShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Global Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <section
      ref={ref}
      className="about-section py-24 bg-gradient-to-b from-black to-violet-950/5 relative overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              About NexusAI
            </h2>

            <p className="text-lg text-gray-300 mb-6">
              At NexusAI, we're dedicated to pushing the boundaries of what's possible with artificial intelligence. Our team of experts combines deep technical knowledge with industry expertise to deliver transformative AI solutions.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              Founded in 2020, we've quickly established ourselves as leaders in the AI automation space, helping businesses across industries leverage the power of AI to solve complex problems and drive growth.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <InteractiveButton variant="outline">
                Learn More About Us
              </InteractiveButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-indigo-900/20 backdrop-blur-sm transform rotate-3 scale-105 rounded-2xl opacity-50" />
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=1470&auto=format&fit=crop"
                alt="AI Team at Work"
                width={600}
                height={400}
                animation="3d"
                objectFit="cover"
                priority
                containerClassName="rounded-2xl overflow-hidden"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Blog showcase
function BlogShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  const blogPosts = [
    {
      slug: "ai-automation-trends-2025",
      title: "10 AI Automation Trends to Watch in 2025",
      excerpt: "Explore the upcoming trends that will shape the future of AI automation and how businesses can prepare.",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1470&auto=format&fit=crop",
      category: "Trends"
    },
    {
      slug: "ethical-ai-implementation-guidelines",
      title: "Ethical Guidelines for AI Implementation",
      excerpt: "Understanding the ethical considerations and best practices for responsible AI adoption.",
      date: "April 10, 2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
      category: "Best Practices"
    },
    {
      slug: "case-study-healthcare-predictive-analytics",
      title: "Case Study: Predictive Analytics in Healthcare",
      excerpt: "How one healthcare provider reduced critical care admissions by 28% using our AI solutions.",
      date: "April 5, 2025",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
      category: "Case Study"
    }
  ];

  return (
    <section
      ref={ref}
      className="blog-section py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay updated with our latest articles on AI trends, best practices, and success stories
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-gradient-to-br from-violet-900/10 to-black/50 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-800/20"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 relative">
                  <AnimatedImage
                    src={post.image}
                    alt={post.title}
                    fillContainer
                    animation="zoom"
                    containerClassName="h-full"
                    className="transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <span className="px-2 py-1 bg-violet-900/70 rounded-md text-xs text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-violet-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <span className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <InteractiveButton variant="outline">
              View All Articles
            </InteractiveButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="cta-section py-24 relative overflow-hidden bg-gradient-to-b from-black to-violet-950/5"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-black/80 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <GlowingText
            text="Ready to Transform Your Business?"
            textClassName="text-3xl md:text-4xl font-bold mb-6"
          />

          <p className="text-lg text-gray-300 mb-8">
            Schedule a consultation with our AI experts to discover how our automation solutions can drive efficiency, innovation, and growth for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <InteractiveButton size="lg" variant="default">
                Contact Us Now
              </InteractiveButton>
            </Link>
            <Link href="/services">
              <InteractiveButton size="lg" variant="outline">
                Explore Services
              </InteractiveButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
