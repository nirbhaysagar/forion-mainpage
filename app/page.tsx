'use client'

import dynamic from 'next/dynamic'
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

import { useUI } from '@/components/providers/UIProvider'

// Lazy-load the heavy Three.js / shader hero
const Hero = dynamic(() => import('@/components/hero/Hero'), {
  ssr: false,
  loading: () => <div style={{ height: '100vh', minHeight: 600, width: '100%', background: 'transparent' }} />
})

export default function Home() {
  const { setModalOpen } = useUI()

  return (
    <SmoothScroll>
      <main style={{ background: 'transparent', position: 'relative' }}>
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
      </main>
    </SmoothScroll>
  )
}
