// app/api/generateImage/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt, engine, resolution, style, count } = body;

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
      },
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: 'Image generation failed', detail: data }, { status: response.status });
    }

    const image = data.images?.[0];
    if (!image?.output_url) {
      return NextResponse.json({ error: 'No image returned' }, { status: 500 });
    }

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
      console.error('Supabase error:', error.message);
      return NextResponse.json({ error: 'Failed to save image to database.' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    console.error('Handler error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
