export const SITE_NAME = 'Drrizo'
export const SITE_URL = 'https://www.drrizo.com'
export const SITE_TAGLINE = 'Customer/GTM Brains for founder-led startups'
export const SITE_DESCRIPTION =
  'Drrizo builds Customer/GTM Brains for founder-led startups, turning sales calls, CRM notes, emails, Slack, support tickets, and customer feedback into AI-powered GTM intelligence.'

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
    tagline: 'Customer conversations, demos, objections, pipeline learning, and GTM memory',
  },
  {
    label: 'AI Startup Founders',
    short: 'AI Startups',
    tagline: 'Customer education, use-case discovery, trust-building, and product feedback',
  },
  {
    label: 'Founder-Led GTM Teams',
    short: 'Founder GTM',
    tagline: 'Small revenue teams where founder memory still carries the GTM motion',
  },
  {
    label: 'Product-Led Startups',
    short: 'Product-Led',
    tagline: 'Trials, inbound interest, account segmentation, and expansion signals',
  },
  {
    label: 'Expert-Led B2B Businesses',
    short: 'Expert B2B',
    tagline: 'High-value client conversations, account memory, proposals, and onboarding',
  },
]

export const SERVICES = [
  {
    title: 'Customer/GTM Brain',
    status: 'Active flagship service',
    description:
      'A living AI-powered GTM intelligence system that organizes customer knowledge, sales conversations, account context, objections, product feedback, and revenue signals so founders and GTM teams can act faster with better context.',
    roi: 'Turn scattered customer context into account briefs, follow-ups, GTM insights, and weekly founder digests',
    icon: 'brain',
    href: '/services/customer-gtm-brain',
    cta: 'Explore Customer/GTM Brain',
    bullets: [
      'Customer and account intelligence',
      'Sales call and email memory',
      'ICP, pain point, objection, and win/loss analysis',
      'CRM, Slack, email, docs, support, and meeting context',
      'Follow-up, meeting prep, and weekly GTM workflows',
      'Human-reviewed setup and ongoing BrainOps',
    ],
  },
  {
    title: 'Company Brain',
    status: 'Coming Soon / Work in Progress',
    description:
      'A broader internal knowledge brain for company decisions, SOPs, onboarding, docs, meetings, strategy, product context, and team memory. This is being developed as a future expansion after Customer/GTM Brain.',
    roi: 'A future expansion for internal knowledge, decisions, onboarding, SOPs, and team memory',
    icon: 'layers',
    href: '/services/company-brain',
    cta: 'Join Waitlist / Ask About Company Brain',
    bullets: [
      'Internal company knowledge',
      'Decision and meeting memory',
      'SOP and onboarding intelligence',
      'Team-wide source organization',
      'Permission-aware workflows',
      'Coming after GTM Brain pilots',
    ],
  },
] as const

export const PAIN_POINTS = [
  {
    stat: '01',
    statLabel: 'Customer conversations disappear after the call',
    description:
      'Founders and GTM teams hear the real pains, objections, buying triggers, and product gaps, but those insights rarely become reusable knowledge.',
    source: 'Customer memory',
  },
  {
    stat: '02',
    statLabel: 'Follow-up depends on manual memory',
    description:
      'Every sales conversation creates context, but teams waste time reconstructing what happened, what matters, and what to do next.',
    source: 'Revenue workflow',
  },
  {
    stat: '03',
    statLabel: 'GTM learning is not compounding',
    description:
      'Without a brain, each new customer conversation helps one person once. With a brain, every conversation improves positioning, sales, onboarding, product feedback, and future decisions.',
    source: 'GTM intelligence',
  },
] as const

export const ROI_STATS = [
  {
    number: '1 Call',
    label: 'Can become usable GTM assets',
    subtext:
      'A customer call can become follow-up notes, CRM updates, objection tags, product feedback, meeting prep, and sales enablement.',
    color: 'accent',
  },
  {
    number: '1 CRM Record',
    label: 'Can become an account brief',
    subtext:
      'Turn account context into stakeholders, pain points, open questions, risks, deal context, and recommended next steps.',
    color: 'accent',
  },
  {
    number: '1 Week',
    label: 'Can become a founder GTM digest',
    subtext:
      'Summarize pipeline signals, customer themes, follow-up gaps, objections, product feedback, and recommended actions.',
    color: 'success',
  },
  {
    number: '1 Brain',
    label: 'Can align revenue and product learning',
    subtext:
      'Help sales, success, product, marketing, and founders learn from the same customer truth.',
    color: 'accent',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Audit',
    duration: 'Scope',
    description:
      'We review your current GTM motion, customer sources, tools, sales process, follow-up gaps, ICP, and highest-value workflows.',
    outcome: 'You leave knowing which Customer/GTM Brain workflow should be built first.',
  },
  {
    number: '02',
    title: 'Architect',
    duration: 'Design',
    description:
      'We define the brain structure: accounts, customer types, objections, use cases, decision-makers, revenue signals, and source hierarchy.',
    outcome: 'Your customer knowledge has a useful operating structure before tools are connected.',
  },
  {
    number: '03',
    title: 'Operate',
    duration: 'BrainOps',
    description:
      'We maintain and improve the brain through source updates, workflow QA, prompt refinement, insight review, and output optimization.',
    outcome: 'The brain stays useful as new customer data, GTM motion, and revenue priorities change.',
  },
] as const
