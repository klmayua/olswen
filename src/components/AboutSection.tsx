'use client'
import Image from 'next/image'
import { images } from '@/constants/images'
import ScrollReveal from './ScrollReveal'
import { IconTarget, IconSearch, IconSignal, IconTeam } from './icons/Icons'

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
          {/* Image */}
          <ScrollReveal>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 18, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
                <Image src={images.eliteAssets} alt="Olswen operational capability" fill sizes="(max-width:860px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>Security That Starts With Intelligence</h2>
              <p style={{ marginBottom: '1.25rem', color: '#4a4560', lineHeight: 1.75 }}>Founded in 2018, Olswen Independence Alliance Ltd. operates on a doctrine most security firms ignore: protection begins with intelligence, not personnel. We assess before we deploy.</p>
              <p style={{ marginBottom: '2rem', color: '#4a4560', lineHeight: 1.75 }}>From command and control architecture for NCDC&apos;s COVID-19 isolation centres to the security infrastructure behind Nigeria&apos;s biggest entertainment tours and the NFL Africa Camp — every engagement is built from first principles, not templates.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '2rem 0' }} className="pillars-grid">
                {[
                  { Icon: IconTarget,  label: 'Intelligence-First Doctrine' },
                  { Icon: IconSearch,  label: 'Forensic-Grade Verification' },
                  { Icon: IconSignal,  label: 'ZumaGrid Technology Stack' },
                  { Icon: IconTeam,    label: 'Agency-Level Partnerships' },
                ].map(({ Icon, label }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: '#f4f1fd', border: '1px solid #c8bff2', borderRadius: '0.75rem', padding: '0.8rem 1rem', fontSize: '0.82rem', fontWeight: 600, color: '#3d2a8a' }}>
                    <span style={{ width: 44, height: 44, borderRadius: 8, background: '#e8e3fa', border: '1px solid #c8bff2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5c43c8', flexShrink: 0 }}><Icon size={18} /></span>{label}
                  </div>
                ))}
              </div>
              <button onClick={() => { const el = document.getElementById('engagements'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 700, color: '#5c43c8', fontFamily: 'var(--font-space-grotesk)', marginTop: '0.5rem', padding: 0 }}>
                View our engagement record →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
