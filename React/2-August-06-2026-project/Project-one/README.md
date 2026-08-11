# Aura & Oud React Conversion

Converted from the supplied HTML into a React + Vite + Tailwind project.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components/layout`: shared site layout
- `src/components/sections`: page sections
- `src/components/ui`: reusable UI components
- `src/data`: repeated content
- `src/styles/tailwind.css`: Tailwind theme and base layer
- `src/styles/simple.css`: small amount of regular CSS

## Theme

The light/dark theme is controlled with the `dark` class on `<html>` and persisted in `localStorage` under `aura-oud-theme`.
