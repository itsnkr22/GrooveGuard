'use client'

import { Calendar, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to secure your data and grow your business globally?
          </h2>
          
          <p className="text-xl text-primary-100 mb-12 leading-relaxed">
            Join hundreds of businesses that trust us with their data privacy compliance and global expansion strategies. 
            Let's discuss how we can help you achieve your international growth objectives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="#consultation" 
              className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 group"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link 
              href="#contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-3 group"
            >
              <Mail className="w-5 h-5" />
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Free Initial Assessment</div>
              <div className="text-primary-200 text-sm">Get a comprehensive evaluation of your current compliance status</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">30-Day Implementation</div>
              <div className="text-primary-200 text-sm">Quick turnaround for urgent compliance needs</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Ongoing Support</div>
              <div className="text-primary-200 text-sm">Continuous guidance as regulations evolve</div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-primary-500">
            <div className="flex flex-wrap justify-center items-center gap-6 text-primary-200 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection 