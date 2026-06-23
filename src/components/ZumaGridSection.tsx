'use client'
import Image from 'next/image'
import { images } from '@/constants/images'
import { siteConfig } from '@/constants/content'
import ScrollReveal from './ScrollReveal'
import { IconSignal, IconFingerprint, IconDocument } from './icons/Icons'

export default function ZumaGridSection() {
  const pillars = [
    { Icon: IconSignal,      title: 'Live National Intelligence Feed', desc: 'Every deployment cross-references Nigeria’s stolen vehicle registry, missing persons database, and criminal records — live, during operations.' },
    { Icon: IconFingerprint, title: 'Offline-First Biometric Verification', desc: 'Fingerprint-verified patrol checks work without network connectivity. Guard compliance is proven, not assumed — even on remote sites.' },
    { Icon: IconDocument,    title: 'Court-Ready Incident Records', desc: 'Every incident is logged with a tamper-proof digital chain of custody. NDPR compliant. Legally admissible. Defensible in court.' },
  ]
  const zgStats = [
    { val: '4', label: 'Trust Layers' },
    { val: '99.9%', label: 'Patrol Compliance' },
    { val: 'Live', label: 'Pilot Active' },
    { val: 'NDPR', label: 'Compliant' },
  ]
  return (
    <section id="zumagrid" className="section-pad" style={{ background: 'linear-gradient(160deg,#2d1f63 0%,#3d2a8a 60%,#4c35b0 100%)', position: 'relative', overflow: 'hidden', padding: '7rem 0' }}>
      {/* Decoration rings */}
      <div style={{ position: 'absolute', right: -100, top: -100, width: 600, height: 600, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 60, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)' }} />
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="zg-grid">
          {/* Left */}
          <ScrollReveal>
            <div>
              <span className="eyebrow on-dark">Technology Infrastructure</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, color: '#fff', margin: '0.75rem 0 1.25rem', lineHeight: 1.15 }}>
                Olswen Runs on<br />
                <span className="text-gold-gradient">ZumaGrid Trust Infrastructure</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.68)', marginBottom: '0.75rem', lineHeight: 1.75 }}>Most security firms in Nigeria still run on paper occurrence books. Olswen doesn’t. As Nigeria’s founding licensed ZumaGrid operator, every deployment we manage is biometrically verified, intelligence-connected, and digitally immutable.</p>
              <p style={{ color: 'rgba(255,255,255,0.68)', marginBottom: '1.25rem', lineHeight: 1.75 }}>This isn’t an add-on. It’s the operational backbone. It’s the difference between a security firm and a security system.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {pillars.map((p, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '1rem 1.25rem', transition: 'background 0.2s', cursor: 'default' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.07)')}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}><p.Icon size={20} /></div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.2rem' }}>{p.title}</div>
                    <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }} className="zg-cta-row">
                <a href={siteConfig.zumagrid} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 8, background: '#fff', color: '#5c43c8', textDecoration: 'none', minHeight: 44 }}>Visit ZumaGrid</a>
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 8, background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', textDecoration: 'none', minHeight: 44 }}>Request ZumaGrid Deployment</a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right card */}
          <ScrollReveal>
            <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 18, padding: '2.25rem', backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right,#d8be70,#c9a94a)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.1em', color: '#fff', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.45rem 1rem', borderRadius: '0.5rem' }}>ZUMAGRID</div>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d8be70', background: 'rgba(201,169,74,0.15)', border: '1px solid rgba(201,169,74,0.3)', padding: '0.3rem 0.8rem', borderRadius: 9999 }}>Founding Operator</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {zgStats.map((s, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.1rem', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.5rem', fontWeight: 800, color: '#d8be70', display: 'block', lineHeight: 1 }}>{s.val}</span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.25rem', display: 'block' }}>{s.label}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: '0.75rem', overflow: 'hidden', marginTop: '1rem', position: 'relative', height: 160 }}>
                <Image src={images.squad2} alt="Olswen security team deployment" fill sizes="(max-width:860px) 100vw, 400px" style={{ objectFit: 'cover', opacity: 0.75 }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginTop: '0.9rem', lineHeight: 1.5 }}>Nigeria’s first and founding licensed ZumaGrid operator — live in the field.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .zg-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 480px) { .zg-cta-row { flex-direction: column !important; } .zg-cta-row a { width: 100%; } }
      `}</style>
    </section>
  )
}
