export type StackItem = { name: string; note: string };
export type StackGroup = { label: string; items: StackItem[] };

export const STACK: StackGroup[] = [
  {
    label: 'CMS & E-Commerce',
    items: [
      { name: 'Shopify',    note: '4+ yrs · 14-page+ themes' },
      { name: 'HubSpot',    note: 'Custom themes · HubL' },
      { name: 'Contentful', note: 'Certified Professional' },
      { name: 'WordPress',  note: 'Legacy migrations' },
    ],
  },
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', note: 'Primary' },
      { name: 'TypeScript', note: 'Typed APIs' },
      { name: 'Python',     note: 'Scripts · tooling' },
      { name: 'Sass',       note: 'Design systems' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'React',   note: 'UI · hooks' },
      { name: 'Next.js', note: 'SSR · routing' },
      { name: 'Node.js', note: 'APIs · CLIs' },
      { name: 'Astro',   note: 'This site' },
    ],
  },
  {
    label: 'AI & Tooling',
    items: [
      { name: 'Claude',         note: 'Pair · refactors' },
      { name: 'Cursor',         note: 'Daily driver' },
      { name: 'GitHub Copilot', note: 'Inline assist' },
      { name: 'Ollama',         note: 'Local inference' },
    ],
  },
  {
    label: 'Data & DevOps',
    items: [
      { name: 'PostgreSQL',     note: 'Relational' },
      { name: 'MongoDB',        note: 'Documents' },
      { name: 'Docker',         note: 'Containers' },
      { name: 'GitHub Actions', note: 'CI/CD' },
    ],
  },
  {
    label: 'Cloud & Tools',
    items: [
      { name: 'AWS',          note: 'S3 · Lambda · CF' },
      { name: 'DigitalOcean', note: 'Droplets · Spaces' },
      { name: 'Git',          note: 'Daily' },
      { name: 'Figma',        note: 'Handoff · design' },
    ],
  },
];
