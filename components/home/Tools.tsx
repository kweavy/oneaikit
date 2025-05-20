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

const tools = [
  { 
    icon: <FileText className="w-6 h-6" />, 
    title: "AI to Text Generator",
    description: "Generate text content using AI-powered tools.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
  },
  { 
    icon: <Image className="w-6 h-6" />, 
    title: "AI Text To Image Generator",
    description: "Create images from text descriptions using AI.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
  },
  { 
    icon: <Code className="w-6 h-6" />, 
    title: "AI Code Generator",
    description: "Automatically generate code snippets and projects.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  },
  { 
    icon: <MessageSquare className="w-6 h-6" />, 
    title: "AI to Live Chat",
    description: "Engage with users through AI-powered live chat.",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  { 
    icon: <Mic className="w-6 h-6" />, 
    title: "AI Speech to Text",
    description: "Convert speech into text using AI transcription.",
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  },
  { 
    icon: <Speaker className="w-6 h-6" />, 
    title: "AI Text to Voice",
    description: "Transform text content into natural-sounding voice.",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "External Chatbot",
    description: "Allow end users to create, train, and embed custom chatbots directly onto their websites.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "AI Social Media Suite",
    description: "The AI Social Media Suite extension simplifies content creation and management, making it effortless to build and maintain a strong online presence using MagicAI. Seamlessly integrate with Facebook, Instagram, X (Twitter), and LinkedIn, allowing you to manage all your platforms from one intuitive dashboard. No more juggling multiple apps—create, edit, and publish content with ease.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "AI Chat Pro",
    description: "Discover a new level of productivity with our redesigned chat layout—built to emphasize clarity, speed, and ease of use.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Human Agent for External Chatbot",
    description: "Seamlessly transition from AI to human support with the Live Real Agent extension. This powerful feature allows for real-time, direct communication with human agents within your external chatbot, ensuring that your users receive personalized, empathetic assistance when AI isn’t enough to address their needs.",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "AI Image Editor",
    description: "The Image Editor is an all-in-one extension designed to streamline image creation and editing, making the process both seamless and highly efficient. Whether you’re working with original images or modifying existing ones, you can generate or edit visuals with live preview and intuitive controls that allow for precise adjustments.",
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Mailchimp Integration",
    description: "Connect your MagicAI customers to your Mailchimp audience seamlessly with the new Mailchimp Newsletter Extension. This extension is designed to automatically add new MagicAI users to your Mailchimp audience, streamlining your email marketing efforts and ensuring you can engage with your customers right from the start.",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "SEO Tool",
    description: "Introducing our SEO Tool - your ultimate content optimization companion. Seamlessly integrated with our Article Wizard, it suggests trending keywords for articles, search questions for outlines, and optimizes meta titles, descriptions, and keywords for maximum SEO impact on admin side for the website.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "AI Social Media",
    description: "MagicAI now offers a comprehensive suite of tools designed to streamline the entire process, from creation to distribution. You can now create a social media post and schedule it to be published directly on Linkedin and X ensuring they reach your audience exactly when you want them to.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "WordPress Integration",
    description: "Experience unparalleled control over your content creation and publishing journey with MagicAI. With MagicAI’s revolutionary extension, convenience reaches new heights as we automate the entire process of generating and publishing articles directly to your WordPress platform.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    icon: <Speaker className="w-6 h-6" />,
    title: "Newsletter",
    description: "Staying connected with your audience is more crucial than ever. With our Newsletter Add-On, seamlessly integrated into MagicAI, you can effortlessly create, customize, and distribute captivating newsletters tailored to your subscribers’ preferences.",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "AI Video To Video",
    description: "Upgrade your videos with advanced AI upscaling for clearer, high-resolution visuals with minimal artifacts. Powered by RealESRGAN, this extension enhances each frame individually, preserving sharpness and detail—perfect for restoring old footage or improving video quality.",
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    icon: <Speaker className="w-6 h-6" />,
    title: "AI Music",
    description: "Effortlessly create original music with the power of AI. Thbis feature generates unique melodies, harmonies, and rhythms, allowing users to produce high-quality compositions tailored to their needs.",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "REST API Access",
    description: "Integrate our AI capabilities directly into your applications with our comprehensive API.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  }
];

const enterpriseFeatures = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description: "SOC 2 Type II certified with end-to-end encryption and advanced security features.",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Custom Workflows",
    description: "Build and automate custom AI workflows tailored to your business needs.",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "REST API Access",
    description: "Integrate our AI capabilities directly into your applications with our comprehensive API.",
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Management",
    description: "Advanced user roles, permissions, and collaboration features for enterprise teams.",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
  }
];

const Tools = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-12">
        {/* Individual Tools Section */}
        <div className="grid grid-cols-1 items-center mb-32">
         
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <div className={`p-3 rounded-full ${tool.color} w-fit mb-4`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-medium text-lg">{tool.title}</h3>
                  {tool.description && (
                    <p className="text-muted-foreground text-sm mt-2 whitespace-pre-line">{tool.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

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
                className="rounded-xl shadow-lg w-full max-w-[600px]"
              />
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Tools;