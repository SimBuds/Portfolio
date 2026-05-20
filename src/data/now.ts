export type NowItem = {
  cmd: string;
  title: string;
  note: string;
  tags: string[];
  status: string;
  day: string;
  body: string;
};

export const NOW: NowItem[] = [
  {
    cmd: '~/ai $ ./build.sh',
    title: 'AI Context Stack — custom qwen3.5 via Ollama',
    note: 'Layered prompts, durable memory, and reusable knowledge compiled into a local Modelfile. Edit Markdown, run one script, ship a model.',
    tags: ['Ollama', 'qwen3.5:9b', 'Modelfile', 'Prompts', 'Local LLM'],
    status: 'tuning',
    day: 'd.42',
    body: 'A transparent customization pipeline for qwen3.5:9b: plain-Markdown sources under prompts/, memory/, and knowledge/ assembled in a fixed order into a generated system prompt. Tuned for a concise technical assistant — q5_0 KV cache, flash attention, 16k context, thinking mode as an explicit opt-in.',
  },
  {
    cmd: '~/jobhunt $ jobhunt scan',
    title: 'Job Hunt AI Buddy — local-first CLI for the GTA',
    note: 'Pulls public ATS APIs, scores against a verified resume, drafts tailored docs, and autofills forms. You submit every application yourself.',
    tags: ['Python', 'uv', 'Ollama', 'SQLite', 'Playwright', 'ATS'],
    status: 'building',
    day: 'd.30',
    body: "Greenhouse, Lever, Ashby, SmartRecruiters, Workday, Job Bank Canada, and Adzuna CA — scoped to GTA + 100km and Remote-Canada. Local Ollama scores fit, drafts resumes and cover letters, and answers free-form form questions under structural honesty rules. No LinkedIn scraping, no bot submissions, no stored employer credentials.",
  },
  {
    cmd: '~/VMs $ quickemu --vm macos-ventura.conf',
    title: 'macOS Ventura on KVM — Ryzen 5900X + Btrfs',
    note: 'Battle-tested AMD path: Quickemu-git for QEMU 11, nocow qcow2 on Btrfs, power-of-two CPU topology, and CCX-pinned launches.',
    tags: ['KVM', 'QEMU', 'Quickemu', 'macOS', 'Btrfs', 'Arch Linux'],
    status: 'documenting',
    day: 'd.18',
    body: "RTX 3080 forces software rendering, so Ventura wins over newer releases — lighter WindowServer and no non-monotonic TSC panic. cpu_cores=8 splits into 4c/2t cleanly, 16G RAM is the floor, SDL beats Spice under CPU rendering, and a taskset alias pins the guest inside one 6-core CCX to dodge Infinity Fabric latency.",
  },
  {
    cmd: '~/ai-stack $ systemctl --user status',
    title: 'Arch autonomous agent stack — 24/7 on the workstation',
    note: 'Claude API + Hermes planning, Docker-isolated tool exec, and a FastAPI host bridge to D-Bus, KDE, and the Wayland clipboard.',
    tags: ['Arch Linux', 'Docker', 'FastAPI', 'D-Bus', 'OpenClaw'],
    status: 'deploying',
    day: 'd.10',
    body: 'Lingered systemd --user units boot the stack without a graphical session. Hermes plans against the Claude API, sandboxed containers handle tool calls, and a loopback FastAPI capability server translates agent intents into notify-send, wl-copy, xdg-open, and KDE D-Bus actions. Telegram and Discord ride in through the OpenClaw gateway.',
  },
];
