import React from 'react';
import { ArrowRight, Check, Cpu, Gamepad2, Globe2, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, games, locations, siteSettings, plans, deployedServers } = useApp();
  const availableLocations = locations.filter((location) => location.status !== 'maintenance');
  const featuredGame = games[0];
  const featuredPlan = plans.find((plan) => plan.status !== 'inactive');
  const runningServers = deployedServers.filter((server) => server.status === 'running').length;

  return (
    <section className="hx-hero relative mx-auto max-w-[1380px] overflow-hidden px-4 pb-7 pt-9 sm:mx-5 sm:rounded-[30px] sm:px-8 sm:pb-9 sm:pt-11 lg:mx-7 lg:px-11">
      <div className="hx-hero-orb hx-hero-orb-one" /><div className="hx-hero-orb hx-hero-orb-two" />
      <div className="relative z-10 mx-auto max-w-[950px] text-center">
        <div className="hx-hero-kicker mx-auto inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/85 px-3 py-1.5 text-[10px] font-semibold text-blue-700 shadow-sm"><Sparkles className="h-3 w-3" /> HELZERX CLOUD <span className="text-blue-300">•</span> HOSTING MADE SIMPLE</div>
        <h1 className="hx-hero-title mx-auto mt-5 font-display text-[clamp(2.5rem,6.5vw,5.2rem)] font-medium leading-[1.02] tracking-[-.075em] text-[#101820]">Global. Reliable. <span className="whitespace-nowrap">Hosting.</span></h1>
        <p className="mx-auto mt-3 max-w-[410px] text-xs leading-5 text-slate-500 sm:text-sm">{siteSettings.heroSubtitle || 'Power your next idea with fast, reliable game and cloud hosting.'}</p>
        <button type="button" onClick={() => navigateTo('plans')} className="hx-primary-cta mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold text-white">Get Started <ArrowRight className="h-3.5 w-3.5" /></button>
      </div>

      <div className="hx-showcase-stage relative mx-auto mt-8 grid max-w-[1020px] items-center gap-3 sm:mt-10 sm:grid-cols-[.78fr_1.5fr_.78fr] sm:gap-4">
        <button type="button" onClick={() => navigateTo('plans')} className="hx-exchange-card hx-side-card order-2 text-left sm:order-1">
          <div className="flex items-center justify-between text-[9px] text-slate-500"><span>Game Hosting</span><Gamepad2 className="h-3.5 w-3.5 text-blue-500" /></div>
          <div className="mt-2 text-[10px] text-slate-500">Starting from</div>
          <div className="mt-0.5 text-2xl font-medium tracking-tight text-slate-900">{featuredPlan ? 'Affordable' : 'Flexible'}</div>
          <div className="mt-2 flex items-center gap-1 text-[9px] text-emerald-600"><Check className="h-3 w-3" /> Easy setup</div>
          <div className="mt-3 border-t border-slate-100 pt-2 text-[9px] text-slate-400">{featuredGame?.name || 'Popular game servers'}</div>
          <div className="hx-card-orbit"><span /></div>
        </button>

        <div className="hx-center-card order-1 sm:order-2">
          <div className="relative z-10 flex items-center gap-1.5 text-[9px] text-white/80"><span className="rounded-full border border-white/30 px-2 py-1"><Globe2 className="mr-1 inline h-3 w-3" /> HelzerX Cloud</span><span className="ml-auto rounded-full bg-white/15 px-2 py-1">Always online</span></div>
          <h2 className="relative z-10 mt-5 text-[clamp(1.3rem,3.2vw,2.25rem)] font-medium leading-tight tracking-[-.055em] text-white sm:mt-7">Deploy. Play. Scale.</h2>
          <p className="relative z-10 mt-2 max-w-[340px] text-[10px] leading-5 text-white/80 sm:mt-3 sm:text-xs">Fast infrastructure for your game servers, cloud projects, and growing community.</p>
          <div className="hx-center-glow" />
          <div className="relative z-10 mt-5 flex flex-wrap gap-2 sm:mt-7"><span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1.5 text-[9px] text-white"><Zap className="mr-1 inline h-3 w-3" /> Fast deployment</span><span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1.5 text-[9px] text-white"><ShieldCheck className="mr-1 inline h-3 w-3" /> DDoS protection</span></div>
        </div>

        <button type="button" onClick={() => navigateTo('locations')} className="hx-exchange-card hx-side-card order-3 text-left">
          <div className="flex items-center justify-between text-[9px] text-slate-500"><span>Cloud Network</span><Globe2 className="h-3.5 w-3.5 text-blue-500" /></div>
          <div className="mt-2 text-[10px] text-slate-500">Available regions</div>
          <div className="mt-0.5 text-2xl font-medium tracking-tight text-slate-900">{availableLocations.length} <span className="text-xs text-slate-400">locations</span></div>
          <div className="mt-2 flex items-center gap-1 text-[9px] text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {runningServers} servers running</div>
          <div className="hx-chart mt-3"><svg viewBox="0 0 210 52" role="img" aria-label="Decorative network activity chart"><path d="M0 42 C14 40 17 12 30 27 S50 46 62 29 S83 36 95 18 S116 40 129 26 S151 31 165 12 S192 26 210 7" fill="none" stroke="#7bb7f8" strokeWidth="2" /><path d="M0 42 C14 40 17 12 30 27 S50 46 62 29 S83 36 95 18 S116 40 129 26 S151 31 165 12 S192 26 210 7 L210 52 L0 52Z" fill="url(#hxChartFill)" /><defs><linearGradient id="hxChartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#93c5fd" stopOpacity=".35"/><stop offset="100%" stopColor="#93c5fd" stopOpacity="0"/></linearGradient></defs></svg></div>
          <div className="mt-1 flex items-center justify-between text-[8px] text-slate-400"><span>Stable network</span><TrendingUp className="h-3 w-3 text-blue-500" /></div>
        </button>
      </div>

      <div className="relative z-10 mx-auto mt-5 flex max-w-[1000px] flex-wrap items-center justify-between gap-3 text-[9px] text-slate-400 sm:mt-6"><span className="inline-flex items-center gap-1.5"><span className="flex -space-x-1"><i className="h-4 w-4 rounded-full border-2 border-white bg-blue-200"/><i className="h-4 w-4 rounded-full border-2 border-white bg-indigo-200"/><i className="h-4 w-4 rounded-full border-2 border-white bg-sky-300"/></span> Built for communities</span><span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-blue-500"/> Protection included</span><button type="button" onClick={() => navigateTo('locations')} className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-blue-600"><Globe2 className="h-3.5 w-3.5"/> Explore locations <ArrowRight className="h-3 w-3"/></button></div>
    </section>
  );
};
