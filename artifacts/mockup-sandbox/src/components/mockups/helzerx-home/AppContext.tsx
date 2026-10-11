import React, { createContext, useContext, useState } from 'react';
import {
  CURRENCIES,
  INITIAL_DEPLOYED_SERVERS,
  INITIAL_FAQS,
  INITIAL_GAMES,
  INITIAL_PLANS,
  INITIAL_SERVER_LOCATIONS,
  INITIAL_SITE_SETTINGS,
} from './demoData';

type Currency = (typeof CURRENCIES)[number];
type ContextValue = {
  siteSettings: typeof INITIAL_SITE_SETTINGS;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  user: null;
  logout: () => void;
  setIsAuthModalOpen: (open: boolean) => void;
  setAuthModalTab: (tab: 'login' | 'register' | 'admin') => void;
  isAnnouncementVisible: boolean;
  dismissAnnouncement: () => void;
  currentPage: string;
  navigateTo: (page: string) => void;
  games: typeof INITIAL_GAMES;
  locations: typeof INITIAL_SERVER_LOCATIONS;
  plans: typeof INITIAL_PLANS;
  deployedServers: typeof INITIAL_DEPLOYED_SERVERS;
  faqs: typeof INITIAL_FAQS;
  openCheckout: (plan: (typeof INITIAL_PLANS)[number]) => void;
};

const AppContext = createContext<ContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>(CURRENCIES[1]);
  const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);

  const value: ContextValue = {
    siteSettings: INITIAL_SITE_SETTINGS,
    currency,
    setCurrency,
    user: null,
    logout: () => {},
    setIsAuthModalOpen: () => {},
    setAuthModalTab: () => {},
    isAnnouncementVisible,
    dismissAnnouncement: () => setAnnouncementVisible(false),
    currentPage: 'home',
    navigateTo: () => {},
    games: INITIAL_GAMES,
    locations: INITIAL_SERVER_LOCATIONS,
    plans: INITIAL_PLANS,
    deployedServers: INITIAL_DEPLOYED_SERVERS,
    faqs: INITIAL_FAQS,
    openCheckout: () => {},
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): ContextValue {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside the HelzerX sandbox AppProvider');
  return context;
}
