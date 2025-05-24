import React from 'react';
import { Check, Star, Zap, Sparkles } from 'lucide-react';
import PricingPage from '@/components/home/FeaturesPlan';
import Image from 'next/image';
import FaqPricing from '@/components/FaqPricing';

const PricingTable = () => {
  const plans = [
    {
      name: 'Free',
      icon: <Sparkles className="w-6 h-6 text-gray-400" />,
      price: 0,
      period: '',
      features: [
        '40 accesses to basic models daily',
        'Limited trial for image/video generation',
        'Limited trial for image/video generation',
        'Basic model-driven smart writing, translation, and summary',
        'Limited trial for ChatPDF',
        'Application Integration',
        'Cross-platform AI assistant'
      ],
      basicModels: ['GPT-4o mini', 'Claude 3.5 Haiku', 'DeepSeek V3 & R1'],
      isPopular: false,
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      buttonStyle: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    },
    {
      name: 'Pro',
      icon: <Star className="w-6 h-6 text-blue-500" />,
      price: 19,
      period: '/month',
      originalPrice: null,
      yearlyPrice: '$9/year',
      savings: 'Save 17% with annual billing',
      features: [
        '5000 accesses to basic models monthly',
        '200 accesses to advanced models monthly',
        'Image and video generation',
        'Advanced model-driven smart writing, translation, summary, and ChatPDF',
        '1500 Advanced Credits',
        'Application Integration',
        'Cross-platform AI assistant'
      ],
      basicModels: ['GPT-4o mini', 'Claude 3.5 Haiku', 'DeepSeek V3 & R1'],
      advancedModels: ['o3 & o4-mini', 'Claude 3.7 Sonnet', 'Gemini 2.5 Pro', 'Llama 3.1 405B', 'Grok 3'],
      imageModels: ['SDXL & SD3', 'Dall-E 3', 'Flux Pro & Dev', 'Pixverse', 'Kling', 'Hailuo', 'Pika'],
      isPopular: false,
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    {
      name: 'Unlimited',
      icon: <Zap className="w-6 h-6 text-white" />,
      price: 39,
      period: '/month',
      originalPrice: '$39/year',
      yearlyPrice: '$299/year',
      savings: 'Save 33% with annual billing',
      badge: 'Flash Sale 33%',
      features: [
        'Unlimited access to basic models',
        'Unlimited access to advanced models',
        'Image and video generation',
        'Advanced model-driven smart writing, translation, summary, and ChatPDF',
        '4500 Advanced Credits',
        'Monica Code Membership Benefits',
        'Application Integration',
        'Cross-platform AI assistant'
      ],
      basicModels: ['GPT-4o mini', 'Claude 3.5 Haiku', 'DeepSeek V3 & R1'],
      advancedModels: ['o3 & o4-mini', 'Claude 3.7 Sonnet', 'Gemini 2.5 Pro', 'Llama 3.1 405B', 'Grok 3'],
      imageModels: ['SDXL & SD3', 'Dall-E 3', 'Flux Pro & Dev', 'Pixverse', 'Kling', 'Hailuo', 'Pika'],
      isPopular: true,
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
      buttonStyle: 'bg-white text-gray-900 hover:bg-gray-100'
    }
  ];


  const appIcons = [
  { src: 'https://assets.monica.im/home-web/_next/static/media/gmail.26096287.png', alt: 'Gmail' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/outlook.f3e1931a.png', alt: 'Outlook' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/facebook.389721a8.png', alt: 'Facebook' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/twitter.d89d613b.png', alt: 'X' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/linkedIn.735b459a.png', alt: 'LinkedIn' },
];

const platformIcons = [
  { src: 'https://assets.monica.im/home-web/_next/static/media/chrome_round.3786ffbc.png', alt: 'Chrome' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/windows_round.39fa14c5.png', alt: 'Windows' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/apple_round.81c698c7.png', alt: 'Apple' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/android_round.234dfb3d.png', alt: 'Android' },
  { src: 'https://assets.monica.im/home-web/_next/static/media/vsc_round.09290a73.png', alt: 'VS Code' },
];
// 🔁 Pindahkan ke luar
const modelImageMap: Record<string, string> = {
  'GPT-4o mini': 'https://assets.monica.im/home-web/_next/static/media/gpt3_round.a8fae3ef.png',
  'Claude 3.5 Haiku': 'https://assets.monica.im/home-web/_next/static/media/claude_haiku_round.59e8cb71.png',
  'DeepSeek V3 & R1': 'https://assets.monica.im/home-web/_next/static/media/deepseek.fcf3af51.png',
  'o3 & o4-mini': 'https://assets.monica.im/home-web/_next/static/media/gpt_round.ccad236d.png',
  'Claude 3.7 Sonnet': 'https://assets.monica.im/home-web/_next/static/media/claude_round.fb5a674c.png',
  'Gemini 2.5 Pro': 'https://assets.monica.im/home-web/_next/static/media/gemini_round.8ebaca30.png',
  'Llama 3.1 405B': 'https://assets.monica.im/home-web/_next/static/media/llama3_round.51fc3b14.png',
  'Grok 3': 'https://assets.monica.im/home-web/_next/static/media/grok_round.6d3bdef0.png',
  'SDXL & SD3': 'https://assets.monica.im/home-web/_next/static/media/sd3.517e25bd.png',
  'Dall-E 3': 'https://assets.monica.im/home-web/_next/static/media/dalle3.4832cde8.png',
  'Flux Pro & Dev': 'https://assets.monica.im/home-web/_next/static/media/flux.32e02a20.png',
  'Pixverse': 'https://assets.monica.im/home-web/_next/static/media/pixverse.776e48e5.png',
  'Kling': 'https://assets.monica.im/home-web/_next/static/media/kling.25ff7c6b.png',
  'Hailuo': 'https://assets.monica.im/home-web/_next/static/media/hailuo.d93a86b7.png',
  'Pika': 'https://assets.monica.im/home-web/_next/static/media/pika.849b62a8.png',
};

// ✅ Beri tipe parameter
const getModelIcon = (modelName: string) => {
  return modelImageMap[modelName] || '🤖';
};


const ModelBadge = ({ model, isDark = false }: { model: string; isDark?: boolean }) => (
  <span className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium mr-2 mb-2 ${
    isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'
  }`}>
    {modelImageMap[model] && (
      <img src={modelImageMap[model]} alt={model} className="w-5 h-5 rounded-full" />
    )}
    {model}
  </span>
);


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
<h1 className="text-4xl font-bold text-gray-900 mb-4">
  Access All AI Tools & Models in One Website – Text, Image & Video Features Included
</h1>
<p className="text-xl text-gray-600 mb-8">
  From ChatGPT, Kling, Gemini, DALL·E, Midjourney, to Synthesia and more – unlock 50+ AI Text Features, 10+ Image Models, and 10+ Video Generators with a single subscription. No separate provider costs. Just one price, full access.
</p>


        <div className="flex flex-col items-center mb-8 text-sm text-gray-600">
            <span className="mb-2 font-medium">Supports:</span>
            <div className="flex flex-wrap justify-center gap-4">
                <span className="flex items-center gap-2">
                <Image
                    src="/icon/chatgpt_gpt_4.png"
                    alt="ChatGPT o3 & o4-mini"
                    width={24}
                    height={24}
                    className="rounded"
                />
                <span>o3 & o4-mini</span>
                </span>
                <span className="flex items-center gap-2">
                <Image
                    src="/icon/kling.png"
                    alt="Kling AI"
                    width={22}
                    height={22}
                    className="rounded"
                />
                <span>Kling AI</span>
                </span>
                <span className="flex items-center gap-2">
                <Image
                    src="/icon/ideogram-ai-logo.png"
                    alt="Ideogram V2"
                    width={24}
                    height={24}
                    className="rounded"
                />
                <span>Ideogram V2</span>
                </span>
            </div>
            </div>

        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl shadow-xl overflow-hidden ${plan.bgColor} ${
                plan.isPopular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-6">
                  {plan.icon}
                  <h3 className={`text-2xl font-bold ${plan.textColor}`}>
                    {plan.name}
                  </h3>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.textColor}`}>
                      ${plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-lg ${plan.isPopular ? 'text-gray-300' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.yearlyPrice && (
                    <div className="mt-2">
                      <span className={`text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plan.yearlyPrice}
                      </span>
                      {plan.originalPrice && (
                        <span className={`text-sm line-through ml-2 ${plan.isPopular ? 'text-gray-400' : 'text-gray-400'}`}>
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                  )}
                  {plan.savings && (
                    <div className={`text-sm mt-1 ${plan.isPopular ? 'text-gray-300' : 'text-green-600'}`}>
                      {plan.savings}
                    </div>
                  )}
                </div>

              {/* CTA Button */}
<a
  href="https://app.oneaikit.com/login"
  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonStyle} mb-8 text-center block`}
>
  Sign in to subscribe
</a>


                {/* Features */}
                <div className="space-y-6">
                  {/* Basic Models */}
                  <div>
                    <h4 className={`font-semibold mb-3 ${plan.textColor}`}>
                      {plan.name === 'Unlimited' ? 'Unlimited access to basic models' : 
                       plan.name === 'Pro' ? '5000 accesses to basic models monthly' :
                       '40 accesses to basic models daily'}
                    </h4>
                    <div className="flex flex-wrap">
                      {plan.basicModels.map((model) => (
                        <ModelBadge key={model} model={model} isDark={plan.isPopular} />
                      ))}
                    </div>
                  </div>

                  {/* Advanced Models */}
                  {plan.advancedModels && (
                    <div>
                      <h4 className={`font-semibold mb-3 ${plan.textColor}`}>
                        {plan.name === 'Unlimited' ? 'Unlimited access to advanced models' : '200 accesses to advanced models monthly'}
                      </h4>
                      <div className="flex flex-wrap">
                        {plan.advancedModels.map((model) => (
                          <ModelBadge key={model} model={model} isDark={plan.isPopular} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Image Generation */}
                  {plan.imageModels && (
                    <div>
                      <h4 className={`font-semibold mb-3 ${plan.textColor}`}>
                        Image and video generation
                      </h4>
                      <div className="flex flex-wrap">
                        {plan.imageModels.map((model) => (
                          <ModelBadge key={model} model={model} isDark={plan.isPopular} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Other Features */}
                  <div className="space-y-4">
                    {plan.features.filter(feature => 
                      !feature.includes('basic models') && 
                      !feature.includes('advanced models') && 
                      !feature.includes('Image and video')
                    ).map((feature, idx) => (
                      <div key={idx}>
                        <div className="flex items-start gap-3 mb-2">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.isPopular ? 'text-green-400' : 'text-green-500'
                          }`} />
                          <span className={`text-sm font-medium ${plan.isPopular ? 'text-gray-200' : 'text-gray-700'}`}>
                            {feature}
                          </span>
                        </div>
                        
                        {/* Application Integration Icons */}
                       {feature.includes('Application Integration') && (
  <div className="flex gap-2 ml-8 mt-2">
    {[
      { src: 'https://assets.monica.im/home-web/_next/static/media/gmail.26096287.png', alt: 'Gmail' },
      { src: 'https://assets.monica.im/home-web/_next/static/media/outlook.f3e1931a.png', alt: 'Outlook' },
      { src: 'https://assets.monica.im/home-web/_next/static/media/facebook.389721a8.png', alt: 'Facebook' },
      { src: 'https://assets.monica.im/home-web/_next/static/media/twitter.d89d613b.png', alt: 'X' },
      { src: 'https://assets.monica.im/home-web/_next/static/media/linkedIn.735b459a.png', alt: 'LinkedIn' },
    ].map(({ src, alt }) => (
      <img key={alt} src={src} alt={alt} className="w-6 h-6 rounded" />
    ))}
  </div>
)}

                        
                       {feature.includes('Cross-platform') && (
                            <div className="flex gap-2 ml-8 mt-2">
                                {[
                                { src: 'https://assets.monica.im/home-web/_next/static/media/chrome_round.3786ffbc.png', alt: 'Chrome Extension' },
                                { src: 'https://assets.monica.im/home-web/_next/static/media/windows_round.39fa14c5.png', alt: 'Windows' },
                                { src: 'https://assets.monica.im/home-web/_next/static/media/apple_round.81c698c7.png', alt: 'iOS & macOS' },
                                { src: 'https://assets.monica.im/home-web/_next/static/media/android_round.234dfb3d.png', alt: 'Android' },
                                { src: 'https://assets.monica.im/home-web/_next/static/media/vsc_round.09290a73.png', alt: 'VS Code Extension' },
                                ].map(({ src, alt }) => (
                                <img key={alt} src={src} alt={alt} className="w-6 h-6 rounded" />
                                ))}
                            </div>
                            )}

                        
                        {/* Monica Code Link */}
                        {feature.includes('Monica Code') && (
                          <div className="ml-8 mt-2">
                            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium underline">
                              Monica Code
                            </a>
                            <span className={`ml-1 text-sm ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                              Membership Benefits
                            </span>
                          </div>
                        )}
                        
                        {/* Advanced Credits with info icon */}
                        {feature.includes('Advanced Credits') && (
                          <div className="flex items-center gap-2 ml-8 mt-2">
                            <span className={`text-sm font-semibold ${plan.isPopular ? 'text-gray-200' : 'text-gray-700'}`}>
                              {feature}
                            </span>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                              plan.isPopular ? 'border-gray-400 text-gray-400' : 'border-gray-500 text-gray-500'
                            }`}>
                              <span className="text-xs">i</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            All plans include cross-platform access and application integrations for Gmail, Outlook, Facebook, Twitter, and LinkedIn.
          </p>
        </div>
      </div>

    

   


    </div>
  );
};

export default PricingTable;