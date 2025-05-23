'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Ganti karakter non-alphanumeric dengan '-'
      .replace(/^-+|-+$/g, '')     // Hapus '-' di awal/akhir
      .substring(0, 50);           // Batasi panjang slug
  }
  
export default function AIProductPhotography() {
  const [description, setDescription] = useState('');
  const [background, setBackground] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [mask, setMask] = useState<File | null>(null);

  const generateImage = async () => {
    if (!file || !background) return;
    setLoading(true);
    setError(null);
    setImageUrl('');

    try {
      const formData = new FormData();
      formData.append('model', 'gpt-image-1');
      formData.append('prompt', `a ${description || 'product'} on a ${background} background`);
      formData.append('n', '1');
      formData.append('size', '1024x1024');
      formData.append('image', file);
      if (mask) formData.append('mask', mask);

      const response = await fetch('https://api.openai.com/v1/images/edits', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        },
        body: formData
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result?.error?.message || 'Failed to generate image');

      const base64 = result.data[0].b64_json;
      const imageSlug = `${slugify(description)}-${Date.now()}`;
      const outputUrl = `data:image/png;base64,${base64}`;
      setImageUrl(outputUrl);

      const uploadRes = await fetch('https://oneaikit.com/public/generator/upload.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: outputUrl, fileName: `${slugify(imageSlug)}.png` }),
      });

      const uploadData = await uploadRes.json();
      if (!uploadData.success || !uploadData.path) throw new Error('Upload failed');

      const publicPath = `https://oneaikit.com${uploadData.path}`;

      await supabase.from('ai_images').insert({
        title: description,
        slug: imageSlug,
        output: publicPath,
        size: '1024x1024',
        quality: 'standard',
        description: `a ${description} on a ${background} background`,
        image_generator: 'openai',
        image_style: background,
        image_lighting: 'auto',
        image_mood: 'clean',
      });

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const backgrounds = [
    'Studio',
    'Silk',
    'Cafe',
    'Tabletop',
    'Marble',
    'Nature',
    'Minimalist Interior',
    'Dark Wood',
    'Outdoors',
    'Surprise me',
  ];

  return (
    <form className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md space-y-6" onSubmit={(e) => { e.preventDefault(); generateImage(); }}>
      <h2 className="text-xl font-semibold">AI Product Photography Generator</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Upload Product Image</label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && setFile(e.target.files[0])}
        />
      </div>

     
      <Textarea
        placeholder="Describe your product (e.g. red lipstick, ceramic mug, perfume bottle)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={2}
      />

      <div>
        <label className="block text-sm font-medium mb-2">Select Background</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {backgrounds.map((bg) => (
            <div
              key={bg}
              className={`cursor-pointer p-2 border rounded-lg text-center text-sm ${background === bg ? 'border-blue-500' : 'border-gray-200'}`}
              onClick={() => setBackground(bg)}
            >
              {bg}
            </div>
          ))}
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button
        disabled={loading || !file || !background}
        className="w-full h-[48px] rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-base font-semibold"
        type="submit"
      >
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : 'Generate Product Image'}
      </Button>

      {imageUrl && (
        <div>
          <h3 className="text-md font-medium mb-2">Generated Image:</h3>
          <img src={imageUrl} alt="Generated product shot" className="w-full rounded-xl shadow" />
        </div>
      )}
    </form>
  );
}
