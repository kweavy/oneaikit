import { Metadata } from 'next';
import Script from 'next/script';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import { Button } from '@/components/ui/button';
import DynamicHero from '@/components/DynamicHero';
import ImageToVideoGenerator from '@/components/ImagetoVideo';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Image to Video Generator – Free, No Login, With Prompt | OneAIKit',
  description: 'Convert any image to video using AI. No sign-up, no watermark, no restrictions. Free online image-to-video generator with prompt support.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/ai-image-to-video',
  },
  openGraph: {
    title: 'Free AI Image to Video Generator – No Signup Needed',
    description: 'Generate AI videos from images. Fast, free, and easy to use. Perfect for content creators and animators. Prompt-based, no login required.',
    url: 'https://oneaikit.com/ai-image-to-video',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-image-to-video.png',
        alt: 'AI Image to Video Generator - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Image to Video – Free Online Generator with Prompt',
    description: 'Turn any image into a short video with AI. 100% free, no sign-up. Use text prompts or animations. Fast, mobile-friendly.',
    images: ['https://oneaikit.com/og-image-image-to-video.png'],
  },
  keywords: [
    'ai image to video',
    'ai image to video generator',
    'ai image to video free',
    'ai image to video generator no sign up',
    'ai image to video generator with prompt',
    'ai video maker from image',
    'image to animation ai',
    'ai convert image to video online',
    'ai video generator from photo',
  ],
};

export default function AIImageToVideoPage() {
  const faqContent: FaqItem[] = [
    { question: 'Is this AI image to video generator free?', answer: 'Yes, it’s 100% free. No sign-up, no watermark, and no credit card required.' },
    { question: 'Can I use a prompt to guide the video generation?', answer: 'Yes. You can enter a custom prompt to control the video output style or theme.' },
    { question: 'How long is the video generated?', answer: 'Typically between 2–6 seconds per image, but it may vary depending on the AI model.' },
    { question: 'Can I use my own image?', answer: 'Absolutely. Upload your photo, enter a prompt, and get a video animation in seconds.' },
    { question: 'What file format is the result?', answer: 'The result is a downloadable MP4 file, playable on all devices.' },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Liam N.',
      role: 'Motion Designer',
      content: 'This AI tool is magic. I uploaded a portrait and got a smooth looping video in seconds!',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      name: 'Sophie R.',
      role: 'YouTube Editor',
      content: 'Love that I can animate stills with just a prompt. Perfect for short intros and reels!',
      rating: 4,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
    {
      name: 'Darren K.',
      role: 'TikTok Creator',
      content: 'Fastest image-to-video AI I’ve used. No login, no ads, and video quality is great.',
      rating: 5,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Upload an Image',
      description: 'Choose any image (JPG, PNG, or WEBP) to convert into video.',
    },
    {
      number: '2',
      title: 'Enter a Prompt (Optional)',
      description: 'You can enter a prompt to animate the image in a specific style or mood.',
    },
    {
      number: '3',
      title: 'Generate the Video',
      description: 'Click generate to create your AI-powered video. Download it instantly.',
    },
  ];

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'OneAIKit - AI Image to Video Generator',
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
            reviewCount: '275',
          },
        })}
      </Script>

      <DynamicHero
        title="AI Image to Video – Free Generator with Prompt Support"
        subtitle="Create stunning AI videos from a single image"
        description="Upload any image and turn it into a video using AI. Add prompt guidance. No login, no watermark, 100% free."
        badgeText="Free Image-to-Video AI Generator"
        badgeImage="/avatar.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <ImageToVideoGenerator />

        <DynamicUseCases
          title="Who Can Use This AI Image to Video Tool?"
          items={[
            { icon: '🎥', title: 'Content Creators', description: 'Generate unique intro/outro visuals with just one image.' },
            { icon: '👨‍🎨', title: 'AI Artists', description: 'Turn still artworks into cinematic clips or animations.' },
            { icon: '📱', title: 'Social Media Marketers', description: 'Boost engagement with AI-generated motion visuals.' },
          ]}
        />

        <WhyUseArticleGenerator
          title="Why Use Our Image-to-Video Generator?"
          subtitle="Fast, creative, and no login required."
          benefits={[
            { text: 'Generate video from image in seconds' },
            { text: 'Prompt control for style & animation' },
            { text: 'Free with no watermark or restrictions' },
            { text: 'Works on desktop & mobile' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials data={testimonials} title="What People Are Saying" subtitle="Loved by creators, marketers, and animators" />
      </div>
    </>
  );
}
