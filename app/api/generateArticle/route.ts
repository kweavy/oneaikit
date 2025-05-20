import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { topic, title, outline, keywords, image } = await req.json();

  const prompt = `
Write a full SEO-friendly blog article in HTML format about:
- Topic: ${topic}
- Title: ${title}
- Keywords: ${keywords.join(', ')}

Use this outline:
${outline}

Include proper HTML tags like <h1>, <h2>, <p>, <ul>, etc.
Do not include title in plain text if it's already in <h1>.
If there is an image, include <img src="${image}" alt="${title}" /> at the top if available.
`;

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o', // or gpt-4 / gpt-3.5-turbo
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    const article = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({ article });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
