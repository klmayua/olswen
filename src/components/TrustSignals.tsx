'use client'
import ScrollReveal from './ScrollReveal'
import { IconShieldCheck, IconVerified, IconLock, IconTeam, IconSignal, IconDocument } from './icons/Icons'

const trustItems = [
  {
    Icon: IconShieldCheck,
    label: 'RC 1466641',
    sub: 'Registered Nigerian company — CAC verified',
  },
  {
    Icon: IconVerified,
    label: 'Licensed Operator',
    sub: 'Licensed private security operator, Nigeria',
  },
  {
    Icon: IconSignal,
    label: 'ZumaGrid Founding Operator',
    sub: "Nigeria's first and founding ZumaGrid operator",
  },
  {
    Icon: IconLock,
    label: 'NDPR Compliant',
    sub: 'All digital records are NDPR compliant',
  },
  {
    Icon: IconTeam,
    label: '4 Active Retainers',
    sub: 'Ongoing contracts across sports & healthcare',
  },
  {
    Icon: IconDocument,
    label: 'Court-Ready Records',
    sub: 'Tamper-proof, legally admissible incident logs',
  },
]

export default function TrustSignals() {
  return (
    <section id="trust" style={{ background: '#0c0a18', padding: '4rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Why You Can Trust Olswen</span>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '1rem' }} className="trust-grid">
          {trustItems.map(({ Icon, label, sub }, i) => (
            <ScrollReveal key={i}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem 1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(201,169,74,0.12)', border: '1px solid rgba(201,169,74,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d8be70', marginBottom: '0.9rem', flexShrink: 0 }}>
                  <Icon size={20} />
                </div>
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem', lineHeight: 1.25 }}>{label}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .trust-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 600px) { .trust-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
