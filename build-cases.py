#!/usr/bin/env python3
"""Generate the /work/<slug>/ case-study pages from a single content source.

Run:  python3 build-cases.py
The four pages share one template, so layout and metadata changes stay in sync.
"""

import os
import html

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
SITE = 'https://shikhar.sah.dev'
ASSET_V = '13'

CASES = [
    {
        'slug': 'goldcast',
        'short_title': 'Goldcast — Founding Engineer to Acquisition',
        'shot_w': 1600, 'shot_h': 898,
        'logo_w': 64, 'logo_h': 64,
        'published': '2024-01-15', 'modified': '2026-08-14',
        'no': '01',
        'name': 'Goldcast',
        'logo': '/gc.svg',
        'role': 'Founding Engineer & Product-Focused Engineer',
        'dates': 'Aug 2020 — Present',
        'dates_note': 'Goldcast was acquired by Cvent in December 2025',
        'dates_iso': '2020-08',
        'category': 'Zero to acquisition',
        'tag': 'Founding Engineer',
        'org_url': 'https://goldcast.io',
        'summary': 'Employee number two at a pre-product startup. I built the events platform from nothing, it became the company’s primary revenue engine at $20M ARR, and in December 2025 Goldcast was acquired by Cvent.',
        'meta_desc': 'Founding engineer at Goldcast: built the events platform from zero as employee number two, scaled it to $20M ARR, and saw it acquired by Cvent in 2025.',
        'shot': '/assets/img/goldcast-platform.webp',
        'shot_alt': 'The Goldcast events platform, showing a live multi-speaker stage with chat and agenda panels',
        'shot_caption': 'Goldcast’s events platform — live stage, chat, agenda and breakouts running on WebRTC.',
        'metrics': [
            ('Acquired', 'by Cvent, Dec 2025', 'the platform I built from zero became the reason for the deal'),
            ('$20M', 'ARR from zero', 'the company’s primary revenue engine'),
            ('2nd', 'Employee', 'joined pre-product — there was no product to work on yet'),
        ],
        'overview': [
            'I joined Goldcast as the <b>second employee</b>, before there was a product. I designed and built the entire events platform — from UX through to implementation — and it became the company’s primary revenue engine, carrying it from <b>zero to $20M ARR</b>.',
            'In <b>December 2025 Goldcast was acquired by Cvent</b>, the event-management company backed by Blackstone that serves around 30,000 customers and most of the Fortune 100. The platform I built from nothing is what that deal was for. Along the way Goldcast was named to <b>Deloitte’s 2025 Technology Fast 500</b>, and the product ran events for teams at OpenAI, Canva, Mailchimp, Box, Intercom, LG and Zuora.',
            'The core of the work was real-time: architecting audio/video systems on <b>WebRTC</b> that hold up for thousands of concurrent attendees, including inside locked-down enterprise networks. Alongside that I designed a fully customizable theming architecture no competitor offered, letting organizers match their own brand end to end.',
            'Over the past two years I moved into a broader leadership role — guiding multiple teams, mentoring engineers, and shaping architecture and product strategy across business lines.',
        ],
        'sections': [
            ('What I built', [
                ('Real-time AV infrastructure', 'Architected WebRTC-based audio and video supporting thousands of concurrent attendees, with reliable streaming inside enterprise networks.'),
                ('Theming architecture', 'A frontend system allowing complete event-brand customization without a performance cost — a capability no competitor offered.'),
                ('Hybrid events', 'Infrastructure supporting virtual and in-person attendees in the same event, interacting seamlessly.'),
                ('Digital check-in', 'Authenticator- and code-based check-in systems for on-site attendees.'),
                ('AI initiatives', 'A transcript-aware AI Video Editor and a Generative Page Builder Agent.'),
                ('Recording Studio', 'Extended the platform beyond live events into asynchronous video creation.'),
            ]),
            ('Hard problems', [
                ('Enterprise networks block AV', 'Solved streaming inside restrictive corporate firewalls using the Agora SDK plus cloud proxy solutions.'),
                ('Customization vs. performance', 'Built a theming system permitting complete UI customization while keeping render performance intact.'),
                ('Two audiences, one event', 'Architected hybrid infrastructure so virtual and physical attendees share a single coherent experience.'),
                ('Editing video automatically', 'Developed an AI pipeline that analyses transcripts and makes automated editing decisions.'),
            ]),
        ],
        'takeaway': 'How to take a product from an empty repository to an acquisition — building the thing, scaling it to $20M ARR, and leading the teams that carried it there.',
        'stack': ['React', 'WebRTC', 'Agora SDK', 'Node.js', 'Real-time systems', 'Frontend architecture', 'AI/LLM tooling'],
    },
    {
        'slug': 'shipsy',
        'short_title': 'Shipsy — Full-Stack Developer',
        'shot_w': 1600, 'shot_h': 877,
        'logo_w': 64, 'logo_h': 64,
        'published': '2024-01-15', 'modified': '2026-08-14',
        'no': '02',
        'name': 'Shipsy',
        'logo': '/shipsy.webp',
        'role': 'Full-Stack Developer — Product Ownership & Market Expansion',
        'dates': 'Oct 2019 — Aug 2020',
        'dates_iso': '2019-10',
        'category': 'Growth phase',
        'tag': 'Ownership & Scale',
        'org_url': 'https://shipsy.io',
        'summary': 'Became star performer handling critical projects for major clients like DTDC, and built the systems that unlocked pan-India contracts.',
        'meta_desc': 'How Shikhar Sahdev built pricing, returns and last-mile tracking at Shipsy — unlocking Domino’s pan-India contract and Middle East expansion.',
        'shot': '/assets/img/shipsy-platform.webp',
        'shot_alt': 'The Shipsy smart logistics management platform marketing site',
        'shot_caption': 'Shipsy’s logistics management platform — the product I built pricing, returns and tracking into.',
        'metrics': [
            ('DTDC', 'Pricing modules', 'built for one of India’s largest logistics players'),
            ('Pan-India', 'Domino’s contract', 'unlocked by a generic last-mile tracking solution'),
            ('RTL/LTR', 'Middle East launch', 'established the region as a new business hub'),
        ],
        'overview': [
            'I became the star performer within months and was trusted with the projects that mattered most commercially. I handled pricing modules for <b>DTDC</b>, one of India’s biggest logistics players, and built a complex returns and settlements system the company had never supported before.',
            'The highest-leverage piece was a <b>generic last-mile tracking solution</b> — customizable enough to serve any client, which unlocked Domino’s pan-India contract and could scale to McDonald’s, Swiggy and Zomato without a rewrite.',
            'During COVID I built contactless delivery workflows, and created RTL/LTR compatible solutions for Middle East expansion — establishing Shipsy’s presence in that region.',
        ],
        'sections': [
            ('What I built', [
                ('Pricing modules for DTDC', 'Handled pricing for one of India’s biggest logistics players.'),
                ('Returns & settlements', 'A complex system from scratch, covering payments, settlements and the full order lifecycle.'),
                ('Generic last-mile tracking', 'A customizable tracking product that unlocked Domino’s pan-India contract and scaled to other clients.'),
                ('Middle East platform', 'RTL/LTR compatible logistics platform enabling regional expansion.'),
                ('Contactless delivery', 'COVID-era workflows for safe, no-contact handover.'),
            ]),
            ('Hard problems', [
                ('One product, many clients', 'Designed the tracking solution generically, with a customizable UI, so McDonald’s, Swiggy and Zomato could be served from the same base.'),
                ('Returns are a lifecycle, not a screen', 'Handled payments, settlements and order state across the whole return journey.'),
                ('Right-to-left is not a CSS flag', 'Built genuine RTL/LTR support for international market expansion.'),
                ('Safety under constraint', 'Architected contactless workflows that met COVID-19 compliance without breaking existing operations.'),
            ]),
        ],
        'takeaway': 'How to become a star performer by taking ownership of critical projects, building solutions generic enough to scale, and expanding a product into new markets.',
        'stack': ['Full-stack', 'JavaScript', 'Node.js', 'Logistics systems', 'i18n / RTL', 'Payments & settlements'],
    },
    {
        'slug': 'icmr-aitsc',
        'short_title': 'ICMR & AITSC — Software Engineer',
        'shot_w': 647, 'shot_h': 300,
        'logo_w': 647, 'logo_h': 300,
        'published': '2024-01-15', 'modified': '2026-08-14',
        'no': '03',
        'name': 'ICMR & AITSC',
        'logo': '/aiimsxicmr.webp',
        'role': 'Software Engineer — Research Collaboration',
        'dates': '2016 — 2018',
        'dates_iso': '2016',
        'category': 'Impact work',
        'tag': 'Real Impact',
        'org_url': 'https://icmr.gov.in',
        'summary': 'Solely built digital trauma-patient enrollment systems for 5 government hospitals across India, moving them from pen-and-paper to digital.',
        'meta_desc': 'How Shikhar Sahdev single-handedly built and deployed digital trauma-patient enrollment systems across five Indian government hospitals with ICMR and AIIMS.',
        'shot': None,
        'metrics': [
            ('5', 'Government hospitals', 'visited in person and ramped onto the system'),
            ('Solo', 'Build & deploy', 'sole engineer, from software to physical servers'),
            ('Paper → digital', 'Enrollment', 'first digital trauma registry for these hospitals'),
        ],
        'overview': [
            'I solely built the digital trauma-patient enrollment system that moved government hospitals off pen-and-paper. This was not just an application — I was handed <b>physical servers</b> at their locations, connected them to the internet, and made the system reachable and usable for hospital staff.',
            'I then personally visited and ramped up users at <b>5 different government hospitals</b> across India, all with high trauma-patient volumes. Training staff with widely varying technical confidence was as much of the job as the code.',
            'The project succeeded and set a path for Indian hospitals — especially government hospitals — to adopt digital enrollment practices.',
        ],
        'sections': [
            ('What I built', [
                ('Trauma-patient enrollment system', 'Designed and built the whole thing solo, from data model to interface.'),
                ('On-site server infrastructure', 'Deployed physical servers at hospital sites and connected them to the internet.'),
                ('Rollout across 5 hospitals', 'Visited each hospital in person, trained staff and ramped real usage.'),
                ('A template for digital health', 'Laid groundwork for wider digital enrollment adoption in Indian government hospitals.'),
            ]),
            ('Hard problems', [
                ('Security in a hospital network', 'Built secure patient enrollment for government hospital networks handling sensitive medical data.'),
                ('Infrastructure with no ops team', 'Deployed and configured physical server hardware myself, on site.'),
                ('Users, not developers', 'Designed an interface usable by hospital staff with a wide range of technical skill.'),
                ('Medical data compliance', 'Met data security and regulatory requirements for patient records.'),
            ]),
        ],
        'takeaway': 'How to build systems that create real-world impact, work inside government institutions, and move an organisation from legacy process to digital.',
        'stack': ['Full-stack', 'Server deployment', 'Healthcare data', 'Security & compliance', 'On-site training'],
    },
    {
        'slug': 'samsung',
        'short_title': 'Samsung R&D — Security Engineer',
        'shot_w': 240, 'shot_h': 80,
        'logo_w': 240, 'logo_h': 80,
        'published': '2024-01-15', 'modified': '2026-08-14',
        'no': '04',
        'name': 'Samsung R&D',
        'logo': '/samsung.svg',
        'role': 'Software Engineer — Security Systems',
        'dates': '2018 — 2019',
        'dates_iso': '2018',
        'category': 'Corporate',
        'tag': 'Values & Purpose',
        'org_url': 'https://research.samsung.com',
        'summary': 'Built bootloader and data security modules across Samsung chipsets, contributing to ML-based privacy tools and 5G configuration systems.',
        'meta_desc': 'Shikhar Sahdev’s work at Samsung R&D on bootloader and data security modules across chipsets, ML-based privacy tools and 5G configuration systems.',
        'shot': None,
        'metrics': [
            ('Chipset', 'Level security', 'bootloader and data security modules'),
            ('ML', 'Privacy tooling', 'machine-learning based data protection'),
            ('5G', 'Configuration', 'network optimisation systems'),
        ],
        'overview': [
            'At Samsung R&D I built <b>bootloader and data security modules</b> across Samsung chipsets, and contributed to ML-based privacy tools and 5G configuration systems. Technically it was solid, low-level work at real scale.',
            'It also taught me something I needed to learn. The corporate environment was not where I felt most alive — the work felt monotonous, and I wanted more direct impact and creative freedom. That realisation is what pushed me toward product work, and everything after it.',
        ],
        'sections': [
            ('What I built', [
                ('Bootloader security', 'Secure bootloader systems across Samsung chipset architecture.'),
                ('Data security modules', 'Security infrastructure spanning the chipset ecosystem.'),
                ('ML-based privacy tools', 'Machine-learning tooling for data protection.'),
                ('5G configuration systems', 'Configuration systems supporting network optimisation.'),
            ]),
            ('Hard problems', [
                ('Security at the boot layer', 'Developing secure bootloaders for chipset architecture, where mistakes are unrecoverable.'),
                ('Compliance across variants', 'Ensuring security compliance held across multiple chipset variants.'),
                ('Privacy without friction', 'Building ML-driven data protection that did not degrade the device experience.'),
            ]),
        ],
        'takeaway': 'How large-scale enterprise engineering works — and how much it matters to find work that lines up with your values.',
        'stack': ['C / low-level', 'Bootloader', 'Chipset security', 'Machine learning', '5G systems'],
    },
]

