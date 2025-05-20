import React from 'react';

type KeywordSelectionProps = {
  keywords: string[];
  selectedKeywords: string[];
  setSelectedKeywords: (keywords: string[]) => void;
  loading: boolean;
  keywordCount: number;
  setKeywordCount: (count: number) => void;
  language: string;
  setLanguage: (lang: string) => void;
};


const KeywordSelection: React.FC<KeywordSelectionProps> = ({ keywords, selectedKeywords, setSelectedKeywords, loading }) => (
  <div>
    <label className="block mb-1 font-medium">Select Keywords</label>
    {loading ? (
      <p className="text-sm text-muted-foreground">Fetching keywords...</p>
    ) : (
      <div className="grid grid-cols-2 gap-2">
        {keywords.map((kw) => (
          <label key={kw} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedKeywords.includes(kw)}
              onChange={() => {
                // Update the selectedKeywords directly without using a function-style updater
                if (selectedKeywords.includes(kw)) {
                  setSelectedKeywords(selectedKeywords.filter((k) => k !== kw)); // Remove the keyword
                } else {
                  setSelectedKeywords([...selectedKeywords, kw]); // Add the keyword
                }
              }}
            />
            <span>{kw}</span>
          </label>
        ))}
      </div>
    )}
    <div className="flex gap-4 mt-3">
      <button type="button" onClick={() => setSelectedKeywords([])} className="bg-gray-200 p-2 rounded">
        Unselect All
      </button>
      <button type="button" onClick={() => setSelectedKeywords(keywords)} className="bg-gray-200 p-2 rounded">
        Select All
      </button>
    </div>
  </div>
);

export default KeywordSelection;
