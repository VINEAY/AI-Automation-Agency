"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";
import InteractiveButton from "@/components/animations/InteractiveButton";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  service?: string;
  message: string;
}

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      service: "",
      message: "",
    },
  });

  const resetForm = () => {
    form.reset();
    setFormStatus("idle");
  };

  async function onSubmit(data: FormData) {
    setFormStatus("submitting");

    try {
      // Use the new API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Handle success
      setFormStatus("success");
      setStatusMessage(result.message || "Your message has been sent successfully! We'll get back to you soon.");

      // Reset form after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);

    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
      setStatusMessage("There was an error sending your message. Please try again later.");

      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  }

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
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
                  text="Get in Touch"
                  textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
                />
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Have questions about our AI automation solutions? Ready to start transforming your business?
                Our team of experts is here to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm p-6 rounded-lg border border-violet-800/20"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">info@nexusai.com</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm p-6 rounded-lg border border-violet-800/20"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm p-6 rounded-lg border border-violet-800/20"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
                  <p className="text-gray-400">Mon-Fri: 9AM - 6PM EST</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form and map section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-900/5 blur-[150px] animate-pulse-slower" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-900/5 blur-[120px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form column */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.7 }}
            >
              <AnimatedGradientBorder
                className="bg-black/70 backdrop-blur-sm p-8 rounded-lg"
                borderWidth={1}
                glowOpacity={0.4}
                glowRadius={15}
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Send Us a Message</h2>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" id="contact-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                className="bg-violet-950/10 border-violet-800/20 text-white"
                                disabled={formStatus === "submitting"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your email"
                                className="bg-violet-950/10 border-violet-800/20 text-white"
                                disabled={formStatus === "submitting"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your phone number"
                                className="bg-violet-950/10 border-violet-800/20 text-white"
                                disabled={formStatus === "submitting"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Company (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your company"
                                className="bg-violet-950/10 border-violet-800/20 text-white"
                                disabled={formStatus === "submitting"}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Subject *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Message subject"
                              className="bg-violet-950/10 border-violet-800/20 text-white"
                              disabled={formStatus === "submitting"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Service Interest (Optional)</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={formStatus === "submitting"}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-violet-950/10 border-violet-800/20 text-white">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-900 border-violet-800/20">
                              <SelectItem value="analytics">AI-Powered Analytics</SelectItem>
                              <SelectItem value="automation">Intelligent Process Automation</SelectItem>
                              <SelectItem value="chatbots">Conversational AI</SelectItem>
                              <SelectItem value="ml">Machine Learning Implementation</SelectItem>
                              <SelectItem value="infrastructure">AI Infrastructure Setup</SelectItem>
                              <SelectItem value="custom">Custom AI Development</SelectItem>
                              <SelectItem value="consultation">General Consultation</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[150px] bg-violet-950/10 border-violet-800/20 text-white"
                              disabled={formStatus === "submitting"}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div>
                      <InteractiveButton
                        type="submit"
                        className="w-full"
                        disabled={formStatus === "submitting"}
                      >
                        {formStatus === "submitting" ? (
                          <div className="flex items-center justify-center gap-2">
                            <motion.div
                              className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Sending...</span>
                          </div>
                        ) : formStatus === "success" ? (
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Message Sent!</span>
                          </div>
                        ) : formStatus === "error" ? (
                          <div className="flex items-center justify-center gap-2">
                            <XCircle className="h-4 w-4" />
                            <span>Error! Try Again</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Send className="h-4 w-4" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </InteractiveButton>
                    </div>

                    {(formStatus === "success" || formStatus === "error") && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-md text-sm ${
                          formStatus === "success"
                            ? "bg-green-900/20 text-green-300 border border-green-800/30"
                            : "bg-red-900/20 text-red-300 border border-red-800/30"
                        }`}
                      >
                        {statusMessage}
                      </motion.div>
                    )}
                  </form>
                </Form>
              </AnimatedGradientBorder>
            </motion.div>

            {/* Map and location column */}
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0, x: 30 }}
              animate={mapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col space-y-8"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-violet-800/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0984359749426!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085c1aab2ed%3A0x48d4357697b7b297!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <AnimatedGradientBorder
                className="bg-black/70 backdrop-blur-sm p-8 rounded-lg"
                borderWidth={1}
                glowOpacity={0.4}
                glowRadius={10}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-violet-900/30 rounded-full">
                    <MapPin className="h-6 w-6 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Our Location</h3>
                    <p className="text-gray-400">123 AI Boulevard, San Francisco, CA 94103</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Our headquarters is located in the heart of San Francisco's technology district,
                    easily accessible by public transportation.
                  </p>
                  <p>
                    We also have satellite offices in New York, London, Singapore, and Toronto to
                    serve our global client base.
                  </p>
                </div>
              </AnimatedGradientBorder>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/about">
                  <AnimatedGradientBorder
                    className="bg-black/70 backdrop-blur-sm p-6 rounded-lg h-full"
                    borderWidth={1}
                    glowOpacity={0.3}
                    glowRadius={8}
                    hoverEffect={true}
                  >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <h3 className="text-lg font-semibold text-white mb-2">About Us</h3>
                      <p className="text-gray-400 text-sm mb-4">Learn more about our company and team</p>
                      <span className="text-violet-400 text-sm">View More →</span>
                    </div>
                  </AnimatedGradientBorder>
                </Link>

                <Link href="/services">
                  <AnimatedGradientBorder
                    className="bg-black/70 backdrop-blur-sm p-6 rounded-lg h-full"
                    borderWidth={1}
                    glowOpacity={0.3}
                    glowRadius={8}
                    hoverEffect={true}
                  >
                    <div className="flex flex-col items-center text-center h-full justify-center">
                      <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
                      <p className="text-gray-400 text-sm mb-4">Explore our AI automation solutions</p>
                      <span className="text-violet-400 text-sm">View More →</span>
                    </div>
                  </AnimatedGradientBorder>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden">
        <div className="absolute -top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-violet-900/5 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-300">
                Get answers to common questions about our AI automation services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "What industries do you specialize in?",
                  answer: "We have experience across multiple industries including finance, healthcare, retail, manufacturing, and logistics. Our AI solutions are adaptable to various business contexts, allowing us to deliver value regardless of industry."
                },
                {
                  question: "How long does implementation typically take?",
                  answer: "Implementation timeframes vary based on the complexity of the solution and your organization's readiness. Simple automation solutions can be deployed in 4-6 weeks, while comprehensive enterprise AI systems may take 3-6 months. We provide detailed timelines during our initial consultation."
                },
                {
                  question: "Do you offer ongoing support after implementation?",
                  answer: "Yes, we provide comprehensive support options including system monitoring, regular maintenance, performance optimization, and training. Our support packages can be tailored to your specific needs and can include 24/7 technical assistance."
                },
                {
                  question: "How do you ensure data security and privacy?",
                  answer: "We implement industry-leading security practices including end-to-end encryption, secure cloud infrastructures, access controls, and regular security audits. All our solutions are designed to comply with relevant regulations such as GDPR, HIPAA, and CCPA."
                },
                {
                  question: "What is the typical return on investment (ROI)?",
                  answer: "ROI varies by solution and organization, but our clients typically see returns within 6-12 months of implementation. We work with you to establish clear metrics for measuring success and provide regular reporting on performance against these metrics."
                }
              ].map((faq, index) => (
                <AnimatedGradientBorder
                  key={index}
                  className="bg-black/70 backdrop-blur-sm p-6 rounded-lg"
                  borderWidth={1}
                  glowOpacity={0.3}
                  glowRadius={8}
                  hoverEffect={true}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </AnimatedGradientBorder>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                Don't see your question here? Contact us directly and we'll be happy to help.
              </p>

              <Link href="#contact-form">
                <InteractiveButton size="lg">
                  Ask Your Question
                </InteractiveButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
