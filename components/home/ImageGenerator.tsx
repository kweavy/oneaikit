'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

const MODELS = [
  { name: 'Stable Diffusion XL 1.0', key: 'sdxl', img: 'https://files.monica-cdn.im/home-web/_next/static/media/SDXL.1b1c0a77.png', description: 'Superior language understanding with rich image details.' },
  { name: 'Stable Diffusion 3.5', key: 'sd3', img: 'https://files.monica-cdn.im/home-web/_next/static/media/SD3.38d525f9.png', description: 'Optimized composition and natural visual rendering.' },
  { name: 'Flux Schnell 1.0', key: 'flux_schnell', img: 'https://files.monica-cdn.im/home-web/_next/static/media/Flux.044ef3cb.png', description: 'Optimized for speed and simplicity. Great for fast iterations.' },
  { name: 'Flux Dev 1.0', key: 'flux_dev', img: 'https://files.monica-cdn.im/home-web/_next/static/media/Flux.044ef3cb.png', description: 'Developer-focused version with flexible prompts and outputs.' },
  { name: 'Flux Pro 1.0', key: 'flux_pro', img: 'https://files.monica-cdn.im/home-web/_next/static/media/Flux.044ef3cb.png', description: 'Professional grade with balanced performance and fidelity.' },
  { name: 'DALL·E 3', key: 'dalle', img: 'https://files.monica-cdn.im/home-web/_next/static/media/DALL%C2%B7E%203.7d0b777d.png', description: 'OpenAI’s flagship model for creative and imaginative illustrations.' },
  { name: 'Playground V2.5', key: 'playground', img: 'https://files.monica-cdn.im/home-web/_next/static/media/Playground.49df7739.png', description: 'Flexible sandbox for AI-generated art and design explorations.' },
  { name: 'Ideogram V2', key: 'ideogram', img: 'https://files.monica-cdn.im/home-web/_next/static/media/Ideogram.c347d4c7.png', description: 'Specialized for logos, text art, and font-styled images.' },
  { name: 'Recraft V3 Raw', key: 'recraft', img: 'https://files.monica-cdn.im/home-web/_next/static/media/Recraft.aaa21.png', description: 'High-contrast raw model tuned for branding and illustrations.' }
];

const STYLES = [
  { label: 'Auto', value: '', img: 'https://files.monica-cdn.im/home-web/_next/static/media/recraftv3_12_4/01-Auto.webp' },
  { label: '3D Anime', value: '3d_anime', img: 'https://files.monica-cdn.im/home-web/_next/static/media/anime3d.3868cb80.png' },
  { label: '3D Model', value: '3d_model', img: 'https://files.monica-cdn.im/home-web/_next/static/media/model3d.4bf9a269.png' },
  { label: 'Japanese Anime', value: 'japanese_anime', img: 'https://files.monica-cdn.im/home-web/_next/static/media/japaneseAnime.a5a0cf87.png' },
  { label: 'Movie', value: 'movie', img: 'https://files.monica-cdn.im/home-web/_next/static/media/cinema.3354581e.png' },
  { label: 'Comic', value: 'comic', img: 'https://files.monica-cdn.im/home-web/_next/static/media/comic.18cfb385.png' },
  { label: 'Cyberpunk', value: 'cyberpunk', img: 'https://files.monica-cdn.im/home-web/_next/static/media/cyberpunk.38513fe1.png' },
  { label: 'Fantasy', value: 'fantasy', img: 'https://files.monica-cdn.im/home-web/_next/static/media/fantasy.d976d02b.png' },
  { label: 'Oil Painting', value: 'oil_painting', img: 'https://files.monica-cdn.im/home-web/_next/static/media/oilPainting.2014df14.png' },
  { label: 'Colored Pencil', value: 'colored_pencil', img: 'https://files.monica-cdn.im/home-web/_next/static/media/pencil.c3c6b4d0.png' },
  { label: 'Pixel Art', value: 'pixel_art', img: 'https://files.monica-cdn.im/home-web/_next/static/media/pixel.968f3b26.png' },
  { label: 'Realistic', value: 'realistic', img: 'https://files.monica-cdn.im/home-web/_next/static/media/realistic.2098ef71.png' },
  { label: 'Watercolor', value: 'watercolor', img: 'https://files.monica-cdn.im/home-web/_next/static/media/waterColor.28d2534b.png' }
];


