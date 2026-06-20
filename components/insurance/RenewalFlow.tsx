import { ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Ask',
    detail: 'Start with the forking question: revenue, time, or customers.',
  },
  {
    title: 'Listen',
    detail: 'Map repeated work, friction points, and the magic-wand outcome.',
  },
  {
    title: 'Anchor',
    detail: 'Turn hours per week and time value into a simple ROI reference.',
  },
  {
    title: 'Choose',
    detail: 'Find where frequency meets friction and select one bottleneck.',
  },
  {
    title: 'Prescribe',
    detail: 'Return the tool name, expected cost, and first step this week.',
  },
  {
    title: 'Upsell',
    detail: 'Ask whether to hand it off, build together, or build it for them.',
  },
]

export default function RenewalFlow() {
  return (
    <div className="bezel-shell">
      <div className="bezel-core p-4 md:p-5">
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute -right-2 top-5 hidden h-4 w-4 lg:block"
                  style={{ color: 'var(--color-border-accent)' }}
                  strokeWidth={1.6}
                />
              )}
              <div
                className="h-full rounded-[1.25rem] border p-4"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-primary)',
                }}
              >
                <CheckCircle2 className="h-4 w-4" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                <div
                  className="mt-3 text-sm font-semibold"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </div>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
