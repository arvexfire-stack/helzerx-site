import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CURRENCIES } from '../data/initialData';
import {
  Server,
  Gamepad2,
  Cpu,
  Globe,
  ChevronDown,
  X,
  Shield,
  User as UserIcon,
  LogOut,
  Layers,
  Menu,
  CreditCard,
  Zap,
  Sparkles,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    siteSettings,
    currency,
    setCurrency,
    user,
    logout,
    setIsAuthModalOpen,
    setAuthModalTab,
    openCheckout,
    isAnnouncementVisible,
    dismissAnnouncement,
    currentPage,
    navigateTo,
  } = useApp();

  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
    setIsCurrencyDropdownOpen(false);
  };

  const isHome = currentPage === 'home';

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent px-3 pt-3 text-slate-800 sm:px-5 sm:pt-5">
      {/* Top Announcement Bar */}
      {isAnnouncementVisible && siteSettings.announcementActive && (
        <div className={`w-full border-b py-1.5 px-4 text-xs flex items-center justify-between ${
          isHome ? 'border-white/10 bg-[#06080e]/90 text-slate-300' : 'border-slate-200 bg-slate-50/90 text-slate-500'
        }`}>
          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <span className="font-medium">{siteSettings.announcementText}</span>
            <span className="font-mono font-bold bg-violet-50 text-violet-700 px-2 py-0.5 rounded-full border border-violet-100 text-[11px]">
              {siteSettings.announcementCoupon}
            </span>
          </div>
          <button
            onClick={dismissAnnouncement}
            className="text-slate-400 hover:text-slate-200 p-1 transition-colors"
            title="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Navbar matching Reference Top Bar */}
      <div className={`mx-auto flex h-[66px] max-w-[1200px] items-center justify-between rounded-[22px] px-4 backdrop-blur-xl sm:px-6 transition-colors duration-300 ${
        isHome
          ? 'border border-white/15 bg-[#07090e]/80 text-white shadow-[0_15px_45px_rgba(0,0,0,0.8)]'
          : 'border border-white/90 bg-white/90 text-slate-800 shadow-[0_10px_35px_rgba(35,25,75,0.07)]'
      }`}>
        
        {/* Brand Zone */}
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => {
              navigateTo('home');
              closeDropdowns();
            }}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            {/* Concentric rings logo matching the reference screenshot */}
            <div className={`h-9 w-9 rounded-2xl flex items-center justify-center font-black shadow-md group-hover:scale-105 transition-transform ${
              isHome
                ? 'bg-gradient-to-br from-[#1c2436] to-[#0c101a] border border-white/15 shadow-blue-500/20'
                : 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-violet-500/20'
            }`}>
              {isHome ? (
                <div className="h-5 w-5 rounded-full border-2 border-cyan-400 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full border border-amber-400 flex items-center justify-center">
                    <div className="h-1 w-1 rounded-full bg-white" />
                  </div>
                </div>
              ) : (
                <span className="font-display text-xs text-white">HX</span>
              )}
            </div>
            <span className={`text-xl font-extrabold tracking-tight font-display ${
              isHome ? 'text-white' : 'text-slate-950'
            }`}>
              {siteSettings.brandName || 'HelzerX Cloud'}
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className={`hidden lg:flex items-center gap-1 text-xs font-semibold ${
            isHome ? 'text-slate-300' : 'text-slate-500'
          }`}>
            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('services')}
                className={`flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
                  activeDropdown === 'services' || currentPage.startsWith('services')
                    ? isHome ? 'text-white bg-white/15' : 'text-violet-700 bg-violet-50'
                    : isHome ? 'hover:text-white hover:bg-white/10' : 'hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {activeDropdown === 'services' && (
                <div
                  className={`absolute left-0 mt-2 w-64 border rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150 ${
                    isHome ? 'bg-[#0b0e17] text-white border-white/15 shadow-black/80' : 'bg-white text-slate-800 border-slate-200'
                  }`}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => {
                      navigateTo('services-minecraft');
                      closeDropdowns();
                    }}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition ${
                      isHome ? 'hover:bg-white/10' : 'hover:bg-blue-50'
                    }`}
                  >
                    <Gamepad2 className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className={`text-xs font-bold ${isHome ? 'text-white' : 'text-slate-900'}`}>Minecraft Servers</p>
                      <p className={`text-[10px] ${isHome ? 'text-slate-400' : 'text-slate-500'}`}>Purpur, Paper &amp; Bedrock</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('services-vps');
                      closeDropdowns();
                    }}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition ${
                      isHome ? 'hover:bg-white/10' : 'hover:bg-blue-50'
                    }`}
                  >
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className={`text-xs font-bold ${isHome ? 'text-white' : 'text-slate-900'}`}>Cloud VPS</p>
                      <p className={`text-[10px] ${isHome ? 'text-slate-400' : 'text-slate-500'}`}>AMD Ryzen 9 NVMe</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('services-vds');
                      closeDropdowns();
                    }}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition ${
                      isHome ? 'hover:bg-white/10' : 'hover:bg-blue-50'
                    }`}
                  >
                    <Server className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className={`text-xs font-bold ${isHome ? 'text-white' : 'text-slate-900'}`}>Dedicated VDS</p>
                      <p className={`text-[10px] ${isHome ? 'text-slate-400' : 'text-slate-500'}`}>100% Dedicated vCPUs</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      navigateTo('services-bot-hosting');
                      closeDropdowns();
                    }}
                    className={`w-full text-left p-2.5 rounded-xl flex items-center gap-3 transition ${
                      isHome ? 'hover:bg-white/10' : 'hover:bg-blue-50'
                    }`}
                  >
                    <Zap className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className={`text-xs font-bold ${isHome ? 'text-white' : 'text-slate-900'}`}>Bot &amp; App Hosting</p>
                      <p className={`text-[10px] ${isHome ? 'text-slate-400' : 'text-slate-500'}`}>Node.js, Python 24/7</p>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                navigateTo('plans');
                closeDropdowns();
              }}
              className={`px-3 py-2 rounded-full transition ${
                isHome ? 'hover:text-white hover:bg-white/10' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Plans
            </button>
            <button
              onClick={() => {
                navigateTo('locations');
                closeDropdowns();
              }}
              className={`px-3 py-2 rounded-full transition ${
                isHome ? 'hover:text-white hover:bg-white/10' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Locations
            </button>
            <button
              onClick={() => {
                navigateTo('pricing');
                closeDropdowns();
              }}
              className={`px-3 py-2 rounded-full transition ${
                isHome ? 'hover:text-white hover:bg-white/10' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => {
                navigateTo('hardware');
                closeDropdowns();
              }}
              className={`px-3 py-2 rounded-full transition ${
                isHome ? 'hover:text-white hover:bg-white/10' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Hardware
            </button>
            <button
              onClick={() => {
                navigateTo('support');
                closeDropdowns();
              }}
              className={`px-3 py-2 rounded-full transition ${
                isHome ? 'hover:text-white hover:bg-white/10' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Support
            </button>
          </nav>
        </div>

        {/* Right Zone: Currency Selector + Gabrun Pill Button [ ☷ Menu ] + [ Deploy ] */}
        <div className="flex items-center gap-3">
          {/* Currency Pill */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                isHome
                  ? 'bg-white/10 hover:bg-white/15 border border-white/15 text-white'
                  : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-800'
              }`}
            >
              <span>{currency.code}</span>
              <ChevronDown className="w-3 h-3 opacity-80" />
            </button>

            {isCurrencyDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-32 border rounded-xl shadow-xl p-1.5 z-50 animate-in fade-in duration-100 ${
                  isHome ? 'bg-[#0b0e17] text-white border-white/15' : 'bg-white text-slate-800 border-slate-200'
                }`}
                onMouseLeave={() => setIsCurrencyDropdownOpen(false)}
              >
                {CURRENCIES.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      setCurrency(curr);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-between ${
                      currency.code === curr.code
                        ? isHome ? 'bg-white/15 text-cyan-300' : 'bg-blue-50 text-blue-700'
                        : isHome ? 'hover:bg-white/10 text-slate-300' : 'hover:bg-slate-50 text-slate-800'
                    }`}
                  >
                    <span>{curr.code}</span>
                    <span className="text-[10px] text-slate-400">{curr.symbol}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* User Logged In state */}
          {user ? (
            <div className="flex items-center gap-2">
              {user.role === 'admin' && (
                <button
                  type="button"
                  onClick={() => navigateTo('admin')}
                  className="flex items-center gap-1.5 rounded-full bg-cyan-400 text-black px-3.5 py-2 text-xs font-black hover:bg-cyan-300 shadow-md shadow-cyan-500/25 transition cursor-pointer"
                  title="Open Admin Control Center"
                >
                  <Shield className="w-3.5 h-3.5 text-black" />
                  <span>Admin Panel</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => { window.location.assign('/client-dashboard'); }}
                className="flex items-center gap-2 rounded-full bg-[#0b0f19] px-4 py-2 text-xs font-bold text-white hover:bg-slate-900 shadow-md transition"
              >
                <UserIcon className="w-3.5 h-3.5 text-blue-400" />
                <span className="max-w-[90px] truncate">{user.name.split(' ')[0]}</span>
              </button>
              <button
                type="button"
                onClick={logout}
                className="p-2 rounded-full hover:bg-white/15 text-slate-400 hover:text-slate-200 transition"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {/* Login Button */}
              <button
                type="button"
                onClick={() => {
                  window.location.assign('/login');
                }}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  isHome
                    ? 'text-slate-300 hover:text-white hover:bg-white/10'
                    : 'bg-[#0b0f19] text-white hover:bg-slate-900 shadow-md'
                }`}
              >
                <span>Login</span>
              </button>

              {/* Sign Up Button matching reference screenshot */}
              <button
                type="button"
                onClick={() => {
                  window.location.assign('/signup');
                }}
                className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-bold text-white transition cursor-pointer ${
                  isHome
                    ? 'border border-white/20 bg-[#07090e] hover:bg-white/10 hover:border-white/40 shadow-[0_0_15px_rgba(255,120,50,0.22),0_0_15px_rgba(56,189,248,0.2)]'
                    : 'bg-gradient-to-r from-[#7934f5] to-[#591bc9] hover:from-[#6a25e6] hover:to-[#4a12b8] shadow-md shadow-purple-500/25'
                }`}
              >
                <span>Sign up</span>
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full ${
              isHome ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t px-4 py-6 space-y-4 rounded-3xl mt-2 mx-auto max-w-[1200px] ${
          isHome ? 'bg-[#090b14] border-white/15 text-white' : 'bg-white border-slate-200 text-slate-800'
        }`}>
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => {
                navigateTo('services-minecraft');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 text-left hover:bg-violet-50"
            >
              Minecraft Hosting
            </button>
            <button
              onClick={() => {
                navigateTo('services-vps');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 text-left hover:bg-violet-50"
            >
              Cloud VPS
            </button>
            <button
              onClick={() => {
                navigateTo('plans');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 text-left hover:bg-violet-50"
            >
              Game Plans
            </button>
            <button
              onClick={() => {
                navigateTo('locations');
                setIsMobileMenuOpen(false);
              }}
              className="p-3 rounded-xl bg-slate-50 text-left hover:bg-violet-50"
            >
              Locations
            </button>
          </div>

          <div className="pt-2 border-t border-white/10 space-y-2">
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    window.location.assign('/client-dashboard');
                  }}
                  className="flex-1 rounded-full bg-slate-950 py-3 text-center text-xs font-bold text-white shadow-md flex items-center justify-center gap-2"
                >
                  <UserIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>Client Area ({user.name})</span>
                </button>
                {user.role === 'admin' && (
                  <button
                    type="button"
                    onClick={() => {
                      navigateTo('admin');
                      setIsMobileMenuOpen(false);
                    }}
                    className="px-4 rounded-full bg-violet-100 text-violet-700 py-3 text-center text-xs font-black shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Admin</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    window.location.assign('/login');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 rounded-full bg-[#0b0f19] py-3 text-center text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    window.location.assign('/signup');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 rounded-full bg-gradient-to-r from-[#7934f5] to-[#591bc9] py-3 text-center text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthModalTab('admin');
                    setIsAuthModalOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="px-3 rounded-full bg-slate-100 text-slate-700 py-3 text-center text-xs font-bold shadow-md flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 text-violet-600" />
                  <span>Admin</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
