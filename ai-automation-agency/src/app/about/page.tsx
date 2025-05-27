"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Calendar, Building, Users, Trophy, ChevronRight } from "lucide-react";
import GlowingText from "@/components/animations/GlowingText";
import AnimatedGradientBorder from "@/components/ui/animated-gradient-border";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in AI and machine learning, Sarah has led numerous Fortune 500 companies through successful digital transformations.",
    avatar: "https://cdn.pixabay.com/photo/2021/06/11/12/26/woman-6328478_1280.jpg",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    bio: "Former lead engineer at Google AI, David brings unparalleled technical expertise in developing scalable AI solutions for enterprise clients.",
    avatar: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Head of AI Research",
    bio: "PhD in Computational Linguistics, Maria leads our R&D team in developing cutting-edge AI algorithms that power our automation solutions.",
    avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Lead Solutions Architect",
    bio: "James specializes in designing custom AI solutions that integrate seamlessly with clients' existing infrastructure and business processes.",
    avatar: "https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg",
  },
];

// Company history timeline
const historyTimeline = [
  {
    year: 2018,
    title: "Company Founded",
    description: "NexusAI was founded with a vision to democratize AI automation for businesses of all sizes.",
  },
  {
    year: 2019,
    title: "First Major Client",
    description: "Secured partnership with a Fortune 500 retail company, delivering 40% efficiency improvements.",
  },
  {
    year: 2020,
    title: "AI Research Lab",
    description: "Established our dedicated AI research laboratory to develop proprietary algorithms.",
  },
  {
    year: 2022,
    title: "Global Expansion",
    description: "Opened offices in London, Singapore, and Toronto to serve our growing international client base.",
  },
  {
    year: 2024,
    title: "NexusAI Platform Launch",
    description: "Released our flagship SaaS platform enabling clients to build custom AI workflows without coding.",
  },
];

// Company values
const companyValues = [
  {
    icon: <Rocket className="h-6 w-6 text-violet-400" />,
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI to deliver groundbreaking solutions.",
  },
  {
    icon: <Users className="h-6 w-6 text-violet-400" />,
    title: "Collaboration",
    description: "We work closely with clients, forming partnerships that drive meaningful transformation.",
  },
  {
    icon: <Trophy className="h-6 w-6 text-violet-400" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, from research to implementation.",
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  // Ensure animations run after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [valuesRef, valuesInView] = useInView({
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
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-900/10 blur-[100px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <GlowingText
                  text="About NexusAI"
                  textClassName="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600"
                />
              </h1>

              <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                We're a team of AI experts, engineers, and visionaries dedicated to transforming businesses through intelligent automation. Our mission is to democratize AI technology, making it accessible and practical for organizations of all sizes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {["150+ Clients", "30+ AI Experts", "5 Global Offices"].map((stat, index) => (
                  <motion.div
                    key={stat}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="bg-violet-900/20 backdrop-blur-sm px-5 py-3 rounded-lg border border-violet-800/30"
                  >
                    <span className="font-medium text-white">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <AnimatedGradientBorder
                className="bg-black/70 backdrop-blur-sm p-6 rounded-lg"
                borderWidth={1}
                glowOpacity={0.5}
                glowRadius={15}
                hoverEffect={true}
              >
                <div className="aspect-video w-full relative overflow-hidden rounded-lg">
                  <Image
                    src="https://cdn.pixabay.com/photo/2020/02/19/07/48/office-4861778_1280.jpg"
                    alt="NexusAI Office"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-1">Our Headquarters</h3>
                  <p className="text-gray-400">San Francisco, California</p>
                </div>
              </AnimatedGradientBorder>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values section */}
      <section
        ref={valuesRef}
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-900/10 blur-[100px] animate-pulse-slower" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're on a mission to make AI accessible, practical, and transformative for businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <AnimatedGradientBorder
                  className="bg-black/70 backdrop-blur-sm p-8 rounded-lg h-full"
                  borderWidth={1}
                  glowOpacity={0.4}
                  glowRadius={10}
                  hoverEffect={true}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-violet-900/30 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </AnimatedGradientBorder>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 backdrop-blur-sm p-8 rounded-lg border border-violet-800/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Our Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              At NexusAI, we take a human-centered approach to AI automation. We believe that technology should serve people, not replace them. Our solutions are designed to augment human capabilities, freeing people from repetitive tasks so they can focus on creative and strategic work.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We begin each client engagement with a deep understanding of their business challenges, then design custom AI solutions that integrate seamlessly with their existing workflows and systems. Our iterative approach ensures continuous improvement and adaptation as business needs evolve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our History Timeline section */}
      <section
        ref={timelineRef}
        className="relative py-20 bg-gradient-to-b from-black to-violet-950/10 overflow-hidden"
      >
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Our Journey
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our path has been defined by innovation and growth.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-violet-500/50 to-indigo-500/50" />

            {historyTimeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"} md:w-[45%] px-4`}
              >
                <div className="absolute top-0 left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 md:right-0 w-5 h-5 rounded-full bg-violet-500 border-4 border-black z-10" />

                <Card className="bg-black/60 backdrop-blur-sm border-violet-800/30">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="mr-2 h-5 w-5 text-violet-400" />
                      <span className="text-lg font-bold text-white">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section
        ref={teamRef}
        className="relative py-20 bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[150px] animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our diverse team of experts brings together experience from top tech companies and research institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AnimatedGradientBorder
                  className="bg-black/70 backdrop-blur-sm p-6 rounded-lg h-full"
                  borderWidth={1}
                  glowOpacity={0.4}
                  glowRadius={10}
                  hoverEffect={true}
                >
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4 border-2 border-violet-500/30">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-violet-400 text-sm mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </AnimatedGradientBorder>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-300 mb-4">
              Want to join our innovative team?
            </p>
            <a
              href="/careers"
              className="inline-flex items-center text-violet-400 hover:text-violet-300 transition-colors"
            >
              View open positions
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
