import React from 'react';
import {
  ArrowRight, Check, ChevronRight, Cpu, Gamepad2, Globe2, HardDrive,
  Layers3, LockKeyhole, MousePointer2, Network, PackageCheck, Server,
  ShieldCheck, Sparkles, Timer, Wrench, Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GabrunShowcaseSections: React.FC = () => {
  const { navigateTo, openCheckout, plans, locations, deployedServers, siteSettings } = useApp();
  const availableLocations = locations.filter((location) => location.status !== 'maintenance');
  const activeServers = deployedServers.filter((server) => server.status === 'running');
  const featuredPlan = plans.find((plan) => plan.status !== 'inactive');

  const reasons = [
    { icon: Zap, title: 'Ready when you are', copy: 'Get your server online quickly with straightforward setup and a control panel built for getting in-game.' },
    { icon: ShieldCheck, title: 'Protected by design', copy: 'Keep your community connected with DDoS protection included across our hosting services.' },
    { icon: Cpu, title: 'Hardware that keeps up', copy: 'Modern processors and NVMe storage give worlds, mods, and applications room to run smoothly.' },
  ];
  const capabilities = [
    { icon: Gamepad2, title: 'Game server hosting', copy: 'Find a plan for the game your group wants to play.', action: 'services-game-hosting' },
    { icon: Layers3, title: 'Modpack installs', copy: 'Get popular mod loaders and server software in a few clicks.', action: 'services-minecraft' },
    { icon: HardDrive, title: 'NVMe storage', copy: 'Quick world access with fast solid-state storage.', action: 'hardware' },
    { icon: Network, title: 'Global locations', copy: `${availableLocations.length} active server ${availableLocations.length === 1 ? 'location' : 'locations'} to choose from.`, action: 'locations' },
    { icon: LockKeyhole, title: 'DDoS protection', copy: 'Protection included to help keep play sessions available.', action: 'hardware' },
    { icon: Wrench, title: 'Simple server control', copy: 'Manage your hosting and server settings from your client area.', action: 'login' },
  ];

  return (
    <div className="space-y-8 px-3 pb-8 sm:space-y-12 sm:px-6 lg:px-8">
      <section className="reference-panel mx-auto grid max-w-[1210px] items-center gap-8 overflow-hidden px-5 py-7 sm:gap-10 sm:px-10 sm:py-10 lg:grid-cols-[.82fr_1.18fr] lg:px-14 lg:py-12">
        <div className="max-w-[430px]">
          <span className="eyebrow">A little about {siteSettings.brandName || 'ArveX'}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-[-.055em] text-[#182231] sm:text-[2.65rem]">
            Your next world<br className="hidden sm:block" /> starts right here.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#738092]">
            A home for the games you play and the communities you bring together. Choose a plan, pick a location, and make the server yours.
          </p>
          <button type="button" onClick={() => navigateTo('about')} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#202b3b] px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#344458]">
            Get to know us <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="relative min-h-[255px] overflow-hidden rounded-[22px] bg-[#eaf5ff] p-4 sm:min-h-[310px] sm:p-6">
          <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 70% 20%, #c4e1ff 0, transparent 38%), radial-gradient(circle at 20% 100%, #d6eaff 0, transparent 42%)' }} />
          <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#bbd9f8] sm:h-[250px] sm:w-[250px]" />
          <div className="absolute left-1/2 top-1/2 h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c6def8] sm:h-[185px] sm:w-[185px]" />
          <div className="absolute left-1/2 top-1/2 grid h-[94px] w-[94px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[27px] bg-gradient-to-br from-[#4ca1f4] to-[#2476dc] text-white shadow-[0_17px_35px_rgba(39,117,209,.25)]">
            <Server className="h-9 w-9" />
          </div>
          <div className="absolute left-[7%] top-[12%] flex items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 shadow-[0_8px_20px_rgba(56,102,150,.1)]">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#eef6ff] text-[#3b84d6]"><Gamepad2 className="h-4 w-4" /></span>
            <span><b className="block text-[10px] text-[#273a50]">Game servers</b><small className="text-[9px] text-[#8291a1]">Ready to play</small></span>
          </div>
          <div className="absolute right-[6%] top-[18%] rounded-xl border border-white bg-white/95 px-3 py-2 shadow-[0_8px_20px_rgba(56,102,150,.1)]">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#56c69a]" /><b className="text-[10px] text-[#273a50]">{activeServers.length} active</b></div>
            <small className="mt-1 block text-[9px] text-[#8291a1]">Your running servers</small>
          </div>
          <div className="absolute bottom-[10%] left-[11%] flex items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 shadow-[0_8px_20px_rgba(56,102,150,.1)]">
            <Globe2 className="h-4 w-4 text-[#4188d7]" /><span><b className="block text-[10px] text-[#273a50]">{availableLocations.length} locations</b><small className="text-[9px] text-[#8291a1]">Choose your region</small></span>
          </div>
          <div className="absolute bottom-[12%] right-[8%] flex items-center gap-2 rounded-xl border border-white bg-white/95 px-3 py-2 shadow-[0_8px_20px_rgba(56,102,150,.1)]">
            <ShieldCheck className="h-4 w-4 text-[#4188d7]" /><b className="text-[10px] text-[#273a50]">Always protected</b>
          </div>
        </div>
      </section>

      <section className="reference-panel mx-auto max-w-[1210px] px-5 py-8 sm:px-10 sm:py-11 lg:px-14">
        <div className="mx-auto mb-7 max-w-[560px] text-center sm:mb-9">
          <span className="eyebrow">Why players choose us</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-.055em] text-[#182231] sm:text-[2.65rem]">More time playing.<br className="sm:hidden" /> Less time waiting.</h2>
          <p className="mt-3 text-sm leading-6 text-[#788697]">The essentials for hosting a great session, without the clutter.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="soft-feature p-5 sm:p-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf6ff] text-[#3983d9]"><Icon className="h-[18px] w-[18px]" /></span>
              <h3 className="mt-4 font-display text-base font-bold tracking-tight text-[#253448]">{title}</h3>
              <p className="mt-2 text-xs leading-6 text-[#788697]">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1210px] px-1 py-1 sm:px-3">
        <div className="mx-auto mb-7 max-w-[600px] text-center sm:mb-9">
          <span className="eyebrow">Hosting, made useful</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-.055em] text-[#182231] sm:text-[2.65rem]">Everything your server needs.</h2>
          <p className="mt-3 text-sm leading-6 text-[#6d7e91]">Useful tools and infrastructure for your next game night and beyond.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, copy, action }) => (
            <button
              key={title}
              type="button"
              onClick={() => action === 'login' ? window.location.assign('/login') : navigateTo(action)}
              className="soft-feature group flex min-h-[142px] gap-4 p-5 text-left sm:p-6"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#4387d4] shadow-[0_4px_14px_rgba(46,100,156,.08)]"><Icon className="h-[18px] w-[18px]" /></span>
              <span className="min-w-0 flex-1">
                <b className="block font-display text-sm font-bold text-[#253448]">{title}</b>
                <span className="mt-1.5 block text-xs leading-5 text-[#788697]">{copy}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-[#3980d1]">Learn more <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="reference-panel mx-auto grid max-w-[1210px] items-center gap-8 px-5 py-8 sm:px-10 sm:py-11 lg:grid-cols-[1fr_.9fr] lg:px-14">
        <div>
          <span className="eyebrow">From plan to play</span>
          <h2 className="mt-3 max-w-[520px] font-display text-3xl font-extrabold leading-[1.08] tracking-[-.055em] text-[#182231] sm:text-[2.7rem]">Your server is only a few steps away.</h2>
          <p className="mt-3 max-w-[470px] text-sm leading-6 text-[#788697]">Pick a game, choose a setup that fits, and finish in the existing secure checkout.</p>
          <button type="button" onClick={() => navigateTo('plans')} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#2479df] px-5 py-2.5 text-[11px] font-bold text-white transition hover:bg-[#1769cc]">
            Browse available plans <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="space-y-2.5">
          {[
            { n: '01', icon: MousePointer2, title: 'Choose your game', text: 'Start with the game or service you want to host.' },
            { n: '02', icon: PackageCheck, title: 'Pick your plan', text: 'Compare real plan specs and select your billing cycle.' },
            { n: '03', icon: Sparkles, title: 'Make it yours', text: 'Choose a server location and complete checkout.' },
          ].map(({ n, icon: Icon, title, text }) => (
            <div key={n} className="flex items-start gap-4 rounded-2xl border border-[#edf1f6] bg-[#fbfdff] p-4">
              <span className="font-mono text-[10px] font-bold text-[#4a8bd2]">{n}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#edf6ff] text-[#4287d6]"><Icon className="h-4 w-4" /></span>
              <span className="flex-1"><b className="block text-xs font-bold text-[#26384d]">{title}</b><small className="mt-1 block text-[11px] leading-5 text-[#8491a1]">{text}</small></span>
              <Check className="mt-1 h-4 w-4 text-[#6da5dd]" />
            </div>
          ))}
          {featuredPlan && (
            <button type="button" onClick={() => openCheckout(featuredPlan)} className="flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-[#3188e8] to-[#62a9f4] p-4 text-left text-white transition hover:brightness-[1.03]">
              <span className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20"><Timer className="h-4 w-4" /></span><span><b className="block text-xs font-bold">Want to get started now?</b><small className="mt-1 block text-[10px] text-blue-50">Continue with {featuredPlan.name}</small></span></span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
