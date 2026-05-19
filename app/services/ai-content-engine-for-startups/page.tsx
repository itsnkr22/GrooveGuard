import Link from 'next/link'
import { ArrowRight, Check, FileText, MessageSquareText, ShieldCheck, Sparkles } from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'AI Content Engine for Startups and Founders | Drrizo',
  description:
    'Turn founder calls, demos, webinars, podcasts, and product knowledge into LinkedIn posts, newsletters, blogs, short-video scripts, SEO content, and sales assets with an AI-powered content repurposing engine.',
  path: '/services/ai-content-engine-for-startups',
  keywords: [
    'AI content engine',
    'AI content repurposing',
    'founder-led content',
    'startup content marketing',
    'AI content system',
    'B2B SaaS content',
    'startup distribution',
    'AI marketing automation',
  ],
})

const painPoints = [
  'Founder has strong ideas but no time to post consistently.',
  'Existing AI content sounds generic and does not match founder voice.',
  'Long-form content is underused after one webinar, podcast, or call.',
  'Sales calls and customer objections are not being turned into marketing assets.',
  'Product updates do not become educational content.',
  'Content calendar is inconsistent.',
  'Startup needs trust, authority, and inbound demand before hiring a full marketing team.',
]

const engineComponents = [
  {
    title: 'Content Brain',
    description:
      'A structured knowledge base containing founder voice, ICP, positioning, product details, customer pain points, offers, objections, FAQs, testimonials, sales notes, and brand rules.',
  },
  {
    title: 'Repurposing Pipeline',
    description:
      'A workflow that turns raw input such as calls, transcripts, demos, webinars, blogs, podcasts, and voice notes into multi-channel content.',
  },
  {
    title: 'Founder Voice System',
    description:
      'Prompting and editing rules that preserve the founder tone, point of view, vocabulary, and opinions so the content does not feel like generic AI output.',
  },
  {
    title: 'Multi-Channel Content Output',
    description:
      'LinkedIn posts, X/Twitter threads, newsletters, blogs, SEO articles, short-video scripts, carousels, email sequences, launch posts, and sales enablement snippets.',
  },
  {
    title: 'Review and Approval Workflow',
    description:
      'A simple system for draft review, human editing, founder approval, and publishing handoff.',
  },
  {
    title: 'Analytics Feedback Loop',
    description:
      'Track which topics, hooks, formats, and channels perform best, then use that data to improve the next content batch.',
  },
]

const repurposingOutputs = [
  '12 LinkedIn posts',
  '4 X/Twitter threads',
  '2 newsletters',
  '1 SEO blog post',
  '8 short-video scripts',
  '5 quote-style social posts',
  '3 carousel outlines',
  '5 sales email snippets',
  '10 hook variations',
  '1 content calendar',
]

const idealClients = [
  'B2B SaaS founders',
  'AI startup founders',
  'B2C app founders',
  'D2C brand founders',
  'consultants turning expertise into products',
  'technical founders who need clearer distribution',
  'funded startups without a full content team',
  'founders already doing podcasts, demos, webinars, or customer calls',
]

const sourceMaterials = [
  'Founder interviews',
  'Sales calls',
  'Customer interviews',
  'Product demos',
  'Webinars',
  'Podcasts',
  'YouTube videos',
  'Voice notes',
  'Blog posts',
  'Newsletters',
  'Pitch decks',
  'Product documentation',
  'Case studies',
  'Testimonials',
  'Community discussions',
  'Launch notes',
]

const processSteps = [
  {
    title: 'Audit',
    description:
      'We review your positioning, ICP, existing content, founder voice, offers, and current channels.',
  },
  {
    title: 'Capture',
    description:
      'We collect calls, demos, transcripts, product notes, voice notes, and long-form content.',
  },
  {
    title: 'Extract',
    description:
      'AI identifies strong ideas, hooks, objections, stories, frameworks, product use cases, and audience pain points.',
  },
  {
    title: 'Repurpose',
    description:
      'We turn the best ideas into channel-specific content for LinkedIn, email, blogs, SEO, short video, and sales.',
  },
  {
    title: 'Review',
    description:
      'Human editing keeps the content accurate, sharp, and true to the founder voice.',
  },
  {
    title: 'Publish and Learn',
    description:
      'The system tracks what performs and improves the next batch.',
  },
]

const packages = [
  {
    title: 'AI Content Repurposing Sprint',
    description: 'Turn one long-form asset into a multi-channel content pack.',
    includes: [
      '1 long-form content asset repurposed',
      '10 to 20 social posts',
      '1 newsletter draft',
      '3 to 5 short-video scripts',
      'Hook variations',
      'Content calendar handoff',
    ],
  },
  {
    title: 'Founder Content Engine Setup',
    description: 'Build the AI-powered content system for the founder or startup.',
    includes: [
      'Content brain',
      'Founder voice guide',
      'Repurposing workflow',
      'Prompt library',
      'Channel playbooks',
      'Approval workflow',
      'First batch of content',
    ],
  },
  {
    title: 'Monthly AI Content Engine',
    description: 'Ongoing AI-powered repurposing, editing, and content production.',
    includes: [
      '2 to 4 source assets per month',
      '30 to 60 social posts',
      '4 newsletters or email drafts',
      '4 blog or SEO assets',
      '8 to 16 short-video scripts',
      'Monthly analytics review',
    ],
  },
]

