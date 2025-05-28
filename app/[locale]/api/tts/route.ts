export const dynamic = "force-dynamic";

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { text, voice = 'alloy', model = 'tts-1' } = await req.json();
  if (!text) {
    return NextResponse.json({ error: 'No text provided' }, { status: 400 });
  }

  const res = await fetch('https://api.openai.com/v1/audio/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({ model, voice, input: text }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: err }, { status: res.status });
  }

  const arrayBuffer = await res.arrayBuffer();
  return new Response(arrayBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'audio/mpeg',
    },
  });
}
