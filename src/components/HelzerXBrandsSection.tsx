import React from 'react';
import { ArrowUpRight, ArrowRight, Code2, Cloud, ShoppingBag, Sparkles, ShieldCheck, Zap, LockKeyhole, CircleHelp, Gauge, MessageCircle, Server, CheckCircle2, Gift } from 'lucide-react';

const brands = [
  { name: 'HelzerX Studio', kicker: 'DESIGN · DEVELOPMENT · CREATIVITY', description: 'A home for digital experiences — from bold ideas and thoughtful design to modern websites and creative projects.', promise: 'Turn ideas into experiences', url: 'https://studio.helzerx.cyou', icon: Code2, accent: 'violet', number: '01', tags: ['Creative tools', 'Web experiences', 'Digital projects'] },
  { name: 'HelzerX Cloud', kicker: 'CLOUD · INFRASTRUCTURE · PERFORMANCE', description: 'Power your projects with dependable cloud technology, hosting solutions, and infrastructure built to grow with you.', promise: 'Build. Deploy. Scale.', url: 'https://cloud.helzerx.cyou', icon: Cloud, accent: 'blue', number: '02', tags: ['Cloud services', 'Hosting', 'Infrastructure'] },
  { name: 'HelzerX Shop', kicker: 'DISCOVER · EXPLORE · SHOP', description: 'Explore a thoughtfully curated shopping experience designed to make discovering products feel simple and enjoyable.', promise: 'Your next find is waiting', url: 'https://shop.helzerx.cyou', icon: ShoppingBag, accent: 'orange', number: '03', tags: ['Online store', 'Featured products', 'Easy discovery'] },
  { name: 'Free Hosting', kicker: 'START FREE · BUILD · GROW', description: 'Explore free hosting opportunities for your first project, with current eligibility and availability confirmed on the Cloud platform.', promise: 'Start building with less friction', url: 'https://cloud.helzerx.cyou', icon: Gift, accent: 'emerald', number: '04', tags: ['Beginner friendly', 'Project launch', 'Cloud platform'] },
];
const palette = {
  violet: { shell: 'from-violet-50 via-white to-indigo-100/90 border-violet-100 hover:border-violet-200', icon: 'bg-violet-100 text-violet-700', glow: 'bg-violet-300/30', line: 'bg-violet-500', pill: 'border-violet-100 bg-violet-50 text-violet-700', orb: 'border-violet-200' },
  blue: { shell: 'from-sky-50 via-white to-blue-100/90 border-sky-100 hover:border-blue-200', icon: 'bg-blue-100 text-blue-700', glow: 'bg-blue-300/30', line: 'bg-blue-500', pill: 'border-blue-100 bg-blue-50 text-blue-700', orb: 'border-blue-200' },
  orange: { shell: 'from-amber-50 via-white to-orange-100/90 border-orange-100 hover:border-orange-200', icon: 'bg-orange-100 text-orange-700', glow: 'bg-orange-300/30', line: 'bg-orange-500', pill: 'border-orange-100 bg-orange-50 text-orange-700', orb: 'border-orange-200' },
  emerald: { shell: 'from-emerald-50 via-white to-teal-100/90 border-emerald-100 hover:border-emerald-200', icon: 'bg-emerald-100 text-emerald-700', glow: 'bg-emerald-300/30', line: 'bg-emerald-500', pill: 'border-emerald-100 bg-emerald-50 text-emerald-700', orb: 'border-emerald-200' },
};

