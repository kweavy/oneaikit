import React from 'react';

type OutlineSelectionProps = {
  outlines: string[][];
  selectedOutline: string[];
  setSelectedOutline: (outline: string[]) => void;
  setOutline: (outline: string) => void;
  loading: boolean;
};

const OutlineSelection: React.FC<OutlineSelectionProps> = ({ outlines, selectedOutline, setSelectedOutline, setOutline, loading }) => (
  <div>
    <label className="block mb-1 font-medium">Select Outline</label>
    {loading ? (
      <p className="text-sm text-muted-foreground">Generating outlines...</p>
    ) : (
      <div className="space-y-4">
        {outlines.map((o, idx) => (
          <label key={idx} className="block border p-3 rounded-md cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="outline"
              value={idx}
              checked={JSON.stringify(selectedOutline) === JSON.stringify(o)} // Compare arrays as stringified content
              onChange={() => {
                setSelectedOutline(o);
                setOutline(o.join('\n'));
              }}
              className="mr-2"
            />
            <div className="text-sm space-y-1">
              {o.map((line, i) => (
                <div key={i}>• {line}</div>
              ))}
            </div>
          </label>
        ))}
      </div>
    )}
  </div>
);

export default OutlineSelection;
