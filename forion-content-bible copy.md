# FORION — CONTENT BIBLE
### Internal Document for Antigravity Team
**Version 1.0 | For Orbit Launch**

---

> This document is the authoritative source for how Forion speaks, what each product is, and how to write copy that converts — not copy that sounds like every other AI company. Every writer, designer, and builder on the team should internalize this before writing a single word.

---

## PART 0 — THE FORION VOICE

Before products, before copy — understand the voice. Everything flows from here.

### Forion speaks like:
- A founder who has already built what others are still theorizing about
- A senior engineer explaining to another senior engineer — no fluff, no hand-holding
- A category creator, not a feature seller

### Forion does NOT speak like:
- A VC pitch ("paradigm-shifting AI-powered synergies")
- A product hunt listing ("the easiest way to build AI apps!")
- A tutorial blog post

### Tone Spectrum
```
Confident ←————————————————→ Not arrogant
Clear     ←————————————————→ Not over-simplified
Bold      ←————————————————→ Not hyperbolic
Technical ←————————————————→ Not alienating
```

### The Forion Test (for every piece of copy)

Ask this before publishing anything:

**"Could I replace 'Forion' with any other AI tool name and have this still make sense?"**

If yes → rewrite. It's not sharp enough.

### Word Blacklist
These are banned from all Forion copy:

| Banned | Reason |
|--------|--------|
| "AI-powered" | Every tool is AI-powered. Meaningless. |
| "Seamless" | Everyone says this. Nobody believes it. |
| "Next-gen" | Always means nothing. |
| "Revolutionary" | Killed by overuse. |
| "Supercharge" | SaaS cliché. Delete on sight. |
| "Leverage" | Corporate noise. |
| "Unlock" | Generic. |
| "Game-changer" | Valueless. |

### Word Library (use these instead)

| Instead of | Use |
|------------|-----|
| "AI-powered tools" | "AI-native systems" |
| "Seamless experience" | Be specific — what exactly is seamless? |
| "Build faster" | "Ship in hours, not weeks" |
| "Powerful features" | Name the actual feature with its actual value |
| "Easy to use" | Show it — don't say it |

---

## PART 1 — FORION (PLATFORM LEVEL)

### What it is (internal clarity)

Forion is a unified platform where developers build, run, and iterate on AI-native software. It is not a single tool — it is a **layered development system** containing multiple products that work as a stack.

The products are:
- **Orbit** — AI frontend builder (Lovable-equivalent, launching first)
- **Spark** — GitHub agent runner (agents that operate on real codebases)
- **AgentTrace** — Deterministic replay and governance engine for AI agents
- **Cloyde** — (internal; do not mention in public copy yet)

### The Central Claim (Forion level)

> Forion is the operating system for AI-native development.

This is immovable. Everything else is in service of this.

### Why "operating system" is the right metaphor

An OS is:
- The layer beneath everything else
- Not what you see — but what makes everything work
- Infrastructure, not interface

Forion is exactly this. You don't use Forion like a chat tool. You build on Forion like you build on infrastructure.

### The Problem Forion Solves (Platform Level)

AI development today is:

```
API calls scattered across files
Prompts living in .env comments
State managed with duct tape
Agents you can't debug
Systems you can't replay or audit
Frontend with no AI logic underneath
```

Developers aren't building AI systems. They're maintaining AI chaos.

Forion is the structured alternative.

### Platform Taglines (rotate by context)

**Primary (always use this)**
> Forion — Operating system for AI-native development.

**Secondary (rotate)**
- Build AI systems. Not glue code.
- The infrastructure layer for AI builders.
- Design. Generate. Run. Evolve.
- Stop wiring tools. Start building systems.
- Where AI workflows become real software.
- Not a tool. A stack.

**For technical audiences**
- One platform. Generation, execution, replay, governance.
- From prompt to production — without rebuilding everything.

**Aggressive (for paid ads / bold sections)**
- AI development is broken. Here's the fix.
- You don't need another AI tool. You need a system.
- This is what building with AI should actually feel like.

### The One-Liner (for bios, press, everywhere)

> Forion is the operating system for building AI-native applications.

---

