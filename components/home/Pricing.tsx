'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// const plans = [
//   {
//     name: 'Starter',
//     price: '10',
//     description: 'Essential tools for personal use and small projects.',
//     features: [
//       'Access 51 Features',
//       'Plan Credits',
//       'Upload documents',
//       'All access AI Editors',
//       'AI Writer',
//       'AI Video',
//       'AI Plagiarism',
//       'AI Detector',
//       'AI Image',
//       'Chat Settings',
//       'AI Article Wizard',
//       'AI File Chat',
//       'AI Vision',
//       'SEO Tool',
//       'AI ReWriter',
//       'AI Chat Image',
//       'AI Chat',
//       'AI Chat Pro',
//       'AI Code',
//       'AI YouTube',
//       'AI RSS',
//       'AI Speech to Text',
//       'AI Voiceover',
//       'AI Voice Isolator',
//       'Brand Voice',
//       'AI Image Editor',
//       'AI Persona',
//       'AI Music',
//       'AI Video Pro',
//       'Support'
//     ],
//     cta: 'Select Starter',
//     category: 'subscriptions',
//     popular: false,
//   },
//   {
//     name: 'Pro',
//     price: '19',
//     description: 'For professionals and teams that need full creative control.',
//     features: [
//       'Access 57 Features',
//       'Plan Credits',
//       'Team allow seats',
//       '7 Days of free trial',
//       'Upload documents',
//       'All access AI Editors',
//       'AI Writer',
//       'AI Video',
//       'AI Plagiarism',
//       'AI Detector',
//       'AI Image',
//       'Chat Settings',
//       'AI Article Wizard',
//       'AI Photo Studio',
//       'AI File Chat',
//       'AI Vision',
//       'SEO Tool',
//       'AI ReWriter',
//       'AI Chat Image',
//       'AI Chat',
//       'AI Chat Pro',
//       'AI Code',
//       'AI YouTube',
//       'AI RSS',
//       'AI Speech to Text',
//       'AI Voiceover',
//       'AI Voice Isolator',
//       'Brand Voice',
//       'AI Image Editor',
//       'AI Persona',
//       'AI Music',
//       'AI Video Pro',
//       'AI Social Media',
//       'AI Product Photography',
//       'Support',
//       'Integration to WordPress'
//     ],
//     cta: 'Select Pro',
//     category: 'subscriptions',
//     popular: true,
//   },
//   {
//     name: 'Enterprise',
//     price: '39',
//     description: 'Full access for businesses, agencies, and enterprise needs.',
//     features: [
//       'Access 57 Features',
//       'Plan Credits',
//       'Team allow seats',
//       'Upload documents',
//       'All access AI Editors',
//       'AI Bots',
//       'Human Agent',
//       'AI Writer',
//       'AI Video',
//       'AI Plagiarism',
//       'AI Detector',
//       'AI Image',
//       'Chat Settings',
//       'AI Article Wizard',
//       'AI Photo Studio',
//       'AI File Chat',
//       'AI Vision',
//       'SEO Tool',
//       'AI ReWriter',
//       'AI Chat Image',
//       'AI Chat',
//       'AI Chat Pro',
//       'AI Code',
//       'AI YouTube',
//       'AI RSS',
//       'AI Speech to Text',
//       'AI Voiceover',
//       'AI Voice Isolator',
//       'Brand Voice',
//       'AI Image Editor',
//       'AI Persona',
//       'AI Music',
//       'AI Video Pro',
//       'AI Social Media',
//       'AI Product Photography',
//       'Support',
//       'Integration to WordPress',
//       '5 Team Seat'
//     ],
//     cta: 'Select Enterprise',
//     category: 'subscriptions',
//     popular: false,
//   },  {
//     name: 'Image Generation',
//     price: '10',
//     description: 'Generate AI images with powerful tools — pay once, use anytime.',
//     features: [
//       'Access All Features',
//       'Plan Credits',
//       'Text to Image',
//       'Image to Image',
//       'AI Image Editor',
//       'Style & Background Selection',
//       'High-resolution Output',
//       'No Expiration'
//     ],
//     cta: 'Select Image Generation',
//     category: 'token',
//     popular: false
//   },
//   {
//     name: 'Video Generation',
//     price: '10',
//     description: 'Create engaging AI videos — pay once and generate without limits.',
//     features: [
//       'Access All Features',
//       'Plan Credits',
//       'Text to Video',
//       'Image to Video',
//       'Script to Video',
//       'Video from Prompt',
//       'AI Video Pro',
//       'Voiceover Sync',
//       'Scene-based Editing',
//       'High-resolution Output',
//       'No Expiration'
//     ],
//     cta: 'Select Video Generations',
//     category: 'token',
//     popular: false
//   },
//   {
//     name: 'Photo Products Generation',
//     price: '10',
//     description: 'Generate realistic AI photos and product mockups with one-time tokens.',
//     features: [
//       'Access All Features',
//       'Plan Credits',
//       'AI Photo Studio',
//       'AI Product Photography',
//       'Model Selection',
//       'Pose Control',
//       'Lighting & Scene Setup',
//       'Style Variations',
//       'High-resolution Output',
//       'No Expiration'
//     ],
//     cta: 'Select Photo Products Generations',
//     category: 'token',
//     popular: false
//   }
// ];


