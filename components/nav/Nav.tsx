'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

import Link from 'next/link'

const links = [
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Docs', href: '/docs' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav({ onRequestAccess }: { onRequestAccess?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
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
          height: '96px', // Doubled size based on user request
        }}
      >
        <img 
          src="/ADARSH%20LOGO-01.png" 
          alt="Adarsh Logo" 
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
          gap: '5.5rem',
          padding: '16px 48px',
          borderRadius: 999,
          background: scrolled ? 'rgba(0,0,0,0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          border: scrolled ? '1px solid #1a1a1a' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >


        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: '3.5rem' }}>
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
          className="hidden md:block"
          onClick={onRequestAccess}
          style={{
            fontFamily: 'var(--font-inconsolata)',
            fontSize: 15,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#000',
            background: '#f5f5f5',
            padding: '12px 28px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 600,
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.8')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
        >
          Request Access
        </button>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
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

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onRequestAccess={onRequestAccess} />
    </>
  )
}
