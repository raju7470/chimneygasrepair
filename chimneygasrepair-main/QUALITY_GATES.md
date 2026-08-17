# Quality Gates

## Included automated checks

| Gate | Command | Purpose |
|---|---|---|
| Unit tests | `npm run test` | Tests framework-independent URL/message utilities |
| Static architecture QA | `npm run qa:static` | Checks routing, React entrypoint, legacy-runtime removal, assets and accessibility hooks |
| Lint | `npm run lint` | ESLint recommended rules + React Hooks + React Refresh rules |
| Production build | `npm run build` | Vite production compilation and bundling |
| Combined gate | `npm run check` | Runs tests, static QA, lint and build |
| Dependency audit | `npm run audit:prod` | Checks production dependency vulnerabilities at high severity and above |

## Engineering safeguards

- `createRoot` imported from `react-dom/client`
- `createBrowserRouter` created outside the React tree
- route-level lazy loading
- reusable layout/UI/feature modules
- centralized site configuration
- no CDN/UMD React runtime
- custom 404 and React error boundary
- explicit form labels and validation semantics
- keyboard-closeable mobile navigation
- reduced-motion handling
- responsive layout down to narrow mobile widths
- local optimized images with native lazy loading
- SPA rewrites for Netlify and Vercel
- CI workflow included

## Checks that must run against the deployed environment

These cannot be truthfully guaranteed from source code alone and should be run after deployment:

- Lighthouse/Core Web Vitals
- real browser matrix testing
- actual hosting rewrite behavior
- production HTTP security headers
- live phone/WhatsApp/email correctness
- dependency vulnerability state at deployment time
- analytics/monitoring behavior, if added later
