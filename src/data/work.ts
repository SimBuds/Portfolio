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
    client: 'Atelier Dacko · Custom Jewelry Brand',
    title: 'WordPress to Shopify migration with an in-progress ring builder',
    dates: 'Apr 2023 - Present',
    role: 'CMS / E-commerce Developer',
    summary: 'Redesigned the brand portfolio in WordPress and Elementor, then migrated it to a custom 16+ page Shopify storefront on a customized Dawn 2.0 theme. Sole developer and client contact, with product/catalog assets moved to AWS and the ring-builder configurator still in progress.',
    stack: ['Shopify', 'Liquid', 'WordPress', 'AWS', 'SEO'],
    annotation: '// 16+ pages · 3+ years · sole developer',
  },
  {
    slug: 'hubspot',
    client: 'SEO AI Marketing Agency',
    title: 'Figma-to-HubSpot theme with reusable HubL modules',
    dates: 'Jan - Apr 2026',
    role: 'CMS Developer',
    summary: 'Built a custom 8-page HubSpot CMS site from Figma designs, with reusable editor-configurable HubL modules, CRM roles and permissions, launch support, and a month of QA. Image optimization, lazy loading, and caching cut page load time 30% and kept PageSpeed above 90.',
    stack: ['HubSpot', 'HubL', 'CRM', 'Figma'],
    annotation: '// 8 pages · 90+ PageSpeed · -30% load time',
  },
  {
    slug: 'tcg',
    client: 'Geeked Out Goods',
    title: '400+ item Shopify catalog management and CSV validation',
    dates: 'Jan - May 2024',
    role: 'Shopify Developer',
    summary: 'Managed inventory and the product catalog for a Shopify vintage-gaming store with 400+ items, owning product-detail content, site updates, new product listings, and basic on-page SEO. Built a CSV sanitizing and validation pipeline to catch feed errors before import.',
    stack: ['Shopify', 'CSV', 'Catalog', 'SEO'],
    annotation: '// 400+ items · CSV validation · catalog updates',
  },
];
