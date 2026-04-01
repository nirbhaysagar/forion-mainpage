"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "react", label: "React", x: 20, y: 10 },
  { id: "vite", label: "Vite", x: 120, y: 50 },
  { id: "ts", label: "TypeScript", x: 40, y: 120 },
  { id: "tailwind", label: "Tailwind_CSS", x: 150, y: 160 },
  { id: "next", label: "Next.js", x: 10, y: 210 },
  { id: "node", label: "Node.js", x: 100, y: 260 },
];

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [4, 5],
  [3, 5],
];

export default function TechConstellation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 2 }}
      style={{
        position: "absolute",
        left: "3rem",
        top: "calc(55% + 100px)",
        transform: "translateY(-50%)",
        width: "200px",
        height: "300px",
        pointerEvents: "none",
        zIndex: 20,
      }}
      className="hidden lg:block opacity-70 hover:opacity-100 transition-opacity duration-700"
    >
      <div className="absolute -top-10 left-0">
        <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: 9, color: 'rgba(255,180,80,0.5)', letterSpacing: '0.2em' }}>
          TOPOLOGY // STACK
        </span>
      </div>

      {/* Edges */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: 'visible' }}>
        {edges.map(([n1, n2], i) => (
          <motion.line
            key={i}
            x1={nodes[n1].x}
            y1={nodes[n1].y}
            x2={nodes[n2].x}
            y2={nodes[n2].y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 2.5 + i * 0.15, duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={node.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.2 + i * 0.1, duration: 0.8 }}
          style={{
            position: "absolute",
            left: node.x,
            top: node.y,
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Faint node dot */}
          <div className="relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.5)' }} />
            <motion.div 
              className="absolute w-3 h-3 rounded-full border border-white/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            />
          </div>
          <span 
            style={{ 
              fontFamily: "var(--font-jetbrains)", 
              fontSize: "0.55rem", 
              color: "rgba(255,255,255,0.4)", 
              letterSpacing: "0.15em", 
              textTransform: "uppercase",
              whiteSpace: "nowrap"
            }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
