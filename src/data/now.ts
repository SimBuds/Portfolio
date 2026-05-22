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
    note: 'Pulls public ATS APIs, scores against a verified resume, drafts tailored docs, and assists form autofill. You submit every application yourself.',
    tags: ['Python', 'uv', 'Ollama', 'SQLite', 'Playwright', 'ATS'],
    status: 'building',
    day: 'd.42',
    body: "Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Workable, Recruitee, Job Bank Canada, and Adzuna CA — scoped to GTA + 100km and Remote-Canada. Local Ollama scores fit, drafts resumes and cover letters, answers free-form form questions under structural honesty rules, and auto-discovers new ATS slugs after each scan. No LinkedIn scraping, no bot submissions, no stored employer credentials.",
    repo: 'https://github.com/SimBuds/Jobhunt',
  },
  {
    cmd: '~/seo-llm $ claude /seo-gen',
    title: 'LLM-SEO — local-model content pipeline with Google safeguards',
    note: 'Hybrid Claude Code + local-model SEO stack. Briefs in, full SEO package out, with lint guards tuned against 2026 core-update drift.',
    tags: ['Claude Code', 'Ollama', 'llama-custom', 'granite-custom', 'E-E-A-T', 'JSON-LD'],
    status: 'designing',
    day: 'd.30',
    body: 'Claude Code orchestrates planning and critique while llama-custom drafts prose and granite-custom emits Article JSON-LD + meta + Open Graph. App-layer prompt overlay (system / formatting / personality / google-rules) ships via Git without rebuilding models. Lint pass enforces banned-word grep, heading hierarchy, meta length, and schema validation; RSS notifications from Google Search Central trigger volatile-rule reviews instead of a doomed quarterly cadence.',
    repo: 'https://github.com/SimBuds/SEO-LLM',
  },
  {
    cmd: '~/auto-agent $ docker compose up -d',
    title: 'Auto-Agent — Mac mini M4 orchestration stack',
    note: 'Hermes Agent + Claude API inference, Postgres/Redis memory, and a FastAPI capability server for AppleScript and iMessage automation.',
    tags: ['Docker', 'FastAPI', 'Hermes', 'Postgres', 'Redis', 'AppleScript'],
    status: 'deploying',
    day: 'd.18',
    body: 'Compose stack sized for 16GB unified memory: Hermes (~4G) plans against the Claude API, Postgres holds durable agent memory, Redis caches hot context, and a FastAPI capability server exposes AppleScript, iMessage, and system-control endpoints. Optional OpenClaw bridge wires Telegram and Discord in when needed.',
    repo: 'https://github.com/SimBuds/Auto-Agent',
  },
  {
    cmd: '~/ai $ ./build-qwen',
    title: 'AI Context Stack — three custom Ollama models',
    note: 'qwen-custom, granite-custom, and llama-custom built from one layered Markdown stack. Edit prompts, run one script, ship a model.',
    tags: ['Ollama', 'qwen3.5:9b', 'granite4.1:8b', 'llama3.1:8b', 'Modelfile'],
    status: 'tuning',
    day: 'd.10',
    body: 'Three project-agnostic siblings assembled from a shared prompts/ + memory/ + knowledge/ tree into generated system.txt and Modelfile pairs. qwen-custom is the terse technical daily driver (q8_0 KV cache, flash attention, 16k context, thinking mode as an explicit opt-in); granite-custom and llama-custom run hotter for structured output and long-form prose. Project-specific overlays (e.g. SEO rules) inject at request time instead of being baked in.',
    repo: 'https://github.com/SimBuds/Ollama-LLM-Prompts',
  },
];
