import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Check,
  ClipboardList,
  Database,
  MessageSquareText,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import DashboardMock from '@/components/insurance/DashboardMock'

export const metadata = generatePageMetadata({
  title: 'Customer/GTM Brain for Startups | Drrizo',
  description:
    'Build an AI-powered Customer/GTM Brain that turns customer conversations, sales notes, CRM activity, objections, and product feedback into account briefs, follow-ups, GTM insights, and weekly founder digests.',
  path: '/services/customer-gtm-brain',
  keywords: [
    'Customer/GTM Brain',
    'GTM intelligence',
    'revenue intelligence for startups',
    'account briefs',
    'sales follow-up workflows',
    'objection intelligence',
    'win/loss analysis',
    'BrainOps',
  ],
})

const icps = [
  {
    title: 'B2B SaaS founders',
    description:
      'Founder-led or early GTM teams selling to businesses, running demos, collecting objections, and trying to tighten positioning, pipeline, and follow-up quality.',
  },
  {
    title: 'AI startup founders',
    description:
      'Teams building AI products where customer education, use-case discovery, objections, and trust-building are critical to sales and product direction.',
  },
  {
    title: 'Product-led startups adding sales',
    description:
      'Startups with users, trials, or inbound interest that need a system to understand customers, segment accounts, identify expansion opportunities, and support sales motion.',
  },
  {
    title: 'Agencies and expert-led service businesses',
    description:
      'Businesses with high-value client conversations that need better account memory, proposal context, onboarding, retention insights, and repeatable GTM knowledge.',
  },
  {
    title: 'Founder-led B2B service companies',
    description:
      'Companies where the founder still carries most customer, sales, and positioning knowledge in their head and needs to turn it into a usable operating system.',
  },
  {
    title: 'Early revenue teams',
    description:
      'Small sales, success, marketing, or founder-led revenue teams that do not need enterprise RevOps complexity, but do need a practical GTM intelligence layer.',
  },
]

const notFor = [
  'Teams with no customer conversations or sales motion yet',
  'Companies looking only for generic chatbot setup',
  'Teams unwilling to connect or share GTM/customer source material',
  'Businesses expecting fully autonomous sales without human review',
  'Companies that need heavy enterprise-grade data governance from day one',
]

const problemCards = [
  {
    title: 'Customer knowledge lives in too many places',
    description:
      'Calls, emails, Slack threads, CRM notes, support tickets, docs, spreadsheets, and founder memory rarely connect into one useful view.',
  },
  {
    title: 'Follow-up quality depends on memory',
    description:
      'Sales and customer success follow-ups are slower and weaker when the team has to manually reconstruct account history.',
  },
  {
    title: 'Positioning gets stuck in anecdotes',
    description:
      'Founders hear objections, pain points, buying triggers, and competitor mentions, but those patterns are not systematically captured.',
  },
  {
    title: 'CRM does not tell the full story',
    description:
      'CRM fields show pipeline state, but they miss nuance from demos, objections, champion language, internal risks, and product feedback.',
  },
  {
    title: 'New team members ramp slowly',
    description:
      'Sales, success, marketing, and product hires need customer context, but the best knowledge is hidden in past conversations.',
  },
  {
    title: 'GTM decisions are made without full context',
    description:
      'Founders make pricing, messaging, roadmap, and sales decisions without a clean view of what customers are actually saying.',
  },
]

