export const INITIAL_SITE_SETTINGS = {
  brandName: 'HelzerX Cloud',
  announcementText: 'Get 10% off now using coupon code',
  announcementCoupon: 'VOLTUS10',
  announcementActive: true,
  heroSubtitle: 'High-performance game and cloud hosting built for players and developers who demand speed, stability, and total control — no lag, no limits.',
  heroCtaText: 'Get Started',
  discordUrl: 'https://discord.gg/helzerxcloud',
  twitterUrl: 'https://twitter.com/helzerxcloud',
  githubUrl: 'https://github.com/helzerxcloud',
  supportEmail: 'support@helzerx.cloud',
};

export const INITIAL_GAMES = [
  { id: 'minecraft', name: 'Minecraft', status: 'active' },
  { id: 'rust', name: 'Rust', status: 'active' },
  { id: 'ark', name: 'ARK: Survival Ascended', status: 'active' },
];

export const INITIAL_PLANS = [
  { id: 'plan-mc-2gb', name: 'ARX-MC-2GB (Dirt Node)', status: 'active' },
  { id: 'plan-mc-4gb', name: 'ARX-MC-4GB (Iron Node)', status: 'active' },
  { id: 'plan-mc-8gb', name: 'ARX-MC-8GB (Gold Node)', status: 'active' },
];

export const INITIAL_SERVER_LOCATIONS = [
  { id: 'loc-dal', name: 'Dallas, TX', country: 'United States', status: 'online' },
  { id: 'loc-fra', name: 'Frankfurt', country: 'Germany', status: 'online' },
  { id: 'loc-lon', name: 'London', country: 'United Kingdom', status: 'online' },
  { id: 'loc-sin', name: 'Singapore', country: 'Singapore', status: 'online' },
  { id: 'loc-cmb', name: 'Colombo', country: 'Sri Lanka', status: 'online' },
];

export const INITIAL_FAQS = [
  { id: 'faq-1', question: 'How fast is server provisioning after payment?', answer: 'Instantly! Our automated provisioning system creates your container on our Ryzen 9 9950X clusters within 15 to 45 seconds after transaction confirmation.', category: 'General' },
  { id: 'faq-2', question: 'Which payment methods are supported, and can I pay in Sri Lankan Rupees (LKR)?', answer: 'Yes! We support Sri Lankan Rupee (LKR) payments directly via PayHere as well as global PayPal, Visa, Mastercard, American Express, and Web3 Crypto.', category: 'Billing' },
  { id: 'faq-3', question: 'Can I install custom mods, plugins, and modpacks?', answer: 'Absolutely! Our custom Pterodactyl-based Control Panel includes 1-Click modpack installers for CurseForge, Modrinth, Paper, Forge, Fabric, Oxide, and full SFTP file access.', category: 'Technical' },
  { id: 'faq-4', question: 'How does your DDoS protection mitigate attacks?', answer: 'We utilize inline hardware scrubbers by Corero SmartWall with over 3.2 Tbps mitigation capacity.', category: 'Network' },
  { id: 'faq-5', question: 'Can I upgrade or downgrade my hosting plan later?', answer: 'Yes, you can seamlessly scale your RAM, CPU vCores, and NVMe disk anytime through the Client Area.', category: 'Billing' },
];

export const INITIAL_DEPLOYED_SERVERS: Array<{ id: string; status: string }> = [];

export const CURRENCIES = [
  { code: 'USD', symbol: '$', rateToUsd: 1, label: '$ USD (US Dollar)' },
  { code: 'LKR', symbol: 'Rs. ', rateToUsd: 305, label: 'රු LKR (Sri Lankan Rupee)' },
  { code: 'EUR', symbol: '€', rateToUsd: 0.92, label: '€ EUR (Euro)' },
  { code: 'GBP', symbol: '£', rateToUsd: 0.79, label: '£ GBP (British Pound)' },
  { code: 'CAD', symbol: 'CA$', rateToUsd: 1.36, label: '$ CAD (Canadian Dollar)' },
  { code: 'AUD', symbol: 'A$', rateToUsd: 1.52, label: '$ AUD (Australian Dollar)' },
  { code: 'JPY', symbol: '¥', rateToUsd: 154, label: '¥ JPY (Japanese Yen)' },
];
