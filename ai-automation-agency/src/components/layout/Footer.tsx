"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import InteractiveButton from "@/components/animations/InteractiveButton";
import { ArrowRight, Check, ChevronRight, Mail } from "lucide-react";

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your API
      console.log("Subscribed with email:", email);

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "AI Analytics", href: "/services/analytics" },
        { label: "Process Automation", href: "/services/automation" },
        { label: "Conversational AI", href: "/services/chatbots" },
        { label: "Custom Solutions", href: "/services/custom" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Tutorials", href: "/tutorials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
  ];

  return (
    <footer
      ref={ref}
      className="bg-gradient-to-b from-black to-violet-950/20 pt-24 overflow-hidden relative"
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-violet-800/5 to-transparent rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-gray-800">
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-bold text-white">
                  Nexus<span className="text-violet-400">AI</span>
                </span>
              </Link>

              <p className="text-gray-400 mb-6 max-w-md">
                Empowering businesses with intelligent automation solutions. We help organizations streamline operations, boost productivity, and drive innovation through AI-powered technologies.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-8 max-w-md">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-violet-950/10 border-violet-800/20 text-white h-12 placeholder:text-gray-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={submitted}
                  />
                </div>
                <InteractiveButton
                  type="submit"
                  className="h-12 px-6"
                  disabled={submitted}
                >
                  {submitted ? (
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Subscribed</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Subscribe</span>
                    </div>
                  )}
                </InteractiveButton>
              </form>

              <div className="flex space-x-4">
                {["twitter", "linkedin", "facebook", "github"].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-violet-900/20 flex items-center justify-center text-violet-400 hover:bg-violet-800/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <span className="sr-only">{social}</span>
                    <svg
                      className="w-5 h-5"
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
            </motion.div>
          </div>

          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * (sectionIndex + 1) }}
            >
              <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    delay={0.05 * (linkIndex + 1) + 0.1 * sectionIndex}
                    inView={inView}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} NexusAI. All rights reserved.</p>

          {/* Floating gradient orb */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/5 rounded-full blur-[60px]" />
          </motion.div>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-violet-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-violet-400 transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-violet-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  label: string;
  delay: number;
  inView: boolean;
}

function FooterLink({ href, label, delay, inView }: FooterLinkProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.3, delay }}
    >
      <Link
        href={href}
        className="text-gray-400 hover:text-violet-400 transition-colors flex items-center group"
      >
        <ChevronRight
          className="mr-1 h-3 w-3 text-violet-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
        />
        {label}
      </Link>
    </motion.li>
  );
}
