'use client'
import { scrollToSection } from '@/lib/utils'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        paddingTop: 'calc(64px + 1.5rem + 3rem)',
        paddingBottom: '4rem',
        background: `
          radial-gradient(ellipse 50% 60% at 70% 40%, rgba(92,67,200,0.15) 0%, transparent 65%),
          radial-gradient(ellipse 35% 45% at 5% 70%, rgba(201,169,74,0.06) 0%, transparent 55%),
          linear-gradient(160deg, #0a0818 0%, #160f38 45%, #1e1550 100%)
        `,
      }}
    >
      {/* Tactical pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='rgba(255%2C255%2C255%2C0.04)' stroke-width='0.75'%3E%3Cpath d='M40 8 L68 24 L68 56 L40 72 L12 56 L12 24 Z'/%3E%3Ccircle cx='40' cy='40' r='4' stroke-width='0.5'/%3E%3Ccircle cx='40' cy='40' r='12' stroke-width='0.4' stroke-dasharray='2 4'/%3E%3Cpath d='M40 28 L40 24 M40 52 L40 56 M28 40 L24 40 M52 40 L56 40' stroke-width='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat',
          opacity: 1,
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-3xl px-6 text-center" style={{ zIndex: 10 }}>
        {/* Credential pill */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-md border px-3 py-1.5"
          style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c9a94a', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}>
            Licensed · RC 1466641 · ZumaGrid Founding Operator
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'var(--font-space-grotesk)',
          fontSize: 'clamp(2.8rem, 6.5vw, 5rem)',
          fontWeight: 800,
          lineHeight: 1.06,
          letterSpacing: '-0.03em',
          color: '#fff',
          marginBottom: '1.5rem',
        }}>
          When Stakes Are<br />
          Highest,{' '}
          <span style={{
            background: 'linear-gradient(120deg, #d8be70, #c9a94a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Olswen Delivers.
          </span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255,255,255,0.60)',
          maxWidth: '540px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.75,
        }}>
          Intelligence-led security. Close protection. Risk management.
          Protecting Nigeria&apos;s most high-profile events, assets, and individuals.
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <button onClick={() => scrollToSection('contact')} style={{
            background: '#c9a94a', color: '#0a0818', fontWeight: 700,
            borderRadius: '8px', padding: '0.9rem 2.2rem', fontSize: '0.9rem',
            border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-grotesk)',
            transition: 'all 0.2s',
          }}>
            Request Consultation
          </button>
          <button onClick={() => scrollToSection('engagements')} style={{
            background: 'transparent', color: '#fff',
            border: '1.5px solid rgba(255,255,255,0.22)',
            borderRadius: '8px', padding: '0.9rem 2.2rem', fontSize: '0.9rem',
            cursor: 'pointer', fontFamily: 'var(--font-space-grotesk)',
            transition: 'all 0.2s',
          }}>
            View Engagements
          </button>
        </div>

        {/* Proof stats row */}
        <div className="hero-stats-row" style={{
          display: 'flex', justifyContent: 'center',
          borderTop: '1px solid rgba(255,255,255,0.09)',
          paddingTop: '2.5rem', marginBottom: '2rem',
          gap: 0, flexWrap: 'wrap',
        }}>
          {[
            { num: '7+',  label: 'Years Active'      },
            { num: '50+', label: 'Engagements'       },
            { num: '4',   label: 'Active Retainers'  },
            { num: '0',   label: 'Major Incidents'   },
          ].map((s, i, arr) => (
            <div key={s.num} className="hero-stat" style={{
              flex: '1 1 80px', textAlign: 'center', padding: '0.5rem 1.25rem',
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.09)' : 'none',
            }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-space-grotesk)', fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
                {s.num}
              </span>
              <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em', marginTop: '0.3rem' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 480px) {
            .hero-stats-row { gap: 0.5rem !important; }
            .hero-stat { border-right: none !important; min-width: 40%; }
            .hero-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.09) !important; }
          }
        `}</style>

        {/* Trusted-by strip */}
        <div style={{ marginTop: '1.5rem' }}>
          <span style={{ display: 'block', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '0.85rem' }}>
            Trusted By
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {['NFL Africa', 'Davido', 'Kai Cenat', 'IShowSpeed', 'FIFA', 'SuperSport'].map((name, i, arr) => (
              <span key={name} style={{
                fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.38)',
                padding: '0 0.9rem',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                lineHeight: 1,
              }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
