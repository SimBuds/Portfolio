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
    summary: "Sole developer and client contact for a custom jewelry brand's move into e-commerce: migrated the site, catalog, URL redirects, and AWS-hosted media from WordPress to Shopify, preserving indexed URLs and baseline organic traffic through full redirect mapping and post-launch Search Console monitoring, then launched a 16-page storefront on a customized Dawn 2.0 theme. Built an LLM content pipeline that drafts product descriptions and content briefs for the client's editorial team to review, then audits published output and scores it against target keywords — cutting drafting time roughly 80% across the product catalogue. I own ongoing content operations and on-page technical SEO alongside the client's marketing team; organic blog traffic is up 30% year over year. A ring-builder configurator is in active development.",
    stack: ['Shopify', 'Liquid', 'WordPress', 'AWS', 'LLM Pipeline', 'SEO'],
    annotation: '// 16 pages · -80% drafting time · +30% organic',
  },
  {
    slug: 'hubspot',
    client: 'Neurative AI',
    title: 'Figma-to-HubSpot theme with reusable HubL modules',
    dates: 'Jan - Apr 2026',
    role: 'HubSpot CMS Developer',
    summary: 'Built a custom 8-page HubSpot CMS site from Figma designs, with reusable editor-configurable HubL modules and templates so the marketing team could manage content without developer involvement. Image optimization, lazy loading, and caching cut page load time 30% and kept PageSpeed above 90. Set up GitHub Actions CI with automated linting, configured CRM roles and permissions, and ran a month of post-launch QA through to a clean handoff. Fixed-term contract, completed on schedule.',
    stack: ['HubSpot', 'HubL', 'Figma', 'GitHub Actions', 'CRM'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
  },
  {
    slug: 'tcg',
    client: 'Geeked Out Goods',
    title: 'Python CSV validation for a 400+ item Shopify catalog',
    dates: 'Jan - May 2024',
    role: 'Shopify Developer',
    summary: "Built Python pipelines for bulk product uploads, sanitizing and schema-checking CSV inventory exports before Shopify import across a 400+ item vintage gaming catalog. Validating at ingest stopped malformed feeds from reaching the live store. Integrated third-party Shopify apps and the Shopify Admin API into the store's workflows, automating inventory and product updates that had previously been handled by hand.",
    stack: ['Python', 'Shopify', 'Admin API', 'CSV Validation'],
    annotation: '// 400+ items · Python ingest · schema checks',
  },
];
