export type StackItem = { name: string; note: string };
export type StackGroup = { label: string; items: StackItem[] };

export const STACK: StackGroup[] = [
  {
    label: 'Core',
    items: [
      { name: 'JavaScript · TypeScript', note: 'ES6+ · typed' },
      { name: 'React · Next.js', note: 'UI · SSR' },
      { name: 'Node.js · Express', note: 'REST APIs' },
      { name: 'Astro',  note: 'This site runs on it' },
      { name: 'Python', note: 'Scripts · tooling' },
    ],
  },
  {
    label: 'CMS & E-Commerce',
    items: [
      { name: 'Shopify',    note: 'Liquid · custom themes' },
      { name: 'HubSpot',    note: 'HubL · CRM integration' },
      { name: 'WordPress',  note: 'Elementor · migrations' },
      { name: 'Contentful', note: 'Certified Professional' },
      { name: 'Figma',      note: 'Design handoff' },
    ],
  },
  {
    label: 'Data & DevOps',
    items: [
      { name: 'PostgreSQL · MySQL', note: 'Relational' },
      { name: 'MongoDB · Redis',    note: 'Documents · cache' },
      { name: 'Docker',             note: 'Containers · Compose' },
      { name: 'GitHub Actions',     note: 'CI/CD' },
      { name: 'Jest · Playwright',  note: 'Unit · E2E tests' },
    ],
  },
  {
    label: 'AI & Tooling',
    items: [
      { name: 'Ollama',          note: 'KV cache · flash attn' },
      { name: 'Claude Code CLI', note: 'Daily driver' },
      { name: 'Claude API',      note: 'Agents · structured output' },
      { name: 'FastAPI',         note: 'Agent backends' },
      { name: 'OpenAI Codex',    note: 'Inline assist' },
    ],
  },
  {
    label: 'Familiar',
    items: [
      { name: 'Java · Spring Boot', note: 'Microservices' },
      { name: 'AWS · Azure',        note: 'Cloud' },
      { name: 'MCP Servers',        note: 'Model Context Protocol' },
      { name: 'Headless Arch',      note: 'Composable CMS' },
      { name: 'Agile / Scrum',      note: 'Process' },
    ],
  },
];
