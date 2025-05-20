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

const testimonials = [
  {
    name: "Peline Jan",
    role: "Entrepreneur",
    content: "EverythingAITools has completely transformed my content creation process. I'm now able to create high-quality marketing materials in a fraction of the time, allowing me to focus on growing my business.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Tom Daniel",
    role: "Writer",
    content: "As a professional writer, I was skeptical about AI tools. But EverythingAITools has become an invaluable writing assistant that helps me overcome writer's block and produces quality starting points for my work.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Eric Sanchez",
    role: "UX Designer",
    content: "The AI image generation tools have been a game-changer for my design process. I can quickly visualize concepts before diving into detailed design work. Huge time-saver!",
    rating: 4,
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Sarah Lee",
    role: "Digital Marketer",
    content: "EverythingAITools helps me create campaigns that would normally take days in just hours. The multi-language support is amazing for our global marketing efforts.",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Jason Park",
    role: "Full-Stack Developer",
    content: "The code generation tools have significantly improved my productivity. I use them for generating boilerplate code and solving complex logic problems. Worth every penny.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Emily Grant",
    role: "Business Coach",
    content: "I recommend EverythingAITools to all my clients. It's an incredible resource for small business owners who need to create professional content without hiring a full marketing team.",
    rating: 5,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Alex Morgan",
    role: "Content Strategist",
    content: "I’ve tried every tool in EverythingAITools — from article and code generation to text-to-speech and image generation. The suite covers all my creative and technical needs in one place. It’s like having a full AI-powered team at your fingertips!",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Lana Yusuf",
    role: "Video Content Creator",
    content: "The YouTube to Article tool saved me hours every week. I can instantly repurpose my video content into blog posts and newsletters.",
    rating: 5,
    image: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Carlos Ramirez",
    role: "SEO Specialist",
    content: "EverythingAITools helps me generate SEO-friendly articles in minutes. The keyword relevance and structure are spot on.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Natalie Chen",
    role: "AI Researcher",
    content: "Impressed by how natural the Text to Speech engine sounds. It’s perfect for making our research presentations more engaging.",
    rating: 4,
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "John Becker",
    role: "eCommerce Owner",
    content: "I use the image generator for all my product mockups. It gives me endless visuals for marketing, all unique and professional.",
    rating: 5,
    image: "https://images.pexels.com/photos/1832328/pexels-photo-1832328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Mina Haq",
    role: "Voice Over Artist",
    content: "The text-to-speech voices from EverythingAITools rival professional studio recordings. Great for fast delivery gigs.",
    rating: 4,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Tyler Scott",
    role: "Educator",
    content: "I create lesson plans and articles using the article generator. The tools save me hours each week — can’t live without them!",
    rating: 5,
    image: "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Priya Mehta",
    role: "Blogger",
    content: "With AI writing assistance from EverythingAITools, my blog schedule has become consistent and stress-free.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Lucas Moretti",
    role: "Copywriter",
    content: "I love how the code and article generators are neatly separated. Makes switching roles and tasks super efficient.",
    rating: 4,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Ravi Kapoor",
    role: "Startup Founder",
    content: "I build landing pages and pitch decks faster than ever using these AI tools. Perfect companion for any bootstrapped startup.",
    rating: 5,
    image: "https://images.pexels.com/photos/769880/pexels-photo-769880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Claire Dupont",
    role: "Freelance Translator",
    content: "The multi-language support in the article generator is amazing. I can draft in English and republish in French instantly.",
    rating: 5,
    image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [activePage, setActivePage] = useState(0);
  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePrevious = () => {
    setActivePage(prev => (prev - 1 + pageCount) % pageCount);
  };

  const handleNext = () => {
    setActivePage(prev => (prev + 1) % pageCount);
  };

  const displayedTestimonials = testimonials.slice(
    activePage * testimonialsPerPage,
    (activePage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimonials <span className="text-muted-foreground">Trustpilot</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by millions.
            </p>
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

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {['Envato', 'Webflow', 'Stripe', 'Amazon', 'Google'].map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl font-bold text-muted-foreground/50"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;