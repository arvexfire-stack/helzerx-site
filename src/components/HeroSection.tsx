import React, { useMemo, useState, useRef, useCallback } from 'react';
import {
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  Globe2,
  HardDrive,
  Server,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Terminal,
  RefreshCw,
  Wifi,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const {
    navigateTo,
    plans,
    locations,
    deployedServers,
    siteSettings,
    setIsAuthModalOpen,
    setAuthModalTab,
  } = useApp();

  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activePlans = useMemo(
    () => (plans || []).filter((plan) => plan.status !== 'inactive'),
    [plans]
  );

  const featuredPlan =
    activePlans.find((plan) => plan.featured || plan.popular) ||
    activePlans[0] ||
    null;

  const onlineLocations = useMemo(
    () => (locations || []).filter((location) => location.status !== 'maintenance'),
    [locations]
  );

  const runningServers = useMemo(
    () => (deployedServers || []).filter((server) => server.status === 'running'),
    [deployedServers]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 15, y: y * 15 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate min-h-[760px] sm:min-h-[860px] lg:min-h-[920px] overflow-hidden bg-[#050608] text-white selection:bg-blue-600 selection:text-white"
    >
      {/* =========================================================================
          BACKGROUND ATMOSPHERE MATCHING REFERENCE
          1. Deep pitch black background
          2. Left luminous glowing warm amber/orange sphere nebula
          3. Right electric luminous cyan/blue sphere nebula
          4. Bottom monumental curved glowing white/blue horizon arc
      ========================================================================== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Left Warm Amber/Orange Glowing Light Orb */}
        <div
          className="absolute left-[38%] top-[14%] sm:left-[42%] sm:top-[12%] h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] -translate-x-1/2 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 120, 24, 0.95) 0%, rgba(255, 85, 0, 0.65) 35%, rgba(245, 158, 11, 0.25) 60%, transparent 78%)',
            filter: 'blur(75px)',
            transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />

        {/* Right Electric Cyan/Blue Glowing Light Orb */}
        <div
          className="absolute right-[2%] top-[18%] sm:right-[6%] sm:top-[15%] h-[360px] w-[360px] sm:h-[520px] sm:w-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(14, 165, 233, 0.95) 0%, rgba(37, 99, 235, 0.7) 40%, rgba(56, 189, 248, 0.2) 65%, transparent 80%)',
            filter: 'blur(80px)',
            transform: `translate(${mouseOffset.x * -0.4}px, ${mouseOffset.y * -0.4}px)`,
            transition: 'transform 0.4s ease-out',
          }}
        />

        {/* Subtle center ambient blur bridge */}
        <div
          className="absolute left-[60%] top-[40%] h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[100px]"
        />

        {/* Monumental Bottom Curved Luminous Horizon Floor (exactly as in screenshot) */}
        <div className="absolute inset-x-[-25%] bottom-[-320px] sm:bottom-[-380px] h-[480px] sm:h-[560px] rounded-[50%_50%_0_0] bg-gradient-to-t from-white via-blue-100/80 to-transparent blur-[50px] opacity-80" />
        <div className="absolute inset-x-[-15%] bottom-[-280px] sm:bottom-[-330px] h-[360px] sm:h-[420px] rounded-[50%_50%_0_0] bg-gradient-to-t from-white via-cyan-100/90 to-transparent opacity-95 shadow-[0_-30px_100px_rgba(255,255,255,0.9),0_-60px_160px_rgba(56,189,248,0.55)]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-4 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* =========================================================================
              HERO LEFT COLUMN: TYPOGRAPHY + ACTIONS (MATCHING SCREENSHOT LAYOUT)
          ========================================================================== */}
          <div className="z-10 lg:col-span-6 lg:pr-4">
            
            {/* Monumental Clean Bold Headline */}
            <h1 className="font-display text-[46px] sm:text-6xl lg:text-[72px] xl:text-[78px] font-black tracking-[-0.04em] leading-[1.03] text-white">
              {siteSettings.heroTitleLine1 ? (
                <>
                  {siteSettings.heroTitleLine1}
                  <br />
                  {siteSettings.heroTitleLine2 || 'with a single cloud'}
                </>
              ) : (
                <>
                  Deploy, compute, scale<br />
                  your servers with<br />
                  a single cloud
                </>
              )}
            </h1>

            {/* Action Row: Primary Button + Modern Explanatory Copy Side-by-Side */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              {/* Electric Blue Primary Button matching screenshot */}
              <button
                type="button"
                onClick={() => navigateTo('plans')}
                className="inline-flex items-center justify-center rounded-2xl bg-[#0070f3] hover:bg-[#0060df] active:bg-[#0050cf] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-[0_10px_32px_rgba(0,112,243,0.45)] hover:shadow-[0_14px_42px_rgba(0,112,243,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 group"
              >
                <span>{siteSettings.heroCtaText || 'Get started'}</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Subtitle placed alongside matching the screenshot */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-slate-400 max-w-xs sm:max-w-[280px]">
                {siteSettings.heroSubtitle ||
                  'The modern way to control your game servers and cloud infrastructure with just one app.'}
              </p>
            </div>

            {/* Trust and Technical Performance Markers (Unboxed quiet text metadata) */}
            <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs font-medium text-slate-400 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                <span className="text-slate-300 font-semibold">{onlineLocations.length > 0 ? `${onlineLocations.length} Locations Active` : '32+ Edge Regions'}</span>
              </div>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>99.99% Guaranteed SLA</span>
              </div>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>Sub-millisecond NVMe</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              HERO RIGHT COLUMN: 3D ANGLED SMARTPHONE + FLOATING CARDS
              Matches the exact 3D composition in the uploaded screenshot:
              - Angled Phone floating in space
              - Brushed Titanium Card floating in 3D in front of phone
              - White Analytics Card floating in 3D overlapping lower-right
          ========================================================================== */}
          <div className="relative z-10 lg:col-span-6 flex items-center justify-center lg:justify-end pb-8 sm:pb-12">
            
            {/* 3D Perspective Container */}
            <div
              className="relative w-[340px] sm:w-[410px] lg:w-[440px] h-[580px] sm:h-[650px]"
              style={{
                perspective: '1400px',
                transformStyle: 'preserve-3d',
              }}
            >
              
              {/* 3D ROTATED SMARTPHONE */}
              <div
                className="absolute inset-0 transition-transform duration-300 ease-out"
                style={{
                  transform: `perspective(1400px) rotateY(${-22 + mouseOffset.x * 0.4}deg) rotateX(${12 - mouseOffset.y * 0.4}deg) rotateZ(3deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                
                {/* Smartphone Chassis Frame */}
                <div className="relative h-full w-full rounded-[48px] sm:rounded-[54px] border-[8px] sm:border-[10px] border-[#162135] bg-[#0c101a] p-1.5 shadow-[0_40px_100px_rgba(0,0,0,0.95),0_0_60px_rgba(14,165,233,0.22)]">
                  
                  {/* Subtle rim reflection gradient */}
                  <div className="pointer-events-none absolute inset-0 rounded-[44px] sm:rounded-[50px] border border-cyan-400/20" />

                  {/* Phone Screen Canvas */}
                  <div className="relative h-full w-full overflow-hidden rounded-[38px] sm:rounded-[44px] bg-[#fbfbfe] text-slate-900 shadow-inner flex flex-col justify-between p-4 sm:p-5 pt-3">
                    
                    {/* Status Bar + Dynamic Island */}
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-800 px-3 pt-1">
                        <span>9:41</span>
                        {/* Dynamic Island Pill */}
                        <div className="h-5 w-24 sm:w-28 rounded-full bg-slate-950 flex items-center justify-end px-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Wifi className="h-3 w-3" />
                          <div className="h-2 w-3 rounded-xs border border-slate-700 p-0.5">
                            <div className="h-full w-full bg-slate-700" />
                          </div>
                        </div>
                      </div>

                      {/* Phone App User Header */}
                      <div className="mt-4 flex items-center justify-between px-2">
                        <div className="flex items-center gap-2.5">
                          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5">
                            <div className="h-full w-full rounded-full bg-white flex items-center justify-center font-black text-xs text-blue-700 font-display">
                              AK
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">HelzerX Cloud</p>
                            <p className="text-xs font-bold text-slate-900">Antonio K.</p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600 border border-emerald-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          Online
                        </span>
                      </div>

                      {/* Main Balance Display matching screenshot "$57 939.00" */}
                      <div className="mt-5 px-2">
                        <div className="flex items-baseline justify-between">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Compute Balance</p>
                          <span className="text-[10px] font-mono font-bold text-slate-500">$100 000 max</span>
                        </div>
                        <p className="mt-1 font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-mono">
                          $57 939<span className="text-lg text-slate-400">.00</span>
                        </p>
                      </div>

                      {/* Quick 4-action row inside phone */}
                      <div className="mt-4 grid grid-cols-4 gap-2 px-1">
                        {[
                          { label: 'Deploy', icon: Zap, bg: 'bg-blue-50 text-blue-600' },
                          { label: 'Servers', icon: Server, bg: 'bg-cyan-50 text-cyan-600' },
                          { label: 'Metrics', icon: BarChart3, bg: 'bg-amber-50 text-amber-600' },
                          { label: 'Console', icon: Terminal, bg: 'bg-purple-50 text-purple-600' },
                        ].map((act, i) => {
                          const Icon = act.icon;
                          return (
                            <div key={i} className="flex flex-col items-center gap-1 p-2 rounded-2xl bg-white border border-slate-100 shadow-xs">
                              <div className={`h-7 w-7 rounded-xl ${act.bg} flex items-center justify-center`}>
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <span className="text-[8px] font-bold text-slate-600">{act.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Active Instance List preview inside phone */}
                      <div className="mt-4 space-y-2 px-1">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Active Clusters</p>
                        <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[9px]">
                              ●
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-900">Minecraft Ryzen 9</p>
                              <p className="text-[8px] text-slate-400">AMS-1 · 0.8ms ping</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono font-bold text-emerald-600">Active</span>
                        </div>

                        <div className="p-2.5 rounded-2xl bg-white border border-slate-100 shadow-xs flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-[9px]">
                              ●
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-900">Titan Dedicated VDS</p>
                              <p className="text-[8px] text-slate-400">FRA-2 · 64GB DDR5</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono font-bold text-blue-600">Running</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Home Indicator */}
                    <div className="pt-2">
                      <div className="mx-auto h-1 w-24 rounded-full bg-slate-300" />
                    </div>

                  </div>
                </div>

                {/* =========================================================================
                    FLOATING 3D CARD 1: BRUSHED TITANIUM METAL SERVER CARD
                    Hovering out in 3D space in front of phone with brushed metal shader!
                ========================================================================== */}
                <div
                  className="absolute left-[-20%] sm:left-[-24%] top-[18%] sm:top-[16%] z-30 w-[240px] sm:w-[270px] rounded-2xl p-4 sm:p-5 text-white transition-transform duration-300"
                  style={{
                    background:
                      'radial-gradient(ellipse at 30% 20%, rgba(70, 78, 95, 0.9) 0%, rgba(20, 24, 33, 0.98) 70%), linear-gradient(135deg, #2b3240 0%, #151821 45%, #2a313e 60%, #11141c 100%)',
                    boxShadow:
                      '0 30px 60px -10px rgba(0, 0, 0, 0.85), 0 0 25px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
                    transform: `translateZ(65px) rotateY(${8 + mouseOffset.x * 0.3}deg) rotateX(${-8 + mouseOffset.y * 0.3}deg) translateY(-10px)`,
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                  }}
                >
                  {/* Subtle brushed metal horizontal lines texture overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-15"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255, 255, 255, 0.4) 1px, rgba(255, 255, 255, 0.4) 2px)',
                    }}
                  />

                  {/* Card Header: Chip + NFC Waves + Logo */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Golden EMV Smart Chip */}
                      <div className="h-6 w-8 rounded-md bg-gradient-to-tr from-amber-300 via-amber-400 to-yellow-200 border border-amber-500/50 p-1 flex flex-col justify-between shadow-xs">
                        <div className="h-0.5 w-full bg-amber-700/40 rounded-full" />
                        <div className="h-0.5 w-1/2 bg-amber-700/40 rounded-full" />
                      </div>
                      {/* Contactless symbol */}
                      <div className="text-slate-400 text-xs font-mono">)))</div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-300 font-display">
                      HELZERX TITAN
                    </span>
                  </div>

                  {/* Card Value / Instance Price matching screenshot "$57 939.00" */}
                  <div className="relative z-10 mt-6">
                    <p className="text-[8px] uppercase tracking-widest text-slate-400 font-semibold">Instance Tier</p>
                    <p className="font-display font-black text-xl sm:text-2xl tracking-tight text-white font-mono">
                      $57 939<span className="text-xs text-slate-400">.00</span>
                    </p>
                  </div>

                  {/* Card Specs Footer */}
                  <div className="relative z-10 mt-5 flex items-end justify-between border-t border-white/10 pt-3">
                    <div>
                      <p className="text-[8px] font-mono text-slate-400 tracking-wider">•••• 3805</p>
                      <p className="text-[9px] font-bold text-slate-200">EPYC™ 9654 · 128 Cores</p>
                    </div>
                    <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-[8px] font-mono text-cyan-300">
                      10 Gbps
                    </span>
                  </div>
                </div>

                {/* =========================================================================
                    FLOATING 3D CARD 2: WHITE ANALYTICS & TRAFFIC METRICS CARD
                    Hovering lower-right in front with live bar charts matching screenshot!
                ========================================================================== */}
                <div
                  className="absolute right-[-14%] sm:right-[-18%] bottom-[12%] sm:bottom-[10%] z-40 w-[200px] sm:w-[225px] rounded-2xl bg-white p-4 sm:p-4.5 text-slate-900 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.65),0_0_30px_rgba(37,99,235,0.25)] border border-slate-100 transition-transform duration-300"
                  style={{
                    transform: `translateZ(85px) rotateY(${-12 + mouseOffset.x * 0.4}deg) rotateX(${6 - mouseOffset.y * 0.4}deg) translateY(20px)`,
                  }}
                >
                  {/* Header: Last week */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-wider text-slate-400">Traffic Load</p>
                      <p className="text-xs font-bold text-slate-900">Last week</p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  {/* Vertical Bar Chart matching the screenshot */}
                  <div className="mt-3 flex items-end justify-between gap-1.5 h-16 pt-2 border-b border-slate-100 pb-2">
                    {[
                      { h: '35%', color: 'bg-slate-200' },
                      { h: '55%', color: 'bg-slate-200' },
                      { h: '45%', color: 'bg-slate-200' },
                      { h: '85%', color: 'bg-amber-500 shadow-sm shadow-amber-500/30' }, // orange bar matching left glow
                      { h: '65%', color: 'bg-slate-200' },
                      { h: '95%', color: 'bg-[#0070f3] shadow-sm shadow-blue-500/40' },  // cyan/blue bar matching right glow
                      { h: '70%', color: 'bg-slate-200' },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div
                          className={`w-full rounded-xs ${bar.color} transition-all duration-300`}
                          style={{ height: bar.h }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Live Telemetry Metrics */}
                  <div className="mt-2.5 flex items-center justify-between text-[9px] font-semibold">
                    <span className="text-slate-400">Network I/O</span>
                    <span className="font-mono text-slate-900 font-bold">14.8 GB/s</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[9px] font-semibold">
                    <span className="text-slate-400">Ping latency</span>
                    <span className="font-mono text-emerald-600 font-bold">0.8 ms</span>
                  </div>
                </div>

                {/* Floating pill badge in space */}
                <div
                  className="absolute right-[5%] top-[10%] z-20 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1 text-[10px] font-bold text-white border border-white/20 backdrop-blur-md shadow-lg"
                  style={{
                    transform: 'translateZ(40px)',
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>NVMe Gen5 · 99.98% SLA</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
