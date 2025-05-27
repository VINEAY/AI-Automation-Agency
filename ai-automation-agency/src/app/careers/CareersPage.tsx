"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  Lightbulb,
  Laptop,
  Users,
  Heart,
  GraduationCap,
  Globe,
  DollarSign,
  Star,
  Calendar,
  Coffee,
  Zap
} from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";
import InteractiveButton from "@/components/animations/InteractiveButton";
import { cn } from "@/lib/utils";

// Job listings data
const jobListings = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    postedDate: "April 10, 2025",
    salary: "$130,000 - $180,000",
    description: "Join our engineering team to design and implement innovative AI solutions for our clients. You'll be working with cutting-edge technologies and frameworks to build intelligent automation systems.",
    responsibilities: [
      "Design, develop, and deploy AI models for production environments",
      "Collaborate with data scientists to optimize model performance",
      "Implement machine learning pipelines for data processing and model training",
      "Work closely with clients to understand their requirements and deliver solutions",
      "Stay up-to-date with the latest AI research and technologies"
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science, AI, or related field",
      "3+ years of experience in AI/ML engineering",
      "Strong programming skills in Python and familiarity with ML frameworks (TensorFlow, PyTorch)",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Excellent problem-solving and communication skills"
    ],
    tags: ["AI", "Machine Learning", "Python", "TensorFlow", "PyTorch", "Cloud"]
  },
  {
    id: "data-scientist",
    title: "Senior Data Scientist",
    department: "Data Science",
    location: "Remote (US)",
    type: "Full-time",
    experience: "5+ years",
    postedDate: "April 15, 2025",
    salary: "$140,000 - $190,000",
    description: "We're looking for a Senior Data Scientist to join our team and help extract actionable insights from complex datasets. You'll work on developing predictive models and implementing advanced analytics solutions for our clients.",
    responsibilities: [
      "Develop and implement advanced machine learning models",
      "Extract meaningful insights from large datasets",
      "Create data visualization and reporting solutions",
      "Collaborate with engineers to deploy models to production",
      "Provide technical guidance to junior data scientists"
    ],
    requirements: [
      "Master's or PhD in Statistics, Mathematics, Computer Science, or related field",
      "5+ years of experience in data science or related role",
      "Expert knowledge of statistical analysis and machine learning algorithms",
      "Proficiency in Python, R, and SQL",
      "Experience with big data technologies and cloud platforms"
    ],
    tags: ["Data Science", "Machine Learning", "Statistics", "Python", "SQL", "Big Data"]
  },
  {
    id: "solutions-architect",
    title: "AI Solutions Architect",
    department: "Solutions",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    experience: "4+ years",
    postedDate: "April 18, 2025",
    salary: "$150,000 - $200,000",
    description: "As an AI Solutions Architect, you'll be responsible for designing comprehensive AI solutions that address our clients' business challenges. You'll work at the intersection of technology and business strategy.",
    responsibilities: [
      "Design scalable, efficient, and innovative AI solution architectures",
      "Translate business requirements into technical specifications",
      "Evaluate and recommend appropriate technologies and frameworks",
      "Create detailed documentation and implementation roadmaps",
      "Provide technical leadership and guidance to implementation teams"
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science or related field",
      "4+ years of experience in solution architecture, preferably with AI/ML focus",
      "Strong understanding of cloud platforms and infrastructure",
      "Experience with enterprise system integration",
      "Excellent communication and presentation skills"
    ],
    tags: ["Solution Architecture", "AI", "Cloud", "Enterprise Systems", "Technical Leadership"]
  }
];

export default function CareersPage() {
  const [mounted, setMounted] = useState(false);

  // This ensures any client-side only code runs after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Placeholder for careers page content */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center">Careers at NexusAI</h1>
        <p className="text-center mt-4 mb-8">Join our team of AI innovators and help shape the future of automation</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {jobListings.map(job => (
            <div key={job.id} className="border border-violet-800/30 rounded-lg p-6 bg-black/50">
              <h3 className="text-xl font-bold text-white">{job.title}</h3>
              <p className="text-violet-400 mt-1">{job.department}</p>
              <div className="flex items-center mt-2 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
              <p className="mt-4 text-gray-300">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="text-xs bg-violet-900/30 text-violet-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Link href={`/careers/${job.id}`}>
                  <button className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
