'use client'

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  // Primary Products
  { name: "Orbit", x: -400, y: -220, label: "Frontend", color: "#FFFFFF", summary: "Visual AI-native frontend builder & deployment engine." },
  { name: "Spark", x: 400, y: -220, label: "Execution", color: "#FF9900", summary: "Autonomous AI coding agents for real-world repositories." },
  { name: "AgentTrace", x: 0, y: -380, label: "Governance", color: "#4285F4", summary: "Deterministic replay & cryptographic audit for AI agents." },

  // Core Capabilities
  { name: "Auto-Heal", x: -480, y: 100, label: "Reliability", color: "#26D07C", summary: "Real-time error detection and self-repair infrastructure." },
  { name: "Surgical Patch", x: 480, y: 100, label: "Efficiency", color: "#FFD21E", summary: "High-precision code modifications with zero overhead." },
  { name: "Planner", x: 0, y: 380, label: "Reasoning", color: "#FFFFFF", summary: "Multi-step reasoning engine for complex engineering tasks." },
  
  // Infrastructure
  { name: "IDE", x: -250, y: 280, label: "Environment", color: "#4078c0", summary: "Cloud development environment for AI orchestration." },
  { name: "OS Core", x: 250, y: 280, label: "Infrastructure", color: "#D97757", summary: "Low-level substrate powering the entire Forion stack." },
];

const getLogo = (name: string, color: string) => {
  switch (name) {
    case "Orbit":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" /><circle cx="12" cy="12" r="4" fill={color} /></svg>;
    case "Spark":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill={color} /></svg>;
    case "AgentTrace":
      return <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22v-5M12 17l8-4M12 17l-8-4" stroke={color} strokeWidth="2" /></svg>;
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
  const [isHovered, setIsHovered] = useState(false);
  
  // Synchronized Reveal: All nodes finish appearing by 0.45 scroll progress
  const revealStart = 0.1 + (index * 0.03);
  const opacity = useTransform(scrollYProgress, [revealStart, revealStart + 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [revealStart, revealStart + 0.1], [0.8, 1]);
  const yOffset = useTransform(scrollYProgress, [revealStart, revealStart + 0.1], [20, 0]);

  return (
    <motion.div
      style={{
        x: node.x,
        y: node.y,
        opacity,
        scale,
        translateY: yOffset
      }}
      className="absolute z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          boxShadow: isHovered 
            ? [`0 0 30px ${node.color}44`, `0 0 40px ${node.color}66`, `0 0 30px ${node.color}44`]
            : [
              `0 0 20px ${node.color}00`,
              `0 0 25px ${node.color}22`,
              `0 0 20px ${node.color}00`
            ],
          width: isHovered ? "auto" : "180px",
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.03)"
        }}
        transition={{ 
          layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`glass-card-strong px-5 py-3 flex items-center gap-4 group backdrop-blur-3xl border-white/10 hover:border-white/50 transition-colors duration-300 min-w-[180px] cursor-pointer`}
        style={{ '--hover-color': node.color } as any}
      >
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-[var(--hover-color)]/50 group-hover:scale-110 flex-shrink-0">
          {getLogo(node.name, node.color)}
        </div>
        <div className="flex flex-col whitespace-nowrap overflow-hidden">
          <span className="block text-[9px] text-white/40 uppercase tracking-[0.4em] font-mono mb-0.5 group-hover:text-[var(--hover-color)]/60 transition-colors">
            {node.label}
          </span>
          <div className="flex flex-col">
            <h4 className="text-[13px] font-bold text-white tracking-tight leading-none">
              {node.name}
            </h4>
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ 
                opacity: isHovered ? 0.6 : 0,
                height: isHovered ? "auto" : 0,
                marginTop: isHovered ? 6 : 0
              }}
              className="text-[11px] text-white font-mono tracking-tight leading-tight max-w-[240px] whitespace-normal"
            >
              {node.summary}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Vine = ({ endX, endY, index, scrollYProgress, color }: { endX: number, endY: number, index: number, scrollYProgress: any, color: string }) => {
  const cp1x = endX * 0.2;
  const cp1y = endY * 0.8;
  const cp2x = endX * 0.6;
  const cp2y = endY * 0.2;

  const path = `M 0 0 C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

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
        strokeWidth="1"
        strokeLinecap="round"
        style={{ pathLength, opacity }}
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
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0.1, pathOffset: 0 }}
        animate={{ pathOffset: 1 }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.5
        }}
        style={{ opacity: useTransform(opacity, (o: number) => o * 0.8) }}
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
        setScale(Math.min(width / 1100, 0.45)); // Heavy scaling for mobile
      } else if (width < 1024) {
        setScale(width / 1300);
      } else {
        setScale(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-12 pb-20 px-6 overflow-hidden bg-transparent">
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

        <div className="relative w-full min-h-[400px] md:min-h-[700px] flex items-center justify-center">

          {/* Central Hub Area */}
          <div className="relative z-30 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center group pointer-events-auto"
              >
                {/* Volumetric Glow Hub */}
                <div className="relative glass-card-strong px-16 py-12 flex flex-col items-center justify-center border-white/40 bg-black/95 backdrop-blur-3xl 
                            shadow-[0_0_100px_rgba(255,255,255,0.1),_0_0_200px_rgba(255,255,255,0.05),_inset_0_0_50px_rgba(255,255,255,0.03)]
                            transition-all duration-1000 group-hover:border-white/60">
                  {/* Internal Light Source */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.08] pointer-events-none" />

                  <h2 className="text-[5rem] md:text-[7rem] font-black text-white tracking-[0.05em] uppercase leading-none glow-text-strong">
                    Forion
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>

          {/* The Web Layer (Behind Hub) */}
          <motion.div 
            style={{ scale }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-10"
          >
            <svg
              viewBox="0 0 1200 800"
              className="w-full h-full max-w-[1200px] max-h-[800px] overflow-visible"
            >
              <g transform="translate(600, 400)">
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
              <div className="relative w-full h-full flex items-center justify-center">
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

          {/* Global Network Label - Positioned absolutely to avoid shifting center */}
          <p className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-mono tracking-[0.5em] uppercase whitespace-nowrap z-40 pointer-events-none">
            UNIVERSAL ENGINE ARCHITECTURE
          </p>

          {/* Centered Spotlight Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] rounded-full blur-[200px] pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