const modules = [
  {
    title: 'GTM Source Audit',
    description:
      'We review where customer and revenue knowledge currently lives: CRM, call recordings, transcripts, email, Slack, support, docs, notes, forms, surveys, product feedback, and founder conversations.',
  },
  {
    title: 'Customer Knowledge Architecture',
    description:
      'We design the structure of the brain: accounts, contacts, industries, ICP segments, pain points, objections, buying triggers, competitors, use cases, feature requests, expansion signals, renewal risks, and win/loss reasons.',
  },
  {
    title: 'Data and Tool Integration Plan',
    description:
      'We map the tools that should feed the brain. Common sources may include HubSpot, Salesforce, Attio, Pipedrive, Gmail, Outlook, Slack, Notion, Google Drive, Gong, Zoom, Fireflies, Fathom, Intercom, Zendesk, Linear, Jira, Typeform, Airtable, and spreadsheets.',
  },
  {
    title: 'Customer and Account Pages',
    description:
      'We create living customer/account profiles that summarize who the customer is, what they care about, open opportunities, past conversations, objections, decisions, stakeholders, next steps, and risk signals.',
  },
  {
    title: 'Sales Call and Meeting Intelligence',
    description:
      'We turn call transcripts, demo notes, and meeting summaries into structured insights: pain points, urgency, buying criteria, objections, product gaps, competitors, follow-ups, and account context.',
  },
  {
    title: 'Objection and FAQ Library',
    description:
      'We build a living library of objections, questions, competitor mentions, pricing concerns, security concerns, integration blockers, and recommended responses.',
  },
  {
    title: 'ICP and Positioning Intelligence',
    description:
      'We identify patterns across customers and prospects: strongest segments, common pains, language customers use, buying triggers, non-fit signals, and messaging opportunities.',
  },
  {
    title: 'Follow-Up and Meeting Prep Workflows',
    description:
      'We create workflows that help founders or sales teams generate account briefs, meeting prep notes, recap emails, follow-up drafts, proposal context, and next-step recommendations.',
  },
  {
    title: 'Win/Loss and Pipeline Learning',
    description:
      'We extract why deals are won, lost, delayed, expanded, or stuck. The goal is to make GTM learning visible instead of buried inside individual calls.',
  },
  {
    title: 'Product Feedback Loop',
    description:
      'We organize customer feedback, feature requests, complaints, onboarding friction, and integration needs into themes that product and founders can actually use.',
  },
  {
    title: 'Weekly GTM Digest',
    description:
      'We create a weekly executive-style GTM summary covering top customer themes, important accounts, follow-up gaps, objections, product feedback, risks, and recommended actions.',
  },
  {
    title: 'Human Review and BrainOps',
    description:
      'We do not leave clients with a messy AI tool. Drrizo reviews outputs, improves prompts, cleans source structure, checks accuracy, refines workflows, and keeps the brain useful over time.',
  },
]

const workflows = [
  {
    title: 'Pre-call Account Brief',
    input: 'CRM record, past emails, Slack notes, call transcripts, support tickets, product usage notes.',
    output:
      'A concise account brief with company context, stakeholders, previous conversations, pain points, open objections, deal stage, risks, recommended agenda, and suggested questions.',
  },
  {
    title: 'Post-call Follow-Up Draft',
    input: 'Sales call transcript or meeting notes.',
    output:
      'Follow-up email draft, summary of customer pains, next steps, stakeholder concerns, CRM update notes, objection tags, and product feedback items.',
  },
  {
    title: 'Objection Intelligence',
    input: 'All calls, emails, CRM notes, support tickets, and demo transcripts.',
    output:
      'A searchable objection library organized by pricing, security, integrations, switching costs, competitors, timing, trust, procurement, and product gaps.',
  },
  {
    title: 'ICP Pattern Finder',
    input:
      'Closed-won deals, closed-lost deals, active opportunities, customer interviews, support conversations, and founder notes.',
    output:
      'ICP patterns, best-fit segments, weak-fit segments, buying triggers, common pains, high-intent language, and positioning recommendations.',
  },
  {
    title: 'Weekly Founder GTM Digest',
    input:
      'New customer conversations, pipeline updates, email threads, support issues, Slack discussions, and product feedback.',
    output:
      'Weekly digest showing the most important customer insights, stuck deals, follow-up gaps, emerging objections, customer quotes, roadmap signals, and recommended founder actions.',
  },
  {
    title: 'Renewal or Expansion Risk Signal',
    input:
      'Support issues, unresolved tickets, negative sentiment, product usage notes, customer success updates, and account conversations.',
    output: 'Risk summary, customer context, likely reason for risk, recommended recovery action, and suggested message.',
  },
  {
    title: 'Sales Enablement From Real Conversations',
    input: 'Past customer calls, demo questions, objections, winning language, case studies, and FAQs.',
    output:
      'Talk tracks, proof points, objection responses, discovery questions, demo notes, and onboarding snippets based on actual customer language.',
  },
  {
    title: 'Product Feedback Clustering',
    input: 'Feature requests, support tickets, sales calls, Slack notes, customer interviews, and churn reasons.',
    output:
      'Ranked feedback themes, affected customer segments, revenue relevance, example customer quotes, and suggested product follow-up questions.',
  },
  {
    title: 'New GTM Hire Ramp',
    input: 'Customer/account pages, ICP notes, objection library, call summaries, product notes, and sales process docs.',
    output: 'A faster onboarding system for new sales, success, marketing, or founder support hires.',
  },
  {
    title: 'Founder Memory Capture',
    input: 'Founder voice notes, sales instincts, customer anecdotes, positioning thoughts, and meeting reflections.',
    output:
      'Structured GTM notes that become part of the brain instead of staying trapped in the founder’s head.',
  },
]

