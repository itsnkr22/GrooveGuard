import { SPECIALTIES } from '@/lib/constants'

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-3 px-6">
        {SPECIALTIES.map((item) => (
          <span
            key={item.label}
            className="rounded-full px-4 py-2 text-sm font-medium"
            style={{
              backgroundColor: 'var(--color-bg-secondary)',
              border: item.flagship
                ? '1.5px solid var(--color-accent)'
                : '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              boxShadow: item.flagship ? '0 8px 24px -14px rgba(47, 111, 99, 0.45)' : 'none',
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
