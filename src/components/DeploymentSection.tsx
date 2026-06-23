'use client'
import ScrollReveal from './ScrollReveal'

const clients = [
  { name: 'NFL Africa',           cat: 'International Sports'     },
  { name: 'Davido',               cat: 'National Tour · 4 States' },
  { name: 'Kai Cenat',            cat: 'Content Tour · 2026'      },
  { name: 'IShowSpeed',           cat: 'Content Tour · 2026'      },
  { name: 'FIFA',                 cat: 'World Cup Qualifiers'      },
  { name: 'SuperSport',           cat: 'NaijaSuper8 Tournament'   },
  { name: 'Sporting Lagos FC',    cat: 'Football · Active Retainer'},
  { name: 'Inter Lagos FC',       cat: 'Football · Active Retainer'},
  { name: 'LifeCenter Hospitals', cat: 'Healthcare · 3 Locations' },
  { name: 'Xylo Mall by Mazo',    cat: 'Commercial Retail · VI'   },
  { name: 'Truth Beach Club',     cat: 'Hospitality · Landmark'   },
  { name: 'Hov Bar Lekki',        cat: 'Nightlife'                },
  { name: 'Flash Gas',            cat: 'Industrial · Lekki'       },
  { name: 'NGDL Services',        cat: 'Construction'             },
]

export default function DeploymentSection() {
  return (
    <section id="deployments" className="section-pad" style={{ background: '#f7f6fb', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Trusted By</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18', textAlign: 'center' }}>
            The Firms and Institutions That Trust Olswen
          </h2>
          <p style={{ color: '#4a4560', fontSize: '1.05rem', lineHeight: 1.75, textAlign: 'center', maxWidth: 640, margin: '0 auto 3.5rem' }}>
            Active retainer clients and completed engagements across sport, entertainment, healthcare, hospitality, and industry.
          </p>
        </ScrollReveal>
        <div style={{ display: 'grid', gap: '0.75rem', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))' }}>
          {clients.map((client, i) => (
            <ScrollReveal key={i}>
              <div
                style={{ borderRadius: 12, border: '1px solid #ede9f8', background: '#fff', padding: '1.25rem 1rem', textAlign: 'center', transition: 'all 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.background = '#f4f1fd'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <p style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', fontWeight: 700, color: '#0c0a18', marginBottom: '0.3rem' }}>{client.name}</p>
                <p style={{ fontSize: '0.72rem', color: '#8a8599', lineHeight: 1.4 }}>{client.cat}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
