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
    cta: "Join Waitlist",
    href: "https://spark.forgje.com/",
    mainImage: "/WhatsApp Image 2026-03-20 at 22.47.49.jpeg",
    isUpcoming: true,
    features: [
      "Full Repository Context",
      "Automated PRs & Branches",
      "Actionable Intelligence",
      "Scoped Engineering Execution",
      "Real-world Codebase Access"
    ],
  },
  {
    title: "Forion IDE",
    description: "The AI-native development environment we built from the ground up. Write code alongside context-aware agents, trace every decision, and deploy seamlessly within the Forion ecosystem.",
    cta: "Join Waitlist",
    href: "#",
    mainImage: "/about_workstation.png",
    isUpcoming: true,
    features: [
      "Agent-Native Interface",
      "Context-Aware Code Completion",
      "Integrated Execution Traces",
      "Hermetic Sandboxing",
      "Multi-Agent Collaboration"
    ],
  },
];

const StickyProductSection = () => {
  return (
    <section id="products" className="py-12 md:py-16 px-6 bg-transparent">
      <div className="max-w-[1080px] mx-auto">
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
        <div className="flex flex-col gap-12">
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
              isUpcoming={product.isUpcoming}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyProductSection;