NAV = '''    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <a class="mark" href="/" aria-label="Shikhar Sahdev — home">SS</a>
          <span class="label loc">New Delhi, India</span>
        </div>
        <nav aria-label="Primary">
          <a href="/#work">Work</a>
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


def esc(s):
    return html.escape(s, quote=False)


def render(case, prev_case, next_case):
    slug, name = case['slug'], case['name']
    url = f"{SITE}/work/{slug}/"

    metrics = '\n'.join(
        f'''          <div class="metric">
            <div class="metric-value" data-count-to="{esc(v)}">{esc(v)}</div>
            <div class="metric-label">{esc(l)}</div>
            <p class="metric-note">{esc(n)}</p>
          </div>''' for v, l, n in case['metrics'])

    shot = ''
    if case['shot']:
        shot = f'''
        <figure class="case-shot reveal">
          <img src="{case['shot']}?v={ASSET_V}" alt="{esc(case['shot_alt'])}" width="1600" height="898" loading="lazy" decoding="async" />
          <figcaption>{esc(case['shot_caption'])}</figcaption>
        </figure>'''
    else:
        shot = f'''
        <figure class="case-shot case-shot--mark reveal">
          <img src="{case['logo']}" alt="{esc(name)} logo" width="{case['logo_w']}" height="{case['logo_h']}" loading="lazy" decoding="async" />
          <figcaption>Work under NDA / pre-dating public product surfaces &mdash; no shipped screenshots to show.</figcaption>
        </figure>'''

    overview = '\n'.join(f'          <p>{p}</p>' for p in case['overview'])

    blocks = []
    nav_items = ['<a href="#overview">Overview</a>']
    for i, (heading, items) in enumerate(case['sections']):
        anchor = 'built' if i == 0 else 'problems'
        nav_items.append(f'<a href="#{anchor}">{esc(heading)}</a>')
        rows = '\n'.join(
            f'''            <li class="reveal">
              <h3>{esc(t)}</h3>
              <p>{esc(d)}</p>
            </li>''' for t, d in items)
        blocks.append(f'''        <section class="case-block" id="{anchor}">
          <h2 class="case-h2">{esc(heading)}</h2>
          <ol class="case-list">
{rows}
          </ol>
        </section>''')
    nav_items.append('<a href="#takeaway">Takeaway</a>')
    sections = '\n\n'.join(blocks)
    subnav = '\n            '.join(nav_items)

    stack = '\n'.join(f'            <li>{esc(s)}</li>' for s in case['stack'])

    pager = []
    if prev_case:
        pager.append(f'''          <a class="pager-item pager-prev" href="/work/{prev_case['slug']}/">
            <span class="pager-dir">&larr; Previous</span>
            <span class="pager-name">{esc(prev_case['name'])}</span>
          </a>''')
    else:
        pager.append('          <span></span>')
    if next_case:
        pager.append(f'''          <a class="pager-item pager-next" href="/work/{next_case['slug']}/">
            <span class="pager-dir">Next &rarr;</span>
            <span class="pager-name">{esc(next_case['name'])}</span>
          </a>''')
    else:
        pager.append('          <span></span>')
    pager_html = '\n'.join(pager)

    outcome_fact = (f"            <div><dt>Outcome</dt><dd>{esc(case['dates_note'])}</dd></div>"
                    if case.get('dates_note') else '')

    return f'''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#f4f3ef" />

    <title>{esc(case['short_title'])} | Shikhar Sahdev</title>
    <meta name="description" content="{esc(case['meta_desc'])}" />
    <meta name="author" content="Shikhar Sahdev" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="article" />
    <meta property="og:url" content="{url}" />
    <meta property="og:title" content="{esc(case['short_title'])} | Shikhar Sahdev" />
    <meta property="og:description" content="{esc(case['meta_desc'])}" />
    <meta property="og:image" content="{SITE}{case['shot'] or '/assets/img/og-card.jpg'}" />
    <meta property="og:image:width" content="{case['shot_w'] if case['shot'] else 1200}" />
    <meta property="og:image:height" content="{case['shot_h'] if case['shot'] else 630}" />
    <meta property="og:image:alt" content="{esc(case['shot_alt']) if case['shot'] else 'Shikhar Sahdev — Product Engineer'}" />
    <meta property="article:published_time" content="{case['published']}" />
    <meta property="article:modified_time" content="{case['modified']}" />
    <meta property="article:author" content="Shikhar Sahdev" />
    <meta property="og:site_name" content="Shikhar Sahdev Portfolio" />
    <meta property="og:locale" content="en_US" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="{esc(case['short_title'])} | Shikhar Sahdev" />
    <meta property="twitter:description" content="{esc(case['meta_desc'])}" />
    <meta property="twitter:image" content="{SITE}{case['shot'] or '/assets/img/og-card.jpg'}" />
    <meta property="twitter:site" content="@shikharsahdev" />
    <meta property="twitter:creator" content="@shikharsahdev" />

    <link rel="canonical" href="{url}" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Archivo+Black&family=Big+Shoulders+Display:wght@800;900&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="/assets/css/style.css?v={ASSET_V}" />

    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "{esc(name)} — {esc(case['role'])}",
      "description": "{esc(case['meta_desc'])}",
      "url": "{url}",
      "inLanguage": "en-US",
      "datePublished": "{case['published']}",
      "dateModified": "{case['modified']}",
      "image": "{SITE}{case['shot'] or '/assets/img/og-card.jpg'}",
      "author": {{ "@type": "Person", "name": "Shikhar Sahdev", "url": "{SITE}" }},
      "publisher": {{ "@type": "Person", "name": "Shikhar Sahdev", "url": "{SITE}" }},
      "about": {{ "@type": "Organization", "name": "{esc(name)}", "url": "{case['org_url']}" }},
      "mainEntityOfPage": {{ "@type": "WebPage", "@id": "{url}" }}
    }}
    </script>

    <script type="application/ld+json">
    {{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {{ "@type": "ListItem", "position": 1, "name": "Home", "item": "{SITE}/" }},
        {{ "@type": "ListItem", "position": 2, "name": "Work", "item": "{SITE}/work/" }},
        {{ "@type": "ListItem", "position": 3, "name": "{esc(name)}", "item": "{url}" }}
      ]
    }}
    </script>
  </head>

  <body>
    <a href="#overview" class="skip-link">Skip to main content</a>

{NAV}
    <main class="case-page">
      <header class="case-hero">
        <div class="shell">
          <nav class="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/work/">Work</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{esc(name)}</span>
          </nav>

          <div class="case-hero-top">
            <span class="case-hero-no">{case['no']}</span>
            <div class="case-hero-logo"><img src="{case['logo']}" alt="{esc(name)} logo" width="64" height="64" /></div>
          </div>

          <h1 class="case-hero-title">{esc(name)}</h1>
          <p class="case-hero-role">{esc(case['role'])}</p>
          <p class="case-hero-summary">{esc(case['summary'])}</p>

          <dl class="case-facts">
            <div><dt>Period</dt><dd><time datetime="{case['dates_iso']}">{esc(case['dates'])}</time></dd></div>
            <div><dt>Chapter</dt><dd>{esc(case['category'])}</dd></div>
{outcome_fact}
            <div><dt>Focus</dt><dd>{esc(case['tag'])}</dd></div>
          </dl>
        </div>
      </header>

      <div class="shell">
{shot}

        <div class="metrics">
{metrics}
        </div>

        <nav class="case-subnav" aria-label="On this page">
          <div class="case-subnav-inner">
            {subnav}
          </div>
        </nav>

        <section class="case-block" id="overview">
          <h2 class="case-h2">Overview</h2>
          <div class="case-prose">
{overview}
          </div>
        </section>

{sections}

        <section class="case-block" id="takeaway">
          <h2 class="case-h2">Takeaway</h2>
          <p class="case-takeaway-big">{esc(case['takeaway'])}</p>
          <h3 class="case-stack-head">What I worked with</h3>
          <ul class="case-stack">
{stack}
          </ul>
        </section>

        <nav class="pager" aria-label="Other case studies">
{pager_html}
        </nav>
      </div>
    </main>

{FOOTER}
    <script src="/assets/js/case.js?v={ASSET_V}" defer></script>
  </body>
</html>
'''


def main():
    for i, case in enumerate(CASES):
        prev_case = CASES[i - 1] if i > 0 else None
        next_case = CASES[i + 1] if i < len(CASES) - 1 else None
        d = os.path.join(ROOT, 'work', case['slug'])
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, 'index.html'), 'w') as f:
            f.write(render(case, prev_case, next_case))
        print('wrote', f"work/{case['slug']}/index.html")


if __name__ == '__main__':
    main()
