import { Metadata } from 'next';
import Script from 'next/script';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import { Button } from '@/components/ui/button';
import ImageGenerator from '@/components/home/ImageGenerator';
import DynamicHero from '@/components/DynamicHero';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Text to Image Generator Free Unlimited – No Login | OneAIKit',
  description: 'Use our AI text to image generator to create unlimited realistic or artistic images from your text prompts. 100% free, no login or signup required.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/text-to-image',
  },
  openGraph: {
    title: 'Free AI Text to Image Generator – Unlimited, No Login | OneAIKit',
    description: 'Convert text to image with our AI generator powered by DALL·E and Stable Diffusion. Free, realistic, and no sign-up needed.',
    url: 'https://oneaikit.com/text-to-image',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-text-to-image.png',
        alt: 'AI Text to Image Generator Free - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Text to Image Generator – Free, No Login Needed',
    description: 'Generate AI images online from text prompts. Free forever, unlimited use, and no signup required.',
    images: ['https://oneaikit.com/og-image-text-to-image.png'],
  },
  keywords: [
    'ai text to image',
    'ai text to image generator',
    'ai text to image free',
    'text to image generator ai',
    'ai image generator from text',
    'ai text to image free unlimited',
    'ai text to image converter',
    'realistic ai image generator',
    'ai image generator no login',
    'text to image ai online free',
  ],
};

export default function TextToImagePage() {
  const faqContent: FaqItem[] = [
    { question: 'Is this AI text to image tool free?', answer: 'Yes. This AI text to image generator is 100% free and requires no login or signup.' },
    { question: 'Can I use it to generate unlimited images?', answer: 'Yes, you can generate multiple AI images without any limits or credits.' },
    { question: 'Does it support realistic image generation?', answer: 'Yes, you can choose realistic, anime, or digital art styles with mood and lighting options.' },
    { question: 'Which AI models are available?', answer: 'You can use OpenAI DALL·E or Stable Diffusion depending on your visual preferences.' },
    { question: 'Do I need to download the app?', answer: 'No. This is a browser-based AI text to image generator. No installation needed.' },
    { question: 'Where are my generated images stored?', answer: 'Images are stored in the OneAIKit public gallery and can be accessed via URL.' },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Amanda',
      role: 'Digital Artist',
      content: 'This is the best AI text to image generator I’ve used. It’s free and produces very realistic results!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
    {
      name: 'Leo',
      role: 'Content Creator',
      content: 'Perfect for social media visuals. I love how I can generate images from any prompt instantly.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
    {
      name: 'Jenny',
      role: 'Marketing Specialist',
      content: 'Finally, a free AI image generator with no login and full quality export!',
      rating: 4,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Enter your text prompt',
      description: 'Type what you want to see, e.g., “futuristic city at sunset” or “anime warrior in forest.”',
    },
    {
      number: '2',
      title: 'Choose model & style',
      description: 'Select from DALL·E or Stable Diffusion. Customize mood, style, and resolution.',
    },
    {
      number: '3',
      title: 'Generate unlimited images',
      description: 'Click generate to create your images. Preview and download instantly – no login.',
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OneAIKit - Free Text to Image Generator',
          operatingSystem: 'Web',
          applicationCategory: 'WebApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '134',
          },
        })}
      </Script>
      <DynamicHero
  title="Free AI Text to Image Generator – No Login Required"
  subtitle="Create images from your imagination"
  description="Instantly convert text into realistic or artistic AI images. Free, unlimited, and no sign-up needed. Powered by DALL·E and Stable Diffusion."
  badgeText="Now Supports Realistic & Anime Styles"
  badgeImage="/avatar.png"
/>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">

      

        <ImageGenerator />

            <DynamicUseCases
        title="Who Can Use This Text to Image Tool?"
        items={[
          {
            icon: '🎨',
            title: 'Digital Artists & Illustrators',
            description: 'Create concept art, anime scenes, and digital illustrations from text prompts in seconds.',
          },
          {
            icon: '🖼️',
            title: 'Graphic & UI/UX Designers',
            description: 'Generate visual ideas, moodboards, landing hero shots, or icon concepts with AI.',
          },
          {
            icon: '📱',
            title: 'Content Creators & Influencers',
            description: 'Produce eye-catching visuals for YouTube thumbnails, social posts, and video covers.',
          },
          {
            icon: '🧠',
            title: 'AI Enthusiasts & Developers',
            description: 'Explore text-to-image model capabilities using DALL·E and Stable Diffusion outputs.',
          },
        ]}
      />

        <WhyUseArticleGenerator
          title="Why Use Our AI Text to Image Generator?"
          subtitle="Unlimited, flexible, and no login required."
          benefits={[
            { text: '100% free and unlimited usage.' },
            { text: 'No login or sign-up needed.' },
            { text: 'Choose between realistic or anime style.' },
            { text: 'Download high-resolution results instantly.' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials
          data={testimonials}
          title="What Users Are Saying"
          subtitle="Loved by digital artists, creators, and content teams"
        />
      </div>
    </>
  );
}
