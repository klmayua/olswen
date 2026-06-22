'use client'
import Image from 'next/image'
import { images } from '@/constants/images'
import { deployments } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function DeploymentSection() {
  return (
    <section id="deployments" style={{ background: '#f7f6fb', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 640, marginBottom: '4rem' }}>
            <span className="eyebrow">Active On the Ground</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>Operational Deployments Across Lagos</h2>
            <p style={{ color: '#4a4560', fontSize: '1.05rem', lineHeight: 1.75 }}>Permanent security deployments designed from scratch for each client environment — not templated guard rotations.</p>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }} className="depl-grid">
          <ScrollReveal>
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid #ede9f8', position: 'relative', height: 440 }}>
              <Image src={images.eliteAssets} alt="Olswen elite deployed personnel" fill sizes="(max-width:860px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div>
              <span className="eyebrow">Current Clients</span>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.6rem', fontWeight: 700, color: '#0c0a18', margin: '0.6rem 0 0.5rem' }}>Across Healthcare, Retail, Hospitality &amp; Industry</h3>
              <p style={{ color: '#4a4560', marginBottom: 0, lineHeight: 1.75 }}>Every deployment has a bespoke security architecture document — risk-rated, reviewed quarterly.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '1.5rem 0 2rem' }} className="depl-clients-grid">
                {deployments.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#fff', border: '1px solid #ede9f8', borderRadius: 10, padding: '0.9rem 1.1rem', transition: 'all 0.2s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.background = '#f4f1fd'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.background = '#fff'; }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#5c43c8', flexShrink: 0 }} />
                    <div>
                      <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.85rem', fontWeight: 700, color: '#0c0a18', display: 'block', lineHeight: 1.2 }}>{d.name}</span>
                      <span style={{ fontSize: '0.72rem', color: '#8a8599', marginTop: '0.1rem', display: 'block' }}>{d.cat}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 9999, background: '#5c43c8', color: '#fff', textDecoration: 'none' }}>Enquire About Deployment →</a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .depl-grid { grid-template-columns: 1fr !important; }
          .depl-clients-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
