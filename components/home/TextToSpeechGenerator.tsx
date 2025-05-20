'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

export default function TextToSpeechGenerator() {
  const [lang, setLang] = useState('en-US');
  const [voice, setVoice] = useState('alloy');
  const [model, setModel] = useState<'tts-1' | 'tts-1-hd'>('tts-1');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  function slugify(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Ganti karakter non-alphanumeric dengan '-'
      .replace(/^-+|-+$/g, '')     // Hapus '-' di awal/akhir
      .substring(0, 50);           // Batasi panjang slug
  }
  
  // async function generate() {
  //   if (!text.trim()) return;
  //   setLoading(true);
  //   setAudioUrl(null);
  
  //   try {
  //     const response = await fetch('https://api.openai.com/v1/audio/speech', {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         model,
  //         voice,
  //         input: text,
  //       }),
  //     });
  
  //     if (!response.ok) throw new Error(await response.text());
  //     const blob = await response.blob();
  //     const url = URL.createObjectURL(blob);
  //     setAudioUrl(url);
  
  //     // 👇 Buat nama file unik
  //     const slug = slugify(text);
  //     const timestamp = Date.now(); // contoh: 1714833559000
  //     const filename = `${slug}-${timestamp}.mp3`;
  
  //     // 👇 Upload ke server
  //     const formData = new FormData();
  //     const file = new File([blob], filename, { type: 'audio/mpeg' });
  //     formData.append('voice', file);
  
  //     const uploadResponse = await fetch('https://oneaikit.com/public/generator/upload_voice.php', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     const result = await uploadResponse.text();
  //     console.log('Upload result:', result);
  //   } catch (err) {
  //     console.error('TTS or upload error', err);
  //     alert('Failed to generate or upload voiceover');
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  

  async function generate() {
    if (!text.trim()) return;
    setLoading(true);
    setAudioUrl(null);

    try {
      // 1. Generate voice from OpenAI
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          voice,
          input: text,
        }),
      });

      if (!response.ok) throw new Error(await response.text());
      const blob = await response.blob();
      const localUrl = URL.createObjectURL(blob);
      setAudioUrl(localUrl);

      // 2. Upload to your server
      const slug = slugify(text);
      const timestamp = Date.now();
      const filename = `${slug}-${timestamp}.mp3`;
      const formData = new FormData();
      const file = new File([blob], filename, { type: 'audio/mpeg' });
      formData.append('voice', file);

      const uploadResponse = await fetch('https://oneaikit.com/public/generator/upload_voice.php', {
        method: 'POST',
        body: formData,
      });

      const uploadResult = await uploadResponse.text();
      console.log('Upload result:', uploadResult);

      const publicUrl = `https://oneaikit.com/public/generator/voice/${filename}`;

      // 3. Save metadata to Supabase
      const { error } = await supabase.from('ai_voices').insert({
        prompt: text,
        voice_url: publicUrl,
        slug,
        voice_model: model,
        voice_name: voice,
        language: lang,
      });

      if (error) {
        console.error('Supabase insert error:', error.message);
        alert('Gagal menyimpan ke database');
      }
    } catch (err) {
      console.error('TTS or upload error', err);
      alert('Failed to generate or upload voiceover');
    } finally {
      setLoading(false);
    }
  }



  return (
    <Card className="bg-[#F2F1FD] rounded-2xl shadow-sm border border-gray-200 mb-16">
      <CardHeader>
        <CardTitle>Voiceover Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 mb-4">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          >
            <option value="en-US">English (US)</option>
            <option value="id-ID">Indonesian</option>
          </select>
          <select
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          >
            <option value="alloy">Alloy (M)</option>
            <option value="nova">Nova (F)</option>
          </select>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as 'tts-1' | 'tts-1-hd')}
            className="flex-1 p-2 border rounded-lg"
          >
            <option value="tts-1">Normal</option>
            <option value="tts-1-hd">Neural</option>
          </select>
        </div>

        <Textarea
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full p-2 border rounded-lg mb-4"
        />

        <div className="flex justify-end mb-4">
          <Button onClick={generate} disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </Button>
        </div>

        {audioUrl && (
          <div className="flex flex-col items-start gap-4">
            <audio controls src={audioUrl} className="w-full" />
            <a
              href={audioUrl}
              download="voiceover.mp3"
              className="text-blue-600 underline"
            >
              Download MP3
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
