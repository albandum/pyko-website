# Pyko Marketing Website

Beautiful marketing website for Pyko - the Revenue Radar for your CRM.

Built with Astro 4.x and Tailwind CSS 4.x.

## Development

### Prerequisites

- Node.js 20.x or later
- npm

### Setup

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Open http://localhost:4321 in your browser.

### Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push to the `main` branch to trigger deployment

The workflow will automatically:
- Install dependencies
- Build the site
- Deploy to GitHub Pages

### Custom Domain

To use a custom domain:

1. Update `site` in `astro.config.mjs` to your domain
2. Add a CNAME file in the `public/` directory with your domain
3. Configure DNS with your domain provider

## Site Structure

- `/` - Homepage
- `/product/live-alerts` - Live Alerts product page
- `/product/cleaning-rules` - Cleaning Rules product page
- `/product/actions` - Actions product page
- `/product/analytics` - Analytics product page
- `/integrations/salesforce` - Salesforce integration
- `/integrations/hubspot` - HubSpot integration
- `/integrations/slack` - Slack integration
- `/integrations/teams` - Microsoft Teams integration
- `/solutions/sales-teams` - Sales Teams solution
- `/solutions/sales-managers` - Sales Managers solution
- `/solutions/revenue-operations` - RevOps solution
- `/pricing` - Pricing page
- `/templates` - Template library
- `/about` - About page
- `/contact` - Contact page
- `/blog` - Blog index
- `/docs` - Documentation hub
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Brand Assets

### Color Palette

- Navy: `#0F172A` - Primary brand color
- Accent: `#3B82F6` - Primary CTA and links
- Orange: `#F97316` - Secondary accent
- Success: `#10B981` - Success states

### Typography

- Headings: Inter (system sans-serif fallback)
- Body: System font stack

## License

Proprietary - All rights reserved
