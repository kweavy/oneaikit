"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const heroTexts = [
  "Design",
  "Content",
  "Automation",
  "Marketing",
  "Video",
  "Productivity",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroTexts.length);
        setIsChanging(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* What's New + Gemini AI */}
        <div className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium bg-black text-white rounded-full mb-6">
          <span className="text-pink-400">WHAT'S NEW 3.0</span>
          <span className="italic text-gray-300">Gemini AI</span>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          AI assisted{" "}
          <span
            className={cn(
              "transition-opacity duration-300 inline-block uai-700",
              isChanging ? "opacity-0" : "opacity-100"
            )}
          >
            {heroTexts[currentIndex]}
          </span>
        </motion.h1>

        {/* Create Anything */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="uai-700">Create Anything</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Build SaaS App <em>without</em> Any Coding.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            Try the Free Demo
          </Button>
          <Button variant="outline" size="lg">
            Prebuilt Demos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
