import { images, stockImages } from "./images";

export const siteConfig = {
  name: "Olswen Security & Intelligence",
  shortName: "OLSWEN",
  positioning: "Premium Intelligence-Driven Security, Risk Management & Protective Services Company",
  tagline: "Intelligence-Driven Security Solutions",
  taglines: [
    "Intelligence-Driven Security Solutions",
    "Strategic Security & Risk Management",
    "Elite Protection. Operational Excellence.",
    "Modern Security Powered by Intelligence",
  ],
  description:
    "Olswen delivers intelligence-led security operations, elite personnel deployment, risk assessment, and protective services for modern enterprises, high-value assets, institutions, and individuals.",
  brandStatement:
    "Intelligence-driven security and operational protection solutions for modern enterprises, institutions, and high-value environments.",
  url: "https://olswen.vercel.app",
  emails: ["Operations@olswen.com", "Olswenindependentalliance@gmail.com"],
  phones: ["+234 7089360094", "+234 8028611141"],
  whatsapp: "2347089360094",
  address: "E185, Ikota Shopping Complex, VGC, Lagos.",
  websiteLink: "https://linktr.ee/olswenrisks",
  director: {
    name: "Donald Owen Ogbemudia",
    title: "Operations Lead",
    credentials: [
      "BA Legal Studies",
      "Diploma Forensic Investigation",
      "Diploma Criminal Intelligence",
    ],
  },
} as const;

export const heroContent = {
  headline: "Premium Security, Intelligence & Risk Management Solutions",
  subheadline:
    "Olswen delivers intelligence-led security operations, elite personnel deployment, risk assessment, and protective services designed for modern enterprises, high-value assets, institutions, and individuals.",
  supportingText:
    "Through strategic partnerships, operational discipline, and modern security methodologies, we provide proactive protection solutions tailored to evolving security challenges.",
  primaryCta: "Request Consultation",
  secondaryCta: "Explore Services",
  trustBadges: [
    "Intelligence-Led Operations",
    "Elite Personnel",
    "Risk Mitigation",
    "Enterprise Security",
    "Strategic Protection",
  ],
} as const;

export const trustSection = {
  title: "Trusted Operational Excellence",
  subtitle:
    "Delivering modern intelligence-driven protection services with professionalism, operational precision, and strategic deployment capability.",
  points: [
    { label: "Intelligence-Led Decision Support", icon: "Brain" as const },
    { label: "Real-Time Threat Monitoring", icon: "Radar" as const },
    { label: "Professional Security Personnel", icon: "ShieldCheck" as const },
    { label: "Enterprise Security Operations", icon: "Building2" as const },
    { label: "Proactive Risk Mitigation", icon: "Zap" as const },
    { label: "Strategic Operational Partnerships", icon: "Handshake" as const },
  ],
} as const;

export const aboutContent = {
  title: "About Olswen",
  subtitle: "Strategic security operations powered by intelligence, professionalism, and operational excellence.",
  paragraphs: [
    "Olswen is a modern security and intelligence company focused on delivering premium protective services, intelligence gathering, personnel deployment, and risk management solutions for organizations, institutions, facilities, events, and high-value individuals.",
    "Our operational philosophy combines intelligence-driven planning, strategic deployment, professional personnel management, and proactive threat mitigation to create tailored security solutions that adapt to modern operational realities.",
    "By integrating tactical expertise, risk assessment methodologies, and strategic partnerships, Olswen provides reliable security operations designed to protect people, infrastructure, assets, and business continuity.",
  ],
  keyPoints: [
    "Intelligence-driven security operations",
    "Tailored enterprise protection strategies",
    "Professional personnel deployment",
    "Risk mitigation expertise",
    "Modern operational methodology",
  ],
  stats: [
    { label: "Risk Assessment", icon: "AlertTriangle" as const },
    { label: "Personnel Deployment", icon: "Users" as const },
    { label: "Enterprise Protection", icon: "Building2" as const },
    { label: "Operational Coordination", icon: "Settings" as const },
  ],
} as const;

export const servicesSection = {
  title: "Security & Intelligence Services",
  subtitle:
    "Comprehensive security, intelligence, and risk management solutions tailored to operational realities.",
} as const;

