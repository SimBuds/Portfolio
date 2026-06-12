export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  dates: string;
  role: string;
  summary: string;
  stack: string[];
  annotation: string;
  nda?: boolean;
};

export const WORK: WorkItem[] = [
  {
    slug: 'jewelry',
    client: 'Atelier Dacko · Custom Jewelry Brand',
    title: 'WordPress → Shopify migration with a custom ring builder',
    dates: '2023 – Present',
    role: 'Shopify / E-Commerce Developer',
    summary: '14+ page storefront on the Dawn theme with a third-party ring builder customized for stone, band, and size — 200+ SKUs, sole developer and main client contact, now implementing Contentful.',
    stack: ['Shopify', 'Liquid', 'Contentful', 'SEO'],
    annotation: '// 14+ pages · 200+ SKUs · 3yr engagement',
  },
  {
    slug: 'hubspot',
    client: 'SEO AI Agency (NDA)',
    title: 'Figma-to-HubSpot theme with reusable HubL modules',
    dates: 'Jan – Apr 2026',
    role: 'CMS Developer',
    summary: 'Custom 8-page theme with CRM roles and permissions and a month of post-launch QA — image optimization, lazy loading, and caching pushed PageSpeed above 90.',
    stack: ['HubSpot', 'HubL', 'CRM', 'Figma'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
    nda: true,
  },
  {
    slug: 'tcg',
    client: 'Vintage Gaming Retailer (NDA)',
    title: '400+ item catalog migration & Elementor rebuild',
    dates: 'Jan – May 2024',
    role: 'WordPress Developer',
    summary: 'Rebuilt product pages in Elementor and wrote a JSON validation script that enforced product rules during the catalog migration — catching duplicate SKUs before import.',
    stack: ['WordPress', 'Elementor', 'SEO', 'Security'],
    annotation: '// 400+ SKUs migrated · catalog standardized',
  },
];