const categories = [
  { key: 'subscriptions', label: 'Subscriptions' },
  { key: 'token', label: 'Token Pack' },
  { key: 'enterprise', label: 'Enterprise Pack' },
];

const featureDescriptions = {
  "SEO Tool": "Tools for analyzing content and scoring the SEO",
  "AI Writer": "Generate blog posts, captions, ads, and more",
  "AI Image": "Generate images from prompts using AI",
  "AI Chat": "Chat with an AI assistant in real time",
  "AI Code": "Generate or explain code using AI",
  "AI Detector": "Detect whether content is AI-generated",
  "AI ReWriter": "Rewrite or rephrase existing content",
  "AI Video": "Generate video from script or prompt",
  "AI Photo Studio": "Create product mockups with styled scenes",
  "AI Product Photography": "High-quality photos from product prompts",
  "AI Bots": "Custom bots to answer queries automatically",
  "Human Agent": "Live human support integration",
  "AI Social Media": "Automate posts, captions, and hashtags",
  "Integration to WordPress": "One-click publish to your WP site"
};


const tagColors = [
  'bg-red-100 text-red-700',
  'bg-orange-100 text-orange-700',
  'bg-amber-100 text-amber-700',
  'bg-yellow-100 text-yellow-700',
  'bg-lime-100 text-lime-700',
  'bg-green-100 text-green-700',
  'bg-emerald-100 text-emerald-700',
  'bg-teal-100 text-teal-700',
  'bg-cyan-100 text-cyan-700',
  'bg-sky-100 text-sky-700',
  'bg-blue-100 text-blue-700',
  'bg-indigo-100 text-indigo-700',
  'bg-violet-100 text-violet-700',
  'bg-purple-100 text-purple-700',
  'bg-pink-100 text-pink-700'
];



export const plans = [
  {
    name: 'Starter',
    price: '10',
    category: 'subscriptions',
    description: 'Perfect for personal use, freelancers, and small creative teams.',
    features: [
      'Access 51 Features', 'Plan Credits', 'Upload documents', 'All access AI Editors',
      'AI Writer', 'AI Video', 'AI Plagiarism', 'AI Detector', 'AI Image', 'Chat Settings',
      'AI Article Wizard', 'AI File Chat', 'AI Vision', 'SEO Tool', 'AI ReWriter',
      'AI Chat Image', 'AI Chat', 'AI Chat Pro', 'AI Code', 'AI YouTube', 'AI RSS',
      'AI Speech to Text', 'AI Voiceover', 'AI Voice Isolator', 'Brand Voice',
      'AI Image Editor', 'AI Persona', 'AI Music', 'AI Video Pro', 'Support'
    ],
    excluded: [
      'AI Bots', 'Human Agent', 'AI Social Media Tools',
      'AI Photo Studio', 'AI Product Photography', 'Integration to WordPress', 'Team allow seats'
    ]
  },
  {
    name: 'Pro',
    price: '19',
    category: 'subscriptions',
    description: 'For professionals and teams that need full creative control.',
    features: [
      'Access 57 Features', 'Plan Credits', 'Team allow seats', '7 Days of free trial',
      'Upload documents', 'All access AI Editors', 'AI Writer', 'AI Video', 'AI Plagiarism',
      'AI Detector', 'AI Image', 'Chat Settings', 'AI Article Wizard', 'AI Photo Studio',
      'AI File Chat', 'AI Vision', 'SEO Tool', 'AI ReWriter', 'AI Chat Image', 'AI Chat',
      'AI Chat Pro', 'AI Code', 'AI YouTube', 'AI RSS', 'AI Speech to Text', 'AI Voiceover',
      'AI Voice Isolator', 'Brand Voice', 'AI Image Editor', 'AI Persona', 'AI Music',
      'AI Video Pro', 'AI Social Media', 'AI Product Photography', 'Support',
      'Integration to WordPress'
    ],
    excluded: ['AI Bots', 'Human Agent']
  },
  {
    name: 'Enterprise',
    price: '39',
    category: 'subscriptions',
    description: 'Full access for businesses, agencies, and enterprise needs.',
    features: [
      'Access 57 Features', 'Plan Credits', 'Team allow seats', 'Upload documents',
      'All access AI Editors', 'AI Bots', 'Human Agent', 'AI Writer', 'AI Video',
      'AI Plagiarism', 'AI Detector', 'AI Image', 'Chat Settings', 'AI Article Wizard',
      'AI Photo Studio', 'AI File Chat', 'AI Vision', 'SEO Tool', 'AI ReWriter',
      'AI Chat Image', 'AI Chat', 'AI Chat Pro', 'AI Code', 'AI YouTube', 'AI RSS',
      'AI Speech to Text', 'AI Voiceover', 'AI Voice Isolator', 'Brand Voice',
      'AI Image Editor', 'AI Persona', 'AI Music', 'AI Video Pro', 'AI Social Media',
      'AI Product Photography', 'Support', 'Integration to WordPress', '5 Team Seat'
    ],
    excluded: []
  },
  {
    name: 'Image Generation',
    price: '10',
    category: 'token',
    description: 'Generate AI images with powerful tools — pay once, use anytime.',
    features: [
      'Access All Features', 'Plan Credits', 'Text to Image', 'Image to Image',
      'AI Image Editor', 'Style & Background Selection', 'High-resolution Output', 'No Expiration'
    ],
    excluded: []
  },
  {
    name: 'Video Generation',
    price: '10',
    category: 'token',
    description: 'Create engaging AI videos — pay once and generate without limits.',
    features: [
      'Access All Features', 'Plan Credits', 'Text to Video', 'Image to Video',
      'Script to Video', 'Video from Prompt', 'AI Video Pro', 'Voiceover Sync',
      'Scene-based Editing', 'High-resolution Output', 'No Expiration'
    ],
    excluded: []
  },
  {
    name: 'Photo Products Generation',
    price: '10',
    category: 'token',
    description: 'Generate realistic AI photos and product mockups with one-time tokens.',
    features: [
      'Access All Features', 'Plan Credits', 'AI Photo Studio', 'AI Product Photography',
      'Model Selection', 'Pose Control', 'Lighting & Scene Setup',
      'Style Variations', 'High-resolution Output', 'No Expiration'
    ],
    excluded: []
  }
];

