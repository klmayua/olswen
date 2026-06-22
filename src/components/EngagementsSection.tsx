'use client'
import Image from 'next/image'
import { images } from '@/constants/images'
import { engagements } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function EngagementsSection() {
  return (
    <section id="engagements" style={{ background: '#fff', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ borderRadius: 28, overflow: 'hidden', position: 'relative', marginBottom: '3rem', border: '1px solid #ede9f8' }}>
            <div style={{ position: 'relative', height: 400 }}>
              <Image src={images.deployments} alt="Olswen deployments" fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
            </div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(30,20,66,0.95) 45%,rgba(30,20,66,0.3))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(2rem,5vw,4rem)' }}>
              <span className="eyebrow on-dark">Proven Track Record</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, color: '#fff', margin: '0.75rem 0 1rem', maxWidth: 420, lineHeight: 1.15 }}>Trusted at the Highest Level</h2>
              <p style={{ color: 'rgba(255,255,255,0.68)', maxWidth: 380, marginBottom: '2rem', lineHeight: 1.75 }}>From global streaming tours that stopped Lagos to international sporting federations — engagements where security cannot fail.</p>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 9999, background: '#c9a94a', color: '#fff', textDecoration: 'none', width: 'fit-content' }}>Work With Olswen →</a>
            </div>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }} className="eng-grid">
          {engagements.map((e, i) => (
            <ScrollReveal key={i}>
              <div style={{ background: '#fff', border: '1px solid #ede9f8', borderRadius: 10, padding: '1.4rem', transition: 'all 0.25s', cursor: 'default' }}
                onMouseEnter={ev => { ev.currentTarget.style.borderColor = '#a28fe6'; ev.currentTarget.style.background = '#f4f1fd'; }}
                onMouseLeave={ev => { ev.currentTarget.style.borderColor = '#ede9f8'; ev.currentTarget.style.background = '#fff'; }}
              >
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5c43c8', marginBottom: '0.4rem' }}>{e.year}</div>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', fontWeight: 700, color: '#0c0a18', marginBottom: '0.3rem' }}>{e.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#8a8599', lineHeight: 1.5 }}>{e.role}</div>
                <span style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', background: '#f6f0d8', color: '#8c6820', border: '1px solid #ebda9e', borderRadius: 9999, padding: '0.2rem 0.65rem' }}>{e.badge}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .eng-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .eng-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
