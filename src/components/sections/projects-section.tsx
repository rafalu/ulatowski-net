"use client";

import { motion } from "framer-motion";
import { Rocket, Server, Zap } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
    const projects = [
        {
            title: "From Monolith Toward a Cloud-Native Architecture on Azure",
            tag: "Architecture · Cloud · Reliability",
            icon: <Server className="size-5" />,
            bullets: [
                "Led a long-term evolution of a legacy .NET monolith into a cloud-native service ecosystem on Azure.",
                <>Introduced clear domain boundaries, asynchronous communication patterns and automated infrastructure as code with <a href="https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">Bicep</a> for Azure App Service, SQL, Azure Service Bus and secure key management.</>,
                "Outcome: a cleaner architecture, predictable releases and a platform that scales without friction.",
            ],
        },
        {
            title: "End-to-End Delivery Platform on Azure DevOps",
            tag: "DevOps · Engineering Excellence · Developer Experience",
            icon: <Rocket className="size-5" />,
            bullets: [
                <>Designed a unified CI/CD experience using <a href="https://azure.microsoft.com/en-us/products/devops" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-300 hover:underline">Azure DevOps</a> pipelines and GitHub Actions integration with reusable YAML templates.</>,
                "Implemented CI/CD for .NET microservices enabling ephemeral test environments with App Service + SQL for E2E validation.",
                "Outcome: consistent delivery, reduced cognitive load for developers and notably faster iteration cycles.",
            ],
        },
        {
            title: "High-Throughput Trading & Payments Systems — Performance & Systems Design",
            tag: "Distributed Systems · Performance · Low-Latency",
            icon: <Zap className="size-5" />,
            bullets: [
                "Worked on cloud-backed trading and payment platforms, focusing on low-latency .NET 8 APIs, Azure Service Bus messaging, and fault-tolerance.",
                "Improved critical execution paths for high-throughput trading systems, optimized message flows, and strengthened observability.",
                "Outcome: faster processing, higher resilience and clearer operational insights across distributed services.",
            ],
        },
    ];

    const visibleProjects = projects;

    return (
        <section id="projects" className="relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-4 py-16">
                <motion.h2
                    className="text-2xl font-semibold tracking-tight text-text-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Real Projects: Systems I Built and Shipped to Production
                </motion.h2>

                <motion.p
                    className="text-text-secondary mt-1 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    How I deliver complete solutions — from code to production.
                </motion.p>

                <motion.div
                    className="mt-8 grid md:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {visibleProjects.map((p, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30, rotateX: 15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                rotateX: -2,
                                transition: { duration: 0.3 }
                            }}
                            className="group rounded-3xl border border-slate-200 bg-white/50 dark:border-white/10 dark:bg-white/5 p-5 backdrop-blur-xl hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_30px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={false}
                            />

                            <motion.div
                                className="text-[11px] uppercase tracking-wider text-sky-600 dark:text-sky-200/90 mb-2 font-medium"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.15 + 0.2 }}
                            >
                                {p.tag}
                            </motion.div>

                            <motion.h3
                                className="text-lg font-semibold text-text-heading mb-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 + 0.3 }}
                            >
                                {p.title}
                            </motion.h3>

                            <motion.ul
                                className="space-y-2 text-sm text-text-secondary list-disc list-inside"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.15 + 0.4 }}
                            >
                                {p.bullets.map((b, j) => (
                                    <motion.li
                                        key={j}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.15 + 0.4 + j * 0.1 }}
                                    >
                                        {b}
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <Link
                                href="/about"
                                className="mt-4 inline-flex items-center gap-1 text-sm text-sky-600 dark:text-sky-200/90 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors font-medium"
                            >
                                Learn more about my experience
                                <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