export const services = [
  {
    title: "Intelligence & Risk Management",
    description:
      "Real-time intelligence gathering, operational monitoring, threat analysis, and proactive risk mitigation strategies designed to support secure decision-making.",
    icon: "Radar" as const,
    href: "#intelligence",
  },
  {
    title: "Staff Vetting & Recruitment",
    description:
      "Professional personnel screening, background verification, and recruitment support to ensure trustworthy workforce deployment and operational integrity.",
    icon: "UserCheck" as const,
    href: "#vetting",
  },
  {
    title: "Security Personnel Deployment",
    description:
      "Deployment of highly trained security personnel including regular guards, premium guards, and operational supervisors.",
    icon: "Shield" as const,
    href: "#deployment",
  },
  {
    title: "VIP & Close Protection",
    description:
      "Tailored executive protection services for high-profile individuals, athletes, executives, and sensitive operational environments.",
    icon: "Star" as const,
    href: "#special-operations",
  },
  {
    title: "Security Consulting",
    description:
      "Strategic security planning, vulnerability assessments, operational reviews, and protective systems advisory services.",
    icon: "Briefcase" as const,
    href: "#services",
  },
  {
    title: "Threat Assessment",
    description:
      "Identification, evaluation, and mitigation of operational threats through proactive intelligence methodologies.",
    icon: "AlertTriangle" as const,
    href: "#intelligence",
  },
] as const;

export const intelligenceSection = {
  title: "Intelligence & Risk Management",
  subtitle:
    "Strategic intelligence solutions designed to support operational awareness and proactive protection.",
  mainContent: [
    "Our team provides intelligence-driven support services that help organizations identify vulnerabilities, assess operational risks, and implement proactive mitigation strategies.",
    "We combine intelligence gathering, analytical assessment, and operational planning to improve security readiness and support informed business decisions.",
  ],
  bulletPoints: [
    "Real-time intelligence gathering",
    "Comprehensive threat assessments",
    "Vulnerability identification",
    "Operational risk analysis",
    "Proactive threat mitigation",
    "Strategic decision support",
  ],
  quote: "Proactive intelligence is the foundation of modern security operations.",
} as const;

export const vettingSection = {
  title: "Staff Vetting & Recruitment",
  subtitle: "Professional workforce screening and operational trust verification.",
  mainContent: [
    "Olswen provides professional staff vetting and recruitment support designed to help organizations maintain workforce integrity, operational trust, and security compliance.",
    "Our recruitment and screening processes are structured to identify qualified personnel while reducing operational vulnerabilities associated with unverified workforce deployment.",
  ],
  features: [
    { title: "Personnel verification", icon: "UserCheck" as const },
    { title: "Background checks", icon: "Fingerprint" as const },
    { title: "Recruitment support", icon: "FileSearch" as const },
    { title: "Workforce integrity assessment", icon: "ClipboardCheck" as const },
    { title: "Compliance-focused screening", icon: "ShieldCheck" as const },
    { title: "Trust verification processes", icon: "Lock" as const },
  ],
} as const;

export const deploymentSection = {
  title: "Security Personnel Deployment",
  subtitle: "Professional security deployment solutions tailored to operational requirements.",
  mainContent: [
    "Through strategic partnerships and operational expertise, Olswen deploys highly trained security personnel for permanent and temporary operational assignments.",
    "Our guard deployment structure is designed to accommodate varying levels of operational sensitivity, risk exposure, and site protection requirements.",
  ],
  additionalContent:
    "By leveraging tailored guard classifications and operational expertise, Olswen delivers customized security solutions designed around your unique operational needs.",
} as const;

export const personnelTiers = [
  {
    title: "Regular Security Guards",
    description: "Reliable and vigilant personnel for general operational security requirements.",
    tier: "Standard Deployment",
  },
  {
    title: "Premium Security Guards",
    description: "Elite guards with advanced operational training for high-risk or sensitive environments.",
    tier: "Premium Tier",
    featured: true,
    image: images.guardPremium,
  },
  {
    title: "Security Supervisors",
    description:
      "Experienced operational leaders responsible for coordinating personnel and ensuring seamless security execution.",
    tier: "Command Tier",
  },
] as const;

