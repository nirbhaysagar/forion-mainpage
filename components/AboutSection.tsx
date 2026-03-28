'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VISION_IMAGE = "/about_workstation.png";
const HERO_IMAGE = "/about_hero.png";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-[80vh] text-white px-6 md:px-20 py-12 md:py-16 overflow-hidden">

      {/* Top editorial heading */}
      <div className="relative mb-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col gap-2 pointer-events-none"
        >
          <span className="section-label">01 // THE UNIVERSAL ENGINE</span>
          <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-none tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
            Software building <span className="italic font-light text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.2em' }}>software</span>.
            <br />
            <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 400 }}>
              The Universal Agent Ecosystem.
            </span>
          </h2>
        </motion.div>

        {/* Parallax image block */}
        <motion.div
          style={{ y: y1 }}
          className="relative md:absolute md:-right-12 md:top-48 w-full md:w-[48%] aspect-[16/9] z-0 opacity-60 pointer-events-none mt-8 md:mt-0"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel">
            <img
              src={HERO_IMAGE}
              alt="Forion Infrastructure"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative z-10 mt-32 md:mt-40 max-w-xl"
        >
          <p className="text-xl md:text-2xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-inconsolata)' }}>
            Forion is the operating system for AI-native development.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Today, building with AI means stitching together prompts, APIs, and tools that were never designed to work as a system. The result? Fragile workflows, scattered logic, and constant rewrites.
          </p>
        </motion.div>
      </div>

      {/* Middle statement */}
      <div className="max-w-[1400px] mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="section-heading max-w-4xl" style={{ fontFamily: 'var(--font-inconsolata)' }}>
            Forion changes that. A {' '}
            <span style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>
              unified system
            </span>
            {' '}where you can:
          </h3>
        </motion.div>

        <div className="mt-16 flex flex-col gap-16">
          <div className="text-base md:text-lg leading-relaxed max-w-xl flex flex-col gap-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-4">• Build AI applications visually with Orbit</li>
              <li className="flex items-start gap-4">• Run intelligent agents directly inside your GitHub repositories with Spark</li>
              <li className="flex items-start gap-4">• Move from idea to working system without losing structure</li>
            </ul>
            <p>
              No glue code. No fragmented workflows. Just a system designed for how AI software should be built.
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border group" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <video
              src="/about_promo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-75 transition-all duration-1000 group-hover:brightness-90"
            />
            <div className="absolute inset-0 transition-colors duration-700" style={{ background: 'rgba(0,0,0,0.35)' }} />
          </div>
        </div>
      </div>

      {/* Signature sign-off */}
      <div className="max-w-[1400px] mx-auto text-center py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-3xl md:text-5xl font-light leading-tight" style={{ color: 'rgba(255,255,255,0.85)' }}>
            The OS for AI-native development.
            <br />
            <span style={{ fontFamily: 'var(--font-inconsolata)', fontWeight: 300 }}>
              Build, run, and evolve AI systems — in one place.
            </span>
          </h4>
        </motion.div>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -z-10" style={{ background: 'rgba(255,255,255,0.02)', filter: 'blur(120px)' }} />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full -z-10" style={{ background: 'rgba(255,255,255,0.015)', filter: 'blur(100px)' }} />
    </section>
  );
};

export default AboutSection;

