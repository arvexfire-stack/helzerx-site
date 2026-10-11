import React from 'react';
import { ArrowUpRight, Code2, Cloud, ShoppingBag, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const brands = [
  { name: 'HelzerX Studio', kicker: 'DESIGN · DEVELOPMENT · CREATIVITY', description: 'A home for digital experiences — from bold ideas and thoughtful design to modern websites and creative projects.', promise: 'Turn ideas into experiences', url: 'https://studio.helzerx.cyou', icon: Code2, accent: 'violet', number: '01', tags: ['Creative tools', 'Web experiences', 'Digital projects'] },
  { name: 'HelzerX Cloud', kicker: 'CLOUD · INFRASTRUCTURE · PERFORMANCE', description: 'Power your projects with dependable cloud technology, hosting solutions, and infrastructure built to grow with you.', promise: 'Build. Deploy. Scale.', url: 'https://cloud.helzerx.cyou', icon: Cloud, accent: 'blue', number: '02', tags: ['Cloud services', 'Hosting', 'Infrastructure'] },
  { name: 'HelzerX Shop', kicker: 'DISCOVER · EXPLORE · SHOP', description: 'Explore a thoughtfully curated shopping experience designed to make discovering products feel simple and enjoyable.', promise: 'Your next find is waiting', url: 'https://shop.helzerx.cyou', icon: ShoppingBag, accent: 'orange', number: '03', tags: ['Online store', 'Featured products', 'Easy discovery'] },
];
const palette = {
  violet: { shell: 'from-violet-50 via-white to-indigo-100/90 border-violet-100 hover:border-violet-200', icon: 'bg-violet-100 text-violet-700', glow: 'bg-violet-300/30', line: 'bg-violet-500', pill: 'border-violet-100 bg-violet-50 text-violet-700', orb: 'border-violet-200' },
  blue: { shell: 'from-sky-50 via-white to-blue-100/90 border-sky-100 hover:border-blue-200', icon: 'bg-blue-100 text-blue-700', glow: 'bg-blue-300/30', line: 'bg-blue-500', pill: 'border-blue-100 bg-blue-50 text-blue-700', orb: 'border-blue-200' },
  orange: { shell: 'from-amber-50 via-white to-orange-100/90 border-orange-100 hover:border-orange-200', icon: 'bg-orange-100 text-orange-700', glow: 'bg-orange-300/30', line: 'bg-orange-500', pill: 'border-orange-100 bg-orange-50 text-orange-700', orb: 'border-orange-200' },
};

export const HelzerXBrandsSection: React.FC = () => (
  <div className="space-y-10 px-4 pb-12 sm:space-y-14 sm:px-6 lg:px-8">
    <section id="helzerx-products" className="mx-auto max-w-[1210px] scroll-mt-28">
      <div className="mx-auto mb-8 max-w-[650px] text-center sm:mb-11">
        <span className="eyebrow">Explore the HelzerX universe</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-[#111827] sm:text-5xl">Three brands.<br className="sm:hidden" /> Endless possibilities.</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-sm leading-7 text-[#788697] sm:text-base">Choose the experience that fits what you want to do. Each brand has its own purpose, brought together by HelzerX Technologies.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3 md:gap-4 xl:gap-6">
        {brands.map(({ name, kicker, description, promise, url, icon: Icon, accent, number, tags }) => {
          const style = palette[accent as keyof typeof palette];
          return (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${name} (opens in a new tab)`}
              className={`brand-glass-card group relative isolate flex min-h-[390px] flex-col overflow-hidden rounded-[28px] border bg-gradient-to-br p-6 shadow-[0_18px_44px_rgba(38,82,139,.13)] transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_34px_76px_rgba(35,77,139,.24)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:p-7 lg:min-h-[420px] ${style.shell}`}>
              <div className={`brand-card-glow pointer-events-none absolute -right-14 -top-12 -z-10 h-48 w-48 rounded-full blur-2xl transition duration-500 group-hover:scale-125 ${style.glow}`} />
              <div className={`pointer-events-none absolute -right-8 top-24 -z-10 h-36 w-36 rounded-full border opacity-70 transition duration-500 group-hover:rotate-12 group-hover:scale-110 ${style.orb}`} />
              <div className="flex items-start justify-between">
                <span className={`brand-card-icon grid h-14 w-14 place-items-center rounded-[19px] shadow-sm transition duration-300 group-hover:rotate-[-5deg] group-hover:scale-110 ${style.icon}`}><Icon className="h-7 w-7" strokeWidth={1.8} /></span>
                <span className="font-mono text-xs font-bold tracking-[.18em] text-slate-300">{number}</span>
              </div>
              <div className="mt-8">
                <p className="text-[9px] font-extrabold tracking-[.16em] text-slate-400">{kicker}</p>
                <h3 className="mt-3 font-display text-[1.65rem] font-extrabold tracking-[-.055em] text-[#111827] sm:text-[1.8rem]">{name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
              <div className="brand-card-tags mt-5 flex flex-wrap gap-1.5">{tags.map(tag => <span key={tag} className={`rounded-full border px-2.5 py-1 text-[9px] font-semibold ${style.pill}`}>{tag}</span>)}</div>
              <div className="mt-auto pt-8">
                <div className="brand-card-promise mb-4 flex items-center gap-2"><span className={`h-1 w-9 rounded-full transition-all duration-500 group-hover:w-14 ${style.line}`} /><span className="text-[11px] font-bold text-slate-700">{promise}</span></div>
                <div className="flex items-center justify-between border-t border-slate-200/70 pt-4"><span className="text-xs font-extrabold text-slate-900">Explore {name.replace('HelzerX ', '')}</span><span className={`grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${style.icon}`}><ArrowUpRight className="h-4 w-4" /></span></div>
              </div>
            </a>
          );
        })}
      </div>
      <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">Each card opens its dedicated HelzerX destination in a new tab.</p>
    </section>
    <section className="relative mx-auto max-w-[1210px] overflow-hidden rounded-[30px] border border-white bg-gradient-to-r from-[#eef7ff] via-white to-[#f2f0ff] px-6 py-9 shadow-[0_18px_55px_rgba(48,88,145,.07)] sm:px-10 sm:py-12 lg:px-14">
      <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
        <div><span className="eyebrow">One parent brand</span><h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-[-.06em] text-[#111827] sm:text-4xl">Built around one idea:<br />make digital life better.</h2><p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-600">HelzerX Technologies brings together creative work, cloud infrastructure, and commerce in one growing ecosystem — with a clear destination for every experience.</p></div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[{ icon: Sparkles, title: 'Made for ideas', copy: 'Space to create and experiment.', color: 'text-violet-600 bg-violet-100' }, { icon: ShieldCheck, title: 'Built with care', copy: 'Thoughtful experiences at every step.', color: 'text-blue-600 bg-blue-100' }, { icon: Zap, title: 'Ready for what’s next', copy: 'A connected ecosystem that can grow.', color: 'text-amber-600 bg-amber-100' }].map(({ icon: Icon, title, copy, color }) => (
            <div key={title} className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/75 p-4 shadow-sm backdrop-blur-sm"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${color}`}><Icon className="h-4 w-4" /></span><span><b className="block text-xs font-bold text-slate-800">{title}</b><small className="mt-1 block text-[10px] leading-4 text-slate-500">{copy}</small></span></div>
          ))}
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-[1210px] px-2 py-5 text-center sm:py-8"><Sparkles className="mx-auto h-6 w-6 text-blue-500" /><p className="mt-3 font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Welcome to HelzerX Technologies.</p><p className="mt-2 text-sm text-slate-500">Three focused experiences. One bigger vision.</p></section>
  </div>
);
