'use client';
import ReactMarkdown from 'react-markdown';

export function MarkdownClient({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
