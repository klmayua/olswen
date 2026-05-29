import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { images } from "@/constants/images";
import { siteConfig } from "@/constants/content";
import { navLinks } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-surface-container-lowest py-16 section-padding">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Image src={images.logo} alt={siteConfig.shortName} width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="font-display text-lg font-bold text-primary">{siteConfig.shortName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-surface-variant">
            {siteConfig.brandStatement}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="label-md mb-4 text-on-surface">Quick Links</h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-on-surface-variant transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-6">
          <h4 className="label-md mb-4 text-on-surface">Contact Details</h4>
          <ul className="space-y-3 text-sm text-on-surface-variant">
            {siteConfig.emails.map((email) => (
              <li key={email} className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold-accent" />
                <a href={`mailto:${email}`} className="hover:text-on-surface">{email}</a>
              </li>
            ))}
            {siteConfig.phones.map((phone) => (
              <li key={phone} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold-accent" />
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-on-surface">{phone}</a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-accent" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4 shrink-0 text-gold-accent" />
              <a
                href={siteConfig.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-on-surface"
              >
                linktr.ee/olswenrisks
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-outline-variant/10 pt-8 text-center text-sm text-on-surface-variant/60">
        © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
