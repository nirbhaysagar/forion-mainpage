'use client'

import { motion } from "framer-motion";

const codeLines = [
  { text: "// forion: deploy orbit agent to build dashboard", color: "text-white/40" },
  { text: "import { Orbit } from '@forion/sdk'", color: "text-purple-400" },
  { text: " ", color: "" },
  { text: "const app = new Orbit({", color: "text-white" },
  { text: "  prompt: 'Build a dark-themed analytics dashboard',", color: "text-amber-200/80" },
  { text: "  integration: ['postgresql', 'stripe', 'openai'],", color: "text-amber-200/80" },
  { text: "  deploy: 'vercel'", color: "text-amber-200/80" },
  { text: "});", color: "text-white" },
  { text: " ", color: "" },
  { text: "await app.deploy();", color: "text-purple-400" },
  { text: "// Deployment successful: analytics-dash-7x2.vercel.app", color: "text-green-400/60" },
];

const DeveloperSection = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-black">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-12 mb-16 lg:mb-0 lg:col-span-5">
                    <span className="section-label mb-4 block">Built for builders</span>
                    <h2 className="text-5xl font-bold tracking-tighter mb-8 text-white">
                        Code at the <br />
                        <span className="text-white/40">speed of thought.</span>
                    </h2>
                    <p className="text-lg text-white/50 leading-relaxed font-light mb-8" style={{ fontFamily: 'var(--font-inconsolata)' }}>
                        Our SDK gives you programmatic control over the entire Forion stack. Deploy agents, provision infrastructure, and orchestrate models with a few lines of TypeScript.
                    </p>
                    <div className="flex flex-col gap-4">
                        {[
                            "Type-safe SDK",
                            "Universal Integration",
                            "Zero-config Deployments"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <span className="text-sm font-bold uppercase tracking-widest text-white/60">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 relative"
                >
                    <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl overflow-hidden shadow-2xl">
                        {/* Fake terminal header */}
                        <div className="px-5 py-3 border-b border-white/5 bg-white/5 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            </div>
                            <span className="text-[10px] uppercase tracking-widest text-white/20 font-mono">deploy_agent.ts</span>
                        </div>
                        
                        <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                            {codeLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex gap-6"
                                >
                                    <span className="text-white/10 w-4 text-right select-none">{i + 1}</span>
                                    <span className={line.color}>{line.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Status bar */}
                        <div className="px-5 py-2 border-t border-white/5 bg-white/5 flex items-center justify-between text-[10px] text-white/20 font-mono">
                            <span>UTF-8</span>
                            <span>Ln 11, Col 42</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DeveloperSection;
