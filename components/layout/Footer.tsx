import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {/* Branding */}
<div className="lg:col-span-1 max-w-sm">
  <Link href="/" className="inline-block">
    <span className="uai-700 font-bold text-2xl">
      ONE<span className="text-blue-500">AI</span>KIT.COM
    </span>
  </Link>
  <p className="text-muted-foreground text-sm mt-3">
    One subscription, unlimited AI tools. Unlock your business potential by letting the AI work and generate money for you.
  </p>
  <div className="flex space-x-4 mt-4">
    <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
    <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
    <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
    <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
  </div>
</div>


         
          {/* Writing & Chat */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Writing & Chat</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/ai-writer" className="hover:text-primary">AI Writer</Link></li>
              <li><Link href="/tools/ai-rewriter" className="hover:text-primary">AI ReWriter</Link></li>
              <li><Link href="/tools/ai-chat" className="hover:text-primary">AI Chat</Link></li>
              <li><Link href="/tools/ai-chat-pro" className="hover:text-primary">AI Chat Pro</Link></li>
              <li><Link href="/tools/ai-chat-image" className="hover:text-primary">AI Chat Image</Link></li>
              <li><Link href="/tools/ai-article-wizard" className="hover:text-primary">AI Article Wizard</Link></li>
              <li><Link href="/ai-article-generator-free" className="hover:text-primary">AI Article Generator</Link></li>
              <li><Link href="/chat" className="hover:text-primary">Chat with AI Personalities</Link></li>
              <li><Link href="/tools/chat-settings" className="hover:text-primary">Chat Settings</Link></li>
              <li><Link href="/tools/ai-persona" className="hover:text-primary">AI Persona</Link></li>
              <li><Link href="/tools/brand-voice" className="hover:text-primary">Brand Voice</Link></li>
              <li><Link href="/tools/ai-social-media" className="hover:text-primary">AI Social Media</Link></li>
            </ul>
          </div>

          {/* Image Tools */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Image Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/ai-image" className="hover:text-primary">AI Image</Link></li>
              <li><Link href="/tools/ai-photo-studio" className="hover:text-primary">AI Photo Studio</Link></li>
              <li><Link href="/ai-product-photography" className="hover:text-primary">AI Product Photography</Link></li>
              <li><Link href="/ai-combine-photo" className="hover:text-primary">AI Combine Photos</Link></li>
              <li><Link href="/ai-photo-filters" className="hover:text-primary">AI Photo Filters</Link></li>
              <li><Link href="/tools/ai-image-editor" className="hover:text-primary">AI Image Editor</Link></li>
              <li><Link href="/ai-text-to-images" className="hover:text-primary">AI Text to Image</Link></li>
            </ul>
          </div>

          {/* Video & Audio */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Video & Audio</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/ai-video" className="hover:text-primary">AI Video</Link></li>
              <li><Link href="/tools/ai-video-pro" className="hover:text-primary">AI Video Pro</Link></li>
              <li><Link href="/tools/ai-youtube" className="hover:text-primary">AI YouTube</Link></li>
              <li><Link href="/tools/ai-music" className="hover:text-primary">AI Music</Link></li>
              <li><Link href="/tools/ai-voiceover" className="hover:text-primary">AI Voiceover</Link></li>
              <li><Link href="/tools/ai-voice-isolator" className="hover:text-primary">AI Voice Isolator</Link></li>
              <li><Link href="/ai-image-to-video" className="hover:text-primary">AI Image to Video</Link></li>
              <li><Link href="/ai-video-generator" className="hover:text-primary">AI Video Generator</Link></li>
            </ul>
          </div>

          {/* Utilities */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Utilities</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/ai-file-chat" className="hover:text-primary">AI File Chat</Link></li>
              <li><Link href="/tools/ai-detector" className="hover:text-primary">AI Detector</Link></li>
              <li><Link href="/tools/ai-plagiarism" className="hover:text-primary">AI Plagiarism</Link></li>
              <li><Link href="/tools/seo-tool" className="hover:text-primary">SEO Tool</Link></li>
              <li><Link href="/tools/ai-speech-to-text" className="hover:text-primary">AI Speech to Text</Link></li>
              <li><Link href="/tools/ai-rss" className="hover:text-primary">AI RSS</Link></li>
              <li><Link href="/tools/wordpress-integration" className="hover:text-primary">WordPress Integration</Link></li>
              <li><Link href="/tools/ai-bots" className="hover:text-primary">AI Bots</Link></li>
              <li><Link href="/tools/human-agent" className="hover:text-primary">Human Agent</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms-of-use" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary">Cookie Policy</Link></li>
              <li><Link href="/gdpr" className="hover:text-primary">GDPR</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 oneaikit. All rights reserved.</p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">All images are for demo purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
