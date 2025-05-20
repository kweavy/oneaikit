import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { topic, title, outline } = await req.json();

    const prompt = `Write a comprehensive article about "${topic}"${
      title ? ` with the title "${title}"` : ''
    }${outline ? ` following this outline: ${outline}` : ''}.
    The article should be well-structured, engaging, and informative.
    Include relevant examples and explanations where appropriate.
    Format the response in markdown.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are an expert content writer skilled in creating engaging, well-researched articles."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    return NextResponse.json({ 
      article: completion.choices[0].message.content 
    });
  } catch (error) {
    console.error('Error generating article:', error);
    return NextResponse.json(
      { error: 'Failed to generate article' },
      { status: 500 }
    );
  }
}