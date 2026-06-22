'use client'
import { testimonials } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: '#fff', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow">Client Testimonials</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>What Our Clients Say</h2>
            <p style={{ color: '#4a4560', fontSize: '1.05rem', lineHeight: 1.75 }}>From repeat retainer clients to one-time high-stakes engagements — the Olswen standard is consistent.</p>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="testi-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i}>
              <div style={{ background: t.featured ? 'linear-gradient(145deg,#f4f1fd 0%,#fff 100%)' : '#fff', border: t.featured ? '1px solid #a28fe6' : '1px solid #ede9f8', borderRadius: 18, padding: '2.25rem', position: 'relative', transition: 'all 0.3s', cursor: 'default', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(92,67,200,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.featured ? '#a28fe6' : '#ede9f8'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', gap: 2, marginBottom: '0.5rem' }}>
                  {[...Array(5)].map((_, j) => <span key={j} style={{ color: '#c9a94a', fontSize: '0.85rem' }}>★</span>)}
                </div>
                <div style={{ fontSize: '2.5rem', lineHeight: 1, color: '#c8bff2', fontFamily: 'Georgia,serif', marginBottom: '0.75rem' }}>&ldquo;</div>
                <p style={{ fontSize: '0.93rem', color: '#2e2a44', lineHeight: 1.75, marginBottom: '1.75rem', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', paddingTop: '1.25rem', borderTop: '1px solid #ede9f8' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#e8e3fa', border: '2px solid #c8bff2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', fontWeight: 700, color: '#5c43c8', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', fontWeight: 700, color: '#0c0a18', display: 'block' }}>{t.name}</span>
                    <span style={{ fontSize: '0.75rem', color: '#8a8599', marginTop: '0.15rem', display: 'block' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div style={{ background: '#f4f1fd', border: '1px solid #c8bff2', borderRadius: 18, padding: '2rem 2.5rem', marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 600, color: '#3d2a8a', margin: 0 }}>Work with Olswen — add your name to this list.</p>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 9999, background: '#5c43c8', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>Get In Touch →</a>
          </div>
        </ScrollReveal>
      </div>
      <style>{`
        @media (max-width: 860px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
