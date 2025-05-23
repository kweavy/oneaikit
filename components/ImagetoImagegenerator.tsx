'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';

const STYLES = [

  { label: 'Ghibli', value: 'ghibli', img: 'https://menafn.com/updates/pr/2025-03/28/KT_b12a6image_story.jpg' },
  { label: 'Action Figure Toy', value: 'action_figure', img: 'https://glittermeetsglue.com/wp-content/uploads/2025/04/elementaryartteacheractionfigure.jpg' },
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
  { label: 'Watercolor', value: 'watercolor', img: 'https://files.monica-cdn.im/home-web/_next/static/media/waterColor.28d2534b.png' },
  { label: 'Trending Neon', value: 'neon', img: 'https://files.monica-cdn.im/home-web/_next/static/media/neon-style.12345678.png' },
];

export default function ImageToImageGenerator() {
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleGenerate = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('init_image', file);
      formData.append('text_prompts[0][text]', `${description} ${style && `in ${style} style`}`.trim());
      formData.append('text_prompts[0][weight]', '1');

      const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-v1-6/image-to-image', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer sk-eNhDfiry4rz92z588bezqW3fKefT5HC9kXThd42Dr7z2YSJa'
        },
        body: formData
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error?.message || 'Failed to generate image');

      const base64 = result.artifacts?.[0]?.base64;
      if (base64) setImageUrl(`data:image/png;base64,${base64}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Select Style</h2>
      <div className="flex overflow-x-auto gap-4 mb-6">
        {STYLES.map((s, index) => (
          <div
            key={index}
            onClick={() => setStyle(s.value)}
            className={`min-w-[110px] cursor-pointer flex-shrink-0 rounded-xl overflow-hidden shadow-sm border bg-gradient-to-br from-zinc-100 to-zinc-300 text-center ${
              style === s.value ? 'ring-2 ring-purple-500' : ''
            }`}
          >
            <img src={s.img} alt={s.label} className="h-24 w-full object-cover" />
            <div className="text-sm font-medium py-1 bg-black/30 text-white truncate">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-md font-semibold mb-2">Upload reference</h2>
      <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-muted/20 mb-6">
        {file ? (
          <img src={URL.createObjectURL(file)} alt="Preview" className="w-full max-h-60 object-contain rounded mb-2" />
        ) : (
          <>
            <Upload className="w-8 h-8 text-muted-foreground mb-2" />
            <span className="text-sm font-medium text-muted-foreground">
              Click to upload or drag image here
            </span>
            <span className="text-xs text-muted-foreground mt-1">Support: JPG, PNG | Max file size: 10MB</span>
          </>
        )}
        <Input type="file" className="hidden" onChange={handleUpload} accept="image/png, image/jpeg" />
      </label>

      <h2 className="text-md font-semibold mb-2">Describe the style you want to change</h2>
      <Textarea
        placeholder="Describe desired pose and scene, e.g.: smiling selfie, sitting in cafe, standing by the sea at sunset"
        className="mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        maxLength={2000}
      />
      <div className="text-xs text-muted-foreground text-right mb-4">{description.length}/2000</div>

      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

      <Button
        disabled={!file || loading}
        onClick={handleGenerate}
        className="w-full h-[64px] rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white text-base font-semibold"
      >
        {loading ? 'Generating...' : 'Create now'}
      </Button>

      {imageUrl && (
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Generated Image:</h3>
          <img src={imageUrl} alt="Result" className="w-full rounded-xl shadow" />
        </div>
      )}
    </div>
  );
}
