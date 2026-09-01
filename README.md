# The 2 Hour Plan Landing Page

A standalone, conversion focused landing page for a digital product. Built with React, TypeScript, Vite, and Tailwind CSS. No third party checkout platform is embedded; wire up your own payment link in one place.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## Configuration

Everything content and pricing related lives in [`src/config/site.ts`](src/config/site.ts):

- Product name, author, and copy
- Pricing (current price, original price)
- **`purchaseUrl`** — replace this with your own checkout link (Stripe Payment Link, Lemon Squeezy, Paddle, etc.)
- Testimonials, FAQ, feature modules, comparison table, and calculator data

SEO metadata (title, description, Open Graph, Twitter card, canonical URL) is set in [`index.html`](index.html) and should be kept in sync with `siteConfig.seo`.

## Structure

```text
src/
  components/   # Presentational sections (Hero, Pricing, FAQ, ...)
  config/       # Central site content & pricing config
  hooks/        # useTheme, useCountdown, useScrolledPast
  App.tsx       # Composes all sections
```