const deliverables = [
  'GTM knowledge audit',
  'Source and integration map',
  'Customer/GTM Brain architecture',
  'Customer and account intelligence structure',
  'ICP and segmentation framework',
  'Objection and FAQ library',
  'Sales call insight extraction workflow',
  'Pre-call account brief workflow',
  'Post-call follow-up workflow',
  'Weekly GTM digest workflow',
  'Product feedback loop',
  'Win/loss learning structure',
  'Human review process',
  'BrainOps operating rhythm',
  'Documentation and handoff',
  'Optional dashboards or workspace views',
  'Optional CRM/email/Slack/docs integrations depending on stack',
]

const packages = [
  {
    title: 'Customer/GTM Brain Audit',
    price: 'Starting at $1,500',
    description: 'A focused audit to identify your highest-impact GTM brain opportunity before building.',
    includes: [
      'Source review',
      'GTM workflow review',
      'ICP/customer knowledge mapping',
      'Tool and integration recommendations',
      'First workflow recommendations',
      'Pilot roadmap',
    ],
    cta: 'Request Audit',
  },
  {
    title: 'Customer/GTM Brain Pilot',
    price: 'Starting at $7,500 setup + monthly retainer',
    description:
      'A focused build for one GTM use case, such as account briefs, follow-up workflows, objection intelligence, or weekly GTM digest.',
    includes: [
      'Source setup',
      'Brain architecture',
      '1-2 core workflows',
      'Human review loop',
      'Initial GTM knowledge base',
      'Weekly improvement cycle',
    ],
    cta: 'Apply for Pilot',
  },
  {
    title: 'Customer/GTM Brain Operating System',
    price: 'Custom setup + monthly BrainOps retainer',
    description:
      'A broader GTM intelligence system across sales, success, product feedback, and founder decision-making.',
    includes: [
      'Multi-source GTM brain',
      'Customer/account pages',
      'Sales and customer workflows',
      'Weekly GTM digest',
      'Objection and ICP intelligence',
      'Product feedback loop',
      'Ongoing BrainOps',
    ],
    cta: 'Discuss Build',
  },
]

const process = [
  {
    title: 'Audit',
    description:
      'We review your current GTM motion, customer sources, tools, sales process, follow-up gaps, ICP, and highest-value workflows.',
  },
  {
    title: 'Architect',
    description:
      'We define the brain structure: accounts, customer types, objections, use cases, decision-makers, revenue signals, and source hierarchy.',
  },
  {
    title: 'Connect',
    description:
      'We connect or import the right source material: CRM, email, Slack, docs, calls, support, product feedback, spreadsheets, and founder notes.',
  },
  {
    title: 'Build',
    description:
      'We create the core workflows: account briefs, follow-ups, objection library, ICP insights, weekly digest, and feedback loops.',
  },
  {
    title: 'Review',
    description:
      'We test outputs with real customer context, improve prompts, clean structure, and add human review where accuracy matters.',
  },
  {
    title: 'Operate',
    description:
      'We maintain and improve the brain through monthly BrainOps: new sources, workflow updates, output QA, insight review, and optimization.',
  },
]

const trust = [
  'Human review remains part of the workflow',
  'Customer data is handled carefully',
  'Source provenance and citations should be included where possible',
  'AI outputs should support decisions, not blindly replace judgment',
  'Sensitive actions should require approval',
  'The brain should start narrow before expanding',
  'Workflows should be measured by business usefulness, not novelty',
]

