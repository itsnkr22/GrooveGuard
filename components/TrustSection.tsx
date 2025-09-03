'use client'

import { CheckCircle, Shield, Users, TrendingUp, Globe } from 'lucide-react'

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Expertise in Global Data Protection Laws',
      description: 'Deep understanding of GDPR, DPDPA, CCPA, HIPAA, and other international privacy regulations.'
    },
    {
      icon: Users,
      title: 'Network of Verified International Partners',
      description: 'Curated network of trusted businesses across multiple industries and geographies.'
    },
    {
      icon: TrendingUp,
      title: 'Tailored Market Entry Strategies for Every Industry',
      description: 'Customized approaches based on your industry, target market, and business objectives.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions for Startups & Enterprises',
      description: 'Flexible service packages that grow with your business needs and compliance requirements.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep regulatory expertise with practical business acumen to deliver results that protect your data and accelerate your growth.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                  <Icon className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Global Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-600 mb-2">99.9%</div>
              <div className="text-gray-600">Compliance Success Rate</div>
            </div>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Industry Recognition
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-primary-800">Certified GDPR Practitioners</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-primary-800">DPDPA Implementation Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-primary-800">International Business Advisors</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 border border-accent-200">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Global Network
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                <span className="text-accent-800">Verified Business Partners</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                <span className="text-accent-800">Local Market Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0" />
                <span className="text-accent-800">Regulatory Compliance Partners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection 