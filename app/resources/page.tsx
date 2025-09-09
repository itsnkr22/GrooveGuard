import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FileText, Video, BookOpen, Download, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Compliance Checklists',
      icon: FileText,
      items: [
        { name: 'GDPR Compliance Checklist', type: 'PDF', link: '#gdpr-checklist' },
        { name: 'DPDPA Implementation Guide', type: 'PDF', link: '#dpdpa-guide' },
        { name: 'CCPA Compliance Framework', type: 'PDF', link: '#ccpa-framework' },
        { name: 'HIPAA Security Assessment', type: 'PDF', link: '#hipaa-assessment' },
      ]
    },
    {
      category: 'Market Research Reports',
      icon: BookOpen,
      items: [
        { name: 'India Market Entry Guide 2024', type: 'Report', link: '#india-guide' },
        { name: 'EU Data Privacy Landscape', type: 'Report', link: '#eu-privacy' },
        { name: 'Cross-Border B2B Trends', type: 'Report', link: '#b2b-trends' },
        { name: 'Global Compliance Costs Analysis', type: 'Report', link: '#compliance-costs' },
      ]
    },
    {
      category: 'Webinars & Training',
      icon: Video,
      items: [
        { name: 'GDPR for Startups', type: 'Webinar', link: '#gdpr-webinar' },
        { name: 'International Partnership Strategies', type: 'Webinar', link: '#partnership-webinar' },
        { name: 'Data Privacy Best Practices', type: 'Training', link: '#privacy-training' },
        { name: 'Market Entry Masterclass', type: 'Training', link: '#market-entry-training' },
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Resources & Insights
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Free resources to help you navigate data privacy compliance and global business expansion
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {resources.map((category, index) => {
                const Icon = category.icon
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {category.category}
                      </h2>
                    </div>
                    
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                          <div>
                            <h3 className="font-medium text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-500">{item.type}</p>
                          </div>
                          <Link 
                            href={item.link}
                            className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          >
                            <Download className="w-4 h-4" />
                            <span className="text-sm font-medium">Download</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Insights & Blog
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with the latest trends in data privacy and global business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'DPDPA 2023: What Indian Businesses Need to Know',
                  excerpt: 'A comprehensive guide to India\'s new data protection law and its implications for businesses.',
                  date: 'March 15, 2024',
                  readTime: '5 min read'
                },
                {
                  title: 'Cross-Border Data Transfers: Best Practices',
                  excerpt: 'How to safely transfer data across international borders while maintaining compliance.',
                  date: 'March 10, 2024',
                  readTime: '7 min read'
                },
                {
                  title: 'Building Strategic Partnerships in Global Markets',
                  excerpt: 'Key strategies for finding and nurturing international business partnerships.',
                  date: 'March 5, 2024',
                  readTime: '6 min read'
                }
              ].map((post, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href="#blog-post"
                    className="inline-flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200 mt-4"
                  >
                    <span className="font-medium">Read more</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest updates on data privacy regulations, market insights, and business opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
