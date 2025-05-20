import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Tools from '@/components/home/Tools';
import AiTools from '@/components/home/AiTools';
import UseCases from '@/components/home/UseCases';
import Dashboard from '@/components/home/Dashboard';
import Testimonials from '@/components/home/Testimonials';
import Pricing from '@/components/home/Pricing';
import Faq from '@/components/home/Faq';
import CTA from '@/components/home/CTA';
import ArticleGenerator from '@/components/home/ArticleGenerators';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ArticleGenerator />
      <Features />
      <HowItWorks />
      {/* <Tools /> */}
      <AiTools />
      <UseCases />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <Faq />
      <CTA />
    </main>
  );
}