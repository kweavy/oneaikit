import React from 'react';
import { Textarea } from '@/components/ui/textarea';

interface TopicStepProps {
  topic: string;
  setTopic: (topic: string) => void;
  keywordCount: number;
  setKeywordCount: (count: number) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

const TopicStep: React.FC<TopicStepProps> = ({
  topic,
  setTopic,
  keywordCount,
  setKeywordCount,
  language,
  setLanguage,
}) => (
  <div>
    <label className="block mb-1 font-medium">Topic</label>
    <Textarea
      placeholder="Enter the main topic of your article"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      rows={4}
      className="resize-none"
    />

    <div className="mt-4 flex flex-col sm:flex-row gap-4">
      <div>
        <label className="block text-sm font-medium">Keyword Count</label>
        <input
          type="number"
          min={1}
          max={50}
          value={keywordCount}
          onChange={(e) => setKeywordCount(Number(e.target.value))}
          className="border rounded px-2 py-1 w-24"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="English (USA)">English (USA)</option>
          <option value="English (UK)">English (UK)</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Spanish">Spanish</option>
          <option value="German">German</option>
          <option value="French">French</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Chinese (Simplified)">Chinese (Simplified)</option>
          <option value="Arabic">Arabic</option>
          <option value="Hindi">Hindi</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Thai">Thai</option>
        </select>
      </div>
    </div>
  </div>
);

export default TopicStep;
