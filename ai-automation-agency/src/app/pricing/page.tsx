"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Check, HelpCircle, X, ChevronRight } from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";
import InteractiveButton from "@/components/animations/InteractiveButton";
import { cn } from "@/lib/utils";

// Pricing plans data
const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses just beginning with AI automation.",
    price: {
      monthly: 2499,
      yearly: 24990,
    },
    features: [
      {
        text: "AI-powered chatbot implementation",
        included: true,
        tooltip: "Custom chatbot trained on your business data to handle customer inquiries"
      },
      {
        text: "Basic data analytics dashboard",
        included: true,
        tooltip: "Visual reports of key business metrics with basic AI insights"
      },
      {
        text: "Single workflow automation",
        included: true,
        tooltip: "Automate one critical business process of your choice"
      },
      {
        text: "Email support",
        included: true,
        tooltip: "Business hours email support with 24-hour response time"
      },
      {
        text: "Monthly strategy call",
        included: true,
        tooltip: "30-minute call with an AI strategist to optimize your implementation"
      },
      {
        text: "Advanced customization",
        included: false,
        tooltip: "Tailored AI solutions designed for your specific business needs"
      },
      {
        text: "Multi-channel integration",
        included: false,
        tooltip: "Extend AI capabilities across multiple business platforms and channels"
      },
      {
        text: "Dedicated AI specialist",
        included: false,
        tooltip: "A dedicated specialist who understands your business goals and challenges"
      }
    ],
    popularFeature: "AI Chatbot Included",
    recommended: false,
    ctaText: "Get Started"
  },
  {
    id: "growth",
    name: "Growth",
    description: "Ideal for growing businesses ready to expand their AI capabilities.",
    price: {
      monthly: 4999,
      yearly: 49990,
    },
    features: [
      {
        text: "AI-powered chatbot implementation",
        included: true,
        tooltip: "Advanced chatbot with multi-intent recognition and personalization features"
      },
      {
        text: "Comprehensive analytics platform",
        included: true,
        tooltip: "In-depth analytics with predictive insights and custom reporting"
      },
      {
        text: "Up to 3 workflow automations",
        included: true,
        tooltip: "Automate three critical business processes of your choice"
      },
      {
        text: "Priority email & chat support",
        included: true,
        tooltip: "Fast-track support during business hours with 8-hour response time"
      },
      {
        text: "Bi-weekly strategy calls",
        included: true,
        tooltip: "60-minute calls with an AI strategist to optimize your implementation"
      },
      {
        text: "Advanced customization",
        included: true,
        tooltip: "Tailored AI solutions designed for your specific business needs"
      },
      {
        text: "Multi-channel integration",
        included: true,
        tooltip: "Extend AI capabilities across multiple business platforms and channels"
      },
      {
        text: "Dedicated AI specialist",
        included: false,
        tooltip: "A dedicated specialist who understands your business goals and challenges"
      }
    ],
    popularFeature: "Most Popular Choice",
    recommended: true,
    ctaText: "Choose Growth"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Comprehensive solutions for large organizations with complex AI needs.",
    price: {
      monthly: 9999,
      yearly: 99990,
    },
    features: [
      {
        text: "AI-powered chatbot implementation",
        included: true,
        tooltip: "Enterprise-grade conversational AI with omnichannel support"
      },
      {
        text: "Enterprise analytics suite",
        included: true,
        tooltip: "Advanced analytics with custom AI models and predictive modeling"
      },
      {
        text: "Unlimited workflow automations",
        included: true,
        tooltip: "Automate any number of business processes with priority implementation"
      },
      {
        text: "24/7 priority support",
        included: true,
        tooltip: "Round-the-clock support with 2-hour response time for critical issues"
      },
      {
        text: "Weekly strategy sessions",
        included: true,
        tooltip: "90-minute sessions with senior AI strategists to drive business value"
      },
      {
        text: "Advanced customization",
        included: true,
        tooltip: "Fully customized AI solutions with ongoing optimization"
      },
      {
        text: "Multi-channel integration",
        included: true,
        tooltip: "Seamless integration across all business platforms with custom connectors"
      },
      {
        text: "Dedicated AI specialist team",
        included: true,
        tooltip: "A team of specialists dedicated to your account, including a solution architect"
      }
    ],
    popularFeature: "Full Enterprise Support",
    recommended: false,
    ctaText: "Contact Sales"
  }
];

