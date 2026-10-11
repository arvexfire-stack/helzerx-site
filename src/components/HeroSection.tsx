import React from 'react';

const AnimatedLetters: React.FC<{ text: string; className?: string; delayOffset?: number }> = ({ text, className = '', delayOffset = 0 }) => (
  <span aria-label={text}>
    {Array.from(text).map((char, index) => (
      <span
        key={index}
        aria-hidden="true"
        className={`hero-letter-jump ${className}`}
        style={{ animationDelay: `${delayOffset + index * 0.04}s` }}
      >
        {char === ' ' ? '\u00a0' : char}
      </span>
    ))}
  </span>
);
import { ArrowRight, Boxes, Cloud, Code2, ShoppingBag, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-12 lg:pt-[72px]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-200/65 blur-3xl" />
        <div className="absolute left-1/2 top-40 h-72 w-[min(80vw,800px)] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />
      </div>
      <div className="mx-auto max-w-[1000px] text-center">
        <style>{`
          @keyframes hero-letter-jump-in {
            0% { opacity: 0; transform: translateY(18px) scale(.94); }
            58% { opacity: 1; transform: translateY(-5px) scale(1.015); }
            78% { transform: translateY(2px) scale(.995); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .hero-letter-jump {
            display: inline-block;
            opacity: 0;
            animation: hero-letter-jump-in 800ms cubic-bezier(.22,.8,.25,1) both;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-letter-jump { opacity: 1; animation: none; }
          }
        `}</style>
        <span className="eyebrow">Introducing the HelzerX ecosystem</span>
        <h1 className="mt-5 font-display text-[clamp(2.65rem,6.2vw,5.7rem)] font-extrabold leading-[.98] tracking-[-.075em] text-[#101827]">
          <AnimatedLetters text="One vision." delayOffset={0} /><br /><AnimatedLetters text="Three powerful experiences." delayOffset={1.0} className="bg-gradient-to-r from-[#1768e8] via-[#438ff4] to-[#6c7cf7] bg-clip-text text-transparent" />
        </h1>
        <p className="mx-auto mt-5 max-w-[620px] text-sm leading-7 text-[#738092] sm:text-base">
          Discover a connected world of digital creativity, cloud technology, and online shopping — built under one name: HelzerX Technologies.
        </p>
        <a href="#helzerx-products" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#155eef] px-6 text-xs font-bold text-white shadow-[0_10px_26px_rgba(37,99,235,.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d4fd4] hover:shadow-[0_15px_34px_rgba(37,99,235,.32)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">
          Explore our brands <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="relative mx-auto mt-12 max-w-[1000px] sm:mt-16">
        <div className="absolute -inset-x-8 -inset-y-8 -z-10 rounded-[40px] bg-gradient-to-r from-sky-100/70 via-white to-blue-100/70 blur-2xl" />
        <div className="overflow-hidden rounded-[26px] border border-white/90 bg-white/85 p-3 shadow-[0_30px_90px_rgba(40,91,150,.15)] backdrop-blur-xl sm:rounded-[32px] sm:p-5">
          <div className="flex items-center justify-between border-b border-slate-100 px-2 pb-3 sm:px-4 sm:pb-4">
            <div className="flex items-center gap-2.5"><span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-500 text-white shadow-md shadow-blue-500/20"><Boxes className="h-4 w-4" /></span><div><p className="text-xs font-extrabold tracking-tight text-slate-900">HelzerX Technologies</p><p className="mt-0.5 text-[9px] text-slate-400">Your digital world, connected</p></div></div>
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[9px] font-bold text-emerald-700 sm:inline-flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> Three brands. One ecosystem.</span>
          </div>
          <div className="grid gap-3 p-2 sm:grid-cols-3 sm:gap-4 sm:p-3">
            <div className="relative min-h-[155px] overflow-hidden rounded-[20px] border border-violet-100 bg-gradient-to-br from-white via-violet-50 to-indigo-100 p-4 sm:min-h-[190px] sm:p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-300/25 blur-xl" /><span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white text-violet-600 shadow-[0_8px_22px_rgba(109,40,217,.12)]"><Code2 className="h-5 w-5" /></span><p className="relative mt-5 font-display text-base font-extrabold tracking-tight text-slate-900">HelzerX Studio</p><p className="relative mt-1 text-[10px] leading-5 text-slate-500">Create. Design. Build.</p><div className="relative mt-4 flex gap-1.5"><span className="h-1.5 w-10 rounded-full bg-violet-400" /><span className="h-1.5 w-5 rounded-full bg-violet-200" /><span className="h-1.5 w-7 rounded-full bg-indigo-200" /></div></div>
            <div className="relative min-h-[155px] overflow-hidden rounded-[20px] border border-sky-100 bg-gradient-to-br from-white via-sky-50 to-blue-100 p-4 sm:min-h-[190px] sm:p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sky-300/30 blur-xl" /><span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white text-blue-600 shadow-[0_8px_22px_rgba(37,99,235,.12)]"><Cloud className="h-5 w-5" /></span><p className="relative mt-5 font-display text-base font-extrabold tracking-tight text-slate-900">HelzerX Cloud</p><p className="relative mt-1 text-[10px] leading-5 text-slate-500">Power your next idea.</p><div className="relative mt-4 flex items-end gap-1.5"><span className="h-3 w-2 rounded-sm bg-blue-200" /><span className="h-5 w-2 rounded-sm bg-blue-300" /><span className="h-7 w-2 rounded-sm bg-blue-500" /><span className="h-4 w-2 rounded-sm bg-sky-300" /><span className="h-6 w-2 rounded-sm bg-blue-400" /></div></div>
            <div className="relative min-h-[155px] overflow-hidden rounded-[20px] border border-orange-100 bg-gradient-to-br from-white via-amber-50 to-orange-100 p-4 sm:min-h-[190px] sm:p-5"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-orange-300/25 blur-xl" /><span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white text-orange-600 shadow-[0_8px_22px_rgba(234,88,12,.12)]"><ShoppingBag className="h-5 w-5" /></span><p className="relative mt-5 font-display text-base font-extrabold tracking-tight text-slate-900">HelzerX Shop</p><p className="relative mt-1 text-[10px] leading-5 text-slate-500">Find your next favourite.</p><div className="relative mt-4 flex gap-1.5"><span className="h-6 w-6 rounded-lg bg-white shadow-sm" /><span className="h-6 w-6 rounded-lg bg-orange-200/80" /><span className="h-6 w-6 rounded-lg bg-white shadow-sm" /><span className="h-6 w-6 rounded-lg bg-amber-300/70" /></div></div>
          </div>
        </div>
        <div className="mx-auto mt-5 flex max-w-[620px] items-center justify-center gap-2 text-center text-[10px] font-medium text-slate-400"><Sparkles className="h-3.5 w-3.5 text-blue-400" /> Independent experiences. One connected HelzerX vision.</div>
      </div>
    </section>
  );
};
