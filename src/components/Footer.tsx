import React from 'react';
import { useApp } from '../context/AppContext';
import { Github, Mail, Shield, ArrowUp, Globe2, Code2, ShoppingBag, LockKeyhole, CreditCard, Smartphone, Landmark, ChevronRight, Cloud, CheckCircle2 } from 'lucide-react';

const paymentMethods = [
  { name: 'Visa', src: 'https://cdn.simpleicons.org/visa/1A1F71', width: 'w-12' },
  { name: 'Mastercard', src: 'https://cdn.simpleicons.org/mastercard/EB001B', width: 'w-10' },
  { name: 'American Express', src: 'https://cdn.simpleicons.org/americanexpress/2E77BC', width: 'w-9' },
  { name: 'Discover', src: 'https://cdn.simpleicons.org/discover/FF6000', width: 'w-12' },
  { name: 'Diners Club', src: 'https://cdn.simpleicons.org/dinersclub/0079BE', width: 'w-10' },
];

export const Footer: React.FC = () => {
  const { siteSettings, navigateTo, currentPage } = useApp();
  const isCompanyHome = currentPage === 'home';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const linkClass = 'group inline-flex items-center gap-2.5 text-sm text-[#b7bac2] transition-colors duration-200 hover:text-white';
  const socialClass = 'group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.14] bg-white/[0.035] text-[#d8dbe2] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] hover:text-white';


  return (
    <footer className="hx-rgb-footer relative isolate overflow-hidden px-5 pb-5 pt-12 text-sm text-[#b7bac2] sm:px-8 sm:pt-14 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/[0.055] blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-sky-400/[0.045] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1500px]">
        <div className="grid gap-11 border-b border-white/[0.13] pb-10 md:grid-cols-2 xl:grid-cols-[1.25fr_.72fr_.9fr_1.25fr] xl:gap-10 xl:pb-12">
          <section className="min-w-0">
            <button type="button" onClick={() => navigateTo('home')} className="group flex min-h-12 items-center gap-3 text-left">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-[#26282c] to-[#070707] shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_8px_22px_rgba(0,0,0,.45)]">
                <img src="https://www.image2url.com/r2/default/images/1791729894971-43a18b87-a5f7-427e-ac62-b6fee2ccd8f1.png" alt="HelzerX logo" className="h-9 w-9 rounded-lg object-contain brightness-0 invert transition-transform group-hover:scale-105" decoding="async" />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">{isCompanyHome ? 'HelzerX' : (siteSettings.brandName || 'HelzerX')}<span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.27em] text-[#9da1aa]">{isCompanyHome ? 'Technologies' : 'Cloud & Hosting'}</span></span>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#b6bac3]">{isCompanyHome ? 'Powering Your Digital Future. Premium cloud solutions, modern development and digital products — all in one place.' : 'High-performance game and cloud hosting, designed to keep your projects fast, protected, and ready to run.'}</p>
            {isCompanyHome && <div className="mt-5 flex flex-wrap gap-2">
              <a href="https://cloud.helzerx.cyou" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.035] px-3.5 py-2.5 text-xs font-semibold text-[#e4e6eb] transition hover:border-white/30 hover:bg-white/[0.08]"><Cloud className="h-4 w-4" />Cloud</a>
              <a href="https://studio.helzerx.cyou" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.035] px-3.5 py-2.5 text-xs font-semibold text-[#e4e6eb] transition hover:border-white/30 hover:bg-white/[0.08]"><Code2 className="h-4 w-4" />Studio</a>
              <a href="https://shop.helzerx.cyou" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/[0.16] bg-white/[0.035] px-3.5 py-2.5 text-xs font-semibold text-[#e4e6eb] transition hover:border-white/30 hover:bg-white/[0.08]"><ShoppingBag className="h-4 w-4" />Shop</a>
            </div>}
          </section>

          <section>
            <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3.5">
              {isCompanyHome ? <>
                <li><a href="#helzerx-products" className={linkClass}><ChevronRight className="h-3.5 w-3.5 text-[#9ca3af] transition-transform group-hover:translate-x-0.5" />Home / Brands</a></li>
                <li><a href="https://cloud.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}><ChevronRight className="h-3.5 w-3.5 text-[#9ca3af] transition-transform group-hover:translate-x-0.5" />Cloud</a></li>
                <li><a href="https://studio.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}><ChevronRight className="h-3.5 w-3.5 text-[#9ca3af] transition-transform group-hover:translate-x-0.5" />Studio</a></li>
                <li><a href="https://shop.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}><ChevronRight className="h-3.5 w-3.5 text-[#9ca3af] transition-transform group-hover:translate-x-0.5" />Shop</a></li>
                <li><a href="https://status.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}><ChevronRight className="h-3.5 w-3.5 text-[#9ca3af] transition-transform group-hover:translate-x-0.5" />Status</a></li>
              </> : <>
                <li><button onClick={() => navigateTo('about')} className={linkClass}><ChevronRight className="h-3.5 w-3.5" />About</button></li>
                <li><button onClick={() => navigateTo('plans')} className={linkClass}><ChevronRight className="h-3.5 w-3.5" />Game plans</button></li>
                <li><button onClick={() => navigateTo('services')} className={linkClass}><ChevronRight className="h-3.5 w-3.5" />Cloud VPS</button></li>
                <li><button onClick={() => navigateTo('locations')} className={linkClass}><ChevronRight className="h-3.5 w-3.5" />Locations</button></li>
              </>}
              <li><button onClick={() => navigateTo('support')} className={linkClass}><ChevronRight className="h-3.5 w-3.5" />Support</button></li>
            </ul>
          </section>

          <section>
            <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">Follow & Contact</h4>
            <div className="flex flex-wrap gap-2">
              <a href={siteSettings.discordUrl || 'https://discord.com'} target="_blank" rel="noopener noreferrer" aria-label="Discord community" title="Discord" className={socialClass}><img src="https://cdn.simpleicons.org/discord/FFFFFF" alt="" className="h-[18px] w-[18px]" /></a>
              <a href={siteSettings.twitterUrl || 'https://x.com'} target="_blank" rel="noopener noreferrer" aria-label="X" title="X" className={socialClass}><img src="https://cdn.simpleicons.org/x/FFFFFF" alt="" className="h-[17px] w-[17px]" /></a>
              <a href={siteSettings.githubUrl || 'https://github.com'} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={socialClass}><Github className="h-[17px] w-[17px]" /></a>
              <a href={`mailto:${siteSettings.supportEmail || 'support@helzerx.cyou'}`} aria-label="Email support" title="Email support" className={socialClass}><Mail className="h-[17px] w-[17px]" /></a>
            </div>
            <div className="mt-6 border-t border-white/[0.12] pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e5e7eb]">Contact</p>
              <a href={`mailto:${siteSettings.supportEmail || 'support@helzerx.cyou'}`} className="mt-3 inline-flex items-center gap-2.5 text-sm text-[#c5c9d1] transition hover:text-white"><Mail className="h-4 w-4 text-[#aeb4bf]" />{siteSettings.supportEmail || 'support@helzerx.cyou'}</a>
              <p className="mt-3 text-xs leading-5 text-[#9297a1]">We're here to help.<br />Get in touch anytime.</p>
            </div>
          </section>

          <section className="min-w-0">
            <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">Payment Methods</h4>
            <div className="flex flex-wrap gap-2" aria-label="Payment methods">
              {paymentMethods.map((payment) => <div key={payment.name} title={payment.name} className="flex h-10 min-w-[72px] items-center justify-center rounded-lg border border-white/[0.17] bg-[#080808] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,.05)]"><img src={payment.src} alt={payment.name} loading="lazy" decoding="async" className={payment.width + ' h-5 object-contain'} /></div>)}
              <a href="https://www.payhere.lk" target="_blank" rel="noopener noreferrer" title="PayHere" aria-label="PayHere payment gateway" className="flex h-10 min-w-[88px] items-center justify-center rounded-lg border border-white/[0.17] bg-[#080808] px-3"><img src="https://www.payhere.lk/downloads/images/payhere_short_banner.png" alt="PayHere" loading="lazy" decoding="async" className="max-h-6 max-w-[76px] object-contain" /></a>
            </div>
            <div className="mt-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d6d8de]">Local Payments</p>
              <div className="flex flex-wrap gap-2">
                {[{name:'HelaPay',icon:<CreditCard className="h-3.5 w-3.5" />},{name:'Frimi',icon:<Smartphone className="h-3.5 w-3.5" />},{name:'Genie',icon:<Smartphone className="h-3.5 w-3.5" />},{name:'iPay',icon:<Smartphone className="h-3.5 w-3.5" />},{name:'Q Plus',icon:<Smartphone className="h-3.5 w-3.5" />},{name:'Sampath Vishwa',icon:<Landmark className="h-3.5 w-3.5" />}].map((method) => <span key={method.name} className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.13] bg-white/[0.025] px-2.5 py-2 text-[11px] font-medium text-[#d2d5dc]">{method.icon}{method.name}</span>)}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#aeb4bf]"><span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.15] bg-white/[0.035]"><LockKeyhole className="h-3.5 w-3.5" /></span>Secure checkout options</div>
          </section>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-[#a6abb5] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} {isCompanyHome ? 'HelzerX Technologies' : (siteSettings.brandName || 'HelzerX')}. All rights reserved.</span>
            <button onClick={() => navigateTo('legal')} className="transition hover:text-white">Privacy &amp; Terms</button>
            <button onClick={() => navigateTo('support')} className="transition hover:text-white">Help Center</button>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.13] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-[#c9cdd5] md:self-auto"><CheckCircle2 className="h-3.5 w-3.5 text-[#c5c9d2]" />Secure &amp; Trusted</div>
        </div>
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-transparent" />
      </div>
    </footer>
  );
};
