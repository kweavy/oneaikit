import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname starts with /api, /_next, /images
  // or contains a file extension (e.g. /favicon.ico)
  const isSystemPath = /^\/(_next|api|images)\//.test(pathname) || 
                      /\.[a-zA-Z0-9]{2,4}$/.test(pathname);
                      
  if (isSystemPath) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!api|_next|images|[\\w-]+\\.\\w+).*)',
  ],
};