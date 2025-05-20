import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PenLine, BarChart, Code, Briefcase, Figma, Building2, Headset, Send } from "lucide-react";
const userCategories = [
  {
    value: "ai-customer-service",
    label: "AI Customer Service",
    icon: <Headset className="w-4 h-4" />,
    description:
      "Train AI-powered customer service agents for your business using websites, PDFs, Q&A, or plain text — no technical skills required.",
    image:
      "https://oneaikit.com/login/public/uploads/all in one ai tools for customer service.png",
    features: [
      "Train chatbot using websites, PDFs, or text",
      "Automatically answer customer questions",
      "Custom Q&A builder for support agents",
    ],
  },
  {
    value: "social-media",
    label: "AI Social Media Suite",
    icon: <Send className="w-4 h-4" />,
    description:
      "Preview, publish, and schedule social media posts effortlessly with AI-powered workflows — including LinkedIn and X (Twitter).",
    image:
      "https://oneaikit.com/login/public/uploads/all in one ai tools for social media agency.png",
    features: [
      "AI to generate LinkedIn and Twitter posts",
      "Schedule and publish directly",
      "Create Instagram captions and hashtags",
    ],
  },
  {
    value: "copywriters",
    label: "Copywriters",
    icon: <PenLine className="w-4 h-4" />,
    description:
      "Create compelling copy that converts prospects into customers with AI-powered assistance.",
    image:
      "https://oneaikit.com/login/public/uploads/all in one ai tools for copywriters.png",
    features: [
      "AI to write product descriptions",
      "Generate blog intros, conclusions, and sections",
      "Rewrite content with improved clarity and tone",
    ],
  },
  {
    value: "marketers",
    label: "Digital Marketers",
    icon: <BarChart className="w-4 h-4" />,
    description:
      "Generate high-converting marketing copy, social posts, and ad campaigns in seconds.",
    image:
      "https://oneaikit.com/login/public/uploads/all in one ai tools for digital marketing.png",
    features: [
      "Create Facebook and Google ads with AI",
      "Generate email campaigns and newsletters",
      "Craft SEO meta descriptions and headlines",
    ],
  },
  {
    value: "entrepreneurs",
    label: "Entrepreneurs",
    icon: <Briefcase className="w-4 h-4" />,
    description:
      "Create business plans, marketing materials, and customer communications in minutes.",
    image:
      "https://oneaikit.com/login/public/uploads/all in one ai tools for entrepreuners.png",
    features: [
      "Generate business posts and brand names",
      "AI to write testimonials and pros & cons",
      "Build business content with AI wizards",
    ],
  },
  {
    value: "agencies",
    label: "Digital Agencies",
    icon: <Building2 className="w-4 h-4" />,
    description:
      "Scale your content creation and serve more clients with AI-powered workflows.",
    image:
      "https://oneaikit.com/login/public/uploads/all in one ai tools for Digital Agencies.png",
    features: [
      "Scale content with custom AI generators",
      "Use AI to handle multiple client workflows",
      "Generate articles, social posts, and visuals",
    ],
  },
];

const UseCases = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Tools for Everyone
            </h2>
            <p className="text-lg text-muted-foreground">
              Smart solutions tailored for every role, industry, and goal — whether you’re scaling a company or working solo.
            </p>
          </div>
        </div>

        <Tabs defaultValue="copywriters" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 p-1">
              {userCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {userCategories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">AI Tools for {category.label}</h3>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                 <ul className="space-y-3">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                  <div className="pt-4">
                    <Button size="lg">
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0"></div>
                    <img
                      src={category.image}
                      alt={`AI Tools for ${category.label}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;