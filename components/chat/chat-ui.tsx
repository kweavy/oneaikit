// components/chat/chat-ui.tsx
'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, MessageSquare } from 'lucide-react';

interface ChatUIProps {
  title: string;
  description?: string;
  starterPrompt: string;
  memoji: string;
}

const isVideo = (url: string) => {
  return /\.(mp4|mov)$/i.test(url);
};

export function ChatUI({ title, description, starterPrompt, memoji }: ChatUIProps) {
  const [messages, setMessages] = useState([{ role: 'system', content: starterPrompt }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: newMessages,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || 'No response';
      setMessages([...newMessages, { role: 'assistant', content: reply }]);
    } catch (e) {
      alert('Failed to fetch response.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl space-y-4 text-center">
      <div className="flex flex-col items-center gap-2">
        <div className="p-[4px] rounded-full uai-ring-dialog">
          <div className="bg-white rounded-full p-[2px]">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
            
                <img
                  src={memoji}
                  className="w-full h-full object-cover"
                  alt={title}
                />
            
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold">Chat with {title}</h2>
        {description && <p className="text-sm text-muted-foreground max-w-md">{description}</p>}
      </div>

      <div className="h-[400px] overflow-y-auto border rounded-md p-4 space-y-2 bg-muted">
        {messages
          .filter((msg) => msg.role !== 'system')
          .map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`rounded-lg px-4 py-2 max-w-[70%] text-left whitespace-pre-line ${
                  msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-white'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-lg p-2">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Textarea
          placeholder={`Ask ${title} anything...`}
          className="flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <Button onClick={handleSend} disabled={!input.trim() || loading}>
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <MessageSquare className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}