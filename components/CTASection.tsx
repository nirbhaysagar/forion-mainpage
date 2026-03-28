'use client'

import { motion } from "framer-motion";

const CTASection = ({ onRequestAccess }: { onRequestAccess?: () => void }) => {
  return (
    <section id="cta" className="relative py-32 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-nebula-strong opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: 'rgba(255,255,255,0.025)' }} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label mb-8 block">Get Started</span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] mb-6 text-white text-center">
            Ship in <span className="font-serif-editorial italic font-medium opacity-50">hours</span>,
            <br />
            not weeks.
          </h2>

          <p className="text-lg mb-12 max-w-lg mx-auto leading-relaxed text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Join AI-native teams building real software on the Forion stack. From idea to working app in seconds. No scaffold. No boilerplate. No wasted momentum.
          </p>

          <div className="flex gap-6 justify-center flex-wrap items-center mt-8">
            <a
              href="https://orbit-night-sky-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-black font-bold rounded-sm uppercase text-[15px] tracking-widest hover:opacity-90 transition-all hover:scale-[1.05] active:scale-[0.98]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Start Building with Orbit
            </a>
            <a 
              href="#products" 
              className="px-12 py-5 border border-white/20 text-white font-bold rounded-sm uppercase text-[15px] tracking-widest hover:bg-white/5 transition-all hover:scale-[1.05]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Explore the Stack
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
