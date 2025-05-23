'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Plus, Trash } from 'lucide-react';
import Image from 'next/image';
import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

const backgrounds = [
  'Studio', 'Silk Fabric', 'Cafe Interior', 'White Marble', 'Minimalist Interior',
  'Dark Wood', 'Outdoors', 'Beach', 'Concrete Wall', 'Luxury Showroom', 'Surprise Me'
];


export default function AICombineMultiplePhotoPage() {
  const [fileInputs, setFileInputs] = useState<File[]>([]);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [background, setBackground] = useState<string>('Studio');
  const [description, setDescription] = useState('');

  const handleFileChange = (index: number, file: File) => {
    const updated = [...fileInputs];
    updated[index] = file;
    setFileInputs(updated);
  };

  function slugify(text: string, options: { lower?: boolean } = {}): string {
  const slug = text
    .normalize('NFKD') // remove accents
    .replace(/[^\w\s-]/g, '') // remove non-word characters
    .trim()
    .replace(/[\s_-]+/g, '-') // replace spaces/underscores with -
    .replace(/^-+|-+$/g, ''); // remove leading/trailing -

  return options.lower ? slug.toLowerCase() : slug;
}


  const addFileInput = () => setFileInputs([...fileInputs, undefined as any]);
  const removeFileInput = (index: number) => {
    const updated = [...fileInputs];
    updated.splice(index, 1);
    setFileInputs(updated);
  };

  const handleSubmit = async () => {
    if (fileInputs.length === 0 || fileInputs.some((f) => !f)) return;

    setLoading(true);
    setResultImage(null);
    setError(null);

    const formData = new FormData();
    formData.append('model', 'gpt-image-1');
    fileInputs.forEach((file) => formData.append('image[]', file));

    const prompt = `Generate a photorealistic image of a ${description} on a ${background} background, with realistic lighting and clean style`;

    formData.append('prompt', prompt);

    try {
      const response = await fetch('https://api.openai.com/v1/images/edits', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY || ''}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      const result = await response.json();
      const b64Image = result?.data?.[0]?.b64_json;
      if (!b64Image) throw new Error('No image returned');

      const outputUrl = `data:image/png;base64,${b64Image}`;
      setResultImage(outputUrl);

      const imageSlug = slugify(description, { lower: true });
      const uploadRes = await fetch('https://oneaikit.com/public/generator/upload.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl: outputUrl, fileName: `${imageSlug}.png` }),
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
      console.error(err);
      setError(err.message || 'Unexpected error.');
    } finally {
      setLoading(false);
    }
  };

 return (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <Card>
      <CardHeader>
        <CardTitle>AI Combine Multiple Photos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <p className="text-muted-foreground text-center">
          Upload multiple product images and generate a photorealistic scene using AI. Output is saved to Supabase & hosted online.
        </p>

        <div>
          <label className="block text-sm font-medium mb-2">Image Description</label>
          <textarea
            placeholder="Describe your product (e.g. red lipstick, ceramic mug, perfume bottle)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="w-full p-2 border rounded resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Upload Product Images</label>
          <div className="space-y-2">
            {fileInputs.map((file, index) => (
              <div key={index} className="flex items-center gap-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileChange(index, file);
                  }}
                  className="file-input file-input-bordered w-full max-w-xs"
                />
                {file && (
                  <Image
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    width={80}
                    height={80}
                    className="rounded object-cover border"
                  />
                )}
                <button
                  type="button"
                  onClick={() => removeFileInput(index)}
                  className="text-red-500"
                  title="Remove image"
                >
                  <Trash size={20} />
                </button>
              </div>
            ))}
          </div>

          <Button type="button" onClick={addFileInput} variant="outline" className="mt-3 flex items-center gap-2">
            <Plus size={16} /> Add Image
          </Button>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Select Background</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {backgrounds.map((bg) => (
              <div
                key={bg}
                className={`cursor-pointer p-2 border rounded-lg text-center text-sm ${
                  background === bg ? 'border-blue-500' : 'border-gray-200'
                }`}
                onClick={() => setBackground(bg)}
              >
                {bg}
              </div>
            ))}
          </div>
        </div>

        <Button onClick={handleSubmit} disabled={loading || fileInputs.length === 0} className="w-full h-12">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating...
            </>
          ) : (
            'Generate Combined Image'
          )}
        </Button>

        {resultImage && (
          <div className="text-center mt-6 space-y-4">
            <h2 className="text-lg font-semibold">Generated Result</h2>
            <Image src={resultImage} alt="Result" width={512} height={512} className="rounded-lg border" />
          </div>
        )}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </CardContent>
    </Card>
  </div>
);

}
