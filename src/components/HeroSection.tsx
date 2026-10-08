import React, { useMemo } from 'react';
import { ArrowRight, Activity, Cpu, Globe2, HardDrive, Server, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, plans, locations, deployedServers, siteSettings } = useApp();

  const activePlans = useMemo(
    () => (plans || []).filter((plan) => plan.status !== 'inactive'),
    [plans],
  );
  const onlineLocations = useMemo(
    () => (locations || []).filter((location) => location.status !== 'maintenance'),
    [locations],
  );
  const runningServers = useMemo(
    () => (deployedServers || []).filter((server) => server.status === 'running'),
    [deployedServers],
  );

  return (
    <section className="relative overflow-hidden bg-[#eaf4ff] px-3 pb-6 pt-3 sm:px-6 sm:pb-10 sm:pt-5 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_8%,rgba(166,211,255,0.42),transparent_40%),radial-gradient(ellipse_at_8%_85%,rgba(215,235,255,0.7),transparent_35%)]" />
      <div className="relative mx-auto grid min-h-[620px] max-w-[1420px] overflow-hidden rounded-[28px] border border-white/90 bg-white shadow-[0_24px_80px_rgba(77,127,177,0.10)] sm:min-h-[650px] sm:rounded-[36px] lg:grid-cols-[0.94fr_1.06fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-20">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-[#f3f8ff] px-3.5 py-2 text-xs font-semibold text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Hosting built for what you play
          </div>
          <h1 className="max-w-[680px] font-display text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.99] tracking-[-0.055em] text-[#172a43]">
            Your world.
            <br />
            <span className="text-[#3479db]">Always online.</span>
          </h1>
          <p className="mt-6 max-w-[520px] text-base leading-7 text-[#61748d] sm:text-lg sm:leading-8">
            {siteSettings.heroSubtitle ||
              'Fast, reliable game servers and cloud infrastructure—ready when your community is.'}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => navigateTo('plans')}
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#246ed0] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(36,110,208,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1c60bc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {siteSettings.heroCtaText || 'Explore hosting plans'}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => navigateTo('locations')}
              className="min-h-12 rounded-full px-5 py-3 text-sm font-semibold text-[#536981] transition hover:bg-[#f3f8ff] hover:text-[#235fae] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View our network
            </button>
          </div>

          <div className="mt-10 grid max-w-[520px] grid-cols-3 border-t border-[#e8eef5] pt-6">
            <div className="pr-3">
              <p className="font-display text-2xl font-bold tracking-tight text-[#1d3553]">
                {onlineLocations.length > 0 ? `${onlineLocations.length}+` : '32+'}
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-[#74869a] sm:text-xs">global locations</p>
            </div>
            <div className="border-x border-[#e8eef5] px-3 sm:px-5">
              <p className="font-display text-2xl font-bold tracking-tight text-[#1d3553]">99.99%</p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-[#74869a] sm:text-xs">network uptime SLA</p>
            </div>
            <div className="pl-3 sm:pl-5">
              <p className="font-display text-2xl font-bold tracking-tight text-[#1d3553]">NVMe</p>
              <p className="mt-1 text-[11px] font-semibold leading-4 text-[#74869a] sm:text-xs">fast storage</p>
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden bg-[#f4f8fd] px-5 py-10 sm:min-h-[470px] sm:px-10 lg:min-h-full">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_42%,rgba(76,151,239,0.18),transparent_56%)]" />
          <div className="absolute right-[-9%] top-[-16%] h-72 w-72 rounded-full bg-[#d9eaff]/70 blur-3xl" />
          <div className="absolute bottom-[-25%] left-[-5%] h-72 w-72 rounded-full bg-[#e3f2ff] blur-3xl" />

          <div className="relative w-full max-w-[540px]">
            <div className="absolute -right-1 top-[-29px] z-20 flex items-center gap-2 rounded-full border border-white bg-white/90 px-3.5 py-2 text-[11px] font-bold text-[#52708f] shadow-[0_8px_24px_rgba(45,82,120,0.10)] sm:right-2">
              <span className="h-2 w-2 rounded-full bg-[#4c91e7]" />
              {onlineLocations.length > 0
                ? `${onlineLocations.length} ${onlineLocations.length === 1 ? 'location' : 'locations'} available`
                : 'Explore our network'}
            </div>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#438fe9] via-[#2874d3] to-[#215cbb] p-5 text-white shadow-[0_28px_65px_rgba(40,107,189,0.27)] sm:rounded-[32px] sm:p-7">
              <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-white/10" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-blue-100">ARVEX CONTROL</p>
                  <h2 className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">Your servers at a glance</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/15">
                  <Server className="h-5 w-5" />
                </div>
              </div>
              <div className="relative mt-6 rounded-2xl border border-white/15 bg-white/[0.12] p-4 backdrop-blur-sm sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#317bd5]">
                      <Activity className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Live instances</p>
                      <p className="mt-0.5 text-xs text-blue-100">Game and cloud hosting</p>
                    </div>
                  </div>
                  <span className="font-display text-3xl font-bold">{runningServers.length}</span>
                </div>
                <div className="mt-5 h-20 overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.10] to-transparent px-2 pt-2">
                  <svg viewBox="0 0 500 90" preserveAspectRatio="none" className="h-full w-full" aria-label="Illustrative server activity trend">
                    <path d="M0 67 C35 61 38 40 74 48 S120 70 155 51 S202 35 235 46 S284 68 319 42 S369 28 399 43 S459 45 500 14" fill="none" stroke="rgba(255,255,255,.88)" strokeWidth="3" strokeLinecap="round" />
                    <path d="M0 67 C35 61 38 40 74 48 S120 70 155 51 S202 35 235 46 S284 68 319 42 S369 28 399 43 S459 45 500 14 L500 90 L0 90Z" fill="url(#activity-fill)" />
                    <defs><linearGradient id="activity-fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="white" stopOpacity=".20" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient></defs>
                  </svg>
                </div>
                <div className="mt-3 flex items-center justify-between text-[10px] font-semibold text-blue-100">
                  <span>STEADY PERFORMANCE</span>
                  <span>LAST 24 HOURS</span>
                </div>
              </div>
              <div className="relative mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-white/[0.12] p-4">
                  <div className="flex items-center gap-2 text-blue-100"><Cpu className="h-4 w-4" /><span className="text-[11px] font-semibold">Compute</span></div>
                  <p className="mt-3 text-lg font-bold">Ryzen 9</p>
                  <p className="mt-0.5 text-[11px] text-blue-100">High-frequency CPU</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.12] p-4">
                  <div className="flex items-center gap-2 text-blue-100"><HardDrive className="h-4 w-4" /><span className="text-[11px] font-semibold">Storage</span></div>
                  <p className="mt-3 text-lg font-bold">NVMe SSD</p>
                  <p className="mt-0.5 text-[11px] text-blue-100">Fast world loading</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white bg-white/95 px-4 py-3.5 shadow-[0_14px_35px_rgba(45,82,120,0.10)] sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf5ff] text-[#367bd0]"><Globe2 className="h-4 w-4" /></span>
                <div><p className="text-xs font-bold text-[#263d58]">Plans ready to deploy</p><p className="mt-0.5 text-[10px] text-[#7b8da2]">{activePlans.length} hosting options available now</p></div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#54718d]"><ShieldCheck className="h-3.5 w-3.5 text-[#367bd0]" /><Zap className="h-3.5 w-3.5 text-[#367bd0]" /> DDoS protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
