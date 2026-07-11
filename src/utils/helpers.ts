export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalised = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${normalised}`;
}

export function projectRoute(slug: string): string {
  return `/projects/${slug}`;
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
