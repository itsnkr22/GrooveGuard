import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function TopBanner() {
  return (
    <div
      className="relative z-50 w-full border-b px-4 py-2 text-center text-xs md:text-sm"
      style={{
        backgroundColor: 'var(--color-bg-navy)',
        borderColor: 'rgba(255,255,255,0.08)',
        color: 'rgba(248, 244, 234, 0.78)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <span>Flagship service: Customer/GTM Brain for founder-led startups.</span>
      <Link
        href="/services/customer-gtm-brain"
        className="ml-2 inline-flex items-center gap-1 font-semibold"
        style={{ color: 'var(--color-accent-glow)' }}
      >
        Explore the brain <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}
