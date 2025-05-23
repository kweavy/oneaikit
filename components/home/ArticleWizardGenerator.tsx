import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import StepNavigation from '../article/StepNavigation';
import TopicStep from '../article/TopicComponent';
import KeywordSelection from '../article/SelectKeywordsComponent';
import TitleSelection from '../article/SelectTitleComponent';
import OutlineSelection from '../article/OutlineComponent';
import ImageGeneration from '../article/GenerateImagesComponent';
import FinalArticleComponent from '../article/FinalArticleComponent';

const steps = [
  { id: 0, label: 'Topic' },
  { id: 1, label: 'Select Keywords' },
  { id: 2, label: 'Select Title' },
  { id: 3, label: 'Outline' },
  { id: 4, label: 'Generate Images' },
  { id: 5, label: 'Final Article' },
];

const ArticleWizardGenerator: React.FC = () => {
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
  const [imageDescription, setImageDescription] = useState('');
  const [imageStyle, setImageStyle] = useState('');
  const [imageCount, setImageCount] = useState(1);
  const [keywordCount, setKeywordCount] = useState(10);
  const [language, setLanguage] = useState('English (USA)'); // State untuk language

  const isLast = currentStep === steps.length - 1;

  const next = async () => {
    if (currentStep === 0) await fetchKeywords();  // Fetch dengan language yang dipilih
    else if (currentStep === 1) await fetchTitles();
    else if (currentStep === 2) await fetchOutlines();
    else if (currentStep === 3) await fetchImagesFromPrompt();

    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      generate();
    }
  };

  const prev = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  // Update fetchKeywords untuk menggunakan language yang dipilih
  // async function fetchKeywords() {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const formData = new URLSearchParams();
  //     formData.append('id', '1');
  //     formData.append('topic', topic);
  //     formData.append('count', keywordCount.toString());
  //     formData.append('language', language); // Menggunakan language yang dipilih

  //     const res = await fetch('https://oneaikit.com/api/articlewizard/genkeywords', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //         'x-csrf-token': process.env.NEXT_PUBLIC_CSRF_TOKEN!,
  //         'x-requested-with': 'XMLHttpRequest',
  //       },
  //       credentials: 'include',
  //       body: formData.toString(),
  //     });

  //     const data = await res.json();
  //     const parsed = JSON.parse(data.result);
  //     if (!Array.isArray(parsed)) throw new Error('Keyword format invalid');
  //     setKeywords(parsed);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'An error occurred');
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function fetchKeywords() {
    setLoading(true);
    setError('');
  
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      setError('Missing OpenAI API key');
      setLoading(false);
      return;
    }
  
    try {
      const prompt = `Generate ${keywordCount} keywords (simple words or 2 words, not phrase, not person name) about '${topic}'. Must result as array JSON data. In '${language}' language. Result format is [keyword1, keyword2, ..., keywordn]. Must not write \`\`\`json`;
  
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
  
      if (!res.ok) throw new Error(data.error?.message || 'Failed to fetch keywords');
  
      let content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error('No content returned');
  
      // ✅ Clean jika ada ```json di awal/akhir
      content = content.replace(/```json\s*|```/g, '').trim();
  
      const parsed = JSON.parse(content);
      if (!Array.isArray(parsed)) throw new Error('Keyword format invalid');
  
      setKeywords(parsed);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  

  // Update fetchTitles untuk menggunakan language yang dipilih
  // async function fetchTitles() {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const formData = new URLSearchParams();
  //     formData.append('id', '1');
  //     formData.append('topic', topic);
  //     formData.append('keywords', selectedKeywords.join(','));
  //     formData.append('count', '3');
  //     formData.append('length', '30');
  //     formData.append('language', language); // Menggunakan language yang dipilih

  //     const res = await fetch('https://oneaikit.com/dashboard/user/openai/articlewizard/gentitles', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //         'x-csrf-token': process.env.NEXT_PUBLIC_CSRF_TOKEN!,
  //         'x-requested-with': 'XMLHttpRequest',
  //       },
  //       credentials: 'include',
  //       body: formData.toString(),
  //     });

  //     const data = await res.json();
  //     const parsedTitles = JSON.parse(data.result);
  //     if (!Array.isArray(parsedTitles)) throw new Error('Title format invalid');
  //     setTitles(parsedTitles);
  //     setTitle(parsedTitles[0]);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'An error occurred');
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function fetchTitles() {
    setLoading(true);
    setError('');
  
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      setError('Missing OpenAI API key');
      setLoading(false);
      return;
    }
  
    try {
      const maxLength = 30;
      const count = 3;
  
      const prompt =
        topic && topic.trim() !== ''
          ? `Generate ${count} titles (Maximum title length is ${maxLength}. Must not be 'title1', 'title2', 'title3', 'title4', 'title5') about Topic: '${topic}'. In '${language}' language. Result must be array json data. Format: [title1, title2, ..., titlen]. Must not write \`\`\`json`
          : `Generate ${count} titles (Maximum title length is ${maxLength}. Must not be 'title1', 'title2', 'title3', 'title4', 'title5') about Keywords: '${selectedKeywords.join(', ')}'. In '${language}' language. Result must be array json data. Format: [title1, title2, ..., titlen]. Must not write \`\`\`json`;
  
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
  
      if (!res.ok) throw new Error(data.error?.message || 'Failed to fetch titles');
  
      let content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error('No content returned');
  
      content = content.replace(/```json\s*|```/g, '').trim();
      const parsedTitles = JSON.parse(content);
      if (!Array.isArray(parsedTitles)) throw new Error('Title format invalid');
  
      setTitles(parsedTitles);
      setTitle(parsedTitles[0]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  

  // Update fetchOutlines untuk menggunakan language yang dipilih
  // async function fetchOutlines() {
  //   setLoading(true);
  //   setError('');
  //   try {
  //     const formData = new URLSearchParams();
  //     formData.append('id', '1');
  //     formData.append('topic', '');
  //     formData.append('keywords', selectedKeywords.join(','));
  //     formData.append('title', title);
  //     formData.append('count', '3');
  //     formData.append('subcount', '10');
  //     formData.append('language', language); // Menggunakan language yang dipilih

  //     const res = await fetch('https://oneaikit.com/dashboard/user/openai/articlewizard/genoutlines', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //         'x-csrf-token': process.env.NEXT_PUBLIC_CSRF_TOKEN!,
  //         'x-requested-with': 'XMLHttpRequest',
  //       },
  //       credentials: 'include',
  //       body: formData.toString(),
  //     });

  //     const data = await res.json();
  //     const parsed = JSON.parse(data.result);
  //     if (!Array.isArray(parsed)) throw new Error('Outline format invalid');
  //     setOutlines(parsed);
  //     setSelectedOutline(parsed[0]);
  //     setOutline(parsed[0].join('\n'));
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : 'An error occurred');
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  async function fetchOutlines() {
    setLoading(true);
    setError('');
  
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      setError('Missing OpenAI API key');
      setLoading(false);
      return;
    }
  
    try {
      const count = 3;
      const subcount = 10;
  
      const prompt =
        topic && topic.trim() !== ''
          ? `The subject of article is ${topic}. Generate different outlines (Each outline must have only ${subcount} subtitles (Without number for order, subtitles are not keywords)) ${count} times. The depth is 1. In '${language}' language. Must not write any description. Result must be JSON data. Every subtitle is a sentence or phrase string. Format: [[subtitle1, subtitle2, ..., subtitle${subcount}], [...], [...]]. Must not write \`\`\`json`
          : `The keywords of article are ${selectedKeywords.join(', ')}. Generate different outlines (Each outline must have only ${subcount} subtitles (Without number for order, subtitles are not keywords)) ${count} times. The depth is 1. In '${language}' language. Must not write any description. Result must be JSON data. Every subtitle is a sentence or phrase string. Format: [[subtitle1, subtitle2, ..., subtitle${subcount}], [...], [...]]. Must not write \`\`\`json`;
  
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
  
      if (!res.ok) throw new Error(data.error?.message || 'Failed to fetch outlines');
  
      let content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error('No content returned');
  
      content = content.replace(/```json\s*|```/g, '').trim();
      const parsed = JSON.parse(content);
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
  

  // Update fetchImagesFromPrompt untuk menggunakan language yang dipilih
  // async function fetchImagesFromPrompt() {
  //   if (!imageDescription.trim()) {
  //     setError('Image description is required');
  //     return;
  //   }

  //   setLoading(true);
  //   setError('');
  //   setImages([]);
  //   setSelectedImage(null);

  //   const SESSION_COOKIE = process.env.NEXT_PUBLIC_SESSION_COOKIE!;
  //   document.cookie = `laravel_session=${SESSION_COOKIE}`;

  //   const xhr = new XMLHttpRequest();
  //   xhr.open('POST', 'https://oneaikit.com/dashboard/user/openai/generate', true);

  //   xhr.onload = function () {
  //     try {
  //       const data = JSON.parse(xhr.responseText);

  //       if (xhr.status !== 200 || data.error) {
  //         throw new Error(data.error || 'Error generating image');
  //       }

  //       const imgList = data.images;
  //       if (!Array.isArray(imgList) || imgList.length === 0) {
  //         throw new Error('No images were generated');
  //       }

  //       const formatted = imgList.map((img: any) => ({
  //         url: img.output_url || img.output,
  //         title: img.title || imageDescription,
  //       }));

  //       setImages(formatted);
  //       setSelectedImage(formatted[0]);
  //     } catch (err: any) {
  //       setError(err.message || 'Failed to process image');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   xhr.onerror = function () {
  //     setError('Network error occurred');
  //     setLoading(false);
  //   };

  //   xhr.withCredentials = true;
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  //   const tokenMeta = document.querySelector('meta[name="csrf-token"]');
  //   if (tokenMeta) {
  //     const csrfToken = tokenMeta.getAttribute('content');
  //     if (csrfToken) {
  //       xhr.setRequestHeader('X-CSRF-Token', csrfToken);
  //     }
  //   }

  //   const formData = new FormData();
  //   formData.append('post_type', 'ai_image_generator');
  //   formData.append('openai_id', '32');
  //   formData.append('custom_template', '0');
  //   formData.append('image_generator', 'openai');
  //   formData.append('image_style', imageStyle);
  //   formData.append('image_lighting', '');
  //   formData.append('image_mood', '');
  //   formData.append('image_number_of_images', `${Math.min(imageCount, 4)}`);
  //   formData.append('size', '1024x1024');
  //   formData.append('quality', 'standard');
  //   formData.append('description', imageDescription);

  //   xhr.send(formData);
  // }

  async function fetchImagesFromPrompt() {
    if (!imageDescription.trim()) {
      setError('Image description is required');
      return;
    }
  
    setLoading(true);
    setError('');
    setImages([]);
    setSelectedImage(null);
  
    const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      setError('Missing OpenAI API key');
      setLoading(false);
      return;
    }
  
    try {
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: imageDescription,
          n: Math.min(imageCount, 4),
          size: '1024x1024',
          quality: 'standard',
        }),
      });
  
      const data = await response.json();
      if (!response.ok || !data.data || !Array.isArray(data.data)) {
        throw new Error(data.error?.message || 'Failed to generate image');
      }
  
      const generatedImages = data.data.map((img: { url: string; revised_prompt?: string }, index: number) => {
        const slug = Math.random().toString(36).substring(2, 15);
        return {
          team_id: null,
          title: imageDescription,
          slug: slug,
          user_id: 1,
          openai_id: 32,
          input: imageDescription,
          response: 'DE',
          output: img.url,
          hash: slug,
          credits: 1,
          words: 0,
          storage: 'public',
          payload: {
            post_type: 'ai_image_generator',
            openai_id: '32',
            custom_template: '0',
            image_generator: 'openai',
            image_style: imageStyle,
            image_lighting: '',
            image_mood: '',
            image_number_of_images: `${imageCount}`,
            size: '1024x1024',
            quality: 'standard',
            description: imageDescription,
            model: 'dall-e-3',
          },
          updated_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          id: index + 1,
          img_id: `img-DE-${index + 1}`,
          format_date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
          generator_type: 'image',
          output_url: img.url,
          generator: {
            id: 32,
            user_id: null,
            title: 'AI to Generate Images',
            description: 'Create stunning and unique images instantly with AI-powered generation tools.',
            slug: 'ai_image_generator',
            active: '1',
            questions: `[{"name":"description","type":"textarea","question":"Describe the Image"},{"name":"size","type":"select","question":"Image Resolution"}]`,
            image: '',
            premium: '0',
            type: 'image',
            created_at: '2023-03-20T06:22:02.000000Z',
            updated_at: '2023-03-20T06:22:02.000000Z',
            prompt: null,
            custom_template: '0',
            tone_of_voice: '0',
            color: '#D1C5DE',
            filters: 'development',
            package: null,
          },
        };
      });
      
  
      const result = {
        status: 'success',
        images: generatedImages,
        nameOfImage: generatedImages[0].output_url.split('/').pop(),
        image_storage: 'public',
      };
  
      // 👇 Simulasi response sama seperti sebelumnya
      const formatted = generatedImages.map((img: { output_url: string }) => ({
        url: img.output_url,
        title: imageDescription,
      }));
      
  
      setImages(formatted);
      setSelectedImage(formatted[0]);
    } catch (err: any) {
      setError(err.message || 'Failed to generate image');
    } finally {
      setLoading(false);
    }
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
      console.log("Generated article content:", result);

      setArticle(result);
      setEditorData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">AI Article Wizard</CardTitle>
      </CardHeader>
      <CardContent>
        <StepNavigation steps={steps} currentStep={currentStep} />

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-4 min-h-[200px]">
          {currentStep === 0 && (
            <TopicStep
              topic={topic}
              setTopic={setTopic}
              keywordCount={keywordCount}
              setKeywordCount={setKeywordCount}
              language={language}
              setLanguage={setLanguage} // Set language from TopicStep
            />
          )}
          {currentStep === 1 && (
            <KeywordSelection
              keywords={keywords}
              selectedKeywords={selectedKeywords}
              setSelectedKeywords={setSelectedKeywords}
              loading={loading}
              keywordCount={keywordCount}
              setKeywordCount={setKeywordCount}
              language={language} // Ensure language is passed to the next steps
              setLanguage={setLanguage}
            />
          )}
          {currentStep === 2 && <TitleSelection titles={titles} title={title} setTitle={setTitle} loading={loading} />}
          {currentStep === 3 && <OutlineSelection outlines={outlines} selectedOutline={selectedOutline} setSelectedOutline={setSelectedOutline} setOutline={setOutline} loading={loading} />}
          {currentStep === 4 && (
            <ImageGeneration
              imageDescription={imageDescription}
              setImageDescription={setImageDescription}
              imageStyle={imageStyle}
              setImageStyle={setImageStyle}
              imageCount={imageCount}
              setImageCount={setImageCount}
              fetchImagesFromPrompt={fetchImagesFromPrompt}
              loading={loading}
              images={images}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
          {currentStep === 5 && (
            <FinalArticleComponent
              topic={topic}
              selectedKeywords={selectedKeywords}
              title={title}
              outline={outline}
              selectedImage={selectedImage}
              editorData={editorData}
              setEditorData={setEditorData}
            />
          )}
        </motion.div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={prev} disabled={currentStep === 0 || loading}>Previous</Button>
          <Button onClick={next} disabled={loading || (!topic && currentStep === 0)}>
            {loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading...</>) : isLast ? 'Generate Article' : 'Next'}
          </Button>
        </div>

        {error && <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>}
      </CardContent>
    </Card>
  );
};

export default ArticleWizardGenerator;
