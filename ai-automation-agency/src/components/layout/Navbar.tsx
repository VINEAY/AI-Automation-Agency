"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MagneticButton from "@/components/ui/magnetic-button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Update active item based on current path
    setActiveItem(window.location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent nav">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Nexus<span className="text-violet-400">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                active={activeItem === item.href}
              />
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton size="lg" variant="primary" className="group">
              <span className="flex items-center gap-1">
                <span>Get Started</span>
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 focus:outline-none">
                <Menu className="h-6 w-6 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-black/95 border-violet-900/30"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="px-1 py-6">
                  <nav className="flex flex-col space-y-6 mt-10">
                    {navItems.map((item) => (
                      <MobileNavLink
                        key={item.href}
                        item={item}
                        active={activeItem === item.href}
                      />
                    ))}
                  </nav>
                </div>

                <div className="px-1 py-6">
                  <MagneticButton size="lg" variant="primary" className="w-full">
                    <span className="flex items-center justify-center gap-1">
                      <span>Get Started</span>
                      <motion.span
                        initial={{ x: 0 }}
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "relative py-2 text-base font-medium transition-colors",
        active ? "text-white" : "text-white/70 hover:text-white"
      )}
    >
      {item.label}

      {/* Animated Underline */}
      {active && (
        <motion.span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-purple-600"
          layoutId="navbar-underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}

function MobileNavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "py-2 text-lg font-medium transition-colors flex",
        active ? "text-white" : "text-white/70 hover:text-white"
      )}
    >
      {active && (
        <motion.span
          className="w-1 mr-3 rounded-full bg-gradient-to-b from-violet-400 to-purple-600"
          layoutId="mobile-navbar-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
      {item.label}
    </Link>
  );
}
