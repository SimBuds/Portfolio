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
    stack: ['Shopify', 'Liquid', 'WordPress', 'SEO', 'Contentful'],
    annotation: '// 14 pages · 200+ SKUs · 3yr engagement',
    role: 'Sole developer · scoped to ship',
    body: 'Migrated a WordPress site into a 14+ page Shopify storefront, integrating and customizing a third-party ring builder for stone, band, and size configuration. Now implementing Contentful for the brand’s content.',
  },
  {
    slug: 'hubspot',
    client: 'SEO AI Agency (NDA)',
    title: 'Custom HubSpot theme with reusable HubL modules',
    stack: ['HubSpot', 'HubL', 'CRM', 'Figma', 'JavaScript'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
    role: 'Figma-to-HubSpot build · CRM setup',
    body: 'Turned Figma designs into a custom 8-page HubSpot theme with reusable HubL modules, CRM setup with team roles and permissions, and a month of post-launch QA. Image optimization, lazy loading, and caching pushed PageSpeed above 90.',
  },
  {
    slug: 'tcg',
    client: 'Vintage Gaming Retailer (NDA)',
    title: 'WordPress rebuild & 400+ item catalog migration',
    stack: ['WordPress', 'Elementor', 'JSON', 'SEO', 'Security'],
    annotation: '// 400+ SKUs migrated · catalog standardized',
    role: 'Rebuild · data migration · SEO',
    body: 'Took over a 400+ item WordPress e-commerce store, rebuilding product pages in Elementor with hands-on HTML and CSS. A JSON validation script enforced product rules during the catalog migration — catching duplicate SKU errors before import.',
  },
];
