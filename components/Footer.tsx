'use client'

import { Globe, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Data Privacy & Compliance', href: '#privacy' },
      { name: 'B2B Cross-Border Matchmaking', href: '#matchmaking' },
      { name: 'Market Entry Advisory', href: '#advisory' },
      { name: 'Compliance Audits', href: '#audits' },
      { name: 'Policy Drafting', href: '#policies' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News & Insights', href: '#news' },
      { name: 'Case Studies', href: '#cases' },
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Compliance Checklists', href: '#checklists' },
      { name: 'Market Research Reports', href: '#reports' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Training Materials', href: '#training' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'GDPR Compliance', href: '/gdpr' },
      { name: 'Data Processing Agreement', href: '/dpa' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">GrooveGuard</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in data privacy compliance, cross-border business partnerships, and strategic market entry. 
              We help businesses navigate global regulations while expanding their international presence.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>hello@grooveguard.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Global Presence • India • USA • EU</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">
              Stay Updated with Privacy & Business Insights
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on data privacy regulations, market entry strategies, and cross-border business opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GrooveGuard. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Language Selector */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 