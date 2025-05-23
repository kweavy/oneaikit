'use client';

import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const ProductPopover = () => {
  return (
    <Popover>
      <PopoverTrigger className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1">
        Products
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={12}
        className="w-screen max-w-7xl border-t-0 border-x-0 rounded-none px-10 py-8 bg-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.1)]"
      >
        <div className="flex gap-10">
          {/* Sidebar Apps */}
          <div className="w-60">
            <h4 className="text-purple-600 font-semibold mb-4">Apps</h4>
            <ul className="space-y-4 text-sm">
              {[
                {
                  name: 'Browser Extension',
                  desc: 'Supports Chrome & Edge',
                  href: '/apps/browser-extension'
                },
                {
                  name: 'Desktop Apps',
                  desc: 'Supports Windows & Mac',
                  href: '/apps/desktop'
                },
                {
                  name: 'Mobile Apps',
                  desc: 'Supports Android & iOS',
                  href: '/apps/mobile'
                },
                {
                  name: 'Monica Code',
                  desc: 'VSCode & JetBrains Assistant',
                  href: '/apps/code'
                }
              ].map((app, i) => (
                <Link
                  key={i}
                  href={app.href}
                  className="flex items-center justify-between hover:bg-muted px-2 py-2 rounded-md"
                >
                  <div className="flex gap-3 items-center">
                    <span className="inline-block w-6 h-6 bg-gray-200 rounded" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-gray-800">{app.name}</span>
                      <span className="text-xs text-muted-foreground">{app.desc}</span>
                    </div>
                  </div>
                  <ChevronRight className="text-muted-foreground w-4 h-4" />
                </Link>
              ))}
            </ul>
          </div>

          {/* Toolkit Columns */}
          <div className="grid grid-cols-4 gap-10 text-sm w-full">
            {/* Writing & Chat */}
            <div>
              <h4 className="text-purple-600 font-semibold mb-4 flex items-center justify-between">
                Writing & Chat
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </h4>
              <ul className="space-y-2 text-gray-800 font-medium">
                {[
                  { name: 'AI Writer', href: '/tools/ai-writer' },
                  { name: 'AI ReWriter', href: '/tools/ai-rewriter' },
                  { name: 'AI Chat', href: '/tools/ai-chat' },
                  { name: 'AI Chat Pro', href: '/tools/ai-chat-pro' },
                  { name: 'AI Chat Image', href: '/tools/ai-chat-image' },
                  { name: 'AI Article Wizard', href: '/tools/ai-article-wizard' },
                  { name: 'Chat with AI Personalities', href: '/chat' },
                  { name: 'Chat Settings', href: '/tools/chat-settings' },
                  { name: 'AI Persona', href: '/tools/ai-persona' },
                  { name: 'Brand Voice', href: '/tools/brand-voice' },
                  { name: 'AI Social Media', href: '/tools/ai-social-media' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Tools */}
            <div>
              <h4 className="text-purple-600 font-semibold mb-4 flex items-center justify-between">
                Image Tools
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </h4>
              <ul className="space-y-2 text-gray-800 font-medium">
                {[
                  { name: 'AI Image', href: '/tools/ai-image' },
                  { name: 'AI Photo Studio', href: '/tools/ai-photo-studio' },
                  { name: 'AI Product Photography', href: '/tools/ai-product-photography' },
                  { name: 'AI Image Editor', href: '/tools/ai-image-editor' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video & Audio */}
            <div>
              <h4 className="text-purple-600 font-semibold mb-4 flex items-center justify-between">
                Video & Audio
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </h4>
              <ul className="space-y-2 text-gray-800 font-medium">
                {[
                  { name: 'AI Video', href: '/tools/ai-video' },
                  { name: 'AI Video Pro', href: '/tools/ai-video-pro' },
                  { name: 'AI YouTube', href: '/tools/ai-youtube' },
                  { name: 'AI Music', href: '/tools/ai-music' },
                  { name: 'AI Voiceover', href: '/tools/ai-voiceover' },
                  { name: 'AI Voice Isolator', href: '/tools/ai-voice-isolator' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility & Integration */}
            <div>
              <h4 className="text-purple-600 font-semibold mb-4 flex items-center justify-between">
                Utilities & Integration
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </h4>
              <ul className="space-y-2 text-gray-800 font-medium">
                {[
                  { name: 'AI File Chat', href: '/tools/ai-file-chat' },
                  { name: 'AI Detector', href: '/tools/ai-detector' },
                  { name: 'AI Plagiarism', href: '/tools/ai-plagiarism' },
                  { name: 'SEO Tool', href: '/tools/seo-tool' },
                  { name: 'AI Speech to Text', href: '/tools/ai-speech-to-text' },
                  { name: 'AI RSS', href: '/tools/ai-rss' },
                  { name: 'Integration to WordPress', href: '/tools/wordpress-integration' },
                  { name: 'AI Bots', href: '/tools/ai-bots' },
                  { name: 'Human Agent', href: '/tools/human-agent' }
                ].map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="hover:text-primary">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProductPopover;
