'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div style={{ opacity }} className="flex flex-col items-center text-center">
          <span className="section-label mb-8">01 // THE MANIFESTO</span>
          
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[1.1] mb-12 max-w-5xl text-white">
            Forion is the <span className="italic font-light text-white/90" style={{ fontFamily: 'var(--font-playfair)' }}>operating system</span> for <br className="hidden md:block" />
            AI-native development.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-left mt-12">
            <div className="flex flex-col gap-6">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                AI development today is fragmented — prompts, APIs, and glue code scattered across tools that don’t work together.
              </p>
              <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light italic" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                You don’t build systems. <br />
                You assemble pieces and hope they hold.
              </p>
            </div>

            <div className="flex flex-col gap-8 text-white">
              <p className="text-lg text-white/50 leading-relaxed">
                Forion replaces that with a unified system. Instead of stitching tools together, you design, run, and evolve AI software in one place. From idea to real system — without rebuilding everything.
              </p>

              <div className="flex flex-col gap-6 pt-4">
                {[
                  { title: "Build Visually", desc: "Craft AI applications with Orbit's visual engine." },
                  { title: "Run Anywhere", desc: "Deploy intelligent agents directly into your GitHub repos with Spark." },
                  { title: "Evolve Systems", desc: "Turn ideas into working software, not throwaway outputs." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 h-full bg-gradient-to-b from-white/20 to-transparent flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
