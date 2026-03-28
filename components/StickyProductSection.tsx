'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductPanel from "./ProductPanel";

const products = [
  {
    title: "Orbit",
    isFlagship: true,
    description: "Orbit builds real React applications from your description — runs them live in a WebContainer inside your browser, and generates production-grade code you can take anywhere. No scaffold. No boilerplate. No wasted momentum.",
    cta: "Start Building with Orbit",
    href: "https://orbit.forion.dev/",
    mainImage: "/WhatsApp Image 2026-03-20 at 22.45.00.jpeg",
    features: [
      "Planner-first Architecture", 
      "Auto-healing Engine", 
      "Surgical File Patching",
      "Deterministic Batching",
      "WebContainer Runtime"
    ],
  },
  {
    title: "Spark",
    description: "Spark lets you run AI agents directly inside your GitHub repositories. Not toy agents on sandboxed fake codebases — real agents, on your real code, doing real work with full repository understanding.",
    cta: "Connect your Repo",
    href: "https://spark.forgje.com/",
    mainImage: "/WhatsApp Image 2026-03-20 at 22.47.49.jpeg",
    features: [
      "Full Repository Context", 
      "Automated PRs & Branches", 
      "Actionable Intelligence",
      "Scoped Engineering Execution",
      "Real-world Codebase Access"
    ],
  },
  {
    title: "AgentTrace",
    description: "AgentTrace is a deterministic replay engine for AI agents. It records every decision, state transition, and model call with cryptographic integrity, providing absolute proof of agent behavior for enterprise governance.",
    cta: "Record Every Decision",
    href: "#",
    mainImage: "/about_workstation.png",
    features: [
      "Deterministic Replay", 
      "HMAC-SHA256 Signed Traces", 
      "Hermetic Sandboxing",
      "Cryptographic Proof",
      "Enterprise Compliance"
    ],
  },
];

const StickyProductSection = () => {
  return (
    <section id="products" className="py-12 md:py-16 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 px-6 md:px-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="section-label mb-0">
                The infrastructure layer for AI builders.
              </span>
            </div>
            <h2 className="section-heading">
              The <span className="section-heading-muted">Forion Stack.</span>
            </h2>
          </div>
        </div>

        {/* Product Panels - Normal Vertical Flow */}
        <div className="flex flex-col gap-24">
          {products.map((product: any, i) => (
            <ProductPanel
              key={i}
              title={product.title}
              description={product.description}
              features={product.features}
              cta={product.cta}
              href={product.href}
              index={i}
              mainImage={product.mainImage}
              isFlagship={product.isFlagship}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyProductSection;
