import React from 'react';
import { HeroSection } from '../HeroSection';
import { HelzerXBrandsSection } from '../HelzerXBrandsSection';

export const HomePage: React.FC = () => (
  <main className="relative min-h-screen overflow-x-clip bg-transparent text-slate-800 font-sans">
    <HeroSection />
    <HelzerXBrandsSection />
  </main>
);