// Additional services
const additionalServices = [
  {
    id: "custom-ai",
    name: "Custom AI Model Development",
    description: "Custom machine learning models designed specifically for your business needs",
    price: "Custom",
  },
  {
    id: "ai-consultation",
    name: "AI Strategy Consultation",
    description: "Expert guidance on implementing AI solutions in your business",
    price: "From $2,500",
  },
  {
    id: "data-migration",
    name: "Data Integration & Migration",
    description: "Seamless migration of your existing data into AI-ready formats",
    price: "From $5,000",
  },
  {
    id: "team-training",
    name: "Team Training & Enablement",
    description: "Comprehensive training for your team to effectively use AI tools",
    price: "From $3,500",
  },
];

// FAQs about pricing
const pricingFAQs = [
  {
    question: "How do you determine pricing for AI automation services?",
    answer: "Our pricing is based on the complexity of implementation, number of integrations, volume of data processing, and level of customization required. We offer transparent pricing tiers to accommodate businesses of all sizes, from startups to enterprises."
  },
  {
    question: "Do you offer custom pricing for unique requirements?",
    answer: "Yes, we understand that each business has unique needs. If our standard pricing plans don't align with your requirements, we offer custom pricing tailored to your specific business objectives and technical needs. Contact our sales team for a personalized quote."
  },
  {
    question: "Is there a contract commitment?",
    answer: "Our standard plans are available with monthly or annual billing. Annual billing offers a 15-20% discount compared to monthly rates. Enterprise plans typically have a minimum 12-month commitment to ensure proper implementation and ROI measurement."
  },
  {
    question: "Are there any hidden costs?",
    answer: "No, our pricing is transparent with no hidden fees. Your subscription includes everything specified in your plan. If additional services or customizations are required beyond your plan's scope, we'll provide clear pricing before any work begins."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade your plan at any time, and the new features will be available immediately. Downgrades can be processed at the end of your current billing cycle. Our team will help ensure a smooth transition between plans."
  },
  {
    question: "Do you offer a trial period?",
    answer: "We offer a complimentary consultation and needs assessment to all prospective clients. For certain services, we can provide limited-scope pilot implementations to demonstrate value before full deployment."
  },
];

