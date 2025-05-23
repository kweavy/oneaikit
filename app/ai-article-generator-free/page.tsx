import { Metadata } from 'next';
import Script from 'next/script';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import DynamicHero from '@/components/DynamicHero';
import ArticleGenerator from '@/components/home/ArticleGenerators';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'AI Article Generator Free Online with Images – No Login | OneAIKit',
  description:
    'Use our AI Article Generator to create SEO-optimized blog content with images. Free, no login required. Generate titles, outlines, and full HTML articles instantly.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/ai-article-generator',
  },
  openGraph: {
    title: 'AI Article Generator Free Online with Images – No Login | OneAIKit',
    description:
      'Create blog articles in seconds using our free AI article generator. No login required. Includes image generation and export to HTML. Perfect for bloggers, marketers, and students.',
    url: 'https://oneaikit.com/ai-article-generator',
    siteName: 'OneAIKit',
    type: 'website',
    images: [
      {
        url: 'https://oneaikit.com/og-image-article-generator.png',
        alt: 'AI Article Generator Free with Images - OneAIKit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Article Generator Free Online with Images – No Login | OneAIKit',
    description:
      'Create blog articles in seconds using our free AI article generator. No login required. Includes image generation and export to HTML. Perfect for bloggers, marketers, and students.',
    images: ['https://oneaikit.com/og-image-article-generator.png'],
  },
  keywords: [
    'ai article generator',
    'ai article generator free',
    'ai article generator free online',
    'ai article generator no login',
    'ai article generator with images',
    'ai article generator tool',
    'ai article generator github',
    'ai article gen',
    'ai article generator bored humans',
    'ai article generator grammarly',
  ],
};

export default function AiArticleGeneratorFreePage() {
  const faqContent: FaqItem[] = [
    { question: 'Is this AI article generator really free?', answer: 'Yes, it’s 100% free to use. No login, sign-up, or credit card required.' },
    { question: 'Do I need to register or log in?', answer: 'No. Our AI article writer works instantly without requiring any login.' },
    { question: 'Can I generate articles with images?', answer: 'Yes. This tool includes AI-generated images to visually support your content.' },
    { question: 'What formats can I export the article to?', answer: 'You can export the article in clean HTML format, ideal for blogs or CMS platforms.' },
    { question: 'Can I use this AI tool for article summaries?', answer: 'This tool focuses on full article generation, but upcoming features will support summaries.' },
    { question: 'Is this tool suitable for SEO content?', answer: 'Absolutely. Our AI generates SEO-optimized content with relevant keywords and structure.' },
    { question: 'Can I write product reviews or how-to articles?', answer: 'Yes. You can generate structured outlines and articles for reviews, tutorials, and more.' },
    { question: 'Does this support article rewriting or paraphrasing?', answer: 'Not yet, but we’re working on an AI article rewriter and summarizer for future updates.' },
    { question: 'Can I use this for academic writing?', answer: 'While not a replacement for research, it can help draft outlines and base content for essays or papers.' },
    { question: 'Does this AI article tool work on mobile?', answer: 'Yes, our tool is mobile-responsive and works on all modern browsers and devices.' },
  ];

  const testimonials: TestimonialItem[] = [
    {
      name: 'Sarah',
      role: 'Content Marketer',
      content: 'This is the fastest way I’ve ever written articles for my blog. I can’t believe it’s free.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    },
    {
      name: 'Rizky',
      role: 'SEO Specialist',
      content: 'I use this AI article tool to generate descriptions and posts for my clients. Huge time-saver!',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      name: 'Dina',
      role: 'Freelance Writer',
      content: 'The AI article writer helps me create drafts faster. Great for client content and blogging.',
      rating: 4,
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
    {
      name: 'Andi',
      role: 'Student',
      content: 'I used this free AI tool to outline and generate ideas for my research paper. It’s amazing!',
      rating: 5,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
    {
      name: 'James',
      role: 'Blogger',
      content: 'Finally, an AI article generator that includes image support and works without logging in!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
    },
  ];

  const stepsHow = [
    {
      number: '1',
      title: 'Choose your topic',
      description: 'Start with a topic and let our AI generate the best keywords for SEO.',
    },
    {
      number: '2',
      title: 'Generate content step-by-step',
      description: 'Select keywords, titles, outlines, and even images using our AI article builder.',
    },
    {
      number: '3',
      title: 'Export your article instantly',
      description: 'Export full HTML blog articles, ready to publish. No login or account required.',
    },
  ];

  return (
    <>
      {/* Structured Data JSON-LD for Rich Snippets */}
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "OneAIKit - AI Article Generator",
          applicationCategory: "WebApplication",
          operatingSystem: "All",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "289"
          },
          keywords: Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : metadata.keywords || ''
        })}
      </Script>

      <DynamicHero
        title="Free AI Article Generator Online – No Login Required"
        subtitle="Generate SEO-optimized blog posts and articles using AI. Create content with images, titles, outlines, and HTML – all for free and with no sign-up."
        badgeText="Now You Can Write Articles with AI"
        badgeImage="/avatar.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
       <ArticleGenerator />

        <DynamicUseCases
          title="Who Can Use This Tool?"
          items={[
            {
              icon: '📚',
              title: 'Students & Researchers',
              description: 'Create outlines and full articles for essays, papers, or summaries using our free AI article generator.',
            },
            {
              icon: '🧑‍💼',
              title: 'Professionals',
              description: 'Quickly write reports, internal docs, or blog content using our AI article builder with no login.',
            },
            {
              icon: '🎨',
              title: 'Marketers & Creators',
              description: 'Craft SEO-friendly product reviews, how-to posts, and social media articles using AI and images.',
            },
            {
              icon: '🌐',
              title: 'Bloggers',
              description: 'Publish long-form articles instantly using AI-generated titles, outlines, and HTML export.',
            },
          ]}
        />

        <WhyUseArticleGenerator
          title="Why Choose Our Free AI Article Generator?"
          subtitle="AI-powered content creation without hassle."
          benefits={[
            { text: 'Generate full articles in seconds.' },
            { text: '100% free with no login required.' },
            { text: 'Includes AI-generated images.' },
            { text: 'SEO-optimized content with exportable HTML.' },
          ]}
        />

        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials data={testimonials} title="What Users Say" subtitle="Real feedback from our creators" />
      </div>
    </>
  );
}
