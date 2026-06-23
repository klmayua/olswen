'use client'
import ScrollReveal from './ScrollReveal'

const reasons = [
  { num: '01', title: 'Intelligence Before Personnel', desc: 'Every engagement begins with a security architecture document and threat assessment — before a single guard is deployed. We understand the threat before we meet it.' },
  { num: '02', title: 'Forensic-Grade Leadership', desc: 'Our director holds dual forensic diplomas from the University of Lagos International Academy of Forensics. Security led by someone who understands evidence chains, criminal intelligence, and legal admissibility.' },
  { num: '03', title: 'Technology-Backed Accountability', desc: 'As Nigeria’s founding ZumaGrid operator, every guard deployment runs on biometric verification and immutable digital records. Court-admissible. NDPR compliant. Verifiable on demand.' },
  { num: '04', title: 'Proven at the Highest Level', desc: 'NFL Africa. FIFA World Cup Qualifiers. Davido’s four-state national tour. IShowSpeed. Kai Cenat. Not pilot engagements — these are the benchmark we hold every client to.' },
]

export default function WhySection() {
  return (
    <section id="why" className="section-pad" style={{ background: '#fff', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow">The Difference</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, color: '#0c0a18' }}>Why Nigeria’s Most Demanding Clients Choose Olswen</h2>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }} className="why-grid">
          {reasons.map((r, i) => (
            <ScrollReveal key={i}>
              <div style={{ background: '#f7f6fb', border: '1px solid #ede9f8', borderRadius: 18, padding: '2.25rem', transition: 'all 0.3s', cursor: 'default', height: '100%' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(92,67,200,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#f7f6fb'; e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '2.4rem', fontWeight: 900, color: '#c8bff2', lineHeight: 1, marginBottom: '1rem' }}>{r.num}</div>
                <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 600, color: '#0c0a18', marginBottom: '0.6rem' }}>{r.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#4a4560', lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .why-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .why-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
