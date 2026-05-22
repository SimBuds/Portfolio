export type StackItem = { name: string; note: string };
export type StackGroup = { label: string; items: StackItem[] };

export const STACK: StackGroup[] = [
  {
    label: 'Core',
    items: [
      { name: 'JavaScript', note: 'ES6+' },
      { name: 'TypeScript', note: 'Typed APIs' },
      { name: 'Python',     note: 'Scripts · tooling' },
      { name: 'React',      note: 'UI · hooks' },
    ],
  },
  {
    label: 'CMS & E-Commerce',
    items: [
      { name: 'Shopify',    note: 'Liquid · custom themes' },
      { name: 'HubSpot',    note: 'HubL · CRM integration' },
      { name: 'WordPress',  note: 'Elementor · migrations' },
      { name: 'Contentful', note: 'Certified Professional' },
    ],
  },
  {
    label: 'Data & DevOps',
    items: [
      { name: 'PostgreSQL · MySQL', note: 'Relational' },
      { name: 'MongoDB',            note: 'Documents' },
      { name: 'Docker',             note: 'Containers' },
      { name: 'Jest · Playwright',  note: 'Unit · E2E tests' },
    ],
  },
  {
    label: 'AI & Tooling',
    items: [
      { name: 'Ollama',          note: 'KV cache · flash attn' },
      { name: 'Claude Code CLI', note: 'Daily driver' },
      { name: 'OpenAI Codex',    note: 'Inline assist' },
      { name: 'MCP Servers',     note: 'Model Context Protocol' },
    ],
  },
  {
    label: 'Familiar',
    items: [
      { name: 'Java · Spring Boot', note: 'Microservices' },
      { name: 'Headless Arch',      note: 'Composable CMS' },
      { name: 'Figma',              note: 'Handoff · design' },
      { name: 'Agile / Scrum',      note: 'Process' },
    ],
  },
];
