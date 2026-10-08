import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, Twitter, Github, Mail, Shield, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { siteSettings, navigateTo } = useApp();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-[#dce8f4] bg-[#eaf4ff] px-3 pb-6 pt-8 text-sm text-[#536981] sm:px-6 sm:pt-12 lg:px-8">
      <div className="mx-auto max-w-[1420px] overflow-hidden rounded-[28px] bg-[#246ed0] text-white shadow-[0_20px_60px_rgba(38,108,190,0.18)] sm:rounded-[34px]">
        <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.4fr_0.65fr_0.75fr_1fr] lg:px-14 lg:py-14">
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="group flex min-h-11 items-center gap-3 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/25 bg-white/15 font-display text-xs font-bold tracking-tight text-white transition group-hover:bg-white/20">
                AX
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                {siteSettings.brandName || 'ArveX Hosting'}
              </span>
            </button>
            <p className="mt-5 text-sm leading-6 text-blue-100">
              High-performance game and cloud hosting, made simple. Keep your servers fast, protected, and ready for the next player.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-blue-50">
              <span className="h-2 w-2 rounded-full bg-[#85e0bc]" />
              Support available around the clock
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm font-medium text-blue-100">
              <li><button onClick={() => navigateTo('about')} className="py-1 transition hover:text-white">About</button></li>
              <li><button onClick={() => navigateTo('plans')} className="py-1 transition hover:text-white">Game plans</button></li>
              <li><button onClick={() => navigateTo('services')} className="py-1 transition hover:text-white">Cloud VPS</button></li>
              <li><button onClick={() => navigateTo('locations')} className="py-1 transition hover:text-white">Locations</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-white">Company</h4>
            <ul className="space-y-2.5 text-sm font-medium text-blue-100">
              <li><button onClick={() => navigateTo('hardware')} className="py-1 transition hover:text-white">Hardware &amp; SLA</button></li>
              <li><button onClick={() => navigateTo('blog')} className="py-1 transition hover:text-white">Blog &amp; news</button></li>
              <li><button onClick={() => navigateTo('support')} className="py-1 transition hover:text-white">Support center</button></li>
              <li>
                <button onClick={() => navigateTo('admin')} className="inline-flex min-h-8 items-center gap-1.5 py-1 font-semibold text-white/90 transition hover:text-white">
                  <Shield className="h-3.5 w-3.5" />
                  Admin portal
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold text-white">Stay connected</h4>
            <div className="flex items-center gap-2.5">
              <a href={siteSettings.discordUrl || 'https://discord.gg'} target="_blank" rel="noreferrer" aria-label="Discord" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#246ed0]"><MessageSquare className="h-4 w-4" /></a>
              <a href={siteSettings.twitterUrl || 'https://twitter.com'} target="_blank" rel="noreferrer" aria-label="Twitter" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#246ed0]"><Twitter className="h-4 w-4" /></a>
              <a href={siteSettings.githubUrl || 'https://github.com'} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#246ed0]"><Github className="h-4 w-4" /></a>
              <a href={`mailto:${siteSettings.supportEmail || 'support@helzerx.cloud'}`} aria-label="Email support" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#246ed0]"><Mail className="h-4 w-4" /></a>
            </div>
            <p className="mt-4 text-xs leading-5 text-blue-100">Reach our team any time through the support desk.</p>
          </div>
        </div>

        <div className="mx-6 flex flex-col items-center justify-between gap-4 border-t border-white/20 py-5 text-xs font-medium text-blue-100 sm:mx-10 sm:flex-row lg:mx-14">
          <button type="button" onClick={() => navigateTo('home')} className="font-semibold text-white/95 transition hover:text-white">
            {siteSettings.brandName || 'ArveX Hosting'}
          </button>
          <div className="flex items-center gap-4">
            <span>© All rights reserved</span>
            <button onClick={scrollToTop} aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#246ed0]">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
