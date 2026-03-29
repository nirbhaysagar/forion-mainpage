'use client'

import { Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white pt-24 pb-8 px-6 md:px-12 overflow-hidden" style={{ background: '#000' }}>
      <div className="mx-auto max-w-7xl">
        {/* Top row: brand + nav cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 pb-16" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Products */}
            <div className="flex flex-col gap-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Platform</span>
              <div className="flex flex-col gap-3">
                {[
                  { l: "Orbit Builder", h: "https://orbit.forion.dev/" },
                  { l: "Spark Agents", h: "https://spark.forgje.com/" },
                  { l: "Pricing", h: "/pricing" },
                ].map(item => (
                  <Link key={item.l} href={item.h} className="text-sm hover:text-white transition-colors tracking-tight text-white/45">{item.l}</Link>
                ))}
              </div>
            </div>

            {/* Developers */}
            <div className="flex flex-col gap-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Developers</span>
              <div className="flex flex-col gap-3">
                {[
                  { l: "Documentation", h: "/docs" },
                  { l: "API Reference", h: "/docs#api" },
                  { l: "GitHub", h: "https://github.com/forgje" },
                  { l: "Status", h: "https://status.forion.dev" },
                ].map(item => (
                  <Link key={item.l} href={item.h} className="text-sm hover:text-white transition-colors tracking-tight text-white/45">{item.l}</Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-5">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">Company</span>
              <div className="flex flex-col gap-3">
                {[
                  { l: "About", h: "/about" },
                  { l: "Careers", h: "/about#careers" },
                  { l: "Blog", h: "/blog" },
                  { l: "Contact", h: "mailto:hello@forion.dev" },
                ].map(item => (
                  <Link key={item.l} href={item.h} className="text-sm hover:text-white transition-colors tracking-tight text-white/45">{item.l}</Link>
                ))}
              </div>
            </div>

            {/* Brand + Newsletter - Move to first or last col depending on layout */}
            <div className="flex flex-col gap-8 order-first">
              <div>
                <img src="/main-logo.svg" alt="Forion Logo" style={{ height: '32px', width: 'auto', marginBottom: '12px' }} />
                <p className="mt-3 text-xs leading-relaxed max-w-[240px] text-white/35">
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
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)' }}
                  >
                    <social.i className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
        </div>

        {/* Typographic signature */}
        <div className="font-compta footer-brand-text select-none pointer-events-none" aria-hidden="true">
          forion
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-8 order-2 sm:order-1">
            <Link href="/privacy" className="text-[9px] uppercase tracking-[0.4em] hover:text-white transition-colors text-white/20">Privacy</Link>
            <Link href="/terms" className="text-[9px] uppercase tracking-[0.4em] hover:text-white transition-colors text-white/20">Terms</Link>
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] order-1 sm:order-2 text-white/20">© 2026 Forion Systems</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
