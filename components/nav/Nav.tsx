'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUI } from '../providers/UIProvider'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const links = [
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
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
          top: 12,
          left: 24,
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          height: 'clamp(60px, 18vw, 96px)', 
        }}
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
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.5rem, 2vw, 2.5rem)',
          padding: '4px 16px', 
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
                fontFamily: 'var(--font-poppins)',
                fontSize: 13,
                letterSpacing: '0.05em',
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
          className="block"
          onClick={() => setModalOpen(true)}
          style={{
            fontFamily: 'var(--font-compta)',
            fontSize: 12,
            letterSpacing: '0.05em',
            color: '#000',
            background: '#f5f5f5',
            padding: '6px 16px', // Reduced padding
            borderRadius: 4,
            textDecoration: 'none',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.8')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
        >
          Start building with Orbit
        </button>
      </motion.nav>
    </>
  )
}
