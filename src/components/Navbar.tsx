'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { images } from '@/constants/images'
import { navLinks, siteConfig } from '@/constants/content'
import { scrollToSection } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    scrollToSection(id)
  }

  const heroMode = !scrolled

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #ede9f8' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(92,67,200,0.08)' : 'none',
        transition: 'all 0.35s',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'none', border: 'none', cursor: 'pointer' }}>
          <Image src={images.logo} alt="Olswen logo" width={44} height={44} style={{ objectFit: 'contain' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.06em', color: heroMode ? '#fff' : '#3d2a8a', lineHeight: 1, transition: 'color 0.35s' }}>OLSWEN</span>
            <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: heroMode ? 'rgba(255,255,255,0.5)' : '#8a8599', marginTop: '0.15rem', transition: 'color 0.35s' }}>Security · Intelligence</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                style={{ fontSize: '0.875rem', fontWeight: 500, color: heroMode ? 'rgba(255,255,255,0.75)' : '#4a4560', padding: '0.5rem 0.9rem', borderRadius: 6, background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="nav-right-desktop">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: heroMode ? 'rgba(255,255,255,0.7)' : '#4a4560', padding: '0.5rem 0.75rem', borderRadius: 6, textDecoration: 'none', transition: 'color 0.2s' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <button
            onClick={() => handleNav('#contact')}
            style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 700, padding: '0.6rem 1.4rem', borderRadius: 9999, border: 'none', cursor: 'pointer', background: heroMode ? '#fff' : '#5c43c8', color: heroMode ? '#5c43c8' : '#fff', transition: 'all 0.35s' }}
          >
            Request Consultation
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          aria-label="Menu"
          className="hamburger-btn"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: heroMode ? '#fff' : '#2e2a44', borderRadius: 2, transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: heroMode ? '#fff' : '#2e2a44', borderRadius: 2, transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: heroMode ? '#fff' : '#2e2a44', borderRadius: 2, transition: 'all 0.3s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 76, left: 0, right: 0, bottom: 0, background: '#fff', padding: '2rem clamp(1.25rem,5vw,3.5rem)', borderTop: '1px solid #d8d5e6', zIndex: 999, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{ fontSize: '1rem', fontWeight: 500, color: '#2e2a44', padding: '0.85rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderBottom: '1px solid #eceaf4' }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.85rem', borderRadius: 9999, border: '1.5px solid #25d366', color: '#25d366', fontWeight: 700, textDecoration: 'none' }}>
              WhatsApp
            </a>
            <button onClick={() => handleNav('#contact')} style={{ padding: '0.85rem', borderRadius: 9999, background: '#5c43c8', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem' }}>
              Request Consultation
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-links-desktop { display: none !important; }
          .nav-right-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
