'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

export default function ImageGenerator() {
  const [engine, setEngine] = useState<'dalle' | 'stable_diffusion'>('dalle');
  const [prompt, setPrompt] = useState('');
  const [resolution, setResolution] = useState<'1024x1024' | '1792x1024'>('1024x1024');
  const [count, setCount] = useState<number>(1);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [style, setStyle] = useState('');
  const [lighting, setLighting] = useState('');
  const [mood, setMood] = useState('');

  const [allImages, setAllImages] = useState<any[]>([]);
  const [fetchingImages, setFetchingImages] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setFetchingImages(true);
      const { data, error } = await supabase
        .from('ai_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) setAllImages(data);
      setFetchingImages(false);
    };

    fetchImages();
  }, []);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  const genExample = () => {
    const examples = ['Cityscape at sunset', 'Hedgehog smelling a flower', 'Delicious pizza'];
    setPrompt(examples[Math.floor(Math.random() * examples.length)]);
  };

  async function generate() {
    if (!prompt.trim()) return setError('Please enter a prompt description');

    setLoading(true);
    setError(null);
    setUrl('');

    const attributes = [
      style && `${style} style`,
      lighting && `${lighting} lighting`,
      mood && `${mood} mood`,
    ].filter(Boolean).join(' ');

    const finalPrompt = `${prompt.trim()} ${attributes}`.trim();

    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: finalPrompt,
          n: Math.min(count, 2),
          size: resolution,
          response_format: 'url',
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || 'Failed to generate image');

      for (let i = 0; i < data.data.length; i++) {
        const img = data.data[i];
        const imageTitle = finalPrompt.substring(0, 50);
        const imageSlug = slugify(`${imageTitle}-${i}`);
        const outputUrl = img.url;

        if (i === 0) setUrl(outputUrl);

        const uploadRes = await fetch('https://oneaikit.com/public/generator/upload.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imageUrl: outputUrl, fileName: `${imageSlug}.png` }),
        });

        const uploadData = await uploadRes.json();
        if (!uploadData.success || !uploadData.path) continue;

        const publicPath = `https://oneaikit.com${uploadData.path}`;

        await supabase.from('ai_images').insert({
          title: imageTitle,
          slug: imageSlug,
          output: publicPath,
          size: resolution,
          quality: 'standard',
          description: prompt,
          image_generator: 'openai',
          image_style: style,
          image_lighting: lighting,
          image_mood: mood,
        });
      }
    } catch (err: any) {
      setError(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="bg-secondary dark:bg-surface rounded-xl border-0 mb-10">
      <CardContent className="pt-6">
        <div className="flex gap-2 mb-4">
          <Button variant={engine === 'dalle' ? 'outline' : 'ghost'} onClick={() => setEngine('dalle')}>DALL·E</Button>
          <Button variant={engine === 'stable_diffusion' ? 'outline' : 'ghost'} onClick={() => setEngine('stable_diffusion')}>Stable Diffusion</Button>
        </div>

        <div className="relative mb-4">
          <Textarea placeholder="Describe image" value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} className="rounded-lg px-4 py-2 shadow-sm" />
          <Button variant="link" size="sm" className="absolute top-2 right-4" onClick={genExample}>Example prompt</Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <select value={resolution} onChange={(e) => setResolution(e.target.value as any)} className="flex-1 p-2 border rounded-lg">
            <option value="1024x1024">1024x1024</option>
            <option value="1792x1024">1792x1024</option>
          </select>
          <select value={style} onChange={(e) => setStyle(e.target.value)} className="flex-1 p-2 border rounded-lg">
            <option value="">No Style</option>
            <option value="anime">Anime</option>
            <option value="photographic">Photographic</option>
            <option value="digital_art">Digital Art</option>
          </select>
          <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="flex-1 p-2 border rounded-lg">
            {[1, 2].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'image' : 'images'}</option>)}
          </select>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button onClick={generate} className="w-full" disabled={loading || !prompt.trim()}>
          {loading ? 'Generating...' : 'Generate Image'}
        </Button>

        {url && <div className="mt-6"><img src={url} alt="Generated AI" className="w-full rounded-lg shadow-md" /></div>}

        {!fetchingImages && allImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Recent Generated Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allImages.map((img) => (
                <Link key={img.id} href={`/text-to-images/${img.slug || img.id}`} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                  <img src={img.output} alt={img.title || 'AI image'} className="w-full h-auto" />
                  <div className="p-2">
                    <h4 className="text-sm font-medium mb-1">{img.title || 'Untitled'}</h4>
                    <p className="text-xs text-muted-foreground"><strong>Prompt:</strong> {img.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
