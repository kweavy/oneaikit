import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | OneAIKit',
  description: 'Learn how OneAIKit collects, uses, and protects your personal information.',
  metadataBase: new URL('https://oneaikit.com'),
  alternates: {
    canonical: 'https://oneaikit.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-10">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground">
        Last updated: May 23, 2025
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to OneAIKit. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you do not agree with the terms, please do not use our site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect includes:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Personal Data:</strong> Name, email address, phone number, etc., provided through forms or accounts.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, IP address, browser type, and device information.</li>
          <li><strong>Generated Content:</strong> Any text, image, or audio processed using our AI tools.</li>
          <li><strong>Cookies & Tracking:</strong> We use cookies to enhance user experience and for analytics.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
        <p>Your information is used for purposes including:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Providing and improving our services</li>
          <li>Personalizing your experience</li>
          <li>Sending service-related notifications</li>
          <li>Analyzing website usage for optimization</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. Sharing Your Information</h2>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Service providers (e.g., analytics, cloud storage)</li>
          <li>Law enforcement, if required by law</li>
          <li>Business transfers (e.g., acquisition or merger)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. Use of Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance functionality and analytics. You may disable cookies in your browser settings, but this may affect site functionality.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. Third-Party Services</h2>
        <p>
          We may use third-party tools such as Google Analytics, OpenAI, or social login providers. These services have their own privacy policies, and we encourage you to review them.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. Your Rights (GDPR & CCPA)</h2>
        <p>
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent for data processing</li>
          <li>Export your data (data portability)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. Retention of Data</h2>
        <p>
          We retain your data as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. Children’s Privacy</h2>
        <p>
          Our services are not intended for children under the age of 13. We do not knowingly collect data from children without parental consent.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised “Last updated” date.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">12. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, you can contact us at:
        </p>
        <p className="font-medium">
          Email: <a href="mailto:thejogjamedia@gmail.com" className="text-primary underline">thejogjamedia@gmail.com</a>
        </p>
        <p>
          Address: 25 City Road, London EC1Y 1AA, United Kingdom
        </p>
      </section>
    </div>
  );
}
