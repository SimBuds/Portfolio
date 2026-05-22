export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  stack: string[];
  annotation: string;
  snippet: string;
  role: string;
  body: string;
};

export const WORK: WorkItem[] = [
  {
    slug: 'jewelry',
    client: 'Custom Jewelry Brand (Atelier Dacko)',
    title: 'Shopify ring builder for a 14-page custom storefront',
    stack: ['Shopify', 'Liquid', 'Stripe', 'WordPress', 'SEO'],
    annotation: '// 14 pages · 200+ SKUs · 2yr engagement',
    snippet: 'stones.configure({ band, size, gem })',
    role: 'Sole developer · scoped to ship',
    body: 'Migrated a WordPress portfolio into a 14+ page Shopify storefront and built a custom ring builder for stone, band, and size configuration. Now supports 200+ SKUs and 500+ monthly visitors, with a 2+ year ongoing engagement.',
  },
  {
    slug: 'hubspot',
    client: 'AI Agency Client (NDA)',
    title: 'Custom HubSpot theme with reusable HubL modules',
    stack: ['HubSpot', 'HubL', 'CRM', 'GitHub Actions', 'JavaScript'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
    snippet: 'hubl.module("hero", { variants: 4 })',
    role: 'Legacy-to-custom migration',
    body: 'Migrated a legacy HubSpot site into a custom 8-page theme with full CRM integration — content mapping, page restructuring, and reusable HubL modules. Image optimization, lazy loading, and caching lifted PageSpeed past 90 and cut load time 30%. GitHub Actions CI runs automated linting before production deploys.',
  },
  {
    slug: 'tcg',
    client: 'Vintage Gaming Retailer (NDA)',
    title: 'Shopify components & 400+ item catalog migration',
    stack: ['Shopify', 'Liquid', 'JSON', 'SEO', 'Security'],
    annotation: '// 400+ SKUs migrated · catalog standardized',
    snippet: 'catalog.migrate(legacy.json).normalize()',
    role: 'Components · data migration · SEO',
    body: 'Built custom page layouts and product display modules for a 400+ item vintage gaming catalog. Bulk JSON migrations restructured the full catalog — cutting manual data entry and eliminating duplicate SKU errors. Technical SEO audits and security hardening improved search visibility across target keywords.',
  },
];
