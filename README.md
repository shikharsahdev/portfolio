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

### Image sources

The images are stored as WebP files in `public/assets/img`. Case study captions link to their image sources.

- `goldcast-live-event.webp` and `goldcast-event-experience.webp`: [Goldcast Events](https://www.goldcast.io/platform/events).
- `goldcast-branded-events.webp`: [Goldcast event branding](https://www.goldcast.io/platform/branding).
- `shipsy-food-delivery.webp`: [Shipsy’s food delivery logistics article](https://shipsy.io/blogs/how-to-overcome-common-food-delivery-logistics-challenges/).
- `shipsy-parcel-delivery.webp`: [Shipsy’s proof-of-delivery product update](https://shipsy.io/product-updates/delivery-scan-proof-of-delivery/).
- `shipsy-contactless-delivery.webp`: [Shipsy’s 2020 contactless delivery article](https://shipsy.io/blogs/how-contactless-delivery-is-helping-businesses-to-stand-strong-during-covid-19/).
- `aiims-trauma-centre.webp`: [JPNA Trauma Center by Vishnoi M](https://commons.wikimedia.org/wiki/File:JPNA_Trauma_Center.jpg), resized and converted to WebP under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- `samsung-exynos-board.webp`: [Samsung Exynos 4 Quad on a Galaxy S III board by Köf3](https://commons.wikimedia.org/wiki/File:Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg), cropped, resized, and converted to WebP under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
- `shikhar-playing-guitar.webp` and `shikhar-portrait.webp`: `public/intro.jpeg` and `public/me.jpeg` from the first version of this portfolio (`b38eb35`).
