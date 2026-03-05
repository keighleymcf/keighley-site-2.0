# AI Agent Instructions

This file provides context for AI coding agents working in this repository.

## Project overview

A TypeScript React 19 portfolio website. Single-page layout with named routes that scroll to sections. Content is decoupled from components via JSON files.

## MANDATORY: Workflow checklist

1. Read docs and existing code
2. Implement changes
3. Add/update tests
4. Run lint and tests, fix issues and re-run checks
5. Update docs if needed

## Architecture & code quality

### Single-page + named routes

All section routes (`/`, `/about`, `/work`, `/awards`, `/contact`) render the same `MainLayout`. `ScrollBehavior` in `src/layouts/ScrollBehavior.tsx` reads `useLocation().pathname`, looks up the section ID in `SECTION_IDS`, and scrolls to it. Only `/privacy` is a separate page.

### Content in JSON

All user-facing text, links, and data live in `src/content/*.json`. Components import JSON directly — never hardcode copy in JSX. If adding a new text string, add it to the relevant content file first.

### No barrel files

Imports are always direct paths — never `import { X } from '@/components'`. No re-exports

### Component file architecture

- `src/components/ui/` contains only shadcn-generated primitives. Do not add custom components here.
- Composed components built from primitives go in `src/components/`
- Section components go in `src/components/sections/`.

### Use shadcn primitives and composed components

- Prefer shadcn or composed components over wherever possible

### Follow KISS, DRY, & SRP

- Extract shared elements and functions to components/helpers, don't repeat code
- One component or function per file

## Testing conventions

Tests live in `src/test/`. Each test file is named after the component/module it tests (`Banner.test.tsx`, `routes.test.ts`, etc.).

- Use `MemoryRouter` wrapper for any component that uses React Router hooks
- Import content JSON in tests to avoid hardcoding strings — tests stay in sync with content automatically
- Avoid snapshot tests; prefer explicit assertions on rendered text and attributes
