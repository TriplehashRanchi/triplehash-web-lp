# TripleHash — Business AI Systems

TripleHash's responsive landing page for founders who want their teams to get answers without calling them. The site introduces a custom AI system trained on how a founder thinks and decides, with a founder-call booking flow.

## Run locally

Use Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

For environments that restrict Turbopack's worker processes, build with `npx next build --webpack`.

## Project structure

```text
app/
  page.js                 Landing page and section order
  layout.js               Global fonts and site metadata
  globals.css             Shared styles and responsive diagrams
  api/meta-capi/route.js   Server-side Meta conversion events
  thankyou/               Application completion page
  disqualified/           Application qualification page
components/               Hero, sections, FAQ, and mobile CTA
public/                   Images, fonts, and brand assets
```

Built with Next.js App Router, React, Tailwind CSS, Motion, and Lucide icons. The landing page includes a video introduction, a responsive founder-decision diagram, service details, an application overview, and FAQs.

## Editing the page

- Update hero copy and its booking link in `components/Hero.jsx`.
- Change section order in `app/page.js` and section content in `components/`.
- Adjust the decision diagram's desktop and mobile styles in `app/globals.css`.
- Update browser metadata in `app/layout.js`. AI chip icons live in `app/icon.svg`, `app/favicon.ico`, and `app/apple-icon.png`.
- Booking links are also used in other sections and the mobile footer; search for `cal.hashboard.in` when changing the destination.

## Conversion tracking

The site includes a browser Meta Pixel and a server-side Conversions API endpoint. To enable server events, create `.env.local`:

```dotenv
META_CAPI_ACCESS_TOKEN=your_server_access_token
META_PIXEL_ID=your_pixel_id
META_GRAPH_API_VERSION=v26.0
```

Only the access token is required by the endpoint; the pixel ID and Graph API version have defaults. The browser pixel ID is configured separately in `components/MetaPixel.jsx`; keep it aligned with the server pixel. Keep access tokens server-side. Environment files are excluded from Git.

## Production

Deploy to hosting that supports Next.js server routes, configure the tracking environment variables if needed, then run the production build. The `/api/meta-capi` endpoint requires a server runtime; a static-only export will not support it.
