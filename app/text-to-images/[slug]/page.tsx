import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { Metadata } from 'next';

// 1. HARUS ADA INI untuk export static route
export async function generateStaticParams() {
  const { data, error } = await supabase.from('ai_images').select('slug');

  if (error || !data) {
    console.error('Error fetching slugs:', error?.message);
    return [];
  }

  return data.map((img) => ({ slug: img.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { data } = await supabase
      .from('ai_images')
      .select('title, description, output') // ← tambahkan output
      .eq('slug', params.slug)
      .single();
  
    if (!data) {
      return {
        title: 'Image Not Found',
        description: 'The requested image was not found.',
      };
    }
  
    return {
      title: `${data.title} - AI Text to Image Generator Free`,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        url: `https://yourdomain.com/ai-text-to-image-generator-free/${params.slug}`,
        images: [
          {
            url: data.output,
            width: 1024,
            height: 1024,
            alt: data.title,
          },
        ],
      },
    };
  }
  

// 3. Page komponen utama
export default async function ImageDetailPage({ params }: { params: { slug: string } }) {
  const { data: image, error } = await supabase
    .from('ai_images')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!image || error) {
    return <div className="text-center mt-20 text-red-600">Image not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-2">{image.title}</h1>
      <p className="text-muted-foreground mb-4"><strong>Prompt : </strong> {image.description}</p>

      <Image
        src={image.output}
        alt={`${image.title} - ai text to image generator free`}
        width={1024}
        height={1024}
        className="rounded-lg shadow-md w-full"
        unoptimized
      />
    </div>
  );
}
