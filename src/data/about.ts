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
      html: "Most of my client work is <strong>CMS</strong> and e-commerce: Shopify, HubSpot and WordPress. My day-to-day is custom themes, platform migrations, editor-friendly modules, technical SEO, QA, launches and handoff. I'm usually the sole developer and the client's direct contact.",
    },
    {
      html: "The other half is <strong>applied AI</strong>: LLM content pipelines with human review, and agentic tooling on local inference (llama.cpp) and Claude Code. I use it every day in my own work.",
    },
    {
      html: "I'm a <strong>Contentful Certified Professional</strong> with the Personalization Skill Badge. I hold an Advanced Diploma in Computer Programming and Analysis from <strong>George Brown</strong> (Sep 2021 – Apr 2024, Dean's List, all terms), where my Agile capstone built React and React Native front ends.",
    },
    {
      html: "I also spent ten years as a <strong>sous chef</strong> and team lead, running kitchens of 5-20: hiring, training, scheduling and food-cost budgeting. I worked full-time through the diploma and my part-time dev contracts, until Nov 2024.",
    },
    {
      html: "Open to full-stack, CMS, e-commerce and applied-AI roles in the Greater Toronto Area or remote in Canada: contract, hybrid or on-site.",
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
