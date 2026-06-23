import { timeline, directorCredentials } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-pad" style={{ background: '#0c0a18', position: 'relative', overflow: 'hidden', padding: '7rem 0' }}>
      <div style={{ position: 'absolute', left: -200, top: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(92,67,200,0.2) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }} className="exp-grid">
          {/* Left */}
          <ScrollReveal>
            <div>
              <span className="eyebrow on-dark">Director &amp; Founder</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, color: '#fff', margin: '0.75rem 0 1.25rem', lineHeight: 1.15 }}>Donald Owen Ogbemudia</h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.75 }}>Founder and Director of Operations. Certified in forensic investigation and criminal intelligence. Former research assistant to the Director of Legal Services, 81 Division Headquarters, Nigerian Army. Seven years building Nigeria’s most intelligence-led security firm.</p>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 18, padding: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#4c35b0', border: '2px solid #7a62d6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '1.2rem', fontWeight: 800, color: '#fff', flexShrink: 0 }}>DOO</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Donald Owen Ogbemudia</div>
                    <div style={{ fontSize: '0.78rem', color: '#a28fe6', marginTop: '0.2rem' }}>Founder &amp; Director of Operations</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {directorCredentials.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.65)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#d8be70', flexShrink: 0 }} />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 8, background: '#fff', color: '#5c43c8', textDecoration: 'none' }}>Contact Donald</a>
            </div>
          </ScrollReveal>

          {/* Right — timeline */}
          <ScrollReveal>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom,#5c43c8,#2d1f63)', borderRadius: 2 }} />
              {timeline.map((item, i) => (
                <div key={i} style={{ paddingLeft: '2rem', paddingBottom: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -5, top: '0.35rem', width: 12, height: 12, borderRadius: '50%', background: '#4c35b0', border: '2px solid #7a62d6' }} />
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a28fe6', marginBottom: '0.3rem' }}>{item.year}</div>
                  <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: '#d8be70', fontWeight: 600, marginBottom: '0.3rem' }}>{item.org}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .exp-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
