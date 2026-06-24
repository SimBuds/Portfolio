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
    cmd: '~/Jobhunt',
    title: 'Jobhunt - local-first AI job-search CLI',
    note: 'Pulls public ATS APIs, scores roles against a verified resume with a local LLM, and drafts tailored docs with honesty checks. You submit every application yourself.',
    tags: ['Python', 'uv', 'Ollama', 'SQLite', 'Playwright', 'ATS'],
    status: 'building',
    day: 'd.42',
    body: 'Local Ollama scores and drafts; a deterministic gateway enforces schema-valid JSON; a no-fabrication layer structurally rejects any unverified skill. No LinkedIn scraping, no bot submissions, no cloud AI calls for resume/profile evaluation.',
    repo: 'https://github.com/SimBuds/Jobhunt'
  },
  {
    cmd: '~/Seo-llm',
    title: 'SEO-LLM - content pipeline and Google safeguards',
    note: 'Hybrid Claude Code + local-model SEO stack. Briefs with lint guards against 2026 core-update drift.',
    tags: ['Claude Code', 'Ollama', 'Postgres', 'JSON-LD'],
    status: 'designing',
    day: 'd.30',
    body: 'Claude Code plans; lint checks banned words, heading hierarchy, meta length, and JSON-LD schema; Google Search Central RSS triggers rule reviews when a core update lands.',
    repo: 'https://github.com/SimBuds/SEO-LLM'
  },
  {
    cmd: '~/Auto-agent',
    title: 'Auto-Agent - FastAPI + Claude API agent',
    note: 'Plans against the Claude API with a FastAPI capability server, Postgres durable memory, and a Redis context cache.',
    tags: ['FastAPI', 'Claude API', 'Postgres', 'Redis', 'Docker'],
    status: 'deploying',
    day: 'd.18',
    body: 'Claude API plans, Postgres holds durable memory, Redis caches context, and a FastAPI server exposes system-control endpoints for Telegram automation. Deployed via Docker Compose.',
    repo: 'https://github.com/SimBuds/Auto-Agent'
  },
  {
    cmd: '~/Local-LLM',
    title: 'AI Context Stack - custom Ollama models from layered Markdown',
    note: 'Qwen3.6 and Gemma4 builds generated from one shared prompts, memory, and knowledge tree.',
    tags: ['Qwen3.6', 'Gemma4', 'Ollama', 'Modelfile'],
    status: 'tuning',
    day: 'd.10',
    body: 'Custom Ollama builds compiled from shared Markdown into generated system prompts and Modelfiles, with per-project overlays injected at request time. Tuned around q5_0 KV cache, flash attention, and 16k context.',
    repo: 'https://github.com/SimBuds/Local-LLM'
  },
];
