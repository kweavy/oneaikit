'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileText, Mic, ImageIcon, Youtube, Code, MessageSquare } from 'lucide-react';
import ArticleWizard from './ArticleWizardGenerator';
import TextToSpeechGenerator from './TextToSpeechGenerator';
import ImageGenerator from './ImageGenerator';
import YouTubeToArticle from './YoutubetoArticle';
import AIToGenerateCode from './AItoGenerateCode';
import ChatWithPros from './ChatWithPros';
import { Button } from "../ui/button";

export default function ArticleGenerators() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* H1 added */}
      <h2 className="text-4xl font-bold text-center mb-6">
        This is Demo, Try Our Full Optimize Tools
        <br />
        <a href="https://oneaikit.com/login">
                       <Button className="bg-blue-600 text-white hover:bg-blue-700 transition">
                         Start Free Trial →
                       </Button>
                     </a>
      </h2>

      <Tabs defaultValue="article" className="space-y-6">
        <TabsList>
          <TabsTrigger value="article" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" /> Article
          </TabsTrigger>
          <TabsTrigger value="speech" className="flex items-center">
            <Mic className="mr-2 h-4 w-4" /> Text-to-Speech
          </TabsTrigger>
          <TabsTrigger value="image" className="flex items-center">
            <ImageIcon className="mr-2 h-4 w-4" /> Image Gen
          </TabsTrigger>
          <TabsTrigger value="youtube" className="flex items-center">
            <Youtube className="mr-2 h-4 w-4" /> YouTube to Article
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center">
            <Code className="mr-2 h-4 w-4" /> Generate Code
          </TabsTrigger>
          {/* <TabsTrigger value="chat" className="flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" /> Chat with Pros
          </TabsTrigger> */}
        </TabsList>

        <TabsContent value="article">
          <ArticleWizard />
        </TabsContent>
        <TabsContent value="speech">
          <TextToSpeechGenerator />
        </TabsContent>
        <TabsContent value="image">
          <ImageGenerator />
        </TabsContent>
        <TabsContent value="youtube">
          <YouTubeToArticle />
        </TabsContent>
        <TabsContent value="code">
          <AIToGenerateCode />
        </TabsContent>
        {/* <TabsContent value="chat">
          <ChatWithPros />
        </TabsContent> */}
      </Tabs>
    </div>
  );
}