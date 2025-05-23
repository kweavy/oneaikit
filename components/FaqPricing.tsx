"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is OneAIKit and what does it offer?",
    answer:
      "OneAIKit is an all-in-one AI platform that gives you access to 50+ AI text tools, 10+ image generation models, and 10+ video generators with a single subscription. It includes tools for writing, rewriting, translating, coding, designing, generating voice, creating videos, and more — all from top AI providers like OpenAI, Claude, Gemini, DALL·E, Stable Diffusion, and others."
  },
  {
    question: "Is OneAIKit free?",
    answer:
      "Yes, we offer a Free plan with daily access to basic AI models and limited trial access to image and video generation features. It's a great way to explore the platform before upgrading to a Pro or Unlimited plan."
  },
  {
    question: "What’s included in the Pro and Unlimited plans?",
    answer:
      "The Pro plan includes 5000 monthly accesses to basic models, 200 accesses to advanced models, and 1500 advanced credits. The Unlimited plan offers unlimited basic model usage and 4500 advanced credits monthly, unlocking full access to high-end AI tools for video/image/text generation."
  },
  {
    question: "Which AI models does OneAIKit support?",
    answer:
      "We support ChatGPT (o3, o4-mini), Claude (3.5 Haiku, 3.7 Sonnet), Gemini 2.5 Pro, Llama 3.1 405B, DeepSeek V3 & R1, Grok 3, and others. For image generation, we include SDXL, DALL·E 3, Flux Pro, Ideogram V2, and more. Video models include Kling, Synthesia, Pika, Minimax, and others."
  },
  {
    question: "Are all AI features available in all plans?",
    answer:
      "Most features are available across all plans, but Free plan has limited generation credits. Pro and Unlimited plans unlock full access to advanced tools like AI Video, AI Photo Studio, Voice Isolator, AI Persona, and more."
  },
  {
    question: "Can I use OneAIKit across devices and platforms?",
    answer:
      "Yes. OneAIKit works across all major platforms — Windows, macOS, Android, iOS, Chrome Extension, and VS Code. You can use the same account to log in on multiple devices."
  },
  {
    question: "What application integrations are available?",
    answer:
      "OneAIKit integrates with Gmail, Outlook, Facebook, X (Twitter), LinkedIn, and WordPress. These integrations allow AI-generated content to be directly used in your workflow or publishing platforms."
  },
  {
    question: "Can I generate and export content?",
    answer:
      "Yes. All generated content (text, images, videos, audio) can be exported in formats like PDF, DOCX, MP3, MP4, PNG, HTML, and plain text. You can save or use them across any platform."
  },
  {
    question: "Can I use OneAIKit for SEO and content marketing?",
    answer:
      "Absolutely. OneAIKit includes an SEO Tool, AI ReWriter, and AI Detector. These help you write optimized content, improve rankings, and ensure your content is original and human-like."
  },
  {
    question: "How does credit usage work?",
    answer:
      "Advanced models use 'Advanced Credits'. Each plan includes a monthly allocation — 1500 for Pro, 4500 for Unlimited. Basic models do not use credits under Unlimited, making it ideal for heavy users."
  },
  {
    question: "Can I use OneAIKit for social media management?",
    answer:
      "Yes. We offer tools for AI-generated social captions, hashtags, visual posts, voiceovers, and even AI-generated human agents to simulate interaction. Integration with Facebook, X, and LinkedIn is supported."
  },
  {
    question: "Does OneAIKit support image and video editing?",
    answer:
      "Yes. You can edit images using AI Image Editor, generate new backgrounds with AI Product Photography, and upscale videos or generate animations using AnimateDiff and other video tools."
  },
  {
    question: "Does OneAIKit support voice-based tools?",
    answer:
      "Yes. We support AI Voiceover, AI Voice Isolator, and Speech-to-Text tools. You can generate or convert audio in multiple voices, styles, and languages."
  },
  {
    question: "Can I use OneAIKit for coding tasks?",
    answer:
      "Yes. The platform includes AI Code generation, explanation, debugging, and even code commenting tools — supporting developers and students alike."
  },
  {
    question: "Is support available for users?",
    answer:
      "Yes. All users get access to documentation and chat support. Pro and Unlimited users receive priority support with faster response times and assistance with integrations or advanced workflows."
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We accept major credit cards (Visa, Mastercard, Amex, Discover) and PayPal. All transactions are handled securely via Stripe."
  },
  {
    question: "Can I cancel or switch plans at any time?",
    answer:
      "Yes, subscriptions are flexible. You can upgrade, downgrade, or cancel anytime via your dashboard. Changes apply from the next billing cycle."
  },
  {
    question: "Can teams collaborate using OneAIKit?",
    answer:
      "Yes. Our Pro and Unlimited plans support team seats. You can share tools and collaborate with team members under one billing."
  },
  {
    question: "Is OneAIKit suitable for agencies or B2B clients?",
    answer:
      "Absolutely. We offer advanced credits, team support, export options, API integration, and multilingual generation — ideal for content agencies, businesses, and resellers."
  },
  {
    question: "Is API access available?",
    answer:
      "Yes, API access is provided for developers and B2B users to integrate OneAIKit’s AI engines into their own platforms or systems."
  }
];

const FaqPricing = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
              <span className="text-muted-foreground"> — About Pricing, Models & Access</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Find detailed answers about plans, credits, tools, AI models, integrations, and usage.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-border rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-4 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqPricing;
