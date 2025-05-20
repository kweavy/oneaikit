import React from 'react';

type TitleSelectionProps = {
  titles: string[];
  title: string;
  setTitle: (title: string) => void;
  loading: boolean;
};

const TitleSelection: React.FC<TitleSelectionProps> = ({ titles, title, setTitle, loading }) => (
  <div>
    <label className="block mb-1 font-medium">Select Title</label>
    {loading ? (
      <p className="text-sm text-muted-foreground">Generating titles...</p>
    ) : (
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
);

export default TitleSelection;
