# FlameFix — Vite + React

A production-oriented, responsive service-business website rebuilt from the previous prototype as a proper Vite + React application.

## What changed

The previous package loaded local UMD builds and called `ReactDOM.createRoot`, which caused the runtime error shown in DevTools. This version uses the supported client entrypoint:

```js
import { createRoot } from 'react-dom/client';
```

There are no UMD React files, HTM runtime, global `ReactDOM`, or separate hand-authored HTML pages.

## Stack

- Vite 8
- React 19
- React Router 7
- ES modules / JSX
- CSS architecture split into tokens, base, components, cards, pages, animation, responsive and mobile refinement layers
- Node built-in tests for pure utilities
- ESLint + React Hooks rules
- Prettier
- GitHub Actions quality workflow

## Application architecture

```text
src/
  app/                  router, app layout, error boundary
  components/
    layout/             header, footer, logo, page hero
    ui/                 reusable UI primitives and shared service-standard cards
  config/               business/site configuration
  data/                 navigation and content models
  features/
    booking/            booking form feature
    faq/                FAQ accordion feature
  hooks/                 reusable React hooks
  pages/                 route-level page components
  styles/                design system, card system and responsive/mobile layers
  utils/                 framework-independent utilities
```

## Routes

- `/`
- `/about`
- `/services`
- `/why-us`
- `/how-it-works`
- `/faq`
- `/contact`
- Custom 404 route

Navigation uses React Router `NavLink`; links no longer scroll to sections on the homepage.

## Mobile UI architecture

- `src/styles/mobile.css` is the final mobile refinement layer and is imported after the general responsive stylesheet.
- Mobile breakpoints are tuned at 720px, 470px and 360px without changing the desktop layout.
- Header navigation, page heroes, booking form, trust strip, service cards, process cards, footer and fixed quick actions receive mobile-specific sizing and spacing.
- Home, About and Why Us share `ServiceStandardCard`, preventing duplicated card markup and keeping the six service-standard cards visually consistent.


## Update business information

Edit:

```text
src/config/site.js
```

Replace the placeholder phone, WhatsApp number, email, service area and working hours before production deployment.

## Local development

Use Node 20.19+ or current Node 22 LTS.

```bash
npm install
npm run dev
```

Open the URL printed by Vite. The project is configured to use port `4173` by default when using `npm start`.

```bash
npm start
```

## Quality commands

```bash
npm run test
npm run qa:static
npm run lint
npm run build
npm run check
```

`npm run check` runs the project quality gates in sequence. See `QUALITY_GATES.md` for the full checklist.

## Deployment routing

Because this is a BrowserRouter SPA, production hosting must rewrite unknown paths to `index.html`. Two examples are included:

- Netlify: `public/_redirects`
- Vercel: `vercel.json`

For another host, configure the equivalent SPA fallback.

## Performance and accessibility decisions

- Route components are lazy-loaded.
- Non-hero imagery uses native lazy loading.
- Images are local optimized WebP/JPG files.
- Motion respects `prefers-reduced-motion`.
- Forms use explicit labels, focus handling and `aria-invalid`.
- Mobile navigation is keyboard-dismissable with Escape.
- A skip link and visible focus states are included.
- A React error boundary prevents a render failure from leaving users with an unexplained blank screen.

## Images

Images are based on the Pexels search supplied for the project. See `IMAGE_CREDITS.md`.

## Important production note

This package provides strong engineering defaults, but no codebase can honestly be guaranteed to pass every possible benchmark on every hosting environment. Run `npm run check`, dependency audit, and Lighthouse/real-device testing in your actual CI and deployment environment before launch.
