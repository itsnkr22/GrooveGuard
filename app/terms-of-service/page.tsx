import { generatePageMetadata } from '@/lib/metadata'
import { SITE_NAME } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: `${SITE_NAME} terms of service. Read our terms and conditions for using our website and services.`,
  path: '/terms-of-service',
})

export default function TermsOfServicePage() {
  return (
    <article className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1
          className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Terms of Service
        </h1>
        <p className="mb-12 text-text-secondary">Last updated: January 15, 2025</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              1. Agreement to Terms
            </h2>
            <p>
              By accessing or using the {SITE_NAME} website at grooveguard.com and any related services (collectively,
              the &quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              2. Description of Services
            </h2>
            <p>
              {SITE_NAME} provides AI workflow automation consulting and implementation services. This includes workflow
              auditing, design, development, deployment, and ongoing optimisation of AI-powered automation systems for
              businesses.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              3. Engagement and Proposals
            </h2>
            <p>
              All service engagements begin with a consultation. Specific scope, deliverables, timelines, and terms for
              each project are defined in individual proposals or statements of work, which form part of our agreement
              with you once accepted.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              4. Intellectual Property
            </h2>
            <p className="mb-3">
              All content on this website — including text, graphics, logos, icons, images, and software — is the
              property of {SITE_NAME} or its content suppliers and is protected by international copyright laws.
            </p>
            <p>
              Upon full payment for services rendered, clients receive ownership of the custom workflows, automations,
              and deliverables created specifically for their engagement, unless otherwise stated in the project proposal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              5. Client Responsibilities
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Provide timely access to systems, tools, and information required for project delivery</li>
              <li>Designate a point of contact for communication and approvals</li>
              <li>Review and approve deliverables within agreed timeframes</li>
              <li>Ensure that any data shared with us complies with applicable data protection regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              6. Confidentiality
            </h2>
            <p>
              Both parties agree to treat all non-public information shared during the course of an engagement as
              confidential. Neither party shall disclose confidential information to third parties without prior written
              consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, {SITE_NAME} shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
              directly or indirectly, arising from your use of our Services or this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              8. Disclaimer of Warranties
            </h2>
            <p>
              Our website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
              {SITE_NAME} makes no warranties, expressed or implied, regarding the operation of the website or the
              accuracy of the information, content, or materials included on the site.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              9. Third-Party Tools and Integrations
            </h2>
            <p>
              Our services may involve integration with third-party tools and platforms (such as n8n, Make, CRM systems,
              and cloud services). We are not responsible for the performance, availability, or policies of third-party
              services. Clients are responsible for maintaining their own licences and subscriptions to third-party tools.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              10. Termination
            </h2>
            <p>
              Either party may terminate an engagement in accordance with the terms set out in the applicable project
              proposal or statement of work. We reserve the right to suspend or terminate access to our website for any
              user who violates these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              11. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of England and
              Wales, without regard to conflict of law principles. Any disputes arising from these terms shall be subject
              to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              12. Changes to These Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page
              with an updated date. Your continued use of the Services after any changes constitutes acceptance of the
              new terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              13. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please{' '}
              <a href="/contact" className="text-accent-blue hover:underline">
                contact us
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
