'use client'
import { useState } from 'react'
import { chatOptions, siteConfig } from '@/constants/content'
import { waLink } from '@/lib/utils'
import { IconShield, IconWhatsApp } from './icons/Icons'

type Message = { role: 'bot' | 'user'; text: string }

const INITIAL_MESSAGES: Message[] = [
  { role: 'bot', text: 'Welcome to Olswen. Tell us about your security requirement and we will connect you with the right team.' },
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
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff' }}><IconShield size={18} /></div>
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
            <IconWhatsApp size={17} />
            Continue on WhatsApp
          </a>
        </div>
      )}

      {/* FAB */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: 58, height: 58, borderRadius: '50%', background: 'linear-gradient(135deg,#4c35b0,#5c43c8)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 8px 28px rgba(92,67,200,0.4)', transition: 'all 0.25s' }}
          onMouseEnter={e => { (e.currentTarget).style.transform = 'scale(1.07)'; (e.currentTarget).style.boxShadow = '0 12px 36px rgba(92,67,200,0.5)'; }}
          onMouseLeave={e => { (e.currentTarget).style.transform = 'scale(1)'; (e.currentTarget).style.boxShadow = '0 8px 28px rgba(92,67,200,0.4)'; }}
          aria-label="Chat with Olswen"
        >
          <IconShield size={26} />
        </button>
      </div>
    </div>
  )
}
