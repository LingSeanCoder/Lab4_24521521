# Exercise 1.1 - Performance & Resiliency Architectural Upgrades

## Tech Stack
- React 19
- Vite
- Vanilla JavaScript (Note: NO TypeScript is used)

## Key Architectural Highlights
- Code-Splitting: Dynamic imports via React.lazy() for route-level chunking.
- Suspense Boundaries: Wrapping routes in `<Suspense fallback={...}>`.
- Zero Layout Shift: Dimension-matched skeleton fallbacks ensuring CLS = 0.
- Accessibility: Integrated attributes aria-busy="true" & aria-live="polite".

## Installation
```bash
npm install
npm run dev