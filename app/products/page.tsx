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
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tight leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-poppins)' }}>
              The <span className="italic font-light text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2em' }}>Forion</span> Ecosystem
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-3xl text-white/80 leading-relaxed font-light" style={{ fontFamily: 'var(--font-inconsolata)' }}>
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

        {/* Premium Pricing Section */}
        <section id="pricing" className="py-32 px-6 md:px-20 relative mt-24 flex flex-col items-center">
          {/* Ambient background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none border-y border-white/5 -z-10" />

          <div className="max-w-7xl w-full mx-auto text-center relative z-10">
            <span className="section-label mb-6 block">Infrastructure Tiers</span>
            <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight leading-none mb-6">
              <span className="uppercase" style={{ fontFamily: 'var(--font-poppins)' }}>Scalable</span>{' '}
              <span className="italic font-light normal-case text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" style={{ fontFamily: 'var(--font-cormorant)' }}>Pricing</span>
            </h2>
            <p className="text-white/40 mb-20 text-lg">Join the early adopter wave at developer-friendly rates.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 text-left items-center">
              {[
                { name: "Personal", price: "$0", desc: "For individual tinkerers", features: ["1 Project", "Public Agents", "Community Support"], highlight: false },
                { name: "Pro", price: "$29", desc: "For serious builders", features: ["Unlimited Projects", "Private Agents", "High Priority API"], highlight: true },
                { name: "Team", price: "$99", desc: "For scaling startups", features: ["Team Collaboration", "Shared GPU Memory", "Custom Models"], highlight: false }
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative p-8 flex flex-col gap-8 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2
                        ${plan.highlight ? 'bg-white/10 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.1)] lg:scale-105 py-12 z-20' : 'bg-black/40 border border-white/10 hover:border-white/20 z-10'}`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h4 className="text-2xl font-bold uppercase tracking-wider" style={{ fontFamily: 'var(--font-bebas-neue)' }}>{plan.name}</h4>
                    <div className="text-5xl font-light tracking-tighter mt-4 text-white drop-shadow-sm" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                      {plan.price}<span className="text-lg font-normal text-white/30 font-sans tracking-normal">/mo</span>
                    </div>
                    <p className="text-sm text-white/50 mt-3">{plan.desc}</p>
                  </div>

                  <ul className="flex flex-col gap-4 border-t border-white/10 pt-8 flex-grow">
                    {plan.features.map((f, j) => (
                      <li key={j} className="text-sm text-white/70 flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-white/20'}`} /> {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setModalOpen(true)}
                    className={`mt-4 w-full py-4 rounded-lg transition-colors text-xs uppercase font-bold tracking-widest text-center
                          ${plan.highlight ? 'bg-white text-black hover:bg-white/90 shadow-xl' : 'border border-white/20 hover:bg-white/10 text-white'}`}
                    style={{ fontFamily: 'var(--font-inconsolata)' }}
                  >
                    Request Access
                  </button>
                </div>
              ))}
            </div>
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
