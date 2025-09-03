import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Ready to discuss your data privacy compliance and global expansion needs? 
            Our team of experts is here to help you navigate complex regulations and unlock new opportunities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@grooveguard.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Global Presence</h3>
                      <p className="text-gray-600">India • USA • EU</p>
                      <p className="text-sm text-gray-500">Serving clients worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-gray-600">Within 24 hours</p>
                      <p className="text-sm text-gray-500">Urgent requests: Same day</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Why Choose GrooveGuard?
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert knowledge of global data privacy laws</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Proven track record with 500+ global clients</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tailored solutions for your industry</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ongoing support and compliance monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can you help with compliance?
                </h3>
                <p className="text-gray-600">
                  We can provide initial assessments within 48 hours and implement basic compliance measures within 30 days for urgent needs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you work with startups and enterprises?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer scalable solutions for businesses of all sizes, from early-stage startups to Fortune 500 companies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What industries do you specialize in?
                </h3>
                <p className="text-gray-600">
                  We work across all industries, with particular expertise in fintech, healthcare, e-commerce, and SaaS companies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How do you ensure data security?
                </h3>
                <p className="text-gray-600">
                  We follow industry best practices and are ISO 27001 certified. All client data is encrypted and handled with strict confidentiality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can you help with international expansion?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Our global network spans 50+ countries, and we provide comprehensive market entry support and local partner connections.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's included in your consultation?
                </h3>
                <p className="text-gray-600">
                  Free consultations include a 30-minute strategy session, compliance assessment, and customized recommendations for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 