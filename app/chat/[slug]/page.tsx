// app/chat/[slug]/page.tsx
import { ChatUI } from '@/components/chat/chat-ui';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const { data, error } = await supabase.from('ai_chat_pro').select('slug');
  if (error) {
    console.error('Error fetching slugs:', error.message);
    return [];
  }

  return data?.map((item) => ({ slug: item.slug })) ?? [];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = await supabase
    .from('ai_chat_pro')
    .select('title, description')
    .eq('slug', params.slug)
    .single();

  if (!data) return {
    title: 'Not Found | EverythingAITools',
    description: 'Persona AI not found.',
  };

  return {
    title: `Chat with ${data.title} AI | ${data.description}`,
    description: data.description,
    openGraph: {
      title: `Chat with ${data.title} AI | ${data.description}`,
      description: data.description,
      url: `https://everythingaitools.com/chat/${params.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Chat with ${data.title} AI | ${data.description}`,
      description: data.description,
    },
  };
}

export default async function ChatSlugPage({ params }: { params: { slug: string } }) {
  const { data, error } = await supabase
    .from('ai_chat_pro')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !data) return notFound();

  return (
    <div className="flex flex-col items-center px-4 pt-8 pb-16 max-w-3xl mx-auto">
      <ChatUI
        title={data.title}
        description={data.description}
        starterPrompt={data.prompt}
        memoji={data.memoji}
      />
    </div>
  );
}