import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Github,
  Mail,
  ArrowUp,
  Code2,
  ShoppingBag,
  Gift,
  LockKeyhole,
  ChevronRight,
  Cloud,
  Server,
  Gamepad2,
  Activity,
  Send,
  Check,
  ExternalLink,
} from 'lucide-react';

const realPaymentLogos = [
  {
    name: 'Visa',
    src: 'https://cdn.simpleicons.org/visa/1A1F71',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'Mastercard',
    src: 'https://cdn.simpleicons.org/mastercard',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'American Express',
    src: 'https://cdn.simpleicons.org/americanexpress/006FCF',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'Discover',
    src: 'https://cdn.simpleicons.org/discover/FF6000',
    className: 'h-5 sm:h-6 w-auto object-contain',
  },
  {
    name: 'PayPal',
    src: 'https://cdn.simpleicons.org/paypal/00457C',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'Apple Pay',
    src: 'https://cdn.simpleicons.org/applepay/FFFFFF',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'Google Pay',
    src: 'https://cdn.simpleicons.org/googlepay',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'PayHere LK',
    src: 'https://www.payhere.lk/downloads/images/payhere_short_banner.png',
    className: 'h-6 sm:h-7 w-auto object-contain brightness-105',
  },
  {
    name: 'Bitcoin',
    src: 'https://cdn.simpleicons.org/bitcoin/F7931A',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
  {
    name: 'Tether (USDT)',
    src: 'https://cdn.simpleicons.org/tether/26A17B',
    className: 'h-6 sm:h-7 w-auto object-contain',
  },
];

export const Footer: React.FC = () => {
  const { siteSettings, navigateTo, currentPage } = useApp();
  const isCompanyHome = currentPage === 'home';
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass =
    'group flex items-center gap-2 text-sm text-[#9da3af] transition-all duration-200 hover:text-white hover:translate-x-1';

  return (
    <footer className="hx-rgb-footer relative isolate w-full overflow-hidden text-slate-300">
      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* ========================================================= */}
        {/* MAIN NAVIGATION GRID                                      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Identity & Ecosystem */}
          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="group flex items-center gap-3.5 text-left transition"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-b from-[#262832] via-[#161820] to-[#090a0e] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_24px_rgba(0,0,0,0.7)] transition-transform group-hover:scale-105">
                <img
                  src="https://www.image2url.com/r2/default/images/1791729894971-43a18b87-a5f7-427e-ac62-b6fee2ccd8f1.png"
                  alt="HelzerX logo"
                  className="h-full w-full object-contain brightness-0 invert"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-extrabold tracking-tight text-white">
                    {siteSettings.brandName || 'HelzerX Cloud'}
                  </span>
                  <span className="rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-200">
                    Pro
                  </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                  {isCompanyHome ? 'Technologies · Cloud' : 'High-Performance Cloud'}
                </p>
              </div>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Precision-engineered cloud compute, game server hosting, and developer infrastructure built with
              enterprise AMD Zen 5 hardware and global low-latency transit.
            </p>

            <div
              onClick={() => navigateTo('status')}
              className="mt-5 flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-gradient-to-b from-[#181a24] to-[#0c0d12] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition hover:border-white/25 hover:shadow-[0_8px_20px_rgba(0,0,0,0.7)]"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-semibold text-slate-200">All Systems Operational</span>
              </div>
              <span className="text-[11px] font-bold text-slate-300">99.99% SLA &rarr;</span>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Official Portals</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                <a
                  href="https://cloud.helzerx.cyou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:border-white/35 hover:-translate-y-0.5 hover:text-white"
                >
                  <Cloud className="h-3.5 w-3.5 text-slate-300" />
                  Cloud Platform
                </a>
                <a
                  href="https://studio.helzerx.cyou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:border-white/35 hover:-translate-y-0.5 hover:text-white"
                >
                  <Code2 className="h-3.5 w-3.5 text-slate-300" />
                  Studio
                </a>
                <a
                  href="https://shop.helzerx.cyou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:border-white/35 hover:-translate-y-0.5 hover:text-white"
                >
                  <ShoppingBag className="h-3.5 w-3.5 text-slate-300" />
                  Shop
                </a>
                <a
                  href="https://free.helzerx.cyou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:border-white/35 hover:-translate-y-0.5 hover:text-white"
                >
                  <Gift className="h-3.5 w-3.5 text-slate-300" />
                  Free Hosting
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={siteSettings.discordUrl || 'https://discord.gg/helzerxcloud'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord Community"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-[#222530] to-[#12141a] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white"
              >
                <img src="https://cdn.simpleicons.org/discord/FFFFFF" alt="Discord" className="h-4 w-4" />
              </a>
              <a
                href={siteSettings.twitterUrl || 'https://twitter.com/helzerxcloud'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-[#222530] to-[#12141a] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white"
              >
                <img src="https://cdn.simpleicons.org/x/FFFFFF" alt="X" className="h-3.5 w-3.5" />
              </a>
              <a
                href={siteSettings.githubUrl || 'https://github.com/helzerxcloud'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-[#222530] to-[#12141a] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteSettings.supportEmail || 'support@helzerx.cloud'}`}
                aria-label="Email Support"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-[#222530] to-[#12141a] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-1 hover:border-white/40 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Game Servers */}
          <div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4 text-slate-300" />
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                Game Hosting
              </h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-minecraft')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Minecraft Server</span>
                  <span className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    Zen 5
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-game-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Rust Dedicated</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-game-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Palworld Servers</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-game-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>ARK: Survival Ascended</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-game-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Counter-Strike 2</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-game-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>FiveM GTA V Roleplay</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-game-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Garry&apos;s Mod</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('games')}
                  className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 transition hover:text-white"
                >
                  <span>Browse all 100+ Games</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Cloud & Compute */}
          <div>
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-slate-300" />
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                Cloud &amp; Compute
              </h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-vps')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>High-Frequency VPS</span>
                  <span className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    NVMe
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-vds')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Virtual Dedicated (VDS)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Bare-Metal Dedicated</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-web-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>cPanel Web Hosting</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('services-bot-hosting')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Discord Bot Hosting</span>
                  <span className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    $1.99
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('domains')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Domain Registration</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('locations')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Datacenter Locations</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('hardware')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Hardware Architecture</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Support */}
          <div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-slate-300" />
              <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-white">
                Platform &amp; Help
              </h3>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('client-dashboard')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Client Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('billing')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Billing &amp; Invoices</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('support')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Support Tickets</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('knowledgebase')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Knowledgebase</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('affiliates')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Affiliate Program</span>
                  <span className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                    15%
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('partners')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Official Partners</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('about')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>About HelzerX</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('contact')}
                  className={linkClass}
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
                  <span>Contact Sales</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================= */}
        {/* NEWSLETTER STRIP (STREAMLINED 3D BAR)                     */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-6 border-b border-white/[0.08] py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h4 className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
              Stay Informed on Hardware Upgrades &amp; Node Deployments
            </h4>
            <p className="mt-1 text-xs text-slate-400">
              Receive quarterly notifications about AMD Zen 5 upgrades, datacenter expansions, and release notes. Zero
              spam.
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-gradient-to-b from-[#181a24] to-[#0c0d12] px-4 py-2.5 text-xs text-slate-200">
                <Check className="h-4 w-4 text-white shrink-0" />
                <span>Thank you for subscribing! Your confirmation has been sent.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full min-w-0 rounded-xl border border-white/15 bg-gradient-to-b from-[#0c0d12] to-[#12141c] px-4 py-2 text-xs text-white placeholder-slate-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/20"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white bg-gradient-to-b from-white via-slate-100 to-slate-300 px-4 py-2 text-xs font-black text-slate-950 shadow-[0_4px_14px_rgba(255,255,255,0.15),inset_0_1px_0_#fff] transition hover:from-white hover:to-white active:scale-95"
                >
                  <span>Subscribe</span>
                  <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CENTERED "WE ACCEPT" REAL PAYMENT LOGOS (NO BG)           */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center justify-center border-b border-white/[0.08] py-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
            We Accept
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {realPaymentLogos.map((gateway) => (
              <div
                key={gateway.name}
                title={gateway.name}
                className="group flex items-center justify-center transition-transform duration-200 hover:scale-115"
              >
                <img
                  src={gateway.src}
                  alt={gateway.name}
                  loading="lazy"
                  className={`${gateway.className} filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]`}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-[11px] font-medium text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <LockKeyhole className="h-3.5 w-3.5 text-slate-400" />
              <span>256-Bit SSL/TLS</span>
            </span>
            <span>&bull;</span>
            <span>PCI-DSS Compliant</span>
            <span>&bull;</span>
            <span>Corero 3.2Tbps DDoS Filtration</span>
            <span>&bull;</span>
            <span>Instant &lt; 60s Activation</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COPYRIGHT & LEGAL NAVIGATION BAR                          */}
        {/* ========================================================= */}
        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <span>
              &copy; {new Date().getFullYear()} {isCompanyHome ? 'HelzerX Technologies (Pvt) Ltd' : (siteSettings.brandName || 'HelzerX Cloud')}.
              All rights reserved.
            </span>
            <span className="hidden text-slate-600 sm:inline">&bull;</span>
            <div className="flex flex-wrap items-center gap-3 text-slate-400">
              <button
                type="button"
                onClick={() => navigateTo('terms')}
                className="transition hover:text-white"
              >
                Terms
              </button>
              <span className="text-slate-600">&bull;</span>
              <button
                type="button"
                onClick={() => navigateTo('privacy')}
                className="transition hover:text-white"
              >
                Privacy
              </button>
              <span className="text-slate-600">&bull;</span>
              <button
                type="button"
                onClick={() => navigateTo('sla')}
                className="transition hover:text-white"
              >
                SLA
              </button>
              <span className="text-slate-600">&bull;</span>
              <button
                type="button"
                onClick={() => navigateTo('acceptable-use')}
                className="transition hover:text-white"
              >
                Acceptable Use
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-[11px] text-slate-500">
              Nodes: CMB &bull; FRA &bull; DAL &bull; SIN &bull; LON &bull; SYD
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              title="Scroll to top"
              className="group flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-b from-[#222530] to-[#101218] text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_12px_rgba(0,0,0,0.6)] transition-all hover:border-white/35 hover:text-white hover:-translate-y-0.5 active:scale-95"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
