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

  const [allImages, setAllImages] = useState<any[]>([]);
  const [fetchingImages, setFetchingImages] = useState(false);

  const SESSION_COOKIE = process.env.NEXT_PUBLIC_SESSION_COOKIE!;

  const genExample = () => {
    const examples = ['Cityscape at sunset', 'Hedgehog smelling a flower', 'Delicious pizza'];
    setPrompt(examples[Math.floor(Math.random() * examples.length)]);
  };

  useEffect(() => {
    const fetchImages = async () => {
      setFetchingImages(true);
      const { data, error } = await supabase
        .from('ai_images')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching images:', error);
      } else {
        setAllImages(data || []);
      }

      setFetchingImages(false);
    };

    fetchImages();
  }, []);

  function createCORSRequest(url: string, method: string): XMLHttpRequest | null {
    let xhr: XMLHttpRequest;
    if ('withCredentials' in new XMLHttpRequest()) {
      xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
    } else if (typeof (window as any).XDomainRequest !== 'undefined') {
      xhr = new (window as any).XDomainRequest();
      xhr.open(method, url);
    } else {
      return null;
    }
    return xhr;
  }

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  const [style, setStyle] = useState('');
const [lighting, setLighting] = useState('');
const [mood, setMood] = useState('');


  // function generate() {
  //   if (!prompt.trim()) {
  //     setError('Please enter a prompt description');
  //     return;
  //   }

  //   setLoading(true);
  //   setError(null);
  //   setUrl('');

  //   document.cookie = SESSION_COOKIE;

  //   const xhr = createCORSRequest('https://oneaikit.com/dashboard/user/openai/generate', 'POST');

  //   if (!xhr) {
  //     setError('CORS not supported by browser');
  //     setLoading(false);
  //     return;
  //   }

  //   xhr.onload = async function () {
  //     try {
  //       const data = JSON.parse(xhr.responseText);

  //       if (xhr.status !== 200 || data.error) {
  //         throw new Error(data.error || 'Error generating image');
  //       }

  //       if (!data.images || data.images.length === 0) {
  //         throw new Error('No images were generated');
  //       }

  //       const img = data.images[0];
  //       const outputUrl = img.output_url || img.output;

  //       if (!outputUrl) {
  //         throw new Error('Generated image URL is missing');
  //       }

  //       setUrl(outputUrl);

  //       const imageTitle = img.title || prompt.substring(0, 50);
  //       const imageSlug = slugify(imageTitle);

  //       const { error: supabaseError } = await supabase.from('ai_images').insert({
  //         title: imageTitle,
  //         slug: imageSlug,
  //         output: outputUrl,
  //         size: resolution,
  //         quality: 'standard',
  //         description: prompt,
  //         image_generator: engine === 'dalle' ? 'openai' : 'stable_diffusion',
  //         image_style: style,
  //         image_lighting: '',
  //         image_mood: '',
  //       });

  //       if (supabaseError) {
  //         console.error('Supabase insert error:', supabaseError);
  //       }

  //       setLoading(false);
  //     } catch (err: any) {
  //       console.error('Error processing response:', err);
  //       setError(err?.message || 'Failed to process image');
  //       setLoading(false);
  //     }
  //   };

  //   xhr.onerror = function () {
  //     console.error('XHR error');
  //     setError('Network error occurred');
  //     setLoading(false);
  //   };

  //   xhr.withCredentials = true;
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  //   const tokenMeta = document.querySelector('meta[name="csrf-token"]');
  //   if (tokenMeta) {
  //     const csrfToken = tokenMeta.getAttribute('content');
  //     if (csrfToken) {
  //       xhr.setRequestHeader('X-CSRF-Token', csrfToken);
  //     }
  //   }

  //   const formData = new FormData();
  //   formData.append('post_type', 'ai_image_generator');
  //   formData.append('openai_id', '32');
  //   formData.append('custom_template', '0');
  //   formData.append('image_generator', engine === 'dalle' ? 'openai' : 'stable_diffusion');
  //   formData.append('image_style', style);
  //   formData.append('image_lighting', '');
  //   formData.append('image_mood', '');
  //   formData.append('image_number_of_images', String(count));
  //   formData.append('size', resolution);
  //   formData.append('quality', 'standard');
  //   formData.append('description', prompt.trim());

  //   xhr.send(formData);
  // }

  // async function generate() {
  //   if (!prompt.trim()) {
  //     setError('Please enter a prompt description');
  //     return;
  //   }
  
  //   setLoading(true);
  //   setError(null);
  //   setUrl('');
  
  //   const attributes = [
  //     style ? `${style} style` : null,
  //     lighting ? `${lighting} lighting` : null,
  //     mood ? `${mood} mood` : null
  //   ].filter(Boolean).join(' ');
  
  //   const finalPrompt = `${prompt.trim()} ${attributes}`.trim();
  
  //   try {
  //     const response = await fetch('https://api.openai.com/v1/images/generations', {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         model: 'dall-e-3',
  //         prompt: finalPrompt,
  //         n: Math.min(count, 2), // DALL·E 3 hanya support maksimal 2
  //         size: resolution, // Valid: '1024x1024', '1024x1792', '1792x1024'
  //         response_format: 'url'
  //       })
  //     });
  
  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data.error?.message || 'Failed to generate image');
  
  //     const images = data.data;
  //     if (!images || images.length === 0) throw new Error('No images returned');
  
  //     const imageTitle = finalPrompt.substring(0, 50);
  //     const imageSlug = slugify(imageTitle);
  
  //     // Simpan gambar pertama
  //     const outputUrl = images[0].url;
  //     setUrl(outputUrl);
  
  //     await supabase.from('ai_images').insert({
  //       title: imageTitle,
  //       slug: imageSlug,
  //       output: outputUrl,
  //       size: resolution,
  //       quality: 'standard',
  //       description: prompt,
  //       image_generator: 'openai',
  //       image_style: style,
  //       image_lighting: lighting,
  //       image_mood: mood,
  //     });
  
  //     // Format response seperti oneaikit
  //     const formattedResponse = {
  //       status: 'success',
  //       images: images.map((img: { url: string; revised_prompt?: string }, index: number) => ({

  //         team_id: null,
  //         title: prompt.trim(),
  //         slug: `${imageSlug}-${index}`,
  //         user_id: 1,
  //         openai_id: 32,
  //         input: prompt.trim(),
  //         response: 'DE',
  //         output: img.url,
  //         output_url: img.url,
  //         hash: '',
  //         credits: 1,
  //         words: 0,
  //         storage: 'public',
  //         payload: {
  //           post_type: 'ai_image_generator',
  //           openai_id: '32',
  //           custom_template: '0',
  //           image_generator: 'openai',
  //           image_style: style || null,
  //           image_lighting: lighting || null,
  //           image_mood: mood || null,
  //           image_number_of_images: String(count),
  //           size: resolution,
  //           quality: 'standard',
  //           description: prompt.trim(),
  //           'credit-list-cache': `credit-list-cache-${Date.now()}`,
  //           maximum_length: null,
  //           model: 'dall-e-3',
  //         },
  //         updated_at: new Date().toISOString(),
  //         created_at: new Date().toISOString(),
  //         id: Date.now() + index,
  //         img_id: `img-DE-${Date.now() + index}`,
  //         format_date: new Date().toLocaleDateString('en-US', {
  //           year: 'numeric',
  //           month: 'short',
  //           day: '2-digit'
  //         }),
  //         generator_type: 'image',
  //         generator: {
  //           id: 32,
  //           user_id: null,
  //           title: 'AI to Generate Images',
  //           description: 'Create stunning and unique images instantly with AI-powered generation tools.',
  //           slug: 'ai_image_generator',
  //           active: '1',
  //           questions: JSON.stringify([
  //             { name: 'description', type: 'textarea', question: 'Describe the Image', select: '' },
  //             {
  //               name: 'size',
  //               type: 'select',
  //               question: 'Image Resolution',
  //               select: "<option value='256x256'>256x256</option><option value='512x512'>512x512</option><option value='1024x1024'>1024x1024</option>"
  //             }
  //           ]),
  //           image: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm56-157h489L578 583 446 754l-93-127-117 152Z"/></svg>',
  //           premium: '0',
  //           type: 'image',
  //           created_at: '2023-03-20T06:22:02.000Z',
  //           updated_at: '2023-03-20T06:22:02.000Z',
  //           prompt: null,
  //           custom_template: '0',
  //           tone_of_voice: '0',
  //           color: '#D1C5DE',
  //           filters: 'development',
  //           package: null,
  //         }
  //       })),
  //       nameOfImage: `${imageSlug}.png`,
  //       image_storage: 'public'
  //     };
  
  //     console.log('Image Generated Response:', formattedResponse);
  
  //   } catch (err: any) {
  //     console.error('OpenAI error:', err);
  //     setError(err.message || 'Unknown error occurred');
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function generate() {
    if (!prompt.trim()) {
      setError('Please enter a prompt description');
      return;
    }
  
    setLoading(true);
    setError(null);
    setUrl('');
  
    const attributes = [
      style ? `${style} style` : null,
      lighting ? `${lighting} lighting` : null,
      mood ? `${mood} mood` : null
    ].filter(Boolean).join(' ');
  
    const finalPrompt = `${prompt.trim()} ${attributes}`.trim();
  
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: finalPrompt,
          n: Math.min(count, 2), // DALL·E 3 supports max 2
          size: resolution,
          response_format: 'url'
        })
      });
  
      const data = await response.json();

      // const data = {
      //   created: 1746369616,
      //   data: [
      //     {
      //       revised_prompt:
      //         'Envision an AI robot. This technologically advanced machine has a sleek silver metallic body with distinct features...',
      //       url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-lyj8pytBrAKZDC3cJiRMBeyt/user-9TjyYrBL2V3xm9MDq0LdBuvv/img-yMc4nghbyrckpixXfyMhVxdq.png?st=2025-05-04T13%3A40%3A16Z&se=2025-05-04T15%3A40%3A16Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=475fd488-6c59-44a5-9aa9-31c4db451bea&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-04T01%3A10%3A44Z&ske=2025-05-05T01%3A10%3A44Z&sks=b&skv=2024-08-04&sig=0dpinXmqFTkKGyTs8iMStgtEp8klNZ0KTh0TEZ0afR8%3D'
      //     }
      //   ]
      // };

      if (!response.ok) throw new Error(data.error?.message || 'Failed to generate image');
  
      const images: { url: string; revised_prompt?: string }[] = data.data;
      if (!images || images.length === 0) throw new Error('No images returned');
  
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const imageTitle = finalPrompt.substring(0, 50);
        const imageSlug = slugify(`${imageTitle}-${i}`);
        const outputUrl = img.url;
  
        // Set preview image
        if (i === 0) setUrl(outputUrl);
  
        // Upload to server (CPanel)
        const uploadRes = await fetch('https://oneaikit.com/public/generator/upload.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageUrl: outputUrl,
            fileName: `${imageSlug}.png`
          })
        });
  
        const uploadData = await uploadRes.json();
        if (!uploadData.success || !uploadData.path) {
          console.warn('Upload failed:', uploadData.error);
          continue;
        }
  
        const publicPath = `https://oneaikit.com${uploadData.path}`; // final URL to be stored
  
        // Simpan metadata ke Supabase
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
      console.error('OpenAI error:', err);
      setError(err.message || 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  }
  
    
  
  
  return (
    <Card className="bg-secondary dark:bg-surface rounded-xl border-0 mb-10">
      <CardContent className="pt-6">
        <div className="flex gap-2 mb-4">
          <Button variant={engine === 'dalle' ? 'outline' : 'ghost'} onClick={() => setEngine('dalle')}>
            DALL·E
          </Button>
          <Button variant={engine === 'stable_diffusion' ? 'outline' : 'ghost'} onClick={() => setEngine('stable_diffusion')}>
            Stable Diffusion
          </Button>
        </div>

        <div className="relative mb-4">
          <Textarea
            placeholder="Describe image"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            className="rounded-lg px-4 py-2 shadow-sm"
          />
          <Button variant="link" size="sm" className="absolute top-2 right-4" onClick={genExample}>
            Example prompt
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <select
            value={resolution}
            onChange={(e) => setResolution(e.target.value as '1024x1024' | '1792x1024')}
            className="flex-1 p-2 border rounded-lg"
          >
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
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'image' : 'images'}
              </option>
            ))}
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

        {url && (
          <div className="mt-6">
            <img src={url} alt="Generated AI Image" className="w-full rounded-lg shadow-md" loading="eager" />
          </div>
        )}

        {!fetchingImages && allImages.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-4">Recent Generated Images</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {allImages.map((img) => (
                <Link
                  key={img.id}
                  href={`/text-to-images/${img.slug || img.id}`}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
                >
                  <img
                    src={img.output}
                    alt={`${img.title || 'AI image'} - ai text to image generator free`}
                    className="w-full h-auto"
                  />
                  <div>
                    <h4 className="text-sm font-medium mb-1">{img.title || 'Untitled'}</h4>
                    <p className="text-xs text-muted-foreground"><strong>Prompt : </strong>{img.description}</p>
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
