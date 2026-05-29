"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { images, stockImages } from "@/constants/images";
import { heroContent, ctaSection } from "@/constants/content";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16 pb-20 section-padding md:pt-24">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-container/20 px-4 py-1.5"
          >
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="label-md text-primary">Intelligence-Driven Security Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-on-surface md:text-5xl lg:text-[3.25rem]"
          >
            Premium Security,{" "}
            <span className="text-gradient-gold">Intelligence & Risk</span>{" "}
            Management Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant/80"
          >
            {heroContent.supportingText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-xl bg-gold-accent px-8 py-4 label-md text-background transition-all hover:scale-[1.02] gold-glow-hover"
            >
              {heroContent.primaryCta}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="rounded-xl border border-gold-accent/50 px-8 py-4 label-md text-gold-accent transition-all hover:bg-gold-accent/10"
            >
              {heroContent.secondaryCta}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3 border-t border-outline-variant/20 pt-8"
          >
            {heroContent.trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-outline-variant/30 bg-surface-container/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative aspect-square w-full max-w-lg">
            <Image
              src={images.guardPremium}
              alt="Olswen premium security personnel"
              fill
              priority
              className="rounded-2xl object-cover shadow-2xl ring-1 ring-outline-variant/30"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-3xl" />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden glass-panel rounded-2xl p-4 md:block animate-float">
            <p className="label-md text-on-surface-variant">Elite Personnel</p>
            <p className="font-display text-xl font-bold text-primary">Verified</p>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={stockImages.commandCenter}
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          aria-hidden
        />
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="cta_banner" className="relative overflow-hidden py-24 section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-container/30 via-background to-background" />
      <div className="tactical-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="glass-panel rounded-3xl p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-bold text-on-surface md:text-4xl">
            {ctaSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
            {ctaSection.subtitle}
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-accent px-10 py-4 label-md text-background transition-all hover:scale-[1.02] gold-glow-hover"
          >
            {ctaSection.button} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
