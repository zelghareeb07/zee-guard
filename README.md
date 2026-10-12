# ZeeGuard

Custom-protection marketing site for ZeeGuard mouthguards, built with Next.js 15 (App
Router), React 19, TypeScript, and Tailwind CSS — recreated pixel-for-pixel from the
supplied design screenshots.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Pages

| Route             | Purpose                                                        |
| ------------------ | --------------------------------------------------------------- |
| `/`                | Home — hero, features, trust stats, category preview, process, comparison table, testimonials, FAQ, CTA |
| `/gallery`         | Filterable design gallery                                       |
| `/categories`      | Pricing tiers (CoreFit / DesignFlex / Fusion) + Braces series    |
| `/designer`        | Interactive live-preview mouthguard configurator                |
| `/how-it-works`    | Six-step process timeline                                       |
| `/athletes`        | Sponsored athletes, stats, and verified reviews                 |
| `/contact`         | Contact methods, validated contact form (React Hook Form + Zod), lab locations |
