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
    cmd: '~/jobhunt $ jobhunt scan',
    title: 'Job Hunt AI Buddy — local-first CLI for the GTA',
    note: 'Pulls public ATS APIs, scores against a verified resume, and drafts tailored docs. You submit every application yourself.',
    tags: ['Python', 'uv', 'Ollama', 'SQLite', 'Playwright', 'ATS'],
    status: 'building',
    day: 'd.42',
    body: 'Scans public ATS sources across GTA and Remote-Canada. Local Ollama scores, drafts resumes and cover letters. No scraping, no bot submissions, no stored credentials.',
    repo: 'https://github.com/SimBuds/Jobhunt',
  },
  {
    cmd: '~/seo-llm $ claude /seo-gen',
    title: 'LLM-SEO — content pipeline with Google safeguards',
    note: 'Hybrid Claude Code + local-model SEO stack. Briefs with lint guards against 2026 core-update drift.',
    tags: ['Claude Code', 'Ollama', 'Postgres', 'JSON-LD'],
    status: 'designing',
    day: 'd.30',
    body: 'Claude Code plans; Lint checks banned words, heading hierarchy, meta length, and schema; Google Search Central RSS triggers rule reviews.',
    repo: 'https://github.com/SimBuds/SEO-LLM',
  },
  {
    cmd: '~/auto-agent $ docker compose up -d',
    title: 'Auto-Agent — Hermes + OpenClaw stack',
    note: 'Hermes Agent + Claude API inference, Postgres/Redis memory, and a FastAPI capability server for Telegram automation.',
    tags: ['Hermes', 'OpenClaw', 'Redis', 'Docker', 'FastAPI'],
    status: 'deploying',
    day: 'd.18',
    body: 'Hermes plans against the Claude API, Postgres holds durable memory, Redis caches context, and a FastAPI server exposes system-control endpoints.',
    repo: 'https://github.com/SimBuds/Auto-Agent',
  },
  {
    cmd: '~/ai $ ./build-qwen',
    title: 'AI Context Stack — three custom Ollama models',
    note: 'Qwen-custom, granite-custom, and gemma-custom from one layered Markdown stack.',
    tags: ['Qwen3.5:9b', 'Granite4.1:8b', 'Gemma4:e4b', 'Modelfile'],
    status: 'tuning',
    day: 'd.10',
    body: 'Three siblings built from a shared prompts/ + memory/ + knowledge/ tree. Project overlays inject at request time instead of baking in.',
    repo: 'https://github.com/SimBuds/Ollama-LLM-Prompts',
  },
];
