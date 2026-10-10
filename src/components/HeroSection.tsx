import React from 'react';
import { ArrowRight, Check, Cpu, Gamepad2, Globe2, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, games, locations, siteSettings, plans, deployedServers } = useApp();
  const availableLocations = locations.filter((location) => location.status !== 'maintenance');
  const featuredGame = games[0];
  const featuredPlan = plans.find((plan) => plan.status !== 'inactive');
  const runningServers = deployedServers.filter((server) => server.status === 'running').length;

  return (
    <section className="hx-hero relative px-4 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pt-[76px]">
      <div className="hx-hero-orb hx-hero-orb-one" />
      <div className="hx-hero-orb hx-hero-orb-two" />
      <div className="relative z-10 mx-auto max-w-[1050px] text-center">
        <div className="hx-hero-kicker mx-auto inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 text-[10px] font-bold tracking-[.12em] text-violet-700 shadow-[0_5px_22px_rgba(108,84,190,.07)] sm:text-[11px]">
          <Sparkles className="h-3.5 w-3.5" /> HOSTING, REIMAGINED
          <span className="h-1 w-1 rounded-full bg-violet-300" />
          BUILT FOR YOUR WORLD
        </div>
        <h1 className="hx-hero-title mx-auto mt-6 max-w-[900px] font-display text-[clamp(2.8rem,7vw,6.3rem)] font-extrabold leading-[.98] tracking-[-.075em] text-[#171522]">
          Your world, elevated<br className="hidden sm:block" /> <span className="hx-title-pill">with HelzerX</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[470px] text-sm leading-7 text-[#858296] sm:text-base">
          {siteSettings.heroSubtitle || 'A better home for your game servers, cloud projects, and the communities you build.'}
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button type="button" onClick={() => navigateTo('plans')} className="hx-primary-cta inline-flex min-h-12 items-center gap-2 rounded-full bg-[#7654e8] px-6 text-xs font-bold text-white shadow-[0_10px_28px_rgba(118,84,232,.25)] transition hover:-translate-y-1 hover:bg-[#6845dc]">
            {siteSettings.heroCtaText || 'Explore hosting'} <ArrowRight className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => navigateTo('locations')} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#e8e4f4] bg-white/85 px-6 text-xs font-bold text-[#514b68] transition hover:-translate-y-1 hover:border-violet-200 hover:bg-white">
            <Globe2 className="h-4 w-4 text-violet-500" /> Explore locations
          </button>
        </div>
      </div>

      <div className="hx-showcase-stage relative mx-auto mt-14 min-h-[350px] max-w-[900px] sm:mt-16 sm:min-h-[490px]">
        <div className="hx-phone-glow" />
        <div className="hx-float-card hx-float-card-left">
          <span className="hx-float-icon bg-violet-50 text-violet-600"><Gamepad2 className="h-4 w-4" /></span>
          <span><b>Game hosting</b><small>{featuredGame?.name || 'Your favourite games'}</small></span>
          <span className="hx-status-dot" />
        </div>
        <div className="hx-float-card hx-float-card-right">
          <span className="hx-float-icon bg-emerald-50 text-emerald-600"><ShieldCheck className="h-4 w-4" /></span>
          <span><b>Protected & ready</b><small>Built for your community</small></span>
        </div>
        <div className="hx-float-card hx-float-card-bottom">
          <span className="hx-float-icon bg-blue-50 text-blue-600"><Globe2 className="h-4 w-4" /></span>
          <span><b>{availableLocations.length} locations</b><small>Connect players worldwide</small></span>
        </div>

        <div className="hx-device-frame">
          <div className="hx-device-top"><span /><span /><span /></div>
          <div className="hx-dashboard">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white shadow-lg shadow-violet-200"><Sparkles className="h-4 w-4" /></span>
                <span className="text-left"><b className="block text-[11px] font-extrabold text-[#242039] sm:text-sm">HelzerX Cloud</b><small className="text-[9px] text-[#9692a8]">Your control center</small></span>
              </div>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1.5 text-[9px] font-bold text-emerald-600"><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />All systems ready</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-3">
              <div className="hx-stat-card"><span className="text-violet-500"><Cpu className="h-4 w-4" /></span><small>CPU usage</small><b>24%</b><div className="hx-mini-bar"><i style={{width:'24%'}} /></div></div>
              <div className="hx-stat-card"><span className="text-blue-500"><Zap className="h-4 w-4" /></span><small>Memory</small><b>3.2 GB</b><div className="hx-mini-bar"><i style={{width:'42%'}} /></div></div>
              <div className="hx-stat-card"><span className="text-emerald-500"><Globe2 className="h-4 w-4" /></span><small>Running</small><b>{runningServers}</b><div className="mt-2 flex items-center gap-1 text-[8px] font-semibold text-emerald-600"><Check className="h-3 w-3" /> Online</div></div>
            </div>
            <div className="mt-4 rounded-2xl border border-[#eeeaf8] bg-white p-3.5 text-left sm:mt-5 sm:p-4">
              <div className="flex items-center justify-between"><span className="text-[10px] font-bold text-[#49435f] sm:text-xs">Your server overview</span><span className="text-[9px] text-[#aaa5ba]">Live dashboard preview</span></div>
              <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#faf9fe] p-2.5 sm:p-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-violet-600"><Gamepad2 className="h-4 w-4" /></span>
                <span className="min-w-0 flex-1"><b className="block truncate text-[10px] text-[#3a3451] sm:text-xs">{featuredPlan?.name || 'Your next server'}</b><small className="text-[9px] text-[#a09bb1]">Game & cloud infrastructure</small></span>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">READY</span>
              </div>
              <div className="mt-3 flex gap-1.5"><span className="h-1.5 flex-1 rounded-full bg-violet-400" /><span className="h-1.5 flex-1 rounded-full bg-violet-300" /><span className="h-1.5 flex-1 rounded-full bg-indigo-200" /><span className="h-1.5 flex-1 rounded-full bg-[#eeeaf8]" /><span className="h-1.5 flex-1 rounded-full bg-[#eeeaf8]" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-3 flex max-w-[680px] flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-semibold text-[#9994ad] sm:mt-0 sm:text-[11px]">
        <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-violet-400" /> Built-in protection</span>
        <span className="inline-flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-violet-400" /> Fast deployment</span>
        <span className="inline-flex items-center gap-1.5"><Globe2 className="h-3.5 w-3.5 text-violet-400" /> Global infrastructure</span>
      </div>
    </section>
  );
};
