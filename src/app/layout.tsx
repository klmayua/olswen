import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Olswen Independence Alliance — Intelligence-Led Security | Lagos, Nigeria',
  description: 'Nigeria’s foremost intelligence-first security consultancy. CSO to the NFL Africa Camp, Davido national tour, IShowSpeed, Kai Cenat, FIFA World Cup Qualifiers, and Sporting Lagos FC. ZumaGrid founding operator.',
  keywords: 'security company Nigeria, close protection Lagos, event security Nigeria, intelligence risk management, VIP protection Lagos, security consultancy Lagos, ZumaGrid operator, forensic investigation Nigeria, private security Nigeria, Donald Ogbemudia',
  openGraph: {
    title: 'Olswen Independence Alliance — Intelligence-Led Security',
    description: 'Intelligence-first security operations for Nigeria’s most demanding environments. Founded 2018. RC 1466641.',
    url: 'https://olswen.com',
    siteName: 'Olswen Independence Alliance',
    locale: 'en_NG',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  )
}
