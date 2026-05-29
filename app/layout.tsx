import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import { MobileBottomNavbar } from "@/components/MobileBottomNavbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/constants/content";
import { images } from "@/constants/images";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Security & Intelligence`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "security company Lagos",
    "private security Nigeria",
    "intelligence risk management",
    "VIP close protection Lagos",
    "security guards Victoria Island",
    "Olswen Security",
    "staff vetting recruitment",
    "enterprise security operations",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.tagline,
    description: siteConfig.description,
    images: [{ url: images.logo, width: 512, height: 512, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.tagline,
    description: siteConfig.description,
    images: [images.logo],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phones[0].replace(/\s/g, ""),
  email: siteConfig.emails[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "Lagos, Nigeria",
  image: `${siteConfig.url}${images.logo}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-on-surface antialiased">
        <FloatingNavbar />
        <main className="pb-28 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNavbar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
