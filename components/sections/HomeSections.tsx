"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Quote } from "lucide-react";
import { SectionRevealWrapper } from "../SectionRevealWrapper";
import { GlassCard } from "../GlassCard";
import { iconMap } from "../FloatingNavbar";
import { ServiceCard } from "../ServiceCard";
import { DeploymentCard } from "../DeploymentCard";
import { ContactForm } from "../ContactForm";
import { images, stockImages } from "@/constants/images";
import {
  trustSection,
  aboutContent,
  servicesSection,
  services,
  intelligenceSection,
  vettingSection,
  deploymentSection,
  personnelTiers,
  operationalExcellence,
  deploymentsSection,
  deployments,
  specialOperations,
  whyChooseSection,
  contactSection,
  siteConfig,
} from "@/constants/content";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

export function TrustIndicators() {
  return (
    <SectionRevealWrapper id="trust_indicators" className="py-20 section-padding bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-on-surface md:text-4xl">
            {trustSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
            {trustSection.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustSection.points.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <GlassCard className="flex items-start gap-4 !p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-accent/10">
                    <Icon className="h-5 w-5 text-gold-accent" />
                  </div>
                  <p className="text-sm font-medium leading-snug text-on-surface">{item.label}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function AboutSection() {
  return (
    <SectionRevealWrapper id="about" className="py-24 section-padding bg-surface-dim">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl">
          <Image
            src={stockImages.intelligence}
            alt="Olswen intelligence operations"
            fill
            className="object-cover opacity-80 transition-all duration-700 hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div>
          <span className="label-md text-gold-accent">{aboutContent.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {aboutContent.subtitle}
          </h2>
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-on-surface-variant">
              {paragraph}
            </p>
          ))}
          <ul className="mt-8 space-y-3">
            {aboutContent.keyPoints.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold-accent" />
                <span className="text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat) => {
              const Icon = iconMap[stat.icon];
              return (
                <GlassCard key={stat.label} className="!p-4 text-center" hover={false}>
                  <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-xs font-medium text-on-surface">{stat.label}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function ServicesSection() {
  return (
    <SectionRevealWrapper id="services" className="py-24 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="label-md text-gold-accent">Services Overview</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {servicesSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-on-surface-variant">
            {servicesSection.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={iconMap[service.icon]}
              href={service.href}
              index={i}
            />
          ))}
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function IntelligenceRiskSection() {
  return (
    <SectionRevealWrapper id="intelligence" className="py-24 section-padding bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="label-md text-gold-accent">{intelligenceSection.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {intelligenceSection.subtitle}
          </h2>
          {intelligenceSection.mainContent.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 max-w-3xl text-on-surface-variant">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ul className="space-y-3">
            {intelligenceSection.bulletPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 rounded-xl border border-outline-variant/20 bg-surface-container p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-gold-accent" />
                <span className="text-sm text-on-surface">{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            <GlassCard accent="primary" className="relative">
              <Quote className="mb-4 h-8 w-8 text-primary/60" />
              <blockquote className="font-display text-xl font-medium italic leading-relaxed text-on-surface">
                &ldquo;{intelligenceSection.quote}&rdquo;
              </blockquote>
            </GlassCard>
            <div className="relative overflow-hidden rounded-2xl border border-outline-variant/20">
              <Image
                src={stockImages.commandCenter}
                alt="Intelligence command center"
                width={800}
                height={400}
                className="h-48 w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function StaffVettingSection() {
  return (
    <SectionRevealWrapper id="vetting" className="py-24 section-padding">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="label-md text-gold-accent">{vettingSection.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {vettingSection.subtitle}
          </h2>
          {vettingSection.mainContent.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-on-surface-variant">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {vettingSection.features.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.title} className="flex gap-3 rounded-xl border border-outline-variant/20 bg-surface-container p-4">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-on-surface">{feature.title}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image src={images.operationsCollage} alt="Olswen operational personnel" fill className="object-cover" sizes="50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function SecurityDeploymentSection() {
  return (
    <SectionRevealWrapper id="deployment" className="py-24 section-padding bg-surface-container-low">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <span className="label-md text-gold-accent">{deploymentSection.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {deploymentSection.subtitle}
          </h2>
          {deploymentSection.mainContent.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-on-surface-variant">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {personnelTiers.map((tier) => {
            const isFeatured = "featured" in tier && tier.featured;
            return (
              <div
                key={tier.title}
                className={
                  isFeatured
                    ? "relative min-h-[320px] overflow-hidden rounded-2xl border border-gold-accent/30 md:col-span-8"
                    : "glass-panel rounded-2xl p-6 md:col-span-4"
                }
              >
                {isFeatured && "image" in tier && tier.image ? (
                  <>
                    <Image src={tier.image} alt={tier.title} fill className="object-cover" sizes="66vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                      <span className="label-md text-gold-accent">{tier.tier}</span>
                      <h3 className="mt-2 font-display text-2xl font-bold text-on-surface">{tier.title}</h3>
                      <p className="mt-2 max-w-lg text-sm text-on-surface-variant">{tier.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="label-md text-on-surface-variant">{tier.tier}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold text-on-surface">{tier.title}</h3>
                    <p className="mt-3 text-sm text-on-surface-variant">{tier.description}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-on-surface-variant">
          {deploymentSection.additionalContent}
        </p>
      </div>
    </SectionRevealWrapper>
  );
}

export function OperationalExcellenceSection() {
  return (
    <SectionRevealWrapper id="operational_excellence" className="py-24 section-padding bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="label-md text-gold-accent">{operationalExcellence.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {operationalExcellence.subtitle}
          </h2>
          <p className="mt-4 text-on-surface-variant">{operationalExcellence.mainContent}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ul className="space-y-3">
            {operationalExcellence.systems.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl border border-outline-variant/20 bg-surface-container p-4 capitalize">
                <CheckCircle className="h-5 w-5 shrink-0 text-gold-accent" />
                <span className="text-sm text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <p className="text-on-surface-variant">{operationalExcellence.additionalCopy}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image src={images.eventSolutions} alt="Event security operations" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <Image src={images.eliteAssets} alt="Elite operational assets" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function DeploymentsPortfolioSection() {
  return (
    <SectionRevealWrapper id="deployments" className="py-24 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="label-md text-gold-accent">{deploymentsSection.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {deploymentsSection.subtitle}
          </h2>
        </div>

        <div className="mb-12 overflow-hidden rounded-2xl border border-outline-variant/20">
          <Image
            src={images.deployments}
            alt="Olswen client deployments portfolio"
            width={1400}
            height={800}
            className="w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {deployments.map((deployment, i) => (
            <DeploymentCard key={deployment.name} {...deployment} index={i} />
          ))}
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function SpecialOperationsSection() {
  return (
    <SectionRevealWrapper id="special-operations" className="py-24 section-padding bg-surface-container-low">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-outline-variant/20">
          <Image
            src={images.vipProtection}
            alt="Close protection and VIP security operations"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div>
          <span className="label-md text-gold-accent">{specialOperations.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {specialOperations.subtitle}
          </h2>
          <p className="mt-6 text-on-surface-variant">{specialOperations.mainContent}</p>

          <div className="mt-8">
            <h4 className="label-md mb-4 text-on-surface">Operational Methodology</h4>
            <ul className="space-y-2">
              {specialOperations.methodology.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm capitalize text-on-surface-variant">
                  <CheckCircle className="h-4 w-4 text-gold-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="label-md mb-4 text-on-surface">Tasks & Duties</h4>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {specialOperations.duties.map((duty) => (
                <div key={duty} className="rounded-lg border border-outline-variant/20 bg-surface-container px-3 py-2 text-xs text-on-surface-variant">
                  {duty}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function WhyChooseSection() {
  return (
    <SectionRevealWrapper id="why_choose" className="py-24 section-padding bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="label-md text-gold-accent">{whyChooseSection.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {whyChooseSection.subtitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseSection.reasons.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <GlassCard key={item.title} accent="gold" className="!p-5">
                <Icon className="mb-3 h-7 w-7 text-gold-accent" />
                <h3 className="text-sm font-semibold capitalize text-on-surface">{item.title}</h3>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionRevealWrapper>
  );
}

export function ContactSection() {
  return (
    <SectionRevealWrapper id="contact" className="py-24 section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="label-md text-gold-accent">{contactSection.title}</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-on-surface md:text-4xl">
            {contactSection.subtitle}
          </h2>
        </div>

        <GlassCard className="grid grid-cols-1 gap-12 md:grid-cols-2 md:!p-12 lg:!p-16">
          <div>
            <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
              <p className="label-md text-primary">Operations Lead</p>
              <p className="mt-2 font-display text-xl font-bold text-on-surface">
                {siteConfig.director.name}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.director.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded border border-outline-variant/30 bg-surface-container px-2 py-0.5 text-[10px] font-bold uppercase text-on-surface-variant"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {siteConfig.phones.map((phone, i) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-xl border border-outline-variant/20 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="label-md text-on-surface-variant">Phone {i + 1}</p>
                    <p className="font-display text-lg font-semibold text-on-surface">{phone}</p>
                  </div>
                </a>
              ))}
              {siteConfig.emails.map((email) => (
                <div key={email} className="flex items-center gap-4 rounded-xl border border-outline-variant/20 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="label-md text-on-surface-variant">Email</p>
                    <a href={`mailto:${email}`} className="font-display text-base font-semibold text-on-surface hover:text-primary">
                      {email}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-xl border border-outline-variant/20 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="label-md text-on-surface-variant">Address</p>
                  <p className="text-on-surface">{siteConfig.address}</p>
                </div>
              </div>
              <a
                href={siteConfig.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-outline-variant/20 p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <ExternalLink className="h-5 w-5" />
                </div>
                <div>
                  <p className="label-md text-on-surface-variant">Website</p>
                  <p className="text-on-surface">linktr.ee/olswenrisks</p>
                </div>
              </a>
            </div>
          </div>

          <ContactForm />
        </GlassCard>

        <div className="mt-8 overflow-hidden rounded-2xl border border-outline-variant/20">
          <iframe
            title="Olswen Security office location"
            src="https://maps.google.com/maps?q=Ikota+Shopping+Complex+VGC+Lagos&output=embed"
            className="h-64 w-full grayscale invert md:h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </SectionRevealWrapper>
  );
}
