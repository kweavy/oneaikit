import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { Metadata } from 'next';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import DynamicFaq, { FaqItem } from '@/components/DynamicFAQ';
import DynamicTestimonials, { TestimonialItem } from '@/components/DynamicTestimonials';
import DynamicUseCases from '@/components/UseCase';

// Generate static params for all image slugs
export async function generateStaticParams() {
  const { data, error } = await supabase.from('ai_images').select('slug');
  if (error || !data) return [];
  return data.map((img) => ({ slug: img.slug }));
}

// SEO metadata for image detail page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = await supabase
    .from('ai_images')
    .select('title, description, output')
    .eq('slug', params.slug)
    .single();

  if (!data) {
    return {
      title: 'Image Not Found',
      description: 'The requested image was not found.',
    };
  }

  return {
    title: `${data.title} - AI Text to Image Generator Free`,
    description: data.description,
    openGraph: {
      title: `${data.title} - AI Text to Image Generator Free`,
      description: data.description,
      url: `https://oneaikit.com/text-to-images/${params.slug}`,
      images: [
        {
          url: data.output,
          width: 1024,
          height: 1024,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title} - AI Text to Image Generator Free`,
      description: data.description,
      images: [data.output],
    },
  };
}

// Main page component
export default async function ImageDetailPage({ params }: { params: { slug: string } }) {
  const { data: image, error } = await supabase
    .from('ai_images')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!image || error) {
    return <div className="text-center mt-20 text-red-600">Image not found.</div>;
  }

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
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">

 {/* ✅ Breadcrumb langsung di sini */}
      <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center space-x-2">
          <li>
            <a href="/" className="hover:underline text-primary">Home</a>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <a href="/ai-text-to-images" className="hover:underline text-primary">AI Text to Image</a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="truncate max-w-[200px] font-medium" title={image.title}>
            {image.title.length > 40 ? `${image.title.slice(0, 40)}...` : image.title}
          </li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold mb-2">{image.title}</h1>
      <p className="text-muted-foreground mb-4"><strong>Prompt : </strong> {image.description}</p>

      <Image
        src={image.output}
        alt={`${image.title} - ai text to image generator free`}
        width={1024}
        height={1024}
        className="rounded-lg shadow-md w-full"
        unoptimized
      />

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
  );
}
