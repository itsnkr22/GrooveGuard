import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TrustSection from '@/components/TrustSection'
import CTASection from '@/components/CTASection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  )
} 