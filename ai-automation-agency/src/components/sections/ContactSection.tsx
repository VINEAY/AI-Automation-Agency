"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import InteractiveButton from "@/components/animations/InteractiveButton";
import { Send, CheckCircle2, XCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [submitted, setSubmitted] = useState<boolean | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // For static site deployment, simulate form submission
    console.log("Form submitted with values:", values);

    // Show loading state for 1.5 seconds
    setTimeout(() => {
      // In a real implementation, you would use a service like Formspree, Netlify Forms, or EmailJS
      // For example with EmailJS: emailjs.send("service_id", "template_id", values);

      setSubmitted(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(null);
        form.reset();
      }, 5000);
    }, 1500);
  }

  function onError() {
    setSubmitted(false);
  }

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-indigo-900/5 blur-[100px]" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-violet-400/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business with AI automation? Reach out to our team for a personalized consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-400"
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 5,
                    }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </motion.svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-400"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 5,
                    }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </motion.svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">info@nexusai.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-400"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 5,
                    }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </motion.svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">123 AI Boulevard, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github", "facebook"].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-violet-900/20 flex items-center justify-center hover:bg-violet-800/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5 text-violet-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-indigo-900/20 backdrop-blur-sm rounded-2xl transform rotate-3 scale-105 opacity-50" />
            <div className="relative bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-violet-800/30 shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit, onError)} className="space-y-6">
                  <motion.div
                    custom={0}
                    variants={inputVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-violet-950/10 border-violet-800/20 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    custom={1}
                    variants={inputVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              {...field}
                              className="bg-violet-950/10 border-violet-800/20 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    custom={2}
                    variants={inputVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Company (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company"
                              {...field}
                              className="bg-violet-950/10 border-violet-800/20 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    custom={3}
                    variants={inputVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Service Interested In</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-violet-950/10 border-violet-800/20 text-white">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-gray-900 border-violet-800/20 text-white">
                              <SelectItem value="analytics">AI-Powered Analytics</SelectItem>
                              <SelectItem value="automation">Intelligent Process Automation</SelectItem>
                              <SelectItem value="chatbots">Conversational AI</SelectItem>
                              <SelectItem value="ml">Machine Learning Implementation</SelectItem>
                              <SelectItem value="infrastructure">AI Infrastructure Setup</SelectItem>
                              <SelectItem value="custom">Custom AI Development</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    custom={4}
                    variants={inputVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[120px] bg-violet-950/10 border-violet-800/20 text-white placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div
                    custom={5}
                    variants={inputVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <InteractiveButton
                      type="submit"
                      className="w-full"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <motion.div
                            className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </div>
                      ) : submitted === true ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Message Sent!</span>
                        </div>
                      ) : submitted === false ? (
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
                  </motion.div>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
