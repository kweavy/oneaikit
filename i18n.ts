export const locales = [
  'en', // English
  'id', // Indonesian
  'es', // Spanish
  'fr', // French
  'de', // German
  'it', // Italian
  'pt', // Portuguese
  'ru', // Russian
  'zh', // Chinese
  'ja', // Japanese
  'ko', // Korean
  'ar', // Arabic
  'hi', // Hindi
  'th', // Thai
  'vi', // Vietnamese
  'tr', // Turkish
  'nl', // Dutch
  'sv', // Swedish
  'pl', // Polish
  'uk', // Ukrainian
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const getMessages = async (locale: Locale, page: string = 'common') => {
  return (await import(`./locales/${page}/${locale}.json`)).default;
};