const faqs = [
  {
    question: 'Is this just a chatbot?',
    answer:
      'No. A Customer/GTM Brain is a structured revenue intelligence system. It can include chat-style retrieval, but the value is in organized customer memory, workflows, briefs, digests, insights, and GTM decision support.',
  },
  {
    question: 'Do we need a clean CRM first?',
    answer:
      'No. Many startups start with messy CRM notes, call transcripts, Slack, email, and founder memory. The first step is usually organizing what already exists.',
  },
  {
    question: 'Which tools can this connect to?',
    answer:
      'The exact stack depends on the client. Common sources include CRM, email, Slack, docs, meeting transcripts, support tools, product feedback tools, and spreadsheets.',
  },
  {
    question: 'Will this replace our sales team?',
    answer:
      'No. It helps founders and GTM teams prepare better, follow up faster, learn from customer conversations, and make sharper decisions.',
  },
  {
    question: 'How long does a pilot take?',
    answer:
      'A focused pilot can usually be scoped around one high-value workflow first. The goal is to prove business value before expanding.',
  },
  {
    question: 'What is BrainOps?',
    answer:
      'BrainOps is the ongoing operating layer that keeps the brain useful: reviewing outputs, cleaning source structure, improving prompts, adding workflows, monitoring quality, and turning new customer data into useful GTM intelligence.',
  },
  {
    question: 'Can this help with product decisions?',
    answer:
      'Yes. Customer conversations often contain product feedback, feature requests, onboarding friction, competitor mentions, and use-case patterns. The GTM Brain can organize those signals for founders and product teams.',
  },
  {
    question: 'Can this become a broader Company Brain later?',
    answer:
      'Yes. Customer/GTM Brain is the starting wedge. Company Brain is the broader future system for internal knowledge, decisions, onboarding, SOPs, and team memory.',
  },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-3xl text-center">
        <EyebrowBadge variant="muted">{eyebrow}</EyebrowBadge>
        <h2
          className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function CustomerGtmBrainPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-20 md:pt-28">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <EyebrowBadge>Customer/GTM Brain for Founder-Led Startups</EyebrowBadge>
              <h1
                className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                Turn every customer conversation into GTM intelligence.
              </h1>
              <p
                className="mt-6 max-w-2xl text-base leading-relaxed md:text-xl"
                style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
              >
                Most startups already have the raw material for better sales, positioning,
                product decisions, and retention. It is trapped across calls, CRM notes, Slack,
                email, support tickets, and founder memory. Drrizo builds a Customer/GTM Brain
                that turns that scattered context into a living operating system for revenue.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/audit"
                  className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#FAF8F3' }}
                >
                  Request GTM Brain Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#demo-workflows"
                  className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                  style={{
                    border: '1px solid var(--color-border-accent)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  See Demo Workflows
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <DashboardMock />
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Ideal Clients"
            title="Built for startups where customer knowledge is the growth bottleneck."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {icps.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className="card-lift h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <Brain className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  <h3 className="mt-4 text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div
              className="mt-8 rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <h3 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                Who this is not for
              </h3>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {notFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Problem"
            title="Your startup already has GTM intelligence. It is just scattered."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problemCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className="card-lift h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderTop: '3px solid var(--color-accent)',
                  }}
                >
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What We Build" title="What your Customer/GTM Brain includes" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.03}>
                <div
                  className="card-lift h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="demo-workflows" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Demo Workflows" title="Demo workflows your GTM Brain can power" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {workflows.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div
                  className="card-lift h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: 'rgba(232, 160, 32, 0.12)' }}
                    >
                      <Workflow className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {item.title}
                      </h3>
                      <div className="mt-4 grid gap-3">
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                            Input:
                          </span>{' '}
                          {item.input}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                          <span className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                            Output:
                          </span>{' '}
                          {item.output}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Deliverables" title="What you get" />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item) => (
              <div
                key={item}
                className="rounded-xl border px-4 py-3 text-sm font-medium"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-secondary)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Pilot Packages" title="Pilot packages" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article
                  className="card-lift flex h-full flex-col rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <ClipboardList className="h-6 w-6" style={{ color: 'var(--color-accent)' }} />
                  <h3
                    className="mt-5 text-xl font-semibold tracking-tight"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                  <div
                    className="mt-3 text-lg font-semibold"
                    style={{ color: 'var(--color-accent-dark)', fontFamily: 'var(--font-heading)' }}
                  >
                    {item.price}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {item.includes.map((include) => (
                      <li key={include} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                        <span>{include}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/audit"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: 'var(--color-accent-dark)' }}
                  >
                    {item.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Process" title="How we build your Customer/GTM Brain" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className="h-full rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <ShieldCheck className="h-8 w-8" style={{ color: 'var(--color-accent)' }} />
                  <h2
                    className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    Built for useful intelligence, not careless automation.
                  </h2>
                </div>
                <ul className="grid gap-3">
                  {trust.map((item) => (
                    <li key={item} className="flex gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-bg-tertiary)' }}>
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-12 grid gap-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border p-5"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-secondary)',
                }}
              >
                <summary
                  className="cursor-pointer text-base font-semibold"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Database className="mx-auto h-8 w-8" style={{ color: 'var(--color-accent)' }} />
            <h2
              className="mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Find the first GTM workflow your brain should improve.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              The best first build is usually narrow: one source problem, one high-value
              workflow, one measurable improvement in follow-up quality, account context, or
              GTM learning.
            </p>
            <Link
              href="/audit"
              className="btn-shimmer mt-8 inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold"
              style={{ backgroundColor: 'var(--color-accent)', color: '#FAF8F3' }}
            >
              Request GTM Brain Audit <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
