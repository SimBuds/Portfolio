export type StackItem = { name: string; note: string };
export type StackGroup = { label: string; items: StackItem[] };

export const STACK: StackGroup[] = [
  {
    label: 'Core',
    items: [
      { name: 'JavaScript', note: 'ES6+' },
      { name: 'HTML · CSS', note: 'Semantic · responsive' },
      { name: 'Python', note: 'Automation · AI tooling' },
      { name: 'PHP · Sass', note: 'WordPress · styling' },
    ],
  },
  {
    label: 'CMS & E-commerce',
    items: [
      { name: 'Shopify',    note: 'Liquid · OS 2.0 · Metafields' },
      { name: 'HubSpot',    note: 'HubL · HubDB · modules' },
      { name: 'WordPress',  note: 'Elementor Pro · ACF' },
      { name: 'WP-CLI · WP Engine', note: 'Backups · updates' },
      { name: 'Contentful', note: 'Certified Professional' },
    ],
  },
  {
    label: 'AI & Tooling',
    items: [
      { name: 'Local LLMs',      note: 'llama.cpp · KV cache' },
      { name: 'Claude Code CLI', note: 'Daily driver' },
      { name: 'OpenAI Codex',    note: 'Inline assist' },
      { name: 'Cursor',          note: 'Agent mode · editor' },
      { name: 'AI agents',       note: 'Hermes Agent' },
      { name: 'Prompt engineering', note: 'Layered prompts' },
      { name: 'LLM evals',       note: 'Judge panels' },
    ],
  },
  {
    label: 'SEO & Analytics',
    items: [
      { name: 'Technical SEO',   note: 'Redirects · sitemaps' },
      { name: 'Core Web Vitals', note: 'LCP · CLS · INP' },
      { name: 'JSON-LD',         note: 'Structured data' },
      { name: 'Search Console',  note: 'Indexing · queries' },
      { name: 'GA4 · GTM',       note: 'Traffic · events' },
      { name: 'A/B testing',     note: 'Experiments' },
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
    label: 'Workflow',
    items: [
      { name: 'Git',   note: 'Version control' },
      { name: 'Jira',  note: 'Tickets · sprints' },
      { name: 'Figma', note: 'Design handoff' },
    ],
  },
  {
    label: 'Exposure',
    items: [
      { name: 'React',      note: 'School · portfolio' },
      { name: 'TypeScript', note: 'Astro · this site' },
    ],
  },
];
