import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 mb-8">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-6">
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or use our services. This may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Company information and business details</li>
                    <li>Service preferences and requirements</li>
                    <li>Communication history and correspondence</li>
                    <li>Payment and billing information</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-6">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Comply with legal obligations and enforce our agreements</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy. We may share your information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li>With service providers who assist us in operating our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                    <li>With your explicit consent</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                  <p className="text-gray-700 mb-6">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to restrict processing of your information</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                  <p className="text-gray-700 mb-6">
                    We use cookies and similar technologies to enhance your experience on our website. 
                    You can control cookie settings through your browser preferences.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                  <p className="text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> privacy@grooveguard.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> Global Presence • India • USA • EU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
