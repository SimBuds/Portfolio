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
  descr: 'Developer since 2022',
  heading:
    'Building <span class="accent">Shopify, HubSpot and WordPress</span> sites since 2022, plus the AI tooling that cuts the content work.',
  paras: [
    {
      html: "Most of my client work is in <strong>CMS</strong> and e-commerce: Shopify, HubSpot and WordPress. The day-to-day is custom themes, platform migrations, editor-friendly modules, technical SEO, QA, launches, and clean handoff — usually as sole developer and the client's direct point of contact.",
    },
    {
      html: 'The other half is <strong>applied AI</strong>: LLM content pipelines that keep human review in the loop, and agentic tooling on local inference (llama.cpp) and Claude Code. I run it in my own workflow every day, not as a demo.',
    },
    {
      html: "I'm a <strong>Contentful Certified Professional</strong> (with the Personalization Skill Badge) and hold an Advanced Diploma in Computer Programming and Analysis from <strong>George Brown</strong> (Sep 2021 – Apr 2024, Dean's List, all terms), where my Agile capstone built React and React Native front ends.",
    },
    {
      html: 'Alongside all of it, I spent ten years as a <strong>sous chef</strong> and team lead running kitchens of 5-20: hiring, training, scheduling, food-cost budgeting. I worked it full-time through the diploma and my part-time dev contracts, wrapping up in Nov 2024. Calm under deadline comes standard.',
    },
    {
      html: 'Currently open to full-stack, CMS, e-commerce, and applied-AI roles in the Greater Toronto Area or remote within Canada: contract, hybrid, or on-site.',
      muted: true,
    },
  ],
  stats: [
    { k: '2022', v: 'Building client sites since' },
    { k: '30→5', v: 'Minutes to draft product copy' },
    { k: '+78%', v: 'Search impressions in six months' },
    { k: '22', v: 'Reusable HubSpot modules' },
  ],
};
