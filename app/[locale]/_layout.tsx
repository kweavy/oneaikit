import { ReactNode } from 'react';
import { I18nProvider } from '@/components/providers/i18n-provider';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} />
        {children}
      </body>
    </html>
  );
}
