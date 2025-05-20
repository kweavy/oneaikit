import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://everythingaitools.com'),
  title: {
    default: 'Free All in One AI Tools - Text to Speech, Image Generator & More',
    template: '%s | Free AI Tools'
  },
  description: 'Free all in one AI tools platform. Generate articles, convert text to speech, create images, transform YouTube videos to articles, chat with professionals, and generate code - all for free.',
  keywords: ['free all in one ai tools', 'ai article generator free', 'text to speech ai free', 'text to image generator free', 'youtube to article free', 'ai generate code free', 'chat with professionals'],
  authors: [{ name: 'EverythingAITools' }],
  creator: 'EverythingAITools',
  publisher: 'EverythingAITools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://everythingaitools.com',
    title: 'Free All in One AI Tools - Text to Speech, Image Generator & More',
    description: 'Free all in one AI tools platform. Generate articles, convert text to speech, create images, transform YouTube videos to articles, chat with professionals, and generate code - all for free.',
    siteName: 'EverythingAITools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free All in One AI Tools - Text to Speech, Image Generator & More',
    description: 'Free all in one AI tools platform. Generate articles, convert text to speech, create images, transform YouTube videos to articles, chat with professionals, and generate code - all for free.',
    creator: '@everythingaitools',
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
        <link rel="canonical" href="https://everythingaitools.com" />
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
              "name": "EverythingAITools",
              "description": "Free all in one AI tools platform for content creation, text to speech, image generation, and code generation.",
              "url": "https://everythingaitools.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://everythingaitools.com/search?q={search_term_string}",
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
              "name": "EverythingAITools",
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