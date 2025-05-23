'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FaqItem {
  question: string;
  answer: string;
}

interface DynamicFaqProps {
  content: FaqItem[];
}

const DynamicFaq = ({ content }: DynamicFaqProps) => {
  return (
    <section id="faq" >
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
              Frequently asked questions about this tool.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {content.map((faq, index) => (
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

export default DynamicFaq;
