# ZeminFlow frontend

Competition-demo frontend for an AI-assisted B2B collaboration infrastructure, built with React, Vite, TypeScript, Tailwind CSS, React Router, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Structure

- `src/components` — reusable interface pieces
- `src/pages` — route-level screens
- `src/layouts` — shared page shells and navigation
- `src/data` — local TypeScript mock data
- `src/services` — data-access boundary, ready to swap for APIs
- `src/types` — shared domain types
- `src/hooks` — reusable React data hooks
- `src/assets` — project-owned static assets

The current POC has no backend, database, authentication, or external AI integration. Mock data and deterministic AI simulation are exposed through service boundaries so future API work does not need to rewrite page components.
