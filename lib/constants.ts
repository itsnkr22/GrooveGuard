export const SITE_NAME = 'Drrizo'
export const SITE_URL = 'https://www.drrizo.com'
export const SITE_TAGLINE = 'AI-first content engines and MVPs for startup founders'
export const SITE_DESCRIPTION =
  'Drrizo helps startup founders turn existing expertise, customer conversations, and AI product ideas into launch-ready systems, from AI-powered content repurposing engines to AI-first MVPs for B2B and B2C startups.'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Audit', href: '/audit' },
  { label: 'About', href: '/about' },
] as const

export const MARKETS = [{ label: 'United States', short: 'US' }] as const

export type Specialty = {
  label: string
  short: string
  tagline: string
  flagship?: boolean
}

export const SPECIALTIES: readonly Specialty[] = [
  {
    label: 'B2B SaaS Founders',
    short: 'B2B SaaS',
    flagship: true,
    tagline: 'Founder-led distribution, sales assets, AI copilots, and workflow MVPs',
  },
  {
    label: 'AI Startup Founders',
    short: 'AI Startups',
    tagline: 'AI-first products, agents, copilots, and practical launch systems',
  },
  {
    label: 'B2C App Founders',
    short: 'B2C Apps',
    tagline: 'Mobile-first experiences, personalization, onboarding, and retention loops',
  },
  {
    label: 'D2C Brand Founders',
    short: 'D2C',
    tagline: 'Product education, customer content, launch assets, and recommendation tools',
  },
  {
    label: 'Expert-Led Product Founders',
    short: 'Expert Products',
    tagline: 'Turning consulting expertise, frameworks, and conversations into systems',
  },
]

export const SERVICES = [
  {
    title: 'AI Content Engine',
    description:
      'Turn calls, demos, webinars, podcasts, and founder ideas into a consistent content engine for LinkedIn, blogs, newsletters, short video, SEO, and sales.',
    roi: 'Repurpose existing founder knowledge into multi-channel distribution assets',
    icon: 'document',
    href: '/services/ai-content-engine-for-startups',
    cta: 'Explore Content Engine',
    bullets: [
      'AI-powered content repurposing',
      'Founder voice and brand memory',
      'Multi-channel content workflows',
    ],
  },
  {
    title: 'AI-Powered MVPs',
    description:
      'Build AI-first web and mobile MVPs for B2B and B2C startups, including agents, copilots, personalization, automation, dashboards, and customer-facing AI products.',
    roi: 'Launch a focused MVP that proves the AI workflow before you overbuild',
    icon: 'package',
    href: '/services/ai-powered-mvps-for-startups',
    cta: 'Explore AI MVPs',
    bullets: [
      'MVP strategy and scoping',
      'Web and mobile AI app builds',
      'Launch-ready product workflows',
    ],
  },
] as const

export const PAIN_POINTS = [
  {
    stat: 'No. 1',
    statLabel: 'Founder knowledge is trapped in conversations',
    description:
      'Calls, demos, webinars, voice notes, and customer objections already contain your best ideas, but they rarely become consistent distribution.',
    source: 'Content Engine',
  },
  {
    stat: 'No. 2',
    statLabel: 'AI product ideas become too broad too fast',
    description:
      'Founders need a focused MVP that proves the core AI workflow clearly for early users, customers, investors, or internal teams.',
    source: 'AI MVPs',
  },
  {
    stat: 'No. 3',
    statLabel: 'Generic AI output does not earn trust',
    description:
      'Useful AI systems need founder voice, product context, guardrails, review loops, and workflow design instead of one-off prompts.',
    source: 'Systems',
  },
] as const

export const ROI_STATS = [
  {
    number: '1 Call',
    label: 'Can become a month of founder-led content',
    subtext:
      'A single interview, webinar, podcast, demo, or sales call can be repurposed into posts, newsletters, scripts, SEO assets, hooks, and sales snippets.',
    color: 'accent',
  },
  {
    number: '2 Paths',
    label: 'Content systems and AI-first product builds',
    subtext:
      'Drrizo helps founders build distribution engines around existing expertise and product MVPs around real AI workflows.',
    color: 'accent',
  },
  {
    number: 'Human',
    label: 'Review stays inside the workflow',
    subtext:
      'AI accelerates extraction, drafting, research, and automation while human review protects accuracy, judgment, voice, and launch quality.',
    color: 'success',
  },
  {
    number: 'Fast',
    label: 'Scope before you scale',
    subtext:
      'The work starts by finding the smallest system that proves value, earns trust, and creates learning before a larger build.',
    color: 'accent',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Audit',
    duration: 'Scope',
    description:
      'We review your positioning, current content, product idea, workflows, channels, data sources, and near-term business goals.',
    outcome: 'You leave with a sharper path for a content engine, an AI MVP, or both.',
  },
  {
    number: '02',
    title: 'Build',
    duration: 'Sprint',
    description:
      'We design and build the system around your source material, founder voice, AI workflow, review process, integrations, and launch constraints.',
    outcome: 'You get a practical working system instead of a generic AI experiment.',
  },
  {
    number: '03',
    title: 'Launch',
    duration: 'Iterate',
    description:
      'We ship the first version, review real outputs and user behavior, improve prompts and UX, and decide what should scale next.',
    outcome: 'Your startup learns faster with a system that can keep improving.',
  },
] as const
