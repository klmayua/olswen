import React from 'react'

interface IconProps {
  size?: number
  className?: string
  strokeWidth?: number
  style?: React.CSSProperties
}

const base = (sw = 1.5) => ({
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeWidth: sw,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

export const IconIntelligence = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z"/>
    <path d="M8 7H6a2 2 0 0 0-2 2v1a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V9a2 2 0 0 0-2-2h-2"/>
    <path d="M12 11v9M8 20h8"/>
  </svg>
)

export const IconShield = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

export const IconShieldCheck = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

export const IconEvent = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
  </svg>
)

export const IconBuilding = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M9 21V9M15 21V9M3 15h6M15 15h6"/>
  </svg>
)

export const IconSearch = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
)

export const IconArchitecture = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

export const IconSignal = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <circle cx="12" cy="20" r="1" fill="currentColor"/>
  </svg>
)

export const IconFingerprint = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"/>
    <path d="M5 19.5C5.5 18 6 15 6 12c0-1.9.6-3.7 1.6-5.1"/>
    <path d="M20 4v.5A10 10 0 0 1 12 22"/>
    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>
    <path d="M12 9v3l1.5 1.5"/>
  </svg>
)

export const IconDocument = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
)

export const IconEye = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

export const IconTarget = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

export const IconVerified = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

export const IconTeam = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

export const IconLock = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

export const IconClock = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

export const IconMapPin = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export const IconPhone = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.9-1.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export const IconMail = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

export const IconExternalLink = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export const IconPerson = ({ size = 20, className = '', strokeWidth = 1.5, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

export const IconWhatsApp = ({ size = 20, className = '' }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export const IconArrowRight = ({ size = 16, className = '', strokeWidth = 2, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
)

export const IconPlus = ({ size = 20, className = '', strokeWidth = 2, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

export const IconStar = ({ size = 16, className = '', filled = true }: IconProps & { filled?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

export const IconMenu = ({ size = 22, className = '', strokeWidth = 2, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

export const IconClose = ({ size = 20, className = '', strokeWidth = 2, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style} {...base(strokeWidth)}>
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)
