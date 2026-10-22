export type NowItem = {
  cmd: string;
  title: string;
  note: string;
  tags: string[];
  status: string;
  body: string;
  /** Omitted for private repos, so the card renders without a link. */
  repo?: string;
};

export const NOW: NowItem[] = [
  {
    cmd: '~/Jobhunt',
    title: 'Jobhunt - local-first AI job-search CLI',
    note: 'Six stages, one SQLite database, and every model call local and schema-bounded. It fills the application form. I click Submit.',
    tags: ['Python', 'asyncio', 'llama.cpp', 'SQLite', 'Playwright', 'mypy'],
    status: 'maintained',
    body: 'Ingest, discover, score, tailor, audit and autofill are separate commands over durable SQLite state, so any stage re-runs on its own. Nine ATS integrations and RSS pull concurrently over async HTTP with per-host rate limits. One gateway sends every model call to a local llama.cpp router, each with a JSON schema. Generation reads a verified profile snapshot, post-decode invariants reject any claim it cannot source, and the score is computed from verified requirements, not by the model. The audit path uses no LLM. 1210 tests, Ruff and strict mypy gate every change.',
    repo: 'https://github.com/SimBuds/Jobhunt'
  },
  {
    cmd: '~/Everything4Cats',
    title: 'Everything4Cats - affiliate site on a self-managed Lightsail host',
    note: 'A WordPress cat-products review site I run end to end: server, theme, plugins and technical SEO.',
    tags: ['WordPress', 'PHP', 'AWS Lightsail', 'Docker', 'Bash', 'WP-CLI'],
    status: 'pre-launch',
    body: 'One idempotent provisioning script turns an OS-only Ubuntu instance into a working site, reading Apache, TLS, swap, and the plugin and theme baseline from files in the repo. A custom theme and two plugins carry the post types, taxonomy, and affiliate-disclosure and schema compliance. Docker is the test harness, not the host. It runs the provisioner twice on a throwaway image: once proves it works, twice proves it is idempotent. A seedable staging site renders every template locally before a change goes live.',
    repo: 'https://everything4cats.ca'
  },
  {
    cmd: '~/Seo-llm',
    title: 'SEO-LLM - Claude Code as the harness for a local content pipeline',
    note: 'No standalone app. Skills replace the CLI, the Bash tool the workflow engine, and files the database.',
    tags: ['Claude Code', 'llama.cpp', 'Bash', 'jq', 'JSON Schema'],
    status: 'in use',
    body: 'An article moves from research to finished one approved stage at a time: fetch, keywords, brief, outline, draft, rewrite. Long articles are drafted section by section, never in a single call, with a fact-check pass and a separate rewrite pass on each part. The local model does the volume work, and Claude Code checks it against the research and flags what is wrong. Anything decidable by arithmetic or a lookup lives in a deterministic check script, because judgement written as a regex fails on real data. Fetching honours robots.txt with a per-host delay, and a person always moves the final file.',
    repo: 'https://github.com/SimBuds/SEO-LLM'
  },
  {
    cmd: '~/Local-LLM',
    title: 'AI Context Stack - layered Markdown prompts on a llama.cpp router',
    note: 'Three local models behind one router, plus an eval suite that measures which model to use.',
    tags: ['llama.cpp', 'Qwen3.6', 'Gemma4', 'GGUF', 'systemd'],
    status: 'tuning',
    body: 'One llama-server router, run as a systemd user service, serves a 26B and a 35B mixture-of-experts model and a dense 9B. Offloading expert layers to system RAM keeps one model resident at a time in a 10 GB VRAM budget. Behavior comes from files, not fine-tuning: shared Markdown for memory and prompts builds a system prompt and router preset for each model, joined into the one config the server reads. A client that sends no prompt gets the bare base model. The eval suite scores each model on speed, coding, content, tool calling and tutoring, graded by a leave-one-out judge panel that measures inter-judge disagreement.',
    repo: 'https://github.com/SimBuds/Local-LLM'
  },
  {
    cmd: '~/Auto-Agent',
    title: 'Auto-Agent - Hermes Agent in a sandboxed VM on local models',
    note: 'The agent runs commands without asking, so the VM is the sandbox and a snapshot undoes a bad run.',
    tags: ['Hermes Agent', 'QEMU', 'llama.cpp', 'Python', 'Bash'],
    status: 'on demand',
    body: 'Hermes Agent (Nous Research) runs in a Debian virtual machine and uses the Local-LLM router on the host, so nothing leaves the machine. It runs two jobs on demand: a topic scout that ranks article ideas for Everything4Cats, and a news digest that rates each item against a written interest profile. Tested scripts handle collecting and recording, so the agent only does the judgment. Each run writes one file and publishes nothing. A person decides what happens next.',
  },
];
