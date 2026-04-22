export const SITE_NAME = 'GrooveGuard'
export const SITE_URL = 'https://www.groovegaurd.com'
export const SITE_TAGLINE = 'AI Workflow Automation for Commercial P&C Insurance Agencies'
export const SITE_DESCRIPTION =
  'GrooveGuard builds AI-powered workflow systems for US-based commercial P&C independent insurance agencies — with specialty depth in construction, trucking, habitational, cannabis, and tech E&O. Automate COIs, renewals, new-business submissions, and direct-bill reconciliation. Protect your book. Compound your commissions.'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries/insurance' },
  { label: 'About', href: '/about' },
] as const

/**
 * Geographic focus — US-only as of the 2026 ICP refinement.
 * Kept as an array so existing rendering code (footer, etc.) doesn't need restructuring.
 */
export const MARKETS = [{ label: 'United States', short: 'US' }] as const

/**
 * Specialty verticals we serve, in priority order.
 * Construction/contractors is the flagship specialty.
 */
export type Specialty = {
  label: string
  short: string
  tagline: string
  flagship?: boolean
}

export const SPECIALTIES: readonly Specialty[] = [
  {
    label: 'Construction & Contractors',
    short: 'Construction',
    flagship: true,
    tagline: 'Flagship specialty — COI-heavy accounts, large premiums, rigorous compliance',
  },
  {
    label: 'Trucking & Transportation',
    short: 'Trucking',
    tagline: 'FMCSA filings, MCS-150s, high submission volume',
  },
  {
    label: 'Habitational & Real Estate',
    short: 'Habitational',
    tagline: 'Apartment / REO portfolios, lender-driven COI requirements',
  },
  {
    label: 'Cannabis & Emerging Markets',
    short: 'Cannabis',
    tagline: 'Specialty carrier appetite, rapid regulatory change',
  },
  {
    label: 'Tech E&O / Professional Liability',
    short: 'Tech E&O',
    tagline: 'Subjectivity-heavy underwriting, digital-native clients',
  },
]

export const SERVICES = [
  {
    title: 'Policy Renewal Stewardship',
    description:
      'A 90–120 day automated renewal sequence that reaches your clients before they shop elsewhere, collects updated exposures, flags at-risk accounts, and routes tasks to your producers — without anyone manually tracking a spreadsheet.',
    roi: 'Protecting one mid-market commercial renewal = $3,000–$30,000 in saved commission',
    icon: 'refresh',
  },
  {
    title: 'Certificate of Insurance Automation',
    description:
      'The highest-ROI workflow we build for construction-focused agencies. Auto-populate COIs from policy data, validate against request requirements, flag coverage gaps, and track renewals. 3.5+ hours of daily staff work becomes a background process.',
    roi: 'Recover 8–12 staff hours per week; cut first-pass rejection rate below 10%',
    icon: 'document',
  },
  {
    title: 'New Business Submission Packaging',
    description:
      'ACORD 125, 126, 140 and supplementals assembled from your intake, matched to carrier appetite, and sent to 3–6 markets in parallel. What takes a CSR 2–4 hours per submission drops to minutes — with better market coverage and no dropped follow-through.',
    roi: 'Reclaim 2–4 staff hours per submission; quote more markets on every new opportunity',
    icon: 'package',
  },
  {
    title: 'Lost-Quote & Lead Follow-Up Systems',
    description:
      "82% of commercial buyers say they'd drop a broker over slow response. We build immediate-response systems that qualify, engage, and nurture every inbound lead and every unbound quote — so no opportunity goes cold.",
    roi: 'Up to 21x improvement in conversion when response time drops under 5 minutes',
    icon: 'funnel',
  },
  {
    title: 'Cross-Sell & Upsell Trigger Workflows',
    description:
      "When a commercial client's payroll grows, when a mono-line account is missing an umbrella, when a policy milestone is hit — our systems scan your book and trigger the right outreach at the right time. Revenue that would have been missed is now captured automatically.",
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
    title: 'Direct-Bill Reconciliation & Commission Audit',
    description:
      'Carrier statements arrive in a dozen different PDF and CSV formats. We parse them, match entries to your AMS, flag exceptions and missing commissions, and surface only what needs a human. Month-end stops being a firefight — and under-paid commission is caught systematically.',
    roi: 'Reclaim ~50% of month-end accounting cycle; recover missed commission automatically',
    icon: 'receipt',
  },
  {
    title: 'Claims Status Communication',
    description:
      'Clients filing claims are anxious. Silence breeds distrust and accelerates churn. We build automated status update systems that pull from carrier portals and keep claimants informed at every stage — protecting the relationship through a difficult period.',
    roi: 'Proactive claims communication reduces post-claim churn by up to 30%',
    icon: 'bell',
  },
  {
    title: 'Annual Review Scheduling Systems',
    description:
      'Annual policy reviews are one of the highest-retention activities an agency can run — and most agencies never do them at scale because manual outreach to hundreds of clients is impractical. We automate the invitation, booking, reminder, and follow-up sequence.',
    roi: "Clients with annual reviews retain at rates 18% higher than those who don't",
    icon: 'calendar',
  },
  {
    title: 'Referral Generation Automation',
    description:
      'The highest-quality new clients come from existing clients — but most agencies never systematically ask for referrals. We build automated referral campaigns triggered at the optimal moment post-onboarding, post-renewal, and post-claim resolution.',
    roi: 'Referred clients close at 4x the rate of cold leads and cost nothing to acquire',
    icon: 'users',
  },
] as const

