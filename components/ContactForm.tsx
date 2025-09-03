'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
  phone?: string
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success
      toast.success('Thank you! We\'ll get back to you soon.')
      setIsSubmitted(true)
      reset()
      
      // Reset form after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    'Data Privacy & Compliance',
    'B2B Cross-Border Matchmaking',
    'Market Entry Advisory',
    'Multiple Services',
    'Other'
  ]

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Thank You for Your Message!
        </h3>
        <p className="text-gray-600 mb-6">
          We've received your inquiry and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get in Touch
        </h3>
        <p className="text-gray-600">
          Ready to discuss your data privacy and global expansion needs?
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Company and Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              {...register('company', { required: 'Company name is required' })}
              type="text"
              id="company"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter your company name"
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service of Interest *
          </label>
          <select
            {...register('service', { required: 'Please select a service' })}
            id="service"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            {...register('message', { 
              required: 'Message is required',
              minLength: {
                value: 20,
                message: 'Message must be at least 20 characters'
              }
            })}
            id="message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="Tell us about your needs, challenges, and how we can help..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mx-auto"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <Mail className="w-6 h-6 text-primary-600" />
            <div>
              <div className="font-medium text-gray-900">Email</div>
              <div className="text-sm text-gray-600">hello@grooveguard.com</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <Phone className="w-6 h-6 text-primary-600" />
            <div>
              <div className="font-medium text-gray-900">Phone</div>
              <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <MapPin className="w-6 h-6 text-primary-600" />
            <div>
              <div className="font-medium text-gray-900">Location</div>
              <div className="text-sm text-gray-600">Global Presence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm 