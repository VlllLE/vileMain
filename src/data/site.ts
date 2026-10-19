export const SITE = {
  name: 'matt',
  title: 'matt portfolio — Full-Stack & ML Developer',
  tagline: 'vile.cx',
  description:
    'Glasgow-based Software Development student building full-stack products, machine-learning systems and questionable internet experiments.',
  url: 'https://VlllLE.github.io/vileMain/',
  email: 'm@vile.cx',
  location: 'Glasgow, Scotland',
  github: 'https://github.com/VlllLE',
  pleiades: 'https://pleiades.org.uk',
  cvPath: '/cv/matt-stripe-cv.pdf',
  ogImage: '/og-image.png',
  themeColor: '#6a5bdc',
  graduationYear: 2027,
  university: 'Glasgow Caledonian University',
  degree: 'BSc Honours Software Development',
} as const;

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: '', url: SITE.github },
  { name: 'Pleiades', icon: '', url: SITE.pleiades },
  { name: 'Bluesky', icon: '', url: 'https://bsky.app/profile/51m.bsky.social' },
  { name: 'Twitch', icon: '', url: 'https://twitch.tv/benzos' },
] as const;

export const NAV_ITEMS = [
  { name: 'Home', href: '#home', sectionId: 'home' },
  { name: 'Projects', href: '#projects', sectionId: 'projects' },
  { name: 'About', href: '#about', sectionId: 'about' },
  { name: 'Skills', href: '#skills', sectionId: 'skills' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' },
] as const;

export const AVAILABILITY =
  'Glasgow-based Software Development student graduating in 2027. Open to graduate software, full-stack and machine-learning opportunities.';
