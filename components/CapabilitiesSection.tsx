'use client'

import { motion } from "framer-motion";

const features = [
    {
        icon: "✎",
        title: "01 — Describe",
        desc: "Tell Orbit what you want to build. A dashboard. A form. A multi-step wizard. A full product page. Be as specific or as vague as you want — Orbit will ask the right questions before building.",
        className: "col-span-12 md:col-span-4",
        id: "STEP_01"
    },
    {
        icon: "◈",
        title: "02 — Plan",
        desc: "Before writing a single line, Orbit's planning model maps out the full structure: which files to create, which components to build, what the architecture looks like. You see the plan. You approve it.",
        className: "col-span-12 md:col-span-8",
        id: "STEP_02"
    },
    {
        icon: "⚡",
        title: "03 — Generate",
        desc: "Orbit executes the plan, generating real React + Vite code across multiple files in structured batches. No single-file dumps. No thousand-line components. Actual architecture.",
        className: "col-span-12 md:col-span-7",
        id: "STEP_03"
    },
    {
        icon: "◉",
        title: "04 — Run",
        desc: "Your app renders live inside the browser via WebContainer. No server. No deploy. No waiting. You see exactly what was built within seconds of generation completing.",
        className: "col-span-12 md:col-span-5",
        id: "STEP_04"
    },
    {
        icon: "⌕",
        title: "05 — Iterate",
        desc: "Describe the change. Orbit surgically patches the specific files that need updating — it doesn't regenerate the entire codebase for a button color change. Momentum stays alive.",
        className: "col-span-12 md:col-span-12",
        id: "STEP_05"
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
};

const item = {
    hidden: { opacity: 0, scale: 0.97, y: 16 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const CapabilitiesSection = () => {
    return (
        <section className="relative min-h-screen text-white px-6 md:px-20 pt-4 pb-12 md:pt-24 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.04] pointer-events-none" />

            <div className="mx-auto max-w-7xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 md:mb-20 max-w-3xl"
                >
                    <span className="section-label">Execution Pipeline</span>
                    <h2 className="section-heading mt-4">
                        How the Forion engine <span className="italic font-medium opacity-50">executes</span>.
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-12 gap-3"
                >
                    {features.map((f) => (
                        <motion.div
                            key={f.title}
                            variants={item}
                            className={`${f.className} glass-card-strong p-8 group relative overflow-hidden flex flex-col justify-between`}
                            style={{ minHeight: '240px' }}
                        >
                            <div className="scan-line" />

                            <div className="relative z-20">
                                <div className="flex justify-between items-start mb-10">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-colors" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        {f.icon}
                                    </div>
                                    <span style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                                        {f.id}
                                    </span>
                                </div>

                                <h3 className="font-google-sans text-xl md:text-2xl font-semibold mb-3 tracking-tight text-white">
                                    {f.title}
                                </h3>
                            </div>

                            <p className="relative z-20 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
