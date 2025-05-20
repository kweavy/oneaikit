'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import {Editor} from '@tinymce/tinymce-react';


const steps = [
  { id: 0, label: 'Topic' },
  { id: 1, label: 'Select Keywords' },
  { id: 2, label: 'Select Title' },
  { id: 3, label: 'Outline' },
  { id: 4, label: 'Generate Images' },
  { id: 5, label: 'Final Article' },
];

export default function ArticleWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [topic, setTopic] = useState('');
  const [title, setTitle] = useState('');
  const [titles, setTitles] = useState<string[]>([]);
  const [outline, setOutline] = useState('');
  const [outlines, setOutlines] = useState<string[][]>([]);
  const [selectedOutline, setSelectedOutline] = useState<string[]>([]);
  const [article, setArticle] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [images, setImages] = useState<{ url: string; title: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editorData, setEditorData] = useState('');

  const isLast = currentStep === steps.length - 1;

  const next = async () => {
    if (currentStep === 0) await fetchKeywords();
    else if (currentStep === 1) await fetchTitles();
    else if (currentStep === 2) await fetchOutlines();
    else if (currentStep === 3) await fetchImagesFromPrompt(); // <-- Ini yang kamu maksud
  
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      generate();
    }
  };
  

  const prev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  async function fetchKeywords() {
    setLoading(true);
    setError('');
    try {
      const formData = new URLSearchParams();
      formData.append('id', '1');
      formData.append('topic', topic);
      formData.append('count', '10');
      formData.append('language', 'English (USA)');

      const res = await fetch('https://oneaikit.com/dashboard/user/openai/articlewizard/genkeywords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-csrf-token': process.env.NEXT_PUBLIC_CSRF_TOKEN!,
          'x-requested-with': 'XMLHttpRequest',
        },
        credentials: 'include',
        body: formData.toString(),
      });

      const data = await res.json();
      const parsed = JSON.parse(data.result);
      if (!Array.isArray(parsed)) throw new Error('Keyword format invalid');
      setKeywords(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function fetchTitles() {
    setLoading(true);
    setError('');
    try {
      const formData = new URLSearchParams();
      formData.append('id', '1');
      formData.append('topic', topic);
      formData.append('keywords', selectedKeywords.join(','));
      formData.append('count', '3');
      formData.append('length', '30');
      formData.append('language', 'English (USA)');

      const res = await fetch('https://oneaikit.com/dashboard/user/openai/articlewizard/gentitles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-csrf-token': process.env.NEXT_PUBLIC_CSRF_TOKEN!,
          'x-requested-with': 'XMLHttpRequest',
        },
        credentials: 'include',
        body: formData.toString(),
      });

      const data = await res.json();
      const parsedTitles = JSON.parse(data.result);
      if (!Array.isArray(parsedTitles)) throw new Error('Title format invalid');
      setTitles(parsedTitles);
      setTitle(parsedTitles[0]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function fetchOutlines() {
    setLoading(true);
    setError('');
    try {
      const formData = new URLSearchParams();
      formData.append('id', '1');
      formData.append('topic', '');
      formData.append('keywords', selectedKeywords.join(','));
      formData.append('title', title);
      formData.append('count', '3');
      formData.append('subcount', '10');
      formData.append('language', 'English (USA)');

      const res = await fetch('https://oneaikit.com/dashboard/user/openai/articlewizard/genoutlines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-csrf-token': process.env.NEXT_PUBLIC_CSRF_TOKEN!,
          'x-requested-with': 'XMLHttpRequest',
        },
        credentials: 'include',
        body: formData.toString(),
      });

      const data = await res.json();
      const parsed = JSON.parse(data.result);
      if (!Array.isArray(parsed)) throw new Error('Outline format invalid');
      setOutlines(parsed);
      setSelectedOutline(parsed[0]);
      setOutline(parsed[0].join('\n'));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  async function fetchImagesFromPrompt() {
    if (!imageDescription.trim()) {
      setError('Image description is required');
      return;
    }
  
    setLoading(true);
    setError('');
    setImages([]);
    setSelectedImage(null);
  
    const SESSION_COOKIE = process.env.NEXT_PUBLIC_SESSION_COOKIE!;
    document.cookie = `laravel_session=${SESSION_COOKIE}`;
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://oneaikit.com/dashboard/user/openai/generate', true);
  
    xhr.onload = function () {
      try {
        const data = JSON.parse(xhr.responseText);
  
        if (xhr.status !== 200 || data.error) {
          throw new Error(data.error || 'Error generating image');
        }
  
        const imgList = data.images;
        if (!Array.isArray(imgList) || imgList.length === 0) {
          throw new Error('No images were generated');
        }
  
        const formatted = imgList.map((img: any) => ({
          url: img.output_url || img.output,
          title: img.title || imageDescription,
        }));
  
        setImages(formatted);
        setSelectedImage(formatted[0]);
      } catch (err: any) {
        setError(err.message || 'Failed to process image');
      } finally {
        setLoading(false);
      }
    };
  
    xhr.onerror = function () {
      setError('Network error occurred');
      setLoading(false);
    };
  
    xhr.withCredentials = true;
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  
    const tokenMeta = document.querySelector('meta[name="csrf-token"]');
    if (tokenMeta) {
      const csrfToken = tokenMeta.getAttribute('content');
      if (csrfToken) {
        xhr.setRequestHeader('X-CSRF-Token', csrfToken);
      }
    }
  
    const formData = new FormData();
    formData.append('post_type', 'ai_image_generator');
    formData.append('openai_id', '32');
    formData.append('custom_template', '0');
    formData.append('image_generator', 'openai');
    formData.append('image_style', imageStyle);
    formData.append('image_lighting', '');
    formData.append('image_mood', '');
    formData.append('image_number_of_images', `${Math.min(imageCount, 4)}`);
    formData.append('size', '1024x1024');
    formData.append('quality', 'standard');
    formData.append('description', imageDescription.trim());
  
    xhr.send(formData);
  }
  
  async function generate() {
    setLoading(true);
    setError('');
  
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      setError('Missing OpenAI API key');
      setLoading(false);
      return;
    }
  
    try {
      const prompt = `
        Write a complete SEO-friendly blog article in valid HTML format optimized for a WYSIWYG editor (such as TinyMCE).
  
        Requirements:
        - Topic: ${topic}
        - Title: ${title}
        - Keywords: ${selectedKeywords.join(', ')}
  
        Structure:
        1. Use <h1> for the article title (only once at the top).
        2. Use <h2> for each main section heading (e.g., Introduction, Background, etc.).
        3. Use <p> for regular text content.
        4. Use <ul> and <li> for any bullet point lists.
        5. If an image is available, insert it at the top of the article using this exact HTML:
           <img src="${selectedImage?.url}" alt="${title}" style="max-width:100%; height:auto;" />
  
        Instructions:
        - Do not include the title as plain text if it's already in <h1>.
        - Avoid any CSS or JavaScript; HTML only.
        - Do not wrap the output in triple backticks (\`\`\`); return only clean HTML.
        - Ensure the output is clean, well-indented, and ready to be pasted directly into a WYSIWYG editor like TinyMCE.
        - Use semantic and accessible HTML.
  
        Outline:
        ${outline}
      `;
  
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.7,
        }),
      });
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(data.error?.message || 'Failed to generate article');
  
      let result = data.choices?.[0]?.message?.content;
      if (!result) throw new Error('No content returned');
  
      // ✅ Clean ```html and ``` if present
      result = result.replace(/^```html\s*|```$/g, '').trim();
  
      setArticle(result);
      setEditorData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }
  
  
  

  const [imageDescription, setImageDescription] = useState('');
