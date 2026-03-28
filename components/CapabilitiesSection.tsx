'use client'

import { motion } from "framer-motion";

const features = [
  {
    icon: "✎",
    title: "01 — Describe",
    desc: "Tell Orbit what you want to build. A dashboard, a SaaS, or a CRM. Just describe what it does and how it looks."
  },
  {
    icon: "⚙",
    title: "02 — Plan",
    desc: "Our engine maps out the entire technical architecture, selecting the right stack and sketching every file."
  },
  {
    icon: "⚡",
    title: "03 — Build",
    desc: "Watch as code is generated in real-time. Orbit executes every line inside its secure WebContainer runtime."
  },
  {
    icon: "🚀",
    title: "04 — Run",
    desc: "Deploy instantly. Your application is live, scalable, and ready for real users with a single click."
  }
];

const CapabilitiesSection = () => {
    return (
        <section className="py-24 px-6 md:px-20 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="section-label mb-4 block">Engineered for Velocity</span>
                    <h2 className="text-5xl font-bold tracking-tighter text-white">
                        From zero to <span className="text-white/40">production.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{f.title}</h3>
                            <p className="text-sm text-white/40 leading-relaxed font-light">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
