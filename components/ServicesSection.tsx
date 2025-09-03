'use client'

import { Shield, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Data Privacy & Compliance',
      description: 'Stay ahead of regulations like GDPR, DPDPA, CCPA, and HIPAA.',
      details: 'We provide end-to-end compliance audits, policies, checklists, and training so your business stays secure and regulator-ready.',
      cta: 'Get a Free Compliance Checklist',
      ctaLink: '#privacy',
      features: ['GDPR Compliance', 'DPDPA Implementation', 'CCPA & HIPAA', 'Policy Drafting', 'Training & Audits'],
      color: 'primary'
    },
    {
      icon: Users,
      title: 'B2B Cross-Border Matchmaking',
      description: 'Expand globally with the right partners.',
      details: 'We connect Indian companies with international distributors, resellers, and strategic partners—helping you unlock new opportunities worldwide.',
      cta: 'Discover Our Matchmaking Process',
      ctaLink: '#matchmaking',
      features: ['Partner Discovery', 'Due Diligence', 'Strategic Introductions', 'Joint Ventures', 'Distribution Networks'],
      color: 'accent'
    },
    {
      icon: TrendingUp,
      title: 'Market Entry Advisory',
      description: 'Break into new markets with confidence.',
      details: 'From research and localization to regulatory insights and go-to-market strategies, we guide you through every step of your global expansion journey.',
      cta: 'Request a Market Entry Report',
      ctaLink: '#advisory',
      features: ['Market Research', 'Regulatory Insights', 'Localization Strategy', 'Go-to-Market Plans', 'Risk Assessment'],
      color: 'secondary'
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-50 border-primary-200 text-primary-700'
      case 'accent':
        return 'bg-accent-50 border-accent-200 text-accent-700'
      case 'secondary':
        return 'bg-secondary-50 border-secondary-200 text-secondary-700'
      default:
        return 'bg-primary-50 border-primary-200 text-primary-700'
    }
  }

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-100 text-primary-600'
      case 'accent':
        return 'bg-accent-100 text-accent-600'
      case 'secondary':
        return 'bg-secondary-100 text-secondary-600'
      default:
        return 'bg-primary-100 text-primary-600'
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to protect your data, expand your partnerships, and enter new markets with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="card p-8 group">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getIconColorClasses(service.color)}`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg font-medium text-gray-700">
                    {service.description}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <Link
                      href={service.ctaLink}
                      className={`inline-flex items-center space-x-2 text-sm font-semibold ${getColorClasses(service.color)} px-4 py-2 rounded-lg border transition-all duration-200 hover:scale-105 group-hover:shadow-md`}
                    >
                      <span>{service.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Multiple Services?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer integrated solutions that combine data privacy compliance with strategic business expansion. 
              Get a comprehensive package tailored to your global growth objectives.
            </p>
            <Link href="#consultation" className="btn-primary">
              Schedule a Comprehensive Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 