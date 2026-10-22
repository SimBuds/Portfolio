export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  dates: string;
  role: string;
  summary: string;
  stack: string[];
  annotation: string;
};

export const WORK: WorkItem[] = [
  {
    slug: 'jewelry',
    client: 'Atelier Dacko',
    title: 'WordPress to Shopify, with a hybrid launch and an LLM content pipeline',
    dates: 'Apr 2023 – Present',
    role: 'Full-Stack Developer',
    summary: "Sole developer for a custom jewelry brand. I redesigned and maintain its WordPress site (WP-CLI, backups, updates), then planned the move to Shopify in three releases with 7 launch gates and 10 architecture decisions. It launched in Oct 2026 as a hybrid: a Cloudflare Worker serves Shopify and WordPress on one domain. Before cutover I moved DNS to Cloudflare with DNSSEC, tested 144 URLs against the new routing, and rehearsed the switch with a written rollback. The custom Dawn theme is built in Liquid, with a pre-commit hook guarding the global CSS. I manage the ring builder vendor (VDB) through 24 logged technical questions. A local LLM drafts product copy and Claude Code audits it, cutting drafting from 30 to 5 minutes across 200+ products. With on-page SEO alongside the marketing team, Google search impressions grew 78% in six months, from 72,180 (Oct 2025 – Apr 2026) to 128,468 (Apr 2026 – Oct 2026).",
    stack: ['Shopify', 'Liquid', 'WordPress', 'Cloudflare Workers', 'LLM pipeline', 'SEO'],
    annotation: '// hybrid launch · 30→5 min drafting · +78% impressions',
  },
  {
    slug: 'hubspot',
    client: 'Neurative AI',
    title: 'Marketplace-standard HubSpot theme with 22 reusable modules',
    dates: 'Jan 2026 – Apr 2026',
    role: 'HubSpot CMS Developer (Contract)',
    summary: "I owned all HubSpot work on the new theme, built from the in-house team's Figma designs: 22 reusable modules to HubSpot Marketplace standards, accessible to WCAG 2.1 AA. Hero images load eagerly, images below the fold load lazily, and every image is sized so the layout never shifts. I integrated HubSpot CRM and ran full QA with a second developer, who built the product dashboard, through pull-request review. Every contract deliverable was met.",
    stack: ['HubSpot', 'HubL', 'Figma', 'CRM', 'WCAG 2.1 AA'],
    annotation: '// 22 modules · WCAG 2.1 AA · Marketplace standard',
  },
  {
    slug: 'tcg',
    client: 'Geeked Out Goods',
    title: 'Python CSV validation for a 400+ item Shopify catalog',
    dates: 'Jan 2022 – May 2023',
    role: 'Shopify Developer (Contract)',
    summary: "Built Python pipelines for bulk product uploads, sanitizing and schema-checking CSV inventory exports before Shopify import across a 400+ item vintage gaming catalog. Validating at ingest stopped malformed feeds from reaching the live store, so broken titles and descriptions never landed on indexable product pages. Integrated third-party Shopify apps and the Shopify Admin API into the store's workflows, automating inventory and product updates that had previously been handled by hand. I shipped store changes alongside other developers through pull-request review, and handled the ongoing inventory and content publishing, building product and landing pages in the theme editor.",
    stack: ['Python', 'Shopify', 'Admin API', 'CSV Validation'],
    annotation: '// 400+ items · Python ingest · schema checks',
  },
];
