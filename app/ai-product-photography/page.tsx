import { Metadata } from 'next';
import Script from 'next/script';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import DynamicHero from '@/components/DynamicHero';
import VideoGenerator from '@/components/VideoGenerator';
import AIProductPhotography from '@/components/ProductPhotography';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Product Photography Free – Generator with Models, Editor & Tools | OneAIKit',
  description: 'Generate high-quality AI product photos for free. Add models, enhance visuals, edit jewelry images – no login, no watermark required.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/ai-product-photography',
  },
  openGraph: {
    title: 'AI Product Photography Tool – Free Generator with Editor and Enhancer',
    description: 'Create stunning product photos using AI. Add models, edit backgrounds, enhance jewelry images. 100% free with no watermark.',
    url: 'https://oneaikit.com/ai-product-photography',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-ai-product-photography.png',
        alt: 'AI Product Photography - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Product Photography Generator – Add Models, Edit Jewelry',
    description: 'AI-powered product photo generator. Perfect for ecommerce, jewelry, and creative editors. Free, no watermark, no login.',
    images: ['https://oneaikit.com/og-image-ai-product-photography.png'],
  },
  keywords: [
    'ai product photography',
    'ai product photography free',
    'ai product photography with models',
    'ai product photography generator free',
    'ai product photography editor',
    'ai product photography enhancer',
    'ai product photography jewelry',
    'ai product photography tools',
    'ai product photography canva',
    'ai product photography free reddit',
  ],
};

export default function AiProductPhotographyPage() {
  const faqContent: FaqItem[] = [
    {
      question: 'Is this AI product photography tool free?',
      answer: 'Yes! 100% free with no watermark and no login required.',
    },
    {
      question: 'Can I add models to product photos?',
      answer: 'Yes. You can generate product images with lifestyle models in realistic settings.',
    },
    {
      question: 'Does it work for jewelry products?',
      answer: 'Definitely. The tool is optimized for jewelry, small objects, and fine details.',
    },
    {
      question: 'Is this like Canva or an editor?',
      answer: 'Yes, but with AI. It automates background editing, enhancement, and model placement.',
    },
    {
      question: 'Can I use this for Reddit or content creation?',
      answer: 'Absolutely. It’s perfect for quick visual content, Reddit product reviews, or Canva mockups.',
    },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Maya L.',
      role: 'Jewelry Seller',
      content: 'Best AI product photography tool ever. My ring shots look like they were done in a studio!',
      rating: 5,
      image: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg',
    },
    {
      name: 'Kevin D.',
      role: 'Online Store Owner',
      content: 'The AI adds perfect models to my clothing photos. No photographer needed.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      name: 'Lana T.',
      role: 'Canva Designer',
      content: 'I use this to generate product mockups for my templates. It saves hours of editing.',
      rating: 4,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Upload Product or Type Prompt',
      description: 'Upload a basic product photo or type what your item looks like.',
    },
    {
      number: '2',
      title: 'Choose Models & Editing Style',
      description: 'Select optional models, background, and photo enhancement options.',
    },
    {
      number: '3',
      title: 'Generate & Download Instantly',
      description: 'Click generate and get high-resolution, watermark-free product photos.',
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OneAIKit - AI Product Photography',
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
            reviewCount: '451',
          },
        })}
      </Script>

      <DynamicHero
        title="AI Product Photography – Generator Free with Models & Editor Tools"
        subtitle="Create studio-quality product photos instantly with AI"
        description="Upload a product image or describe your item. Add models, choose styles, and generate commercial-ready visuals with no watermark."
        badgeText="Text-to-Photo & Photo Enhancer with AI Editor"
        badgeImage="/avatar.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <AIProductPhotography />

        <DynamicUseCases
          title="Who Can Use This AI Product Photography Tool?"
          items={[
            { icon: '🛍️', title: 'Ecommerce & Dropshippers', description: 'Generate stunning product photos to boost store conversions.' },
            { icon: '💍', title: 'Jewelry Sellers', description: 'Enhance jewelry images with AI lighting and reflection tools.' },
            { icon: '👗', title: 'Fashion Brands', description: 'Add AI-generated models to showcase clothing with lifestyle context.' },
            { icon: '🎨', title: 'Canva & Reddit Creators', description: 'Design product visuals for posts or mockups using AI-powered editors.' },
          ]}
        />

        <WhyUseArticleGenerator
          title="Why Use Our AI Product Photo Editor?"
          subtitle="Your free solution for enhanced, model-ready product shots."
          benefits={[
            { text: 'Generate product photos with AI in seconds' },
            { text: 'Add models, props, and shadows automatically' },
            { text: 'Jewelry & small items supported with high detail' },
            { text: 'Free to use, no watermark, no login needed' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials data={testimonials} title="What Users Are Saying" subtitle="Trusted by ecommerce sellers, editors, and creators" />
      </div>
    </>
  );
}
