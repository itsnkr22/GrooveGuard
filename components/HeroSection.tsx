'use client'

import { Calendar, Mail, ArrowRight, Shield, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section id="home" className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Trusted Global Advisors for{' '}
                <span className="text-gradient">Data Privacy</span> &{' '}
                <span className="text-gradient">Market Expansion</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We help businesses stay compliant with global data privacy laws, connect with the right cross-border partners, and navigate new markets with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2 group">
                <Calendar className="w-5 h-5" />
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link href="/contact" className="btn-secondary flex items-center justify-center space-x-2 group">
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>GDPR, DPDPA, CCPA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>Global Network</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    Your Trusted Partner in Privacy, Partnerships, and Market Entry
                  </h3>
                  
                  {/* Service Icons */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
                        <Shield className="w-8 h-8 text-primary-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Data Privacy</p>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mx-auto">
                        <Users className="w-8 h-8 text-accent-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">B2B Matchmaking</p>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto">
                        <TrendingUp className="w-8 h-8 text-secondary-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-700">Market Entry</p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">
                      "Protecting Data. Connecting Markets. Enabling Growth."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-200 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-secondary-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 