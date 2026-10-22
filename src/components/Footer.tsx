import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, Twitter, Github, Mail, Shield, ArrowUp, Globe2, Code2, ShoppingBag } from 'lucide-react';

const paymentBadges = [
  { name: 'Visa', label: 'VISA', className: 'font-black italic tracking-tight' },
  { name: 'Mastercard', label: 'mastercard', className: 'font-bold tracking-tight' },
  { name: 'American Express', label: 'AMEX', className: 'font-black tracking-tight' },
  { name: 'PayHere', label: 'PayHere', className: 'font-bold tracking-tight' },
];

export const Footer: React.FC = () => {
  const { siteSettings, navigateTo, currentPage } = useApp();
  const isCompanyHome = currentPage === 'home';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const linkClass = 'py-1 text-[#a6abb5] transition-colors duration-200 hover:text-white';
  const socialClass = 'group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.035] text-[#c3c7ce] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.09] hover:text-white';

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#08090b] px-3 pb-5 pt-8 text-sm text-[#a6abb5] sm:px-6 sm:pt-12 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-white/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-[1420px] overflow-hidden rounded-[26px] border border-white/[0.10] bg-[linear-gradient(145deg,#17191d_0%,#101114_46%,#090a0c_100%)] shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:rounded-[32px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(255,255,255,0.055),transparent_42%),radial-gradient(ellipse_at_100%_100%,rgba(148,163,184,0.045),transparent_40%)]" />

        <div className="relative grid gap-10 px-6 py-9 sm:px-9 sm:py-11 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] lg:gap-12 lg:px-12 lg:py-14">
          <div className="max-w-sm">
            <button type="button" onClick={() => navigateTo('home')} className="group flex min-h-11 items-center gap-3 text-left">
              <img
                src="https://www.image2url.com/r2/default/images/1791729894971-43a18b87-a5f7-427e-ac62-b6fee2ccd8f1.png"
                alt="HelzerX logo"
                className="h-10 w-10 rounded-xl object-contain transition-transform group-hover:scale-105"
                decoding="async"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                {isCompanyHome ? 'HelzerX Technologies' : (siteSettings.brandName || 'HelzerX')}
              </span>
            </button>
            <p className="mt-5 text-sm leading-6 text-[#a6abb5]">
              {isCompanyHome
                ? 'A connected ecosystem for digital creativity, cloud technology, and digital commerce — built around one HelzerX vision.'
                : 'High-performance game and cloud hosting, designed to keep your projects fast, protected, and ready to run.'}
            </p>
            {!isCompanyHome && (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.10] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-[#d0d3d9]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.55)]" />
                Support available around the clock
              </div>
            )}
          </div>

          <div>
            <h4 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {isCompanyHome ? (
                <>
                  <li><a href="#helzerx-products" className={linkClass}>Our brands</a></li>
                  <li><a href="https://studio.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}>HelzerX Studio</a></li>
                  <li><a href="https://cloud.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}>HelzerX Cloud</a></li>
                  <li><a href="https://shop.helzerx.cyou" target="_blank" rel="noopener noreferrer" className={linkClass}>HelzerX Shop</a></li>
                </>
              ) : (
                <>
                  <li><button onClick={() => navigateTo('about')} className={linkClass}>About</button></li>
                  <li><button onClick={() => navigateTo('plans')} className={linkClass}>Game plans</button></li>
                  <li><button onClick={() => navigateTo('services')} className={linkClass}>Cloud VPS</button></li>
                  <li><button onClick={() => navigateTo('locations')} className={linkClass}>Locations</button></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white">Company</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {isCompanyHome ? (
                <>
                  <li><span className={linkClass}>Creative experiences</span></li>
                  <li><span className={linkClass}>Cloud infrastructure</span></li>
                  <li><span className={linkClass}>Digital commerce</span></li>
                </>
              ) : (
                <>
                  <li><button onClick={() => navigateTo('hardware')} className={linkClass}>Hardware &amp; SLA</button></li>
                  <li><button onClick={() => navigateTo('blog')} className={linkClass}>Blog &amp; news</button></li>
                  <li><button onClick={() => navigateTo('support')} className={linkClass}>Support center</button></li>
                  <li><button onClick={() => navigateTo('admin')} className="inline-flex min-h-8 items-center gap-1.5 py-1 font-semibold text-[#d0d3d9] transition hover:text-white"><Shield className="h-3.5 w-3.5" />Admin portal</button></li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white">Stay connected</h4>
            <div className="flex flex-wrap items-center gap-2">
              {isCompanyHome ? (
                <>
                  <a href="https://studio.helzerx.cyou" target="_blank" rel="noopener noreferrer" aria-label="HelzerX Studio" title="HelzerX Studio" className={socialClass}><Code2 className="h-4 w-4" /></a>
                  <a href="https://cloud.helzerx.cyou" target="_blank" rel="noopener noreferrer" aria-label="HelzerX Cloud" title="HelzerX Cloud" className={socialClass}><Globe2 className="h-4 w-4" /></a>
                  <a href="https://shop.helzerx.cyou" target="_blank" rel="noopener noreferrer" aria-label="HelzerX Shop" title="HelzerX Shop" className={socialClass}><ShoppingBag className="h-4 w-4" /></a>
                </>
              ) : (
                <>
                  <a href={siteSettings.discordUrl || 'https://discord.com'} target="_blank" rel="noopener noreferrer" aria-label="Discord community" title="Discord" className={socialClass}><MessageSquare className="h-4 w-4" /></a>
                  <a href={siteSettings.twitterUrl || 'https://x.com'} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" title="X / Twitter" className={socialClass}><Twitter className="h-4 w-4" /></a>
                  <a href={siteSettings.githubUrl || 'https://github.com'} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={socialClass}><Github className="h-4 w-4" /></a>
                  <a href={`mailto:${siteSettings.supportEmail || 'support@helzerx.cyou'}`} aria-label="Email support" title="Email support" className={socialClass}><Mail className="h-4 w-4" /></a>
                </>
              )}
            </div>
            <p className="mt-4 text-xs leading-5 text-[#858b96]">
              {isCompanyHome ? 'Discover the HelzerX service that fits your next idea.' : 'Need a hand? Reach our team through the support desk.'}
            </p>
          </div>
        </div>

        <div className="relative mx-6 border-t border-white/[0.10] sm:mx-9 lg:mx-12">
          <div className="grid gap-5 py-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9da3ad]">We accept</p>
              <div className="flex flex-wrap items-center gap-2" aria-label="Payment methods">
                {paymentBadges.map((payment) => (
                  <div key={payment.name} title={payment.name} className="flex h-9 min-w-[62px] items-center justify-center rounded-lg border border-white/[0.12] bg-[#f4f5f6] px-3 text-[#17191d] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <span className={payment.className + (payment.name === 'Mastercard' ? ' text-[10px]' : ' text-xs')}>{payment.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-[10px] leading-4 text-[#777e89]">Available payment options may vary by product and checkout.</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-[#9da3ad]">
                <button onClick={() => navigateTo('legal')} className="transition hover:text-white">Terms &amp; policies</button>
                <button onClick={() => navigateTo('support')} className="transition hover:text-white">Help center</button>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium text-[#858b96]">
                <span>© {new Date().getFullYear()} {isCompanyHome ? 'HelzerX Technologies' : (siteSettings.brandName || 'HelzerX')}</span>
                <button type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top" className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-[#d0d3d9] transition hover:bg-white/[0.10] hover:text-white">
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
