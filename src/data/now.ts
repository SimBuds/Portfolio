export type NowItem = {
  cmd: string;
  title: string;
  note: string;
  tags: string[];
  status: string;
  day: string;
  body: string;
  repo: string;
};

export const NOW: NowItem[] = [
  {
    cmd: '~/Jobhunt $ jobhunt scan',
    title: 'Job Hunt AI Buddy — local-first CLI for the GTA',
    note: 'Pulls public ATS APIs, scores roles against a verified resume with a local LLM, and drafts tailored docs with honesty checks. You submit every application yourself.',
    tags: ['Python', 'uv', 'Ollama', 'SQLite', 'Playwright', 'ATS'],
    status: 'building',
    day: 'd.42',
    body: 'Local Ollama scores and drafts; a deterministic gateway enforces schema-valid JSON; a no-fabrication layer structurally rejects any unverified skill. No scraping, no bot submissions, no cloud calls.',
    repo: 'https://github.com/SimBuds/Jobhunt'
  },
  {
    cmd: '~/Seo-llm $ claude /seo-gen',
    title: 'LLM-SEO — content pipeline + Google safeguards',
    note: 'Hybrid Claude Code + local-model SEO stack. Briefs with lint guards against 2026 core-update drift.',
    tags: ['Claude Code', 'Ollama', 'Postgres', 'JSON-LD'],
    status: 'designing',
    day: 'd.30',
    body: 'Claude Code plans; lint checks banned words, heading hierarchy, meta length, and JSON-LD schema; Google Search Central RSS triggers rule reviews when a core update lands.',
    repo: 'https://github.com/SimBuds/SEO-LLM'
  },
  {
    cmd: '~/Auto-agent $ docker compose up -d',
    title: 'Auto-Agent — FastAPI + Claude API agent',
    note: 'Plans against the Claude API with a FastAPI capability server, Postgres durable memory, and a Redis context cache.',
    tags: ['FastAPI', 'Claude API', 'Postgres', 'Redis', 'Docker'],
    status: 'deploying',
    day: 'd.18',
    body: 'Claude API plans, Postgres holds durable memory, Redis caches context, and a FastAPI server exposes system-control endpoints for Telegram automation. Deployed via Docker Compose.',
    repo: 'https://github.com/SimBuds/Auto-Agent'
  },
  {
    cmd: '~/Local-LLM $ ./build-gemma',
    title: 'AI Context Stack — three custom Ollama models',
    note: 'Qwen-custom, granite-custom, and gemma-custom from one layered Markdown stack.',
    tags: ['Qwen3.6', 'Granite4.1', 'Gemma4', 'Modelfile'],
    status: 'tuning',
    day: 'd.10',
    body: 'Qwen, granite, and gemma siblings built from a shared prompts/ + memory/ + knowledge/ tree, with project overlays injected at request time. An eval suite benchmarks quality, tokens/sec, and VRAM for a 10 GB GPU.',
    repo: 'https://github.com/SimBuds/Local-LLM'
  },
];
