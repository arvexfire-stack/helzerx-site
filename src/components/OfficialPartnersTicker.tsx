import React from 'react';
import { useApp } from '../context/AppContext';
import { Partner } from '../types';

export const OfficialPartnersTicker: React.FC = () => {
  const { partners, navigateTo } = useApp();
  const activePartners: Partner[] = (partners || []).filter((p) => p.active !== false);

  const displayList = activePartners;
  const marqueeItems = [...displayList, ...displayList];

  return (
    <section className="relative w-full overflow-hidden px-3 py-6 sm:px-6 sm:py-8">
      <div className="reference-panel mx-auto max-w-[1210px] overflow-hidden py-6 sm:py-8">
        <div className="mx-auto mb-5 max-w-7xl px-4 text-center sm:px-6">
          <span className="eyebrow">In good company</span>
          <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight text-[#253448] sm:text-2xl">
            Built around the tools you trust
          </h2>
          <p className="mt-1.5 text-xs text-[#8491a1]">
            {activePartners.length
              ? `${activePartners.length} listed ${activePartners.length === 1 ? 'partner' : 'partners'} in the ArveX ecosystem`
              : 'Our hosting tools and services, in one place.'}
          </p>
        </div>
        {marqueeItems.length > 0 ? <div className="relative w-full overflow-hidden">
        {/* Soft edge blur masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-6 py-2 will-change-transform">
          {marqueeItems.map((item: any, index: number) => (
            <div
              key={`${item.name}-${index}`}
              onClick={() => navigateTo('partners')}
              className="flex shrink-0 cursor-pointer items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 px-5 py-3 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-white transition-all duration-200"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700 font-black text-xs font-display">
                {item.logoUrl ? (
                  <img src={item.logoUrl} alt={item.name} className="h-full w-full object-contain p-1" />
                ) : (
                  <span>{item.name.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-sm font-bold text-slate-800">{item.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">{item.category || item.badge || 'Verified Partner'}</span>
              </div>
            </div>
          ))}
        </div>
        </div> : <div className="mx-auto max-w-lg px-6 text-center text-xs text-[#8795a5]">Partner updates will appear here when available.</div>}
      </div>
    </section>
  );
};
