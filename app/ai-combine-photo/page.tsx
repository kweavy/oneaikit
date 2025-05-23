import { Metadata } from 'next';
import Script from 'next/script';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import DynamicHero from '@/components/DynamicHero';
import AICombineMultiplePhotoPage from '@/components/CombinePhoto';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Combine Photos into One – Free Tool for Product & Agency Shoots | OneAIKit',
  description: 'Combine multiple product photos into one image with AI. Perfect for agencies, ecommerce, and catalog shots. Free, no login, no watermark.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/ai-combine-photo',
  },
  openGraph: {
    title: 'AI Combine Photos – Free Tool for Product Shoots & Agencies',
    description: 'Merge multiple product photos into a single frame using AI. Great for jewelry, fashion, and ecommerce shots. No watermark, 100% free.',
    url: 'https://oneaikit.com/ai-combine-photo',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-ai-combine-photo.png',
        alt: 'AI Combine Product Photos - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Combine Product Photos with AI – Free Tool for Creatives & Brands',
    description: 'Use AI to merge two or more product photos into one. Designed for product photographers, agencies, and designers.',
    images: ['https://oneaikit.com/og-image-ai-combine-photo.png'],
  },
  keywords: [
    'ai combine photos into one',
    'ai combine two photos in one frame',
    'ai merge photos free',
    'ai for agency product shoot',
    'ai combine product images',
    'merge product photo into one',
    'combine photo ecommerce',
    'combine jewelry photo shoot ai',
  ],
};

export default function AiCombinePhotoPage() {
  const faqContent: FaqItem[] = [
    {
      question: 'Can I combine two or more product photos into one?',
      answer: 'Yes, simply upload your images and let the AI merge them into a single frame.',
    },
    {
      question: 'Is this tool good for agency or catalog shoots?',
      answer: 'Absolutely! It’s built for agencies needing fast, high-quality merged product visuals.',
    },
    {
      question: 'Do I need to sign in or pay?',
      answer: 'No. This tool is 100% free to use, with no login required and no watermark.',
    },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Aria K.',
      role: 'Product Photographer',
      content: 'Finally, a tool to combine multiple photos without Photoshop. Saves me hours!',
      rating: 5,
      image: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg',
    },
    {
      name: 'Leo W.',
      role: 'Agency Creative Director',
      content: 'Our clients love the merged visuals. OneAIKit makes photo composition effortless.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Upload Multiple Photos',
      description: 'Upload two or more product photos from different angles or setups.',
    },
    {
      number: '2',
      title: 'Choose Merge Style',
      description: 'Select how you want the images combined — layout, alignment, or scene composition.',
    },
    {
      number: '3',
      title: 'Generate & Download',
      description: 'Let the AI generate one merged photo. Download it instantly, watermark-free.',
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OneAIKit - AI Combine Photos',
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
        title="Combine Product Photos with AI Free"
        subtitle="Merge multiple shots into one frame with AI"
        description="Upload product shots, merge with AI, and download a high-resolution composite image – watermark-free and free to use."
        badgeText="Merge Product Images & Enhance with AI"
        badgeImage="/avatar.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <AICombineMultiplePhotoPage />

        <DynamicUseCases
          title="Who Is This Photo Merge Tool For?"
          items={[
            { icon: '📸', title: 'Product Photographers', description: 'Merge angles into a single styled composition without manual editing.' },
            { icon: '🏢', title: 'Creative Agencies', description: 'Save editing time by using AI for product catalog layouts and social media.' },
            { icon: '🛒', title: 'Ecommerce Teams', description: 'Enhance your product listings with more complete visuals using merged frames.' },
            { icon: '🎨', title: 'Designers', description: 'Generate styled composites for mockups, posters, or content creation.' },
          ]}
        />

        <WhyUseArticleGenerator
          title="Why Use Our AI Photo Combine Tool?"
          subtitle="Fast and free solution for merging product shots like a pro."
          benefits={[
            { text: 'Combine two or more product photos in one frame' },
            { text: 'Ideal for jewelry, fashion, and creative agencies' },
            { text: 'No design skills or software required' },
            { text: 'Completely free and no watermark' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials data={testimonials} title="What Creators Say" subtitle="Trusted by agencies and product professionals" />
      </div>
    </>
  );
}