## PART 2 — ORBIT (DEEP DIVE)

### ORBIT IS THE LAUNCH PRODUCT. THIS SECTION TAKES PRIORITY.

---

### What Orbit Actually Is

Orbit is an **AI-powered frontend builder** that runs inside your browser. You describe what you want to build — a UI, a component, a full app — and Orbit generates a working React/Vite application, renders it live in a WebContainer, and lets you iterate on it in real time.

Think: Lovable — but smarter about how it builds, more honest about what it's doing, and built with the architecture to support real production systems.

**The technical core:**
- You write intent, Orbit builds structure
- Output: real React + Vite code, not mockups
- Runs in WebContainers (fully in-browser, no backend roundtrip)
- Generation pipeline: Planner → Executor → Auto-Heal → Surgical Patch
- If it breaks, Orbit fixes itself (two-attempt auto-heal cap)
- Post-build summary tells you exactly what was built and why
- Visual prototyping is a first-class mandate, not an afterthought

**What makes it not like every other AI builder:**
- It plans before it builds (reasoning-first, not generation-first)
- It generates across multiple files intelligently (deterministic batching)
- It can surgically patch broken files instead of regenerating everything
- It knows when to ask questions and when to just build
- The output is real, editable, portable code — not locked-in magic

---

### The Real User (Who Orbit Is For)

**Primary:**
Developers who prototype fast but hate losing momentum to setup, scaffolding, and boilerplate. They know what they want to build. They don't want to write the 200 lines of React that gets them to the interesting part.

**Secondary:**
Technical founders and indie builders who ship alone. They have product instincts but limited frontend bandwidth. Orbit is the multiplier.

**Not for:**
Non-technical users who want no-code magic. Orbit produces real code and expects you to understand what it's producing. This is a feature, not a bug.

---

### What Problem Orbit Solves (be precise)

The honest problem is not "coding is hard."

The problem is:

**Momentum death.**

You have an idea. You sit down to build. Then:

```
Which component library?
Routing setup
Auth boilerplate
State management decision
Folder structure bikeshedding
TailwindCSS config
...2 hours later, nothing works and the idea feels less exciting
```

By the time the scaffold is done, the energy is gone.

Orbit collapses the gap between **having the idea** and **seeing it work**.

---

### Orbit's Headline Promise

> From description to working React app in seconds.

Supporting truth:
- Real code, not wireframes
- Runs live in your browser
- Edits are immediate
- It fixes its own mistakes
- You keep the code forever

---

### Orbit Section Copy (use these directly or adapt)

#### Hero Section

**Headline:**
```
Build real React apps.
Just describe what you want.
```

**Subline:**
```
Orbit turns your idea into a working, editable React application — live in your browser, in seconds. No scaffold. No boilerplate. No wasted momentum.
```

**CTA Primary:** `Start Building with Orbit`
**CTA Secondary:** `See how it works`

---

#### "What is Orbit" Section

**Header:** `Not a mockup tool. Not a template generator.`

**Body:**
```
Orbit builds real React applications from your description — runs them live in a WebContainer inside your browser, and generates production-grade code you can take anywhere.

You describe the interface. Orbit plans the structure, generates the files, and renders the result. If something breaks, it heals itself. If it needs clarification, it asks — intelligently, not constantly.

The output isn't a starting point you'll throw away. It's the foundation you build on.
```

---

#### "How It Works" Section

**Header:** `How Orbit builds`

**Step 1 — Describe**
```
Tell Orbit what you want to build. A dashboard. A form. A multi-step wizard. A full product page. Be as specific or as vague as you want — Orbit will ask the right questions before building.
```

**Step 2 — Plan**
```
Before writing a single line, Orbit's planning model maps out the full structure: which files to create, which components to build, what the architecture looks like. You see the plan. You approve it.
```

**Step 3 — Generate**
```
Orbit executes the plan, generating real React + Vite code across multiple files in structured batches. No single-file dumps. No thousand-line components. Actual architecture.
```

**Step 4 — Run**
```
Your app renders live inside the browser via WebContainer. No server. No deploy. No waiting. You see exactly what was built within seconds of generation completing.
```

