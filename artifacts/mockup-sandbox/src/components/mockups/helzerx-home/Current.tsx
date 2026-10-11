import React from 'react';
import { AppProvider } from './AppContext';
import { FaqSection } from './FaqSection';
import { FloatingSocialWidgets } from './FloatingSocialWidgets';
import { GabrunShowcaseSections } from './GabrunShowcaseSections';
import { HeroSection } from './HeroSection';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import './_group.css';

export function Current() {
  return (
    <AppProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-800 font-sans home-app-canvas">
        <div className="home-site-frame">
          <Navbar />
          <main className="relative flex-1">
            <div className="relative overflow-x-clip bg-white text-slate-800 font-sans">
              <HeroSection />
              <GabrunShowcaseSections />
              <FaqSection />
              <FloatingSocialWidgets />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </AppProvider>
  );
}
