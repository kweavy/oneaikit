'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const MODEL = {
  name: 'Kling 1.0',
  key: 'kling',
  img: 'https://files.monica-cdn.im/home-web/_next/static/media/Kling.7687eb16.png'
};

const EXAMPLES = [
  '👩🏻‍🚀 Astronaut in Space',
  '🏰 Medieval Castle',
  '🌋 Volcanic Eruption'
];

export default function AiVideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const generateVideo = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.aimlapi.com/v2/generate/video/kling/generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer a381589898c44cf3b6209ad97f5e99e0'
        },
        body: JSON.stringify({
          model: 'kling-video/v1/standard/text-to-video',
          aspect_ratio: '16:9',
          duration: 5,
          prompt,
          negative_prompt: '',
          cfg_scale: 1,
          camera_control: 'down_back',
          advanced_camera_control: {
            movement_type: 'horizontal',
            movement_value: 1
          }
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'Failed to generate video');
      setVideoUrl(data?.video_url || '');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">AI Video Generator</h2>

      <div className="flex gap-2 items-center mb-6">
        <img src={MODEL.img} alt={MODEL.name} className="w-6 h-6 object-contain" />
        <span className="text-sm font-medium">{MODEL.name}</span>
      </div>

      <h2 className="text-md font-semibold mb-2">Creation Description</h2>
      <Textarea
        placeholder='Describe your video, e.g., "a quiet riverside sunset"'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        className="mb-4"
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {EXAMPLES.map((example, index) => (
          <button
            key={index}
            onClick={() => setPrompt(example)}
            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary hover:text-white"
          >
            {example}
          </button>
        ))}
      </div>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <Button
        disabled={loading}
        className="w-full h-[60px] text-base font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white"
        onClick={generateVideo}
      >
        {loading ? 'Generating...' : 'Create with AI'}
      </Button>

      {videoUrl && (
        <div className="mt-6">
          <h3 className="text-md font-medium mb-2">Generated Video:</h3>
          <video src={videoUrl} controls className="w-full rounded-xl shadow" />
        </div>
      )}
    </div>
  );
}
