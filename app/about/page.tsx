import { Shield, Users, TrendingUp, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Keep it clear',
      description: 'No legal mumbo-jumbo, just straightforward guidance'
    },
    {
      icon: Users,
      title: 'Keep it real',
      description: 'Solutions that are practical, not theoretical'
    },
    {
      icon: TrendingUp,
      title: 'Keep it trusted',
      description: 'Helping you build lasting confidence with your customers'
    }
  ]

  const services = [
    'Market research & opportunity mapping',
    'Regulatory & compliance advisory (FDA, CE, CDSCO, etc.)',
    'Distributor, partner & JV matchmaking',
    'Go-to-market (GTM) strategy for SaaS, Pharma, MedTech, Food, and Industrial Tech'
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About GrooveGuard
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted privacy partners making data compliance simple, practical, and trusted.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At GrooveGuard, we make data privacy simple. We know that keeping up with privacy laws like India's DPDPA or Europe's GDPR can feel overwhelming—but it doesn't have to be. Our mission is to help businesses of all sizes protect customer data, stay compliant, and build trust—without the jargon and stress.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Think of us as your privacy partners. We guide you through everything from checking where you stand today, to creating easy-to-follow policies, training your team, and setting up processes that actually work for your business. No cookie-cutter templates—just practical, tailored solutions that fit your world.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe privacy isn't just about avoiding penalties—it's about earning trust. When your customers know their data is safe with you, it strengthens relationships and opens new doors for growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With us, compliance stops being a burden—and starts becoming a business advantage.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                        <Icon className="w-10 h-10 text-primary-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Global Business Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Global Business Advisory
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We also help Indian exporters expand globally and foreign businesses enter India through a structured mix of market scans, compliance guidance, and trusted partner introductions.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Our services cover:
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                We specialize in building high-value cross-border partnerships that drive international growth.
              </p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-lg p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ready to work with us?
              </h2>
              <p className="text-primary-100 mb-6">
                Let's discuss how we can help you achieve your privacy compliance and global expansion goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    </>
  )
} 