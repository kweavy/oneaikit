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
import ImageToImageGenerator from '@/components/ImagetoImagegenerator';
import ImageToVideoGenerator from '@/components/ImagetoVideo';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Photo Filter Generator Free – Ghibli, Anime, and More | OneAIKit',
  description: 'Apply AI photo filters like Ghibli, anime, realistic, cartoon, and more. 100% free, no login needed. Enhance and stylize your photos instantly with AI.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/ai-photo-filter',
  },
  openGraph: {
    title: 'Free AI Photo Filter – Ghibli, Anime, Cartoon, Realistic | OneAIKit',
    description: 'Transform your photos using Ghibli, anime, cartoon, and more AI photo filters. No signup. Fast and free online image filter generator.',
    url: 'https://oneaikit.com/ai-photo-filter',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-photo-filter.png',
        alt: 'AI Photo Filter Generator Free - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Photo Filter – Anime, Ghibli, Cartoon | Free Online Tool',
    description: 'Use AI to stylize your photos in seconds. Try anime, ghibli, cartoon, and many more filters. Free and unlimited.',
    images: ['https://oneaikit.com/og-image-photo-filter.png'],
  },
  keywords: [
    'ai photo filter',
    'ai photo filter online free',
    'ai photo filter ghibli',
    'ai photo filter anime',
    'ai photo filter free',
    'ai photo filter app',
    'ai photo filter remover',
    'ai photo filter editor',
    'ai photo filter generator',
    'ai photo filter enhancer'
  ],
};

export default function AIPhotoFilterPage() {
  const faqContent: FaqItem[] = [
    { question: 'Is this AI photo filter tool free?', answer: 'Yes. This AI filter is completely free and requires no login.' },
    { question: 'What styles can I apply to my photo?', answer: 'You can apply styles like Ghibli, anime, cartoon, pixel art, realistic, and more.' },
    { question: 'Do I need to install anything?', answer: 'No, the tool works directly in your browser.' },
    { question: 'Can I upload my own photo?', answer: 'Yes. You can upload your own image and apply any filter style you choose.' },
    { question: 'Where is the result saved?', answer: 'The generated photo will be displayed and downloadable instantly.' },
    { question: 'Does it work on mobile?', answer: 'Yes, the AI photo filter tool works on both desktop and mobile devices.' },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Amanda',
      role: 'Content Creator',
      content: 'I transformed my boring selfies into anime art! Amazing free photo filter tool with tons of styles!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
    {
      name: 'Leo',
      role: 'Streamer',
      content: 'The Ghibli filter is my favorite. It gives my photos that dreamy vibe. Highly recommend!',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
    {
      name: 'Jenny',
      role: 'Designer',
      content: 'Perfect for quick concept art. Upload a photo, apply a filter, done. No signup needed!',
      rating: 4,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Upload a photo',
      description: 'Choose any JPG or PNG file you want to stylize.',
    },
    {
      number: '2',
      title: 'Choose a filter style',
      description: 'Pick from anime, ghibli, cartoon, realistic, and many more styles.',
    },
    {
      number: '3',
      title: 'Download your image',
      description: 'Get your transformed image instantly and use it anywhere you want.',
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OneAIKit - Free AI Photo Filter Generator',
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
            reviewCount: '183',
          },
        })}
      </Script>
      <DynamicHero
        title="AI Photo Filter Generator – Ghibli, Anime, Cartoon & More"
        subtitle="Stylize your photo using AI for free"
        description="Upload your image and apply stunning filters like Ghibli, Anime, Pixel Art, Cartoon, and more. Free forever, no login."
        badgeText="Now Supports 15+ Styles"
        badgeImage="/avatar.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <ImageToVideoGenerator />

        <DynamicUseCases
          title="Who Can Use This AI Photo Filter Tool?"
          items={[
            {
              icon: '🎨',
              title: 'Artists & Hobbyists',
              description: 'Quickly turn your photos into art with styles like Ghibli, Oil Painting, and more.',
            },
            {
              icon: '📷',
              title: 'Instagram & Social Media Users',
              description: 'Make your selfies stand out with anime and cartoon filters.',
            },
            {
              icon: '🧠',
              title: 'AI Explorers & Designers',
              description: 'Test image-to-image AI models and visualize new art forms with one click.',
            },
          ]}
        />

        <WhyUseArticleGenerator
          title="Why Use Our AI Photo Filter Generator?"
          subtitle="Free, instant, and stunning transformation."
          benefits={[
            { text: 'Use 15+ visual filter styles like Ghibli and Cartoon' },
            { text: 'No signup or credit card needed' },
            { text: 'Optimized for mobile & desktop' },
            { text: 'Get base64 or downloadable images' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials
          data={testimonials}
          title="What Users Are Saying"
          subtitle="Loved by creators, designers, and photo filter fans"
        />
      </div>
    </>
  );
}
