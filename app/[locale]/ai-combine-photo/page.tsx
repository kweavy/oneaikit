import { Metadata } from 'next';
import Script from 'next/script';
import { getMessages, Locale } from '@/i18n';

import type { FaqItem } from '@/components/DynamicFAQ';
import type { TestimonialItem } from '@/components/DynamicTestimonials';
import type { StepItem } from '@/components/DynamicHowitsWorks';
import type { UseCaseItem } from '@/components/UseCase';

import DynamicFaq from '@/components/DynamicFAQ';
import DynamicTestimonials from '@/components/DynamicTestimonials';
import DynamicHowItWorks from '@/components/DynamicHowitsWorks';
import WhyUseArticleGenerator from '@/components/Benefit';
import DynamicUseCases from '@/components/UseCase';
import DynamicHero from '@/components/DynamicHero';
import AICombineMultiplePhotoPage from '@/components/CombinePhoto';

export const dynamic = 'force-static';

type PageProps = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const messages = await getMessages(params.locale, 'ai-combine-photo');
  return messages.metadata as Metadata;
}

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'id' }];
}

export default async function AiCombinePhotoPage({ params }: PageProps) {
  const messages = await getMessages(params.locale, 'ai-combine-photo');

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
        <AICombineMultiplePhotoPage />

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
