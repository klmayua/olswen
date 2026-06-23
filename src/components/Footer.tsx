'use client'
import Image from 'next/image'
import { images } from '@/constants/images'
import { siteConfig, navLinks } from '@/constants/content'
import { IconMapPin, IconPhone, IconMail } from './icons/Icons'

const serviceLinks = [
  'Intelligence & Risk Management',
  'VIP & Close Protection',
  'Event Security Architecture',
  'Enterprise & Facility Security',
  'Forensic Investigation & Vetting',
  'Security Consulting & Architecture',
]

export default function Footer() {
  return (
    <footer style={{ background: '#0c0a18', color: 'rgba(255,255,255,0.6)', padding: '4.5rem 0 2rem' }}>
      <div className="footer-inner" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Image src={images.logo} alt="Olswen logo" width={42} height={42} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>OLSWEN</span>
            </div>
            <p style={{ fontSize: '0.87rem', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.25rem' }}>Intelligence-led security operations for Nigeria’s most demanding environments. Founded 2018. RC 1466641.</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 700, color: '#d8be70' }}>Powered by ZumaGrid</span>
              <span style={{ background: 'rgba(201,169,74,0.15)', border: '1px solid rgba(201,169,74,0.3)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#d8be70', padding: '0.2rem 0.65rem', borderRadius: 9999 }}>Founding Operator</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.1rem' }}>Navigation</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#fff')}
                    onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.1rem' }}>Services</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {serviceLinks.map(s => (
                <li key={s}><a href="#services" style={{ fontSize: '0.87rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')}
                >{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1.1rem' }}>Contact</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <li style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}><IconMapPin size={14} style={{flexShrink:0,marginTop:'0.2rem',color:'rgba(255,255,255,0.4)'}} /><span>{siteConfig.address}</span></li>
              {siteConfig.phones.map(p => (
                <li key={p} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><IconPhone size={14} style={{flexShrink:0,color:'rgba(255,255,255,0.4)'}} /><a href={`tel:${p.replace(/\s/g,'')}`} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#fff')}
                  onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')}
                >{p}</a></li>
              ))}
              <li style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><IconMail size={14} style={{flexShrink:0,color:'rgba(255,255,255,0.4)'}} /><a href={`mailto:${siteConfig.emails[0]}`} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#fff')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')}
              >{siteConfig.emails[0]}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem' }}>
          <span>© {new Date().getFullYear()} Olswen Independence Alliance Ltd. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>RC 1466641 · Licensed Operator · Nigeria</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px)  { .footer-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px)  { .footer-inner { padding-bottom: calc(2rem + 64px) !important; } }
      `}</style>
    </footer>
  )
}
