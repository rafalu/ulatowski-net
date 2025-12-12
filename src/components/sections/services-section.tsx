"use client";

import { AnimatedCard } from "@/components/animated-card";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServicesSectionProps {
    variant?: "summary" | "full";
}

export function ServicesSection({ variant = "full" }: ServicesSectionProps) {
    const services = [
        {
            id: "architecture",
            label: "Azure Cloud Architecture & Consulting for B2B & Fintech",
            tagline: "I build secure Azure platforms end-to-end and deliver modernized .NET systems to production.",
            accent: "from-sky-500/30 via-violet-500/30 to-fuchsia-500/30",
            icon: "☁️",
            points: [
                { icon: "🏗️", text: "Azure cloud architecture & cost optimization" },
                { icon: "🔄", text: "Modernize legacy .NET to cloud-native" },
                { icon: "🚀", text: "Migrate to Azure with minimal downtime" },
                { icon: "📡", text: "Event-driven systems & microservices" }
            ]
        },
        {
            id: "devops",
            label: "CI/CD & DevOps on Azure (Azure DevOps, GitHub Actions)",
            tagline: "CI/CD pipelines that ship code reliably — built and maintained by me.",
            accent: "from-cyan-500/25 via-sky-500/25 to-emerald-500/25",
            icon: "🚀",
            points: [
                { icon: "⚙️", text: <>DevOps & CI/CD for .NET on <a href="https://azure.microsoft.com/en-us/products/devops" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">Azure DevOps</a></> },
                { icon: "📦", text: "Advanced CI/CD for .NET applications" },
                { icon: "🧪", text: "Ephemeral environments for testing" },
                { icon: "✅", text: "Automated releases & quality gates" }
            ]
        },
        {
            id: "migration",
            label: "Azure Migration & Legacy .NET Modernization",
            tagline: "I migrate systems to Azure and deliver working IaC in production.",
            accent: "from-amber-500/25 via-orange-500/25 to-rose-500/25",
            icon: "🏗️",
            points: [
                { icon: "📄", text: "Azure Bicep IaC consultant services" },
                { icon: "👨‍💻", text: "Infrastructure as Code (Terraform/Bicep)" },
                { icon: "🔐", text: "Reproducible, secure cloud environments" },
                { icon: "📜", text: "Policy as Code & compliance" }
            ]
        },
        {
            id: "performance",
            label: "Performance & Reliability for Trading and Payment Systems",
            tagline: "I build and optimize high-performance systems that handle millions of transactions.",
            accent: "from-indigo-500/25 via-blue-500/25 to-sky-500/25",
            icon: "⚡",
            points: [
                { icon: "📉", text: "Low-latency .NET 8 system design" },
                { icon: "💳", text: "High-throughput payments platforms" },
                { icon: "🌐", text: "Distributed systems on Azure" },
                { icon: "🛡️", text: "Resilience & performance optimization" }
            ]
        }
    ] as const;

    // For summary, maybe show fewer items or just the first 2?
    // Or show all but with less detail?
    // The prompt says "fewer cards / shorter copy".
    // Let's slice to 2 for summary.
    const visibleServices = variant === "summary" ? services.slice(0, 2) : services;

    return (
        <section id="services" className="relative bg-white/5 dark:bg-slate-950/80">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-4 py-16">
                <motion.h2
                    className="text-2xl font-semibold tracking-tight text-text-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {variant === "full"
                        ? ""
                        : "Azure Cloud Architecture, DevOps & .NET Modernization"}
                </motion.h2>

                {variant === "summary" && (
                    <motion.p
                        className="mt-3 text-sm text-text-secondary max-w-2xl"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        Specialized consulting in Azure architecture, legacy modernization, DevOps automation, and building high-performance fintech systems.
                    </motion.p>
                )}

                <motion.div
                    className="mt-10 grid gap-6 md:grid-cols-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {visibleServices.map((card, idx) => (
                        <AnimatedCard
                            key={card.id}
                            index={idx}
                            className="group rounded-3xl border border-slate-200 bg-white/50 dark:border-white/10 dark:bg-white/5 p-5 backdrop-blur-xl hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_30px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={false}
                            />

                            <div className="relative flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10 text-2xl">
                                    <span aria-hidden="true">{card.icon}</span>
                                </div>
                                <div>
                                    <motion.h3
                                        className="text-lg font-bold text-text-heading md:text-xl"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.15 + 0.3 }}
                                    >
                                        {card.label}
                                    </motion.h3>
                                    <motion.p
                                        className="text-sm text-text-tertiary mt-1"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.15 + 0.35 }}
                                    >
                                        {card.tagline}
                                    </motion.p>
                                </div>
                            </div>

                            <motion.ul
                                className="relative mt-6 space-y-3 text-sm text-text-secondary md:text-[15px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: idx * 0.15 + 0.4 }}
                            >
                                {card.points.map((p, pIdx) => (
                                    <motion.li
                                        key={pIdx}
                                        className="flex gap-3 items-start"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.15 + 0.4 + pIdx * 0.1 }}
                                    >
                                        <span className="mt-1 inline-block flex-none text-base">{p.icon}</span>
                                        <span className="leading-relaxed">{p.text}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <Link
                                href="/contact"
                                className="relative mt-4 inline-flex items-center gap-1 text-sm text-sky-600 dark:text-sky-200/90 hover:text-sky-700 dark:hover:text-sky-300 transition-colors font-medium"
                            >
                                Get in touch
                                <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                        </AnimatedCard>
                    ))}
                </motion.div>

                {/* AI-Driven Delivery Section */}
                <motion.div
                    className="mt-10 rounded-2xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 p-8 backdrop-blur-xl"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/20 ring-1 ring-sky-400/30 text-2xl">
                            <span aria-hidden="true">🤖</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-text-heading">AI-Driven Delivery</h3>
                        </div>
                    </div>
                    <p className="text-base text-text-body leading-relaxed">
                        AI is part of my workflow end-to-end. It helps me design, code, debug and ship features
                        ridiculously fast — even in stacks outside my primary domain. That means faster delivery,
                        fewer bottlenecks and more value per sprint.
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:text-sm text-text-secondary">
                        <span className="uppercase tracking-wide text-[0.7rem] text-text-tertiary mr-1">
                            AI-assisted work in:
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                            <span className="text-base">⚛️</span>
                            <span>React</span>
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                            <span className="text-base">▲</span>
                            <span>Next.js</span>
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                            <span className="text-[0.75rem] font-semibold">TS</span>
                            <span>TypeScript</span>
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-emerald-400/50">
                            <span className="text-base">🤖</span>
                            <span>Backends in .NET / Azure</span>
                        </span>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
