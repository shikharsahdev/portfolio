#!/usr/bin/env python3
"""Generate the /work/<slug>/ case-study pages from a single content source.

Run:  python3 build-cases.py
The four pages share one template, so layout and metadata changes stay in sync.
"""

import os
import html
import json

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
SITE = 'https://shikhar.sah.dev'
ASSET_V = '28'

CASES = [
    {
        'slug': 'goldcast',
        'short_title': 'Goldcast Events Platform — Product & Engineering',
        'shot_w': 1272, 'shot_h': 786,
        'logo_w': 64, 'logo_h': 64,
        'published': '2024-01-15', 'modified': '2026-11-12',
        'no': '01',
        'name': 'Goldcast',
        'logo': '/gc.svg',
        'role': 'Founding Engineer · Product & Engineering',
        'dates': 'Aug 2020 — Dec 2025',
        'dates_note': 'Goldcast was acquired by Cvent in December 2025',
        'dates_iso': '2020-08',
        'category': 'Zero to acquisition',
        'tag': 'Product & Engineering',
        'org_url': 'https://goldcast.io',
        'summary': 'I helped shape Goldcast’s Events app, then led it for 2–3 years as it became the company’s core product. My work spanned the attendee experience, WebRTC live video, and introducing Backstage for speakers and producers.',
        'meta_desc': 'Shikhar Sahdev helped shape Goldcast’s Events app and led it for 2–3 years, introducing Backstage and owning WebRTC live audio/video.',
        'shot': 'https://www.goldcast.io/images/platform/seamless_speaker_experience.webp',
        'shot_alt': 'Goldcast Events product showing speaker layout controls alongside the private Backstage area for event speakers',
        'shot_caption': 'Goldcast Events: speaker layout controls and Backstage in one view.',
        'sources': [
            ('Goldcast Events platform', 'https://www.goldcast.io/platform'),
            ('MarDreamin’ customer story', 'https://www.goldcast.io/customer-stories/mardreamin'),
            ('Cvent acquisition announcement', 'https://www.cvent.com/en/press-release/cvent-expands-ai-powered-event-marketing-capabilities-strategic-acquisition-goldcast'),
        ],
        'metrics': [
            ('Events', 'Core platform', 'the product at the center of Goldcast’s business'),
            ('Studio', 'On-demand video', 'extending the product beyond live events'),
            ('Content Lab', 'AI creation tools', 'video editing and generative page building'),
        ],
        'overview': [
            'I joined Goldcast as its <b>second employee</b>, before there was a product. I helped build the Events app into the company’s core product and main business, then led the app for <b>two to three years</b>. I moved between product direction, design decisions, and hands-on engineering to shape an end-to-end event experience.',
            'I helped define the product’s voice and how the experience worked, from attendee flows and event theming to the private <b>Backstage</b> concept for speakers and producers. I led the team’s work on hybrid-event flows and digital check-in for in-person attendees. As the company grew, I mentored engineers, guided teams, and shaped architecture and product strategy across business lines.',
            'I owned Goldcast’s <b>WebRTC</b> audio/video experience over multiple years. The work combined real-time systems engineering with a product goal: make a live event feel dependable and simple for thousands of attendees, including people joining through restrictive enterprise networks.',
            'I also led teams across major extensions to the platform. The <b>Recording Studio</b> was a substantial, multi-team effort that brought asynchronous video creation into Goldcast. I helped teams deliver Content Lab’s transcript-aware <b>AI Video Editor</b> and its <b>Generative Page Builder</b>, carrying product ideas through design and engineering. Goldcast’s platform became its primary revenue engine, reaching <b>$20M ARR</b> before Cvent acquired the company in December 2025. Goldcast was named to <b>Deloitte’s 2025 Technology Fast 500</b> and supported events for teams at OpenAI, Canva, Mailchimp, Box, Intercom, LG, and Zuora. Explore the <a href="https://www.goldcast.io/platform" target="_blank" rel="noopener noreferrer">Goldcast Events platform</a>, its <a href="https://www.goldcast.io/customer-stories/mardreamin" target="_blank" rel="noopener noreferrer">MarDreamin’ customer story</a>, and <a href="https://www.cvent.com/en/press-release/cvent-expands-ai-powered-event-marketing-capabilities-strategic-acquisition-goldcast" target="_blank" rel="noopener noreferrer">Cvent’s acquisition announcement</a>.',
            'As one example of the product’s customer impact, Goldcast’s published <a href="https://www.goldcast.io/customer-stories/mardreamin" target="_blank" rel="noopener noreferrer">MarDreamin’ story</a> reports that the event team saved more than 600 hours and reduced attendee technical-support requests by 89% after switching to the platform.',
        ],
        'sections': [
            ('Selected contributions', [
                ('Led the Events app', 'Helped shape Goldcast’s core product, then led product direction and delivery for two to three years.'),
                ('Shaped the event experience', 'Set product voice and interaction patterns across attendee flows, and led the team’s work on customizable event theming.'),
                ('Introduced Backstage', 'Led the introduction of a private space where speakers and producers could prepare, coordinate, and move into a live session.'),
                ('Owned WebRTC over the long haul', 'Solely built and maintained Goldcast’s real-time audio/video experience with WebRTC, Agora, and cloud proxy solutions, including support for locked-down enterprise networks.'),
                ('Brought virtual and in-person together', 'Led team efforts on hybrid event flows and digital check-in, including authenticator- and code-based entry for on-site attendees.'),
                ('Led the Recording Studio', 'Guided a substantial, multi-team effort to extend Goldcast into asynchronous video creation.'),
                ('Helped deliver Content Lab’s AI Video Editor', 'Worked with the team on a transcript-aware editor that made recorded content easier to shape and reuse.'),
                ('Helped deliver the Generative Page Builder', 'Partnered across product and engineering to bring AI-assisted event page creation into the platform.'),
            ]),
        ],
        'takeaway': 'I bring product thinking and engineering craft to the same table: understand the people using a product, shape the experience around them, and build the systems that make it work.',
        'stack': ['Product direction', 'Experience design', 'React', 'WebRTC', 'Agora SDK', 'Node.js', 'Real-time systems', 'AI/LLM tooling'],
    },
    {
        'slug': 'shipsy',
        'short_title': 'Shipsy — Full-Stack Developer',
        'shot_w': 1920, 'shot_h': 1080,
        'logo_w': 64, 'logo_h': 64,
        'published': '2024-01-15', 'modified': '2026-11-12',
        'no': '02',
        'name': 'Shipsy',
        'logo': '/shipsy.webp',
        'role': 'Full-Stack Developer — Product Ownership & Market Expansion',
        'dates': 'Oct 2019 — Aug 2020',
        'dates_iso': '2019-10',
        'category': 'Growth phase',
        'tag': 'Ownership & Scale',
        'org_url': 'https://shipsy.io',
        'summary': 'My first startup: I worked across customer-critical logistics products, built a returns system from scratch, and helped ship contactless delivery in two weeks during COVID.',
        'meta_desc': 'At his first startup, Shikhar Sahdev worked across customer-critical logistics products, built a returns system from scratch, and helped deliver contactless delivery in two weeks during COVID.',
        'shot': 'https://shipsy.io/wp-content/uploads/2023/03/Hero4_SIM-based-Tracking.png',
        'shot_alt': 'Shipsy last-mile delivery tracking map showing delivery locations in southern India',
        'shot_caption': 'Shipsy’s SIM-based last-mile tracking feature, shown in a company product update.',
        'sources': [
            ('Shipsy SIM-based tracking update', 'https://shipsy.io/product-updates/have-better-visibility-over-last-mile-deliveries-through-sim-based-tracking/'),
            ('DTDC Shipsy case study', 'https://shipsy.io/casestudies/dtdc-digitizes-97-last-mile-transactions-and-soars-customer-experiences/'),
        ],
        'metrics': [
            ('New pace', 'From Samsung to startup', 'more ownership, exposure, and room to grow'),
            ('Many hats', 'Product to engineering', 'working across customer needs and the stack'),
        ],
        'overview': [
            'After Samsung, where I had started to feel stagnant, Shipsy was a big change of pace: my <b>first startup</b>, a fast-growing team, and the chance to take on a much wider range of work. I loved the energy and the exposure. I could move between understanding customer needs, shaping product behavior, and working across the front end and back end. One of the largest clients I supported was <b>DTDC</b>, where I worked on pricing and built a returns-and-settlements product from scratch across payments and the full order lifecycle.',
            'When COVID created an urgent need for safer handovers, I worked with the team to get contactless delivery out in about <b>two weeks</b>—a fast response for a large, established logistics application.',
            'I also contributed to a reusable last-mile tracking effort designed to adapt to different client operations, as well as right-to-left and left-to-right support for regional expansion. The experience connected naturally with what I had been doing since school: building products, learning by making, and taking an idea through to something people could use. Shipsy’s <a href="https://shipsy.io/product-updates/have-better-visibility-over-last-mile-deliveries-through-sim-based-tracking/" target="_blank" rel="noopener noreferrer">last-mile tracking product update</a> and <a href="https://shipsy.io/casestudies/dtdc-digitizes-97-last-mile-transactions-and-soars-customer-experiences/" target="_blank" rel="noopener noreferrer">customer story</a> show the broader product and customer context.',
        ],
        'sections': [
            ('Selected contributions', [
                ('Customer-critical pricing work', 'Worked across front end and back end on pricing modules for major logistics clients, including DTDC.'),
                ('Returns and settlements from scratch', 'Built a new workflow connecting payments, settlements, and order state across the complete returns lifecycle.'),
                ('Contactless delivery in two weeks', 'Worked with the team to deliver a no-contact handover flow quickly in response to COVID-era needs.'),
                ('Contributed to reusable last-mile tracking', 'Worked with the team on a configurable tracking experience designed to adapt to different client operations.'),
                ('Regional language direction', 'Contributed right-to-left and left-to-right support as Shipsy expanded into the Middle East.'),
            ]),
        ],
        'takeaway': 'Shipsy gave me the pace and breadth I was looking for: real customer problems, room to wear many hats, and the chance to bring the product-building instinct I had developed in school into a fast-growing team.',
        'stack': ['Full-stack', 'JavaScript', 'Node.js', 'Logistics systems', 'i18n / RTL', 'Payments & settlements'],
    },
    {
        'slug': 'icmr-aitsc',
        'short_title': 'ICMR & AITSC — Software Engineer',
        'shot_w': 647, 'shot_h': 300,
        'logo_w': 647, 'logo_h': 300,
        'published': '2024-01-15', 'modified': '2026-11-12',
        'no': '03',
        'name': 'ICMR & AITSC',
        'logo': '/aiimsxicmr.webp',
        'role': 'Software Engineer — Research Collaboration',
        'dates': '2016 — 2018',
        'dates_iso': '2016',
        'category': 'Impact work',
        'tag': 'Real Impact',
        'org_url': 'https://icmr.gov.in',
        'summary': 'Built a digital trauma-patient enrollment system end to end, then deployed it and trained staff across five government hospitals.',
        'meta_desc': 'Shikhar Sahdev built and deployed a digital trauma-patient enrollment system across five Indian government hospitals, including on-site servers and staff training.',
        'shot': None,
        'sources': [
            ('ICMR Annual Report 2017–18', 'https://www.icmr.gov.in/icmrobject/custom_data/pdf/annual-reports/ICMR_AR_English_2017-18_final.pdf'),
            ('AIIMS research paper on trauma registry work', 'https://www.aiims.edu/images/pdf/library/Article-August19-22-7-20.pdf'),
        ],
        'metrics': [
            ('5', 'Government hospitals', 'visited in person and ramped onto the system'),
            ('Solo', 'Build & deploy', 'sole engineer, from software to physical servers'),
            ('Paper → digital', 'Trauma intake', 'a digital workflow rolled out across all five sites'),
        ],
        'overview': [
            'I was the sole engineer building the digital trauma-patient enrollment system that moved five government hospitals from paper intake to a usable on-site workflow. I owned the full build, from the data model and staff-facing interface to physical servers and network setup.',
            'I then visited all five hospitals to install the system, train staff, and support the rollout. The product had to work with sensitive patient information, local infrastructure, and users with very different levels of technical confidence. The ICMR and AIIMS publications linked here provide related trauma-registry program context.',
        ],
        'sections': [
            ('Selected contributions', [
                ('Built the enrollment system solo', 'Designed the data model and staff-facing workflow for digital trauma-patient intake.'),
                ('Installed the infrastructure', 'Deployed physical servers, connected them to the internet, and made the system usable at each site.'),
                ('Handled sensitive hospital data', 'Built for patient privacy and security in real government-hospital environments.'),
                ('Rolled out across five hospitals', 'Visited sites, trained staff with varied technical experience, and supported adoption in daily work.'),
            ]),
        ],
        'takeaway': 'Good product work includes the whole path to use: the interface, the infrastructure it depends on, and the people bringing it into their daily work.',
        'stack': ['Full-stack', 'Server deployment', 'Healthcare data', 'Security & compliance', 'On-site training'],
    },
    {
        'slug': 'samsung',
        'short_title': 'Samsung R&D — Security Engineer',
        'shot_w': 240, 'shot_h': 80,
        'logo_w': 240, 'logo_h': 80,
        'published': '2024-01-15', 'modified': '2026-11-12',
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
        'sources': [
            ('Samsung Research: Security & Privacy', 'https://research.samsung.com/security-privacy'),
        ],
        'metrics': [
            ('Chipset', 'Level security', 'bootloader and data security modules'),
            ('ML', 'Privacy tooling', 'machine-learning based data protection'),
            ('5G', 'Configuration', 'network optimisation systems'),
        ],
        'overview': [
            'At Samsung R&D, I built <b>bootloader and data-security modules</b> across Samsung chipsets, with contributions to ML-based privacy tools and 5G configuration systems. This was low-level engineering where security, chipset variation, and device behavior all mattered.',
            'It also clarified the kind of work I wanted next: closer to product decisions and the people using what I build. That shift toward broader ownership became a thread through my later roles. Samsung Research’s public <a href="https://research.samsung.com/security-privacy" target="_blank" rel="noopener noreferrer">security and privacy work</a> offers company context, but does not document my specific contributions.',
        ],
        'sections': [
            ('Selected contributions', [
                ('Bootloader security', 'Built secure bootloader systems at the chipset layer.'),
                ('Data security across chipsets', 'Developed data-security modules and accounted for differences across chipset variants.'),
                ('ML-based privacy tools', 'Contributed to machine-learning-based data protection with care for the device experience.'),
                ('5G configuration systems', 'Worked on configuration systems supporting network optimization.'),
            ]),
        ],
        'takeaway': 'The experience strengthened my systems foundation and helped me see that I wanted to work closer to product choices and user outcomes.',
        'stack': ['C / low-level', 'Bootloader', 'Chipset security', 'Machine learning', '5G systems'],
    },
]

NAV = '''    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <a class="mark" href="/" aria-label="Shikhar Sahdev — home"><img src="/assets/img/avatar-hero-face.webp" alt="" width="40" height="40" /></a>
          <span class="label loc">Bangalore, India</span>
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


def esc(s):
    return html.escape(s, quote=False)


def render(case, prev_case, next_case):
    slug, name = case['slug'], case['name']
    url = f"{SITE}/work/{slug}/"
    image_url = case['shot'] if case['shot'] and case['shot'].startswith('http') else f"{SITE}{case['shot'] or '/assets/img/og-card.jpg'}"

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
          <img src="{case['shot']}" alt="{esc(case['shot_alt'])}" width="{case['shot_w']}" height="{case['shot_h']}" loading="lazy" decoding="async" />
          <figcaption>{esc(case['shot_caption'])} <a href="{case['sources'][0][1]}" target="_blank" rel="noopener noreferrer">View source</a></figcaption>
        </figure>'''
    else:
        shot = f'''
        <figure class="case-shot case-shot--mark reveal">
          <img src="{case['logo']}" alt="{esc(name)} logo" width="{case['logo_w']}" height="{case['logo_h']}" loading="lazy" decoding="async" />
          <figcaption>No public project screenshot available.</figcaption>
        </figure>'''

    overview = '\n'.join(f'          <p>{p}</p>' for p in case['overview'])
    sources = '\n'.join(
        f'            <a href="{url}" target="_blank" rel="noopener noreferrer">{esc(label)} <span aria-hidden="true">↗</span></a>'
        for label, url in case.get('sources', []))
    source_section = f'''
        <aside class="case-sources" aria-label="Public references">
          <span class="case-sources-label">Public references</span>
          <div>{sources}</div>
        </aside>''' if sources else ''

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

    article_json = json.dumps({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': f"{name} — {case['role']}",
        'description': case['meta_desc'],
        'url': url,
        'inLanguage': 'en-US',
        'datePublished': case['published'],
        'dateModified': case['modified'],
        'image': image_url,
        'author': {'@type': 'Person', 'name': 'Shikhar Sahdev', 'url': SITE},
        'publisher': {'@type': 'Person', 'name': 'Shikhar Sahdev', 'url': SITE},
        'about': {'@type': 'Organization', 'name': name, 'url': case['org_url']},
        'mainEntityOfPage': {'@type': 'WebPage', '@id': url},
    }, ensure_ascii=False, indent=2)
    breadcrumb_json = json.dumps({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': f'{SITE}/'},
            {'@type': 'ListItem', 'position': 2, 'name': 'Work', 'item': f'{SITE}/work/'},
            {'@type': 'ListItem', 'position': 3, 'name': name, 'item': url},
        ],
    }, ensure_ascii=False, indent=2)

    return f'''<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="/assets/img/avatar-hero-face.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#fae0c8" />

    <title>{esc(case['short_title'])} | Shikhar Sahdev</title>
    <meta name="description" content="{esc(case['meta_desc'])}" />
    <meta name="author" content="Shikhar Sahdev" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="article" />
    <meta property="og:url" content="{url}" />
    <meta property="og:title" content="{esc(case['short_title'])} | Shikhar Sahdev" />
    <meta property="og:description" content="{esc(case['meta_desc'])}" />
    <meta property="og:image" content="{image_url}" />
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
    <meta property="twitter:image" content="{image_url}" />
    <meta property="twitter:site" content="@shikharsahdev" />
    <meta property="twitter:creator" content="@shikharsahdev" />

    <link rel="canonical" href="{url}" />
    <link rel="apple-touch-icon" href="/assets/img/avatar-hero-face.png" />
    <link rel="manifest" href="/manifest.json" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="/assets/css/style.css?v=57" />

    <script type="application/ld+json">{article_json}</script>
    <script type="application/ld+json">{breadcrumb_json}</script>
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

{source_section}

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
    <script src="/assets/js/scroll-leaf.js?v=5" defer></script>
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
