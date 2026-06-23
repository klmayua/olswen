'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { images } from '@/constants/images'
import { navLinks, siteConfig } from '@/constants/content'
import { scrollToSection } from '@/lib/utils'
import { IconMenu, IconClose } from './icons/Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef<number>(0)

  useEffect(() => {
    // Measure hero height once
    const hero = document.getElementById('hero')
    if (hero) heroRef.current = hero.offsetHeight
    const onScroll = () => {
      const threshold = heroRef.current ? heroRef.current - 120 : 80
      setScrolled(window.scrollY >= threshold)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    scrollToSection(href.replace('#', ''))
  }

  const bar = scrolled
    ? {
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(220,215,240,0.9)',
        boxShadow: '0 4px 24px rgba(92,67,200,0.10)',
      }
    : {
        background: 'rgba(20,14,50,0.55)',
        backdropFilter: 'blur(18px)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: 'none',
      }

  const linkColor = scrolled ? '#4a4560' : 'rgba(255,255,255,0.72)'
  const linkHoverBg = scrolled ? 'rgba(92,67,200,0.06)' : 'rgba(255,255,255,0.08)'
  const linkHoverColor = scrolled ? '#4c35b0' : '#fff'
  const ctaBg     = scrolled ? '#5c43c8' : '#c9a94a'
  const ctaColor  = scrolled ? '#fff' : '#0f0d1a'
  const hamColor  = scrolled ? '#2e2a44' : '#fff'

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, pointerEvents: 'none' }}>
      {/* Inner floating bar */}
      <div className="nav-floating-bar" style={{
        maxWidth: 1120,
        margin: '1rem auto 0',
        borderRadius: 14,
        padding: '0 1.75rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pointerEvents: 'all',
        transition: 'all 0.3s ease',
        ...bar,
      }}>
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} style={{ display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Image src={images.logo} alt="Olswen" width={40} height={40} style={{ objectFit: 'contain', height: 40, width: 'auto' }} />
        </button>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.83rem', fontWeight: 500, color: linkColor, padding: '0.4rem 0.8rem', borderRadius: 7, background: 'none', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = linkHoverBg; e.currentTarget.style.color = linkHoverColor }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = linkColor }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="nav-right-desktop">
          <button
            onClick={() => handleNav('#contact')}
            style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 700, padding: '0.55rem 1.25rem', borderRadius: 8, border: 'none', cursor: 'pointer', background: ctaBg, color: ctaColor, transition: 'all 0.3s', whiteSpace: 'nowrap' }}
          >
            Request Consultation
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: hamColor, padding: '0.6rem', borderRadius: 6, lineHeight: 0, minWidth: 44, minHeight: 44, alignItems: 'center', justifyContent: 'center' }}
          aria-label="Toggle navigation menu"
          className="hamburger-btn"
        >
          {menuOpen ? <IconClose size={20} /> : <IconMenu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#1e1442', zIndex: 999, display: 'flex', flexDirection: 'column', padding: '1.5rem clamp(1.25rem,5vw,2rem)', overflowY: 'auto', pointerEvents: 'all' }}>
          {/* Mobile header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Image src={images.logo} alt="Olswen logo" width={36} height={36} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.08em', color: '#fff' }}>OLSWEN</span>
            </div>
            <button onClick={() => setMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', padding: '0.5rem', cursor: 'pointer', lineHeight: 0 }}>
              <IconClose size={20} />
            </button>
          </div>
          {/* Links */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
            {navLinks.map(link => (
              <button key={link.href} onClick={() => handleNav(link.href)} style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.05rem', fontWeight: 500, color: 'rgba(255,255,255,0.8)', padding: '0.9rem 0', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer', textAlign: 'left', transition: 'color 0.2s' }}>
                {link.label}
              </button>
            ))}
          </div>
          <div style={{ paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button onClick={() => handleNav('#contact')} style={{ padding: '0.9rem', borderRadius: 8, background: '#5c43c8', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '0.9rem' }}>
              Request Consultation
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .nav-right-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .nav-floating-bar { margin-left: 0.75rem !important; margin-right: 0.75rem !important; padding-left: 1rem !important; padding-right: 1rem !important; }
        }
      `}</style>
    </nav>
  )
}
