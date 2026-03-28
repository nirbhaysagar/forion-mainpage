'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'
import StarfieldParallax from './StarfieldParallax'

const InterstellarBlackHole = dynamic(() => import('./InterstellarBlackHole'), { ssr: false })

export default function Hero({ onRequestAccess }: { onRequestAccess: () => void }) {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Layer 1: Parallax Stars */}
      <StarfieldParallax />

      {/* Background Layer 2: The Core / Black Hole */}
      <div className="absolute inset-0 z-0 opacity-60">
        <InterstellarBlackHole />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Headline with premium serif accent */}
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] font-bold tracking-tight leading-[0.9] text-white uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-8">
            The <span className="italic font-light normal-case text-white/90" style={{ fontFamily: 'var(--font-playfair)' }}>Operating System</span> <br />
            For AI-Native Software.
          </h1>

          {/* Subtext with code/mono feel */}
          <p className="max-w-2xl text-lg md:text-2xl text-white/50 leading-relaxed font-light mb-12" style={{ fontFamily: 'var(--font-inconsolata)' }}>
            One system to design, build, and run intelligent applications. <br className="hidden md:block" />
            From zero to logic in seconds.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="https://orbit-night-sky-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-12 py-5 bg-white text-black rounded-lg transition-all duration-300 hover:scale-[1.02]"
              style={{
                fontFamily: 'var(--font-poppins)',
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
              <span className="relative">Start Building</span>
            </a>

            <button
              onClick={onRequestAccess}
              className="px-10 py-5 bg-transparent border border-white/20 text-white rounded-lg hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              Request Early Access
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom ambient lighting */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      
      {/* Vertical divider accent */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
    </section>
  )
}
