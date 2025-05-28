'use client';
// Hapus 'use client'
import Image from 'next/image';

interface DynamicHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badgeText?: string;
  badgeImage?: string;
}

export default function DynamicHero({
  title,
  subtitle = 'All-in-One AI Tools',
  description = 'Access the most complete collection of free AI tools — perfect for content creators, developers, designers, and marketers.',
  badgeText = 'Now You Can Chat with Celebrities',
  badgeImage = '/avatar.png',
}: DynamicHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-white pt-20 pb-16">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium bg-white shadow border border-gray-200 rounded-full mb-6">
          <Image
            src={badgeImage}
            alt="Badge"
            width={40}
            height={40}
            className="rounded-full border-2 border-white"
          />
          <span className="text-sm font-semibold">{badgeText}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="inline-block uai-700">{title}</span>
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight rainbow">
            {subtitle}
          </h2>
        )}

        {/* Description */}
        {description && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
