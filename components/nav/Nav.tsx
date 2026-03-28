'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUI } from '../providers/UIProvider'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const links = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  const { setMenuOpen, setModalOpen } = useUI()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Left Screen Logo */}
      <Link
        href="/"
        style={{
          position: 'fixed',
          top: 24,
          left: 48,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          height: 'clamp(48px, 8vw, 96px)', // Responsive height
        }}
        className="left-6 md:left-12"
      >
        <img
          src="/main-logo.svg"
          alt="Forion Logo"
          style={{ height: '100%', width: 'auto', display: 'block' }}
        />
      </Link>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 5vw, 5.5rem)', // Responsive gap
          padding: 'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 48px)', // Responsive padding
          borderRadius: 999,
          transition: 'all 0.4s ease',
        }}
        className={`
          ${scrolled
            ? 'bg-black/70 backdrop-blur-xl border border-white/10'
            : 'md:bg-black/40 md:backdrop-blur-md md:border md:border-white/10 bg-black/20 backdrop-blur-sm border border-white/5'
          }
        `}
      >


        {/* Desktop links */}
        <div className="hidden lg:flex" style={{ gap: '3.5rem' }}>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-inconsolata)',
                fontSize: 16,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.45)')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="hidden lg:block"
          onClick={() => setModalOpen(true)}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 14,
            letterSpacing: '0.08em',
            color: '#000',
            background: '#f5f5f5',
            padding: '10px 24px',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.8')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
        >
          Start building with Orbit
        </button>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex"
          onClick={() => setMenuOpen(true)}
          style={{
            background: 'transparent',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            padding: 4,
          }}
        >
          <span style={{ display: 'block', width: 18, height: 1, background: '#888' }} />
          <span style={{ display: 'block', width: 18, height: 1, background: '#888' }} />
        </button>
      </motion.nav>

      <MobileMenu />
    </>
  )
}