const EXAMPLES = ['👩🏻‍🚀 Astronaut in Space', '🏰 Medieval Castle', '🌋 Volcanic Eruption'];

export default function ImageGenerator() {
  const [model, setModel] = useState('sdxl');
  const [style, setStyle] = useState('');
  const [prompt, setPrompt] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [recentImages, setRecentImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await supabase.from('ai_images').select('*').order('created_at', { ascending: false });
      setRecentImages(data || []);
    };
    fetchImages();
  }, []);

  const generate = async () => {
    if (!prompt.trim()) return setError('Prompt required.');
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: `${prompt} ${style && `in ${style} style`}`.trim(),
          n: 1,
          size: '1024x1024',
          response_format: 'url'
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message);
      const imageUrl = data.data[0].url;
      setUrl(imageUrl);

      await supabase.from('ai_images').insert({
        title: prompt,
        slug: prompt.toLowerCase().replace(/\s+/g, '-'),
        output: imageUrl,
        image_generator: model,
        image_style: style,
        description: prompt
      });
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {MODELS.map((m) => (
            <button
      key={m.key}
      onClick={() => setModel(m.key)}
      className={`flex items-center px-4 py-2 rounded-full text-sm ${
        model === m.key ? 'ring-4 ring-purple-500 uai-700' : 'bg-white hover:bg-muted border'
      }`}
    >
            <img src={m.img} alt={m.name} className="w-4 h-4 object-contain mr-2" />
            {m.name}
          </button>
        ))}
      </div>

      {MODELS.find((m) => m.key === model)?.description && (
        <div className="flex justify-center gap-2 text-sm text-muted-foreground mt-2 mb-6 items-center">
          <img src={MODELS.find((m) => m.key === model)?.img} className="w-4 h-4" />
          <span className="font-medium text-foreground">
            {MODELS.find((m) => m.key === model)?.name}
          </span>
          <span className="text-xs">{MODELS.find((m) => m.key === model)?.description}</span>
        </div>
      )}

      </section>

      <Card className="bg-white dark:bg-black p-6 rounded-xl">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Select Style</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                              {STYLES.map((s) => (
                                <button
                        key={s.value}
                        className={`relative group rounded-xl overflow-hidden ${
                          style === s.value ? 'ring-4 ring-red-500' : ''
                        }`}
                        onClick={() => setStyle(s.value)}
                      >
                <img src={s.img} alt={s.label} className="w-full h-20 object-cover" />
                <span className="absolute bottom-1 left-1 right-1 text-xs text-white text-center bg-black/60 py-0.5 rounded">{s.label}</span>
              </button>
            ))}
          </div>

          <Textarea
            placeholder="Describe the picture in your dream, such as 'quiet riverside sunset'..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            className="w-full rounded-lg border mb-4"
          />

          <div className="flex flex-wrap gap-2 mb-4">
            {EXAMPLES.map((ex) => (
              <button key={ex} onClick={() => setPrompt(ex)} className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-white">
                {ex}
              </button>
            ))}
          </div>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="w-4 h-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

         <Button
            className="mt-10 mb-10 w-full h-[50px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base"
            onClick={generate}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate Image Now'}
          </Button>


          {url && <img src={url} alt="Generated" className="mt-6 w-full rounded-lg shadow" />}

         {recentImages.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Recent Generated Images</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {recentImages.map((img) => (
                    <Link
                      key={img.id}
                      href={`/ai-text-to-images/${img.slug}`}
                      className="group block rounded-xl border shadow-md hover:shadow-xl transition overflow-hidden bg-white dark:bg-zinc-900"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={img.output}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-semibold text-foreground truncate">{img.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{img.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

        </CardContent>
      </Card>
    </>
  );
}
