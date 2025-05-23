import { Metadata } from 'next';
import Script from 'next/script';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import DynamicHero from '@/components/DynamicHero';
import VideoGenerator from '@/components/VideoGenerator';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Video Generator Free – From Text or Image, No Watermark | OneAIKit',
  description: 'Generate AI videos online from text prompts or images using powerful models like Kling AI and Stable Diffusion. 100% free, no watermark, no login required.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/ai-video-generator',
  },
  openGraph: {
    title: 'Free AI Video Generator – From Text or Image | OneAIKit',
    description: 'Create AI-generated videos from text or images with our online tool. No login, watermark-free, and fully free to use.',
    url: 'https://oneaikit.com/ai-video-generator',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-ai-video-generator.png',
        alt: 'AI Video Generator - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Video Generator Free Online – No Login Needed',
    description: 'Generate AI videos from text prompts or photos. 100% free, no watermark, powered by Kling and Stability AI.',
    images: ['https://oneaikit.com/og-image-ai-video-generator.png'],
  },
  keywords: [
    'ai video generator',
    'ai video generator free',
    'ai video generator from text free',
    'ai video generator no watermark',
    'ai video generator from image',
    'ai generate video from text',
    'ai text to video',
    'ai text to video generator',
    'generate ai video free',
    'best ai tool to generate video from text'
  ],
};

export default function AiVideoGenerator() {
  const faqContent: FaqItem[] = [
    { question: 'Is this AI video generator free?', answer: 'Yes, OneAIKit provides a 100% free AI video generation tool. No credit card or login required.' },
    { question: 'Can I generate video from both text and image?', answer: 'Absolutely! You can generate videos from text prompts or image uploads with optional style descriptions.' },
    { question: 'Are the generated videos watermarked?', answer: 'No. All videos generated using this tool are free of watermarks and can be used commercially.' },
    { question: 'Do I need to install any app?', answer: 'No installation is required. Everything runs in your browser for instant AI video generation.' },
    { question: 'What models are used for video generation?', answer: 'We support Kling AI for text-to-video and Stability AI for image-to-video generation with realistic motion.' },
    { question: 'Can I use this AI video generator for YouTube or TikTok content?', answer: 'Yes. Our tool supports formats suitable for social media, short-form content, and creative storytelling.' },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Rizky',
      role: 'YouTube Creator',
      content: 'Amazingly easy to use. I generated a cinematic AI video from just one sentence!',
      rating: 5,
      image: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg',
    },
    {
      name: 'Chloe',
      role: 'Animator',
      content: 'I tried other tools but this AI video generator gives the cleanest output without watermarks.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      name: 'Daniel',
      role: 'Digital Marketer',
      content: 'Great tool to quickly create video content for ads and social posts. Free and flexible!',
      rating: 4,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Enter Prompt or Upload Image',
      description: 'Choose whether to type a video idea or upload a picture to animate.',
    },
    {
      number: '2',
      title: 'Select Style and Aspect Ratio',
      description: 'Customize the animation using cinematic, ghibli, or pixel styles and choose video format.',
    },
    {
      number: '3',
      title: 'Generate and Download MP4',
      description: 'Click Generate and wait a few seconds. Your AI video will be ready to save and share.',
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OneAIKit - AI Video Generator',
          operatingSystem: 'Web',
          applicationCategory: 'WebApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '251',
          },
        })}
      </Script>

      <DynamicHero
        title="AI Video Generator – From Text or Image, Free & No Watermark"
        subtitle="Create AI videos instantly from your ideas"
        description="Generate AI videos online from text or image prompts using the latest technology. No login required."
        badgeText="Text-to-Video & Image-to-Video Powered by AI"
        badgeImage="/avatar.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <VideoGenerator />

        <DynamicUseCases
          title="Who Can Use This AI Video Generator?"
          items={[
            { icon: '🎬', title: 'YouTube & Video Creators', description: 'Produce short-form AI videos from text or visual references.' },
            { icon: '🖌️', title: 'Illustrators & Designers', description: 'Turn your concept art or images into animated clips with AI.' },
            { icon: '📲', title: 'Social Media Managers', description: 'Generate TikTok, Shorts, and Reels content easily and quickly.' },
            { icon: '⚙️', title: 'AI Experimenters & Developers', description: 'Test Kling and Stability APIs with UI that makes iteration simple.' },
          ]}
        />

        <WhyUseArticleGenerator
          title="Why Use OneAIKit’s AI Video Generator?"
          subtitle="Free, watermark-free, and designed for creativity."
          benefits={[
            { text: 'Create videos from text or image prompts.' },
            { text: 'Supports Kling AI & Stability Diffusion.' },
            { text: 'No watermark, unlimited use.' },
            { text: 'Easy-to-use interface for all skill levels.' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials data={testimonials} title="What Creators Say" subtitle="Hear from real users of our AI video tool" />
      </div>
    </>
  );
}
