import { tickerItems } from '@/constants/content'

export default function TrustTicker() {
  const doubled = [...tickerItems, ...tickerItems]
  return (
    <div id="trust-bar" style={{ background: '#0c0a18', padding: '1.5rem 0', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 100, background: 'linear-gradient(to right,#0c0a18,transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 100, background: 'linear-gradient(to left,#0c0a18,transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', animation: 'ticker 32s linear infinite', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0 2rem', whiteSpace: 'nowrap', fontFamily: 'var(--font-space-grotesk)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
            {item}
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#c9a94a', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  )
}
