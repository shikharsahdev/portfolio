#!/usr/bin/env python3
"""Generate /work/ (case index) and /404.html — shared chrome with the rest."""

import os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
SITE = 'https://shikhar.sah.dev'
V = '28'

CASES = [
    ('01', 'Goldcast', 'goldcast', '/gc.svg', 'Founding Engineer · Product & Engineering',
     'Aug 2020 — Dec 2025', 'Helped shape Goldcast’s Events app, then led it for 2–3 years: its attendee experience, WebRTC video, and Backstage workflow for speakers and producers.'),
    ('02', 'Shipsy', 'shipsy', '/shipsy.webp', 'Full-Stack Developer',
     'Oct 2019 — Aug 2020', 'Built customer-focused logistics features across DTDC pricing, returns and settlements, and configurable last-mile tracking for a pan-India Domino’s contract.'),
    ('03', 'ICMR & AITSC', 'icmr-aitsc', '/aiimsxicmr.webp', 'Software Engineer, Research Collaboration',
     '2016 — 2018', 'Built and deployed a digital trauma-patient enrollment system across five government hospitals, including on-site infrastructure and staff training.'),
    ('04', 'Samsung R&D', 'samsung', '/samsung.svg', 'Software Engineer, Security Systems',
     '2018 — 2019', 'Worked on bootloader and data-security modules across Samsung chipsets, with contributions to privacy tooling and 5G configuration systems.'),
]

NAV = '''    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <a class="mark" href="/" aria-label="Shikhar Sahdev — home"><img src="/assets/img/avatar-hero-face.webp" alt="" width="40" height="40" /></a>
          <span class="label loc">Bangalore, India</span>
        </div>
        <nav aria-label="Primary">
          <a href="/work/">Work</a>
          <a href="/about/">About</a>
        </nav>
        <div class="topbar-right">
          <a class="mail" href="mailto:shikharsahdev@gmail.com">shikharsahdev@gmail.com</a>
          <a class="icon-link mail-icon" href="mailto:shikharsahdev@gmail.com" aria-label="Email Shikhar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
          </a>
          <a class="icon-link" href="https://linkedin.com/in/shikharsahdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 5.00a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.1 8.44h3.8V21H3.1V8.44Zm6.07 0h3.64v1.72h.05c.51-.96 1.75-1.97 3.6-1.97 3.85 0 4.56 2.53 4.56 5.83V21h-3.8v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V21H9.17V8.44Z"/></svg>
          </a>
        </div>
      </div>
    </header>
'''

FOOTER = '''    <footer class="footer" id="contact">
      <div class="shell">
        <div class="footer-contact">
          <div class="footer-intro">
            <img class="footer-avatar" src="/assets/img/avatar-hero-face.webp" alt="" width="48" height="48" />
            <h2>Want to chat?</h2>
          </div>
          <div class="footer-links">
            <a href="mailto:shikharsahdev@gmail.com">Email me</a>
            <a href="https://linkedin.com/in/shikharsahdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/work/">Work</a>
          <a href="/about/">About</a>
          <a href="/work/goldcast/">Goldcast</a>
          <a href="/work/shipsy/">Shipsy</a>
          <a href="/work/icmr-aitsc/">ICMR &amp; AITSC</a>
          <a href="/work/samsung/">Samsung R&amp;D</a>
        </nav>
        <p class="footer-fine">&copy; 2026 Shikhar Sahdev</p>
      </div>
    </footer>
'''

HEAD_COMMON = f'''    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="/assets/img/avatar-hero-face.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#fae0c8" />
    <link rel="apple-touch-icon" href="/assets/img/avatar-hero-face.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/style.css?v=57" />
'''


