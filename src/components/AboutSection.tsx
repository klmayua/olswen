import Image from 'next/image'
import { images } from '@/constants/images'
import ScrollReveal from './ScrollReveal'

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
          {/* Image */}
          <ScrollReveal>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 18, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
                <Image src={images.operationsCollage} alt="Olswen operations" fill sizes="(max-width:860px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', background: '#fff', border: '1px solid #ede9f8', borderRadius: 10, padding: '1.2rem 1.5rem', boxShadow: '0 12px 40px rgba(92,67,200,0.12)', minWidth: 200 }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a8599', marginBottom: '0.75rem' }}>Director Credentials</div>
                {['BA Legal Studies · Staffordshire Univ.', 'Diploma Forensic Investigation', 'Diploma Criminal Intelligence', 'Intl. Criminal Law · Oxford Affil.'].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', fontWeight: 500, color: '#2e2a44' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#5c43c8', flexShrink: 0 }} />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal>
            <div>
              <span className="eyebrow">About Olswen</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>Intelligence Runs in the Architecture</h2>
              <p style={{ marginBottom: '1.25rem', color: '#4a4560', lineHeight: 1.75 }}>Founded in 2018 by Donald Owen Ogbemudia, Olswen Independence Alliance Ltd. is Nigeria&apos;s intelligence-first security consultancy — built on a doctrine that protection starts with information, not personnel.</p>
              <p style={{ marginBottom: '2rem', color: '#4a4560', lineHeight: 1.75 }}>From designing command and control systems for NCDC isolation centres during COVID-19, to architecting security for the NFL Africa Camp and four-state national tours, every Olswen engagement is planned from first principles.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '2rem 0' }} className="pillars-grid">
                {[
                  { icon: '🎯', label: 'Intelligence-First Doctrine' },
                  { icon: '🔬', label: 'Forensic-Grade Verification' },
                  { icon: '📡', label: 'ZumaGrid Technology Stack' },
                  { icon: '🤝', label: 'Agency-Level Partnerships' },
                ].map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: '#f4f1fd', border: '1px solid #c8bff2', borderRadius: '0.75rem', padding: '0.8rem 1rem', fontSize: '0.82rem', fontWeight: 600, color: '#3d2a8a' }}>
                    <span>{p.icon}</span>{p.label}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#experience" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 9999, background: '#5c43c8', color: '#fff', textDecoration: 'none' }}>Leadership &amp; Experience →</a>
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 9999, background: 'transparent', color: '#5c43c8', border: '1.5px solid #a28fe6', textDecoration: 'none' }}>Get In Touch</a>
              </div>
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
