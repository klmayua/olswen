export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Deployments", href: "#deployments" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Contact", href: "#contact" },
] as const;

export const mobileNavItems = [
  { label: "Home", href: "#home", icon: "Home" as const },
  { label: "About", href: "#about", icon: "Users" as const },
  { label: "Services", href: "#services", icon: "Shield" as const },
  { label: "Deploy", href: "#deployments", icon: "MapPin" as const },
  { label: "Intel", href: "#intelligence", icon: "Radar" as const },
  { label: "Contact", href: "#contact", icon: "Mail" as const },
] as const;
