# Shikhar Sahdev — Portfolio

A plain static site (HTML/CSS/JS, no framework, no client-side rendering, **no build step**). All content lives directly in [`public/index.html`](public/index.html) so search engines and social crawlers see the full page immediately — no JavaScript execution required.

## Structure

```
public/
  index.html              # the entire site — all content, meta tags, JSON-LD
  assets/
    css/
      style.css            # hand-written plain CSS (no compiler)
    js/
      main.js               # modal open/close logic
      starry-background.js  # canvas background animation
  *.png, *.svg, *.webp    # images, favicon, manifest, robots.txt, sitemap.xml
```

## Scripts

```bash
npm install     # installs gh-pages only (dev-time deploy tool, nothing ships to the browser)
npm start       # serves ./public locally for preview (npx serve)
npm run deploy  # pushes ./public to the `deployment` branch via gh-pages
```

## Deployment

Unchanged from before: `npm run deploy` pushes the contents of `public/` to the `deployment` branch, which GitHub Pages serves at the custom domain in [`public/CNAME`](public/CNAME).

## Editing content

Since there's no templating, edit the HTML directly in `public/index.html`. The experience cards and their modals are hand-written blocks (search for `data-modal-target` and `id="modal-`) rather than generated from a data array — a few more lines to touch when updating content, but it means the full text is always present in the shipped HTML for SEO.
