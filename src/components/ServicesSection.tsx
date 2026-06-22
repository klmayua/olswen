'use client'
import { services } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function ServicesSection() {
  return (
    <section id="services" style={{ background: '#f7f6fb', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 640, marginBottom: '4rem' }}>
            <span className="eyebrow">What We Do</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>Comprehensive Security &amp; Intelligence Solutions</h2>
            <p style={{ color: '#4a4560', fontSize: '1.05rem', lineHeight: 1.75 }}>Every engagement starts with a security architecture document, not just a staffing roster. Capability built on intelligence, forensics, and operational experience.</p>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="services-grid">
          {services.map((svc, i) => (
            <ScrollReveal key={i}>
              <div style={{ background: '#fff', border: '1px solid #ede9f8', borderRadius: 18, padding: '2.25rem', transition: 'all 0.3s', position: 'relative', overflow: 'hidden', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(92,67,200,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; const bar = e.currentTarget.querySelector('.svc-bar') as HTMLElement; if (bar) bar.style.opacity = '1'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; const bar = e.currentTarget.querySelector('.svc-bar') as HTMLElement; if (bar) bar.style.opacity = '0'; }}
              >
                <div className="svc-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(to right,#5c43c8,#7a62d6)', opacity: 0, transition: 'opacity 0.3s' }} />
                <div style={{ width: 52, height: 52, borderRadius: '0.9rem', background: '#e8e3fa', border: '1px solid #c8bff2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.5rem' }}>{svc.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 600, color: '#0c0a18', marginBottom: '0.65rem' }}>{svc.title}</h3>
                <p style={{ fontSize: '0.88rem', color: '#4a4560', lineHeight: 1.75 }}>{svc.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.1rem' }}>
                  {svc.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#5c43c8', background: '#e8e3fa', padding: '0.25rem 0.7rem', borderRadius: 9999 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
