import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="uai-700  font-bold text-2xl">
                ONE<span className="text-blue-500">AI</span>KIT.COM
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              One subscription, unlimited AI tools. Unlock your business potential by letting the AI work and generate money for you.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          <div>
           <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
                 <li>
                <Link href="/ai-product-photography" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Product Photography
                </Link>
              </li>
               <li>
                <Link href="/ai-combine-photo" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Combine Photos
                </Link>
              </li>
               <li>
                <Link href="/ai-image-to-video" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Image to Video Generator
                </Link>
              </li>
               <li>
                <Link href="/ai-video-generator" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Video Generator
                </Link>
              </li>
              <li>
                <Link href="/ai-text-to-images" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Text to Image
                </Link>
              </li>
              <li>
                <Link href="/ai-article-generator-free" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Article Generator
                </Link>
              </li>
                <li>
                <Link href="/ai-photo-filters" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Photo Filters
                </Link>
              </li>
               <li>
                <Link href="/chat" className="text-muted-foreground hover:text-primary transition-colors">
                  Chat with AI Personalities
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 oneaikit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            All images are for demo purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;