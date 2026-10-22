export type StackItem = { name: string; note: string };
export type StackGroup = { label: string; items: StackItem[] };

export const STACK: StackGroup[] = [
  {
    label: 'Core',
    items: [
      { name: 'JavaScript · TypeScript', note: 'ES6+ · typed' },
      { name: 'React · Next.js', note: 'UI · SSR · Redux' },
      { name: 'Python', note: 'Automation · AI tooling' },
      { name: 'PHP · Sass', note: 'WordPress · styling' },
    ],
  },
  {
    label: 'CMS & E-commerce',
    items: [
      { name: 'Shopify',    note: 'Liquid · custom themes' },
      { name: 'HubSpot',    note: 'HubL · themes · modules' },
      { name: 'HubSpot CRM', note: 'Integration' },
      { name: 'WordPress',  note: 'Elementor · migrations' },
      { name: 'WP-CLI',     note: 'Backups · updates' },
      { name: 'Contentful', note: 'Certified Professional' },
    ],
  },
  {
    label: 'AI & Tooling',
    items: [
      { name: 'llama.cpp',       note: 'KV cache · flash attn' },
      { name: 'Claude Code CLI', note: 'Daily driver' },
      { name: 'OpenAI Codex',    note: 'Inline assist' },
      { name: 'Cursor',          note: 'Agent mode · editor' },
      { name: 'AI agents',       note: 'Hermes Agent' },
    ],
  },
  {
    label: 'SEO & Analytics',
    items: [
      { name: 'Technical SEO',   note: 'Redirects · sitemaps' },
      { name: 'Core Web Vitals', note: 'LCP · CLS · INP' },
      { name: 'JSON-LD',         note: 'Structured data' },
      { name: 'Search Console',  note: 'Indexing · queries' },
      { name: 'GA4',             note: 'Traffic · events' },
      { name: 'Crawlability · canonicals', note: 'robots.txt' },
      { name: 'Lighthouse',      note: 'Audits' },
      { name: 'WCAG 2.1 AA',     note: 'Accessibility' },
    ],
  },
  {
    label: 'DevOps & Hosting',
    items: [
      { name: 'Docker',             note: 'Containers · Compose' },
      { name: 'GitHub Actions',     note: 'CI/CD' },
      { name: 'Playwright',         note: 'E2E tests' },
      { name: 'nginx · AWS Lightsail', note: 'Self-hosted deploys' },
      { name: 'Cloudflare Workers', note: 'Edge routing · DNS' },
    ],
  },
  {
    label: 'Familiar',
    items: [
      { name: 'Java · Spring Boot', note: 'Coursework' },
      { name: 'Angular',           note: 'Coursework · light use' },
      { name: 'Model Context Protocol', note: 'Light use' },
      { name: 'React Native',      note: 'Capstone mobile app' },
      { name: 'Astro',             note: 'This site runs on it' },
      { name: 'Headless Arch',      note: 'Composable CMS' },
      { name: 'Figma',              note: 'Design handoff' },
      { name: 'Agile / Scrum',      note: 'Process' },
    ],
  },
];
