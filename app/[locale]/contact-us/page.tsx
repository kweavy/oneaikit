import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | OneAIKit',
  description: 'Get in touch with our team via email or visit our London office.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Have questions, suggestions, or partnership ideas? We'd love to hear from you.
      </p>

      <div className="bg-muted rounded-xl p-8 space-y-6 shadow-sm">
        <div>
          <h2 className="text-2xl font-semibold">Email</h2>
          <p className="text-muted-foreground">Reach out to us anytime via email:</p>
          <p className="text-lg mt-1">
            <a
              href="mailto:thejogjamedia@gmail.com"
              className="text-primary font-medium underline"
            >
              thejogjamedia@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Our Office</h2>
          <p className="text-muted-foreground">Visit or send us mail at our London office:</p>
          <p className="mt-1 text-lg">
            OneAIKit HQ<br />
            25 City Road, London EC1Y 1AA<br />
            United Kingdom
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to homepage
        </Link>
      </div>
    </div>
  );
}