export const PAIN_POINTS = [
  {
    stat: '51%',
    statLabel: 'of agency frontline staff report burnout',
    description:
      'Your account managers are stretched across renewals, certificates, submissions, and billing reconciliation. Every hour spent on admin is an hour not spent protecting and growing the book.',
    source: 'Liberty Mutual 2025 Independent Agents Study',
  },
  {
    stat: '45–55%',
    statLabel: 'first-pass COI rejection rate in commercial lines',
    description:
      'For construction-focused agencies, certificate requests from GCs and project owners are both the highest-volume workflow and the most error-prone — and every rejection costs trust and staff hours.',
    source: 'Industry benchmark data, PathwayPort',
  },
  {
    stat: '$45,000+',
    statLabel: 'in annual commission lost to avoidable client churn',
    description:
      'Losing 3 commercial clients at $15,000 average commission each is $45,000 gone. Not from bad pricing or a competitor — from a missed renewal touchpoint, a slow response, or an unanswered claims question.',
    source: 'Based on industry commission averages',
  },
] as const

export const ROI_STATS = [
  {
    number: '$180,000+',
    label: "Added to your agency's sale value",
    subtext:
      "Every $18,000 in additional annual EBITDA — achievable through automation-driven retention and recovered commission — adds $180,000+ to your agency's exit value at a 10x multiple.",
    color: 'accent',
  },
  {
    number: '40+',
    label: 'Staff hours recovered every week',
    subtext:
      'Across renewals, COI generation, new-business submissions, and direct-bill reconciliation — agencies automating these workflows report 40+ hours of admin time returned to revenue-generating activity each week.',
    color: 'accent',
  },
  {
    number: '91%+',
    label: 'Client retention rate achievable with automation',
    subtext:
      'Top-performing commercial agencies retain 91–95% of clients annually. The gap between 84% (industry average) and 91% on a $1M commission book is over $70,000 in protected revenue per year.',
    color: 'success',
  },
  {
    number: '30 Days',
    label: 'To measurable ROI from your first workflow',
    subtext:
      'Our first automation deployment targets your highest-impact bottleneck — usually COIs or renewals. Most agencies see measurable time savings and the first protected renewal within the first 30 days.',
    color: 'accent',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Workflow Audit',
    duration: '30 Minutes',
    description:
      'We spend 30 minutes with you mapping your current workflows — COIs, renewals, new-business submissions, client communication. We identify exactly where time is being lost and where commission is at risk. You receive a written Workflow Opportunity Report at no charge.',
    outcome: 'You leave knowing precisely what to automate first and what the ROI looks like.',
  },
  {
    number: '02',
    title: 'Custom Build',
    duration: '2–4 Weeks',
    description:
      'We design and deploy your first automation system — scoped to your highest-impact opportunity. Built around your existing AMS (EZLynx, Applied Epic, or HawkSoft), your carriers, and your client communication style. No disruption to current operations during the build.',
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
