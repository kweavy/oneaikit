'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductPopover from '../home/MenuPopover';
import { localizedSlugs, getBaseSlugFromLocaleSlug } from '@/i18n-slug';
import { locales } from '@/i18n'; // impor locales dari sini
import type { Locale } from '@/i18n';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ambil locale dari URL, misal /en/ai-product-photography => 'en'
    const pathLocale = pathname?.split('/')[1];
    if (pathLocale && locales.includes(pathLocale as Locale)) {
      setLocale(pathLocale as Locale);
    }
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const onChangeLocale = (newLocaleStr: string) => {
    if (newLocaleStr === locale) return;

    const newLocale = newLocaleStr as Locale;

    const segments = pathname?.split('/') ?? [];

    const currentSlug = segments[2] || '';

    const baseSlug = getBaseSlugFromLocaleSlug(locale, currentSlug);

    const newSlug = baseSlug ? localizedSlugs[baseSlug]?.[newLocale] ?? baseSlug : currentSlug;

    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    if (segments.length > 2) {
      segments[2] = newSlug;
    }

    const newPath = segments.join('/') || '/';

    setLocale(newLocale);
    setIsOpen(false);
    router.push(newPath);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="uai-700 font-bold text-2xl text-primary">
                ONE<span className="text-blue-500">AI</span>KIT.COM
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ProductPopover />

            <Link href="/articles" className="text-sm font-medium hover:text-primary transition-colors">
              Articles
            </Link>
            <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How it Works
            </Link>

            <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <select
              value={locale}
              onChange={(e) => onChangeLocale(e.target.value)}
              className="rounded-md border border-gray-300 bg-white py-1 px-2 text-sm focus:outline-none"
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {l.toUpperCase()}
                </option>
              ))}
            </select>

            <Link href="https://oneaikit.com/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="https://oneaikit.com/login">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition" size="sm">
                Start Using AI Tools
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-background border-b`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/articles"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Articles
          </Link>

          <Link
            href="/#features"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How it Works
          </Link>
          <Link
            href="/#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="/#pricing"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5">
            <Link
              href="https://oneaikit.com/login"
              className="block w-full px-5 py-3 text-center font-medium text-primary bg-gray-50 hover:bg-gray-100 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Sign in
            </Link>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <Link
              href="https://oneaikit.com/login"
              className="block w-full px-5 py-3 text-center font-medium text-white bg-primary hover:bg-primary/90 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Start Using AI Tools
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
