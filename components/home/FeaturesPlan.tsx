import React from 'react';
import { Check, Minus, Info, Zap, Star } from 'lucide-react';

const FeaturesPlan = () => {
  const features = [
       
    {
  category: "All Features",
  icon: <Star className="w-6 h-6 text-blue-500" />,
  items: [
    {
      name: "AI Text Features",
      Enterprise: "Access 54 Features",
      pro: "Access 57 Features",
      free: "Access 51 Features"
    },
    {
      name: "Team allow seats",
      Enterprise: "Yes",
      pro: "Yes",
      free: false
    },
    {
      name: "7 Days of free trial",
      Enterprise: false,
      pro: "Yes",
      free: false
    },
    {
      name: "Upload documents",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "All access AI Editors",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Writer",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Video",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Plagiarism",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Detector",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Image",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "Chat Settings",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Article Wizard",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Photo Studio",
      Enterprise: "Yes",
      pro: "Yes",
      free: false
    },
    {
      name: "AI File Chat",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Vision",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "SEO Tool",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI ReWriter",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Chat Image",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Chat",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Chat Pro",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Code",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI YouTube",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI RSS",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Speech to Text",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Voiceover",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Voice Isolator",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "Brand Voice",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Image Editor",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Persona",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Music",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Video Pro",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "AI Social Media",
      Enterprise: "Yes",
      pro: "Yes",
      free: false
    },
    {
      name: "AI Product Photography",
      Enterprise: "Yes",
      pro: "Yes",
      free: false
    },
    {
      name: "Integration to WordPress",
      Enterprise: "Yes",
      pro: "Yes",
      free: false
    },
    {
      name: "AI Bots",
      Enterprise: "Yes",
      pro: false,
      free: false
    },
    {
      name: "Human Agent",
      Enterprise: "Yes",
      pro: false,
      free: false
    },
    {
      name: "Support",
      Enterprise: "Yes",
      pro: "Yes",
      free: "Yes"
    },
    {
      name: "5 Team Seat",
      Enterprise: "Yes",
      pro: false,
      free: false
    }
  ]
},

   {
  category: "AI Text Model",
  icon: "icon/allinoneaitools_gpt_round.png",
  items: [
    { name: "OpenAI", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Deepseek", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Anthropic", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Gemini", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Azure OpenAI", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Serper", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Perplexity", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "X AI", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "OpenRouter", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Plagiarism Check", Enterprise: "Yes", pro: "Yes", free: "Yes" }
  ]
},
{
  category: "AI Image Model",
      upgrade: false,

   icon: "icon/allinoneaitools_dalle3.4832cde8.png",
  items: [
    { name: "DALL·E 3", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Midjourney (via PiAPI)", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Stable Diffusion", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "GPT-Image-1", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Unsplash", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Pexels", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Pixabay", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Clipdrop", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Novita", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Freepik", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Pebblely", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Flux Pro (Fal AI)", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Ideogram V2", Enterprise: "Yes", pro: "Yes", free: false }
  ]
},
{
  category: "AI Video Model",
      upgrade: false,

  icon: "icon/allinoneaitools_flux.32e02a20.png",
  items: [
    { name: "Image to Video", Enterprise: "Yes", pro: "Yes", free: "Yes" },
    { name: "Text to Video - Synthesia", Enterprise: "Yes", pro: "Yes", free: false},
    { name: "Text to Video - Heygen", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Text to Video - Veo2", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Text to Video - Kling", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Image to Video - KlingImage", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Text to Video - Luma Dream Machine", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Text to Video - Minimax", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Video Upscaler", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "CogVideoX 5B", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "AnimateDiff v2v", Enterprise: "Yes", pro: "Yes", free: false },
    { name: "Turbo AnimateDiff", Enterprise: "Yes", pro: "Yes", free: false }
  ]
},

  ];
type FeatureValue = string | boolean;

const FeatureIcon = ({
  value,
  isRecommended = false,
}: {
  value: FeatureValue;
  isRecommended?: boolean;
}) => {
  if (value === true) {
    return <Check className={`w-5 h-5 ${isRecommended ? 'text-blue-600' : 'text-gray-600'}`} />;
  }
  if (value === false || value === "Limited Trial") {
    return <Minus className="w-5 h-5 text-gray-400" />;
  }
  return <Check className={`w-5 h-5 ${isRecommended ? 'text-blue-600' : 'text-gray-600'}`} />;
};


  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Feature Introduction
          </h1>
          
          {/* Pricing Header */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-medium"></span>
              
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200 relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-lg">Enterprise</span>
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Flash Sale 33%
                </div>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">US$</span>
                <span className="text-gray-600">/month</span>
              </div>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                Sign in to subscribe
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="p-4">
              <div className="mb-2">
                <span className="font-semibold text-lg">Pro</span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">US$19</span>
                <span className="text-gray-600">/month</span>
              </div>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                Sign in to subscribe
              </button>
            </div>
            
            {/* Free Plan */}
            <div className="p-4">
              <div className="mb-2">
                <span className="font-semibold text-lg">Free</span>
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold">US$0.0</span>
              </div>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors">
                Sign in to subscribe
              </button>
            </div>
          </div>

          {/* Features Table */}
          <div className="space-y-6">
            {features.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border-t border-gray-200 pt-6">
                {/* Section Header */}

                <div className="grid grid-cols-4 gap-4 mb-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                            {typeof section.icon === 'string' && /\.(jpg|jpeg|png|svg|webp)$/i.test(section.icon) ? (
                                <img
                                src={section.icon}
                                alt={section.category}
                                className="w-6 h-6 rounded"
                                />
                            ) : (
                                <span className="text-2xl">{section.icon}</span>
                            )}
                            <div>
                                <span className="font-semibold text-gray-900">
                                {section.category}
                                </span>
                                {section.upgrade && (
                                <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                                    Feature Upgrades
                                </span>
                                )}
                            </div>
                            </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>

                {/* Feature Rows */}
                {section.items.map((feature, featureIndex) => (
                  <div key={featureIndex} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-2 px-4">
                      <span className="text-gray-700">{feature.name}</span>
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>
                    
                    {/* Enterprise */}
                    <div className="flex items-center gap-2 px-4 bg-blue-50 rounded">
                      <FeatureIcon value={feature.Enterprise} isRecommended={true} />
                      <span className="text-sm text-gray-700">
                        {typeof feature.Enterprise === 'string' ? feature.Enterprise : ''}
                      </span>
                    </div>
                    
                    {/* Pro */}
                    <div className="flex items-center gap-2 px-4">
                      <FeatureIcon value={feature.pro} />
                      <span className="text-sm text-gray-700">
                        {typeof feature.pro === 'string' ? feature.pro : ''}
                      </span>
                    </div>
                    
                    {/* Free */}
                    <div className="flex items-center gap-2 px-4">
                      <FeatureIcon value={feature.free} />
                      <span className="text-sm text-gray-700">
                        {typeof feature.free === 'string' ? feature.free : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPlan;