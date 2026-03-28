'use client'

import { motion } from "framer-motion";

const codeLines = [
  { text: "// forion: deploy orbit agent to build dashboard", color: "text-muted-foreground", highlight: false },
  { text: "import { Orbit } from '@forion/core';", color: "text-foreground/60", highlight: false },
  { text: "", color: "", highlight: false },
  { text: "const app = await Orbit.plan({", color: "text-foreground/60", highlight: false },
  { text: "  intent: 'analytics dashboard with real-time telemetry',", color: "text-foreground/50", highlight: false },
  { text: "  architecture: 'clean-architecture-v2',", color: "text-primary/90", highlight: true },
  { text: "  autoHeal: true,", color: "text-primary/90", highlight: true },
  { text: "});", color: "text-foreground/60", highlight: false },
  { text: "", color: "", highlight: false },
  { text: "// Surgical patch for theme update", color: "text-muted-foreground", highlight: false },
  { text: "await app.patch({", color: "text-foreground/50", highlight: false },
  { text: "  target: 'components/ThemeConfig.ts',", color: "text-primary/80", highlight: true },
  { text: "  change: 'update primary color to hsl(var(--orbit-glow))'", color: "text-primary/80", highlight: true },
  { text: "});", color: "text-foreground/50", highlight: false },
  { text: "", color: "", highlight: false },
  { text: "return app.run();", color: "text-foreground/60", highlight: false },
];

const ease = [0.16, 1, 0.3, 1] as const;

const DeveloperSection = () => {
  return (
    <section id="developer" className="relative pt-36 pb-12 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:gap-32 lg:grid-cols-12 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="section-label">Real code. No lock-in. No magic.</span>
            <h2 className="section-heading">
              Built at <br />
              <span className="section-heading-muted">Orbital speed.</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Everything Orbit generates is standard React + Vite. You can open it in VS Code, push it to GitHub, or deploy it to Vercel. No proprietary format. No runtime dependency.
              </p>
              <p>
                The code Orbit writes is code you'd write. Just faster. No "upgrade to export," no magic — just production-grade architecture delivered in seconds.
              </p>
            </div>

            <div className="mt-10 flex gap-10">
              <div>
                <span className="text-2xl font-semibold text-white tracking-tighter block underline underline-offset-8 decoration-white/10">42ms</span>
                <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase font-mono mt-4 block">avg. latency</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-white tracking-tighter block underline underline-offset-8 decoration-white/10">128k</span>
                <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase font-mono mt-4 block">context window</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-white tracking-tighter block underline underline-offset-8 decoration-white/10">99.9%</span>
                <span className="text-[10px] text-white/40 tracking-[0.5em] uppercase font-mono mt-4 block">accuracy</span>
              </div>
            </div>
          </motion.div>

          {/* Right - IDE Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl border border-foreground/[0.06] bg-[hsl(240_25%_3%)] shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/[0.04] bg-surface/30">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground/60">
                    <span className="text-foreground/40 border-b border-primary/40 pb-1 px-2">middleware.ts</span>
                    <span className="px-2">auth.ts</span>
                    <span className="px-2">config.ts</span>
                  </div>
                </div>
              </div>

              {/* Code editor */}
              <div className="p-5 font-mono text-[12px] leading-[1.8] overflow-x-auto min-h-[320px]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.5 }}
                    className={`flex ${line.highlight ? 'bg-primary/[0.04] -mx-5 px-5 border-l-2 border-primary/20' : ''}`}
                  >
                    <span className="w-8 text-right text-foreground/10 select-none mr-5 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className={line.color}>{line.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Terminal panel */}
              <div className="border-t border-foreground/[0.04]">
                <div className="flex items-center gap-3 px-5 py-2 bg-surface/20">
                  <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-wider">Terminal</span>
                  <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider">Problems</span>
                  <span className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-wider">Output</span>
                </div>
                <div className="px-5 py-3 font-mono text-[11px] text-muted-foreground/60 flex items-center gap-2">
                  <span className="text-primary/70">❯</span>
                  <span>orbit plan --intent "analytics dashboard"</span>
                  <span className="h-3.5 w-px bg-primary/60 animate-pulse-glow" />
                </div>
              </div>

              {/* AI Status bar */}
              <div className="px-5 py-2 border-t border-foreground/[0.04] flex items-center justify-between bg-surface/10">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  <span className="text-[10px] font-mono text-muted-foreground/50">
                    Forion AI · context-aware · deterministic
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/30">
                  Ln 6, Col 42
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
