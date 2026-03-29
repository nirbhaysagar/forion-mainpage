'use client'

import { useUI } from '@/components/providers/UIProvider'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ProductsPage() {
  const { setModalOpen } = useUI()

  return (
    <SmoothScroll>
      <main style={{ background: 'transparent', position: 'relative' }}>

        {/* Products Hero */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center z-10"
          >
            <span className="section-label mb-6 block">Our Ecosystem</span>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tight leading-[1.1] mb-8 font-compta">
              The <span className="italic font-light text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Forion</span> Ecosystem
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-3xl text-white/80 leading-relaxed font-light">
              Architect The Impossible.
            </p>
          </motion.div>

          {/* Ambient background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[160px] rounded-full -z-10" />
        </section>

        {/* Product Cards Section */}
        <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col gap-32">
          {/* Orbit Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div>
                <span className="text-purple-400 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Deployment Engine</span>
                <h2 className="text-5xl font-bold tracking-tighter mb-6">Orbit</h2>
                <p className="text-lg text-white/50 leading-relaxed">
                  Turn a single prompt into a fully hosted, scalable web application. Orbit handles the provisioning, the CI/CD, and the global edge deployment so you can focus on the logic.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {[
                  "Prompt-to-Product Workflow",
                  "Instant Staging Environments",
                  "Editable Source with Hot Module Reload",
                  "Global Edge Caching"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-purple-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="https://orbit.forion.dev/" target="_blank" rel="noopener noreferrer" className="w-fit px-8 py-4 bg-white text-black font-bold rounded-lg uppercase text-[11px] tracking-widest hover:opacity-90 transition-opacity">
                Explore Orbit
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/5 aspect-video"
            >
              <img src="/WhatsApp Image 2026-03-20 at 22.45.00.jpeg" alt="Orbit UI" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>
          </div>

          {/* Spark Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video"
            >
              <img src="/WhatsApp Image 2026-03-20 at 22.47.49.jpeg" alt="Spark Agent UI" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 flex flex-col gap-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-amber-400 font-mono text-[10px] uppercase tracking-[0.4em] block">Autonomous Intelligence</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[9px] uppercase tracking-widest font-bold">Coming Soon</span>
                </div>
                <h2 className="text-5xl font-bold tracking-tighter mb-6">Spark</h2>
                <p className="text-lg text-white/50 leading-relaxed">
                  The first autonomous coding agent that integrates directly into your existing codebase. Spark identifies bugs, suggests refactors, and implements complex features while you sleep.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {[
                  "Multi-Agent Orchestration",
                  "Direct GitHub Write Access",
                  "Context-Aware RAG Engine",
                  "Real-time Verification Loop"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-amber-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>



        {/* Documentation Peek */}
        <section className="py-32 px-6 md:px-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Need the docs?</h2>
            <p className="text-white/50 mb-10 leading-relaxed font-light">
              Deep-dive into our API, SDKs, and workflow guides. Built by engineers, for engineers.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/docs" className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 rounded-lg text-xs uppercase font-bold tracking-widest transition-all">
                Documentation Hub
              </a>
              <a href="/docs#api" className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 rounded-lg text-xs uppercase font-bold tracking-widest transition-all">
                API Reference
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
