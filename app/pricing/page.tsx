'use client'

import { useUI } from '@/components/providers/UIProvider'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { motion } from 'framer-motion'
import { Check, HelpCircle } from 'lucide-react'

const plans = [
  { 
    name: "Personal", 
    price: "$0", 
    desc: "For individual tinkerers and open-source contributors.", 
    features: ["1 Active Project", "Public Agents", "Community Support", "Basic WebContainer Access", "Standard Build Speed"], 
    highlight: false,
    cta: "Start for free"
  },
  { 
    name: "Pro", 
    price: "$29", 
    desc: "For serious builders and independent engineers.", 
    features: ["Unlimited Projects", "Private Agents", "High Priority API", "Advanced WebContainer Access", "2x Build Speed", "Priority Support"], 
    highlight: true,
    cta: "Start Pro Trial"
  },
  { 
    name: "Team", 
    price: "$99", 
    desc: "For scaling startups and high-velocity teams.", 
    features: ["Team Collaboration", "Shared GPU Memory", "Custom Models", "Dedicated Infrastructure", "Unlimited WebContainer Access", "24/7 Priority Support"], 
    highlight: false,
    cta: "Contact Sales"
  }
];

const faqs = [
    { q: "What is an 'Active Project'?", a: "An active project is any Orbit application that is currently deployed and receiving traffic. You can have as many drafts as you like." },
    { q: "Can I move from Pro to Team later?", a: "Yes, you can upgrade or downgrade at any time. We'll prorate the difference for the remainder of your billing cycle." },
    { q: "Do you offer education discounts?", a: "Absolutely. Students and educators are eligible for Forion Pro at no cost. Contact our support team to verify your status." },
    { q: "Is my code secure on your infrastructure?", a: "We use hermetic sandboxing (WebContainers) and end-to-end encryption for all repository data. Your code never leaves our secure environment unless you export it." }
];

export default function PricingPage() {
  const { setModalOpen } = useUI()

  return (
    <SmoothScroll>
      <main className="bg-black min-h-screen relative">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="section-label mb-6 block">Transparent Pricing</span>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold tracking-tight leading-none mb-8 font-compta">
              SCALABLE <span className="italic font-light normal-case text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Infrastructure</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/40 font-light px-4">
              Choose the tier that matches your velocity. No hidden fees. No predictable surprises. Just the power to build.
            </p>
          </motion.div>

          {/* Background Decorations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.02] blur-[160px] rounded-full -z-10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>

        {/* Pricing Table Section */}
        <section className="py-24 px-6 md:px-20 relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative p-10 flex flex-col gap-8 rounded-3xl backdrop-blur-2xl transition-all duration-500
                      ${plan.highlight ? 'bg-white/[0.08] border border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.08)] lg:scale-105 py-14 z-20' : 'bg-white/[0.03] border border-white/5 hover:border-white/10 z-10'}`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl">
                    Recommended for Builders
                  </div>
                )}

                <div>
                  <h4 className="text-2xl font-bold uppercase tracking-wider font-compta text-white/90">{plan.name}</h4>
                  <div className="text-6xl font-light tracking-tighter mt-6 text-white font-compta flex items-baseline gap-2">
                    {plan.price}
                    <span className="text-lg font-normal text-white/30 font-poppins tracking-normal">/mo</span>
                  </div>
                  <p className="text-sm text-white/40 mt-4 leading-relaxed font-poppins">{plan.desc}</p>
                </div>

                <div className="flex flex-col gap-6 pt-10 border-t border-white/10 flex-grow">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Everything in {i > 0 ? plans[i-1].name : 'base'}:</span>
                  <ul className="flex flex-col gap-4">
                    {plan.features.map((f, j) => (
                      <li key={j} className="text-sm text-white/60 flex items-start gap-3 font-poppins">
                        <Check size={16} className={`mt-0.5 ${plan.highlight ? 'text-white' : 'text-white/30'}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className={`mt-8 w-full py-5 rounded-xl transition-all font-compta font-bold uppercase text-[11px] tracking-[0.25em] text-center
                        ${plan.highlight 
                            ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]' 
                            : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'}`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-6 md:px-20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="text-center mb-16">
            <span className="section-label mb-6 block">Frequently Asked</span>
            <h2 className="text-4xl md:text-5xl font-bold font-compta">Common <span className="italic font-light opacity-50">Questions</span></h2>
          </div>

          <div className="grid gap-12">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/30">
                    <HelpCircle size={20} />
                </div>
                <div>
                    <h3 className="text-lg font-bold font-compta text-white/90 mb-3">{faq.q}</h3>
                    <p className="text-white/40 font-poppins leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-32 px-6 text-center relative">
            <div className="absolute inset-0 bg-radial-at-c from-white/[0.03] to-transparent pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-compta font-bold mb-10 max-w-2xl mx-auto">Still have <span className="italic font-light opacity-50">specific</span> requirements?</h2>
            <p className="text-white/40 mb-12 font-poppins max-w-lg mx-auto">We offer custom enterprise solutions for teams of 50+ engineers with dedicated support and on-prem deployment options.</p>
            <button
                onClick={() => setModalOpen(true)}
                className="px-12 py-5 border border-white/20 text-white font-compta font-bold uppercase text-[12px] tracking-widest rounded-full hover:bg-white/5 transition-colors"
            >
                Talk to Sales
            </button>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
