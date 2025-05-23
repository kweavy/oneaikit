"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface BenefitItem {
  text: string;
}

interface Props {
  benefits: BenefitItem[];
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  imageUrl?: string;
}

const WhyUseArticleGenerator = ({
  benefits,
  title = "Why Use Our AI Article Generator?",
  subtitle = "Harness the power of AI to write faster, better, and smarter.",
  buttonLabel = "Try it now",
  buttonUrl = "/",
  imageUrl = "https://oneaikit.com/uploads/mascot_small.png"
}: Props) => {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-100 px-3 py-1 rounded-full mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            {subtitle}
          </p>
          <ul className="space-y-3 mb-6">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
          <a href={buttonUrl}>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">
              {buttonLabel} →
            </Button>
          </a>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt="Why Use AI Article Generator"
            width={600}
            height={400}
            className="rounded-xl w-full max-w-[600px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUseArticleGenerator;