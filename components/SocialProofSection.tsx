'use client'

import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Verified Teams" },
  { value: "4B+", label: "Tokens Orchestrated" },
  { value: "99.99%", label: "Uptime SLA" },
];

const SocialProofSection = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-black relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-32 w-full"
                >
                    {stats.map((stat, i) => (
                        <div key={stat.label} className="text-center">
                            <span className="text-5xl md:text-7xl font-bold tracking-tighter text-white block mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
                                {stat.value}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-mono font-bold">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-24 text-center"
                >
                    <p className="text-sm text-white/20 uppercase tracking-[0.2em] font-mono">
                        Powering the next generation of <span className="text-white/40">autonomous software.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProofSection;
