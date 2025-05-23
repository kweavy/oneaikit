"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  QuoteIcon,
  Star,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface Props {
  data: TestimonialItem[];
  title?: string;
  subtitle?: string;
}

const DynamicTestimonials = ({ data, title = "Testimonials", subtitle = "What our users say" }: Props) => {
  const [activePage, setActivePage] = useState(0);
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(data.length / testimonialsPerPage);

  const handlePrevious = () => {
    setActivePage(prev => (prev - 1 + pageCount) % pageCount);
  };

  const handleNext = () => {
    setActivePage(prev => (prev + 1) % pageCount);
  };

  const displayedTestimonials = data.slice(
    activePage * testimonialsPerPage,
    (activePage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title} <span className="text-muted-foreground">Trustpilot</span>
            </h2>
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <QuoteIcon className="h-6 w-6 text-blue-500 mr-2" />
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePage(i)}
                  className={cn(
                    "h-2 w-2 rounded-full",
                    activePage === i
                      ? "bg-primary"
                      : "bg-muted hover:bg-primary/50 transition-colors"
                  )}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicTestimonials;
