'use client'
import { siteConfig } from '@/constants/content'
import ScrollReveal from './ScrollReveal'
import { IconMapPin, IconPhone, IconMail, IconExternalLink, IconWhatsApp } from './icons/Icons'

const contactItems = [
  { Icon: IconMapPin,      label: 'Address', value: siteConfig.address, href: null },
  { Icon: IconPhone,       label: 'Phone', value: siteConfig.phones[0], href: `tel:${siteConfig.phones[0].replace(/\s/g,'')}` },
  { Icon: IconMail,        label: 'Email', value: siteConfig.emails[0], href: `mailto:${siteConfig.emails[0]}` },
  { Icon: IconExternalLink, label: 'Linktree', value: 'linktr.ee/olswenrisks', href: siteConfig.linktree },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad" style={{ background: '#fff', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'start' }} className="contact-grid">
          {/* Left */}
          <ScrollReveal>
            <div>
              <span className="eyebrow">Contact</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem', color: '#0c0a18' }}>Talk to Olswen</h2>
              <p style={{ color: '#4a4560', lineHeight: 1.75, marginBottom: '2rem' }}>Describe your security requirement and we will respond within 24 hours. For urgent operational matters, WhatsApp is faster.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.25rem', border: '1px solid #ede9f8', borderRadius: 10, background: '#f7f6fb', transition: 'all 0.2s', cursor: item.href ? 'pointer' : 'default' }}
                    onMouseEnter={e => { if (item.href) { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.background = '#f4f1fd'; }}}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.background = '#f7f6fb'; }}
                  >
                    <div style={{ width: 44, height: 44, borderRadius: 8, background: '#e8e3fa', border: '1px solid #c8bff2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5c43c8', flexShrink: 0 }}><item.Icon size={20} /></div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a8599', marginBottom: '0.2rem' }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0c0a18', textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0c0a18' }}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', width: '100%', padding: '1rem', borderRadius: 8, background: '#25d366', color: '#fff', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1db954')}
                onMouseLeave={e => (e.currentTarget.style.background = '#25d366')}
              >
                <IconWhatsApp size={20} />
                Message Us on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal>
            <div style={{ background: '#f7f6fb', border: '1px solid #ede9f8', borderRadius: 18, padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.2rem', fontWeight: 700, color: '#0c0a18', marginBottom: '1.5rem' }}>Send a Request</h3>
              <form action={siteConfig.formsubmit} method="POST">
                <input type="hidden" name="_subject" value="New Consultation Request — Olswen Website" />
                <input type="hidden" name="_captcha" value="false" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  {[{ name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' }, { name: 'company', label: 'Company / Organisation', type: 'text', placeholder: 'Acme Ltd.' }].map(f => (
                    <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '0.9rem' }}>
                      <label style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a4560' }}>{f.label}</label>
                      <input required name={f.name} type={f.type} placeholder={f.placeholder} style={{ background: '#fff', border: '1px solid #d8d5e6', borderRadius: '0.65rem', padding: '0.85rem 1rem', color: '#0c0a18', fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  {[{ name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@company.com' }, { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 800 000 0000' }].map(f => (
                    <div key={f.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '0.9rem' }}>
                      <label style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a4560' }}>{f.label}</label>
                      <input required name={f.name} type={f.type} placeholder={f.placeholder} style={{ background: '#fff', border: '1px solid #d8d5e6', borderRadius: '0.65rem', padding: '0.85rem 1rem', color: '#0c0a18', fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none' }} />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '0.9rem' }}>
                  <label style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a4560' }}>Service Required</label>
                  <select name="service" required style={{ background: '#fff', border: '1px solid #d8d5e6', borderRadius: '0.65rem', padding: '0.85rem 1rem', color: '#0c0a18', fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none' }}>
                    <option value="">Select a service…</option>
                    <option>Intelligence &amp; Risk Management</option>
                    <option>VIP &amp; Close Protection</option>
                    <option>Event Security Architecture</option>
                    <option>Enterprise &amp; Facility Security</option>
                    <option>Forensic Investigation &amp; Vetting</option>
                    <option>Security Consulting &amp; Architecture</option>
                    <option>ZumaGrid Deployment</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '0.9rem' }}>
                  <label style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#4a4560' }}>Message</label>
                  <textarea name="message" required rows={4} placeholder="Briefly describe your security requirement…" style={{ background: '#fff', border: '1px solid #d8d5e6', borderRadius: '0.65rem', padding: '0.85rem 1rem', color: '#0c0a18', fontFamily: 'inherit', fontSize: '0.9rem', outline: 'none', resize: 'none' }} />
                </div>
                <button type="submit" style={{ width: '100%', background: '#5c43c8', color: '#fff', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.9rem', fontWeight: 700, padding: '1.1rem', border: 'none', borderRadius: '0.75rem', cursor: 'pointer', transition: 'all 0.2s', marginTop: '0.5rem' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#4c35b0'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(92,67,200,0.25)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#5c43c8'; (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'; }}
                >
                  Send Request
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
