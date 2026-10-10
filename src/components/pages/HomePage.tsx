import React, { useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { GabrunShowcaseSections } from '../GabrunShowcaseSections';
import { FaqSection } from '../FaqSection';
import { FloatingSocialWidgets } from '../FloatingSocialWidgets';

export const HomePage: React.FC = () => {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      '.hx-hero-kicker, .hx-hero-title, .hx-primary-cta, .hx-exchange-card, .hx-center-card, .reference-panel, .soft-feature, .home-section-reveal'
    );
    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 90}ms`);
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="helzerx-home-page relative overflow-x-clip bg-white text-slate-800 font-sans">
      <HeroSection />
      <div className="home-section-reveal"><GabrunShowcaseSections /></div>
      <div className="home-section-reveal"><FaqSection /></div>
      <FloatingSocialWidgets />
    </div>
  );
};
