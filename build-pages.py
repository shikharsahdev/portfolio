#!/usr/bin/env python3
"""Generate /work/ (case index) and /404.html — shared chrome with the rest."""

import os

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
SITE = 'https://shikhar.sah.dev'
V = '13'

CASES = [
    ('01', 'Goldcast', 'goldcast', '/gc.svg', 'Founding Engineer & Product-Focused Engineer',
     'Aug 2020 — Present', 'Employee #2 at a pre-product startup. Built the events platform from scratch, scaled it to $20M ARR, and saw it acquired by Cvent in December 2025.'),
    ('02', 'Shipsy', 'shipsy', '/shipsy.webp', 'Full-Stack Developer',
     'Oct 2019 — Aug 2020', 'Pricing modules for DTDC, a returns and settlements system built from scratch, and last-mile tracking that unlocked Domino’s pan-India contract.'),
    ('03', 'ICMR & AITSC', 'icmr-aitsc', '/aiimsxicmr.webp', 'Software Engineer, Research Collaboration',
     '2016 — 2018', 'Solely built and deployed digital trauma-patient enrollment across five Indian government hospitals, replacing pen-and-paper.'),
    ('04', 'Samsung R&D', 'samsung', '/samsung.svg', 'Software Engineer, Security Systems',
     '2018 — 2019', 'Bootloader and data security modules across Samsung chipsets, plus ML-based privacy tools and 5G configuration systems.'),
]

NAV = '''    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <a class="mark" href="/" aria-label="Shikhar Sahdev — home">SS</a>
          <span class="label loc">New Delhi, India</span>
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
        <h2>Let's build something worth using</h2>
        <div class="footer-links">
          <a href="mailto:shikharsahdev@gmail.com">Email me</a>
          <a href="https://linkedin.com/in/shikharsahdev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
        <div class="footer-mark">SS</div>
        <p class="footer-fine">&copy; 2026 Shikhar Sahdev</p>
      </div>
    </footer>
'''

HEAD_COMMON = f'''    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f4f3ef" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Archivo+Black&family=Big+Shoulders+Display:wght@800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/style.css?v={V}" />
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
    <meta name="description" content="Case studies by Shikhar Sahdev — founding engineer at Goldcast (zero to a Cvent acquisition), plus Shipsy, ICMR digital health and Samsung R&amp;D." />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Shikhar Sahdev" />
    <link rel="canonical" href="{SITE}/work/" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="{SITE}/work/" />
    <meta property="og:title" content="Work — Case Studies | Shikhar Sahdev" />
    <meta property="og:description" content="Case studies from a decade of product engineering — Goldcast, Shipsy, ICMR &amp; AITSC, and Samsung R&amp;D." />
    <meta property="og:image" content="{SITE}/assets/img/og-card.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Shikhar Sahdev — Product Engineer" />
    <meta property="og:site_name" content="Shikhar Sahdev Portfolio" />
    <meta property="og:locale" content="en_US" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@shikharsahdev" />
    <meta property="twitter:title" content="Work — Case Studies | Shikhar Sahdev" />
    <meta property="twitter:description" content="Case studies from a decade of product engineering." />
    <meta property="twitter:image" content="{SITE}/assets/img/og-card.jpg" />

    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Work — Case Studies",
      "url": "{SITE}/work/",
      "description": "Case studies from a decade of product engineering by Shikhar Sahdev.",
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
            <p>A decade of building products — from a two-person startup I helped carry to a Cvent acquisition, to trauma registries in Indian government hospitals.</p>
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
{FOOTER}  </body>
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
{FOOTER}  </body>
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
