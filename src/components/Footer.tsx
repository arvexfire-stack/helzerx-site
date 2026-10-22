import React from 'react';
import { useApp } from '../context/AppContext';
import { MessageSquare, Twitter, Github, Mail, Shield, ArrowUp, Globe2, Code2, ShoppingBag, LockKeyhole, Sparkles } from 'lucide-react';

const paymentMethods = [
  { name: 'Visa', src: 'https://cdn.simpleicons.org/visa/1A1F71', width: 'w-12' },
  { name: 'Mastercard', src: 'https://cdn.simpleicons.org/mastercard/EB001B', width: 'w-10' },
  { name: 'American Express', src: 'https://cdn.simpleicons.org/americanexpress/2E77BC', width: 'w-9' },
];

export const Footer: React.FC = () => {
  const { siteSettings, navigateTo, currentPage } = useApp();
  const isCompanyHome = currentPage === 'home';
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const linkClass = 'w-fit text-sm text-[#a5a8ae] transition-colors duration-200 hover:text-white';
  const socialClass = 'group flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-gradient-to-b from-white/[0.10] to-white/[0.025] text-[#c5c8ce] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_5px_14px_rgba(0,0,0,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:text-white';

  return (
    <footer className="relative isolate overflow-hidden bg-[#050505] px-3 pb-5 pt-10 text-sm text-[#a5a8ae] sm:px-6 sm:pt-14 lg:px-8">
      {/* Brushed-metal ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb]/70 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[min(1100px,120%)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(203,213,225,0.10)_0%,rgba(148,163,184,0.035)_36%,transparent_70%)] blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.055),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-[1420px]">
        <div className="relative overflow-hidden rounded-[26px] border border-white/[0.16] bg-[linear-gradient(145deg,#242629_0%,#17181a_18%,#0e0f10_54%,#191a1c_100%)] shadow-[0_32px_90px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(255,255,255,0.035)] sm:rounded-[32px]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(118deg,rgba(255,255,255,0.065)_0%,transparent_18%,transparent_70%,rgba(255,255,255,0.025)_100%),repeating-linear-gradient(115deg,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_5px)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="relative grid gap-10 px-6 py-9 sm:px-9 sm:py-11 lg:grid-cols-[1.35fr_0.7fr_0.8fr_1fr] lg:gap-12 lg:px-12 lg:py-14">
            <div className="max-w-sm">
              <button type="button" onClick={() => navigateTo('home')} className="group flex min-h-11 items-center gap-3 text-left">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-[#414348] via-[#1c1d20] to-[#090909] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_8px_18px_rgba(0,0,0,0.4)]">
                  <img
                    src="https://www.image2url.com/r2/default/images/1791729894971-43a18b87-a5f7-427e-ac62-b6fee2ccd8f1.png"
                    alt="HelzerX logo"
                    className="h-8 w-8 rounded-lg object-contain transition-transform group-hover:scale-105"
                    decoding="async"
                  />
                </span>
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  {isCompanyHome ? 'HelzerX Technologies' : (siteSettings.brandName || 'HelzerX')}
                </span>
              </button>
              <p className="mt-5 max-w-xs text-sm leading-6 text-[#b1b4bb]">
                {isCompanyHome
                  ? 'A connected ecosystem for digital creativity, cloud technology, and digital commerce — built around one HelzerX vision.'
                  : 'High-performance game and cloud hosting, designed to keep your projects fast, protected, and ready to run.'}
              </p>
              {!isCompanyHome && (
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.13] bg-black/25 px-3.5 py-2 text-xs font-medium text-[#d4d6da] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                  Support available around the clock
                </div>
              )}
            </div>

            <div>
              <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">Explore</h4>
              <ul className="flex flex-col gap-3">
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
              <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">Company</h4>
              <ul className="flex flex-col gap-3">
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
                    <li><button onClick={() => navigateTo('admin')} className="inline-flex items-center gap-2 text-sm font-medium text-[#c8cbd0] transition hover:text-white"><Shield className="h-3.5 w-3.5" />Admin portal</button></li>
                  </>
                )}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white">Stay connected</h4>
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
              <p className="mt-4 text-xs leading-5 text-[#898d95]">
                {isCompanyHome ? 'Discover the HelzerX service that fits your next idea.' : 'Need a hand? Reach our team through the support desk.'}
              </p>
            </div>
          </div>

          <div className="relative mx-6 border-t border-white/[0.13] sm:mx-9 lg:mx-12">
            <div className="grid gap-7 py-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-gradient-to-br from-white/10 to-white/[0.02] text-[#e5e7eb]"><LockKeyhole className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">We accept</p>
                    <p className="mt-0.5 text-[11px] text-[#858a93]">Secure checkout options</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2.5" aria-label="Payment methods">
                  {paymentMethods.map((payment) => (
                    <div key={payment.name} title={payment.name} className="flex h-11 min-w-[78px] items-center justify-center rounded-xl border border-white/20 bg-gradient-to-b from-[#f8f9fa] via-[#e8eaed] to-[#cfd2d6] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(0,0,0,0.10),0_5px_12px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-0.5">
                      <img src={payment.src} alt={payment.name} loading="lazy" decoding="async" className={payment.width + ' h-6 object-contain'} />
                    </div>
                  ))}
                  <a href="https://www.payhere.lk" target="_blank" rel="noopener noreferrer" title="PayHere" aria-label="PayHere payment gateway" className="flex h-11 min-w-[100px] items-center justify-center rounded-xl border border-white/20 bg-gradient-to-b from-[#f8f9fa] via-[#e8eaed] to-[#cfd2d6] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(0,0,0,0.10),0_5px_12px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-0.5">
                    <img src="https://www.payhere.lk/downloads/images/payhere_short_banner.png" alt="PayHere" loading="lazy" decoding="async" className="max-h-7 max-w-[84px] object-contain" />
                  </a>
                </div>
                <p className="mt-3 max-w-xl text-[10px] leading-4 text-[#777c85]">Payment methods shown depend on the payment options enabled for your checkout.</p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#a5a8ae]">
                  <button onClick={() => navigateTo('legal')} className="transition hover:text-white">Terms &amp; policies</button>
                  <button onClick={() => navigateTo('support')} className="transition hover:text-white">Help center</button>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-[#858a93]">
                  <span>© {new Date().getFullYear()} {isCompanyHome ? 'HelzerX Technologies' : (siteSettings.brandName || 'HelzerX')}</span>
                  <button type="button" onClick={scrollToTop} aria-label="Back to top" title="Back to top" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.11] to-white/[0.025] text-[#e5e7eb] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_10px_rgba(0,0,0,0.25)] transition hover:border-white/30 hover:text-white">
                    <ArrowUp className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>
    </footer>
  );
};
