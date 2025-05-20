import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="rounded-xl container mx-auto px-4 py-16 md:py-24 bg-[#020617]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm bg-white/10 text-white inline-block px-4 py-1 rounded-full mb-4 font-semibold">
          ALL-IN-ONE AI TOOLS
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Build with <span className="rainbow">EverythingAITools</span> — <i>Your Ultimate AI Suite</i>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Access 20+ AI features in one subscription — from writing and chat to image generation, automation, voice, SEO, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-medium mb-12">
          <div className="flex items-center gap-2">
            ✍️ AI Writer, Chatbot, & Editor
          </div>
          <div className="flex items-center gap-2">
            🧠 No-code Automations
          </div>
          <div className="flex items-center gap-2">
            🎧 Speech, Audio & Music AI
          </div>
          <div className="flex items-center gap-2">
            🔌 API & App Integrations
          </div>
        </div>
        <a 
          href="https://oneaikit.com/login" 
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Start Free Trial Now
        </a>
        <div className="mt-12">
          <img 
            src="https://ultimateai.io/wp-content/uploads/2024/05/Frame-883371362.png" 
            alt="Demo Showcase" 
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;