'use client'

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

const nodes = [
  { name: "PostgreSQL", x: -250, y: -120, category: "Database" },
  { name: "Redis", x: -300, y: 50, category: "Cache" },
  { name: "OpenAI", x: -180, y: 150, category: "Model" },
  { name: "Anthropic", x: 180, y: 150, category: "Model" },
  { name: "stripe", x: 300, y: 50, category: "Payments" },
  { name: "GitHub", x: 250, y: -120, category: "Source" },
  { name: "Vercel", x: 0, y: -200, category: "Edge" },
  { name: "LangChain", x: 0, y: 220, category: "Orchestration" },
];

const IntegrationNode = ({ x, y, name, category, i, scrollYProgress }: any) => {
  const [hovered, setHovered] = useState(false);
  
  // Parallax effect
  const op = useTransform(scrollYProgress, [0.35, 0.5, 0.65], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0.8, 1, 0.8]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        x: '-50%',
        y: '-50%',
        opacity: op,
        scale: scale,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="z-20 cursor-crosshair"
    >
      <div className={`
        relative px-6 py-3 rounded-full border transition-all duration-500
        ${hovered 
          ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-110' 
          : 'bg-black/40 text-white/40 border-white/5 backdrop-blur-md'
        }
      `}>
        <span className="text-[10px] uppercase tracking-[0.2em] font-mono block leading-none mb-1 opacity-50">
          {category}
        </span>
        <span className="text-sm font-bold tracking-tight whitespace-nowrap">
          {name}
        </span>

        {/* Connection line to center */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10
          w-[1px] bg-gradient-to-t from-white/10 to-transparent transition-opacity duration-500
          ${hovered ? 'opacity-40' : 'opacity-10'}
        `} style={{ 
          height: Math.sqrt(x*x + y*y), 
          transform: `translate(-50%, -50%) rotate(${Math.atan2(-x, y) * 180 / Math.PI}deg) translateY(${Math.sqrt(x*x + y*y)/2}px)`
        }} />
      </div>
    </motion.div>
  );
};

const EcosystemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const hubScale = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0.9, 1.1, 0.9]);
  const hubOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-black overflow-hidden px-6">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center pointer-events-none">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_70%)] z-0" />
        
        {/* Centered Hub */}
        <motion.div 
          style={{ scale: hubScale, opacity: hubOpacity }}
          className="relative z-10 flex flex-col items-center justify-center p-20 pointer-events-auto"
        >
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full -z-10" />
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-3xl bg-black/40 shadow-[0_0_80px_rgba(255,255,255,0.05)]">
            <img src="/main-logo.svg" alt="Forion" className="w-16 md:w-24 h-auto brightness-200" />
          </div>
          
          <div className="mt-12 text-center max-w-md">
            <h3 className="text-3xl font-bold tracking-tighter mb-4 uppercase">Unified Core</h3>
            <p className="text-sm text-white/40 leading-relaxed font-light font-mono">
              The central nervous system for your AI stack. Seamlessly integrated, cryptographically secure.
            </p>
          </div>
        </motion.div>

        {/* Integration Nodes */}
        <div className="absolute inset-0 pointer-events-auto">
          {nodes.map((node, i) => (
            <IntegrationNode 
              key={node.name}
              x={node.x}
              y={node.y}
              name={node.name}
              category={node.category}
              i={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Heading behind hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none select-none">
          <h2 className="text-[clamp(4rem,15vw,20rem)] font-bold text-white/[0.02] tracking-tighter leading-none uppercase">
            Ecosystem
          </h2>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
