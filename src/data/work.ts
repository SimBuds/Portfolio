export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  stack: string[];
  annotation: string;
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
    role: 'Sole developer · scoped to ship',
    body: 'Migrated a WordPress portfolio into a 14+ page Shopify storefront, with a custom ring builder for stone, band, and size configuration.',
  },
  {
    slug: 'hubspot',
    client: 'AI Agency Client (NDA)',
    title: 'Custom HubSpot theme with reusable HubL modules',
    stack: ['HubSpot', 'HubL', 'CRM', 'GitHub Actions', 'JavaScript'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
    role: 'Legacy-to-custom migration',
    body: 'Migrated a legacy HubSpot site into a custom 8-page theme with full CRM integration, page restructuring, and reusable HubL modules. Image optimization, and lazy loading.',
  },
  {
    slug: 'tcg',
    client: 'Vintage Gaming Retailer (NDA)',
    title: 'Shopify components & 400+ item catalog migration',
    stack: ['Shopify', 'Liquid', 'JSON', 'SEO', 'Security'],
    annotation: '// 400+ SKUs migrated · catalog standardized',
    role: 'Components · data migration · SEO',
    body: 'Built custom page layouts and product display modules for a 400+ item vintage gaming catalog. Bulk JSON migrations restructured the full catalog — cutting manual data entry and eliminating duplicate SKU errors.',
  },
];