const [imageStyle, setImageStyle] = useState('');
const [imageCount, setImageCount] = useState(1);


  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">AI Article Wizard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-6 gap-4 mb-6">
          {steps.map(({ id, label }) => (
            <div key={id} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${id <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{id + 1}</div>
              <span className="mt-2 text-xs text-center">{label}</span>
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-4 min-h-[200px]">
          {currentStep === 0 && (
            <div>
              <label className="block mb-1 font-medium">Topic</label>
              <Textarea placeholder="Enter the main topic of your article" value={topic} onChange={(e) => setTopic(e.target.value)} rows={4} className="resize-none" />
            </div>
          )}

          {currentStep === 1 && (
            <div>
              <label className="block mb-1 font-medium">Select Keywords</label>
              {loading ? <p className="text-sm text-muted-foreground">Fetching keywords...</p> : (
                <div className="grid grid-cols-2 gap-2">
                  {keywords.map((kw) => (
                    <label key={kw} className="flex items-center gap-2">
                      <input type="checkbox" checked={selectedKeywords.includes(kw)} onChange={() => setSelectedKeywords((prev) => prev.includes(kw) ? prev.filter((k) => k !== kw) : [...prev, kw])} />
                      <span>{kw}</span>
                    </label>
                  ))}
                </div>
              )}
              <div className="flex gap-4 mt-3">
                <Button type="button" variant="ghost" onClick={() => setSelectedKeywords([])}>Unselect All</Button>
                <Button type="button" onClick={() => setSelectedKeywords(keywords)}>Select All</Button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <label className="block mb-1 font-medium">Select Title</label>
              {loading ? <p className="text-sm text-muted-foreground">Generating titles...</p> : (
                <div className="space-y-2">
                  {titles.map((t, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input type="radio" name="title" value={t} checked={title === t} onChange={() => setTitle(t)} />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <label className="block mb-1 font-medium">Select Outline</label>
              {loading ? <p className="text-sm text-muted-foreground">Generating outlines...</p> : (
                <div className="space-y-4">
                  {outlines.map((o, idx) => (
                    <label key={idx} className="block border p-3 rounded-md cursor-pointer hover:bg-gray-50">
                      <input type="radio" name="outline" value={idx} checked={selectedOutline === o} onChange={() => { setSelectedOutline(o); setOutline(o.join('\n')); }} className="mr-2" />
                      <div className="text-sm space-y-1">
                        {o.map((line, i) => (<div key={i}>• {line}</div>))}
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
          {currentStep === 4 && (
            <div>
              <label className="block mb-1 font-medium">Image Description</label>
              <Textarea
                placeholder="Describe the image you want to generate"
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
                className="mb-4 resize-none"
              />
              <label className="block mb-1 font-medium">Style</label>
              <input
                type="text"
                placeholder="e.g., watercolor, 3D render, flat design"
                value={imageStyle}
                onChange={(e) => setImageStyle(e.target.value)}
                className="w-full px-3 py-2 mb-4 border rounded"
              />
              <label className="block mb-1 font-medium">Number of Images (max 4)</label>
              <input
                type="number"
                min={1}
                max={4}
                value={imageCount}
                onChange={(e) => setImageCount(Math.min(4, Number(e.target.value)))}
                className="w-full px-3 py-2 mb-4 border rounded"
              />
              <Button onClick={fetchImagesFromPrompt} disabled={loading || !imageDescription.trim()}>
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating...</> : 'Generate Images'}
              </Button>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {images.map((img, idx) => (
                  <label key={idx} className={`block border p-2 rounded-md cursor-pointer ${selectedImage?.url === img.url ? 'ring-2 ring-blue-500' : ''}`}>
                    <input type="radio" name="selectedImage" value={img.url} checked={selectedImage?.url === img.url} onChange={() => setSelectedImage(img)} className="hidden" />
                    <img src={img.url} alt={img.title} className="w-full rounded-md mb-2" />
                    <p className="text-xs text-center">{img.title}</p>
                  </label>
                ))}
              </div>
            </div>
          )}
          {currentStep === 5 && (
            <div>
              <p className="text-muted-foreground mb-4">Review your inputs and click Generate to create your article using AI.</p>
              <div className="space-y-2">
                <p><strong>Topic:</strong> {topic}</p>
                {selectedKeywords.length > 0 && <p><strong>Keywords:</strong> {selectedKeywords.join(', ')}</p>}
                {title && <p><strong>Title:</strong> {title}</p>}
                {outline && <p><strong>Outline:</strong> {outline}</p>}
                {selectedImage && <img src={selectedImage.url} alt={selectedImage.title} className="w-64 rounded-md" />}
              </div>
            </div>
          )}
        </motion.div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={prev} disabled={currentStep === 0 || loading}>Previous</Button>
          <Button onClick={next} disabled={loading || (!topic && currentStep === 0)}>
            {loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading...</>) : isLast ? 'Generate Article' : 'Next'}
          </Button>
        </div>

        {error && <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>}

      
    {editorData && (
          <div className="mt-6">
            <label className="block mb-1 font-medium">Generated Article</label>
            <div className="border rounded">
              <Editor
                apiKey='zr5bcj319176fcqxspxml8x6bgpkdo7lltd410q52gm2ctj4'
                value={editorData}
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                    'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
                  ],
                  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                  tinycomments_mode: 'embedded',
                  tinycomments_author: 'Author name',
                  mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' },
                  ],
                  ai_request: (_: any, respondWith: any) =>
                    respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                }}
                onEditorChange={(content: string) => setEditorData(content)}

              />
            </div>
          </div>

  
)}


      </CardContent>
    </Card>
  );
}