export const HelzerXBrandsSection: React.FC = () => (
  <div className="space-y-10 px-4 pb-12 sm:space-y-14 sm:px-6 lg:px-8">
    <section id="helzerx-products" className="mx-auto max-w-[1210px] scroll-mt-28">
      <div className="mx-auto mb-8 max-w-[650px] text-center sm:mb-11">
        <span className="eyebrow">Explore the HelzerX universe</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-[#111827] sm:text-5xl">Three brands.<br className="sm:hidden" /> Endless possibilities.</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-sm leading-7 text-[#788697] sm:text-base">Choose the experience that fits what you want to do. Each brand has its own purpose, brought together by HelzerX Technologies.</p>
      </div>
      <div className="brand-card-stage grid gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 md:gap-4 xl:gap-5">
        {brands.map(({ name, kicker, description, promise, url, icon: Icon, accent, number, tags }) => {
          const style = palette[accent as keyof typeof palette];
          return (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${name} (opens in a new tab)`}
              className={`brand-glass-card group relative isolate flex min-h-[430px] flex-col overflow-hidden rounded-[28px] border bg-gradient-to-br p-6 shadow-[0_18px_44px_rgba(38,82,139,.13)] transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_34px_76px_rgba(35,77,139,.24)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:p-7 lg:min-h-[450px] ${style.shell}`} style={{ "--brand-art-height": "88px" } as React.CSSProperties}>
              <div className={`brand-card-glow pointer-events-none absolute -right-14 -top-12 -z-10 h-48 w-48 rounded-full blur-2xl transition duration-500 group-hover:scale-125 ${style.glow}`} />
              <div className={`brand-card-art brand-card-art-${accent}`} aria-hidden="true">
                {accent === 'violet' && <><span className="art-window"><i /><i /><i /><b>&lt;/&gt;</b></span><span className="art-orbit art-orbit-one" /><span className="art-orbit art-orbit-two" /><span className="art-cursor" /></>}
                {accent === 'blue' && <><span className="art-cloud"><Cloud strokeWidth={1.5} /></span><span className="art-cloud-dot dot-one" /><span className="art-cloud-dot dot-two" /><span className="art-cloud-dot dot-three" /><span className="art-data-bar bar-one" /><span className="art-data-bar bar-two" /><span className="art-data-bar bar-three" /><span className="art-data-bar bar-four" /><span className="art-data-bar bar-five" /></>}
                {accent === 'orange' && <><span className="art-shop-bag"><ShoppingBag strokeWidth={1.5} /></span><span className="art-product product-one" /><span className="art-product product-two" /><span className="art-product product-three" /><span className="art-spark spark-one">✦</span><span className="art-spark spark-two">✧</span></>}
                {accent === 'emerald' && <><span className="art-free-gift"><Gift strokeWidth={1.4} /></span><span className="art-free-orbit free-orbit-one" /><span className="art-free-orbit free-orbit-two" /><span className="art-free-spark free-spark-one">✦</span><span className="art-free-spark free-spark-two">✧</span><span className="art-free-chip">FREE</span></>}
              </div>
              <div className="mt-[90px]">
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
      <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">Each card opens its dedicated HelzerX destination in a new tab. Free Hosting availability and eligibility are confirmed on the Cloud platform.</p>
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
    <section className="hx-trust-section relative mx-auto max-w-[1210px] overflow-hidden rounded-[32px] px-5 py-10 sm:px-9 sm:py-14 lg:px-12">
      <div className="hx-trust-light hx-trust-light-one" aria-hidden="true" />
      <div className="hx-trust-light hx-trust-light-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[720px] text-center">
        <span className="eyebrow">Trust is built, not claimed</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-[#111827] sm:text-5xl">Confidence in every <span className="hx-trust-gradient">connection.</span></h2>
        <p className="mx-auto mt-4 max-w-[590px] text-sm leading-7 text-slate-600 sm:text-base">We want every HelzerX experience to feel clear, thoughtful, and dependable. Here’s the standard we’re working toward — without invented certifications, fake customer counts, or unverified uptime promises.</p>
      </div>
      <div className="hx-trust-grid relative z-10 mt-9 grid gap-4 md:grid-cols-3 sm:mt-12">
        <article className="hx-trust-card hx-trust-card-blue">
          <span className="hx-trust-icon"><LockKeyhole className="h-5 w-5" /></span>
          <span className="hx-trust-kicker">01 / SECURITY</span>
          <h3>Privacy deserves care.</h3>
          <p>Use official HelzerX destinations, keep account details private, and review the service terms before sharing sensitive information.</p>
          <div className="hx-trust-bottom"><ShieldCheck className="h-4 w-4" /><span>Security-minded choices</span></div>
        </article>
        <article className="hx-trust-card hx-trust-card-violet">
          <span className="hx-trust-icon"><MessageCircle className="h-5 w-5" /></span>
          <span className="hx-trust-kicker">02 / TRANSPARENCY</span>
          <h3>Clear over complicated.</h3>
          <p>We aim to explain what each service does, what to expect, and where a feature is still being developed.</p>
          <div className="hx-trust-bottom"><CheckCircle2 className="h-4 w-4" /><span>Honest service information</span></div>
        </article>
        <article className="hx-trust-card hx-trust-card-cyan">
          <span className="hx-trust-icon"><Gauge className="h-5 w-5" /></span>
          <span className="hx-trust-kicker">03 / RELIABILITY</span>
          <h3>Improve with purpose.</h3>
          <p>Our goal is to make every update more useful and dependable. Published status information should be the source for service incidents.</p>
          <div className="hx-trust-bottom"><Server className="h-4 w-4" /><span>Reliability is ongoing work</span></div>
        </article>
      </div>
      <div className="hx-trust-note relative z-10 mt-6 flex items-start gap-3 rounded-2xl px-4 py-4 sm:items-center sm:px-5">
        <span className="hx-trust-note-icon"><ShieldCheck className="h-5 w-5" /></span>
        <p className="text-xs leading-6 text-slate-600"><b className="text-slate-800">A promise about promises:</b> we’ll only publish measurable claims — like uptime, customer totals, certifications, or testimonials — when they can be verified.</p>
      </div>
    </section>
    <section className="hx-journey-section mx-auto max-w-[1210px] px-1 py-7 sm:py-10">
      <div className="grid items-end gap-5 md:grid-cols-[1fr_.8fr]">
        <div><span className="eyebrow">The HelzerX approach</span><h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-[#111827] sm:text-4xl">Thoughtful today.<br />Better with every step.</h2></div>
        <p className="max-w-[490px] text-sm leading-7 text-slate-600">A good digital company isn’t built from effects alone. It’s built through useful services, careful improvements, and listening when something can be better.</p>
      </div>
      <div className="hx-journey-track mt-7 grid gap-4 sm:grid-cols-3">
        <article className="hx-journey-card"><span className="hx-journey-number">01</span><div><h3>Start with clarity</h3><p>Know which HelzerX destination fits your goal before you begin.</p></div><ArrowRight className="hx-journey-arrow h-4 w-4" /></article>
        <article className="hx-journey-card"><span className="hx-journey-number">02</span><div><h3>Build with care</h3><p>Focus on useful details, understandable experiences, and responsible updates.</p></div><ArrowRight className="hx-journey-arrow h-4 w-4" /></article>
        <article className="hx-journey-card"><span className="hx-journey-number">03</span><div><h3>Listen and improve</h3><p>Use genuine feedback to guide what should be clearer or work better next.</p></div><Sparkles className="hx-journey-arrow h-4 w-4" /></article>
      </div>
    </section>
    <section className="hx-faq-section relative mx-auto max-w-[1210px] overflow-hidden rounded-[30px] px-5 py-9 sm:px-9 sm:py-12 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
        <div>
          <span className="eyebrow">Questions, answered</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-[#111827] sm:text-4xl">A little more clarity goes a long way.</h2>
          <p className="mt-4 max-w-[420px] text-sm leading-7 text-slate-600">Quick answers to help you explore HelzerX with confidence.</p>
          <div className="hx-faq-side-note mt-6 flex items-center gap-3"><span><CircleHelp className="h-5 w-5" /></span><p>Still unsure? Check the relevant service page for its latest details before making a decision.</p></div>
        </div>
        <div className="hx-faq-list">
          <details className="hx-faq-item" open><summary><span>What is HelzerX Technologies?</span><span className="hx-faq-toggle">+</span></summary><p>HelzerX brings together focused digital experiences for creative development, cloud services, and digital products under one brand direction.</p></details>
          <details className="hx-faq-item"><summary><span>Which service should I choose?</span><span className="hx-faq-toggle">+</span></summary><p>Choose Studio for creative and development work, Cloud for hosting and infrastructure, or Shop to explore digital products. Visit each destination to confirm what is currently available.</p></details>
          <details className="hx-faq-item"><summary><span>How can I tell if an update or link is official?</span><span className="hx-faq-toggle">+</span></summary><p>Start from helzerx.cyou or the listed subdomains: studio.helzerx.cyou, cloud.helzerx.cyou, and shop.helzerx.cyou. Be cautious with look-alike domains and never share passwords in direct messages.</p></details>
          <details className="hx-faq-item"><summary><span>Can I rely on a published uptime or customer rating?</span><span className="hx-faq-toggle">+</span></summary><p>Only treat a metric as a promise when its measurement method and source are clearly published. This page does not claim a specific uptime percentage, certification, or customer rating.</p></details>
          <details className="hx-faq-item"><summary><span>How can I help HelzerX improve?</span><span className="hx-faq-toggle">+</span></summary><p>Share honest feedback through the official support route available on the relevant service. Customer stories should only be published with permission.</p></details>
        </div>
      </div>
    </section>
    <section className="hx-feedback-section relative mx-auto max-w-[1210px] overflow-hidden rounded-[32px] px-5 py-10 sm:px-9 sm:py-14 lg:px-12">
      <div className="hx-feedback-orb hx-feedback-orb-one" aria-hidden="true" />
      <div className="hx-feedback-orb hx-feedback-orb-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-[700px] text-center">
        <span className="eyebrow">Your voice matters</span>
        <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-[-.06em] text-[#111827] sm:text-5xl">Good experiences start with <span className="hx-feedback-gradient-text">real feedback.</span></h2>
        <p className="mx-auto mt-4 max-w-[570px] text-sm leading-7 text-slate-600 sm:text-base">We’re growing the HelzerX ecosystem and making room for honest customer stories. As experiences are shared, this space will highlight real feedback — not made-up ratings.</p>
      </div>
      <div className="hx-review-stage relative z-10 mt-9 grid gap-4 md:grid-cols-3 sm:mt-12">
        <article className="hx-review-card hx-review-card-one">
          <div className="hx-review-card-top"><span className="hx-review-icon hx-review-icon-blue"><ShieldCheck className="h-5 w-5" /></span><span className="hx-review-status">COMMUNITY FIRST</span></div>
          <div className="hx-review-stars" aria-label="Ratings will appear when reviews are collected">★★★★★</div>
          <h3>Honest experiences</h3><p>Real words from real people, added with permission as the community grows.</p>
          <div className="hx-review-card-foot"><span className="hx-review-avatar">HX</span><span><b>Customer stories</b><small>Coming as feedback arrives</small></span><Sparkles className="ml-auto h-4 w-4 text-blue-500" /></div>
        </article>
        <article className="hx-review-card hx-review-card-featured">
          <div className="hx-review-card-top"><span className="hx-review-icon hx-review-icon-violet"><Sparkles className="h-5 w-5" /></span><span className="hx-review-status">YOUR STORY NEXT</span></div>
          <div className="hx-review-quote-mark">“</div>
          <h3>Help shape what comes next.</h3><p>Have you tried a HelzerX service? Your feedback can help us improve what we build.</p>
          <div className="hx-review-card-foot"><span className="hx-review-avatar hx-review-avatar-violet">YOU</span><span><b>Your feedback</b><small>Valued at every stage</small></span><ArrowUpRight className="ml-auto h-4 w-4 text-violet-600" /></div>
        </article>
        <article className="hx-review-card hx-review-card-three">
          <div className="hx-review-card-top"><span className="hx-review-icon hx-review-icon-amber"><Zap className="h-5 w-5" /></span><span className="hx-review-status">ALWAYS IMPROVING</span></div>
          <div className="hx-review-pulse"><span /><span /><span /><span /><span /></div>
          <h3>Built to get better</h3><p>Feedback helps guide future updates across our creative, cloud, and digital experiences.</p>
          <div className="hx-review-card-foot"><span className="hx-review-avatar hx-review-avatar-amber"><Zap className="h-4 w-4" /></span><span><b>Next chapter</b><small>Growing together</small></span><Sparkles className="ml-auto h-4 w-4 text-amber-500" /></div>
        </article>
      </div>
      <p className="relative z-10 mt-6 text-center text-[11px] text-slate-500">We’ll only publish customer reviews that are genuine and shared with permission.</p>
    </section>
    <section className="mx-auto max-w-[1210px] px-2 py-5 text-center sm:py-8"><Sparkles className="mx-auto h-6 w-6 text-blue-500" /><p className="mt-3 font-display text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Welcome to HelzerX Technologies.</p><p className="mt-2 text-sm text-slate-500">Three focused experiences. One bigger vision.</p></section>
  </div>
);