**Step 5 — Iterate**
```
Describe the change. Orbit surgically patches the specific files that need updating — it doesn't regenerate the entire codebase for a button color change. Edits are fast. Momentum stays alive.
```

---

#### "Why Orbit" Section (differentiation)

**Header:** `Why Orbit is different from every other AI builder`

| Other AI builders | Orbit |
|-------------------|-------|
| Generate a single file | Generate across the full project structure |
| No plan before build | Plans the architecture before writing code |
| Regenerate everything on edit | Surgical patch — only touches what changed |
| Black box generation | Post-build summary: know exactly what was built and why |
| Break and stay broken | Two-attempt auto-heal before surfacing the error |
| Mockups you'll rewrite | Real React code you keep |

---

#### "The Code is Yours" Section

**Header:** `Real code. No lock-in. No magic.**

**Body:**
```
Everything Orbit generates is standard React + Vite. You can open it in VS Code, push it to GitHub, deploy it to Vercel. No proprietary format. No runtime dependency. No "upgrade to export."

The code Orbit writes is code you'd write. Just faster.
```

---

#### Post-Build Summary (Feature Callout)

**Header:** `Know exactly what was built — every time.`

**Body:**
```
After every generation, Orbit delivers a plain-English summary of what it built, what decisions it made, and what you might want to change next.

No guessing what the AI did.
No hunting through files to understand the structure.
Just clarity.
```

---

#### Auto-Heal (Feature Callout)

**Header:** `Orbit fixes its own mistakes.`

**Body:**
```
When generated code has errors, Orbit doesn't surface them to you immediately. It first attempts to diagnose and fix the issue on its own — up to two times.

Only if both attempts fail does it surface the error with a clear explanation of what went wrong and why.

Less interruption. More building.
```

---

#### Clarification Widget (Feature Callout)

**Header:** `It asks before it assumes.`

**Body:**
```
Orbit knows the difference between a description that has enough information to build from and one that doesn't. When it needs clarity, it asks specific, targeted questions — not generic "tell me more" prompts.

When it has enough, it builds.

You set the threshold. Orbit respects it.
```

---

### Orbit Taglines (use across product, site, socials)

**Primary**
> Orbit — Build real React apps. Just describe what you want.

**Supporting**
- From idea to working app in seconds.
- The AI frontend builder that actually plans before it builds.
- Real code. Real apps. No wasted momentum.
- Not a mockup. A foundation.
- Generate. Run. Iterate. Keep the code.

**For developer audiences (technical)**
- React + Vite. WebContainers. Real architecture. No magic.
- Planner → Executor → Auto-Heal. Built-in.
- Surgical patch, not full regeneration.

**Bold / Ad copy**
- Stop setting up scaffolds. Start building things that matter.
- Every AI builder generates code. Orbit generates software.
- Your idea. Working React app. Seconds.

---

### Orbit FAQ (for docs, site, support)

**Q: Is the code Orbit generates actually usable in production?**
A: It's production-direction code — real React, real Vite, real architecture. You will likely refine it, but you're starting from a working foundation, not a prototype you'll throw away.

**Q: Can I edit the code Orbit generates?**
A: Yes. Orbit outputs standard files. Edit in the browser, or export and open in any editor. No proprietary format.

**Q: What happens when Orbit makes a mistake?**
A: Orbit attempts to auto-heal — diagnose and fix the error — twice before surfacing it to you. When it does surface an error, it tells you exactly what went wrong.

**Q: Does Orbit work for complete applications or just components?**
A: Both. Describe a button component, a form, a full product dashboard, or a multi-page app. Orbit scales to the complexity of your description.

**Q: Do I need to know React to use Orbit?**
A: You should understand React to get the most from Orbit. This is not a no-code tool — it's a multiplier for developers who already know the landscape.

---

## PART 3 — SPARK

### What Spark Actually Is

Spark lets you run AI agents directly inside your GitHub repositories. Not toy agents on sandboxed fake codebases — real agents, on your real code, doing real work.

This is fundamentally different from most "AI coding" tools:
- GitHub Copilot suggests the next line
- Cursor helps you edit the file you're in
- Spark deploys an agent that understands your full repository and can act on it

### The Core Problem Spark Solves

Most AI agents are trained on their own context. They can't operate on *your* codebase because they've never seen it, don't understand its structure, and aren't given the authority to touch it.

Spark bridges this gap. It gives agents:
- Access to the full repository structure
- Understanding of how your code is organized
- The ability to take real actions: create branches, open PRs, modify files, run checks

### Who Spark Is For

Senior engineers and technical teams who want to delegate real development tasks to an agent — not code suggestions, not autocomplete, but actual execution of scoped engineering work inside a real codebase.

### Spark's Headline Promise

> Run intelligent agents inside your real GitHub repositories.

Supporting truth:
- Not sandbox simulation — your actual codebase
- Agents that understand repo structure
- Real output: branches, PRs, file changes
- You define scope and control

### Spark Section Copy

#### Hero

**Headline:**
```
Your codebase, agentic.
```

**Subline:**
```
Spark deploys AI agents directly inside your GitHub repositories — reading structure, understanding context, and taking real action on your actual code.
```

**CTA:** `Connect your repo`

---

#### "What Spark Does" Section

**Header:** `Agents that operate on real codebases.`

**Body:**
```
Most AI tools work on isolated snippets. Spark works on the whole thing.

