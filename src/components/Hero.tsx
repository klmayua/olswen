import Image from 'next/image'
import { images } from '@/constants/images'
import { siteConfig } from '@/constants/content'

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', background: 'linear-gradient(145deg,#1e1442 0%,#2d1f63 45%,#3d2a8a 100%)', overflow: 'hidden', paddingTop: 76 }}>
      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0 }} />
      {/* Glow */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(92,67,200,0.25) 0%,transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center', width: '100%', maxWidth: 1200, margin: '0 auto', padding: '4rem clamp(1.25rem,5vw,3.5rem) 5rem' }} className="hero-grid">
        {/* Left */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 9999, padding: '0.4rem 1rem', marginBottom: '1.75rem', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d8be70', flexShrink: 0, animation: 'pulse 2s infinite', display: 'inline-block' }} />
            Nigeria&apos;s Premier Security Intelligence Firm
          </div>
          <h1 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: 'clamp(2.4rem,5vw,3.6rem)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, fontFamily: 'var(--font-space-grotesk)' }}>
            When Stakes Are Highest,{' '}
            <em className="text-gold-gradient" style={{ fontStyle: 'normal' }}>Olswen Delivers.</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', maxWidth: 480, marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Intelligence-led security operations, close protection, and risk management for enterprises, events, and high-value individuals across Nigeria and Africa.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.9rem', marginBottom: '3rem' }}>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 700, padding: '1.1rem 2.8rem', borderRadius: 9999, background: '#c9a94a', color: '#fff', textDecoration: 'none', transition: 'all 0.2s' }}>
              Request Consultation →
            </a>
            <a href="#engagements" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 700, padding: '1.1rem 2.8rem', borderRadius: 9999, background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.2s' }}>
              View Our Work
            </a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {['NFL Africa', "Davido Tour '25", 'Kai Cenat', 'IShowSpeed', 'FIFA WC Qualifiers', 'SuperSport', 'RC 1466641'].map(item => (
              <span key={item} style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.15)', padding: '0.3rem 0.85rem', borderRadius: 9999 }}>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 520 }}>
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', aspectRatio: '4/5', position: 'relative' }}>
              <Image src={images.guardPremium} alt="Olswen elite security personnel" fill sizes="(max-width:860px) 100vw, 520px" style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(30,20,66,0.6) 0%,transparent 50%)', borderRadius: 18 }} />
            </div>
            {/* Floating stat card */}
            <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', borderRadius: 10, padding: '1.1rem 1.4rem', boxShadow: '0 20px 40px rgba(30,20,66,0.25)', minWidth: 180, animation: 'float 3.5s ease-in-out infinite' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a8599', marginBottom: '0.3rem' }}>Operations Status</div>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.4rem', fontWeight: 800, color: '#3d2a8a', lineHeight: 1 }}>Active · Live</div>
              <div style={{ fontSize: '0.72rem', color: '#8a8599', marginTop: '0.2rem' }}>ZumaGrid-backed deployment</div>
            </div>
            {/* Floating badge */}
            <div style={{ position: 'absolute', top: '1.5rem', right: '-1rem', background: '#c9a94a', color: '#fff', borderRadius: 10, padding: '0.75rem 1.1rem', boxShadow: '0 8px 24px rgba(201,169,74,0.35)', textAlign: 'center', animation: 'float 4s ease-in-out infinite 0.5s' }}>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.2rem', fontWeight: 800, display: 'block' }}>7+</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: '0.15rem', opacity: 0.85 }}>Years Operating</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  )
}
