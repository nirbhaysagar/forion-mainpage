'use client'

import { Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white pt-12 md:pt-20 pb-8 px-6 md:px-12 overflow-hidden" style={{ background: '#000' }}>
      <div className="mx-auto max-w-7xl">
        {/* Top row: brand + nav cols */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 pb-8 md:pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            
            {/* Brand + Newsletter */}
            <div className="flex flex-col gap-8 lg:w-[40%] text-left">
              <div>
                <Image src="/main-logo.svg" alt="Forion Logo" width={120} height={32} style={{ height: '32px', width: 'auto', marginBottom: '12px' }} unoptimized />
                <p className="mt-4 text-sm leading-relaxed max-w-[280px] text-white/40">
                  Forion is the operating system for building AI-native applications.
                </p>
              </div>
              <div className="flex gap-4">
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
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black border border-white/10 text-white/50"
                  >
                    <social.i className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav Cols */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 lg:gap-x-20 lg:w-[60%]">
              {/* Platform */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Platform</span>
                <div className="flex flex-col gap-4">
                  {[
                    { l: "Orbit Builder", h: "https://orbit.forion.dev/" },
                    { l: "Spark Agents", h: "https://spark.forgje.com/" },
                    { l: "Pricing", h: "/pricing" },
                  ].map(item => (
                    <Link 
                      key={item.l} 
                      href={item.h}
                      target={item.h.startsWith('http') || item.h.startsWith('mailto') ? "_blank" : undefined}
                      rel={item.h.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium hover:text-white transition-colors tracking-tight text-white/50"
                    >
                      {item.l}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Developers */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Developers</span>
                <div className="flex flex-col gap-4">
                  {[
                    { l: "Documentation", h: "/docs" },
                    { l: "API Reference", h: "/docs#api" },
                    { l: "GitHub", h: "https://github.com/forgje" },
                    { l: "Status", h: "https://status.forion.dev" },
                  ].map(item => (
                    <Link 
                      key={item.l} 
                      href={item.h}
                      target={item.h.startsWith('http') || item.h.startsWith('mailto') ? "_blank" : undefined}
                      rel={item.h.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium hover:text-white transition-colors tracking-tight text-white/50"
                    >
                      {item.l}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Company</span>
                <div className="flex flex-col gap-4">
                  {[
                    { l: "About", h: "/about" },
                    { l: "Careers", h: "/about#careers" },
                    { l: "Blog", h: "/blog" },
                    { l: "Contact", h: "mailto:hello@forion.dev" },
                  ].map(item => (
                    <Link 
                      key={item.l} 
                      href={item.h}
                      target={item.h.startsWith('http') || item.h.startsWith('mailto') ? "_blank" : undefined}
                      rel={item.h.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium hover:text-white transition-colors tracking-tight text-white/50"
                    >
                      {item.l}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
