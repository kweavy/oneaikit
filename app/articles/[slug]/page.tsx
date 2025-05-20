import { supabase } from '@/lib/supabase';
import { format } from 'date-fns';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export async function generateStaticParams() {
  const { data, error } = await supabase.from('articles').select('slug');
  if (error) {
    console.error('Error fetching slugs:', error.message);
    return [];
  }

  return data?.map((article) => ({ slug: article.slug })) ?? [];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: article, error } = await supabase
    .from('articles')
    .select('title, content')
    .eq('slug', params.slug)
    .single();

  if (error || !article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: article.title,
    description: article.content?.slice(0, 160),
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (error || !article) {
    return <div className="text-center mt-10">Article not found.</div>;
  }

  const shareUrl = `https://yourdomain.com/articles/${article.slug}`;
  const publishDate = article.published_at
    ? format(new Date(article.published_at), 'MMMM dd, yyyy')
    : 'Unpublished';

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      {article.featured_image && (
        <div className="relative w-full h-64 mb-6">
          <Image
            src={article.featured_image}
            alt={article.title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div>
          <span>By <strong>{article.author}</strong></span> · <span>{publishDate}</span>
        </div>
        <div className="flex gap-3">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank">
            <FaFacebook className="hover:text-blue-600" />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank">
            <FaTwitter className="hover:text-sky-500" />
          </a>
          <a href={`https://www.linkedin.com/shareArticle?url=${shareUrl}`} target="_blank">
            <FaLinkedin className="hover:text-blue-700" />
          </a>
        </div>
      </div>

      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
