'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Upload } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from '@/lib/cropImage';

export default function ImageToVideoGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [croppedImageSrc, setCroppedImageSrc] = useState<string>('');
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [taskId, setTaskId] = useState('');

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => setImageSrc(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropAndSave = async () => {
    if (!imageSrc || !croppedAreaPixels) return;
  const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels, 1024, 576);

    const croppedUrl = URL.createObjectURL(croppedBlob);
    setCroppedImageSrc(croppedUrl);
    setImageSrc(''); // Hide cropper
    const fileFromBlob = new File([croppedBlob], 'cropped.png', { type: 'image/png' });
    setFile(fileFromBlob); // Update file input
  };

  const generateVideo = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setVideoUrl('');

    try {
      if (file.size > 10 * 1024 * 1024) {
        setError('Image too large. Please upload an image under 10MB.');
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append('image', file);
      formData.append('seed', '0');
      formData.append('cfg_scale', '1.8');
      formData.append('motion_bucket_id', '127');

      const response = await fetch('https://api.stability.ai/v2beta/image-to-video', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer sk-fZbpqyHDQYLyrC5H6r6ZnE2BoZAzNXKRMP0uAou06Gb8Xbv6'
        },
        body: formData
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result.errors?.[0] || result.message || 'Failed to start generation');
        setLoading(false);
        return;
      }

      const generationId = result.id;
      setTaskId(generationId);
      setTimeout(() => fetchVideo(generationId), 10000);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };
//{"id":"71a9182af1892e7aa2fabfa63c5d892487554e8221868fb52e54e01978b1b806"}
  const fetchVideo = async (generationId: string) => {
    try {
      const response = await fetch(`https://api.stability.ai/v2beta/image-to-video/result/${generationId}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer sk-fZbpqyHDQYLyrC5H6r6ZnE2BoZAzNXKRMP0uAou06Gb8Xbv6',
          Accept: 'video/*'
        }
      });

      if (response.status === 202) {
        setTimeout(() => fetchVideo(generationId), 10000);
      } else if (response.status === 200) {
        const blob = await response.blob();
        setVideoUrl(URL.createObjectURL(blob));
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Image to Video Generator (Stable Diffusion)</h2>

      {imageSrc ? (
        <>
          <div className="relative w-full aspect-[16/9] bg-black mb-4">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <Button className="mb-6 w-full" onClick={handleCropAndSave} variant="outline">
            Save Crop
          </Button>
        </>
      ) : croppedImageSrc ? (
        <div className="mb-6">
          <img src={croppedImageSrc} alt="Cropped Preview" className="w-full rounded-xl" />
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-muted/20 mb-6">
          <Upload className="w-8 h-8 text-muted-foreground mb-2" />
          <span className="text-sm font-medium text-muted-foreground">Click to upload or drag image here</span>
          <span className="text-xs text-muted-foreground mt-1">JPG, PNG | Max size: 10MB</span>
          <Input type="file" className="hidden" onChange={handleUpload} accept="image/png, image/jpeg" />
        </label>
      )}

      <h2 className="text-md font-semibold mb-2">Describe the style you want to generate</h2>
      <Textarea
        placeholder="Describe desired scene, e.g.: flying through space, underwater view"
        className="mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
        maxLength={2000}
      />
      <div className="text-xs text-muted-foreground text-right mb-4">{description.length}/2000</div>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <Button
        disabled={!file || loading}
        className="w-full h-[64px] rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-semibold"
        onClick={generateVideo}
      >
        {loading ? 'Generating...' : 'Create Video'}
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
