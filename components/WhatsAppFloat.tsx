"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/constants/content";

export function WhatsAppFloat() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello Olswen Security, I would like to request a consultation.",
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed right-4 z-50 bottom-24 md:bottom-8"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full glass-panel border-gold-accent/30 text-gold-accent transition-all hover:scale-105 gold-glow-hover pulse-gold"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
        <span className="pointer-events-none absolute -top-10 right-0 hidden whitespace-nowrap rounded-lg bg-surface-container px-3 py-1.5 text-xs font-medium text-on-surface opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
