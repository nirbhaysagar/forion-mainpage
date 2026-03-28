import type { Metadata } from 'next'
import { Bebas_Neue, Cormorant_Garamond, JetBrains_Mono, Poppins, Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { UIProvider } from '../components/providers/UIProvider'
import Nav from '../components/nav/Nav'
import RequestAccessModal from '../components/shared/RequestAccessModal'
import BackgroundLoader from '../components/shared/BackgroundLoader'
import Cursor from '../components/Cursor'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas-neue' })
const cormorant = Cormorant_Garamond({ weight: ['300', '400', '500', '600', '700'], subsets: ['latin'], variable: '--font-cormorant' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'], variable: '--font-poppins' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Forion | The Operating System for AI-Native Applications',
  description: 'Design, build, and run intelligent applications in one unified system.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${cormorant.variable} ${jetbrains.variable} ${poppins.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-black text-white" suppressHydrationWarning>
        <UIProvider>
          {/* Global Cursor - stays on top of everything */}
          <Cursor />
          
          {/* Global Nav and Modal */}
          <Nav />
          <RequestAccessModal />

          {/* Background Layer (Stars everywhere, Background Loader) */}
          <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <BackgroundLoader />
          </div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {children}
          </div>
        </UIProvider>
      </body>
    </html>
  )
}