Connect a GitHub repository and Spark gives an agent the full context: file structure, dependencies, conventions, history. Then it acts — creating branches, modifying files, opening pull requests — based on what you tell it to do.

This is not autocomplete. This is automated engineering work, executed on your terms.
```

---

#### Spark Taglines

- Spark — Your codebase, agentic.
- AI agents that understand your actual code.
- Connect a repo. Deploy an agent. Ship real work.
- Not suggestions. Execution.
- Real repositories. Real agents. Real output.

---

## PART 4 — AGENTTRACE

### What AgentTrace Actually Is

AgentTrace is a **deterministic replay engine** for AI agents. It records every decision, every state transition, every model call an agent makes — with cryptographic integrity — so you can replay, audit, and debug any execution.

It operates in two modes:
- **Relaxed** (~$199/month): Execution recording, replay, basic observability for teams that want insight without overhead
- **Governance** ($5K–$15K/month): HMAC-SHA256 signed traces, hermetic sandboxing, full audit compliance — for enterprises where AI agent behavior must be provable

### The Core Problem AgentTrace Solves

AI agents are non-deterministic. They can make different decisions on the same input. This is fine during development. It is a liability in production.

When an agent does something wrong — processes a transaction incorrectly, takes a harmful action, produces unexpected output — you need to know:
- Exactly what happened
- In what order
- What state the world was in when it happened
- That the record hasn't been tampered with

AgentTrace makes AI agent behavior **auditable, replayable, and provable**.

### Who AgentTrace Is For

- **Relaxed tier**: Engineering teams running agents in production who want visibility without compliance overhead
- **Governance tier**: Enterprises in regulated industries (finance, healthcare, legal) where AI agent decisions must be auditable by law or policy

### The Competitive Position

AgentTrace competes with LangSmith and Helicone. The distinction is not just features — it's posture:

| LangSmith / Helicone | AgentTrace |
|----------------------|------------|
| Observability / logging | Execution integrity |
| "What happened?" | "Prove what happened." |
| Dashboards and traces | Cryptographically signed, replayable records |
| Dev tooling | Governance infrastructure |

### AgentTrace's Headline Promise

> Know exactly what your AI agent did. Prove it, if you have to.

### AgentTrace Section Copy

#### Hero

**Headline:**
```
AI agents you can audit.
Not just observe — prove.
```

**Subline:**
```
AgentTrace records every decision your AI agent makes with deterministic replay and cryptographic integrity. When something goes wrong — or when someone asks you to prove it didn't — you have the record.
```

---

#### Two Tiers (copy)

**Relaxed — For teams who want visibility**
```
Record and replay any agent execution. See exactly what your agent did, in what order, with full state context. Debug faster. Understand failures. Build with confidence.

~$199/month
```

**Governance — For teams who need proof**
```
Every execution signed with HMAC-SHA256. Hermetic sandboxing. Full audit trail that meets enterprise compliance requirements. When regulators ask what your agent did on October 14th — you have the answer.

