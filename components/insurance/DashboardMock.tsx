import { Check, FileText, MessageSquareText, Sparkles, Workflow, Zap } from 'lucide-react'

const sourceItems = ['Founder call', 'Product demo', 'Customer objection', 'Launch note']
const outputs = ['LinkedIn posts', 'Newsletter', 'SEO brief', 'Video scripts']

export default function DashboardMock() {
  return (
    <div
      className="card-lift relative overflow-hidden rounded-2xl p-5 md:p-6"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(232, 160, 32, 0.2), transparent 70%)',
        }}
      />
      <div className="relative flex items-center justify-between">
        <div>
          <p
            className="font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            System preview
          </p>
          <h3
            className="mt-2 text-2xl font-semibold leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
          >
            Founder input to launch assets
          </h3>
        </div>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(232, 160, 32, 0.18), rgba(184, 134, 11, 0.08))',
            border: '1px solid var(--color-accent-border)',
          }}
        >
          <Sparkles className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
        </div>
      </div>

      <div className="relative mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="space-y-2.5">
          {sourceItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl px-3.5 py-3"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <MessageSquareText className="h-4 w-4" style={{ color: 'var(--color-accent)' }} />
              <span className="text-sm" style={{ color: 'var(--color-text-primary)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full md:mx-3">
          <Workflow className="h-7 w-7" style={{ color: 'var(--color-accent)' }} />
        </div>

        <div className="space-y-2.5">
          {outputs.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl px-3.5 py-3"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-accent-border)',
              }}
            >
              <Check className="h-4 w-4" style={{ color: 'var(--color-success)' }} />
              <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative mt-5 grid gap-3 rounded-xl p-4 md:grid-cols-3"
        style={{
          background: 'linear-gradient(135deg, rgba(10, 14, 26, 0.96), rgba(21, 27, 43, 0.96))',
          color: 'var(--color-text-inverse)',
        }}
      >
        {[
          { icon: FileText, label: 'Content brain' },
          { icon: Zap, label: 'AI workflow' },
          { icon: Check, label: 'Human review' },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4" style={{ color: 'var(--color-accent-glow)' }} />
            <span className="text-xs font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
