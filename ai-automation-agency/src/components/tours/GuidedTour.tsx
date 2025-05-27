"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Check, Play } from "lucide-react";
import InteractiveButton from "@/components/animations/InteractiveButton";

interface TourStep {
  target: string;
  title: string;
  content: string | ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
}

interface GuidedTourProps {
  steps: TourStep[];
  onComplete?: () => void;
  onSkip?: () => void;
}

export default function GuidedTour({ steps, onComplete, onSkip }: GuidedTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [isInitialModalShown, setIsInitialModalShown] = useState(true);

  // Calculate position based on target element and placement
  useEffect(() => {
    if (!isOpen || isInitialModalShown) return;

    const calculatePosition = () => {
      const currentStepData = steps[currentStep];
      const targetElement = document.querySelector(currentStepData.target);

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

        // Calculate absolute position
        const absoluteTop = rect.top + scrollTop;
        const absoluteLeft = rect.left + scrollLeft;

        // Set position based on placement
        const placement = currentStepData.placement || "bottom";

        // Create a position object as const to fix ESLint error
        const newPosition = (() => {
          switch (placement) {
            case "top":
              return {
                top: absoluteTop - 10 - 150, // Height of tooltip + margin
                left: absoluteLeft + rect.width / 2 - 150,
                width: rect.width,
                height: rect.height,
              };
            case "right":
              return {
                top: absoluteTop + rect.height / 2 - 75,
                left: absoluteLeft + rect.width + 10,
                width: rect.width,
                height: rect.height,
              };
            case "bottom":
              return {
                top: absoluteTop + rect.height + 10,
                left: absoluteLeft + rect.width / 2 - 150,
                width: rect.width,
                height: rect.height,
              };
            case "left":
              return {
                top: absoluteTop + rect.height / 2 - 75,
                left: absoluteLeft - 10 - 300, // Width of tooltip + margin
                width: rect.width,
                height: rect.height,
              };
            default:
              return {
                top: absoluteTop + rect.height + 10,
                left: absoluteLeft + rect.width / 2 - 150,
                width: rect.width,
                height: rect.height,
              };
          }
        })();

        setPosition(newPosition);

        // Scroll element into view if needed
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        // Add highlight to target element
        targetElement.classList.add("tour-highlight");

        return () => {
          targetElement.classList.remove("tour-highlight");
        };
      }
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("resize", calculatePosition);
      document.querySelectorAll(".tour-highlight").forEach(el => {
        el.classList.remove("tour-highlight");
      });
    };
  }, [currentStep, isOpen, isInitialModalShown, steps]);

  const startTour = () => {
    setIsInitialModalShown(false);
    setIsOpen(true);
  };

  const skipTour = () => {
    setIsOpen(false);
    if (onSkip) onSkip();

    // Save to localStorage that the user has seen the tour
    localStorage.setItem("guided-tour-completed", "true");
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const completeTour = () => {
    setIsOpen(false);
    if (onComplete) onComplete();

    // Save to localStorage that the user has seen the tour
    localStorage.setItem("guided-tour-completed", "true");
  };

  // Check localStorage on mount to see if the user has already completed the tour
  useEffect(() => {
    const hasCompletedTour = localStorage.getItem("guided-tour-completed") === "true";
    if (hasCompletedTour) {
      setIsInitialModalShown(false);
      setIsOpen(false);
    }
  }, []);

  // Add global styles for the tour highlight
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .tour-highlight {
        position: relative;
        z-index: 100;
        box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.5), 0 0 0 2000px rgba(0, 0, 0, 0.7);
        border-radius: 4px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      {/* Initial welcome modal */}
      <AnimatePresence>
        {isInitialModalShown && (
          <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-violet-600/30 rounded-lg shadow-2xl p-8 max-w-md mx-4 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500" />

              <div className="text-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center mb-4"
                >
                  <Play className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome to NexusAI</h2>
                <p className="text-gray-300">
                  Would you like to take a quick tour of our site to discover all the features?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <InteractiveButton onClick={startTour} className="w-full sm:w-auto">
                  Start Tour
                </InteractiveButton>
                <InteractiveButton onClick={skipTour} variant="outline" className="w-full sm:w-auto">
                  Skip Tour
                </InteractiveButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Tour steps */}
      <AnimatePresence>
        {isOpen && !isInitialModalShown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[9999] w-[300px]"
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            <div className="bg-gray-900 border border-violet-600/30 rounded-lg shadow-xl p-4">
              <button
                onClick={skipTour}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                aria-label="Close tour"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-1">{steps[currentStep].title}</h3>
                <div className="text-gray-300 text-sm">{steps[currentStep].content}</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Step {currentStep + 1} of {steps.length}
                </div>
                <div className="flex gap-2">
                  {currentStep > 0 && (
                    <button
                      onClick={prevStep}
                      className="text-violet-400 hover:text-violet-300 flex items-center text-sm"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Previous
                    </button>
                  )}

                  <button
                    onClick={nextStep}
                    className="bg-violet-600 hover:bg-violet-700 text-white px-3 py-1 rounded-md flex items-center text-sm"
                  >
                    {currentStep === steps.length - 1 ? (
                      <>
                        Finish
                        <Check className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper hook to manage tour state
export function useTourState() {
  const [isTourActive, setIsTourActive] = useState(false);

  // Check if it's the user's first visit on component mount
  useEffect(() => {
    const hasCompletedTour = localStorage.getItem("guided-tour-completed") === "true";
    setIsTourActive(!hasCompletedTour);
  }, []);

  const completeTour = () => {
    setIsTourActive(false);
    localStorage.setItem("guided-tour-completed", "true");
  };

  const resetTour = () => {
    setIsTourActive(true);
    localStorage.removeItem("guided-tour-completed");
  };

  return {
    isTourActive,
    completeTour,
    resetTour
  };
}