def work_index():
    rows = []
    items = []
    for i, (no, name, slug, logo, role, dates, blurb) in enumerate(CASES, 1):
        rows.append(f'''          <article class="case">
            <a class="case-btn" href="/work/{slug}/">
              <div class="case-grid">
                <span class="case-no">{no}</span>
                <div>
                  <h3 class="case-title">{name}</h3>
                  <p class="case-role">{role}</p>
                  <p class="case-brief">{blurb}</p>
                  <span class="case-more">View case study</span>
                </div>
                <div class="case-side">
                  <div class="case-dates">{dates}</div>
                </div>
              </div>
            </a>
          </article>''')
        items.append(f'''        {{ "@type": "ListItem", "position": {i}, "name": "{name}", "url": "{SITE}/work/{slug}/" }}''')

    return f'''<!DOCTYPE html>
<html lang="en">
  <head>
{HEAD_COMMON}
    <title>Work — Case Studies | Shikhar Sahdev</title>
    <meta name="description" content="Explore product engineering work by Shikhar Sahdev: leading Goldcast’s Events app, building logistics products at Shipsy, and shipping digital health and security systems." />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Shikhar Sahdev" />
    <link rel="canonical" href="{SITE}/work/" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="{SITE}/work/" />
    <meta property="og:title" content="Work — Case Studies | Shikhar Sahdev" />
    <meta property="og:description" content="Explore product engineering work by Shikhar Sahdev: leading Goldcast’s Events app, building logistics products at Shipsy, and shipping digital health and security systems." />
    <meta property="og:image" content="{SITE}/assets/img/og-card.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Shikhar Sahdev — Product Engineer" />
    <meta property="og:site_name" content="Shikhar Sahdev Portfolio" />
    <meta property="og:locale" content="en_US" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@shikharsahdev" />
    <meta property="twitter:title" content="Work — Case Studies | Shikhar Sahdev" />
    <meta property="twitter:description" content="Explore Shikhar Sahdev’s work leading products and building across real-time events, logistics, digital health and security." />
    <meta property="twitter:image" content="{SITE}/assets/img/og-card.jpg" />

    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Work — Case Studies",
      "url": "{SITE}/work/",
      "description": "Case studies of user-centered products built by Shikhar Sahdev, combining product direction with engineering craft.",
      "inLanguage": "en-US",
      "mainEntity": {{
        "@type": "ItemList",
        "itemListElement": [
{','.join(chr(10) + i for i in items)}
        ]
      }}
    }}
    </script>
    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "{SITE}/" }},
        {{ "@type": "ListItem", "position": 2, "name": "Work", "item": "{SITE}/work/" }}
      ]
    }}
    </script>
  </head>
  <body>
    <a href="#work" class="skip-link">Skip to main content</a>
{NAV}
    <main>
      <section class="section section--first" id="work">
        <div class="shell">
          <nav class="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Work</span>
          </nav>

          <div class="section-head">
            <h1>Selected<br />Work</h1>
            <p>Product thinking with engineering depth: leading an events app, building logistics products, digitizing hospital workflows, and shipping secure systems.</p>
          </div>

{chr(10).join(rows)}

          <a class="next-page" href="/about/">
            <span class="next-page-label">More about me</span>
            <span class="next-page-title">Background &amp; Journey</span>
            <span class="next-page-note">How curiosity at 12 became a decade of product engineering.</span>
          </a>
        </div>
      </section>
    </main>
{FOOTER}    <script src="/assets/js/scroll-leaf.js?v=5" defer></script>
  </body>
</html>
'''


def not_found():
    return f'''<!DOCTYPE html>
<html lang="en">
  <head>
{HEAD_COMMON}
    <title>Page not found | Shikhar Sahdev</title>
    <meta name="description" content="That page doesn't exist. Head back to the work, the about page, or the homepage." />
    <meta name="robots" content="noindex, follow" />
  </head>
  <body>
{NAV}
    <main>
      <section class="section section--first">
        <div class="shell">
          <div class="section-head">
            <h1>404<br />Not Found</h1>
            <p>That page doesn't exist — it may have moved, or the link may be wrong.</p>
          </div>
          <nav class="footer-nav" aria-label="Suggested pages" style="margin-top:2.5rem">
            <a href="/">Home</a>
            <a href="/work/">Work</a>
            <a href="/about/">About</a>
          </nav>
        </div>
      </section>
    </main>
{FOOTER}    <script src="/assets/js/scroll-leaf.js?v=5" defer></script>
  </body>
</html>
'''


def main():
    os.makedirs(os.path.join(ROOT, 'work'), exist_ok=True)
    with open(os.path.join(ROOT, 'work', 'index.html'), 'w') as f:
        f.write(work_index())
    print('wrote work/index.html')
    with open(os.path.join(ROOT, '404.html'), 'w') as f:
        f.write(not_found())
    print('wrote 404.html')


if __name__ == '__main__':
    main()
