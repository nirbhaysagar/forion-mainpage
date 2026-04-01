'use client'

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  // Primary Products
  { name: "Orbit", x: -400, y: -200, label: "Frontend", color: "#FFFFFF", summary: "Transforms prompts into production-ready web applications rendered live without boilerplate." },
  { name: "Spark", x: 400, y: -200, label: "Execution", color: "#FF9900", summary: "Autonomous coding engine that integrates natively to review and execute across your codebase." },

  // Core Capabilities
  { name: "Auto-Heal", x: -480, y: 90, label: "Reliability", color: "#26D07C", summary: "Self-correcting build loops that dynamically diagnose and resolve complex compilation errors." },
  { name: "Surgical Patch", x: 480, y: 90, label: "Efficiency", color: "#FFD21E", summary: "Context-aware differential logic that only alters necessary code lines, preserving momentum." },
  { name: "Planner", x: 0, y: -300, label: "Reasoning", color: "#FFFFFF", summary: "Generates robust architectural maps before execution to ensure large-scale codebase integrity." },

  // Infrastructure
  { name: "IDE", x: -270, y: 290, label: "Environment", color: "#4078c0", summary: "A highly unified development workspace engineered for seamless agent-human collaboration." },
  { name: "OS Core", x: 270, y: 290, label: "Infrastructure", color: "#D97757", summary: "The underlying infrastructure and compute platform powering all Forion applications globally." },
];

const getLogo = (name: string, color: string) => {
  switch (name) {
    case "Orbit":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" /><circle cx="12" cy="12" r="4" fill={color} /></svg>;
    case "Spark":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} /></svg>;

    case "Auto-Heal":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={color} /></svg>;
    case "Surgical Patch":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" /><path d="M9 12h6M12 9v6" stroke={color} strokeWidth="2" /></svg>;
    case "Planner":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M3 3h18v18H3V3zM9 3v18M15 3v18M3 9h18M3 15h18" stroke={color} strokeWidth="1" /></svg>;
    case "IDE":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "OS Core":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="4" y="4" width="16" height="16" rx="2" stroke={color} strokeWidth="2" /><circle cx="12" cy="12" r="3" fill={color} /></svg>;
    default:
      return <div className="w-4 h-4 rounded-sm bg-white/20 group-hover:bg-white transition-colors" />;
  }
};

const IntegrationNode = ({ node, index, scrollYProgress }: { node: any, index: number, scrollYProgress: any }) => {
  // Synchronized Reveal: All nodes finish appearing by 0.45 scroll progress
  const revealStart = 0.1 + (index * 0.03);
  const opacity = useTransform(scrollYProgress, [revealStart, revealStart + 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [revealStart, revealStart + 0.1], [0.8, 1]);
  const yOffset = useTransform(scrollYProgress, [revealStart, revealStart + 0.1], [20, 0]);

  return (
    <motion.div
      style={{
        left: `calc(50% + ${(node.x / 1200) * 100}%)`,
        top: `calc(50% + ${(node.y / 1000) * 100}%)`,
        opacity,
        scale,
        y: yOffset
      }}
      className="absolute z-20"
    >
      <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <motion.div
        animate={{
          boxShadow: [
            `0 0 15px ${node.color}33`,
            `0 0 30px ${node.color}66`,
            `0 0 15px ${node.color}33`
          ],
          borderColor: [
            `${node.color}40`,
            `${node.color}80`,
            `${node.color}40`
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        className={`glass-card-strong px-5 py-3 flex items-center gap-2 group backdrop-blur-2xl border transition-all duration-500 w-fit max-w-[200px] hover:max-w-[350px] overflow-hidden`}
        style={{ '--hover-color': node.color, border: `1px solid ${node.color}40` } as any}
      >
        <div className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:border-[var(--hover-color)]/50 shrink-0">
          {getLogo(node.name, node.color)}
        </div>
        <div className="flex flex-col min-w-0">
          <span className="block text-[8px] text-white/40 uppercase tracking-[0.5em] font-poppins mb-0.5 group-hover:text-[var(--hover-color)]/60 transition-colors whitespace-nowrap">
            {node.label}
          </span>
          <h4 className="text-[12px] font-bold text-white tracking-tight group-hover:text-white transition-colors whitespace-nowrap">
            {node.name}
          </h4>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
            <div className="overflow-hidden">
              <p className="text-[10px] text-white/50 pt-2 pb-1 max-w-[220px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-poppins">
                {node.summary}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </motion.div>
  );
};

const Vine = ({ endX, endY, index, scrollYProgress, color }: { endX: number, endY: number, index: number, scrollYProgress: any, color: string }) => {
  const cp1x = endX === 0 ? 30 : endX * 0.2;
  const cp1y = endY * 0.8;
  const cp2x = endX === 0 ? -30 : endX * 0.6;
  const cp2y = endY * 0.2;

  // Slightly overshoot to ensure the line enters the card behind its glass background
  const targetX = endX * 1.02;
  const targetY = endY * 1.02;

  const path = `M 0 0 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${targetX} ${targetY}`;

  // Synchronized Connection: All vines finish drawing by 0.4 scroll progress
  const pathLength = useTransform(scrollYProgress, [0.05, 0.2 + (index * 0.02)], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 0.2]);

  return (
    <g>
      {/* Base Path */}
      <motion.path
        d={path}
        fill="transparent"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ pathLength, opacity: 0.3 }}
      />
      {/* Glow Path */}
      <motion.path
        d={path}
        fill="transparent"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ pathLength, opacity: useTransform(opacity, (o: number) => o * 0.2) }}
        className="blur-[2px]"
      />
      {/* Travel Pulse */}
      <motion.path
        d={path}
        fill="transparent"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0.15, pathOffset: 0 }}
        animate={{ pathOffset: [0, 1] }}
        transition={{
          duration: 3 + (index % 3) * 0.5,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.3
        }}
        style={{ 
          opacity: useTransform(opacity, (o: number) => o > 0.05 ? 0.6 : 0)
        }}
      />
    </g>
  );
};

const EcosystemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate scale factor for mobile responsiveness
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScale(Math.min(width / 1200, 0.4)); // Even more aggressive scaling for small phones
      } else if (width < 1024) {
        setScale(width / 1400);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-8 md:pt-12 pb-8 md:pb-12 px-6 overflow-hidden bg-transparent">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.1] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-white/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl relative flex flex-col items-center">
        {/* Section Context Labels - Now in normal flow to sit above the network */}
        <div className="flex flex-col items-center text-center z-40 mb-16 md:mb-24 pointer-events-none">
          <span className="section-label">02 // THE ENGINE</span>
          <h2 className="section-heading max-w-4xl px-6">
            One universal engine for <span className="font-serif-editorial italic font-medium opacity-50">AI-native software</span>.
          </h2>
        </div>

        <div className="relative w-full md:min-h-[700px] flex flex-col md:flex-row items-center justify-center">

          {/* Central Hub Area */}
          <div className="relative z-30 w-full py-12 md:py-0 md:h-full flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center group pointer-events-auto"
              >
                {/* Volumetric Glow Hub */}
                <div className="relative px-6 py-6 md:px-12 md:py-10 flex flex-col items-center justify-center border border-white/20 bg-transparent rounded-2xl md:rounded-3xl overflow-hidden
                            shadow-[0_0_80px_rgba(255,255,255,0.03),_inset_0_0_30px_rgba(255,255,255,0.02)]
                            transition-all duration-1000 group-hover:border-white/40 max-w-[90vw]">
                  {/* Internal Light Source */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.08] pointer-events-none" />

                  <h2 className="font-google-sans text-5xl sm:text-[4rem] md:text-[5.5rem] font-black text-white tracking-[0.05em] leading-none glow-text-strong">
                    Forion
                  </h2>
                  <p className="mt-4 text-[9px] sm:text-[12px] md:text-[17px] text-white/40 font-mono tracking-[0.2em] md:tracking-[0.5em] uppercase whitespace-nowrap pointer-events-none relative z-10 bg-black/40 backdrop-blur-lg px-4 py-1.5 rounded-full overflow-hidden text-ellipsis max-w-full">
                    UNIVERSAL ENGINE ARCHITECTURE
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* The Web Layer (Behind Hub) - Hidden on Mobile */}
          <motion.div
            style={{ scale }}
            className="hidden md:flex absolute inset-0 pointer-events-none items-center justify-center z-10"
          >
            {/* Coordinate Sync Container: Ensures SVG units match Div transforms */}
            <div className="relative w-full max-w-[1200px] aspect-[1.2/1] flex items-center justify-center">
              <svg
                viewBox="0 0 1200 1000"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full overflow-visible"
              >
                <g transform="translate(600, 500)">
                  {features.map((node, i) => (
                    <Vine
                      key={`vine-${node.name}`}
                      endX={node.x}
                      endY={node.y}
                      index={i}
                      scrollYProgress={scrollYProgress}
                      color={node.color}
                    />
                  ))}
                </g>
              </svg>

              <div className="absolute inset-0 pointer-events-auto">
                {features.map((node, i) => (
                  <IntegrationNode
                    key={node.name}
                    node={node}
                    index={i}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Card Stack Layout */}
          <div className="md:hidden flex flex-col gap-4 w-full px-4 relative z-20 pointer-events-auto pb-12">
            {features.map((node, i) => (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ '--hover-color': node.color, border: `1px solid ${node.color}40`, boxShadow: `0 0 15px ${node.color}11` } as any}
                className="glass-card-strong px-5 py-4 flex gap-4 backdrop-blur-2xl transition-all duration-500 rounded-[1.25rem] w-full"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {getLogo(node.name, node.color)}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[9px] text-[var(--hover-color)]/80 uppercase tracking-[0.4em] font-poppins mb-1 font-semibold">
                    {node.label}
                  </span>
                  <h4 className="text-sm font-bold text-white tracking-tight mb-2">
                    {node.name}
                  </h4>
                  <p className="text-[11px] text-white/50 leading-relaxed font-poppins">
                    {node.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered Spotlight Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] rounded-full blur-[200px] pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
