import { ArrowRight, Brain, FileCheck, Rocket, Search, Settings } from 'lucide-react'

const steps = [
  { title: 'Capture', detail: 'Calls, demos, notes, product docs', icon: Search },
  { title: 'Structure', detail: 'Voice, ICP, offers, objections', icon: Brain },
  { title: 'Build', detail: 'Prompts, workflows, UX, review loops', icon: Settings },
  { title: 'Approve', detail: 'Human editing and fallback states', icon: FileCheck },
  { title: 'Launch', detail: 'Publish, demo, measure, improve', icon: Rocket },
]

export default function RenewalFlow() {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((step, index) => {
        const Icon = step.icon
        return (
          <div key={step.title} className="relative">
            <div
              className="h-full rounded-xl p-4"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
              <h3
                className="mt-3 text-base font-semibold"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {step.detail}
              </p>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight
                className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 md:block"
                style={{ color: 'var(--color-accent)' }}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
