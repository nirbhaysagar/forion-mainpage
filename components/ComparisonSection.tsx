'use client'

import { motion } from "framer-motion";

const comparisons = [
  {
    feature: "Generation Scope",
    forion: "Full Project Structure",
    legacy_ui: "Single File / UI Only",
    legacy_agents: "Isolated Scripts",
  },
  {
    feature: "Infrastructure",
    forion: "Self-Healing Edge",
    legacy_ui: "Manual Deployment",
    legacy_agents: "Local Execution",
  },
  {
    feature: "Verification",
    forion: "Deterministic Replay",
    legacy_ui: "Visual Review",
    legacy_agents: "Manual Logging",
  },
  {
    feature: "Integration",
    forion: "Direct GitHub Write",
    legacy_ui: "Copy-Paste",
    legacy_agents: "Read-Only Access",
  },
];

const CheckIcon = () => (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);

const ComparisonSection = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="section-label mb-4 block">The Forion Advantage</span>
                    <h2 className="text-5xl font-bold text-white tracking-tighter">
                        Engineered differently.
                    </h2>
                </div>

                <div className="glass-card-strong overflow-hidden rounded-[2rem] border border-white/10" style={{ zoom: 0.8 }}>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5">
                                <th className="p-10 text-xs uppercase tracking-[0.2em] text-white/40 font-mono">Feature</th>
                                <th className="p-10 text-xs uppercase tracking-[0.2em] text-white font-bold font-mono">Forion OS</th>
                                <th className="p-10 text-xs uppercase tracking-[0.2em] text-white/40 font-mono">Legacy UI Builders</th>
                                <th className="p-10 text-xs uppercase tracking-[0.2em] text-white/40 font-mono">Isolated Coding Agents</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((row, idx) => (
                                <motion.tr 
                                    key={row.feature}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.07 }}
                                    className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <td className="p-10 font-bold text-white uppercase tracking-tight font-mono text-sm">{row.feature}</td>
                                    <td className="p-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                                <CheckIcon />
                                            </div>
                                            <span className="text-white font-medium text-lg">{row.forion}</span>
                                        </div>
                                    </td>
                                    <td className="p-10 text-white/30 text-lg font-light">{row.legacy_ui}</td>
                                    <td className="p-10 text-white/30 text-lg font-light">{row.legacy_agents}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
