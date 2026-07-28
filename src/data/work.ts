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
    title: 'WordPress to Shopify migration with an LLM content pipeline',
    dates: 'Apr 2023 - Present',
    role: 'Full-Stack Developer',
    summary: "Sole developer and client contact for a custom jewelry brand's move into e-commerce: migrated the site, catalog, URL redirects, and AWS-hosted media from WordPress to Shopify with no loss of search visibility, then launched a 16+ page storefront on a customized Dawn 2.0 theme. Built an LLM content pipeline that drafts product descriptions and briefs for editorial review, then audits published output against target keywords — drafting went from 30 minutes to 5 across a 200+ product catalog, and organic blog traffic is up 30%. A ring-builder configurator is in active development.",
    stack: ['Shopify', 'Liquid', 'WordPress', 'AWS', 'LLM Pipeline', 'SEO'],
    annotation: '// 16+ pages · 200+ products · +30% organic',
  },
  {
    slug: 'hubspot',
    client: 'Neurative AI',
    title: 'Figma-to-HubSpot theme with reusable HubL modules',
    dates: 'Jan - Apr 2026',
    role: 'HubSpot CMS Developer',
    summary: 'Built a custom 8-page HubSpot CMS site from Figma designs, with reusable editor-configurable HubL modules and templates so the marketing team could manage content without developer involvement. Image optimization, lazy loading, and caching cut page load time 30% and kept PageSpeed above 90. Set up GitHub Actions CI with automated linting, configured CRM roles and permissions, and ran a month of post-launch QA through to a clean handoff.',
    stack: ['HubSpot', 'HubL', 'Figma', 'GitHub Actions', 'CRM'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
  },
  {
    slug: 'tcg',
    client: 'Geeked Out Goods',
    title: 'Python CSV validation for a 400+ item Shopify catalog',
    dates: 'Jan - May 2024',
    role: 'Shopify Developer',
    summary: 'Built Python pipelines for bulk product uploads, sanitizing and schema-checking CSV inventory exports before Shopify import across a 400+ item vintage gaming catalog. Validating at ingest stopped malformed feeds from reaching the live store and cut manual data entry out of catalog operations. Also ran day-to-day inventory, product-detail content, new listings, and on-page SEO.',
    stack: ['Python', 'Shopify', 'CSV Validation', 'SEO'],
    annotation: '// 400+ items · Python ingest · schema checks',
  },
];