$5,000–$15,000/month
```

---

#### AgentTrace Taglines

- AgentTrace — Execution integrity for AI agents.
- Record. Replay. Prove.
- AI agent observability isn't enough. You need integrity.
- When your agents act, you need to know exactly how.
- Compliance-grade audit for AI execution.
- Not just logs. Signed, replayable truth.

---

## PART 5 — CONTENT STRATEGY FOR LAUNCH

### Orbit Launch Priority Order

When Orbit launches, content should follow this hierarchy:

**Tier 1 — Lead with the moment**
The moment between "I described it" and "there it is, running" — that moment is Orbit's product. Every piece of launch content should make that moment visceral.

Show it. Don't just describe it.

**Tier 2 — Establish the difference**
Most AI builders are code generators. Orbit is a system builder. The planning layer, the auto-heal, the surgical patching — these make it different. Name them by name. Explain them clearly.

**Tier 3 — Own the developer trust**
Developers are skeptical of AI builders. The output is always "impressive demo, useless in practice." Counter this directly:

- "The code is real. It runs. Here's the GitHub repo."
- "The architecture is real. Here's the file structure it generated."
- "You can edit it. Here's VS Code with the output open."

Show the code. Show the structure. Don't hide behind the magic.

---

### Content Formats for Orbit Launch

**Landing Page Copy** — use everything in Part 2 above

**Twitter/X Thread:**
```
Hook: "I described a dashboard. 12 seconds later, it was running in my browser."

Thread: [Show the actual build]
→ What Orbit is
→ How the pipeline works (planner → executor → auto-heal)
→ The code is real (show file structure)
→ Where to try it
```

**Product Hunt Description:**
```
Orbit is an AI frontend builder that plans before it builds.

Describe what you want. Orbit maps the architecture, generates real React + Vite code, runs it live in a WebContainer, and patches its own mistakes.

No mockups. No scaffolding. Real code you keep.

Built by Antigravity on top of the Forion stack.
```

**Demo Video Script (30 sec):**
```
[0-3s] "I'm going to describe a React app and watch Orbit build it."
[3-8s] Type description into Orbit
[8-15s] "It's planning the structure first. Not just generating — planning."
[15-22s] Files generating, app rendering live
[22-28s] "That's running in my browser. Real React. Real Vite. Here's the code."
[28-30s] Orbit logo + "Start building."
```

---

## PART 6 — THINGS TO NEVER SAY

These are specific phrases that undercut Forion's positioning. Do not use them anywhere.

❌ "Powerful AI tools for developers"
→ Say instead: "The infrastructure layer for AI-native development"

❌ "Build apps without writing code"
→ Orbit is NOT no-code. It's for developers. Never position it this way.

❌ "The future of development"
→ Empty. Everyone says this. Cut it.

❌ "Simplify your AI workflow"
→ Too soft. Says nothing.

❌ "Harness the power of AI"
→ 2019 called.

❌ "All-in-one AI platform"
→ This is what you say when you can't define what you are. We can define what we are.

---

## PART 7 — INTERNAL ALIGNMENT NOTES

### For the design team

Every design decision on Forion surfaces should ask:
- Does this feel like infrastructure, or does it feel like a toy?
- Would a senior engineer take this seriously at first glance?
- Is there anything here that looks like every other "AI startup"?

Forion is not Bubble. Not Bolt. Not Replit. Not Lovable.

Forion is closer to: Vercel × Linear × AWS — but with a soul.

### For the copy team

The hardest thing to write well is something obvious after you read it. That's the target.

Every headline should feel like it was obvious — but nobody said it before Forion.

Test: read the headline, then ask "why didn't everyone say this already?" If there's a good answer, the headline is sharp. If there's no answer, it's too generic.

### For the product team

The positioning in this document reflects where Forion is going. Some features described (especially in Spark and AgentTrace sections) may not be fully shipped at Orbit launch. Do not use copy that implies features that aren't live. Mark any such section `[UPCOMING]` internally.

Orbit launch copy is the only copy that should be used externally right now.

---

*Document prepared by Claude / Antigravity × Forion*
*Do not share externally. Internal use only.*
