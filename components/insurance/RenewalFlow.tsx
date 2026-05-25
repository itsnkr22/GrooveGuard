import { ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Audit',
    detail: 'Find the GTM workflow where scattered customer context is slowing revenue down.',
  },
  {
    title: 'Architect',
    detail: 'Define accounts, objections, ICP segments, revenue signals, and source hierarchy.',
  },
  {
    title: 'Connect',
    detail: 'Bring in CRM, calls, email, Slack, docs, support, product feedback, and founder notes.',
  },
  {
    title: 'Build',
    detail: 'Create briefs, follow-ups, objection libraries, digests, and feedback loops.',
  },
  {
    title: 'Review',
    detail: 'Test outputs against real customer context and keep human approval where it matters.',
  },
  {
    title: 'Operate',
    detail: 'Improve the brain through monthly BrainOps, source cleanup, and workflow QA.',
  },
]

export default function RenewalFlow() {
  return (
    <div
      className="rounded-2xl p-5 md:p-6"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            {index < steps.length - 1 && (
              <ArrowRight
                aria-hidden
                className="absolute -right-2 top-5 hidden h-4 w-4 lg:block"
                style={{ color: 'var(--color-border-accent)' }}
              />
            )}
            <div
              className="h-full rounded-xl border p-4"
              style={{
                borderColor: 'var(--color-border)',
                backgroundColor: 'var(--color-bg-primary)',
              }}
            >
              <CheckCircle2 className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
              <div
                className="mt-3 text-sm font-semibold"
                style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
              >
                {index + 1}. {step.title}
              </div>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
