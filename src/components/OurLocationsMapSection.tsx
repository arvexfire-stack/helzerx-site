import React, { useMemo, useState } from 'react';
import { Activity, CheckCircle2, Globe2, MapPin, Radio, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const OurLocationsMapSection: React.FC = () => {
  const { locations, navigateTo } = useApp();
  const onlineLocations = useMemo(() => locations.filter((location) => location.status !== 'maintenance'), [locations]);
  const [activeNode, setActiveNode] = useState<string | null>(onlineLocations[0]?.id || null);
  const current = onlineLocations.find((location) => location.id === activeNode) || onlineLocations[0];

  return (
    <section id="locations" className="mx-auto max-w-[1210px] px-3 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="reference-panel overflow-hidden px-5 py-8 sm:px-9 sm:py-10">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-8 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">Closer to your players</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-.055em] text-[#182231] sm:text-[2.6rem]">
              Our server <span className="text-[#287bd9]">locations.</span>
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#788697]">Pick a region close to your community for a smoother connection.</p>
          </div>
          <button type="button" onClick={() => navigateTo('locations')} className="inline-flex min-h-10 items-center gap-2 self-start rounded-full border border-[#dce8f4] px-4 text-[11px] font-bold text-[#486581] transition hover:border-blue-300 hover:text-[#287bd9] sm:self-auto">
            View all locations <Globe2 className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-[#e5edf6] bg-[#edf6ff] p-3 sm:p-5">
          <div className="relative h-[280px] overflow-hidden rounded-[16px] bg-[#e4f1fe] sm:h-[370px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 70" preserveAspectRatio="none" aria-label="Server locations map">
              <defs>
                <pattern id="arvex-map-grid" width="8" height="7" patternUnits="userSpaceOnUse">
                  <path d="M8 0H0V7" fill="none" stroke="#a9c9e9" strokeWidth=".16" />
                </pattern>
                <linearGradient id="arvex-route" x1="0" x2="1">
                  <stop offset="0" stopColor="#8cc4fa" stopOpacity=".5" />
                  <stop offset=".5" stopColor="#3685dc" stopOpacity=".9" />
                  <stop offset="1" stopColor="#8cc4fa" stopOpacity=".5" />
                </linearGradient>
              </defs>
              <rect width="100" height="70" fill="url(#arvex-map-grid)" />
              <path d="M11 16Q19 10 31 15L34 26 27 34 21 32 18 40 13 32 10 23ZM23 38L31 40 33 51 29 63 24 56 21 46ZM43 14L56 12 60 22 56 29 48 27 44 22ZM45 33L54 31 59 43 56 55 51 60 46 53 43 43ZM61 14L75 11 87 18 90 29 83 36 73 39 67 33 64 23ZM76 47L86 49 90 57 84 62 77 58Z" fill="#c5dcf2" />
              {onlineLocations.length > 1 && onlineLocations.slice(1).map((location) => {
                const first = onlineLocations[0];
                return <path key={`route-${location.id}`} d={`M${first.xPercent} ${first.yPercent} Q${(first.xPercent + location.xPercent) / 2} ${Math.min(first.yPercent, location.yPercent) - 10} ${location.xPercent} ${location.yPercent}`} fill="none" stroke="url(#arvex-route)" strokeWidth=".32" strokeDasharray="1 1.5" />;
              })}
              {onlineLocations.map((location) => {
                const selected = current?.id === location.id;
                return <g key={location.id} className="cursor-pointer" onClick={() => setActiveNode(location.id)} role="button" aria-label={`Select ${location.name}`}>
                  <circle cx={location.xPercent} cy={location.yPercent} r={selected ? 4 : 2.4} fill={selected ? 'rgba(41,126,219,.18)' : 'rgba(74,148,222,.14)'} />
                  <circle cx={location.xPercent} cy={location.yPercent} r={selected ? 1.35 : .9} fill={selected ? '#287bd9' : '#5d9fe0'} />
                </g>;
              })}
            </svg>
            {current ? (
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white bg-white/95 p-3.5 shadow-[0_10px_30px_rgba(55,98,144,.12)] sm:bottom-5 sm:left-auto sm:right-5 sm:w-[275px] sm:p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2 font-display text-sm font-bold text-[#26394e]"><MapPin className="h-4 w-4 shrink-0 text-[#3683d8]" /> <span className="truncate">{current.name}</span></span>
                  <span className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-bold ${current.status === 'online' ? 'bg-[#eaf8f2] text-[#26835f]' : 'bg-[#fff5e8] text-[#a9752a]'}`}>{current.status === 'online' ? 'Available' : 'High traffic'}</span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-[10px] text-[#7c8a99]"><Activity className="h-3 w-3 text-[#6096cf]" /> {current.country} <span className="text-[#c4ccd4]">/</span> {current.pingMs} ms ping</p>
                <p className="mt-2 flex items-center gap-1.5 text-[10px] font-semibold text-[#4988ce]"><CheckCircle2 className="h-3 w-3" /> DDoS protected infrastructure</p>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-xs rounded-2xl border border-white bg-white/90 p-6 text-center shadow-sm">
                  <Radio className="mx-auto h-6 w-6 text-[#4a8bd2]" />
                  <p className="mt-3 text-sm font-bold text-[#30465e]">Locations are being updated</p>
                  <p className="mt-1 text-xs leading-5 text-[#8290a0]">Please check back shortly for available regions.</p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
            {locations.map((location) => (
              <button key={location.id} type="button" onClick={() => location.status !== 'maintenance' && setActiveNode(location.id)} disabled={location.status === 'maintenance'}
                className={`rounded-xl border px-3 py-2.5 text-left transition ${current?.id === location.id ? 'border-[#87b8eb] bg-white shadow-sm' : 'border-[#e3edf7] bg-white/65 hover:bg-white'} ${location.status === 'maintenance' ? 'cursor-not-allowed opacity-55' : ''}`}>
                <div className="flex items-center justify-between gap-1">
                  <span className="truncate text-[10px] font-bold text-[#40566d]">{location.city}</span>
                  {location.status === 'online' ? <Zap className="h-3 w-3 shrink-0 text-[#4c92d9]" /> : <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e2a749]" />}
                </div>
                <span className="mt-1 block text-[9px] text-[#8492a1]">{location.pingMs} ms · {location.country}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
