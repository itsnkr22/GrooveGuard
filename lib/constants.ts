export const SITE_NAME = 'GrooveGuard'
export const SITE_URL = 'https://www.groovegaurd.com'
export const SITE_TAGLINE = 'AI Workflow Automation for Independent Insurance Agencies'
export const SITE_DESCRIPTION =
  'GrooveGuard builds AI-powered workflow systems for independent P&C and commercial lines insurance agencies. Automate renewals, follow-ups, onboarding, and client communication. Protect your book. Grow your commissions.'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries/insurance' },
  { label: 'About', href: '/about' },
] as const

export const MARKETS = [
  { label: 'United States', short: 'US' },
  { label: 'United Kingdom', short: 'UK' },
  { label: 'European Union', short: 'EU' },
  { label: 'UAE', short: 'UAE' },
  { label: 'Australia', short: 'Australia' },
] as const

export const SERVICES = [
  {
    title: 'Policy Renewal Workflow Automation',
    description:
      'A 90-day automated renewal sequence that reaches your clients at the right time, collects updated information, flags at-risk policies, and routes tasks to your producers — without anyone manually tracking a spreadsheet.',
    roi: 'Protecting one commercial renewal = $3,000–$30,000 in saved commission',
    icon: 'refresh',
  },
  {
    title: 'Certificate of Insurance Automation',
    description:
      'COI requests are among the most time-consuming tasks in a commercial lines agency. We automate intake, generation, delivery, and expiry tracking — turning a multi-hour weekly burden into a background process.',
    roi: 'Recover 8–12 staff hours per week',
    icon: 'document',
  },
  {
    title: 'Lead Follow-Up & Nurture Systems',
    description:
      "New enquiries that don't hear back within minutes convert at a fraction of the rate of those that do. We build immediate-response systems that qualify, engage, and nurture every inbound lead automatically — so no opportunity goes cold.",
    roi: 'Up to 21x improvement in lead conversion when response time drops under 5 minutes',
    icon: 'funnel',
  },
  {
    title: 'Cross-Sell & Upsell Trigger Workflows',
    description:
      "When a commercial client's payroll grows, when a personal lines client buys a business, when a policy milestone is hit — our systems trigger the right outreach at the right time. Revenue that would have been missed is now captured automatically.",
    roi: 'Cross-sold clients have 60% higher retention and higher average commission',
    icon: 'trending-up',
  },
  {
    title: 'Client Onboarding Automation',
    description:
      'First impressions determine long-term retention. We build structured onboarding sequences that collect documents, set expectations, introduce your team, and schedule the first review — automatically, from day one.',
    roi: 'Agencies with structured onboarding retain 23% more clients in year one',
    icon: 'user-check',
  },
  {
    title: 'Document Collection & Reminder Systems',
    description:
      'Chasing clients for payroll schedules, updated inventories, and renewal documentation is a drain on every commercial lines account manager. We automate the entire collection cycle with escalating reminders until documents are received.',
    roi: 'Eliminate 5–8 hours of manual chasing per renewal cycle',
    icon: 'file-up',
  },
  {
    title: 'Claims Status Communication',
    description:
      'Clients filing claims are anxious. Silence breeds distrust and accelerates churn. We build automated status update systems that keep claimants informed at every stage — reducing inbound calls and protecting the relationship through a difficult period.',
    roi: 'Proactive claims communication reduces post-claim churn by up to 30%',
    icon: 'bell',
  },
  {
    title: 'Annual Review Scheduling Systems',
    description:
      'Annual policy reviews are one of the highest-retention activities an agency can run — and most agencies never do them at scale because manual outreach to hundreds of clients is impractical. We automate the invitation, booking, reminder, and follow-up sequence.',
    roi: "Clients who have annual reviews retain at rates 18% higher than those who don't",
    icon: 'calendar',
  },
  {
    title: 'Referral Generation Automation',
    description:
      'The highest-quality new clients come from existing clients — but most agencies never systematically ask for referrals. We build automated referral campaigns triggered at the optimal moment post-onboarding, post-renewal, and post-claim resolution.',
    roi: 'Referred clients close at 4x the rate of cold leads and cost nothing to acquire',
    icon: 'users',
  },
  {
    title: 'CRM Hygiene & Staff Task Routing',
    description:
      "Inbound leads that aren't logged, follow-ups that fall through cracks, tasks that nobody owns — we build the underlying routing and assignment logic that keeps your team accountable and your CRM accurate without manual data entry.",
    roi: 'Clean pipeline data = better forecasting, faster producer onboarding, higher valuation',
    icon: 'route',
  },
] as const

