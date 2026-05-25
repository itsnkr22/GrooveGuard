import EyebrowBadge from '@/components/insurance/EyebrowBadge'
import Reveal from '@/components/insurance/Reveal'
import OrbField from '@/components/insurance/OrbField'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy policy for Drrizo Customer/GTM Brain and Company Brain services.',
  path: '/privacy-policy',
})

const sections = [
  {
    title: 'Information we collect',
    body: 'When you request a Customer/GTM Brain audit, Drrizo may collect your name, email, company, service interest, and GTM context. If you work with Drrizo, project materials may include customer conversations, call transcripts, CRM notes, emails, Slack threads, support tickets, product feedback, documents, or knowledge sources you choose to share.',
  },
  {
    title: 'How information is used',
    body: 'Information is used to respond to requests, scope services, build approved workflows, prepare project deliverables, and improve the quality of Customer/GTM Brain or Company Brain systems Drrizo creates for you.',
  },
  {
    title: 'Project materials',
    body: 'Customer data, founder knowledge, revenue notes, product documentation, and internal materials should be shared only when you have permission to use them. Drrizo aims to handle project context in a privacy-aware way and can adapt workflows around sensitive information.',
  },
  {
    title: 'Third-party services',
    body: 'Drrizo may use trusted third-party tools for hosting, analytics, email, AI workflows, integrations, and delivery. These tools are used only as needed to operate the website or deliver services.',
  },
  {
    title: 'Contact',
    body: 'For privacy questions, use the audit form and include Privacy in the message so the request can be routed appropriately.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <OrbField variant="subtle" />
      <div aria-hidden className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <EyebrowBadge>Privacy Policy</EyebrowBadge>
          <h1
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
          >
            How Drrizo handles project information.
          </h1>
          <p className="mt-5 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Last updated May 24, 2026
          </p>
        </Reveal>
        <div className="mt-12 space-y-5">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 0.04}>
              <div
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text-primary)' }}
                >
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
