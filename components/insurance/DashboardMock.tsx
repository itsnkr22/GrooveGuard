import { ArrowRight, Brain, Database, FileText, Mail, MessageSquareText } from 'lucide-react'

const inputs = [
  'Sales calls',
  'Customer interviews',
  'CRM notes',
  'Emails',
  'Slack threads',
  'Support tickets',
  'Product feedback',
  'Demo recordings',
  'Founder notes',
  'Objections',
  'Win/loss notes',
]

const outputs = [
  'Account briefs',
  'Follow-up drafts',
  'Objection library',
  'ICP insights',
  'Meeting prep',
  'Renewal risk signals',
  'Win/loss patterns',
  'Sales enablement notes',
  'Product feedback themes',
  'Weekly GTM digest',
]

const sourceIcons = [MessageSquareText, Database, Mail, FileText]

export default function DashboardMock() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-5 shadow-2xl md:p-6"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-border-accent), transparent)',
        }}
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="space-y-3">
          <div
            className="font-mono text-[11px] uppercase tracking-[0.22em]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Inputs
          </div>
          <div className="grid grid-cols-2 gap-2">
            {inputs.map((input, index) => {
              const Icon = sourceIcons[index % sourceIcons.length]
              return (
                <div
                  key={input}
                  className="flex min-h-10 items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium"
                  style={{
                    borderColor: 'var(--color-border)',
                    backgroundColor: 'var(--color-bg-primary)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span>{input}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 lg:flex-col">
          <ArrowRight className="hidden h-5 w-5 lg:block" style={{ color: 'var(--color-accent)' }} />
          <div
            className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border text-center shadow-xl"
            style={{
              borderColor: 'var(--color-border-accent)',
              background:
                'radial-gradient(circle at top, rgba(232, 160, 32, 0.18), var(--color-bg-primary) 64%)',
            }}
          >
            <Brain className="h-8 w-8" style={{ color: 'var(--color-accent)' }} />
            <div
              className="mt-3 text-sm font-semibold leading-tight"
              style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Customer/
              <br />
              GTM Brain
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--color-text-muted)' }}>
              BrainOps
            </div>
          </div>
          <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" style={{ color: 'var(--color-accent)' }} />
        </div>

        <div className="space-y-3">
          <div
            className="font-mono text-[11px] uppercase tracking-[0.22em]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Outputs
          </div>
          <div className="grid grid-cols-2 gap-2">
            {outputs.map((output) => (
              <div
                key={output}
                className="min-h-10 rounded-lg border px-3 py-2 text-xs font-medium"
                style={{
                  borderColor: 'var(--color-border)',
                  backgroundColor: 'var(--color-bg-primary)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {output}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-5 rounded-xl border p-4"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'rgba(19, 44, 57, 0.04)',
        }}
      >
        <div className="grid gap-3 md:grid-cols-3">
          {[
            ['Memory', 'Customer and account context stays organized.'],
            ['Workflows', 'Briefs, follow-ups, digests, and feedback loops become repeatable.'],
            ['Judgment', 'Human review keeps decisions practical and grounded.'],
          ].map(([label, text]) => (
            <div key={label}>
              <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {label}
              </div>
              <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
