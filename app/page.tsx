'use client'

import dynamic from 'next/dynamic'
import Nav from '@/components/nav/Nav'
import VoidDivider from '@/components/shared/VoidDivider'
import AboutSection from '@/components/AboutSection'
import StickyProductSection from '@/components/StickyProductSection'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import DeveloperSection from '@/components/DeveloperSection'
import ComparisonSection from '@/components/ComparisonSection'
import EcosystemSection from '@/components/EcosystemSection'
import SocialProofSection from '@/components/SocialProofSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'

import { useState } from 'react'
import RequestAccessModal from '@/components/RequestAccessModal'
import GlobalBackgroundLoader from '@/components/GlobalBackgroundLoader'

// Lazy-load the heavy Three.js / shader hero to avoid blocking initial paint, but reserve exactly 100vh height so the layout doesn't collapse and jump to section 2.
const Hero = dynamic(() => import('@/components/hero/Hero'), { 
  ssr: false,
  loading: () => <div style={{ height: '100vh', minHeight: 600, width: '100%', background: 'transparent' }} />
})

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <SmoothScroll>
      <main style={{ background: 'transparent', position: 'relative' }}>
        <Nav onRequestAccess={() => setModalOpen(true)} />
        
        <Hero onRequestAccess={() => setModalOpen(true)} />

        <VoidDivider variant="minimal" />
        <AboutSection />

        <VoidDivider variant="deep-field" />
        <StickyProductSection />

        <VoidDivider variant="minimal" />
        <CapabilitiesSection />

        <DeveloperSection />

        <VoidDivider variant="deep-field" />
        <ComparisonSection />

        <EcosystemSection />

        <SocialProofSection />

        <CTASection onRequestAccess={() => setModalOpen(true)} />
        <Footer />
        
        <RequestAccessModal 
          open={modalOpen} 
          onClose={() => setModalOpen(false)} 
        />
      </main>
    </SmoothScroll>
  )
}
