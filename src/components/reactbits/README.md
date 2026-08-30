# React Bits integration targets

Official React Bits source was not available locally during this pass. The app therefore uses explicitly named static fallbacks and does not imitate React Bits internals.

Copy these official React/Tailwind components from React Bits when their source is available:

1. **Components → Pill Nav** → replace `PillNav.tsx`, copy any companion CSS, and swap `PillNavFallback` in `src/layouts/AppLayout.tsx`.
2. **Backgrounds → Dark Veil** → replace `DarkVeil.tsx`, include the dependency documented by React Bits, and swap `DarkVeilFallback` in `src/pages/HomePage.tsx`.

Preserve the current restrained sizing and opacity when making those swaps.
