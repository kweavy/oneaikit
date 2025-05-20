'use client';

import React, { useState } from 'react';

const AIToGenerateCode: React.FC = () => {
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');

  const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!description || !language) return;

    setIsLoading(true);
    setError('');
    setGeneratedCode('');

    const prompt = `
Generate clean, valid ${language} code based on the following request:

"${description}"

Requirements:
- Use only ${language} syntax.
- Return code only without explanation or markdown formatting.
- Do not wrap in triple backticks.
- Output should be production-ready or best practice-based.
`;

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
            { role: 'system', content: 'You are a professional coder and assistant.' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.5,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error?.message || 'Failed to generate code');

      let result = data.choices?.[0]?.message?.content || '';
      result = result.replace(/```[\s\S]*?\n([\s\S]*?)```/, '$1').trim(); // Clean if wrapped in ```
      setGeneratedCode(result);
    } catch (err: any) {
      console.error('Error generating code:', err);
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lqd-card text-card-foreground w-full transition-all group/card lqd-card-roundness-none lqd-generator-options-card">
      <div className="lqd-card-body relative only:grow lqd-card-size-none">
        <form
          className="lqd-generator-form flex flex-wrap justify-between space-y-5"
          onSubmit={handleSubmit}
        >
          {/* Description Input */}
          <div className="lqd-input-container relative w-full">
            <label
              className="lqd-input-label flex cursor-pointer items-center gap-2 text-2xs font-medium leading-none text-label mb-3"
              htmlFor="description"
            >
              <span className="lqd-input-label-txt">Describe What Kind of Code You Need</span>
            </label>
            <textarea
              id="description"
              required
              maxLength={300}
              rows={8}
              className="lqd-input block peer w-full px-4 py-2 border border-input-border bg-input-background text-input-foreground text-base ring-offset-0 transition-colors focus:border-secondary focus:outline-0 focus:ring focus:ring-secondary dark:focus:ring-foreground/10 sm:text-2xs lqd-input-size-none rounded-lg"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe What Kind of Code You Need"
            />
          </div>

          {/* Language Input */}
          <div className="lqd-input-container relative w-full">
            <label
              className="lqd-input-label flex cursor-pointer items-center gap-2 text-2xs font-medium leading-none text-label mb-3"
              htmlFor="code_language"
            >
              <span className="lqd-input-label-txt">Coding Language (Java, PHP, etc.)</span>
            </label>
            <input
              id="code_language"
              required
              maxLength={300}
              className="lqd-input block peer w-full px-4 py-2 border border-input-border bg-input-background text-input-foreground text-base ring-offset-0 transition-colors focus:border-secondary focus:outline-0 focus:ring focus:ring-secondary dark:focus:ring-foreground/10 sm:text-2xs lqd-input-lg h-11 rounded-xl"
              name="code_language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              type="text"
              placeholder="Coding Language (Java, PHP etc.)"
            />
          </div>

          {/* Submit Button */}
          <button
            className="lqd-btn group inline-flex items-center justify-center gap-1.5 text-xs font-medium rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:bg-foreground/10 disabled:text-foreground/35 disabled:pointer-events-none lqd-btn-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/10 focus-visible:bg-primary/90 focus-visible:shadow-primary/10 lqd-btn-lg px-5 py-3 lqd-btn-hover-none mt-3 w-full"
            type="submit"
            disabled={isLoading}
          >
            <span className={isLoading ? 'inline-flex' : 'hidden'}>Please wait...</span>
            <span className={isLoading ? 'hidden' : 'inline-flex'}>Generate</span>
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-4 text-sm text-red-500">
            {error}
          </div>
        )}

        {/* Output */}
        {generatedCode && (
          <div className="mt-8 bg-gray-900 text-green-300 font-mono text-sm p-4 rounded-lg overflow-auto whitespace-pre-wrap max-h-[500px]">
            {generatedCode}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIToGenerateCode;
