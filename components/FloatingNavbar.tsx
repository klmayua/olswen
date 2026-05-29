"use client";

import { motion } from "framer-motion";
import {
  Award,
  Brain,
  Briefcase,
  Building2,
  Crown,
  Fingerprint,
  GraduationCap,
  Handshake,
  Lock,
  LucideIcon,
  Radar,
  Settings,
  Shield,
  ShieldCheck,
  Star,
  UserCheck,
  Zap,
  AlertTriangle,
  FileSearch,
  ClipboardCheck,
  Clock,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn, scrollToSection } from "@/lib/utils";
import { images } from "@/constants/images";
import { siteConfig } from "@/constants/content";
import { navLinks } from "@/constants/navigation";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const iconMap: Record<string, LucideIcon> = {
  Radar,
  UserCheck,
  Shield,
  Briefcase,
  Star,
  AlertTriangle,
  Lock,
  Award,
  ShieldCheck,
  Handshake,
  Building2,
  Brain,
  Settings,
  GraduationCap,
  Zap,
  Crown,
  Fingerprint,
  FileSearch,
  ClipboardCheck,
  Clock,
  Users,
};

export function FloatingNavbar() {
  const { scrollDirection, scrollY } = useScrollDirection();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: scrollDirection === "down" && scrollY > 100 ? -8 : 0,
        opacity: scrollDirection === "down" && scrollY > 100 ? 0.92 : 1,
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 z-50 hidden w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 md:block"
    >
      <nav
        className={cn(
          "glass-panel flex h-16 items-center justify-between rounded-full px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
          scrollY > 50 && "border-white/15",
        )}
        aria-label="Main navigation"
      >
        <Link href="#home" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>
          <Image src={images.logo} alt={siteConfig.shortName} width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-display text-sm font-bold tracking-tight text-on-surface">{siteConfig.shortName}</span>
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className="label-md text-on-surface-variant transition-colors hover:text-on-surface"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="rounded-full bg-gold-accent px-5 py-2.5 label-md text-background transition-all hover:scale-[1.02] gold-glow-hover"
        >
          Request Consultation
        </button>
      </nav>
    </motion.header>
  );
}

export { iconMap };
