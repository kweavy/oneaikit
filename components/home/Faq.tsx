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
    question: "Do I need to pay monthly to use oneaikit?",
    answer: "Yes, oneaikit is a subscription-based service. We offer monthly and annual subscription plans, with annual plans providing a significant discount. All plans include a free trial period so you can test the tools before committing."
  },
  {
    question: "Can I try oneaikit before subscribing?",
    answer: "Absolutely! We offer a 7-day free trial that gives you access to all features. No credit card required to start your trial. You can explore the platform and test all AI tools to see if they meet your needs."
  },
  {
    question: "Is oneaikit suitable for beginners?",
    answer: "Yes, oneaikit is designed with user-friendliness in mind. Our interface is intuitive, and we provide comprehensive tutorials and guides to help you get started. No technical expertise required – simply describe what you want, and the AI will generate it."
  },
  {
    question: "What types of content can I create with oneaikit?",
    answer: "oneaikit allows you to create a wide variety of content including blog posts, social media content, marketing copy, product descriptions, emails, images, code, videos, audio content, and much more. Our versatile AI tools can handle virtually any content creation task."
  },
  {
    question: "Can I create my own templates or custom AI prompts?",
    answer: "Yes! oneaikit allows you to create and save custom templates and AI prompts. This is perfect for standardizing your brand voice or creating workflows for repetitive content creation tasks."
  },
  {
    question: "Is oneaikit available in multiple languages?",
    answer: "Yes, oneaikit supports content generation in multiple languages. Our AI can create and translate content across major world languages, making it perfect for global businesses and international marketing campaigns."
  },
  {
    question: "Does oneaikit have a mobile app?",
    answer: "Currently, oneaikit is optimized as a web application that works seamlessly across all devices including desktops, tablets, and mobile phones. A dedicated mobile app is on our roadmap for future development."
  },
  {
    question: "Can I export the generated content?",
    answer: "Yes, all content created with oneaikit can be easily exported in various formats including PDF, DOCX, HTML, plain text, MP3 (for audio), and MP4 (for video), making it simple to use your content wherever you need it."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover) as well as PayPal. All payments are securely processed through Stripe, ensuring your payment information is always protected."
  },
  {
    question: "Can I integrate oneaikit with other platforms?",
    answer: "Yes. oneaikit provides API access for developers, allowing seamless integration with your existing websites, apps, or third-party platforms."
  },
  {
    question: "How is oneaikit different from other AI platforms?",
    answer: "oneaikit stands out by offering a comprehensive suite of AI tools in one platform. While other services might specialize in one area (text, image, code, etc.), we provide all these capabilities with a unified experience, consistent quality, and at a competitive price point. Our platform is also continuously updated with the latest AI advancements."
  },
  {
    question: "Does oneaikit provide support if I have issues?",
    answer: "Absolutely! We offer dedicated customer support via email, live chat, and comprehensive documentation. Professional and Enterprise plan subscribers also get priority support with faster response times."
  },
];

const Faq = () => {
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
              FAQ <span className="text-muted-foreground">Help Center</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a question? Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
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
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
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

export default Faq;