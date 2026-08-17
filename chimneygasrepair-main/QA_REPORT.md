# QA Report

## Fixed root cause

The blank-screen error from the previous package was caused by a legacy UMD React/ReactDOM setup attempting to call `ReactDOM.createRoot`. The new entrypoint imports `createRoot` from `react-dom/client` and mounts the app through Vite's normal ESM pipeline.

## Structural checks included

The repository includes `scripts/static-qa.mjs`, which verifies:

- Vite module entry and React root element
- `react-dom/client` usage
- all requested page routes
- custom 404 route
- absence of legacy UMD React, ReactDOM and HTM patterns
- local image reference integrity
- image size budget
- data-driven `NavLink` navigation
- booking form labels/validation semantics
- reduced-motion support
- dedicated mobile refinement layer
- shared service-standard card component

## Runtime quality gates

After installing dependencies, use:

```bash
npm run check
```

This runs tests, static QA, ESLint and the Vite production build.

## Browser/deployment checks recommended before production

- Chrome, Edge, Firefox and Safari current versions
- 320px, 375px, 768px, 1024px and large desktop widths
- keyboard-only navigation
- `prefers-reduced-motion`
- real phone/WhatsApp links after replacing placeholders
- SPA fallback on the selected hosting platform
- Lighthouse performance, accessibility, best practices and SEO on the deployed URL

## Verification performed in this build environment

The following dependency-free checks were executed successfully before packaging:

- Node unit tests: 2/2 passed
- Static architecture QA: 50/50 checks passed
- JSX/ES module syntax parsing: passed across source, test and QA modules
- Relative import integrity: passed across 28 source modules
- CSS brace/integrity validation: passed for all eight CSS layers
- Local image-reference and image-budget checks: passed

The sandbox npm registry request timed out, so dependency installation, ESLint with downloaded packages, and the actual Vite production build could not be executed here. Run `npm install && npm run check` in a network-enabled environment; no fake lockfile or fabricated build result has been included.

## Mobile refinement in v2.1.0

- Reworked mobile header and navigation hierarchy.
- Reduced oversized mobile hero typography and improved image overlays for text legibility.
- Rebuilt mobile trust, process, service and quick-action layouts.
- Replaced the sparse duplicated principle/strength cards with a reusable service-standard card containing icon, content and proof hierarchy.
- Added explicit narrow-device handling at 360px while retaining the existing desktop presentation.
