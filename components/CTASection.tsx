'use client'

import { motion } from "framer-motion";

const CTASection = ({ onRequestAccess }: { onRequestAccess?: () => void }) => {
  return (
    <section id="cta" className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-at-c from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto font-light" style={{ fontFamily: 'var(--font-inconsolata)' }}>
            Join the elite circle of engineers architecting the AI-native era. <br />
            Get started with Orbit today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://orbit-night-sky-main.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white text-black font-bold rounded-lg uppercase text-sm tracking-widest hover:opacity-90 transition-opacity no-underline"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Start Building with Orbit
            </a>
            
            <button 
              onClick={onRequestAccess}
              className="px-12 py-5 border border-white/20 text-white font-bold rounded-lg uppercase text-sm tracking-widest hover:bg-white/5 transition-all"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Request Access
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
