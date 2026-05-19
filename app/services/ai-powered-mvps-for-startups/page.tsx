import Link from 'next/link'
import { ArrowRight, Bot, Check, Layers, Rocket, ShieldCheck, Sparkles } from 'lucide-react'
import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'AI-Powered MVP Development for B2B and B2C Startups | Drrizo',
  description:
    'Build AI-first web and mobile MVPs for B2B and B2C startups, including AI agents, copilots, chatbots, workflow automation, personalization, dashboards, and launch-ready products.',
  path: '/services/ai-powered-mvps-for-startups',
  keywords: [
    'AI MVP development',
    'AI-powered MVP',
    'AI startup development',
    'B2B AI app',
    'B2C AI app',
    'AI agents',
    'AI product studio',
    'AI web app development',
    'AI mobile app development',
    'startup MVP',
  ],
})

const painPoints = [
  'Founder has an AI product idea but no clear MVP scope.',
  'Existing app idea is too broad for a first launch.',
  'Prototype does not show the real AI workflow.',
  'Founder needs something demoable for users, investors, or early customers.',
  'AI features feel like a wrapper instead of the core product.',
  'The startup needs to test demand quickly before overbuilding.',
]

const mvpTypes = [
  {
    title: 'AI Agents',
    description:
      'Autonomous or semi-autonomous agents that answer, research, summarize, route, recommend, or complete defined workflows.',
  },
  {
    title: 'AI Customer Support MVPs',
    description:
      'Chat, voice, or helpdesk agents trained on company knowledge, FAQs, product docs, and customer workflows.',
  },
  {
    title: 'AI Sales and Lead Qualification MVPs',
    description:
      'Tools that research leads, qualify prospects, draft outreach, summarize calls, and update CRM workflows.',
  },
  {
    title: 'AI Onboarding and Concierge MVPs',
    description:
      'Personalized onboarding assistants that guide users, collect preferences, configure accounts, and drive activation.',
  },
  {
    title: 'AI Content and Marketing MVPs',
    description:
      'Systems that generate, repurpose, analyze, and distribute content based on brand voice and customer data.',
  },
  {
    title: 'AI Document Processing MVPs',
    description:
      'Apps that extract, classify, summarize, and validate information from PDFs, invoices, contracts, forms, resumes, or reports.',
  },
  {
    title: 'AI Research and Reporting MVPs',
    description:
      'Tools that turn research queries, market data, customer feedback, or internal knowledge into structured reports.',
  },
  {
    title: 'AI Personalization MVPs',
    description:
      'Consumer or B2B apps that recommend plans, products, learning paths, workflows, or next actions based on user data.',
  },
  {
    title: 'AI Internal Tools',
    description:
      'Custom dashboards, copilots, and automation tools for operations, support, sales, HR, finance, or product teams.',
  },
]

const b2bUseCases = [
  'AI SDR or sales assistant',
  'AI support chatbot or voice agent',
  'AI onboarding assistant',
  'AI document review workflow',
  'AI research analyst',
  'AI product feedback analyzer',
  'AI internal knowledge copilot',
  'AI compliance or checklist assistant',
  'AI CRM automation',
  'AI proposal or quote generator',
]

const b2cUseCases = [
  'AI fitness or wellness coach',
  'AI learning tutor',
  'AI travel planner',
  'AI personal finance education assistant',
  'AI shopping or recommendation assistant',
  'AI creator tool',
  'AI journaling or productivity assistant',
  'AI beauty, fashion, or style assistant',
  'AI community or companion experience',
  'AI habit and goal coach',
]

const included = [
  'Product strategy and MVP scoping',
  'User flows and UX structure',
  'Web app or mobile app build',
  'AI chat, agent, or copilot interface',
  'Prompt engineering and system instructions',
  'Retrieval-augmented generation if needed',
  'Knowledge base integration',
  'Admin dashboard',
  'User authentication',
  'Payments or subscriptions if needed',
  'Database and backend logic',
  'Third-party integrations',
  'Analytics and event tracking',
  'Human-in-the-loop review flows',
  'Safety guardrails and fallback states',
  'Deployment and launch support',
  'Documentation and handoff',
]

const processSteps = [
  {
    title: 'Scope',
    description:
      'Define the user, problem, core workflow, AI role, success metric, and first version.',
  },
  {
    title: 'Prototype',
    description:
      'Create a clickable or working prototype that demonstrates the AI interaction and user journey.',
  },
  {
    title: 'Build',
    description:
      'Develop the web or mobile MVP with the core AI workflow, backend, database, UI, and integrations.',
  },
  {
    title: 'Test',
    description:
      'Validate outputs, edge cases, errors, speed, user flows, and AI reliability.',
  },
  {
    title: 'Launch',
    description:
      'Deploy the MVP, connect analytics, and prepare the product for early users, demos, or investor conversations.',
  },
  {
    title: 'Improve',
    description:
      'Use real user behavior to refine the AI workflow, prompts, UX, and roadmap.',
  },
]

