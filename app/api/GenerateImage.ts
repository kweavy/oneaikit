// pages/api/generateImage.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // gunakan Service Role Key untuk write
);

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { prompt, engine, resolution, style, count } = req.body;

  const formData = new FormData();
  formData.append('post_type', 'ai_image_generator');
  formData.append('openai_id', '32');
  formData.append('custom_template', '0');
  formData.append('image_generator', engine);
  formData.append('image_style', style);
  formData.append('image_lighting', '');
  formData.append('image_mood', '');
  formData.append('image_number_of_images', count.toString());
  formData.append('size', resolution);
  formData.append('quality', 'standard');
  formData.append('description', prompt);

  const response = await fetch('https://oneaikit.com/dashboard/user/openai/generate', {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-TOKEN': 'SospO0V1mPRstd4Y795HaupgMCkeIiikMkfiNqmp',
      Cookie: req.headers.cookie || '',
    },
    body: formData,
  });

  const data = await response.json();

  if (response.ok && data?.images?.[0]?.output_url) {
    const image = data.images[0];

    // Simpan ke Supabase
    const { error } = await supabase.from('ai_images').insert({
      title: image.title,
      slug: image.slug,
      output: image.output_url,
      size: image.payload.size,
      quality: image.payload.quality,
      description: image.payload.description,
      image_generator: image.payload.image_generator,
      image_style: image.payload.image_style,
      image_lighting: image.payload.image_lighting,
      image_mood: image.payload.image_mood,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Failed to save image to database.' });
    }

    return res.status(200).json(data);
  }

  res.status(response.status).json(data);
}
