import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Olswen Independence Alliance — Security, Intelligence & Risk Management | Lagos, Nigeria',
  description: "Nigeria's intelligence-first security firm. Close protection, event security, forensic vetting, and enterprise deployments. Trusted by NFL Africa, Davido, Kai Cenat, IShowSpeed, FIFA. RC 1466641.",
  keywords: 'security company Nigeria, close protection Lagos, event security Nigeria, VIP protection Lagos, Olswen, ZumaGrid, forensic investigation Nigeria, security firm Lagos',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
}
