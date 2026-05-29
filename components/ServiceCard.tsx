"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  href?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  index = 0,
  href = "#services",
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassCard className="group relative h-full overflow-hidden">
        <div className="absolute -right-4 -top-4 opacity-[0.03] transition-opacity group-hover:opacity-[0.06]">
          <Icon className="h-32 w-32" />
        </div>
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gold-accent/10 transition-all group-hover:pulse-gold">
          <Icon className="h-7 w-7 text-gold-accent" />
        </div>
        <h3 className="font-display text-xl font-semibold text-on-surface">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">{description}</p>
        <a
          href={href}
          className={cn(
            "mt-6 inline-flex items-center gap-2 label-md text-gold-accent",
            "transition-transform group-hover:translate-x-1",
          )}
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </a>
      </GlassCard>
    </motion.div>
  );
}
