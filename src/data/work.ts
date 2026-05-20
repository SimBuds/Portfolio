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
    client: 'Luxury Jewelry Brand (Atelier Dacko)',
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
    stack: ['HubSpot', 'HubL', 'GTM', 'JavaScript', 'CSS'],
    annotation: '// 8 pages · 90+ Lighthouse · -30% TTI',
    snippet: 'hubl.module("hero", { variants: 4 })',
    role: 'Theme rebuild · CRM forms',
    body: 'Rebuilt a legacy HubSpot theme into a custom 8-page implementation with reusable HubL modules and CRM-connected forms. Improved maintainability and delivered 90+ PageSpeed scores with a 30% load-time improvement.',
  },
  {
    slug: 'tcg',
    client: 'Vintage Gaming Retailer (NDA)',
    title: 'Shopify components & 400+ item catalog migration',
    stack: ['Shopify', 'Liquid', 'JSON', 'SEO', 'Security'],
    annotation: '// 400+ SKUs migrated · catalog standardized',
    snippet: 'catalog.migrate(legacy.json).normalize()',
    role: 'Components · data migration',
    body: 'Built collection layouts and custom product modules for a vintage gaming storefront. A 400+ item JSON migration standardized catalog data and removed manual formatting bottlenecks while improving discoverability with technical SEO.',
  },
];
