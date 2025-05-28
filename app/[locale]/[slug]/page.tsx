import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Script from 'next/script';
import { getMessages, Locale } from '@/i18n';
import { getBaseSlugFromLocaleSlug } from '@/i18n-slug';

import type { FaqItem } from '@/components/DynamicFAQ';
import type { TestimonialItem } from '@/components/DynamicTestimonials';
import type { StepItem } from '@/components/DynamicHowitsWorks';
import type { UseCaseItem } from '@/components/UseCase';

import dynamicImport from 'next/dynamic';

const DynamicHero = dynamicImport(() => import('@/components/DynamicHero'), { ssr: false });
const DynamicFaq = dynamicImport(() => import('@/components/DynamicFaq.client'), { ssr: false });
const DynamicTestimonials = dynamicImport(() => import('@/components/DynamicTestimonials.client'), { ssr: false });
const DynamicHowItWorks = dynamicImport(() => import('@/components/DynamicHowitsWorks'), { ssr: false });
const WhyUseArticleGenerator = dynamicImport(() => import('@/components/Benefit'), { ssr: false });
const DynamicUseCases = dynamicImport(() => import('@/components/UseCase'), { ssr: false });

import AIProductPhotography from '@/components/ProductPhotography';
import AICombineMultiplePhotoPage from '@/components/CombinePhoto';
import { locales } from '@/i18n';
import { localizedSlugs } from '@/i18n-slug';
import ArticleGenerators from '@/components/home/ArticleGenerators';
import ImageToVideoGenerator from '@/components/ImagetoVideo';
import ImageToImageGenerator from '@/components/ImagetoImagegenerator';
import AiVideoGenerator from '@/components/VideoGenerator';
import ImageGenerator from '@/components/home/ImageGenerator';

export async function generateStaticParams() {
  const params = [];

  for (const baseSlug in localizedSlugs) {
    for (const locale of locales) {
      const translatedSlug = localizedSlugs[baseSlug]?.[locale];
      if (translatedSlug) {
        params.push({ locale, slug: translatedSlug });
      }
    }
  }

  return params;
}

export const dynamic = 'force-static';

type PageProps = {
  params: {
    locale: Locale;
    slug: string;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const baseSlug = getBaseSlugFromLocaleSlug(params.locale, params.slug);
  if (!baseSlug) notFound();

  const messages = await getMessages(params.locale as any, baseSlug);
  return messages.metadata as Metadata;
}

export default async function ToolPage({ params }: PageProps) {
  const baseSlug = getBaseSlugFromLocaleSlug(params.locale, params.slug);
  if (!baseSlug) notFound();

  const messages = await getMessages(params.locale, baseSlug);

  const faqContent = messages.faq as FaqItem[] || [];
  const testimonials = messages.testimonials as TestimonialItem[] || [];
  const stepsHow = messages.howItWorks as StepItem[] || [];
  const benefits = messages.benefits as string[] || [];
  const useCases = Array.isArray(messages.useCases) ? messages.useCases as UseCaseItem[] : [];

  const hero = messages.hero;
  const ldJson = messages.ldJson;

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      <DynamicHero
        title={hero?.title}
        subtitle={hero?.subtitle}
        description={hero?.description}
        badgeText={hero?.badgeText}
        badgeImage={hero?.badgeImage}
      />

   <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {baseSlug === 'ai-product-photography' && <AIProductPhotography />}
        {baseSlug === 'ai-article-generator-free' && <ArticleGenerators />}
        {baseSlug === 'ai-combine-photo' && <AICombineMultiplePhotoPage />}
        {baseSlug === 'ai-image-to-video' && <ImageToVideoGenerator />}
        {baseSlug === 'ai-photo-filters' && <ImageToImageGenerator />}
        {baseSlug === 'ai-text-to-images' && <ImageGenerator />}
        {baseSlug === 'ai-video-generator' && <AiVideoGenerator />}


        <DynamicUseCases title={messages.whoCanUse || ''} items={useCases} />
        <WhyUseArticleGenerator
          title={messages.whyUseTitle || ''}
          subtitle={messages.whyUseSubtitle || ''}
          benefits={benefits.map((text) => ({ text }))}
        />
        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials
          data={testimonials}
          title={messages.testimonialsTitle || ''}
          subtitle={messages.testimonialsSubtitle || ''}
        />
      </div>
    </>
  );
}
