export type NowItem = {
  cmd: string;
  title: string;
  note: string;
  tags: string[];
  status: string;
  body: string;
  repo: string;
};

export const NOW: NowItem[] = [
  {
    cmd: '~/Jobhunt',
    title: 'Jobhunt - local-first AI job-search CLI',
    note: 'Aggregates nine public ATS APIs, scores roles against a verified profile with a local LLM, and drafts tailored docs with no-fabrication checks. I review and submit every application myself.',
    tags: ['Python', 'asyncio', 'Ollama', 'SQLite', 'Playwright', 'mypy'],
    status: 'daily use',
    body: 'Nine ATS sources (Greenhouse, Lever, Ashby, Workday, SmartRecruiters, Workable, Recruitee, Adzuna, Job Bank Canada) run concurrently over async HTTP with per-source rate limits, against durable SQLite state with versioned migrations. Fit scoring, resume tailoring, and cover letters run on a quantized model through Ollama with schema-constrained JSON; deterministic post-decode checks reject any claim not present in a verified profile snapshot. Roughly 700 tests, Ruff, and strict mypy gate every change.',
    repo: 'https://github.com/SimBuds/Jobhunt'
  },
  {
    cmd: '~/Seo-llm',
    title: 'SEO-LLM - content pipeline and Google safeguards',
    note: 'Hybrid Claude Code + local-model SEO stack. Briefs with lint guards against 2026 core-update drift.',
    tags: ['Claude Code', 'Ollama', 'Postgres', 'JSON-LD'],
    status: 'designing',
    body: 'Claude Code plans; lint checks banned words, heading hierarchy, meta length, and JSON-LD schema; Google Search Central RSS triggers rule reviews when a core update lands.',
    repo: 'https://github.com/SimBuds/SEO-LLM'
  },
  {
    cmd: '~/Auto-agent',
    title: 'Auto-Agent - FastAPI + Claude API agent',
    note: 'Plans against the Claude API with a FastAPI capability server, Postgres durable memory, and a Redis context cache.',
    tags: ['FastAPI', 'Claude API', 'Postgres', 'Redis', 'Docker'],
    status: 'building',
    body: 'Claude API plans, Postgres holds durable memory, Redis caches context, and a typed FastAPI server bounds what the agent can actually do — actions are permission-scoped and recorded for review instead of run as unrestricted commands. Memory and task state survive restarts, so the agent resumes without losing its place. Runs continuously on Docker Compose on my own Arch Linux box.',
    repo: 'https://github.com/SimBuds/Auto-Agent'
  },
  {
    cmd: '~/Local-LLM',
    title: 'AI Context Stack - custom Ollama models from layered Markdown',
    note: 'Qwen3.6 and Gemma4 builds generated from one shared prompts, memory, and knowledge tree.',
    tags: ['Qwen3.6', 'Gemma4', 'Ollama', 'Modelfile'],
    status: 'tuning',
    body: 'Custom Ollama builds compiled from shared Markdown into generated system prompts and Modelfiles, with per-project overlays injected at request time. An eval suite scores candidate base models across content, coding, and learning tasks on output quality, generation speed, and VRAM use. Tuned around q5_0 KV cache, flash attention, and 16k context. No opaque training runs — every behavior change is version-controlled and reversible.',
    repo: 'https://github.com/SimBuds/Local-LLM'
  },
];
