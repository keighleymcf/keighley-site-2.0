# keighley-site-2.0

Personal portfolio website for Keighley McFarland — Senior Applied AI Engineer

## Stack

| Tool                  | Purpose                    |
| --------------------- | -------------------------- |
| React                 | UI framework               |
| TypeScript            | Type safety                |
| Vite                  | Build tooling              |
| Tailwind CSS          | Styling (CSS-first config) |
| shadcn/ui             | Primitive UI components    |
| react-router-dom      | Client-side routing        |
| react-hook-form       | Form state management      |
| zod                   | Schema validation          |
| Vitest                | Unit testing               |
| React Testing Library | Component testing          |
| EmailJS               | Contact form delivery      |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Commands

```bash
npm run dev         # Start dev server
npm run build       # Type-check + production build
npm run preview     # Preview production build
npm run lint        # ESLint
npm test            # Vitest (run once)
npm run test:watch  # Vitest (watch mode)
```

## Project structure

```
src/
├── components/     # Shared and composed components
│   ├── ui/         # shadcn primitives (auto-generated, do not edit)
│   └── sections/   # Page section components
├── content/        # All copy and data as JSON (edit here, not in JSX)
├── layouts/        # Page layout and scroll behaviour
├── pages/          # Standalone page components (e.g. Privacy)
├── utils/          # Utils and helpers
├── routes/         # ROUTES + SECTION_IDS typed constants
├── test/           # Vitest + Testing Library tests
└── index.css       # Tailwind v4 config and design tokens
```

## Routing

All sections are named routes that smoothly scroll to the matching section on the single-page layout.

Routes are defined in `src/routes/routes.ts` as a typed `ROUTES` constant — no magic strings anywhere.

## Editing content

All copy lives in `src/content/*.json`. No JSX changes needed to update text, links, or data.

## Design tokens

Defined in `src/index.css` via Tailwind v4's `@theme {}` block.

## Component conventions

- **No barrel files** — every import is direct, no `index.ts` re-exports
- **shadcn components** live in `src/components/ui/` only
- **Composed and layout components** live in `src/components/`
- **Section components** live in `src/components/sections/`
- All text content is sourced from JSON — components are data-agnostic

## Deployment

```bash
npm run build
# Deploy dist/ to your host (Vercel, Netlify, Cloudflare Pages, etc.)
```
