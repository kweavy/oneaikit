import { 
  Sparkles, 
  BarChart3, 
  CreditCard, 
  Globe, 
  HeadphonesIcon 
} from "lucide-react";
import { Button } from "../ui/button";

import { 
  FileText, 
  Image, 
  Code, 
  MessageSquare, 
  Mic, 
  Speaker,
  Building2,
  Workflow,
  Key,
  Users 
} from "lucide-react";


const features = [
  {
    icon: <Sparkles size={24} className="text-blue-500" />,
    title: "AI Tools for All Content Types",
    description: "Generate text, image, code, video, chat, and more — ideal for content creation, marketing, writing, graphic design, and video editing in one powerful platform."
  },
  {
    icon: <BarChart3 size={24} className="text-indigo-500" />,
    title: "Advanced Dashboard",
    description: "Get real-time insights with an AI-powered dashboard to track analytics, user behavior, and productivity — perfect for managing projects, business performance, and workflow optimization."
  },
  {
    icon: <CreditCard size={24} className="text-green-500" />,
    title: "Accept All Payments",
    description: "Easily accept payments with integrated gateways — ideal for monetizing e-commerce stores, digital products, and subscription-based services."
  },
  {
    icon: <Globe size={24} className="text-yellow-500" />,
    title: "Multi-Language Content Creation",
    description: "Generate and translate content in various languages for global reach — perfect for education, international marketing, translation, and personal productivity."
  },
  {
    icon: <FileText size={24} className="text-purple-500" />,
    title: "Custom AI Prompt Templates",
    description: "Create unlimited custom templates to streamline workflows for branding, legal, resume building, customer service, and more."
  },
  {
    icon: <HeadphonesIcon size={24} className="text-red-500" />,
    title: "AI-Powered Support Tools",
    description: "Manage your support tickets with an integrated helpdesk platform — optimized for customer service, human resources, and automation workflows."
  },
  { 
    icon: <FileText className="w-6 h-6 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" />, 
    title: "AI to Text Generator",
    description: "Generate text content using AI-powered tools."
  },
  { 
    icon: <Image className="w-6 h-6 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" />, 
    title: "AI Text To Image Generator",
    description: "Create images from text descriptions using AI."
  },
  { 
    icon: <Code className="w-6 h-6 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" />, 
    title: "AI Code Generator",
    description: "Automatically generate code snippets and projects."
  },
  { 
    icon: <MessageSquare className="w-6 h-6 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" />, 
    title: "AI to Live Chat",
    description: "Engage with users through AI-powered live chat."
  },
  { 
    icon: <Mic className="w-6 h-6 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" />, 
    title: "AI Speech to Text",
    description: "Convert speech into text using AI transcription."
  },
  { 
    icon: <Speaker className="w-6 h-6 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" />, 
    title: "AI Text to Voice",
    description: "Transform text content into natural-sounding voice."
  },
  {
    icon: <MessageSquare className="w-6 h-6 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" />,
    title: "External Chatbot",
    description: "Allow end users to create, train, and embed custom chatbots directly onto their websites."
  },
  {
    icon: <Users className="w-6 h-6 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" />,
    title: "AI Social Media Suite",
    description: "The AI Social Media Suite extension simplifies content creation and management, making it effortless to build and maintain a strong online presence using MagicAI. Seamlessly integrate with Facebook, Instagram, X (Twitter), and LinkedIn, allowing you to manage all your platforms from one intuitive dashboard. No more juggling multiple apps—create, edit, and publish content with ease."
  },
  {
    icon: <Code className="w-6 h-6 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" />,
    title: "AI Chat Pro",
    description: "Discover a new level of productivity with our redesigned chat layout—built to emphasize clarity, speed, and ease of use."
  },
  {
    icon: <Mic className="w-6 h-6 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" />,
    title: "Human Agent for External Chatbot",
    description: "Seamlessly transition from AI to human support with the Live Real Agent extension. This powerful feature allows for real-time, direct communication with human agents within your external chatbot, ensuring that your users receive personalized, empathetic assistance when AI isn’t enough to address their needs."
  },
  {
    icon: <Image className="w-6 h-6 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" />,
    title: "AI Image Editor",
    description: "The Image Editor is an all-in-one extension designed to streamline image creation and editing, making the process both seamless and highly efficient. Whether you’re working with original images or modifying existing ones, you can generate or edit visuals with live preview and intuitive controls that allow for precise adjustments."
  },
  {
    icon: <Users className="w-6 h-6 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" />,
    title: "Mailchimp Integration",
    description: "Connect your MagicAI customers to your Mailchimp audience seamlessly with the new Mailchimp Newsletter Extension. This extension is designed to automatically add new MagicAI users to your Mailchimp audience, streamlining your email marketing efforts and ensuring you can engage with your customers right from the start."
  },
  {
    icon: <FileText className="w-6 h-6 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" />,
    title: "SEO Tool",
    description: "Introducing our SEO Tool - your ultimate content optimization companion. Seamlessly integrated with our Article Wizard, it suggests trending keywords for articles, search questions for outlines, and optimizes meta titles, descriptions, and keywords for maximum SEO impact on admin side for the website."
  },
  {
    icon: <Workflow className="w-6 h-6 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" />,
    title: "AI Social Media",
    description: "MagicAI now offers a comprehensive suite of tools designed to streamline the entire process, from creation to distribution. You can now create a social media post and schedule it to be published directly on Linkedin and X ensuring they reach your audience exactly when you want them to."
  },
  {
    icon: <Building2 className="w-6 h-6 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" />,
    title: "WordPress Integration",
    description: "Experience unparalleled control over your content creation and publishing journey with MagicAI. With MagicAI’s revolutionary extension, convenience reaches new heights as we automate the entire process of generating and publishing articles directly to your WordPress platform."
  },
  {
    icon: <Speaker className="w-6 h-6 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" />,
    title: "Newsletter",
    description: "Staying connected with your audience is more crucial than ever. With our Newsletter Add-On, seamlessly integrated into MagicAI, you can effortlessly create, customize, and distribute captivating newsletters tailored to your subscribers’ preferences."
  },
  {
    icon: <Mic className="w-6 h-6 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" />,
    title: "AI Video To Video",
    description: "Upgrade your videos with advanced AI upscaling for clearer, high-resolution visuals with minimal artifacts. Powered by RealESRGAN, this extension enhances each frame individually, preserving sharpness and detail—perfect for restoring old footage or improving video quality."
  },
  {
    icon: <Speaker className="w-6 h-6 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" />,
    title: "AI Music",
    description: "Effortlessly create original music with the power of AI. Thbis feature generates unique melodies, harmonies, and rhythms, allowing users to produce high-quality compositions tailored to their needs."
  },
 
];


const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Ultimate All-in-One AI Tools Platform
            </h2>
            <p className="text-lg text-muted-foreground">
              Unlock the full potential of AI with our comprehensive suite of tools designed for every creative and business need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="mb-4 p-3 rounded-full bg-muted w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-12">
        {/* Individual Tools Section */}


        {/* API Integration Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Content */}
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-100 px-3 py-1 rounded-full mb-4">
                API Integrate
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Create your own apps using our API
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Integrate our AI capabilities directly into your applications with our comprehensive API.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm">Code faster with AI</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm">Find, fix and explain code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm">Generate unit tests</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm">AI-powered chat for your code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <span className="text-sm">Build custom commands</span>
                </li>
              </ul>
              <a href="https://oneaikit.com/login">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">
                  Try API Access →
                </Button>
              </a>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://oneaikit.com/login//public/uploads/mascot_small.png"
                alt="All in one ai tools API Integration"
                className="rounded-xl w-full max-w-[600px]"
              />
            </div>
          </div>
        </section>

      </div>


      </div>
    </section>
  );
};

export default Features;