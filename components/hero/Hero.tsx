'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import StarfieldParallax from './StarfieldParallax'

const InterstellarBlackHole = dynamic(() => import('./InterstellarBlackHole'), { ssr: false })

const SUBTITLE = 'Operating system for AI-native development.'

const subtitleVariant: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.02 + 0.8,
      duration: 0.05,
    },
  }),
}

export default function Hero({ onRequestAccess }: { onRequestAccess?: () => void }) {
  const [bhReady, setBhReady] = useState(false)
  const subChars = SUBTITLE.split('')

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 600,
        background: '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {/* Optimized Starfield + Black Hole */}
      <StarfieldParallax />
      <InterstellarBlackHole onReady={() => setBhReady(true)} />

      {/* Wordmark + CTA */}
      {/* Wordmark + CTA */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          pointerEvents: bhReady ? 'auto' : 'none',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem'
        }}
      >
        {/* Dark scrim behind text for legibility */}
        <div
          className="absolute inset-0 bg-gradient-radial from-black/60 via-black/20 to-transparent -z-10 pointer-events-none"
          style={{ transform: 'scale(1.5)' }}
        />

        {/* Technical Sidebar - Filling the left-hand space */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={bhReady ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.8, duration: 1 }}
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            flexDirection: 'column',
            gap: '2.5rem',
            textAlign: 'left',
            zIndex: 20,
            pointerEvents: 'none',
          }}
          className="hidden lg:flex"
        >
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 9, color: 'rgba(255,180,80,0.4)', letterSpacing: '0.2em' }}>SYSTEM // VER</span>
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>FORION_OS_2.4.0</span>
          </div>
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 9, color: 'rgba(255,180,80,0.4)', letterSpacing: '0.2em' }}>STATUS // NET</span>
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>DEEP_SPACE_NOMINAL</span>
          </div>
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 9, color: 'rgba(255,180,80,0.4)', letterSpacing: '0.2em' }}>LATENCY // MS</span>
            <div className="flex items-center gap-3">
              <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>42ms</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(i => <div key={i} className={`w-1 h-3 ${i < 4 ? 'bg-orange-500/20' : 'bg-orange-500/40 animate-pulse'}`} />)}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mb-0 flex justify-center">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Orbit // Product_01_Launch
            </span>
          </div>
        </div>

        {/* Cinematic Headline */}
        <h1
          className="text-[clamp(4.5rem,15vw,16rem)] font-bold tracking-[0.05em] leading-[0.85] mb-6 relative z-20 text-white uppercase"
          style={{
            fontFamily: 'var(--font-poppins)',
            textShadow: '0 0 60px rgba(255,200,80,0.2), 0 2px 8px rgba(0,0,0,0.9)',
            margin: 'clamp(1rem, 4vw, 2rem) 0 1.5rem 0'
          }}
        >
          Forion
        </h1>

        {/* Animated subtitle — typewriter */}
        <p
          className="backdrop-blur-sm bg-black/20"
          style={{
            fontFamily: 'var(--font-inconsolata)',
            fontSize: 'clamp(14px, 2.2vw, 24px)',
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 500,
            marginTop: '0.4rem',
            letterSpacing: '0.04em',
            minHeight: '1.6em',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
            display: 'inline-block',
            padding: '4px 16px',
            borderRadius: '8px'
          }}
          aria-label="Orbit — Build real React apps. Just describe what you want."
        >
          {"Orbit — Build real React apps. Just describe what you want.".split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={subtitleVariant}
              initial="hidden"
              animate={bhReady ? 'visible' : 'hidden'}
              style={{ display: 'inline' }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={bhReady ? { opacity: [0, 1, 0] } : {}}
            transition={{ delay: 1.6, duration: 0.8, repeat: Infinity, repeatDelay: 0.4 }}
            style={{ color: '#555', marginLeft: 2 }}
          >
            |
          </motion.span>
        </p>

        {/* Horizontal rule accent */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={bhReady ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeInOut' }}
          style={{
            width: 80,
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(255,140,40,0.5), transparent)',
            margin: '1.5rem auto 0',
            transformOrigin: 'center',
          }}
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={bhReady ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.7, duration: 0.6, ease: 'easeOut' }}
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            gap: '1.2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <motion.button
            onClick={onRequestAccess}
            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 16,
              letterSpacing: '0.1em',
              color: '#000',
              background: '#fff',
              padding: '22px 52px',
              textDecoration: 'none',
              borderRadius: 8,
              display: 'inline-block',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            Start building with Orbit
          </motion.button>
        </motion.div>
      </div>



      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, #000, transparent)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />
    </section>
  )
}