export const PAIN_POINTS = [
  {
    stat: '51%',
    statLabel: 'of agency frontline staff report burnout',
    description:
      'Your team is stretched across renewals, certificates, follow-ups, and data entry. Every hour spent on admin is an hour not spent protecting and growing the book.',
    source: 'Liberty Mutual 2025 Independent Agents Study',
  },
  {
    stat: '16%',
    statLabel: 'annual churn agencies must overcome just to break even',
    description:
      "The average agency retains 84% of clients year-over-year. That means you're losing 1 in 6 clients annually — and most of that churn is preventable with consistent, proactive communication.",
    source: 'Industry benchmark data',
  },
  {
    stat: '$45,000+',
    statLabel: 'in annual commission lost to avoidable client churn',
    description:
      'Losing 3 commercial clients at $15,000 average commission each is $45,000 gone. Not from bad pricing or a competitor — from a missed renewal touchpoint or a slow follow-up.',
    source: 'Based on industry commission averages',
  },
] as const

export const ROI_STATS = [
  {
    number: '$180,000+',
    label: "Added to your agency's sale value",
    subtext:
      "Every $18,000 in additional annual EBITDA — achievable through automation-driven client retention — adds $180,000+ to your agency's exit value at a 10x multiple.",
    color: 'accent',
  },
  {
    number: '40+',
    label: 'Staff hours recovered every week',
    subtext:
      'Across renewals, COI generation, follow-ups, and document collection — agencies automating these workflows report 40+ hours of admin time returned to revenue-generating activity each week.',
    color: 'accent',
  },
  {
    number: '91%+',
    label: 'Client retention rate achievable with automation',
    subtext:
      'Top-performing agencies retain 91–95% of clients annually. The gap between 84% (industry average) and 91% on a $600,000 commission book is over $42,000 in protected revenue per year.',
    color: 'success',
  },
  {
    number: '30 Days',
    label: 'To measurable ROI from your first workflow',
    subtext:
      'Our first automation deployment targets your highest-impact bottleneck. Most agencies see measurable time savings and the first protected renewal within the first 30 days.',
    color: 'accent',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Workflow Audit',
    duration: '30 Minutes',
    description:
      'We spend 30 minutes with you mapping your current workflows — renewals, lead handling, onboarding, communication. We identify exactly where time is being lost and where commission is at risk. You receive a written Workflow Opportunity Report at no charge.',
    outcome: 'You leave knowing precisely what to automate first and what the ROI looks like.',
  },
  {
    number: '02',
    title: 'Custom Build',
    duration: '2–4 Weeks',
    description:
      'We design and deploy your first automation system — scoped to your highest-impact opportunity. Built around your existing processes, your carriers, and your client communication style. No disruption to current operations during the build.',
    outcome: 'Your first workflow goes live. Your team starts recovering time immediately.',
  },
  {
    number: '03',
    title: 'Optimise & Expand',
    duration: 'Ongoing',
    description:
      "We monitor performance, refine based on real results, and expand your automation stack systematically. Every quarter we review what's working, where new opportunities exist, and what to build next. You are not left alone with a system you don't understand.",
    outcome: 'Your agency compounds the efficiency gains month over month.',
  },
] as const
