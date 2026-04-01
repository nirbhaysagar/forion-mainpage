'use client'

import { motion } from "framer-motion";

const comparisons = [
    {
        feature: "Generation Scope",
        forion: "Full Project Structure",
        legacy_ui: "Single File / UI Only",
        legacy_agents: "Snippet / File Only",
    },
    {
        feature: "Build Strategy",
        forion: "Architectural Planning",
        legacy_ui: "No Plan Before Build",
        legacy_agents: "Deep Autocomplete",
    },
    {
        feature: "Iteration Logic",
        forion: "Surgical File Patching",
        legacy_ui: "Regenerate Everything",
        legacy_agents: "Manual Refactoring",
    },
    {
        feature: "Error Handling",
        forion: "Auto-Healing Engine",
        legacy_ui: "Manual Fix Required",
        legacy_agents: "Fatal Exit on Error",
    },
    {
        feature: "Resulting Output",
        forion: "Deterministic Architecture",
        legacy_ui: "Interface Prototype",
        legacy_agents: "Mockup / Fragment",
    },
];

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 flex-shrink-0" style={{ color: '#fff' }}>
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ComparisonSection = () => {
    return (
        <section className="relative pt-8 md:pt-12 pb-10 md:pb-16 px-6 overflow-hidden">
            <div className="mx-auto max-w-5xl relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-3"
                    >
                        <span className="section-label">Why teams switch</span>
                        <h2 className="section-heading max-w-3xl">
                            The infrastructure gap{' '}
                            <span className="italic font-normal text-white/90">
                                is real.
                            </span>
                        </h2>
                        <p className="text-[0.75rem] tracking-[0.1em] uppercase text-white/35">
                            Here's how Forion compares to other tools.
                        </p>
                    </motion.div>
                </div>

                <div className="glass-card-strong overflow-hidden" style={{ borderRadius: '2rem' }}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px] md:min-w-[640px]">
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                                    <th className="p-4 md:p-8 text-xs md:text-[16px] uppercase tracking-[0.3em] text-white/30">Feature</th>
                                    <th className="p-4 md:p-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center" style={{ background: '#fff' }}>
                                                <span className="text-black font-black text-sm md:text-xl">F</span>
                                            </div>
                                            <span className="text-sm md:text-xl font-bold text-white uppercase tracking-wider font-google-sans">Forion</span>
                                        </div>
                                    </th>
                                    <th className="p-4 md:p-8">
                                        <span className="font-medium uppercase tracking-widest text-white/25 text-xs md:text-[18px]">Interface Builders</span>
                                    </th>
                                    <th className="p-4 md:p-8">
                                        <span className="font-medium uppercase tracking-widest text-white/25 text-xs md:text-[18px]">Legacy Agents</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                {comparisons.map((row, idx) => (
                                    <motion.tr
                                        key={row.feature}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.07 }}
                                        style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                                        className="transition-colors hover:bg-white/[0.015]"
                                    >
                                        <td className="p-4 md:p-8 font-medium text-white/45 text-sm md:text-[1.2rem]">
                                            {row.feature}
                                        </td>
                                        <td className="p-4 md:p-8" style={{ background: 'rgba(255,255,255,0.015)' }}>
                                            <div className="flex items-center gap-2 md:gap-4">
                                                <CheckIcon />
                                                <span className="font-semibold text-white text-base md:text-2xl">{row.forion}</span>
                                            </div>
                                        </td>
                                        <td className="p-4 md:p-8 text-white/30 text-sm md:text-[20px] leading-tight">
                                            {row.legacy_ui}
                                        </td>
                                        <td className="p-4 md:p-8 text-white/30 text-sm md:text-[20px] leading-tight">
                                            {row.legacy_agents}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