export default function PricingPage() {
  const [mounted, setMounted] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  // Ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [addonsRef, addonsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Format price to display as $X,XXX
  const formatPrice = (price: number) => {
    return `$${Math.floor(price / 100).toLocaleString()}`;
  };

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
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <GlowingText
                  text="Transparent Pricing"
                  textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
                />
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the plan that best fits your business needs. All plans include implementation,
                support, and continuous improvement of your AI automation solutions.
              </p>

              <div className="flex justify-center mb-8">
                <div className="bg-black/40 p-1 rounded-full border border-violet-800/20">
                  <div className="flex items-center">
                    <button
                      className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                        billingPeriod === "monthly"
                          ? "bg-violet-900/40 text-white shadow-sm"
                          : "text-gray-400 hover:text-gray-300"
                      )}
                      onClick={() => setBillingPeriod("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      className={cn(
                        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                        billingPeriod === "yearly"
                          ? "bg-violet-900/40 text-white shadow-sm"
                          : "text-gray-400 hover:text-gray-300"
                      )}
                      onClick={() => setBillingPeriod("yearly")}
                    >
                      Yearly <span className="text-violet-400 ml-1">Save 15-20%</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section
        ref={pricingRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-900/5 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cn(
                  "relative",
                  plan.recommended ? "md:-mt-4 md:mb-4" : ""
                )}
              >
                <AnimatedGradientBorder
                  className={cn(
                    "bg-black/70 backdrop-blur-sm rounded-lg h-full flex flex-col",
                    plan.recommended
                      ? "md:pb-4 md:pt-8"
                      : "py-6"
                  )}
                  borderWidth={plan.recommended ? 2 : 1}
                  glowOpacity={plan.recommended ? 0.5 : 0.3}
                  glowRadius={plan.recommended ? 15 : 10}
                  gradientColors={
                    plan.recommended
                      ? ["#8B5CF6", "#D946EF", "#8B5CF6"]
                      : undefined
                  }
                >
                  {plan.recommended && (
                    <div className="absolute top-0 inset-x-0 transform -translate-y-1/2 flex justify-center">
                      <span className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="px-6 py-4">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-sm h-10">{plan.description}</p>
                    </div>

                    <div className="text-center mb-6">
                      <div className="flex items-end justify-center">
                        <span className="text-3xl md:text-4xl font-bold text-white">
                          {formatPrice(billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly)}
                        </span>
                        <span className="text-gray-400 ml-2 mb-1">
                          /{billingPeriod === "monthly" ? "mo" : "yr"}
                        </span>
                      </div>
                      {billingPeriod === "yearly" && (
                        <p className="text-violet-400 text-sm mt-2">
                          {billingPeriod === "yearly" ? "Billed annually" : "Billed monthly"}
                        </p>
                      )}
                    </div>

                    <div className="mb-8">
                      <div className="px-3 py-1 bg-violet-900/20 rounded-full text-xs text-center text-violet-300 mb-6">
                        {plan.popularFeature}
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            {feature.included ? (
                              <Check className="h-5 w-5 text-violet-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="flex ml-3 items-center">
                              <span className={cn(
                                "text-sm",
                                feature.included ? "text-gray-300" : "text-gray-500"
                              )}>
                                {feature.text}
                              </span>
                              <div
                                className="ml-2 text-gray-500 cursor-help"
                                title={feature.tooltip}
                              >
                                <HelpCircle className="h-4 w-4" />
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-6 pt-2 pb-6 mt-auto">
                    <Link href="/contact">
                      <InteractiveButton
                        variant={plan.recommended ? "default" : "outline"}
                        className="w-full justify-center"
                        size="lg"
                      >
                        {plan.ctaText}
                      </InteractiveButton>
                    </Link>
                  </div>
                </AnimatedGradientBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services section */}
      <section
        ref={addonsRef}
        className="relative py-16 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={addonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Additional Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Enhance your AI capabilities with these specialized services.
              Contact us for custom quotes based on your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AnimatedGradientBorder
                  className="bg-black/70 backdrop-blur-sm p-6 rounded-lg h-full"
                  borderWidth={1}
                  glowOpacity={0.3}
                  glowRadius={10}
                  hoverEffect={true}
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <p className="text-violet-400 font-medium">{service.price}</p>
                  </div>
                </AnimatedGradientBorder>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section
        ref={faqRef}
        className="relative py-16 bg-black overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {pricingFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <AnimatedGradientBorder
                    className="bg-black/70 backdrop-blur-sm p-6 rounded-lg"
                    borderWidth={1}
                    glowOpacity={0.2}
                    glowRadius={8}
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </AnimatedGradientBorder>
                </motion.div>
              ))}
            </div>
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
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get in touch with our team for a personalized consultation and see how our
                AI automation solutions can drive efficiency and growth for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <InteractiveButton variant="default" size="lg">
                    Request a Demo
                  </InteractiveButton>
                </Link>
                <Link href="/contact">
                  <InteractiveButton variant="outline" size="lg">
                    Contact Sales
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