const planCredits = {
  Starter: {
    "Images": 200,
    "Words": 100000,
    "Image to Video": 200,
    "Text to Speech": 100000,
    "Text to Video": 100
  },
  Pro: {
    "Images": 0,
    "Words": 0,
    "Image to Video": 0,
    "Text to Speech": 0,
    "Text to Video": 0
  },
  Enterprise: {
    "Images": 0,
    "Words": 0,
    "Image to Video": 0,
    "Text to Speech": 0,
    "Text to Video": 0
  }
};

export default function PricingWithTabbedSlider() {
  const [activeTab, setActiveTab] = useState('subscriptions');
  const [page, setPage] = useState(0);
  const perPage = 3;

  const filteredPlans = plans.filter((p) => p.category === activeTab);
  const pageCount = Math.ceil(filteredPlans.length / perPage);
  const displayedPlans = filteredPlans.slice(page * perPage, (page + 1) * perPage);

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const handleNext = () => {
    setPage((prev) => (prev + 1) % pageCount);
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
    setPage(0); // Reset to first slide when tab changes
  };

  return (
  <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing</h2>
          <p className="text-lg text-muted-foreground">Choose the plan that suits your need.</p>
        </div>

        {/* Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.filter(p => p.category === 'subscriptions').map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold mb-4">${plan.price}<span className="text-base font-normal text-muted-foreground">/month</span></div>
                <a
                  href="#"
                  className="block w-full text-center py-3 px-6 rounded-lg text-white font-semibold transition mb-6 bg-blue-500 hover:bg-blue-600"
                >
                  Select {plan.name}
                </a>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-green-600">Includes:</h4>
                <div className="flex flex-wrap gap-2">
                  {plan.features.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-muted text-xs text-foreground px-3 py-1 rounded-full border border-border flex items-center gap-1"
                    >
                      <Check className="h-4 w-4 text-green-500" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

 {plan.name in planCredits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-blue-600">Plan Credits:</h4>
                    <ul className="text-xs space-y-1 text-muted-foreground">
                   {Object.entries(planCredits[plan.name as keyof typeof planCredits]).map(([key, value], i) => (
                        <li key={i}>
                          <span className="font-medium text-foreground">{key}</span>: {value.toLocaleString()} credits
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
              {plan.excluded?.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-red-500">Not Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {plan.excluded.map((item, i) => (
                      <span
                        key={i}
                        className="bg-red-100 text-xs text-red-700 px-3 py-1 rounded-full border border-red-200 flex items-center gap-1"
                      >
                        <XCircle className="h-4 w-4 text-red-500" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
