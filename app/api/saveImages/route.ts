import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { imageUrl, fileName } = await req.json();

    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const uint8Buffer = new Uint8Array(arrayBuffer);

    const filePath = join(process.cwd(), 'public', 'images', fileName);
    await writeFile(filePath, uint8Buffer);

    return NextResponse.json({ success: true, path: `/images/${fileName}` });
  } catch (error) {
    console.error('Error saving image:', error);
    return NextResponse.json({ success: false, error: 'Failed to save image' }, { status: 500 });
  }
}