const packages = [
  {
    title: 'AI MVP Scope Sprint',
    description:
      'Turn an AI startup idea into a clear MVP scope, user flow, feature map, build plan, and technical direction.',
  },
  {
    title: 'AI Prototype Sprint',
    description:
      'Build a clickable or lightweight working prototype for demos, validation, or investor conversations.',
  },
  {
    title: 'AI MVP Build',
    description:
      'Design and build a launch-ready AI-powered MVP for web or mobile with the core workflow, AI features, backend, and deployment.',
  },
  {
    title: 'AI Product Build and Launch',
    description:
      'A deeper build for founders who need integrations, dashboards, payments, data pipelines, launch support, and iteration after release.',
  },
  {
    title: 'AI Product Retainer',
    description:
      'Ongoing product improvements, AI workflow refinement, analytics review, prompt updates, feature expansion, and support.',
  },
]

const faqs = [
  {
    question: 'Can you build both web and mobile MVPs?',
    answer:
      'Yes. The right format depends on the user, use case, timeline, and budget. B2B MVPs often start as web apps. B2C products may need mobile-first experiences.',
  },
  {
    question: 'Do I need a technical spec before starting?',
    answer:
      'No. The scope sprint can turn the idea into a clear product plan, user flow, and build roadmap.',
  },
  {
    question: 'Will the AI be custom trained?',
    answer:
      'Not always. Most MVPs should start with the best available AI models, strong prompting, retrieval, workflow design, and product guardrails before investing in custom training.',
  },
  {
    question: 'Can this be used for fundraising?',
    answer:
      'Yes. The MVP can be built to support user validation, customer demos, investor conversations, or early revenue.',
  },
  {
    question: 'How do you keep the AI reliable?',
    answer:
      'The product should include clear prompts, structured workflows, retrieval when needed, fallback states, human review where appropriate, analytics, and ongoing evaluation.',
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

export default function AIMvpPage() {
  return (
    <div>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <OrbField variant="hero" />
        <div aria-hidden className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <EyebrowBadge>AI-Powered MVPs for B2B and B2C Startups</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
            >
              Launch an AI-first MVP that does real work.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              We help startup founders design, build, and launch AI-powered web and mobile MVPs
              for B2B and B2C markets, from agents and copilots to workflow automation,
              personalization, customer support, content systems, and internal tools.
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
                Build My AI MVP <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#use-cases"
                className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 text-base font-medium transition-all hover:bg-white"
                style={{
                  border: '1px solid var(--color-border-accent)',
                  color: 'var(--color-text-primary)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Explore MVP Use Cases
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
                  A useful MVP proves the AI workflow.
                </h2>
                <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  Startup founders do not need another generic prototype. They need a focused MVP
                  that proves the core workflow, shows the AI value clearly, and gives users a
                  reason to come back.
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
          <SectionHeading eyebrow="What We Build" title="AI-First MVPs We Can Build" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mvpTypes.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div
                  className="card-lift h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <Bot className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
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

      <section id="use-cases" className="relative overflow-hidden py-20 md:py-28">
        <OrbField variant="subtle" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Use Cases"
            title="B2B and B2C AI MVPs With Clear Jobs To Do"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { title: 'B2B AI MVP Use Cases', items: b2bUseCases },
              { title: 'B2C AI MVP Use Cases', items: b2cUseCases },
            ].map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 0.08}>
                <div
                  className="card-lift h-full rounded-2xl p-7"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <h3
                    className="text-2xl font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                  >
                    {group.title}
                  </h3>
                  <div className="mt-6 grid gap-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
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
          <SectionHeading eyebrow="What Is Included" title="What Your MVP Can Include" />
          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item, index) => (
              <Reveal key={item} delay={index * 0.02}>
                <div
                  className="flex h-full items-start gap-3 rounded-xl p-4"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Process" title="How We Build Your AI MVP" />
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
          <SectionHeading eyebrow="Packages" title="Flexible Packages For AI MVPs" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              Ready to scope your AI-first MVP?
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--color-text-secondary)', fontFamily: 'var(--font-body)' }}
            >
              Share the product idea, target user, and workflow you want to prove first. We will
              help define the MVP worth building.
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
                Build My AI MVP <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
