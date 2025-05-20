'use client';
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  ShoppingBag,
  Code,
  MessageSquare,
  Megaphone,
  Share2,
  Mic,
  Youtube,
  Rss,
  Sparkles
} from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: <Sparkles className="w-4 h-4" /> },
  { id: "blog", label: "Blog", icon: <FileText className="w-4 h-4" /> },
  { id: "ecommerce", label: "Ecommerce", icon: <ShoppingBag className="w-4 h-4" /> },
  { id: "development", label: "Development", icon: <Code className="w-4 h-4" /> },
  { id: "advertisement", label: "Advertisement", icon: <Megaphone className="w-4 h-4" /> },
  { id: "custom", label: "Custom", icon: <MessageSquare className="w-4 h-4" /> },
  { id: "social", label: "Social Media", icon: <Share2 className="w-4 h-4" /> },
  { id: "voiceover", label: "Voiceover", icon: <Mic className="w-4 h-4" /> },
  { id: "youtube", label: "Youtube", icon: <Youtube className="w-4 h-4" /> },
  { id: "rss", label: "RSS", icon: <Rss className="w-4 h-4" /> },
];

const tools = [
  {
    title: "AI to Generate Post Titles",
    description: "Use AI to instantly generate engaging post titles that boost clicks and attention.",
    category: ["all", "blog", "social"]
  },
  {
    title: "AI to Summarize Text",
    description: "AI to automatically summarize long content into concise and clear summaries.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Write Product Descriptions",
    description: "Use AI to write compelling product descriptions that drive conversions and sales.",
    category: ["all", "ecommerce"]
  },
  {
    title: "AI to Generate Articles",
    description: "Automatically generate full-length articles on any topic using AI.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Create Product Names",
    description: "Use AI to generate catchy and brandable product names instantly.",
    category: ["all", "ecommerce"]
  },
  {
    title: "AI to Write Testimonials",
    description: "Generate natural-sounding customer testimonials with the help of AI.",
    category: ["all", "ecommerce", "social"]
  },
  {
    title: "AI to Solve Problems",
    description: "Identify issues and generate solutions using the proven Problem-Agitate-Solution method with AI.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Generate Blog Sections",
    description: "Quickly create structured and engaging blog sections using AI.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Generate Blog Ideas",
    description: "Unlock creativity with AI-powered blog post ideas tailored to your niche.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Write Blog Intros",
    description: "Generate engaging blog introductions that hook your readers using AI.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Write Blog Conclusions",
    description: "Create impactful blog conclusions with AI to leave lasting impressions.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Create Facebook Ads",
    description: "Design attention-grabbing Facebook ad copies with AI in seconds.",
    category: ["all", "advertisement", "social"]
  },
  {
    title: "AI to Write YouTube Descriptions",
    description: "Automatically generate engaging YouTube video descriptions with AI.",
    category: ["all", "youtube"]
  },
  {
    title: "AI to Write YouTube Titles",
    description: "Craft viral YouTube video titles using AI to boost viewership.",
    category: ["all", "youtube"]
  },
  {
    title: "AI to Generate YouTube Tags",
    description: "Use AI to generate relevant and trending YouTube tags to improve reach.",
    category: ["all", "youtube"]
  },
  {
    title: "AI to Write Instagram Captions",
    description: "Create scroll-stopping Instagram captions with AI assistance.",
    category: ["all", "social"]
  },
  {
    title: "AI to Generate Instagram Hashtags",
    description: "Discover trending and targeted hashtags using AI.",
    category: ["all", "social"]
  },
  {
    title: "AI to Generate Tweets",
    description: "Create viral and impactful tweets with AI-generated content ideas.",
    category: ["all", "social"]
  },
  {
    title: "AI to Write Business Posts",
    description: "Generate professional business posts for social media using AI.",
    category: ["all", "social", "custom"]
  },
  {
    title: "AI to Generate Facebook Headlines",
    description: "Write compelling Facebook ad headlines that drive clicks and conversions with AI.",
    category: ["all", "advertisement", "social"]
  },
  {
    title: "AI to Write Google Ad Headlines",
    description: "Automatically generate effective Google Ad headlines using AI.",
    category: ["all", "advertisement"]
  },
  {
    title: "AI to Write Google Ad Descriptions",
    description: "Craft persuasive Google ad descriptions tailored to your audience using AI.",
    category: ["all", "advertisement"]
  },
  {
    title: "AI to Generate Paragraphs",
    description: "Create rich and readable paragraphs based on keywords and descriptions using AI.",
    category: ["all", "blog", "custom"]
  },
  {
    title: "AI to List Pros & Cons",
    description: "Use AI to generate pros and cons for better decision-making.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Write Meta Descriptions",
    description: "Generate SEO-friendly meta descriptions to improve search engine rankings using AI.",
    category: ["all", "blog", "development"]
  },
  {
    title: "AI to Generate FAQs",
    description: "Use AI to create frequently asked questions and answers based on your content.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Write Emails",
    description: "Generate well-structured and persuasive emails instantly using AI.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Reply Emails",
    description: "Automatically draft professional email replies with AI assistance.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Generate Newsletters",
    description: "Craft engaging newsletters that drive opens and clicks with AI.",
    category: ["all", "custom", "social"]
  },
  {
    title: "AI to Fix Grammar",
    description: "Use AI to detect and correct grammar mistakes instantly.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Summarize Content (TL;DR)",
    description: "Generate TL;DR summaries for long articles using AI.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Generate Images",
    description: "Create stunning and unique images instantly with AI-powered generation tools.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Create Custom Generators",
    description: "Build your own AI-powered generators to produce content tailored to your needs.",
    category: ["all", "development", "custom"]
  },
  {
    title: "AI to Transcribe Speech to Text",
    description: "Convert audio speech into accurate and readable text with AI.",
    category: ["all", "voiceover"]
  },
  {
    title: "AI to Generate Code",
    description: "Automatically write code in any programming language using AI instructions.",
    category: ["all", "development"]
  },
  {
    title: "AI to Generate Articles (Wizard)",
    description: "Generate full-length articles using a step-by-step AI wizard tool.",
    category: ["all", "blog"]
  },
  {
    title: "AI to Analyze Images (Vision)",
    description: "Leverage AI to analyze, understand, and extract insights from images in real time.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Analyze Files",
    description: "Upload documents and let AI extract key insights, summaries, or highlights instantly.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Generate Chat-Based Images",
    description: "Describe an image in chat and let AI generate it for you in seconds.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Rewrite Text",
    description: "Rewrite any content with AI to improve clarity, tone, or professionalism.",
    category: ["all", "custom", "blog"]
  },
  {
    title: "AI to Analyze Web Pages",
    description: "Enter a URL and let AI analyze and summarize its content for deeper insights.",
    category: ["all", "development"]
  },
  {
    title: "AI to Create Videos",
    description: "Transform images and ideas into animated videos using AI technology.",
    category: ["all", "custom"]
  },
  {
    title: "AI to Generate Voiceovers",
    description: "Convert text into natural-sounding speech for voiceover needs using AI.",
    category: ["all", "voiceover"]
  },
  {
    title: "AI to Turn YouTube into Blog Posts",
    description: "Transform YouTube videos into readable blog posts using AI.",
    category: ["all", "youtube", "blog"]
  },
  {
    title: "AI to Generate Content from RSS Feed",
    description: "Pull RSS feed content and let AI transform it into unique articles.",
    category: ["all", "rss", "blog"]
  },
  {
    title: "AI to Isolate Voice in Audio",
    description: "Separate vocals from background noise in audio recordings using AI.",
    category: ["all", "voiceover"]
  }
];

const AiTools = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter(tool => {
    const matchesCategory = tool.category.includes(selectedCategory);
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Tools Section */}
          <div className="w-full">
            <div className="mb-10">
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 lg:grid-cols-10 w-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.icon}
                    <span className="hidden lg:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTools.map((tool, index) => (
                    <div key={index}>
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                          <p className="text-muted-foreground text-sm">{tool.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiTools;