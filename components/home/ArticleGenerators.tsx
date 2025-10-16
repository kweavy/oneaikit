'use client';

import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileText, Mic, ImageIcon, Youtube, Code, MessageSquare, Images, Package } from 'lucide-react';
import ArticleWizard from './ArticleWizardGenerator';
import TextToSpeechGenerator from './TextToSpeechGenerator';
import ImageGenerator from './ImageGenerator';
import YouTubeToArticle from './YoutubetoArticle';
import AIToGenerateCode from './AItoGenerateCode';
import ChatWithPros from './ChatWithPros';
import CombinePhoto from '../CombinePhoto';
import ProductPhotography from '../ProductPhotography';
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
        <TabsList className="flex justify-center flex-wrap">
          <TabsTrigger value="article" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" /> Article
          </TabsTrigger>
          <TabsTrigger value="speech" className="flex items-center">
            <Mic className="mr-2 h-4 w-4" /> Text-to-Speech
          </TabsTrigger>
          <TabsTrigger value="image" className="flex items-center">
            <ImageIcon className="mr-2 h-4 w-4" /> Image Generator
          </TabsTrigger>
          <TabsTrigger value="youtube" className="flex items-center">
            <Youtube className="mr-2 h-4 w-4" /> YouTube to Article
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center">
            <Code className="mr-2 h-4 w-4" /> Generate Code
          </TabsTrigger>
          <TabsTrigger value="combine" className="flex items-center">
            <Images className="mr-2 h-4 w-4" /> Combine Photos
          </TabsTrigger>
          <TabsTrigger value="product" className="flex items-center">
            <Package className="mr-2 h-4 w-4" /> Product Photography
          </TabsTrigger>

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
        <TabsContent value="combine">
          <CombinePhoto />
        </TabsContent>
        <TabsContent value="product">
          <ProductPhotography />
        </TabsContent>
        {/* <TabsContent value="chat">
          <ChatWithPros />
        </TabsContent> */}
      </Tabs>
    </div>
  );
}