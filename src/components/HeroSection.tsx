import React from 'react';
import { ArrowRight, Gamepad2, Globe2, Layers3, MapPin, Server, ShieldCheck, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, games, locations, siteSettings } = useApp();
  const availableLocations = locations.filter((location) => location.status !== 'maintenance');
  const featuredGames = games.slice(0, 3);
  const firstLocation = availableLocations[0];

  return (
    <section className="px-5 pb-9 pt-9 sm:px-8 sm:pb-12 sm:pt-12 lg:px-12 lg:pt-[58px]">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="eyebrow">Hosting for what you play</span>
        <h1 className="mt-4 font-display text-[clamp(2.45rem,5.3vw,4.7rem)] font-extrabold leading-[.98] tracking-[-.075em] text-[#141b26]">
          Your world.<br className="sm:hidden" /> <span className="text-[#2579dc]">Always online.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[425px] text-sm leading-6 text-[#7d8895] sm:text-[15px]">
          {siteSettings.heroSubtitle || 'Game and cloud hosting for worlds worth coming back to.'}
        </p>
        <button
          type="button"
          onClick={() => navigateTo('plans')}
          className="mt-5 inline-flex min-h-9 items-center gap-2 rounded-full bg-gradient-to-r from-[#287fdf] to-[#61a6ed] px-5 text-[11px] font-bold text-white shadow-[0_5px_14px_rgba(48,126,208,.2)] transition hover:-translate-y-0.5 hover:brightness-[1.03]"
        >
          {siteSettings.heroCtaText || 'Explore hosting plans'} <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="mx-auto mt-9 grid max-w-[830px] items-stretch gap-3 sm:mt-11 sm:grid-cols-[.92fr_1.48fr_.92fr] sm:gap-4">
        <div className="order-2 rounded-[19px] bg-[#f6f9fc] px-4 py-4 text-left sm:order-1 sm:px-4 sm:py-5">
          <div className="flex items-center gap-2 text-[10px] font-semibold text-[#8793a1]">
            <Gamepad2 className="h-3.5 w-3.5 text-[#548fce]" /> Choose your game
          </div>
          <div className="mt-3 space-y-2">
            {featuredGames.length ? featuredGames.map((game) => (
              <div key={game.id} className="flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#edf5fd] text-[#5b92cb]"><Server className="h-3 w-3" /></span>
                <span className="truncate text-[10px] font-semibold text-[#526275]">{game.name}</span>
              </div>
            )) : <p className="rounded-xl bg-white px-3 py-2.5 text-[10px] leading-4 text-[#8793a1]">Browse the available hosting services.</p>}
          </div>
        </div>

        <div className="relative order-1 flex min-h-[170px] flex-col justify-center overflow-hidden rounded-[21px] bg-gradient-to-br from-[#70b7f6] via-[#4c9bed] to-[#4389e4] px-6 py-6 text-left text-white shadow-[0_12px_32px_rgba(69,143,219,.17)] sm:order-2 sm:min-h-[190px] sm:px-7">
          <div className="pointer-events-none absolute -right-7 -top-12 h-40 w-40 rounded-full border border-white/20" />
          <div className="pointer-events-none absolute -right-1 -top-6 h-28 w-28 rounded-full border border-white/15" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold tracking-[.12em] text-white/85"><Sparkles className="h-3 w-3" /> GAME &amp; CLOUD HOSTING</span>
            <h2 className="mt-3 font-display text-[1.45rem] font-bold leading-tight tracking-[-.04em] sm:text-[1.7rem]">Make room for<br />one more session.</h2>
            <p className="mt-2 max-w-[265px] text-[10px] leading-4 text-white/85">Reliable hosting and simple server controls, ready for your next adventure.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigateTo('locations')}
          className="group order-3 flex flex-col justify-between rounded-[19px] bg-[#f6f9fc] px-4 py-4 text-left transition hover:bg-[#f1f7fd] sm:px-4 sm:py-5"
        >
          <div className="flex items-center gap-2 text-[10px] font-semibold text-[#8793a1]"><Globe2 className="h-3.5 w-3.5 text-[#548fce]" /> Server locations</div>
          <div className="mt-4">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#548fce]"><MapPin className="h-4 w-4" /></div>
            <p className="mt-2 text-xs font-bold text-[#394b5e]">{firstLocation?.name || 'Explore locations'}</p>
            <p className="mt-1 text-[9px] leading-4 text-[#8995a2]">{firstLocation?.country || 'Choose a region for your players'}</p>
          </div>
          <span className="mt-3 inline-flex items-center gap-1 text-[9px] font-bold text-[#4d88c9]">See all regions <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
        </button>
      </div>

      <div className="mx-auto mt-5 flex max-w-[830px] items-center justify-center gap-2 text-[9px] font-medium text-[#98a2af]">
        <ShieldCheck className="h-3.5 w-3.5 text-[#6d9fd2]" />
        Hosting features vary by service and plan
        <Layers3 className="ml-2 h-3.5 w-3.5 text-[#6d9fd2]" />
        Built around your community
      </div>
    </section>
  );
};
