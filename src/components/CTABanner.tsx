import { siteConfig } from '@/constants/content'
import { IconWhatsApp } from './icons/Icons'

export default function CTABanner() {
  return (
    <section id="cta-banner" style={{ background: 'linear-gradient(135deg,#3d2a8a 0%,#4c35b0 50%,#5c43c8 100%)', padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <span className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Next Step</span>
        <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, color: '#fff', margin: '0.75rem 0 1.25rem', lineHeight: 1.15 }}>Ready to Engage Olswen?</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: 1.75 }}>Whether you need event security, close protection, or a permanent deployment programme — Olswen mobilises with intelligence-first planning and field-proven execution.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }} className="cta-btn-row">
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 700, padding: '1.1rem 2.8rem', borderRadius: 8, background: '#c9a94a', color: '#fff', textDecoration: 'none', minHeight: 44 }}>Request Consultation →</a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 700, padding: '1.1rem 2.8rem', borderRadius: 8, background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', textDecoration: 'none', minHeight: 44 }}>
            <IconWhatsApp size={18} />
            WhatsApp Us
          </a>
        </div>
        <style>{`
          @media (max-width: 480px) { .cta-btn-row { flex-direction: column !important; align-items: stretch !important; } .cta-btn-row a { width: 100% !important; } }
        `}</style>
      </div>
    </section>
  )
}
