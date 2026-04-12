# Portfolio Site Fix List — caseyhsu.com

**Purpose:** Actionable tasks to bring the Astro portfolio site in line with the updated resume and 2026 hiring expectations. Prioritized by impact on recruiter/hiring manager impressions.

---

## Priority 1 — Kill the "Coming Soon" Cards (Critical)

Every project card under the "Client Work" section currently shows "Coming Soon" with no link, no screenshot, and no detail. This is the single most damaging issue on the site. Recruiters who click through from the resume will see placeholder content and bounce.

**For each of the three projects, add:**

- A hero screenshot or short screen recording (even a browser-frame mockup works)
- A 2–3 paragraph write-up structured as: **context → what you built → measurable result**
- A "Tech Stack" list (already partially done via tags — keep these)
- If the client allows, a live link. If not, add a note: "Live site available on request" or use annotated screenshots

**Atelier Dacko specifics:**
- Show the ring builder interaction (screen recording or GIF of the configure flow)
- Before/after of the WordPress-to-Shopify migration (even side-by-side screenshots)
- Mention the 200+ SKUs, 500+ visitors, and 2+ year engagement

**NeurativeAI specifics:**
- Show a PageSpeed Insights screenshot (the 90+ score is a great visual proof point)
- Before/after of legacy theme vs. custom HubSpot build
- Mention the 30% load time improvement and the CRM integration

**Geeked Out Goods specifics:**
- Show a collection page layout or product display module
- Mention the 400+ item JSON migration and what it solved
- If the store is still live, link it

---

## Priority 2 — Align Site Copy with Resume Updates

The hero section and "About Me" copy currently mirrors the old resume almost word-for-word. Update them to reflect the revised language:

- **Hero intro:** Change "I scope, build, and ship projects end-to-end as a sole developer" to include the performance optimization and maintenance angle from the new summary. Consider: "I scope, build, and ship projects end-to-end — from technical planning through deployment, performance optimization, and ongoing maintenance."
- **About Me section:** Add a line about being open to hybrid/on-site roles in the GTA (matches the resume summary and signals availability to Toronto employers)
- **About Me section:** Mention specific AI tools (GitHub Copilot, Cursor, Claude) instead of the vague "AI-assisted development workflows." This matches the updated resume and shows you're current.

---

## Priority 3 — Add a Dedicated Case Studies / Projects Page

The `/projectlist` route exists but the main site just repeats the same three project cards twice (once under "What I'm Up To Now" and again under "Client Work"). This is redundant.

**Recommended structure:**
- Keep the homepage "What I'm Up To Now" section as a concise overview (3 cards with short descriptions)
- Make `/projectlist` the deep-dive page with full case studies for each project
- Each case study should follow a template:
  - **Overview** (1 paragraph: client, problem, scope)
  - **My Role** (sole developer, contract, duration)
  - **Technical Approach** (architecture decisions, tools, why you chose them)
  - **Key Features** (the ring builder, the HubL module system, the JSON migration)
  - **Results** (metrics: PageSpeed scores, visitor counts, load time improvements)
  - **Screenshots / Demo** (visuals of the actual work)

---

## Priority 4 — Resume PDF on the Site

The nav links to `/resume.pdf`. Make sure this is updated to the new version. Also consider:

- Adding a visible "Download Resume (PDF)" button in the hero area or about section, not just the nav
- Ensuring the PDF filename is `Casey-Hsu-Web-Developer-2026.pdf` (ATS-friendly naming, helps if someone downloads it)

---

## Priority 5 — Tech Stack Section Tweaks

The "My Tech Stack" grid is clean but can be improved:

- **Add the AI tools row:** Create a new category card for "AI & Tooling" that includes GitHub Copilot, Cursor, Claude, Ollama — this differentiates you from other candidates at your level
- **Add Sass** to the Languages or Frameworks section (it's on the updated resume)
- **Consider reordering** so Shopify, HubSpot, and Contentful appear higher — your CMS/e-commerce specialization is your competitive edge in the Toronto market and should be visually prominent

---

## Priority 6 — SEO and Meta Tags

Make sure the site's metadata supports recruiter discovery:

- **Title tag:** "Casey Hsu | Full-Stack JavaScript Developer | Toronto" (add the city)
- **Meta description:** "Full-stack JavaScript developer in Toronto specializing in Shopify, HubSpot, and Contentful. 3+ years delivering e-commerce storefronts, custom CMS themes, and platform migrations."
- **Open Graph tags:** Set `og:title`, `og:description`, and `og:image` so LinkedIn and Slack previews look professional when you share your URL
- **Add structured data (JSON-LD):** A `Person` schema with your name, job title, location, and URL helps Google surface your portfolio for recruiter searches

---

## Priority 7 — Small UX Fixes

- **Mobile nav:** Test the hamburger menu (☰) thoroughly on iOS Safari — Astro sites sometimes have z-index issues with mobile overlays
- **"Would you like to work with me?" CTA:** This is good but could be more specific. Consider: "Looking for a developer who ships end-to-end? Let's talk." — speaks to what a hiring manager actually cares about
- **Footer tech stack logos (Astro, DigitalOcean, Node.js):** These are nice but consider also showing the logos or names of your primary work technologies (Shopify, HubSpot, Contentful) somewhere prominent — they're your brand
- **Contact page:** Ensure it has a working form or at minimum a clear email link. Don't make people hunt for how to reach you

---

## Priority 8 — GitHub Profile Alignment

Not a site fix per se, but since the resume links to `github.com/casey-hsu`:

- Pin 3–6 repos that show real work (Shopify theme code, a Next.js project, anything with Contentful)
- Add a profile README with a short intro, tech stack badges, and a link back to `caseyhsu.com`
- Make sure repos have proper README files — recruiters and hiring managers do click through and check for code quality signals
