import React from 'react';

type FinalReviewProps = {
  topic: string;
  selectedKeywords: string[];
  title: string;
  outline: string;
  selectedImage: { url: string; title: string } | null;
};

const FinalReview: React.FC<FinalReviewProps> = ({ topic, selectedKeywords, title, outline, selectedImage }) => (
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
);

export default FinalReview;
