'use client'
import { useState } from 'react'
import { chatOptions, siteConfig } from '@/constants/content'
import { waLink } from '@/lib/utils'

type Message = { role: 'bot' | 'user'; text: string }

const INITIAL_MESSAGES: Message[] = [
  { role: 'bot', text: 'Hello! 👋 Welcome to Olswen Independence Alliance. How can we help you today?' },
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [optionsShown, setOptionsShown] = useState(true)

  const handleOption = (opt: { label: string; msg: string }) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', text: opt.label },
    ])
    setOptionsShown(false)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: `Thank you! Connecting you with our team regarding: "${opt.msg}". Opening WhatsApp now…` },
      ])
      setTimeout(() => {
        window.open(waLink(siteConfig.whatsapp, opt.msg), '_blank')
      }, 900)
    }, 500)
  }

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
      {/* Chat window */}
      {isOpen && (
        <div style={{ width: 330, background: '#fff', border: '1px solid #ede9f8', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: 480, boxShadow: '0 32px 64px rgba(30,20,66,0.18)' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,#3d2a8a,#5c43c8)', padding: '0.9rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', flexShrink: 0 }}>🛡️</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-space-grotesk)', fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>Olswen Security</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.1rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                Online now
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1, padding: '0.2rem', flexShrink: 0 }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', background: '#f7f6fb' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ maxWidth: '86%', padding: '0.7rem 0.95rem', borderRadius: msg.role === 'bot' ? '0.85rem 0.85rem 0.85rem 0.2rem' : '0.85rem 0.85rem 0.2rem 0.85rem', fontSize: '0.85rem', lineHeight: 1.55, background: msg.role === 'bot' ? '#fff' : '#5c43c8', color: msg.role === 'bot' ? '#1a1730' : '#fff', border: msg.role === 'bot' ? '1px solid #ede9f8' : 'none', alignSelf: msg.role === 'bot' ? 'flex-start' : 'flex-end', fontWeight: msg.role === 'user' ? 500 : 400 }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Options */}
          {optionsShown && (
            <div style={{ padding: '0.75rem 1rem', background: '#fff', borderTop: '1px solid #ede9f8', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {chatOptions.map((opt, i) => (
                <button key={i} onClick={() => handleOption(opt)} style={{ background: '#f7f6fb', border: '1px solid #ede9f8', borderRadius: '0.65rem', padding: '0.6rem 0.85rem', fontSize: '0.82rem', fontWeight: 500, color: '#1a1730', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', fontFamily: 'inherit' }}
                  onMouseEnter={e => { (e.currentTarget).style.borderColor = '#a28fe6'; (e.currentTarget).style.background = '#f4f1fd'; (e.currentTarget).style.color = '#5c43c8'; }}
                  onMouseLeave={e => { (e.currentTarget).style.borderColor = '#ede9f8'; (e.currentTarget).style.background = '#f7f6fb'; (e.currentTarget).style.color = '#1a1730'; }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          {/* WhatsApp button */}
          <a href={waLink(siteConfig.whatsapp)} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center', margin: '0.5rem 1rem 0.85rem', padding: '0.8rem', borderRadius: '0.65rem', background: '#25d366', color: '#fff', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s', border: 'none', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1db954')}
            onMouseLeave={e => (e.currentTarget.style.background = '#25d366')}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Continue on WhatsApp
          </a>
        </div>
      )}

      {/* FAB */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: 58, height: 58, borderRadius: '50%', background: 'linear-gradient(135deg,#4c35b0,#5c43c8)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(92,67,200,0.4)', transition: 'all 0.25s', fontSize: '1.4rem' }}
          onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.07)'; (e.currentTarget).style.boxShadow = '0 12px 36px rgba(92,67,200,0.5)'; }}
          onMouseLeave={e => { (e.currentTarget).style.transform = 'scale(1)'; (e.currentTarget).style.boxShadow = '0 8px 28px rgba(92,67,200,0.4)'; }}
          aria-label="Chat with Olswen"
        >
          🛡️
        </button>
      </div>
    </div>
  )
}
