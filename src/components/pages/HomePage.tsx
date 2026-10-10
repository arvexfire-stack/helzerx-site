import React, { useEffect } from 'react';
import { HeroSection } from '../HeroSection';
import { GabrunShowcaseSections } from '../GabrunShowcaseSections';
import { FaqSection } from '../FaqSection';
import { FloatingSocialWidgets } from '../FloatingSocialWidgets';

export const HomePage: React.FC = () => {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.home-reveal, .home-reveal-group > *');
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
    }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });
    targets.forEach((target, index) => {
      target.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 75}ms`);
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-clip bg-white text-slate-800 font-sans">
      <div className="home-reveal"><HeroSection /></div>
      <div className="home-reveal-group"><GabrunShowcaseSections /></div>
      <div className="home-reveal"><FaqSection /></div>
      <FloatingSocialWidgets />
    </div>
  );
};
