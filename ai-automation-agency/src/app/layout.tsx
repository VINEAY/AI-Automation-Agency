import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/animations/ParticlesBackground";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NexusAI | AI Automation Agency",
  description:
    "Transform your business with cutting-edge AI automation solutions. Boost productivity, streamline operations, and drive innovation with NexusAI.",
  keywords:
    "AI, automation, artificial intelligence, machine learning, business automation, AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased selection:bg-violet-600/30 selection:text-white",
          fontSans.variable
        )}
      >
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
