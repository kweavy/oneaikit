// i18n.ts
export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const getMessages = async (locale: Locale) => {
  return (await import(`@/app/locales/${locale}.json`)).default;
};

