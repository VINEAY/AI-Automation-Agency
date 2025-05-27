"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import { cn } from "@/lib/utils";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "NexusAI has transformed our business operations. Their AI automation solutions reduced our processing time by 75% and improved accuracy by over 90%.",
    author: "Sarah Johnson",
    title: "CTO, TechCorp Global",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1372&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The AI-powered analytics platform implemented by NexusAI has given us unprecedented insights into customer behavior, driving a 40% increase in conversion rates.",
    author: "James Wilson",
    title: "Marketing Director, RetailGiant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Working with NexusAI was seamless from start to finish. Their team understood our unique challenges and delivered a custom solution that exceeded our expectations.",
    author: "Emily Chen",
    title: "Operations Manager, HealthPlus",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1261&auto=format&fit=crop"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    if (inView && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [inView, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    // Pause auto-rotation for a bit when manually changing
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    // Pause auto-rotation for a bit when manually changing
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    // Pause auto-rotation for a bit when manually changing
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section
      ref={ref}
      className="testimonials relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/5 blur-[100px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <GlowingText
            text="What Our Clients Say"
            textClassName="text-3xl md:text-4xl font-bold mb-4"
          />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover why businesses trust our AI automation solutions to drive growth and innovation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Testimonial slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: `calc(-${currentIndex * 100}%)`
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gradient-to-br from-violet-900/10 to-indigo-900/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-violet-800/20 p-8 md:p-10">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/3 relative">
                          <div className="aspect-square w-full relative rounded-xl overflow-hidden">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tl from-violet-900/50 to-transparent opacity-60" />
                          </div>
                          <Quote className="absolute top-4 right-4 h-10 w-10 text-violet-400/50" />
                        </div>

                        <div className="w-full md:w-2/3 flex flex-col">
                          <p className="text-lg md:text-xl text-gray-200 mb-6 italic">
                            "{testimonial.quote}"
                          </p>
                          <div className="mt-auto">
                            <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
                            <p className="text-violet-400">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-violet-900/50 hover:bg-violet-800/80 text-white rounded-full p-2 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 md:translate-x-6 bg-violet-900/50 hover:bg-violet-800/80 text-white rounded-full p-2 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "w-8 bg-violet-500" : "w-2 bg-gray-600 hover:bg-gray-500"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
