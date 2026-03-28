'use client'

import { Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white pt-24 pb-8 px-6 md:px-12 overflow-hidden" style={{ background: '#000' }}>
      <div className="mx-auto max-w-7xl">
        {/* Top row: brand + nav cols */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

          {/* Brand + newsletter */}
          <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Products */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-jetbrains)' }}>Platform</span>
              <div className="flex flex-col gap-4">
                {[
                  { l: "Orbit Builder", h: "https://orbit-night-sky-main.vercel.app/", external: true },
                  { l: "Spark Agents", h: "https://spark.forgje.com/", external: true },
                  { l: "AgentTrace", h: "/products#agenttrace", external: false },
                  { l: "Pricing", h: "/products#pricing", external: false },
                ].map(item => (
                  item.external ? (
                    <a key={item.l} href={item.h} target="_blank" rel="noopener noreferrer" className="text-[17px] hover:text-white transition-colors tracking-tight no-underline" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inconsolata)' }}>{item.l}</a>
                  ) : (
                    <Link key={item.l} href={item.h} className="text-[17px] hover:text-white transition-colors tracking-tight" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inconsolata)' }}>{item.l}</Link>
                  )
                ))}
              </div>
            </div>

            {/* Developers */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-jetbrains)' }}>Developers</span>
              <div className="flex flex-col gap-4">
                {[
                  { l: "Documentation", h: "/docs", external: false },
                  { l: "API Reference", h: "/docs#api", external: false },
                  { l: "GitHub", h: "https://github.com/forgje", external: true },
                  { l: "Status", h: "https://status.forion.dev", external: true },
                ].map(item => (
                  item.external ? (
                    <a key={item.l} href={item.h} target="_blank" rel="noopener noreferrer" className="text-[17px] hover:text-white transition-colors tracking-tight no-underline" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inconsolata)' }}>{item.l}</a>
                  ) : (
                    <Link key={item.l} href={item.h} className="text-[17px] hover:text-white transition-colors tracking-tight" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inconsolata)' }}>{item.l}</Link>
                  )
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.5em]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-jetbrains)' }}>Company</span>
              <div className="flex flex-col gap-4">
                {[
                  { l: "About", h: "/about", external: false },
                  { l: "Careers", h: "/about#careers", external: false },
                  { l: "Blog", h: "/blog", external: false },
                  { l: "Contact", h: "mailto:hello@forion.dev", external: true },
                ].map(item => (
                  item.external ? (
                    <a key={item.l} href={item.h} target="_blank" rel="noopener noreferrer" className="text-[17px] hover:text-white transition-colors tracking-tight no-underline" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inconsolata)' }}>{item.l}</a>
                  ) : (
                    <Link key={item.l} href={item.h} className="text-[17px] hover:text-white transition-colors tracking-tight" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-inconsolata)' }}>{item.l}</Link>
                  )
                ))}
              </div>
            </div>

            {/* Brand + Newsletter */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <img src="/main-logo.svg" alt="Forion Logo" style={{ height: '42px', width: 'auto', marginBottom: '8px' }} />
                <p className="text-[15px] leading-relaxed max-w-[280px]" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-inconsolata)' }}>
                  Forion is the operating system for building AI-native applications.
                </p>
              </div>
              <div className="flex gap-3">
                {[
                  { i: Twitter, h: "https://twitter.com/forion" },
                  { i: Instagram, h: "https://instagram.com/forion" },
                  { i: Mail, h: "mailto:hello@forion.dev" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.h}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    <social.i className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Typographic signature */}
        <div className="footer-brand-text select-none pointer-events-none" aria-hidden="true">
          forion
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-12 order-2 sm:order-1">
            <Link href="/privacy" className="text-[11px] uppercase tracking-[0.5em] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-jetbrains)' }}>Privacy</Link>
            <Link href="/terms" className="text-[11px] uppercase tracking-[0.5em] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-jetbrains)' }}>Terms</Link>
          </div>
          <span className="text-[11px] uppercase tracking-[0.4em] order-1 sm:order-2" style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-jetbrains)' }}>© 2026 Forion Systems</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
