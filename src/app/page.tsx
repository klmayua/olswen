import Navbar              from '@/components/Navbar'
import Hero                from '@/components/Hero'
import TrustTicker         from '@/components/TrustTicker'
import StatsBar            from '@/components/StatsBar'
import TrustSignals        from '@/components/TrustSignals'
import AboutSection        from '@/components/AboutSection'
import ServicesSection     from '@/components/ServicesSection'
import EngagementsSection  from '@/components/EngagementsSection'
import ZumaGridSection     from '@/components/ZumaGridSection'
import DeploymentSection   from '@/components/DeploymentSection'
import SolutionsSection    from '@/components/SolutionsSection'
import GallerySection      from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ExperienceSection   from '@/components/ExperienceSection'
import WhySection          from '@/components/WhySection'
import FAQSection          from '@/components/FAQSection'
import CTABanner           from '@/components/CTABanner'
import ContactSection      from '@/components/ContactSection'
import Footer              from '@/components/Footer'
import ChatBot             from '@/components/ChatBot'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustTicker />
      <StatsBar />
      <TrustSignals />
      <AboutSection />
      <ServicesSection />
      <EngagementsSection />
      <ZumaGridSection />
      <DeploymentSection />
      <SolutionsSection />
      <GallerySection />
      <TestimonialsSection />
      <ExperienceSection />
      <WhySection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <ChatBot />
    </>
  )
}
