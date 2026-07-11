# vile.cx — Portfolio

Personal developer portfolio showcasing full-stack, machine-learning and AI projects.

![Portfolio screenshot placeholder](./public/projects/.gitkeep)

**Live site:** [https://VlllLE.github.io/vileMain/](https://VlllLE.github.io/vileMain/)

## Description

A React + TypeScript portfolio. Glasgow-based dev student building full-stack products, machine-learning systems and questionable internet experiments. Features evidence-based project case studies, grouped skills, accessible contact form and explainable-AI dissertation work.

## Main features

- Hero with clear technical positioning and CV download
- Featured and secondary project layouts with case-study pages
- Grouped skills section with structured categories
- About section with education timeline and evidence cards
- Contact form with Formspree support and mailto fallback
- Dark mode, responsive design and reduced-motion support
- SEO metadata, sitemap and robots.txt
- Error boundary and 404 page
- Vitest unit tests and Playwright smoke tests
- GitHub Actions CI pipeline

## Technology stack

- React 19 + TypeScript
- Vite 7
- React Router 7
- CSS custom properties (dark mode)
- Vitest + React Testing Library
- Playwright (smoke tests)
- GitHub Pages deployment

## Local setup

```bash
git clone https://github.com/VlllLE/vileMain.git
cd vileMain
npm ci
npm run dev
```

Open [http://localhost:5173/vileMain/](http://localhost:5173/vileMain/) in your browser.

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ENDPOINT` | Optional Formspree URL for contact form submissions |

Without this variable, the contact form falls back to opening the user's email client.

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | TypeScript check only |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run Playwright smoke tests |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Folder structure

```
src/
  components/     # UI components (Hero, Projects, Contact, etc.)
  contexts/       # React context providers (dark mode)
  data/           # Centralised project, skills and site data
  hooks/          # Custom hooks (active section, CV check)
  pages/          # Route-level pages (Home, CaseStudy)
  test/           # Vitest unit tests
  utils/          # Shared helpers
public/
  cv/             # CV PDF (add pending-cv.pdf here)
  projects/       # Project screenshots
  robots.txt
  sitemap.xml
e2e/              # Playwright smoke tests
```

## Deployment

The site deploys automatically to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

- **Base path:** `/vileMain/` (configured in `vite.config.ts`)
- **SPA routing:** `404.html` fallback copied from `index.html` at build time
- **Vercel:** Set `VERCEL=1` environment variable for root base path

## Accessibility

- Semantic HTML and heading hierarchy
- Keyboard-operable navigation with visible focus states
- Accessible mobile menu with ARIA attributes
- Form labels, validation errors and status feedback
- `prefers-reduced-motion` support for animations
- Descriptive alt text on images with graceful placeholders

## Assets I still need to add

- `public/cv/pending-cv.pdf` — CV
- `public/projects/*.png` — project screenshots (see `public/projects/.gitkeep`)
- `public/og-image.png` — Open Graph preview image

## Future improvements

- Add real project screenshots and OG image
- Publish dissertation and Repacked repositories
- Deploy HR Decision Support Tool staging environment
- Add blog or writing section
- Integrate analytics (privacy-respecting)

## Licence

All rights reserved. © 2026 m@vile.cx

## Contact

- **Email:** m@vile.cx
- **GitHub:** [VlllLE](https://github.com/VlllLE)
- **Pleiades:** [pleiades.org.uk](https://pleiades.org.uk)

---

shoutout robert
