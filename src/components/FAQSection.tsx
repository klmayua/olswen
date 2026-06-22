'use client'
import { useState } from 'react'
import { faqs } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ background: '#f7f6fb', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <ScrollReveal>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
            <span className="eyebrow">Common Questions</span>
            <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1rem', color: '#0c0a18' }}>What Clients Ask Before They Engage</h2>
          </div>
        </ScrollReveal>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${open === i ? '#a28fe6' : '#ede9f8'}`, borderRadius: 10, overflow: 'hidden', transition: 'border-color 0.25s' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', color: open === i ? '#5c43c8' : '#0c0a18', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.35rem 1.5rem', textAlign: 'left', gap: '1rem', transition: 'color 0.2s' }}
              >
                {faq.q}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, color: '#5c43c8', transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div style={{ maxHeight: open === i ? 400 : 0, overflow: 'hidden', transition: 'max-height 0.4s ease' }}>
                <div style={{ padding: '0 1.5rem 1.4rem', fontSize: '0.9rem', color: '#4a4560', lineHeight: 1.75 }}>{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
