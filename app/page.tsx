import { HeroSection, CTASection } from "@/components/sections/HeroCTA";
import {
  TrustIndicators,
  AboutSection,
  ServicesSection,
  IntelligenceRiskSection,
  StaffVettingSection,
  SecurityDeploymentSection,
  OperationalExcellenceSection,
  DeploymentsPortfolioSection,
  SpecialOperationsSection,
  WhyChooseSection,
  ContactSection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <AboutSection />
      <ServicesSection />
      <IntelligenceRiskSection />
      <StaffVettingSection />
      <SecurityDeploymentSection />
      <OperationalExcellenceSection />
      <DeploymentsPortfolioSection />
      <SpecialOperationsSection />
      <WhyChooseSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