const faqs = [
  {
    question: 'Do I need existing content?',
    answer:
      'No. If you do not have content yet, we can start with founder interviews, voice notes, product demos, or customer conversations.',
  },
  {
    question: 'Will the content sound like me?',
    answer:
      'Yes. The system is built around your founder voice, point of view, vocabulary, and audience.',
  },
  {
    question: 'Is this fully automated?',
    answer:
      'No. AI accelerates research, extraction, drafting, and repurposing, but human editing and founder approval keep the output accurate and authentic.',
  },
  {
    question: 'Which channels should I start with?',
    answer:
      'For B2B founders, start with LinkedIn, newsletter, blog, and sales assets. For B2C founders, start with short video, email, Instagram or TikTok, and product education.',
  },
  {
    question: 'Can you publish for us?',
    answer:
      'Publishing support can be added based on the workflow, approval process, and channels you want to manage.',
  },
]

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <EyebrowBadge variant="muted">{eyebrow}</EyebrowBadge>
        <h2
          className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
        >
          {title}
        </h2>
        {copy && (
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
          >
            {copy}
          </p>
        )}
      </Reveal>
    </div>
  )
}

export default function AIContentEnginePage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>AI Content Engine for Startups and Founders</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Turn founder knowledge into a full content engine.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              We build AI-powered content systems that repurpose your calls, demos, webinars,
              podcasts, voice notes, and product updates into founder-led content for LinkedIn,
              blogs, newsletters, short video scripts, SEO, and sales.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-semibold transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FAF8F3',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Build My Content Engine <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#repurposing"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                style={{
                  border: '1px solid var(--color-border-accent)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                See How Repurposing Works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div>
                <EyebrowBadge variant="muted">The Problem</EyebrowBadge>
                <h2
                  className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  The ideas already exist. Distribution is the bottleneck.
                </h2>
                <p
                  className="mt-5 text-base leading-relaxed md:text-lg"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Most founders are already creating valuable content every week, but it is
                  trapped inside sales calls, customer conversations, demos, webinars, podcasts,
                  Slack threads, and product updates. The problem is not a lack of ideas. The
                  problem is turning those ideas into consistent, high-quality distribution
                  without hiring a full content team.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-3">
              {painPoints.map((point, index) => (
                <Reveal key={point} delay={index * 0.04}>
                  <div
                    className="flex items-start gap-3 rounded-xl p-4"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                      {point}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="What We Build" title="What Your AI Content Engine Includes" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {engineComponents.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className="card-lift h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <FileText className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                  <h3
                    className="mt-4 text-xl font-semibold leading-snug"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
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

      <section id="repurposing" className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Content Repurposing"
            title="One Founder Call Can Become a Month of Content"
            copy="Your best content is usually already inside your conversations. We help extract it, structure it, and turn it into assets your audience can actually see."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div
                className="card-lift rounded-2xl p-7"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-text-muted)' }}>
                  Input
                </p>
                <h3
                  className="mt-3 text-2xl font-semibold leading-tight"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  A 60-minute founder interview, webinar, demo, podcast, or sales call.
                </h3>
              </div>
            </Reveal>
            <div className="grid gap-3 md:grid-cols-2">
              {repurposingOutputs.map((item, index) => (
                <Reveal key={item} delay={index * 0.03}>
                  <div
                    className="flex items-center gap-3 rounded-xl p-4"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    <Sparkles className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Ideal Clients" title="Built For Founder-Led Startups" />
              <div className="mt-10 grid gap-3">
                {idealClients.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Source Materials" title="What We Can Repurpose" />
              <div className="mt-10 flex flex-wrap gap-2.5">
                {sourceMaterials.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3.5 py-2 text-sm"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Process" title="How It Works" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div
                  className="card-lift h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <span className="font-mono text-sm font-semibold tracking-[0.2em]" style={{ color: 'var(--color-accent)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="mt-4 text-xl font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Packages" title="Flexible Packages For Content Systems" />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div
                  className="card-lift h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-accent)' }}>
                    Custom proposal
                  </p>
                  <h3
                    className="mt-3 text-xl font-semibold leading-snug"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {item.includes.map((include) => (
                      <li key={include} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                        <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                          {include}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div
              className="rounded-2xl p-7 md:p-9"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-accent-border)',
                boxShadow: 'var(--shadow-soft)',
              }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                <ShieldCheck className="h-6 w-6 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                <div>
                  <h2
                    className="text-2xl font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    Trust and responsibility
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                    AI should accelerate the workflow, not remove judgment. We design systems with
                    human review, clear fallback states, privacy-aware data handling, and practical
                    guardrails so founders can move fast without shipping careless automation.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="relative py-20 md:py-28"
        style={{ backgroundColor: 'var(--color-bg-tertiary)' }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="FAQ" title="Questions Founders Ask" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <OrbField variant="cta" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2
              className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Ready to turn founder knowledge into distribution?
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Share your source material and channels. We will help scope the most useful first
              content engine.
            </p>
            <div className="mt-9">
              <Link
                href="/audit"
                className="btn-shimmer inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold transition-transform active:scale-[0.98]"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#FAF8F3',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Build My Content Engine <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
