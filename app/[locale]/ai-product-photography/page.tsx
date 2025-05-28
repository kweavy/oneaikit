import { Metadata } from 'next';
import Script from 'next/script';
import { getMessages, Locale } from '@/i18n';

import type { FaqItem } from '@/components/DynamicFAQ';
import type { TestimonialItem } from '@/components/DynamicTestimonials';
import type { StepItem } from '@/components/DynamicHowitsWorks';
import type { UseCaseItem } from '@/components/UseCase';

import dynamicImport from 'next/dynamic'; // ✅ avoid name conflict

export const dynamic = 'force-static';

const DynamicHero = dynamicImport(() => import('@/components/DynamicHero'), {
  ssr: false,
});


import DynamicFaq from '@/components/DynamicFaq.client';
import DynamicTestimonials from '@/components/DynamicTestimonials.client';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import AIProductPhotography from '@/components/ProductPhotography';
import { locales } from '@/i18n';
import { localizedSlugs } from '@/i18n-slug';

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


type PageProps = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const messages = await getMessages(params.locale, 'ai-product-photography');
  return messages.metadata;
}


export default async function AiProductPhotographyPage({ params }: PageProps) {
  const messages = await getMessages(params.locale, 'ai-product-photography');

  const faqContent = messages.faq as FaqItem[];
  const testimonials = messages.testimonials as TestimonialItem[];
  const stepsHow = messages.howItWorks as StepItem[];
  const benefits = messages.benefits as string[];
  const useCases = (messages.useCases as UseCaseItem[]) || [];

  const hero = messages.hero;
  const ldJson = messages.ldJson;

  return (
    <>
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify(ldJson)}
      </Script>

      <DynamicHero
        title={hero.title}
        subtitle={hero.subtitle}
        description={hero.description}
        badgeText={hero.badgeText}
        badgeImage={hero.badgeImage}
      />

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        <AIProductPhotography />
        <DynamicUseCases title={messages.whoCanUse} items={useCases} />
        <WhyUseArticleGenerator
          title={messages.whyUseTitle}
          subtitle={messages.whyUseSubtitle}
          benefits={benefits.map((text) => ({ text }))}
        />
        <DynamicHowItWorks steps={stepsHow} />
        <DynamicFaq content={faqContent} />
        <DynamicTestimonials
          data={testimonials}
          title={messages.testimonialsTitle}
          subtitle={messages.testimonialsSubtitle}
        />
      </div>
    </>
  );
}
