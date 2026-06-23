import Navbar              from '@/components/Navbar'
import Hero                from '@/components/Hero'
import AboutSection        from '@/components/AboutSection'
import ServicesSection     from '@/components/ServicesSection'
import EngagementsSection  from '@/components/EngagementsSection'
import ZumaGridSection     from '@/components/ZumaGridSection'
import DeploymentSection   from '@/components/DeploymentSection'
import GallerySection      from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ExperienceSection   from '@/components/ExperienceSection'
import WhySection          from '@/components/WhySection'
import FAQSection          from '@/components/FAQSection'
import CTABanner           from '@/components/CTABanner'
import ContactSection      from '@/components/ContactSection'
import Footer              from '@/components/Footer'
import ChatBot             from '@/components/ChatBot'
import MobileBottomNav     from '@/components/MobileBottomNav'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <EngagementsSection />
      <ZumaGridSection />
      <DeploymentSection />
      <GallerySection />
      <TestimonialsSection />
      <ExperienceSection />
      <WhySection />
      <FAQSection />
      <CTABanner />
      <ContactSection />
      <Footer />
      <ChatBot />
      <MobileBottomNav />
    </>
  )
}
