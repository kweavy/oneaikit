import { supabase } from '@/lib/supabase';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Persona {
  id: string;
  title: string;
  description: string;
  prompt: string;
  color?: string;
  slug?: string;
  memoji: string;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Chat with AI Personalities, Celebrities & Experts | EverythingAITools',
    description:
      'Explore our collection of AI-powered personalities, including celebrities, experts, and fictional characters. Chat with your favorite AI persona instantly!',
    openGraph: {
      title: 'Chat with AI Personalities, Celebrities & Experts | EverythingAITools',
      description:
        'Explore our collection of AI-powered personalities, including celebrities, experts, and fictional characters. Chat with your favorite AI persona instantly!',
      url: 'https://everythingaitools.com/chat',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Chat with AI Personalities, Celebrities & Experts | EverythingAITools',
      description:
        'Explore our collection of AI-powered personalities, including celebrities, experts, and fictional characters. Chat with your favorite AI persona instantly!',
    },
  };
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from('ai_chat_pro').select('slug');
  if (error) {
    console.error('Error fetching slugs:', error.message);
    return [];
  }

  return data?.map((item) => ({ slug: item.slug })) ?? [];
}

export default async function ChatPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = parseInt(searchParams.page || '1', 10);

  const { data: personas } = await supabase
    .from('ai_chat_pro')
    .select('id, title, description, prompt, color, slug, memoji')
    .order('created_at', { ascending: false });

  const safePersonas: Persona[] = personas ?? [];
  const itemsPerPage = 15;
  const totalPages = Math.ceil(safePersonas.length / itemsPerPage);
  const paginatedPersonas = safePersonas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Chat with Famous AI Personalities & Experts</h1>

      {safePersonas.length === 0 ? (
        <p className="text-center text-gray-500">No AI personas available at the moment.</p>
      ) : (
        <>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {paginatedPersonas.map((persona) => (
              <Link href={`/chat/${persona.slug}`} key={persona.id} prefetch={false}>
                <Card className="cursor-pointer transition-all hover:shadow-lg border border-black h-full flex flex-col justify-between">
                  <CardHeader className="p-4 flex flex-col flex-1">
                    <div className="aspect-square rounded-full overflow-hidden mb-3 border-4">
                      <Image
                        src={persona.memoji}
                        alt={persona.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center text-sm font-semibold mb-2">{persona.title}</CardTitle>
                    <p className="text-center text-xs text-muted-foreground mt-auto line-clamp-3">{persona.description}</p>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <Button asChild disabled={currentPage === 1}>
              <Link href={`/chat?page=${Math.max(currentPage - 1, 1)}`}>Previous</Link>
            </Button>
            <span className="px-4 py-2 text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button asChild disabled={currentPage === totalPages}>
              <Link href={`/chat?page=${Math.min(currentPage + 1, totalPages)}`}>Next</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}