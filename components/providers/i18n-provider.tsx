'use client';

import { useEffect } from 'react';
import i18n from '@/i18n/config';
import { useTranslation } from 'react-i18next';

export function I18nProvider({ locale }: { locale: string }) {
  const { i18n: i18next } = useTranslation();

  useEffect(() => {
    if (i18next.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18next]);

  return null;
}
