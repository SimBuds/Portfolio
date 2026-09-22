export type AboutStat = { k: string; v: string };

export type AboutPara = {
  /** Rendered as inner HTML, so the <strong> and <em> runs survive the move. */
  html: string;
  muted?: boolean;
};

export type About = {
  descr: string;
  heading: string;
  paras: AboutPara[];
  stats: AboutStat[];
};

export const ABOUT: About = {
  descr: '3+ years coding',
  heading:
    'Three-plus years building <span class="accent">CMS platforms</span> and <span class="accent">AI automation</span>, from discovery to handoff.',
  paras: [
    {
      html: "Most of my client work is in <strong>CMS</strong> and e-commerce: Shopify, HubSpot, WordPress, and Contentful. The day-to-day is custom themes, platform migrations, editor-friendly modules, technical SEO, QA, launches, and clean handoff — usually as sole developer and the client's direct point of contact.",
    },
    {
      html: 'The other half is <strong>applied AI</strong>: LLM content pipelines that keep human review in the loop, and agentic tooling on local inference (llama.cpp) and the Claude API. I run it in my own workflow every day, not as a demo.',
    },
    {
      html: "I'm a <strong>Contentful Certified Professional</strong> (with the Personalization Skill Badge) and hold an Advanced Diploma in Computer Programming and Analysis from <strong>George Brown</strong> (2021–2024, Dean's List, all terms).",
    },
    {
      html: 'Alongside all of it, I spent ten years as a <strong>sous chef</strong> and team lead running kitchens of 5-20: hiring, training, scheduling, food-cost budgeting. I kept that going through the diploma and my first dev contracts, wrapping up in late 2025. Calm under deadline comes standard.',
    },
    {
      html: 'Currently open to full-stack, CMS, e-commerce, and applied-AI roles in the Greater Toronto Area or remote within Canada: contract, hybrid, or on-site.',
      muted: true,
    },
  ],
  stats: [
    { k: '3+ yrs', v: 'Independent client delivery' },
    { k: '-80%', v: 'Content drafting time via LLM pipeline' },
    { k: '+30%', v: 'Organic blog traffic YoY on Shopify' },
    { k: '90+', v: 'PageSpeed after HubSpot launch' },
  ],
};
