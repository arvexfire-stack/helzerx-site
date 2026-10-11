import React from 'react';
import { HeroSection } from '../HeroSection';
import { HelzerXBrandsSection } from '../HelzerXBrandsSection';
import { FaqSection } from '../FaqSection';
import { FloatingSocialWidgets } from '../FloatingSocialWidgets';

export const HomePage: React.FC = () => (
  <div className="relative overflow-x-clip bg-white text-slate-800 font-sans">
    <HeroSection />
    <HelzerXBrandsSection />
    <FaqSection />
    <FloatingSocialWidgets />
  </div>
);
