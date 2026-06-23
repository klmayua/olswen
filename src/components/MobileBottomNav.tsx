'use client'
import { useState, useEffect } from 'react'
import { scrollToSection } from '@/lib/utils'

const tabs = [
  {
    id: 'hero',
    label: 'Home',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? '#5c43c8' : 'none'} stroke={active ? '#5c43c8' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'services',
    label: 'Services',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#5c43c8' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'engagements',
    label: 'Work',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#5c43c8' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? '#5c43c8' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export default function MobileBottomNav() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const sections = tabs.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[]
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      let current = 'hero'
      for (const el of sections) {
        if (el.offsetTop <= scrollY) current = el.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleTap = (id: string) => {
    setActive(id)
    scrollToSection(id)
  }

  return (
    <>
      <nav
        aria-label="Mobile navigation"
        style={{
          display: 'none',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid #ede9f8',
          boxShadow: '0 -4px 24px rgba(92,67,200,0.08)',
        }}
        className="mobile-bottom-nav"
      >
        <div style={{ display: 'flex', alignItems: 'stretch', maxWidth: 480, margin: '0 auto' }}>
          {tabs.map(tab => {
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTap(tab.id)}
                aria-label={tab.label}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.25rem',
                  padding: '0.6rem 0 calc(0.6rem + env(safe-area-inset-bottom, 0px))',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isActive ? '#5c43c8' : '#8a8599',
                  transition: 'color 0.2s',
                  minHeight: 56,
                  position: 'relative',
                }}
              >
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 32,
                    height: 3,
                    borderRadius: '0 0 4px 4px',
                    background: '#5c43c8',
                  }} />
                )}
                {tab.icon(isActive)}
                <span style={{
                  fontSize: '0.6rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-space-grotesk)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                }}>
                  {tab.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>
      <style>{`
        @media (max-width: 900px) {
          .mobile-bottom-nav { display: block !important; }
        }
      `}</style>
    </>
  )
}
