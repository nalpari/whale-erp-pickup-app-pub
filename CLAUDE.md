# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **whale-erp-pickup-app** built with Next.js 16, React 19, and Tailwind CSS 4. The project uses the React Compiler for optimization and follows the Next.js App Router architecture.

## Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **React**: 19.2.0 with React Compiler enabled
- **Styling**: Tailwind CSS v4 (latest PostCSS-based version)
- **TypeScript**: Strict mode enabled
- **Fonts**: Geist Sans & Geist Mono (via next/font)

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Project Structure

```
whale-erp-pickup-app-pub/
├── src/
│   └── app/              # Next.js App Router pages and layouts
│       ├── layout.tsx    # Root layout with font configuration
│       ├── page.tsx      # Home page
│       └── globals.css   # Global styles and Tailwind imports
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Configurations

### TypeScript Paths
- `@/*` → `./src/*` (path alias configured in tsconfig.json)

### Next.js Configuration
- **React Compiler**: Enabled (`reactCompiler: true` in next.config.ts)
  - Automatically optimizes React components
  - Reduces manual memoization needs

### ESLint Setup
- Uses Next.js recommended configs: `core-web-vitals` + `typescript`
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Architecture Notes

### App Router Pattern
This project uses Next.js App Router (not Pages Router):
- All routes defined in `src/app/` directory
- `layout.tsx` provides shared UI structure
- Server Components by default (use `"use client"` directive when needed)
- File-based routing with nested layouts support

### Font Optimization
- Fonts loaded via `next/font/google` for automatic optimization
- Geist Sans and Geist Mono configured with CSS variables:
  - `--font-geist-sans`
  - `--font-geist-mono`

### Styling Approach
- Tailwind CSS v4 with PostCSS plugin
- Dark mode support via `dark:` variant
- Global styles in `src/app/globals.css`

## Development Workflow

When adding new features:
1. Create routes by adding folders/files in `src/app/`
2. Use Server Components by default for better performance
3. Add `"use client"` only when browser APIs or interactivity needed
4. Import shared components using `@/` path alias
5. Run `npm run lint` before committing
