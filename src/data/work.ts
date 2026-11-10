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
    role: 'Developer (Contract)',
    summary: "Sole developer for a custom jewelry brand. Working with the SEO lead and two designers, I moved its average Google position from 38 to 13 in 16 months, put 44 non-brand terms on page one, and grew search impressions 78%. I'm running its WordPress to Shopify migration as a hybrid launch, with a Cloudflare Worker serving both platforms on one domain. The plan is three releases, 7 launch gates and 10 architecture decisions. Before cutover I moved DNS to Cloudflare with DNSSEC, tested 144 URLs against the new routing, and rehearsed the switch with a written rollback. The custom Dawn theme has 46 custom sections (Liquid, JSON templates, metafields), with Theme Check and a CSS guard run on every commit. I manage the ring builder vendor (VDB) through 24 logged technical questions. A local LLM pipeline with Claude Code cut product description writing from 30 to 5 minutes each, saving about 80 hours across 200+ product pages. In a 2024 redesign I rebuilt the WordPress site on Elementor Pro and a Salient child theme with ACF and PHP, cutting load time 25% and page size 40%, and I still maintain it with WP-CLI, backups and updates.",
    stack: ['Shopify', 'Liquid', 'WordPress', 'Cloudflare Workers', 'LLM pipeline', 'SEO'],
    annotation: '// hybrid launch · 30→5 min drafting · +78% impressions',
  },
  {
    slug: 'hubspot',
    client: 'Neurative AI',
    title: 'Marketplace-standard HubSpot theme with 22 reusable modules',
    dates: 'Jan 2026 – Apr 2026',
    role: 'HubSpot CMS Developer (Contract)',
    summary: "First website for a new AI company, built from the in-house team's Figma designs. I built a Marketplace-standard HubSpot theme with 22 reusable modules and drag-and-drop templates for 10 pages, to WCAG 2.1 AA. It scored 95 for performance and 90 for accessibility in Lighthouse. Hero images load eagerly, below-the-fold images lazily, and every image is sized so the layout never shifts. I integrated HubSpot CRM and owned all HubSpot work through QA and peer code review with a second developer, who built the product dashboard. Every contract deliverable was met before the business paused the launch.",
    stack: ['HubSpot', 'HubL', 'Figma', 'CRM', 'WCAG 2.1 AA'],
    annotation: '// 22 modules · WCAG 2.1 AA · Marketplace standard',
  },
  {
    slug: 'tcg',
    client: 'Geeked Out Goods',
    title: 'Python product-upload pipeline for a 400+ item Shopify catalog',
    dates: 'Jan 2022 – May 2023',
    role: 'Shopify Developer (Contract)',
    summary: "Project-based contract for an online store with a 400+ item vintage gaming catalog. Products had been entered by hand, which took 100 hours. I replaced that with a Python pipeline that checks each product's images, title, description, price and quantity before upload, so malformed entries never reach the live store. I built it in 20 hours and handed it to the owner to run. I also handled inventory and content publishing, building product and landing pages in the theme editor.",
    stack: ['Python', 'Shopify', 'Data validation'],
    annotation: '// 400+ items · 100h → 20h · pre-upload checks',
  },
];
