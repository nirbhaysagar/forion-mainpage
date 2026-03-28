import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, JetBrains_Mono, Poppins, Inconsolata, Playfair_Display } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/shared/Cursor'
import GlobalBackgroundLoader from '../components/GlobalBackgroundLoader'

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['italic'],
})

export const metadata: Metadata = {
  title: 'Forion — AI-Native Infrastructure',
  description: 'Build and deploy AI-native apps in minutes, not months.',
  keywords: ['AI infrastructure', 'multi-agent', 'LLM orchestration'],
  openGraph: {
    title: 'Forion',
    description: 'AI-native infrastructure for the next frontier.',
    type: 'website',
  },
}

import { UIProvider } from '../components/providers/UIProvider'
import Nav from '../components/nav/Nav'
import RequestAccessModal from '../components/RequestAccessModal'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${cormorant.variable} ${jetbrains.variable} ${poppins.variable} ${inconsolata.variable} ${playfair.variable}`}
      style={{ background: '#000', overflowX: 'hidden', maxWidth: '100vw' }}
    >
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@8..144,100..1000&display=swap" />
      </head>
      <body
        className="antialiased"
        style={{ background: 'transparent', margin: 0, overflowX: 'hidden', maxWidth: '100vw' }}
        suppressHydrationWarning
      >
        <UIProvider>
          {/* Global path-aware background (Stars everywhere, Blackhole on Home) */}
          <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: '#000', pointerEvents: 'none' }}>
            <GlobalBackgroundLoader />
          </div>

          {/* Global Nav and Modal */}
          <Nav />
          <RequestAccessModal />

          {/* Global Cursor - stays on top of everything */}
          <Cursor />

          {/* Content sits on top */}
          <div 
            className="relative z-10 transition-all duration-700"
            style={{ 
              maxWidth: '100vw', 
              overflowX: 'hidden'
            }}
          >
            {children}
          </div>
        </UIProvider>
      </body>
    </html>
  )
}


