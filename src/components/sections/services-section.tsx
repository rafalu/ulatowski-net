"use client";

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
                        <motion.article
                            key={card.id}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dark:bg-slate-900/70 p-5 pb-6 backdrop-blur-xl flex flex-col"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.15 + idx * 0.08,
                                type: "spring",
                                stiffness: 200
                            }}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 24px 60px rgba(15,23,42,0.9)"
                            }}
                        >
                            <div
                                className={`pointer-events-none absolute inset-x-0 -top-24 h-44 bg-gradient-to-br ${card.accent} opacity-30 blur-3xl`}
                            />

                            <div className="relative flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black/60 ring-1 ring-white/10 text-2xl">
                                    <span aria-hidden="true">{card.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-text-heading md:text-xl">{card.label}</h3>
                                    <p className="text-sm text-text-tertiary mt-1">{card.tagline}</p>
                                </div>
                            </div>

                            <ul className="relative mt-6 space-y-3 text-sm text-text-secondary md:text-[15px]">
                                {card.points.map((p) => (
                                    <li key={p.text} className="flex gap-3 items-start">
                                        <span className="mt-1 inline-block flex-none text-base">{p.icon}</span>
                                        <span className="leading-relaxed">{p.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className="relative mt-4 inline-flex items-center gap-1 text-sm text-sky-600 dark:text-sky-200/90 hover:text-sky-700 dark:hover:text-sky-300 transition-colors font-medium"
                            >
                                Get in touch
                                <span className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
