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
    note: 'Six stages over one SQLite database, every model call schema-bounded and local. The tool fills the application form. I click Submit.',
    tags: ['Python', 'asyncio', 'llama.cpp', 'SQLite', 'Playwright', 'mypy'],
    status: 'daily use',
    body: 'Ingest, discover, score, tailor, audit, and autofill each run as their own command against durable SQLite state, so any stage re-runs without repeating the ones before it. Nine ATS integrations plus RSS pull concurrently over async HTTP with per-host rate limits. One gateway is the only place the model is reached, through a local llama.cpp router with a JSON schema on every call. Honesty is structural rather than prompted: generation reads from a verified profile snapshot, post-decode invariants reject any claim it cannot source, and the score is computed from verified requirements instead of chosen by the model. The audit path has no LLM in it at all. 1210 tests, Ruff, and strict mypy gate every change.',
    repo: 'https://github.com/SimBuds/Jobhunt'
  },
  {
    cmd: '~/Everything4Cats',
    title: 'Everything4Cats - affiliate site on a self-managed Lightsail host',
    note: 'A WordPress cat-products review site I own end to end: server, theme, plugins, and the technical SEO.',
    tags: ['WordPress', 'PHP', 'AWS Lightsail', 'Docker', 'Bash', 'WP-CLI'],
    status: 'pre-launch',
    body: 'An OS-only Ubuntu instance turned into a working site by one idempotent provisioning script, with Apache, TLS, swap, and the plugin and theme baseline all read from files in the repo. A custom theme plus two plugins carry the post types, taxonomy, and the affiliate-disclosure and schema compliance layer. Docker is the test harness rather than the deployment target: it runs the provisioner twice against a throwaway image, because once proves it works and twice proves it is idempotent. A seedable staging site renders every template locally before a change reaches the live host.',
    repo: 'https://everything4cats.ca'
  },
  {
    cmd: '~/Seo-llm',
    title: 'SEO-LLM - Claude Code as the harness for a local content pipeline',
    note: 'No standalone app. Skills replace the CLI, the Bash tool replaces the workflow engine, and files replace the database.',
    tags: ['Claude Code', 'llama.cpp', 'Bash', 'jq', 'JSON Schema'],
    status: 'in use',
    body: 'A page moves from research to a finished article one approved stage at a time: fetch, keywords, brief, outline, draft, rewrite. Long articles are never produced in a single call, so drafting runs section by section with a fact-check pass and a separate rewrite pass over each part. The division of labour is deliberate: the local model does the volume work, and Claude Code reads what came back against the research and says what is wrong with it. Anything decidable by arithmetic or a lookup lives in a deterministic check script instead, because judgement encoded as a regex is wrong on real data. Fetching honours robots.txt with a per-host delay, and the last step is always a person moving the file.',
    repo: 'https://github.com/SimBuds/SEO-LLM'
  },
  {
    cmd: '~/Local-LLM',
    title: 'AI Context Stack - layered Markdown prompts on a llama.cpp router',
    note: 'Three local models behind one router, with an eval suite so the which-model decision is measured rather than guessed.',
    tags: ['llama.cpp', 'Qwen3.6', 'Gemma4', 'GGUF', 'systemd'],
    status: 'tuning',
    body: 'A 26B and a 35B mixture-of-experts model plus a dense 9B are served by one llama-server router running as a systemd user service, keeping one model resident at a time inside a 10 GB VRAM budget by offloading expert layers to system RAM. Behavior comes from files, not fine-tuning: shared Markdown for memory and prompts is assembled into a system prompt and a router preset per model, then joined into the one config the server reads. Nothing is baked into the weights, so a client that sends no prompt gets the bare base model. An eval suite benchmarks each model on speed, coding, content, tool calling, and tutoring, graded by a leave-one-out judge panel so inter-judge disagreement is a real number.',
    repo: 'https://github.com/SimBuds/Local-LLM'
  },
];
