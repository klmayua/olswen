'use client'
import { stats } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function StatsBar() {
  return (
    <section id="stats" style={{ background: '#fff', padding: '4.5rem 0', borderBottom: '1px solid #ede9f8' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 2, background: '#ede9f8', border: '1px solid #ede9f8', borderRadius: 18, overflow: 'hidden' }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} style={{ background: '#fff', padding: '2.25rem 1.75rem', textAlign: 'center', transition: 'background 0.2s', cursor: 'default' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f4f1fd')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
              >
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '2.6rem', fontWeight: 800, color: '#5c43c8', lineHeight: 1, marginBottom: '0.35rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#4a4560', letterSpacing: '0.02em' }}>{s.label}</div>
                <div style={{ fontSize: '0.72rem', color: '#8a8599', marginTop: '0.25rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      <style>{`
        @media (max-width: 860px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
