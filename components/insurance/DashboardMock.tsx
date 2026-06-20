import { ArrowDownRight, ArrowUpRight, Clock3, HeartHandshake, Search, TrendingUp } from 'lucide-react'

const levers = [
  { label: 'More revenue', icon: TrendingUp },
  { label: 'More hours back', icon: Clock3 },
  { label: 'Happier customers', icon: HeartHandshake },
]

const outputs = ['Tool name', 'Estimated cost', 'First step this week']

export default function DashboardMock() {
  return (
    <div className="bezel-shell">
      <div className="bezel-core overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] overflow-hidden">
            <img
              src="https://picsum.photos/seed/drrizo-ai-assessment-desk/1200/900"
              alt="Premium operator desk with notes and planning materials"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>

          <div className="p-5 md:p-7">
            <div
              className="rounded-[1.35rem] p-5"
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--color-accent)' }}>
                    Assessment path
                  </div>
                  <h3
                    className="mt-2 text-xl font-semibold leading-tight"
                    style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}
                  >
                    From repeated friction to one AI prescription.
                  </h3>
                </div>
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'var(--color-text-primary)', color: 'var(--color-text-inverse)' }}
                >
                  <Search className="h-5 w-5" strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {levers.map((lever) => {
                  const Icon = lever.icon
                  return (
                    <div
                      key={lever.label}
                      className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3"
                      style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4" style={{ color: 'var(--color-accent)' }} strokeWidth={1.6} />
                        <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                          {lever.label}
                        </span>
                      </div>
                      <ArrowDownRight className="h-4 w-4" style={{ color: 'var(--color-text-muted)' }} strokeWidth={1.6} />
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 rounded-2xl p-4" style={{ backgroundColor: 'var(--color-text-primary)' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: 'var(--color-accent-glow)' }}>
                  Call two returns
                </p>
                <div className="mt-3 grid gap-2">
                  {outputs.map((output) => (
                    <div key={output} className="flex items-center justify-between text-sm" style={{ color: 'var(--color-text-inverse)' }}>
                      <span>{output}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
