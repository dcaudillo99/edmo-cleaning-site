# EDMO Cleaning Services — Visual Clone

A static, single-page marketing site that visually replicates
[edmocleaning.com](https://edmocleaning.com/). Built as an **educational
visual/structural clone**: same overall layout, sections in the same order,
similar copy, and the same brand feel, with placeholder imagery.

> Not affiliated with EDMO. For educational/portfolio purposes only.

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) via the `@tailwindcss/vite` plugin
- Google Fonts (Inter + Manrope)

## Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  App.tsx              # composes the page
  main.tsx             # React entry
  index.css            # Tailwind import + theme tokens
  components/
    Header.tsx         # sticky top nav with mobile menu
    Hero.tsx           # two-column hero with CTA
    Stats.tsx          # dark stats strip
    About.tsx          # "Our experience"
    Services.tsx       # 3-card services grid
    CallBand.tsx       # green CTA strip with phone number
    Clients.tsx        # client logos row
    Difference.tsx     # final dark CTA section
    Footer.tsx         # dark footer with links/contact/social
    CookieBanner.tsx   # dismissible cookie banner (localStorage)
    Logo.tsx           # EDMO wordmark
    ArrowRight.tsx     # shared arrow icon
```

## Brand tokens (Tailwind theme)

| Token | Value |
| --- | --- |
| `brand-green` | `#9DC75C` |
| `brand-green-dark` | `#7DA838` |
| `brand-dark` | `#0E0E10` |
| `brand-navy` | `#1F2937` |

## Notes

- Images come from [Unsplash](https://unsplash.com/) as placeholders.
- The "UC San Diego" client logo is a text approximation, not the official mark.
- The contact email (`info@edmocleaning.com`) is illustrative only.
