'use client';

import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const YouTubeToArticle: React.FC = () => {
  const [url, setUrl] = useState('');
  const [action, setAction] = useState('blog');
  const [language, setLanguage] = useState('en-US');
  const [maxLength, setMaxLength] = useState(800);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editorData, setEditorData] = useState('');

  const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) {
      setError('Please enter a valid YouTube URL.');
      return;
    }

    setLoading(true);
    setError('');
    setEditorData('');

    const promptMap: Record<string, string> = {
      blog: `Write a complete SEO-friendly blog article in valid HTML format optimized for a WYSIWYG editor (such as TinyMCE) from this YouTube video: ${url}`,
      short: `Summarize the main idea of the YouTube video (${url}) in clean HTML format.`,
      list: `Create a clean HTML bullet point list summarizing the key points of this video: ${url}`,
      tldr: `Give a TLDR version of the video (${url}) in HTML paragraphs.`,
      prons_cons: `List the pros and cons mentioned in this YouTube video (${url}) using <ul> and <li> tags.`,
    };

    const systemPrompt = `You are a professional content writer that analyzes YouTube video links and generates helpful summaries, posts, or pros/cons in clean HTML ready for TinyMCE editor. All output should be HTML only. Do not use backticks.`;

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: promptMap[action] },
          ],
          temperature: 0.7,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error?.message || 'Failed to generate article');

      let content = data.choices?.[0]?.message?.content ?? '';
      content = content.replace(/^```html\s*|```$/g, '').trim();

      setEditorData(content);
    } catch (err: any) {
      console.error('Error:', err);
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-12 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-sm font-medium">YouTube Video URL</label>
          <input
            type="url"
            className="w-full border p-3 rounded mt-1"
            placeholder="https://youtube.com/..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Output Type</label>
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="w-full border p-3 rounded mt-1"
            >
              <option value="blog">Blog Post</option>
              <option value="short">Main Idea</option>
              <option value="list">List</option>
              <option value="tldr">TLDR</option>
              <option value="prons_cons">Pros & Cons</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border p-3 rounded mt-1"
            >
              <option value="en-US">English (US)</option>
              <option value="id-ID">Indonesian</option>
              <option value="es-ES">Spanish</option>
              <option value="fr-FR">French</option>
              <option value="de-DE">German</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Max Length (Characters)</label>
            <input
              type="number"
              className="w-full border p-3 rounded mt-1"
              value={maxLength}
              onChange={(e) => setMaxLength(Number(e.target.value))}
              min={100}
              max={1998}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded text-white ${loading ? 'bg-gray-500' : 'bg-blue-600'}`}
        >
          {loading ? 'Generating...' : 'Generate Article'}
        </button>

        {error && <p className="text-red-500 mt-3">{error}</p>}
      </form>

      {editorData && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Preview & Edit</h2>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={editorData}
            onEditorChange={(newValue:any) => setEditorData(newValue)}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default YouTubeToArticle;