export const operationalExcellence = {
  title: "Operational Excellence",
  subtitle: "Security operations built on professionalism, coordination, discipline, and responsiveness.",
  mainContent:
    "Olswen approaches every deployment with a strong emphasis on operational discipline, communication, responsiveness, and risk awareness.",
  systems: [
    "Coordinated deployment",
    "Rapid response capability",
    "Professional conduct",
    "Situational awareness",
    "Continuous oversight",
  ],
  additionalCopy:
    "We prioritize proactive engagement, operational preparedness, and adaptive protection methodologies designed for evolving security environments.",
} as const;

export const deploymentsSection = {
  title: "Operational Deployments",
  subtitle:
    "Security deployments across commercial, hospitality, healthcare, construction, and entertainment environments.",
} as const;

export const deployments = [
  {
    name: "Life Center Hospitals",
    category: "Healthcare",
    description:
      "Security guard deployment across hospital locations in Lekki, Maryland, and Lagos Island.",
    image: stockImages.corporate,
  },
  {
    name: "Xylo Mall by Mazo International",
    category: "Commercial Retail",
    description:
      "Security deployment for a premium 24-hour shopping mall in Victoria Island housing major commercial brands.",
    image: stockImages.corporate,
  },
  {
    name: "Truth Beach Club, Landmark",
    category: "Hospitality & Entertainment",
    description:
      "Security guard deployment for hospitality and entertainment operations within Landmark.",
    image: images.vipProtection,
  },
  {
    name: "Hov Bar Lekki",
    category: "Hospitality & Nightlife",
    description:
      "Security operations support for hospitality and nightlife environments in Lekki Phase 1.",
    image: stockImages.tactical,
  },
  {
    name: "Flash Gas",
    category: "Industrial Operations",
    description: "Security support services for gas delivery operations located in Lekki Phase 1.",
    image: images.patrolVehicle,
  },
  {
    name: "NGDL Services",
    category: "Construction & Development",
    description: "Security deployment across multiple construction development sites.",
    image: stockImages.corporate,
  },
] as const;

export const specialOperations = {
  title: "Close Protection & Special Operations",
  subtitle:
    "Protective services for high-profile individuals, events, and sensitive operational environments.",
  mainContent:
    "Olswen has delivered tailored close protection services for VIPs, athletes, staff, and participants across varying operational environments and risk profiles.",
  methodology: [
    "Protective planning",
    "Venue risk assessments",
    "Coordinated operational deployment",
    "Threat mitigation",
    "Agency collaboration",
  ],
  duties: [
    "Tailored close protection services",
    "Risk assessment implementation",
    "Threat identification",
    "Venue operational security",
    "Transit point coordination",
    "Event security collaboration",
  ],
} as const;

export const whyChooseSection = {
  title: "Why Choose Olswen",
  subtitle:
    "Modern security operations powered by intelligence, professionalism, and strategic deployment capability.",
  reasons: [
    { title: "Intelligence-driven operations", icon: "Brain" as const },
    { title: "Tailored security strategies", icon: "Settings" as const },
    { title: "Professional deployment systems", icon: "Shield" as const },
    { title: "Risk mitigation expertise", icon: "AlertTriangle" as const },
    { title: "Modern operational methodology", icon: "Zap" as const },
    { title: "Enterprise-focused solutions", icon: "Building2" as const },
    { title: "Proactive security culture", icon: "Radar" as const },
    { title: "Operational responsiveness", icon: "Clock" as const },
  ],
} as const;

export const ctaSection = {
  title: "Secure Your Operations With Confidence",
  subtitle:
    "Partner with Olswen for intelligence-led protection, professional deployment, and modern security operations tailored to your needs.",
  button: "Request Consultation",
} as const;

export const contactSection = {
  title: "Contact Olswen",
  subtitle:
    "Speak with our team about your security, intelligence, and operational protection requirements.",
  formCta: "Request Security Consultation",
  serviceOptions: [
    "Intelligence & Risk Management",
    "Staff Vetting & Recruitment",
    "Security Personnel Deployment",
    "VIP & Close Protection",
    "Security Consulting",
    "Threat Assessment",
    "Other",
  ],
} as const;
