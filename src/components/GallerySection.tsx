import Image from 'next/image'
import { images } from '@/constants/images'
import { siteConfig } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

const galleryItems = [
  { img: images.guardPremium,      alt: 'Olswen premium guard',        label: 'Elite Security Personnel',      tall: true },
  { img: images.eventSolutions,    alt: 'Event security operations',    label: 'Event Security Architecture',   tall: false },
  { img: images.vipProtection,     alt: 'VIP protection',               label: 'VIP & Close Protection',        tall: false },
  { img: images.deployments,       alt: 'Operations portfolio',         label: 'Operational Portfolio',          tall: false },
  { img: images.patrolVehicle,     alt: 'Patrol vehicle',               label: 'Patrol & Mobile Response',      tall: false },
]

export default function GallerySection() {
  return (
    <section id="gallery" style={{ background: '#f7f6fb', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 500, marginBottom: '4rem' }}>
            <span className="eyebrow">Gallery</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>Operations in the Field</h2>
            <p style={{ color: '#4a4560', lineHeight: 1.75 }}>A visual record of Olswen&apos;s operational deployments, personnel, and event security work.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridTemplateRows: 'auto auto', gap: '1rem' }} className="gallery-grid">
            {/* Tall item — col 1 spans 2 rows */}
            <div style={{ borderRadius: 10, overflow: 'hidden', position: 'relative', cursor: 'pointer', gridRow: 'span 2', height: 440 }} className="gal-item">
              <Image src={galleryItems[0].img} alt={galleryItems[0].alt} fill sizes="(max-width:860px) 50vw, 33vw" style={{ objectFit: 'cover', transition: 'transform 0.5s' }} />
              <div className="gal-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(30,20,66,0.5) 0%,transparent 60%)', opacity: 0, transition: 'opacity 0.3s' }} />
              <span className="gal-label" style={{ position: 'absolute', bottom: '0.9rem', left: '0.9rem', right: '0.9rem', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', fontWeight: 700, color: '#fff', opacity: 0, transform: 'translateY(6px)', transition: 'all 0.3s', zIndex: 1 }}>{galleryItems[0].label}</span>
            </div>
            {/* Remaining 4 */}
            {galleryItems.slice(1).map((item, i) => (
              <div key={i} style={{ borderRadius: 10, overflow: 'hidden', position: 'relative', cursor: 'pointer', height: 200 }} className="gal-item">
                <Image src={item.img} alt={item.alt} fill sizes="(max-width:860px) 50vw, 33vw" style={{ objectFit: 'cover', transition: 'transform 0.5s' }} />
                <div className="gal-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(30,20,66,0.5) 0%,transparent 60%)', opacity: 0, transition: 'opacity 0.3s' }} />
                <span className="gal-label" style={{ position: 'absolute', bottom: '0.9rem', left: '0.9rem', right: '0.9rem', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', fontWeight: 700, color: '#fff', opacity: 0, transform: 'translateY(6px)', transition: 'all 0.3s', zIndex: 1 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a href={siteConfig.linktree} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 9999, background: 'transparent', color: '#5c43c8', border: '1.5px solid #a28fe6', textDecoration: 'none' }}>View Full Portfolio →</a>
        </div>
      </div>
      <style>{`
        .gal-item:hover img { transform: scale(1.05); }
        .gal-item:hover .gal-overlay { opacity: 1 !important; }
        .gal-item:hover .gal-label { opacity: 1 !important; transform: translateY(0) !important; }
        @media (max-width: 860px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } .gallery-grid > div:first-child { grid-row: span 1 !important; height: 220px !important; } }
        @media (max-width: 600px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
