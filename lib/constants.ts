export const SITE_NAME = 'Drrizo'
export const SITE_URL = 'https://www.drrizo.com'
export const SITE_TAGLINE = 'AI bottleneck consulting for practical operators'
export const SITE_DESCRIPTION =
  'Drrizo helps founders and operators find one repeated bottleneck, map it to one practical AI tool, and choose the right implementation path.'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Assessment', href: '/audit' },
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
    label: 'Founder-led teams',
    short: 'Founders',
    flagship: true,
    tagline: 'A practical AI assessment before a bigger build',
  },
  {
    label: 'Service businesses',
    short: 'Services',
    tagline: 'Repeated work, client handoffs, research, writing, and ops friction',
  },
  {
    label: 'Sales teams',
    short: 'Sales',
    tagline: 'Follow-ups, research, call prep, CRM hygiene, and proposal support',
  },
  {
    label: 'Support teams',
    short: 'Support',
    tagline: 'Customer questions, response quality, triage, and knowledge gaps',
  },
  {
    label: 'Lean operations teams',
    short: 'Ops',
    tagline: 'Weekly repetition, handoffs, admin load, and workflow stalls',
  },
]

export const SERVICES = [
  {
    title: 'Free AI Mini Assessment',
    status: 'Free discovery offer',
    description:
      'A two-call assessment that finds one repeated bottleneck, anchors the ROI in your words, and returns one practical AI prescription.',
    roi: 'Best when you know AI could help, but you need the first useful target.',
    icon: 'search',
    href: '/services/free-ai-mini-assessment',
    cta: 'See The Assessment',
    bullets: [
      'Discovery-first call with no prescription on call one',
      'ROI lens: revenue, time, or customer happiness',
      'Repeated-task and friction mapping',
      'One bottleneck selected between calls',
      'Tool name, cost, and first step on call two',
      'Clear path into handoff, guided build, or done-for-you build',
    ],
  },
  {
    title: 'Paid AI Implementation',
    status: 'Paid engagement',
    description:
      'When the bottleneck is worth fixing, Drrizo can hand off the plan, build it with you, or build the workflow for you.',
    roi: 'Best when the assessment reveals a workflow that is frequent, painful, and financially worth fixing.',
    icon: 'wrench',
    href: '/services/paid-ai-implementation',
    cta: 'Explore Paid Work',
    bullets: [
      'Off-the-shelf tool setup when the task is common',
      'Claude Cowork for judgment, writing, or research',
      'Custom Claude skill for repeatable unique workflows',
      'Workflow design, source cleanup, and testing',
      'Operator training and handoff documentation',
      'Human review where judgment still matters',
    ],
  },
] as const

export const PAIN_POINTS = [
  {
    stat: 'Revenue',
    statLabel: 'More money from the same motion',
    description:
      'If the bottleneck affects leads, proposals, follow-up, conversion, expansion, or retention, it belongs in the revenue lane.',
    source: 'ROI lever',
  },
  {
    stat: 'Time',
    statLabel: 'More hours back each week',
    description:
      'If the work repeats every week and eats valuable human time, it belongs in the time lane.',
    source: 'ROI lever',
  },
  {
    stat: 'Customers',
    statLabel: 'Happier customers and fewer misses',
    description:
      'If things stall, slip, or create a worse customer experience, it belongs in the customer happiness lane.',
    source: 'ROI lever',
  },
] as const

export const ROI_STATS = [
  {
    number: '1',
    label: 'Forking question',
    subtext: 'What matters more right now: more revenue, more time, or happier customers?',
    color: 'accent',
  },
  {
    number: '2',
    label: 'Repetition question',
    subtext: 'What is your most repeated weekly task? The best AI targets usually show up here.',
    color: 'accent',
  },
  {
    number: '3',
    label: 'Friction question',
    subtext: 'Where do things stall, get messy, or slip through the cracks?',
    color: 'success',
  },
  {
    number: '4',
    label: 'ROI anchor',
    subtext: 'Hours per week times the value of your time. You price the fix in your own words.',
    color: 'accent',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    duration: 'Call one',
    description:
      'We ask, listen, and name the pain back to you. No prescriptions on the first call.',
    outcome: 'The bottleneck candidates are clear without giving away the build.',
  },
  {
    number: '02',
    title: 'Isolate',
    duration: 'Between calls',
    description:
      'We find where frequency meets friction and select one bottleneck worth prescribing for.',
    outcome: 'One target gets chosen instead of a scattered AI wish list.',
  },
  {
    number: '03',
    title: 'Prescribe',
    duration: 'Call two',
    description:
      'You get the tool name, estimated cost, and first practical step you could take this week.',
    outcome: 'The paid choice is obvious: hand it off, build it together, or have Drrizo build it.',
  },
] as const
