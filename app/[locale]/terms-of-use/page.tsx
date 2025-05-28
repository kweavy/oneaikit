import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | OneAIKit',
  description: 'Read our terms and conditions for using the OneAIKit platform.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/terms-of-use',
  },
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-10">
      <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
      <p className="text-muted-foreground">
        Last updated: May 23, 2025
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using OneAIKit (“we”, “our”, or “us”) and its services, you agree to be bound by these Terms of Use. If you do not agree, you may not use our platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Use of Services</h2>
        <p>
          You agree to use the services only for lawful purposes and in accordance with these Terms. You must not:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Violate any applicable laws or regulations</li>
          <li>Use the services for any illegal or unauthorized purpose</li>
          <li>Exploit or abuse our AI tools (e.g., generating harmful or illegal content)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. User Content</h2>
        <p>
          You retain ownership of any content you generate using our tools. However, by using our service, you grant us a non-exclusive, worldwide, royalty-free license to use such content to improve our services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
        <p>
          All content and materials provided by OneAIKit, including the software, branding, and website design, are protected by intellectual property laws and may not be copied or reused without written permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the services at our sole discretion, without notice, if we believe you have violated these Terms.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Disclaimer of Warranties</h2>
        <p>
          The services are provided "as is" without warranties of any kind. We do not guarantee that the services will be error-free, secure, or available at all times.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Limitation of Liability</h2>
        <p>
          OneAIKit shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. Modifications</h2>
        <p>
          We may revise these Terms at any time. The latest version will always be posted on this page, and your continued use of the services constitutes acceptance of the changes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes shall be resolved in the courts of London, UK.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us:
        </p>
        <p className="font-medium">
          Email: <a href="mailto:thejogjamedia@gmail.com" className="text-primary underline">thejogjamedia@gmail.com</a><br />
          Address: 25 City Road, London EC1Y 1AA, United Kingdom
        </p>
      </section>
    </div>
  );
}
