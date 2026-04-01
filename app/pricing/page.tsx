'use client'

import { useState } from 'react'
import { useUI } from '@/components/providers/UIProvider'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, HelpCircle, ChevronDown } from 'lucide-react'

const proOptions = [
  { credits: 100, price: 20 },
  { credits: 250, price: 45 },
  { credits: 500, price: 80 },
  { credits: 1000, price: 150 }
];

const plans = [
  { 
    name: "Pro", 
    price: "$20", 
    period: "/mo",
    desc: "For independent engineers and high-velocity builders.", 
    features: ["{DYNAMIC} Credits monthly", "Unlimited Projects", "Private Agents", "High Priority API", "Advanced WebContainer Access", "Priority Support"], 
    highlight: true,
    cta: "Start Pro Trial",
    badge: "Most Popular",
    testimonial: {
      text: "The perfect balance of power and speed.",
      name: "Sahil Bloom",
      role: "Founder",
      avatar: "SB"
    }
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    period: "Contact Us",
    desc: "For scaling startups requiring dedicated infrastructure and elite support.", 
    features: ["Unlimited Credits", "Dedicated Infrastructure", "On-Prem Deployment", "Custom Models", "SSO & SAML", "24/7 Concierge Support"], 
    highlight: false,
    cta: "Talk to Sales",
    badge: "Startup Ready",
    testimonial: {
      text: "Elite support for mission-critical apps.",
      name: "Ashley Wilson",
      role: "COO",
      avatar: "AW"
    }
  },
  { 
    name: "Unified", 
    price: "Coming Soon", 
    period: "Early Access",
    desc: "The complete Forion ecosystem. Seamlessly integrated across all our power tools.", 
    features: ["Orbit (Builder)", "Spark (Agents)", "Forion IDE (Dev)", "Global Mesh Network", "Unified State Management", "Early Access to Beta"], 
    highlight: false,
    cta: "Join Waitlist",
    badge: "Coming Soon",
    testimonial: {
      text: "The future of the development stack.",
      name: "Marc Lou",
      role: "Maker",
      avatar: "ML"
    }
  }
];

const faqs = [
    { q: "What are 'Credits' used for?", a: "Credits power your AI agent interactions and automated build cycles. 100 credits typically cover a standard month of high-velocity development." },
    { q: "Can I move from Pro to Enterprise later?", a: "Yes, you can upgrade at any time. Our team will help migrate your data and infrastructure seamlessly." },
    { q: "Which products are in the Unified plan?", a: "The Unified plan grants full access to Orbit, Spark, and the Forion IDE, with a shared credit pool and integrated workspace." },
    { q: "Is there a limit on credits for Enterprise?", a: "Enterprise plans feature custom credit allocations tailored to your team's specific throughput and growth trajectory." }
];

export default function PricingPage() {
  const { setModalOpen } = useUI()
  const [selectedProIndex, setSelectedProIndex] = useState(0)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <SmoothScroll>
      <main className="bg-black min-h-screen relative pt-32 pb-16 text-white">
        {/* Hero Section */}
        <section className="px-6 md:px-20 mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <span className="text-[8px] uppercase tracking-[0.6em] text-white/30 mb-4 block font-poppins font-bold">Transparent Ecosystem</span>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight leading-[0.8] font-google-sans text-white">
              Plans &{' '}
              <span className="text-white/20">Pricing</span>
            </h1>
          </motion.div>
          
          <div className="absolute bottom-[-1.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>

        {/* Pricing Table Section */}
        <section className="py-12 px-6 md:px-20 relative">
          <div className="max-w-7xl mx-auto">
            {/* Top Row: Two Vertical Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch mb-5">
            {plans.slice(0, 2).map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                layout
                className={`group relative p-6 md:p-8 flex flex-col gap-6 rounded-[1.5rem] transition-all duration-500 overflow-visible
                      backdrop-blur-xl border border-white/10
                      ${i === 0 
                        ? 'bg-gradient-to-br from-purple-500/10 via-white/[0.03] to-transparent shadow-[0_0_50px_rgba(168,85,247,0.1)] z-30' 
                        : 'bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_0_50px_rgba(255,255,255,0.02)] z-20'}`}
              >
                {/* Card Header */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest bg-white/5 text-white/40 border border-white/5">
                      {plan.name}
                    </span>
                    <span className={`text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-tighter
                          ${i === 0 ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`}>
                      {plan.badge}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl font-bold font-google-sans tracking-tight text-white">{plan.name}</h2>
                    <p className="text-base leading-relaxed max-w-sm font-poppins text-white/40">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-baseline gap-2">
                       <motion.span 
                         key={i === 0 ? proOptions[selectedProIndex].price : plan.price}
                         initial={{ opacity: 0, y: -10 }}
                         animate={{ opacity: 1, y: 0 }}
                         className={`font-bold font-google-sans text-white ${plan.price.length > 4 ? 'text-3xl' : 'text-4xl'}`}>
                         {i === 0 ? `$${proOptions[selectedProIndex].price}` : plan.price}
                       </motion.span>
                       <span className="text-xs font-medium text-white/20">{plan.period}</span>
                    </div>

                    {/* Pro Credit Multiplier Selector (Dropdown) */}
                    {i === 0 && (
                      <div className="relative mt-2">
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full flex items-center justify-between px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white/60 hover:bg-white/10 transition-colors uppercase tracking-widest font-bold"
                        >
                          {proOptions[selectedProIndex].credits} Credits
                          <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-black border border-white/10 rounded-lg overflow-hidden z-50 shadow-2xl backdrop-blur-3xl"
                            >
                              {proOptions.map((opt, idx) => (
                                <button
                                  key={opt.credits}
                                  onClick={() => {
                                    setSelectedProIndex(idx);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full px-4 py-3 text-left text-[10px] uppercase font-bold tracking-widest border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors
                                        ${selectedProIndex === idx ? 'text-purple-400 bg-purple-500/10' : 'text-white/40'}`}
                                >
                                  {opt.credits} Credits // ${opt.price}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    <button
                      onClick={() => setModalOpen(true)}
                      className={`mt-2 px-8 py-3.5 rounded-full font-bold uppercase text-[9px] tracking-widest transition-all
                            ${i === 0 
                              ? 'bg-white text-black hover:bg-neutral-100 shadow-[0_10px_30px_rgba(255,255,255,0.1)]' 
                              : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </div>

                {/* Testimonial Bubble */}
                {plan.testimonial && (
                  <div className="mt-auto p-5 rounded-xl border border-white/5 bg-white/[0.02] flex items-center gap-3 transition-all duration-700 group-hover:-translate-y-1">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-[10px] bg-white/10 text-white">
                      {plan.testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-[10px] italic mb-0.5 text-white/40 leading-tight">"{plan.testimonial.text}"</p>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-white/90">{plan.testimonial.name}</p>
                    </div>
                  </div>
                )}

                {/* Features Divider */}
                <div className="h-px w-full bg-white/5" />

                {/* Features Grid (2 Columns) */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-[11px] flex items-center gap-2 font-medium text-white/30">
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <motion.span
                        key={i === 0 && j === 0 ? selectedProIndex : 'static'}
                        initial={i === 0 && j === 0 ? { opacity: 0 } : false}
                        animate={{ opacity: 1 }}
                      >
                        {i === 0 && j === 0 ? `${proOptions[selectedProIndex].credits} Credits monthly` : feature}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: Horizontal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl rounded-[1.5rem] p-5 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.05)] overflow-hidden relative group"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10 text-white">
              <div className="max-w-xl">
                 <div className="flex items-center gap-4 mb-3">
                    <span className="text-lg font-bold font-google-sans uppercase tracking-wider text-white">Ecosystem // {plans[2].name}</span>
                    <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-[8px] font-bold uppercase rounded-full border border-cyan-500/30">
                       {plans[2].badge}
                    </span>
                 </div>
                 <h2 className="text-2xl md:text-3xl font-bold font-google-sans leading-tight mb-3 text-white">
                    One unified workspace<br />
                    <span className="text-white/20 font-light">for all Forion products.</span>
                 </h2>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mt-5">
                    {plans[2].features.map((f, i) => (
                       <li key={i} className="flex items-center gap-3 text-[11px] text-white/40 font-medium">
                          <Check size={12} className={`text-cyan-500/50 ${f.includes('Orbit') || f.includes('Spark') || f.includes('IDE') ? 'text-purple-400' : ''}`} />
                          {f}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="flex flex-col items-start lg:items-end gap-4 min-w-[200px]">
                 <div className="flex flex-col lg:items-end">
                    <span className="text-2xl font-bold font-google-sans tracking-tight text-white/50">{plans[2].price}</span>
                    <span className="text-[10px] font-medium text-white/20 uppercase tracking-widest">{plans[2].period}</span>
                 </div>
                 <button
                   onClick={() => setModalOpen(true)}
                   className="w-full lg:w-fit px-8 py-3.5 bg-white/5 border border-white/10 text-white/40 font-bold rounded-full uppercase text-[9px] tracking-[0.3em] hover:bg-white/10 transition-all cursor-not-allowed"
                   disabled
                 >
                    {plans[2].cta}
                 </button>
              </div>
            </div>
          </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-6 md:px-20 max-w-4xl mx-auto relative overflow-hidden">
          <div className="text-center mb-10">
            <span className="section-label mb-3 block border-white/10 text-white/30">Frequently Asked</span>
            <h2 className="text-2xl md:text-3xl font-bold font-google-sans text-white">Common <span className="italic font-light opacity-30">Questions</span></h2>
          </div>

          <div className="grid gap-8 text-white">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-5 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-white/30">
                    <HelpCircle size={16} />
                </div>
                <div>
                    <h3 className="text-sm font-bold font-google-sans text-white/90 mb-1.5">{faq.q}</h3>
                    <p className="text-white/40 font-poppins text-xs leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 px-6 text-center relative">
            <div className="absolute inset-0 bg-radial-at-c from-white/[0.03] to-transparent pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-google-sans font-bold mb-6 max-w-2xl mx-auto text-white">Still have <span className="italic font-light opacity-30">specific</span> requirements?</h2>
            <p className="text-white/40 mb-8 font-poppins max-w-lg mx-auto leading-relaxed text-sm">We offer custom enterprise solutions for teams of 50+ engineers with dedicated support and on-prem deployment options.</p>
            <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 border border-white/20 text-white font-google-sans font-bold uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-white/5 transition-colors"
            >
                Talk to Sales
            </button>
        </section>

        <Footer />
      </main>
    </SmoothScroll>
  )
}
