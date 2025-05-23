import React from 'react';
import { Check, Star, Zap, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import FeaturesPlan from '@/components/home/FeaturesPlan';
import FaqPricing from '@/components/FaqPricing';
import PricingTable from '@/components/PricingTable';

const PricingPage = () => {
  return (
    <>
    <PricingTable/>
      {/* Section: Pricing Table */}
      <FeaturesPlan />

      {/* Section: FAQ */}
      <FaqPricing />
      
    </>
  );
};

export default PricingPage;
