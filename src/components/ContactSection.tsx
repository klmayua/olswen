'use client'
import { siteConfig } from '@/constants/content'
import ScrollReveal from './ScrollReveal'

const contactItems = [
  { icon: '📍', label: 'Address', value: siteConfig.address, href: null },
  { icon: '📞', label: 'Phone', value: siteConfig.phones[0], href: `tel:${siteConfig.phones[0].replace(/\s/g,'')}` },
  { icon: '📧', label: 'Email', value: siteConfig.emails[0], href: `mailto:${siteConfig.emails[0]}` },
  { icon: '🔗', label: 'Linktree', value: 'linktr.ee/olswenrisks', href: siteConfig.linktree },
]

export default function ContactSection() {
  return (
    <section id="contact" style={{ background: '#fff', padding: '7rem 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(1.25rem,5vw,3.5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3.5rem', alignItems: 'start' }} className="contact-grid">
          {/* Left */}
          <ScrollReveal>
            <div>
              <span className="eyebrow">Get In Touch</span>
              <h2 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: '1.25rem', color: '#0c0a18' }}>Start the Conversation</h2>
              <p style={{ color: '#4a4560', lineHeight: 1.75, marginBottom: '2rem' }}>Tell us about your security requirement. We respond within 24 hours for standard enquiries — WhatsApp for urgent matters.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.25rem', border: '1px solid #ede9f8', borderRadius: 10, background: '#f7f6fb', transition: 'all 0.2s', cursor: item.href ? 'pointer' : 'default' }}
                    onMouseEnter={e => { if (item.href) { e.currentTarget.style.borderColor = '#a28fe6'; e.currentTarget.style.background = '#f4f1fd'; }}}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#ede9f8'; e.currentTarget.style.background = '#f7f6fb'; }}
                  >
                    <div style={{ width: 42, height: 42, borderRadius: '0.7rem', background: '#e8e3fa', border: '1px solid #c8bff2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</div>
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
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', width: '100%', padding: '1rem', borderRadius: 9999, background: '#25d366', color: '#fff', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.95rem', fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1db954')}
                onMouseLeave={e => (e.currentTarget.style.background = '#25d366')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal>
            <div style={{ background: '#f7f6fb', border: '1px solid #ede9f8', borderRadius: 18, padding: '2.5rem' }}>
              <h3 style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '1.2rem', fontWeight: 700, color: '#0c0a18', marginBottom: '1.5rem' }}>Send a Consultation Request</h3>
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
                  Send Request →
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
