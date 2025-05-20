import React from 'react';

type ImageGenerationProps = {
  imageDescription: string;
  imageStyle: string;
  imageCount: number;
  setImageDescription: (desc: string) => void;
  setImageStyle: (style: string) => void;
  setImageCount: (count: number) => void;
  fetchImagesFromPrompt: () => void;
  images: { url: string; title: string }[];
  selectedImage: { url: string; title: string } | null;
  setSelectedImage: (img: { url: string; title: string }) => void;
  loading: boolean;
};

const ImageGeneration: React.FC<ImageGenerationProps> = ({
  imageDescription,
  imageStyle,
  imageCount,
  setImageDescription,
  setImageStyle,
  setImageCount,
  fetchImagesFromPrompt,
  images,
  selectedImage,
  setSelectedImage,
  loading,
}) => (
  <div>
    <label className="block mb-1 font-medium">Image Description</label>
    <input
      type="text"
      value={imageDescription}
      onChange={(e) => setImageDescription(e.target.value)}
      className="w-full px-3 py-2 mb-4 border rounded"
      placeholder="Describe the image you want to generate"
    />
    <label className="block mb-1 font-medium">Style</label>
    <input
      type="text"
      value={imageStyle}
      onChange={(e) => setImageStyle(e.target.value)}
      className="w-full px-3 py-2 mb-4 border rounded"
      placeholder="e.g., watercolor, 3D render"
    />
    <label className="block mb-1 font-medium">Number of Images</label>
    <input
      type="number"
      min={1}
      max={4}
      value={imageCount}
      onChange={(e) => setImageCount(Math.min(4, Number(e.target.value)))}
      className="w-full px-3 py-2 mb-4 border rounded"
    />
    <button
      onClick={fetchImagesFromPrompt}
      disabled={loading || !imageDescription.trim()}
      className="bg-blue-500 text-white py-2 px-4 rounded"
    >
      {loading ? 'Generating...' : 'Generate Images'}
    </button>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {images.map((img, idx) => (
        <label key={idx} className={`block border p-2 rounded-md cursor-pointer ${selectedImage?.url === img.url ? 'ring-2 ring-blue-500' : ''}`}>
          <input type="radio" name="selectedImage" value={img.url} checked={selectedImage?.url === img.url} onChange={() => setSelectedImage(img)} className="hidden" />
          <img src={img.url} alt={img.title} className="w-full rounded-md mb-2" />
          <p className="text-xs text-center">{img.title}</p>
        </label>
      ))}
    </div>
  </div>
);

export default ImageGeneration;
