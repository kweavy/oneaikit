import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://oneaikit.com'),
  title: {
    default: 'Best All in One AI Tools Website Free - OneAIKit',
    template: '%s | Free All in One AI Tools'
  },
  description: 'All in one AI tools website to generate content, convert text to speech, create images, summarize YouTube videos, chat with AI, and more — completely free.',
  keywords: [
    'all in one ai tools',
    'all in one ai tools free',
    'all in one ai tools website',
    'best all in one ai tool',
    'free ai tools website',
    'ai tools for students and researchers',
    'aigen all in one ai generation tool',
    'all ai tools in one website free',
    'text to speech ai free',
    'ai image generator free',
    'ai code generator free',
    'youtube to article ai'
  ],
  authors: [{ name: 'oneaikit' }],
  creator: 'oneaikit',
  publisher: 'oneaikit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oneaikit.com',
    title: 'Best All in One AI Tools Website Free - OneAIKit',
    description: 'Free all in one AI tools platform to create content, convert text to speech, generate images, and more in one place.',
    siteName: 'oneaikit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best All in One AI Tools Website Free - OneAIKit',
    description: 'Free all in one AI tools platform for students, creators, and developers. Use AI to write, speak, draw, code, and chat — all in one site.',
    creator: '@oneaikit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
    yandex: 'verification_token',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://oneaikit.com" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SCGSQESBX9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SCGSQESBX9');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "oneaikit",
              "description": "Free all in one AI tools platform for content creation, text to speech, image generation, and code generation.",
              "url": "https://oneaikit.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://oneaikit.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "oneaikit",
              "applicationCategory": "AIApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}