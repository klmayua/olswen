'use client'
import Image from 'next/image'
import { images } from '@/constants/images'
import ScrollReveal from './ScrollReveal'

const solutions = [
  {
    img: images.stadiumOperations,
    alt: 'Event security',
    eyebrow: 'Event Security',
    title: 'Mass Events. No Margin for Error.',
    desc: 'Pre-event intelligence. Access control architecture. Live command coordination with state security agencies. Post-event debrief. Olswen has secured stadium events, four-state national tours, and global broadcast productions — building the security layer that lets everything else run.',
    tags: ['Concerts', 'Sports', 'National Tours', 'Broadcast Events'],
    wide: true,
  },
  {
    img: images.vipDetail,
    alt: 'VIP protection',
    eyebrow: 'Close Protection',
    title: 'VIP & Executive Close Protection',
    desc: 'Advance route intelligence, threat profiling, and close protection teams for high-profile principals — artists, executives, athletes, and visiting dignitaries operating across Nigeria.',
    tags: ['Celebrities', 'Executives', 'Athletes'],
    wide: false,
  },
  {
    img: images.operativePortrait,
    alt: 'Security operations',
    eyebrow: 'Guard Deployment',
    title: 'Professional Guard Deployment',
    desc: 'Regular, Premium, and Supervisory tiers. Every guard is biometrically verified through ZumaGrid from day one. Personnel accountability that paper logs cannot provide.',
    tags: ['Facilities', 'Sites', 'Estates'],
    wide: false,
  },
]

export default function SolutionsSection() {
  return (
    <section id="solutions" style={{ background: '#fff', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 640, marginBottom: '4rem' }}>
            <span className="eyebrow">In the Field</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#0c0a18' }}>Three Environments. One Standard of Excellence.</h2>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="sols-grid">
          {solutions.map((sol, i) => (
            <ScrollReveal key={i} className={sol.wide ? 'sol-wide' : ''}>
              <div style={{ background: '#fff', border: '1px solid #ede9f8', borderRadius: 18, overflow: 'hidden', transition: 'all 0.3s', gridColumn: sol.wide ? 'span 2' : 'span 1', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(92,67,200,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ overflow: 'hidden', position: 'relative', height: sol.wide ? 340 : 280 }}>
                  <Image src={sol.img} alt={sol.alt} fill sizes={sol.wide ? '100vw' : '(max-width:860px) 100vw, 50vw'} style={{ objectFit: 'cover', transition: 'transform 0.5s' }} />
                </div>
                <div style={{ padding: '2rem 2.25rem' }}>
                  <span className="eyebrow">{sol.eyebrow}</span>
                  <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.25rem', fontWeight: 600, color: '#0c0a18', margin: '0.5rem 0 0.75rem' }}>{sol.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#4a4560', lineHeight: 1.75 }}>{sol.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.1rem' }}>
                    {sol.tags.map(t => (
                      <span key={t} style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#5c43c8', background: '#e8e3fa', padding: '0.25rem 0.7rem', borderRadius: 9999 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .sols-grid { grid-template-columns: 1fr !important; }
          .sol-wide > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
