import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Pastikan pathname sudah distandarisasi (tanpa trailing slash)
  const path = pathname.replace(/\/+$/, '') || '/';

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !path.startsWith(`/${locale}/`) && path !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${path}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|.*\\..*).*)'],
};
