import React from 'react';
import { HeroSection } from '../HeroSection';
import { GabrunShowcaseSections } from '../GabrunShowcaseSections';
import { FaqSection } from '../FaqSection';
import { FloatingSocialWidgets } from '../FloatingSocialWidgets';

export const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-x-clip bg-white text-slate-800 font-sans">
      <HeroSection />
      <GabrunShowcaseSections />
      <FaqSection />
      <FloatingSocialWidgets />
    </div>
  );
};
