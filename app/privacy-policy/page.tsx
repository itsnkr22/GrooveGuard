import { generatePageMetadata } from '@/lib/metadata'
import { SITE_NAME } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: `${SITE_NAME} privacy policy. Learn how we collect, use, and protect your personal data.`,
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <article className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h1
          className="mb-4 text-4xl font-bold tracking-tight text-white lg:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Privacy Policy
        </h1>
        <p className="mb-12 text-text-secondary">Last updated: January 15, 2025</p>

        <div className="space-y-10 text-text-secondary leading-relaxed">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              1. Introduction
            </h2>
            <p>
              {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website at grooveguard.com or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              2. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-white">Personal Information:</strong> Name, email address, company name,
                and other details you voluntarily provide through our contact form or communications.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Information about how you interact with our
                website, including pages visited, time spent, referring URLs, and browser type.
              </li>
              <li>
                <strong className="text-white">Cookies and Tracking Technologies:</strong> We use cookies and
                similar technologies to enhance your browsing experience and analyse website traffic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              3. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>To respond to your enquiries and provide our services</li>
              <li>To send you relevant information about our services (only with your consent)</li>
              <li>To improve our website and user experience</li>
              <li>To analyse website usage and trends</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              4. Data Sharing and Disclosure
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information
              with trusted service providers who assist us in operating our website and conducting our business, provided
              they agree to keep your information confidential. We may also disclose your information where required by
              law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against
              unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the
              internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              6. Your Rights
            </h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>The right to access and receive a copy of your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict or object to processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please{' '}
              <a href="/contact" className="text-accent-blue hover:underline">
                contact us
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              7. Cookies
            </h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us provide you with a good
              experience when you browse our website and also allows us to improve our site. You can set your browser to
              refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of those sites. We encourage you to read the privacy policy of every website you visit.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              9. Data Retention
            </h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was
              collected, including to satisfy any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
              updated revision date. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
              11. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please{' '}
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
