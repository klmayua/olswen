import Image from 'next/image'
import { images } from '@/constants/images'
import ScrollReveal from './ScrollReveal'

const galleryImages = [
  { src: images.squad,        alt: 'Olswen security squad formation'          },
  { src: images.eventGallery, alt: 'Event security operations'                },
  { src: images.squad2,       alt: 'Olswen operational team deployment'       },
  { src: images.eliteAssets,  alt: 'Operational assets — vehicles and team'   },
  { src: images.squad3,       alt: 'Close protection detail'                  },
  { src: images.eventPix1,    alt: 'Event security — crowd management'        },
]

export default function GallerySection() {
  return (
    <section id="gallery" style={{ background: '#f7f6fb', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Operations Gallery</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>Documented. Deployed. Delivered.</h2>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }} className="gallery-grid">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i}>
              <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '4/3', border: '1px solid #ede9f8' }} className="gal-item">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                />
                <div className="gal-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(30,20,66,0.45) 0%,transparent 55%)', opacity: 0, transition: 'opacity 0.3s' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style>{`
        .gal-item:hover img { transform: scale(1.05); }
        .gal-item:hover .gal-overlay { opacity: 1 !important; }
        @media (max-width: 860px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 500px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
