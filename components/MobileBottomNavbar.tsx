"use client";

import { motion } from "framer-motion";
import { Home, Mail, MapPin, Radar, Shield, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { mobileNavItems } from "@/constants/navigation";
import { cn, scrollToSection } from "@/lib/utils";

const iconComponents = {
  Home,
  Shield,
  Users,
  MapPin,
  Radar,
  Mail,
};

export function MobileBottomNavbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = mobileNavItems.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-1rem)] max-w-lg -translate-x-1/2 md:hidden"
      aria-label="Mobile navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="glass-panel flex items-center justify-between rounded-full px-1 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {mobileNavItems.map((item) => {
          const Icon = iconComponents[item.icon];
          const isActive = active === item.href;

          return (
            <motion.button
              key={item.href}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.href.replace("#", ""))}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 rounded-full px-1 py-1.5 transition-all",
                isActive
                  ? "bg-primary-container/60 text-primary"
                  : "text-on-surface-variant hover:text-on-surface",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[8px] font-semibold tracking-wide">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
